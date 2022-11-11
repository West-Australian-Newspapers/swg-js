/**
 */
export class Callbacks {
    /** @private @const {!Object<CallbackId, function(*)>} */
    private callbacks_;
    /** @private @const {!Object<CallbackId, *>} */
    private resultBuffer_;
    /** @private {?Promise} */
    private paymentResponsePromise_;
    /**
     * @param {function(!Promise<!../api/entitlements.Entitlements>)} callback
     */
    setOnEntitlementsResponse(callback: any): void;
    /**
     * @param {!Promise<!../api/entitlements.Entitlements>} promise
     */
    triggerEntitlementsResponse(promise: any): boolean;
    /**
     * @return {boolean}
     */
    hasEntitlementsResponsePending(): boolean;
    /**
     * @param {function(!../api/subscriptions.LoginRequest)} callback
     */
    setOnLoginRequest(callback: any): void;
    /**
     * @param {!../api/subscriptions.LoginRequest} request
     * @return {boolean} Whether the callback has been found.
     */
    triggerLoginRequest(request: any): boolean;
    /**
     * @param {function()} callback
     */
    setOnLinkProgress(callback: () => any): void;
    /**
     * @return {boolean} Whether the callback has been found.
     */
    triggerLinkProgress(): boolean;
    /**
     */
    resetLinkProgress(): void;
    /**
     * @param {function()} callback
     */
    setOnLinkComplete(callback: () => any): void;
    /**
     * @return {boolean} Whether the callback has been found.
     */
    triggerLinkComplete(): boolean;
    /**
     * @return {boolean}
     */
    hasLinkCompletePending(): boolean;
    /**
     * @param {function(!../ui/activity-iframe-view.ActivityIframeView)} callback
     */
    setOnPayConfirmOpened(callback: any): void;
    /**
     * @param {!../ui/activity-iframe-view.ActivityIframeView} activityIframeView
     * @return {boolean} Whether the callback has been found.
     */
    triggerPayConfirmOpened(activityIframeView: any): boolean;
    /**
     * @param {function()} callback
     */
    setOnSubscribeRequest(callback: () => any): void;
    /**
     * @return {boolean} Whether the callback has been found.
     */
    triggerSubscribeRequest(): boolean;
    /**
     * @return {boolean}
     */
    hasSubscribeRequestCallback(): boolean;
    /**
     * @param {function()} callback
     */
    setOnOffersFlowRequest(callback: () => any): void;
    /**
     * @return {boolean} Whether the callback has been found.
     */
    triggerOffersFlowRequest(): boolean;
    /**
     * @return {boolean}
     */
    hasOffersFlowRequestCallback(): boolean;
    /**
     * @param {function(!Promise<!../api/subscribe-response.SubscribeResponse>)} callback
     */
    setOnSubscribeResponse(callback: any): void;
    /**
     * @param {function(!Promise<!../api/subscribe-response.SubscribeResponse>)} callback
     */
    setOnContributionResponse(callback: any): void;
    /**
     * @param {function(!Promise<!../api/subscribe-response.SubscribeResponse>)} callback
     */
    setOnPaymentResponse(callback: any): void;
    /**
     * @param {!Promise<!../api/subscribe-response.SubscribeResponse>} responsePromise
     * @return {boolean} Whether the callback has been found.
     */
    triggerPaymentResponse(responsePromise: any): boolean;
    /**
     * @return {boolean}
     */
    hasPaymentResponsePending(): boolean;
    /**
     * @param {function({flow: string, data: !Object})} callback
     */
    setOnFlowStarted(callback: (arg0: {
        flow: string;
        data: any;
    }) => any): void;
    /**
     * @param {string} flow
     * @param {!Object=} data
     * @return {boolean} Whether the callback has been found.
     */
    triggerFlowStarted(flow: string, data?: any | undefined): boolean;
    /**
     * @param {function({flow: string, data: !Object})} callback
     */
    setOnFlowCanceled(callback: (arg0: {
        flow: string;
        data: any;
    }) => any): void;
    /**
     * @param {string} flow
     * @param {!Object=} data
     * @return {boolean} Whether the callback has been found.
     */
    triggerFlowCanceled(flow: string, data?: any | undefined): boolean;
    /**
     * @param {!CallbackId} id
     * @param {function(?)} callback
     * @private
     */
    private setCallback_;
    /**
     * @param {!CallbackId} id
     * @param {*} data
     * @return {boolean}
     * @private
     */
    private trigger_;
    /**
     * @param {!CallbackId} id
     * @private
     */
    private resetCallback_;
    /**
     * @param {!CallbackId} id
     * @param {function(*)} callback
     * @param {*} data
     * @private
     */
    private executeCallback_;
}
//# sourceMappingURL=callbacks.d.ts.map