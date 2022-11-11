export type PayOptionsDef = {
    forceRedirect: (boolean | undefined);
    forceDisableNative: (boolean | undefined);
};
/**
 * @typedef {{
 *   forceRedirect: (boolean|undefined),
 *   forceDisableNative: (boolean|undefined),
 * }}
 */
export let PayOptionsDef: any;
export namespace PAY_ORIGIN {
    const PRODUCTION: string;
    const SANDBOX: string;
}
/**
 */
export class PayClient {
    /**
     * @param {!./deps.DepsDef} deps
     */
    constructor(deps: any);
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private {?function(!Promise<!PaymentData>)} */
    private responseCallback_;
    /** @private {?PaymentDataRequest} */
    private request_;
    /** @private {?Promise<!PaymentData>} */
    private response_;
    /** @private @const {!./analytics-service.AnalyticsService} */
    private analytics_;
    /** @private @const {!RedirectVerifierHelper} */
    private redirectVerifierHelper_;
    /** @private {?PaymentsAsyncClient} */
    private client_;
    /** @private @const {!Preconnect} */
    private preconnect_;
    /** @private @const {!./client-event-manager.ClientEventManager} */
    private eventManager_;
    /**
     * @param {!PaymentOptions} options
     * @param {string} googleTransactionId
     * @param {function(!Promise<!PaymentData>)} handler
     * @return {!PaymentsAsyncClient}
     * @private
     */
    private createClient_;
    /**
     * @param {!../utils/preconnect.Preconnect} pre
     */
    preconnect(pre: any): void;
    /**
     * Initializes Payments client.
     */
    initializePaymentsClient_(): void;
    /**
     * Detects if the window is started from a Pay redirect by
     * checking window's hash for Web Activities information.
     */
    pageIsInitializedFromPayRedirect_(): boolean;
    /**
     * @return {string}
     */
    getType(): string;
    /**
     * @param {!PaymentDataRequest} paymentRequest
     * @param {!PayOptionsDef=} options
     */
    start(paymentRequest: PaymentDataRequest, options?: PayOptionsDef | undefined): Promise<any>;
    /**
     * @param {function(!Promise<!PaymentData>)} callback
     */
    onResponse(callback: (arg0: Promise<PaymentData>) => any): void;
    /**
     * @param {!Promise<!PaymentData>} responsePromise
     * @private
     */
    private handleResponse_;
    /**
     * @param {!Promise<!PaymentData>} response
     * @param {?PaymentDataRequest} request
     * @return {!Promise<!PaymentData>}
     * @private
     */
    private convertResponse_;
    /**
     * @return {!Window}
     * @private
     */
    private top_;
}
/**
 * This helper generates key/verifier pair for the redirect mode. When the
 * redirect mode is used, the encrypted payload is returned via nivigation URL.
 * This payload need to be decrypted and to avoid session fixation attacks, a
 * verifier has to be used. This redirect verifier is not the only session
 * verifier in use: we also use GAIA. However, we have to fallback to this
 * verifier when GAIA is not available.
 *
 * @package Visible for testing only.
 */
export class RedirectVerifierHelper {
    /**
     * @param {!Window} win
     */
    constructor(win: Window);
    /** @private @const {!Window} */
    private win_;
    /** @private {boolean} */
    private pairCreated_;
    /** @private {?RedirectVerifierPairDef} */
    private pair_;
    /** @private {?Promise<?RedirectVerifierPairDef>} */
    private pairPromise_;
    /**
     * To avoid popup blockers, the key/verifier pair is created as soon as
     * possible.
     * @return {?Promise}
     */
    prepare(): Promise<any> | null;
    /**
     * Calls the provided callback with the generated redirect verifier. This
     * API is sync/async, which is a big anti-pattern. However, it's necessary
     * to reduce the risk of popup blockers. If the verifier is already available
     * (see `prepare` method), the callback will be called immediately and thus
     * in the same event loop as the user action.
     *
     * The return verifier could be `null`. This could mean either that its
     * generation failed, or if the platform doesn't support necessary APIs, such
     * as Web Crypto. The redirect can still proceed and try to fallback on GAIA
     * as a redirect verifier. The set of platforms where GAIA is not available
     * and the redirect verifier cannot be created is negligible.
     *
     * The key corresponding to the returned verifier is stored in the session
     * storage and can be later restored using `restoreKey` method.
     *
     * @param {function(?string)} callback
     */
    useVerifier(callback: (arg0: string | null) => any): void;
    /**
     * Restores the redirect key from the session storage. The key may be null.
     * @return {?string}
     */
    restoreKey(): string | null;
    /**
     * @param {function(?RedirectVerifierPairDef)} callback
     * @return {?Promise}
     * @private
     */
    private getOrCreatePair_;
    /**
     * @private
     */
    private createPair_;
}
//# sourceMappingURL=pay-client.d.ts.map