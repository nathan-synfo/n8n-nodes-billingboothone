type BinaryBuffer = {
    length: number;
};
export declare function buildMultipartFormData(binaryBuffer: unknown, fileName: string, mimeType: string): {
    body: BinaryBuffer;
    boundary: string;
    headers: {
        [key: string]: string;
    };
};
export {};
