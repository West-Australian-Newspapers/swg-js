/**
 * Converts a string which holds 8-bit code points, such as the result of atob,
 * into a Uint8Array with the corresponding bytes.
 * If you have a string of characters, you probably want to be using utf8Encode.
 * @param {string} str
 * @return {!Uint8Array}
 */
export function stringToBytes(str: string): Uint8Array;
/**
 * Converts a 8-bit bytes array into a string
 * @param {!Uint8Array} bytes
 * @return {string}
 */
export function bytesToString(bytes: Uint8Array): string;
/**
 * Interpret a byte array as a UTF-8 string.
 * @param {!Uint8Array} bytes
 * @return {string}
 */
export function utf8DecodeSync(bytes: Uint8Array): string;
/**
 * Turn a string into UTF-8 bytes.
 * @param {string} string
 * @return {!Uint8Array}
 */
export function utf8EncodeSync(string: string): Uint8Array;
/**
 * Converts a string which is in base64url encoding into a Uint8Array
 * containing the decoded value.
 * @param {string} str
 * @return {!Uint8Array}
 */
export function base64UrlDecodeToBytes(str: string): Uint8Array;
/**
 * Converts a bytes array into base64url encoded string.
 * base64url is defined in RFC 4648. It is sometimes referred to as "web safe".
 * @param {!Uint8Array} bytes
 * @return {string}
 */
export function base64UrlEncodeFromBytes(bytes: Uint8Array): string;
//# sourceMappingURL=bytes.d.ts.map