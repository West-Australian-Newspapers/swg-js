/**
 * The class for building friendly iframe.
 */
export class FriendlyIframe {
    /**
     * @param {!Document} doc
     * @param {!Object<string, string|number>=} attrs
     */
    constructor(doc: Document, attrs?: {
        [x: string]: string | number;
    } | undefined);
    /** @private @const {!HTMLIFrameElement} */
    private iframe_;
    /** @private @const {!Promise} */
    private ready_;
    /**
     * When promise is resolved.
     * @return {!Promise}
     */
    whenReady(): Promise<any>;
    /**
     * Gets the iframe element.
     * @return {!HTMLIFrameElement}
     */
    getElement(): HTMLIFrameElement;
    /**
     * Gets the document object of the iframe element.
     * @return {!Document}
     */
    getDocument(): Document;
    /**
     * Gets the body of the iframe.
     * @return {!Element}
     */
    getBody(): Element;
    /**
     * Whether the iframe is connected.
     * @return {boolean}
     */
    isConnected(): boolean;
}
//# sourceMappingURL=friendly-iframe.d.ts.map