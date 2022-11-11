/**
 * The client for interacting with the Google Payment APIs.
 * <p>
 * The async refers to the fact that this client supports redirects
 * when using webactivties.
 * <p>
 * If you are using this be sure that this is what you want.
 * <p>
 * In almost all cases PaymentsClient is the better client to use because
 * it exposes a promises based api which is easier to deal with.
 * @final
 */
export class PaymentsAsyncClient {
    /**
     * Log developer error to console.
     *
     * @param {string} apiName
     * @param {?string} errorMessage
     * @private
     */
    private static logDevErrorToConsole_;
    /**
     * @param {!PaymentOptions} paymentOptions
     * @param {function(!Promise<!PaymentData>)} onPaymentResponse
     * @param {boolean=} useIframe
     * @param {!ActivityPorts=} activities Can be used to provide a shared
     *   activities manager. By default, the new manager is created.
     */
    constructor(paymentOptions: PaymentOptions, onPaymentResponse: (arg0: Promise<PaymentData>) => any, useIframe?: boolean | undefined, activities?: ActivityPorts);
    onPaymentResponse_: (arg0: Promise<PaymentData>) => any;
    /** @private {?number} */
    private loadPaymentDataApiStartTimeMs_;
    /** @private @const {string} */
    private environment_;
    /** @private @const {!PaymentOptions} */
    private paymentOptions_;
    /** @private @const {!PaymentsClientDelegateInterface} */
    private webActivityDelegate_;
    /** @private {number} */
    private buyFlowMode_;
    /** @private @const {?PaymentsClientDelegateInterface} */
    private delegate_;
    upiHandler_: UpiHandler;
    /**
     * Check whether the user can make payments using the Payment API.
     *
     * @param {!IsReadyToPayRequest} isReadyToPayRequest
     * @return {!Promise} The promise will contain the boolean result and error
     *     message when possible.
     */
    isReadyToPay(isReadyToPayRequest: IsReadyToPayRequest): Promise<any>;
    /**
     * Actual implementation of isReadyToPay in a private method so that
     * we can add callbacks to the promise to measure latencies.
     *
     * @param {!IsReadyToPayRequest} isReadyToPayRequest
     * @return {!Promise} The promise will contain the boolean result and error
     *     message when possible.
     * @private
     */
    private isReadyToPay_;
    /**
     * Handle is ready to pay for api v2.
     *
     * @param {!IsReadyToPayRequest} isReadyToPayRequest
     * @return {!Promise} The promise will contain the boolean result and error
     *     message when possible.
     * @private
     */
    private isReadyToPayApiV2ForChromePaymentRequest_;
    /**
     * Prefetch paymentData to speed up loadPaymentData call. Note the provided
     * paymentDataRequest should exactly be the same as provided in
     * loadPaymentData to make the loadPaymentData call fast since current
     * web flow prefetching is based on the full request parameters.
     *
     * @param {!PaymentDataRequest} paymentDataRequest Provides necessary
     *     information to support a payment.
     */
    prefetchPaymentData(paymentDataRequest: PaymentDataRequest): void;
    /**
     * Request PaymentData, which contains necessary infomartion to complete a
     * payment.
     *
     * @param {!PaymentDataRequest} paymentDataRequest Provides necessary
     *     information to support a payment.
     */
    loadPaymentData(paymentDataRequest: PaymentDataRequest): void;
    /**
     * Return a <div> element containing a Google Pay payment button.
     *
     * @param {!ButtonOptions=} options
     * @return {!Element}
     */
    createButton(options?: ButtonOptions | undefined): Element;
    /**
     * @param {!Event} e postMessage event from the AMP page.
     * @private
     */
    private handleMessageEvent_;
    /**
     * @private
     * @return {boolean}
     */
    private isInTrustedDomain_;
    /**
     * Called when load payment data result is returned. This triggers the payment
     * response callback passed to the client.
     *
     * @private
     */
    private onResult_;
    /**
     * @param {!PaymentDataRequest} paymentDataRequest
     * @return {!PaymentDataRequest}
     * @private
     */
    private assignInternalParams_;
}
export namespace PaymentsAsyncClient {
    const googleTransactionId_: string | null;
}
import { UpiHandler } from "./upi_handler.js";
//# sourceMappingURL=payjs_async.d.ts.map