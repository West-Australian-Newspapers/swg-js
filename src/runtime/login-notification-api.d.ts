export class LoginNotificationApi {
    /**
     * @param {!./deps.DepsDef} deps
     */
    constructor(deps: any);
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
    /** @private @const {!ActivityIframeView} */
    private activityIframeView_;
    /**
     * Continues the Login flow (after waiting).
     * @return {!Promise}
     */
    start(): Promise<any>;
}
//# sourceMappingURL=login-notification-api.d.ts.map