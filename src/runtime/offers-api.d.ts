export class OffersApi {
    /**
     * @param {!../model/page-config.PageConfig} config
     * @param {!./fetcher.Fetcher} fetcher
     */
    constructor(config: any, fetcher: any);
    /** @private @const {!../model/page-config.PageConfig} */
    private config_;
    /** @private @const {!./fetcher.Fetcher} */
    private fetcher_;
    /**
     * @param {?string=} productId
     * @return {!Promise<!Array<!../api/offer.Offer>>}
     */
    getOffers(productId?: (string | null) | undefined): Promise<Array<any>>;
    /**
     * @param {string} productId
     * @return {!Promise<!Array<!../api/offer.Offer>>}
     * @private
     */
    private fetch_;
}
//# sourceMappingURL=offers-api.d.ts.map