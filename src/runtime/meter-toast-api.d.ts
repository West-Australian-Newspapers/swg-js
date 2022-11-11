export const IFRAME_BOX_SHADOW: "rgba(60, 64, 67, 0.3) 0px -2px 5px, rgba(60, 64, 67, 0.15) 0px -5px 5px";
export const MINIMIZED_IFRAME_SIZE: "420px";
export const DEFAULT_IFRAME_URL: "/metertoastiframe";
export const ANONYMOUS_USER_ATTRIBUTE: "anonymous_user";
/**
 * The iframe URLs to be used per MeterClientType
 * @type {Object.<MeterClientTypes, string>}
 */
export const IframeUrlByMeterClientType: any;
/**
 * Properties:
 * - iframeUrl: Relative URL of the iframe, e.g. "/meteriframe".
 * - iframeUrlParams: List of extra params appended to the URL.
 */
export type MeterToastApiParams = {
    meterClientType: (MeterClientTypes | undefined);
};
/**
 * Properties:
 * - iframeUrl: Relative URL of the iframe, e.g. "/meteriframe".
 * - iframeUrlParams: List of extra params appended to the URL.
 *
 * @typedef {{
 *   meterClientType: (MeterClientTypes|undefined),
 * }}
 */
export let MeterToastApiParams: any;
export class MeterToastApi {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {!MeterToastApiParams=} params
     */
    constructor(deps: any, { meterClientType, meterClientUserAttribute, }?: MeterToastApiParams | undefined);
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {!../components/dialog-manager.DialogManager} */
    private dialogManager_;
    /** @private @const {!MeterClientTypes} */
    private meterClientType_;
    /** @private @const {string} */
    private meterClientUserAttribute_;
    /**
     * Function this class calls when a user dismisses the toast to consume a
     * free read.
     * @private {?function()}
     */
    private onConsumeCallback_;
    /**
     * Boolean indicating whether or not the onConsumeCallback_ has been handled
     * (either called or ignored). This is used to protect against unexpected
     * cancellations not consuming a meter.
     * @private {!boolean}
     */
    private onConsumeCallbackHandled_;
    /** @private {?function()} */
    private scrollEventListener_;
    /**
     * Shows the user the metering toast.
     * @return {!Promise}
     */
    start(): Promise<any>;
    /** @private @const {!ActivityIframeView} */
    private activityIframeView_;
    /** @private @const {!function()} */
    private sendCloseRequestFunction_;
    /**
     * Sets a callback function this class calls when a user dismisses the toast to consume a free read.
     * @param {function()} onConsumeCallback
     */
    setOnConsumeCallback(onConsumeCallback: () => any): void;
    /**
     * Removes the event listeners that close the iframe and make the body visible.
     */
    removeCloseEventListener(): void;
    /**
     * Changes the iframe box shadow to match desired specifications on mobile.
     */
    setDialogBoxShadow_(): void;
    /**
     * Changes the size of the loading iframe on desktop to match the size of
     * the meter toast iframe.
     */
    setLoadingViewWidth_(): void;
    /**
     * @param {ViewSubscriptionsResponse} response
     * @private
     */
    private startSubscriptionFlow_;
    /**
     * Returns true if the window userAgent is a mobile platform.
     * @private
     */
    private isMobile_;
}
import { MeterClientTypes } from "../api/metering";
//# sourceMappingURL=meter-toast-api.d.ts.map