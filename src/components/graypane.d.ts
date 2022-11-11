export class Graypane {
    /**
     * @param {!../model/doc.Doc} doc
     * @param {number} zIndex
     */
    constructor(doc: any, zIndex: number);
    /** @private @const {!../model/doc.Doc} */
    private doc_;
    /** @private @const {!Element} */
    private fadeBackground_;
    /**
     * @return {!Element}
     */
    getElement(): Element;
    /**
     * @return {boolean}
     */
    isAttached(): boolean;
    /**
     * Attaches the graypane to the document.
     */
    attach(): void;
    /**
     * Detaches the graypane to the document.
     */
    destroy(): void;
    /**
     * Shows the graypane.
     * @param {boolean=} animated
     * @return {!Promise|undefined}
     */
    show(animated?: boolean | undefined): Promise<any> | undefined;
    /**
     * Hides the graypane.
     * @param {boolean=} animated
     * @return {!Promise|undefined}
     */
    hide(animated?: boolean | undefined): Promise<any> | undefined;
}
//# sourceMappingURL=graypane.d.ts.map