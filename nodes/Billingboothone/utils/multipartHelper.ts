// Type declaration for Buffer without importing
type BinaryBuffer = { length: number };

declare const Buffer: {
	from(input: string, encoding: string): BinaryBuffer;
	concat(chunks: Array<unknown>): BinaryBuffer;
};

/**
 * Builds a multipart/form-data body for file uploads without external dependencies
 * Uses global Buffer which is available in Node.js without imports
 *
 * @param binaryBuffer - The file content as a Buffer
 * @param fileName - Name of the file
 * @param mimeType - MIME type of the file
 * @returns Object containing the multipart body buffer, boundary, and headers
 */
export function buildMultipartFormData(
	binaryBuffer: unknown,
	fileName: string,
	mimeType: string
): {
	body: BinaryBuffer;
	boundary: string;
	headers: { [key: string]: string };
} {
	// Generate unique boundary
	const boundary = `----FormBoundary${Date.now()}`;

	// Build multipart body parts
	const preamble = `--${boundary}\r\n` +
		`Content-Disposition: form-data; name="file"; filename="${fileName}"\r\n` +
		`Content-Type: ${mimeType}\r\n\r\n`;

	const closing = `\r\n--${boundary}--\r\n`;

	// Concatenate all parts using global Buffer
	const body = Buffer.concat([
		Buffer.from(preamble, 'utf8'),
		binaryBuffer as unknown as BinaryBuffer,
		Buffer.from(closing, 'utf8'),
	]);

	return {
		body,
		boundary,
		headers: {
			'Content-Type': `multipart/form-data; boundary=${boundary}`,
			'Content-Length': body.length.toString(),
		},
	};
}
