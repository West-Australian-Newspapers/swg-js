export class LoginPromptApi {
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
     * Prompts the user to login.
     * @return {!Promise}
     */
    start(): Promise<any>;
}
//# sourceMappingURL=login-prompt-api.d.ts.map