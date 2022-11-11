export type AudienceActionParams = {
    action: (string | undefined);
    onCancel: ((() => any) | undefined);
    autoPromptType: (AutoPromptType | undefined);
};
/**
 * @typedef {{
 *  action: (string|undefined),
 *  onCancel: (function()|undefined),
 *  autoPromptType: (AutoPromptType|undefined)
 * }}
 */
export let AudienceActionParams: any;
/**
 * The flow to initiate and manage handling an audience action.
 */
export class AudienceActionFlow {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {!AudienceActionParams} params
     */
    constructor(deps: any, params: AudienceActionParams);
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!AudienceActionParams} */
    private params_;
    /** @private @const {!ProductType} */
    private productType_;
    /** @private @const {!../components/dialog-manager.DialogManager} */
    private dialogManager_;
    /** @private @const {!./entitlements-manager.EntitlementsManager} */
    private entitlementsManager_;
    /** @private @const {?./client-config-manager.ClientConfigManager} */
    private clientConfigManager_;
    /** @private {?ActivityIframeView} */
    private activityIframeView_;
    /**
     * Starts the flow for the suggested audience action.
     * @public
     * @return {!Promise}
     */
    public start(): Promise<any>;
    /**
     * On a successful response from the dialog, we should:
     * 1) Store the updated user token
     * 2) Clear existing entitlements from the page
     * 3) Update READ_TIME in local storage to indicate that entitlements may have changed recently
     * 4) Re-fetch entitlements which may potentially provide access to the page
     * @param {CompleteAudienceActionResponse} response
     * @private
     */
    private handleCompleteAudienceActionResponse_;
    /**
     * @param {string} userEmail
     * @private
     */
    private showSignedInToast_;
    /** @private */
    private showAlreadyOptedInToast_;
    /** @private */
    private showFailedOptedInToast_;
    /**
     * @param {AlreadySubscribedResponse} response
     * @private
     */
    private handleLinkRequest_;
    /**
     * @param {SurveyDataTransferRequest} request
     * @private
     */
    private handleSurveyDataTransferRequest_;
    /**
     * Logs SurveyDataTransferRequest to Google Analytics. Returns boolean
     * for whether or not logging was successful.
     * @param {SurveyDataTransferRequest} request
     * @return {boolean}
     * @private
     */
    private logSurveyDataToGoogleAnalytics;
    /**
     * Shows the toast of 'no entitlement found' on activity iFrame view.
     * @public
     */
    public showNoEntitlementFoundToast(): void;
}
import { AutoPromptType } from "../api/basic-subscriptions";
//# sourceMappingURL=audience-action-flow.d.ts.map