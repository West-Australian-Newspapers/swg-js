/**
 * @param {!Document|!Window|!Doc} input
 * @return {!Doc}
 */
export function resolveDoc(input: Document | Window | Doc): Doc;
/**
 * @interface
 */
export class Doc {
    /**
     * @return {!Window}
     */
    getWin(): Window;
    /**
     * The `Document` node or analog.
     * @return {!Node}
     */
    getRootNode(): Node;
    /**
     * The `Document.documentElement` element or analog.
     * @return {!Element}
     */
    getRootElement(): Element;
    /**
     * The `Document.head` element or analog. Returns `null` if not available
     * yet.
     * @return {!Element}
     */
    getHead(): Element;
    /**
     * The `Document.body` element or analog. Returns `null` if not available
     * yet.
     * @return {?Element}
     */
    getBody(): Element | null;
    /**
     * Whether the document has been fully constructed.
     * @return {boolean}
     */
    isReady(): boolean;
    /**
     * Resolved when document has been fully constructed.
     * @return {!Promise}
     */
    whenReady(): Promise<any>;
    /**
     * Adds the element to the fixed layer.
     * @param {!Element} unusedElement
     * @return {!Promise}
     *
     * This is a no-op for except in AMP on iOS < 13.0.
     */
    addToFixedLayer(unusedElement: Element): Promise<any>;
}
/** @implements {Doc} */
export class GlobalDoc implements Doc {
    /**
     * @param {!Window|!Document} winOrDoc
     */
    constructor(winOrDoc: Window | Document);
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!Document} */
    private doc_;
    /** @override */
    override getWin(): Window;
    /** @override */
    override getRootNode(): Document;
    /** @override */
    override getRootElement(): HTMLElement;
    /** @override */
    override getHead(): Element;
    /** @override */
    override getBody(): HTMLElement;
    /** @override */
    override isReady(): boolean;
    /** @override */
    override whenReady(): Promise<Document>;
    /** @override */
    override addToFixedLayer(unusedElement: any): Promise<void>;
}
//# sourceMappingURL=doc.d.ts.map