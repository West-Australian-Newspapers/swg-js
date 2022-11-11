/**
 * The class for Contributions flow.
 */
export class ContributionsFlow {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {!../api/subscriptions.OffersRequest|undefined} options
     */
    constructor(deps: any, options: any);
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!../api/subscriptions.OffersRequest|undefined} */
    private options_;
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!./client-config-manager.ClientConfigManager} */
    private clientConfigManager_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {!../components/dialog-manager.DialogManager} */
    private dialogManager_;
    activityIframeView_: any;
    /** @private @const {!Promise<!ActivityIframeView>} */
    private activityIframeViewPromise_;
    /**
     * @param {AlreadySubscribedResponse} response
     */
    handleLinkRequest_(response: AlreadySubscribedResponse): void;
    /**
     * @param {SkuSelectedResponse} response
     */
    startPayFlow_(response: SkuSelectedResponse): void;
    /**
     * Starts the contributions flow or alreadyMember flow.
     * @return {!Promise}
     */
    start(): Promise<any>;
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
     * Returns whether this flow is configured as enabled, not showing
     * even on explicit start when flag is configured false.
     *
     * @param {!../model/client-config.ClientConfig} clientConfig
     * @return {boolean}
     */
    shouldShow_(clientConfig: any): boolean;
    /**
     * Gets the complete URL that should be used for the activity iFrame view.
     * @param {!../model/client-config.ClientConfig} clientConfig
     * @param {!../model/page-config.PageConfig} pageConfig
     * @return {string}
     */
    getUrl_(clientConfig: any, pageConfig: any): string;
    /**
     * Shows "no contribution found" on activity iFrame view.
     */
    showNoEntitlementFoundToast(): void;
}
import { AlreadySubscribedResponse } from "../proto/api_messages";
import { SkuSelectedResponse } from "../proto/api_messages";
//# sourceMappingURL=contributions-flow.d.ts.map