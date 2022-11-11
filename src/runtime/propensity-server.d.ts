/**
 * Implements interface to Propensity server
 */
export class PropensityServer {
    /**
     * Page configuration is known when Propensity API
     * is available, publication ID is therefore used
     * in constructor for the server interface.
     * @param {!Window} win
     * @param {!./deps.DepsDef} deps
     * @param {!./fetcher.Fetcher} fetcher
     */
    constructor(win: Window, deps: any, fetcher: any);
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {string} */
    private publicationId_;
    /** @private {?string} */
    private clientId_;
    /** @private @const {!./fetcher.Fetcher} */
    private fetcher_;
    /** @private @const {number} */
    private version_;
    /**
     * @private
     * @return {string}
     */
    private getDocumentCookie_;
    /**
     * Returns the client ID to be used.
     * @return {?string}
     * @private
     */
    private getClientId_;
    /**
     * @private
     * @param {string} url
     * @return {string}
     */
    private propensityUrl_;
    /**
     * @param {string} state
     * @param {?string} productsOrSkus
     */
    sendSubscriptionState(state: string, productsOrSkus: string | null): any;
    /**
     * @param {string} event
     * @param {?string} context
     * @private
     */
    private sendEvent_;
    /**
     *
     * @param {!../api/client-event-manager-api.ClientEvent} event
     */
    handleClientEvent_(event: any): void;
    /**
     * @param {JsonObject} response
     * @return {!../api/propensity-api.PropensityScore}
     */
    parsePropensityResponse_(response: JsonObject): any;
    /**
     * @param {string} referrer
     * @param {string} type
     * @return {?Promise<../api/propensity-api.PropensityScore>}
     */
    getPropensity(referrer: string, type: string): Promise<any> | null;
}
//# sourceMappingURL=propensity-server.d.ts.map