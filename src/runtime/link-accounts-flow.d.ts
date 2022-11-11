/**
 * The flow to link an existing publisher account to an existing google account.
 */
export class LinkbackFlow {
    /**
     * @param {!./deps.DepsDef} deps
     */
    constructor(deps: any);
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {!../model/page-config.PageConfig} */
    private pageConfig_;
    /** @private @const {!../components/dialog-manager.DialogManager} */
    private dialogManager_;
    /**
     * Starts the Link account flow.
     * @param {{ampReaderId: (string|undefined)}=} params
     * @return {!Promise}
     */
    start(params?: {
        ampReaderId: (string | undefined);
    } | undefined): Promise<any>;
}
/**
 * The class for Link accounts flow.
 */
export class LinkCompleteFlow {
    /**
     * @param {!./deps.DepsDef} deps
     */
    static configurePending(deps: any): void;
    /**
     * @param {!./deps.DepsDef} deps
     * @param {?Object} response
     */
    constructor(deps: any, response: any | null);
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!./client-config-manager.ClientConfigManager} */
    private clientConfigManager_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {!../components/dialog-manager.DialogManager} */
    private dialogManager_;
    /** @private @const {!./entitlements-manager.EntitlementsManager} */
    private entitlementsManager_;
    /** @private @const {!./callbacks.Callbacks} */
    private callbacks_;
    /** @private {?ActivityIframeView} */
    private activityIframeView_;
    /** @private {!Object} */
    private response_;
    /** @private {?function()} */
    private completeResolver_;
    /** @private @const {!Promise} */
    private completePromise_;
    /**
     * Starts the Link account flow.
     * @return {!Promise}
     */
    start(): Promise<any>;
    /**
     * @param {!Object} response
     * @param {boolean} success
     * @private
     */
    private complete_;
    /** @return {!Promise} */
    whenComplete(): Promise<any>;
}
/**
 * The flow to save subscription information from an existing publisher account
 * to an existing google account.  The accounts may or may not already be
 * linked.
 */
export class LinkSaveFlow {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {!../api/subscriptions.SaveSubscriptionRequestCallback} callback
     */
    constructor(deps: any, callback: any);
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {!../components/dialog-manager.DialogManager} */
    private dialogManager_;
    /** @private {!../api/subscriptions.SaveSubscriptionRequestCallback} */
    private callback_;
    /** @private {?Promise<!../api/subscriptions.SaveSubscriptionRequest>} */
    private requestPromise_;
    /** @private {?Promise} */
    private openPromise_;
    /** @private {?ActivityIframeView} */
    private activityIframeView_;
    /**
     * @return {?Promise<!../api/subscriptions.SaveSubscriptionRequest>}
     * @package Visible for testing.
     */
    getRequestPromise(): Promise<any> | null;
    /**
     * @private
     */
    private complete_;
    /**
     * @param {!Object} result
     * @return {!Promise<boolean>}
     * @private
     */
    private handleLinkSaveResponse_;
    /**
     * @param {LinkingInfoResponse} response
     * @private
     */
    private sendLinkSaveToken_;
    /**
     * @return {?Promise}
     */
    /**
     * Starts the save subscription
     * @return {!Promise}
     */
    start(): Promise<any>;
}
//# sourceMappingURL=link-accounts-flow.d.ts.map