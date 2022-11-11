/**
 * Whether the document is ready.
 * @param {!Document} doc
 * @return {boolean}
 */
export function isDocumentReady(doc: Document): boolean;
/**
 * Calls the callback when document is ready.
 * @param {!Document} doc
 * @param {function(!Document)} callback
 */
export function onDocumentReady(doc: Document, callback: (arg0: Document) => any): void;
/**
 * Returns a promise that is resolved when document is ready.
 * @param {!Document} doc
 * @return {!Promise<!Document>}
 */
export function whenDocumentReady(doc: Document): Promise<Document>;
/**
 * Returns a promise that is resolved when document is complete.
 * @param {!Document} doc
 * @return {!Promise<!Document>}
 */
export function whenDocumentComplete(doc: Document): Promise<Document>;
//# sourceMappingURL=document-ready.d.ts.map