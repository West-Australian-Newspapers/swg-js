export class UpiHandler {
    /**
     * Returns upi payment method object if it exists in allowed payment methods
     * or null if it doesn't
     *
     * @param {!IsReadyToPayRequest|!PaymentDataRequest} request
     * @return {boolean}
     */
    isUpiRequest(request: IsReadyToPayRequest | PaymentDataRequest): boolean;
    /**
     * Returns upi payment method object if it exists in allowed payment methods
     * or null if it doesn't
     *
     * @param {!IsReadyToPayRequest|!PaymentDataRequest} request
     * @return {!Promise} The promise will contain the boolean result and error
     *     message when possible.
     */
    isReadyToPay(request: IsReadyToPayRequest | PaymentDataRequest): Promise<any>;
    /**
     * Request payment data when payment method is UPI
     *
     * @param {!PaymentDataRequest} paymentDataRequest Provides necessary
     *     information to support a payment.
     * @param {!Object} upiPaymentMethod UPI paymentmethod in
     *     allowedPaymentMethods array.
     * @param {!Function} onResultCallback Function to call when everything is
     *     done.
     */
    loadPaymentData(paymentDataRequest: PaymentDataRequest, upiPaymentMethod: any, onResultCallback: Function): void;
    /**
     * Show the Tez payment request UI.
     *
     * @private
     * @param {!PaymentRequest} request The payment request object.
     * @return {!Promise<!PaymentData>} A promise containing payment response.
     */
    private showUi_;
    /**
     * Checks whether can make a payment with Tez on this device.
     *
     * @private
     * @param {!PaymentRequest} request The payment request object.
     * @return {!Promise<boolean>} a promise containing the result of whether can
     *     make payment.
     */
    private checkCanMakePayment_;
    /**
     * Redirect user to Google Pay app in Google Play store
     *
     * @private
     * @returns {!Promise<!Object>} Rejected promise with error message
     */
    private redirectToGooglePlay_;
    /**
     * Convert Tez payment data to GPay payment data if payment succeeded, or
     * reject if payment failed
     *
     * @private
     * @param {!PaymentData} tezPaymentData The payment data object from Tez.
     * @param {!PaymentDataRequest} paymentDataRequest The payment data request.
     * @param {!Object} upiPaymentMethod UPI paymentmethod in
     * allowedPaymentMethods array
     * @returns {!Promise<PaymentData>} A promise containing payment data or
     *     error message.
     */
    private processData_;
}
//# sourceMappingURL=upi_handler.d.ts.map