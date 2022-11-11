export class Preconnect {
    /**
     * @param {!Document} doc
     */
    constructor(doc: Document);
    /** @private @const {!Document} */
    private doc_;
    /**
     * @param {string} url
     */
    preconnect(url: string): void;
    /**
     * @param {string} url
     */
    dnsPrefetch(url: string): void;
    /**
     * @param {string} url
     */
    prefetch(url: string): void;
    /**
     * @param {string} url
     * @param {string} as
     */
    preload(url: string, as: string): void;
    /**
     * @param {string} url
     * @param {string} rel
     * @param {?string=} as
     * @private
     */
    private pre_;
}
//# sourceMappingURL=preconnect.d.ts.map