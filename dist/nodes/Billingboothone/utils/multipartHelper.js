"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMultipartFormData = buildMultipartFormData;
function buildMultipartFormData(binaryBuffer, fileName, mimeType) {
    const boundary = `----FormBoundary${Date.now()}`;
    const preamble = `--${boundary}\r\n` +
        `Content-Disposition: form-data; name="file"; filename="${fileName}"\r\n` +
        `Content-Type: ${mimeType}\r\n\r\n`;
    const closing = `\r\n--${boundary}--\r\n`;
    const body = Buffer.concat([
        Buffer.from(preamble, 'utf8'),
        binaryBuffer,
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
//# sourceMappingURL=multipartHelper.js.map