export class Graypane {
    /**
     * @param {!Document} doc
     */
    constructor(doc: Document);
    /** @private @const {!Document} */
    private doc_;
    /** @private @const {!Element} */
    private element_;
    /** @private {?Window} */
    private popupWindow_;
    /**
     * Shows the graypane.
     * @param {?Window|undefined} popupWindow
     * @return {!Promise}
     */
    show(popupWindow: (Window | undefined) | null): Promise<any>;
    /**
     * Hides the graypane.
     * @return {!Promise|undefined}
     */
    hide(): Promise<any> | undefined;
}
//# sourceMappingURL=graypane.d.ts.map