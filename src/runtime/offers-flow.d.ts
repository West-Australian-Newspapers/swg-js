/**
 * The class for Offers flow.
 */
export class OffersFlow {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {!../api/subscriptions.OffersRequest|undefined} options
     */
    constructor(deps: any, options: any);
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {!../components/dialog-manager.DialogManager} */
    private dialogManager_;
    /** @private @const {!../runtime/client-event-manager.ClientEventManager} */
    private eventManager_;
    /** @private @const {!./client-config-manager.ClientConfigManager} */
    private clientConfigManager_;
    activityIframeView_: any;
    /** @private  @const {!Array<!string>} */
    private skus_;
    /** @private @const {!Promise<!../model/client-config.ClientConfig>} */
    private clientConfig_;
    /** @private @const {!Promise<?ActivityIframeView>} */
    private activityIframeViewPromise_;
    /**
     * @param {SkuSelectedResponse} response
     * @private
     */
    private startPayFlow_;
    /**
     * @param {AlreadySubscribedResponse} response
     * @private
     */
    private handleLinkRequest_;
    /**
     * @param {ViewSubscriptionsResponse} response
     * @private
     */
    private startNativeFlow_;
    /**
     * Starts the offers flow or alreadySubscribed flow.
     * @return {!Promise}
     */
    start(): Promise<any>;
    /**
     * Returns whether this flow is configured as enabled, not showing
     * even on explicit start when flag is configured false.
     *
     * @param {!../model/client-config.ClientConfig} clientConfig
     * @return {boolean}
     */
    shouldShow_(clientConfig: any): boolean;
    /**
     * Gets display configuration options for the opened dialog. Uses the
     * responsive desktop design properties if the updated offer flows UI (for
     * SwG Basic) is enabled. Permits override to allow scrolling.
     * @param {!../model/client-config.ClientConfig} clientConfig
     * @param {boolean} shouldAllowScroll
     * @return {!../components/dialog.DialogConfig}
     */
    getDialogConfig_(clientConfig: any, shouldAllowScroll: boolean): any;
    /**
     * Returns the full URL that should be used for the activity iFrame view.
     * @param {!../model/client-config.ClientConfig} clientConfig
     * @param {!../model/page-config.PageConfig} pageConfig
     * @return {string}
     */
    getUrl_(clientConfig: any, pageConfig: any): string;
    /**
     * Shows "no subscription found" on activity iFrame view.
     */
    showNoEntitlementFoundToast(): void;
}
/**
 * The class for subscribe option flow.
 */
export class SubscribeOptionFlow {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {!../api/subscriptions.OffersRequest|undefined} options
     */
    constructor(deps: any, options: any);
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!../api/subscriptions.OffersRequest|undefined} */
    private options_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {!../components/dialog-manager.DialogManager} */
    private dialogManager_;
    /** @private @const {!../runtime/client-event-manager.ClientEventManager} */
    private eventManager_;
    /** @private @const {!ActivityIframeView} */
    private activityIframeView_;
    /**
     * Starts the offers flow or alreadySubscribed flow.
     * @return {!Promise}
     */
    start(): Promise<any>;
    /**
     * @param {SubscribeResponse} response
     * @private
     */
    private maybeOpenOffersFlow_;
}
/**
 * The class for Abbreviated Offer flow.
 *
 */
export class AbbrvOfferFlow {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {!../api/subscriptions.OffersRequest=} options
     */
    constructor(deps: any, options?: {});
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!../api/subscriptions.OffersRequest|undefined} */
    private options_;
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {!../components/dialog-manager.DialogManager} */
    private dialogManager_;
    /** @private @const {!../runtime/client-event-manager.ClientEventManager} */
    private eventManager_;
    /** @private @const {!ActivityIframeView} */
    private activityIframeView_;
    /**
     * @param {AlreadySubscribedResponse} response
     * @private
     */
    private handleLinkRequest_;
    /**
     * Starts the offers flow
     * @return {!Promise}
     */
    start(): Promise<any>;
}
//# sourceMappingURL=offers-flow.d.ts.map