/**
 * An implementation of PaymentsClientDelegateInterface that uses the custom
 * hosting page along with web activities to actually get to the hosting page.
 * @implements {PaymentsClientDelegateInterface}
 */
export class PaymentsWebActivityDelegate implements PaymentsClientDelegateInterface {
    /**
     * @param {string} environment
     * @param {string} googleTransactionId
     * @param {boolean=} useIframe
     * @param {!ActivityPorts=} activities Can be used to provide a shared
     *   activities manager. By default, the new manager is created.
     * @param {?string=} redirectKey The redirect key used for redirect mode.
     */
    constructor(environment: string, googleTransactionId: string, useIframe?: boolean | undefined, activities?: ActivityPorts, redirectKey?: (string | null) | undefined);
    environment_: string;
    /** @private @const {boolean} */
    /** @const {!ActivityPorts} */
    activities: any;
    /** @const @private {!Graypane} */
    private graypane_;
    /** @private {?function(!Promise<!PaymentData>)} */
    private callback_;
    /**
     * @private {?{
     *             container: !Element,
     *             iframe:!HTMLIFrameElement,
     *             request:!PaymentDataRequest,
     *             dataPromise:?Promise<!PaymentData>}}
     */
    private prefetchedObjects_;
    /** @private {boolean} */
    private shouldHandleResizing_;
    /** @private {?ActivityIframePort} */
    private port_;
    /** @private {?function(!Promise<void>)} */
    private dismissPromiseResolver_;
    /** @const @private {string} */
    private googleTransactionId_;
    /** @const @private {?string} */
    private redirectKey_;
    /**
     * @private {?ResizePayload}
     */
    private savedResizePayload_;
    /** @override */
    override onResult(callback: any): void;
    /**
     * @param {!ActivityPort} port
     * @private
     */
    private onActivityResult_;
    /**
     * @param {string} redirectEncryptedCallbackData
     * @return {!PaymentData}
     * @private
     */
    private fetchRedirectResponse_;
    /** @override */
    override isReadyToPay(isReadyToPayRequest: any): Promise<any>;
    /** @override */
    override prefetchPaymentData(paymentDataRequest: any): void;
    /** @override */
    override loadPaymentData(paymentDataRequest: any): void;
    /**
     * Returns the render mode whether need to force redirect.
     *
     * @param {!PaymentDataRequest} paymentDataRequest
     * @return {string}
     * @private
     */
    private getRenderMode_;
    /**
     * Returns the server origin based on the environment.
     *
     * @private
     * @return {string}
     */
    private getOrigin_;
    /**
     * Returns the base path based on the environment.
     *
     * @private
     * @return {string} The base path
     */
    private getBasePath_;
    /**
     * Returns the decryption url to be used to decrypt the encrypted payload.
     *
     * @private
     * @return {string} The decryption url
     */
    private getDecryptionUrl_;
    /**
     * Returns the hosting page url.
     *
     * @private
     * @return {string} The hosting page url
     */
    private getHostingPageUrl_;
    /**
     * Returns the iframe pwg url to be used to be used for amp.
     *
     * @param {string} environment
     * @param {string} origin
     * @return {string} The iframe url
     */
    getIframeUrl(environment: string, origin: string): string;
    /**
     * Close iframe with animation.
     *
     * @param {!Element} container
     * @param {!HTMLIFrameElement} iframe
     * @private
     */
    private removeIframeAndContainer_;
    /**
     * @param {!PaymentDataRequest} paymentDataRequest
     * @return {{container: !Element, iframe:!HTMLIFrameElement}}
     * @private
     */
    private injectIframe_;
    /**
     * Handler when back button is triggered, should dismiss iframe if present.
     * @param {{container: !Element, iframe:!HTMLIFrameElement}} containerAndFrame
     * @private
     */
    private backButtonHandler_;
    /**
     * Handler when close action is triggered, will pop history state to close
     * the iframe.
     * @param {{container: !Element, iframe:!HTMLIFrameElement}} containerAndFrame
     * @private
     */
    private closeActionHandler_;
    /**
     * @param {{container: !Element, iframe:!HTMLIFrameElement}} containerAndFrame
     * @private
     */
    private dismissIframe_;
    /**
     * @param {!PaymentDataRequest} paymentDataRequest
     * @return {boolean}
     * @private
     */
    private isVerticalCenterExperimentEnabled_;
    /**
     * @param {!Element} container
     * @param {!HTMLIFrameElement} iframe
     * @param {!PaymentDataRequest} paymentDataRequest
     * @private
     */
    private showContainerAndIframeWithAnimation_;
    /**
     * @param {!HTMLIFrameElement} iframe
     * @param {string} transitionStyle
     * @private
     */
    private setTransition_;
    /**
     * Use WebActivitiy to open iframe that's in given container.
     *
     * @param {!Element} container
     * @param {!HTMLIFrameElement} iframe
     * @param {!PaymentDataRequest} paymentDataRequest
     * @return {!Promise<!PaymentData>}
     * @private
     */
    private openIframe_;
}
import { PaymentsClientDelegateInterface } from "./payments_client_delegate_interface.js";
//# sourceMappingURL=payments_web_activity_delegate.d.ts.map