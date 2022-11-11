/**
 * Add attributes to an element.
 * @param {!Element} element
 * @param {!Object<string, string|number|boolean|!Object<string, string|number|boolean>>} attributes
 * @return {!Element} updated element.
 */
export function addAttributesToElement(element: Element, attributes: {
    [x: string]: string | number | boolean | {
        [x: string]: string | number | boolean;
    };
}): Element;
/**
 * Create a new element on document with specified tagName and attributes.
 * @param {!Document} doc
 * @param {string} tagName
 * @param {!Object<string, string>} attributes
 * @param {?(string|!Node|!ArrayLike<!Node>|!Array<!Node>)=} content
 * @return {!Element} created element.
 */
export function createElement(doc: Document, tagName: string, attributes: {
    [x: string]: string;
}, content?: ((string | Node | ArrayLike<Node> | Array<Node>) | null) | undefined): Element;
/**
 * Removes the element.
 * @param {!Element} element
 */
export function removeElement(element: Element): void;
/**
 * Removes all children from the parent element.
 * @param {!Element} parent
 */
export function removeChildren(parent: Element): void;
/**
 * Injects the provided styles in the HEAD section of the document.
 * @param {!../model/doc.Doc} doc The document object.
 * @param {string} styleText The style string.
 * @return {!Element}
 */
export function injectStyleSheet(doc: any, styleText: string): Element;
/**
 * Whether the element have a next node in the document order.
 * This means either:
 *  a. The element itself has a nextSibling.
 *  b. Any of the element ancestors has a nextSibling.
 * @param {!Element} element
 * @param {?Node=} stopNode
 * @return {boolean}
 */
export function hasNextNodeInDocumentOrder(element: Element, stopNode?: (Node | null) | undefined): boolean;
/**
 * Polyfill of the `Node.isConnected` API. See
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected.
 * @param {!Node} node
 * @return {boolean}
 */
export function isConnected(node: Node): boolean;
/**
 * Returns true if current browser is a legacy version of Edge.
 *
 * Starting in January 2020, new versions of Edge will use the Chromium engine.
 * These versions won't include the word "Edge" in their useragent.
 * Instead, they'll include the word "Edg".
 * So far, it seems safe to avoid detecting these new versions of Edge.
 * @param {!Window} win
 * @return {boolean}
 */
export function isLegacyEdgeBrowser(win: Window): boolean;
export type styleLinkAttrs = string;
export namespace styleLinkAttrs {
    const rel: string;
    const type: string;
}
/** @const {string} */
export const styleType: "text/css";
/** @const {string} */
export const styleExistsQuerySelector: "link[rel=stylesheet][href]";
//# sourceMappingURL=dom.d.ts.map