/**
 * The flow to initiate deferred account process.
 * See `Subscriptions.completeDeferredAccountCreation` API.
 */
export class DeferredAccountFlow {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {?../api/deferred-account-creation.DeferredAccountCreationRequest} options
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
    /** @private {?ActivityIframeView} */
    private activityIframeView_;
    /** @private {?Promise} */
    private openPromise_;
    /** @private @const {!../api/deferred-account-creation.DeferredAccountCreationRequest} */
    private options_;
    /**
     * Starts the deferred account flow.
     * @return {!Promise<!DeferredAccountCreationResponse>}
     */
    start(): Promise<DeferredAccountCreationResponse>;
    /**
     * @param {!Object} data
     * @return {!DeferredAccountCreationResponse}
     * @private
     */
    private handleConsentResponse_;
}
import { DeferredAccountCreationResponse } from "../api/deferred-account-creation";
//# sourceMappingURL=deferred-account-flow.d.ts.map