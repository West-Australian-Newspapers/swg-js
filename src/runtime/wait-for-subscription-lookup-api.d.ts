export class WaitForSubscriptionLookupApi {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {?Promise} accountPromise
     */
    constructor(deps: any, accountPromise: Promise<any> | null);
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {!../components/dialog-manager.DialogManager} */
    private dialogManager_;
    /** @private {?Promise} */
    private openViewPromise_;
    /** @private {!Promise} */
    private accountPromise_;
    /** @private @const {!ActivityIframeView} */
    private activityIframeView_;
    /**
     * Starts the Login Flow.
     * @return {!Promise}
     */
    start(): Promise<any>;
}
//# sourceMappingURL=wait-for-subscription-lookup-api.d.ts.map