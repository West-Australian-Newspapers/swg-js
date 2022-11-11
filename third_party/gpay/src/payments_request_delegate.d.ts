/**
 * An implementation of PaymentsClientDelegateInterface that leverages payment
 * request.
 * @implements {PaymentsClientDelegateInterface}
 */
export class PaymentsRequestDelegate implements PaymentsClientDelegateInterface {
    /**
     * @param {string} environment
     */
    constructor(environment: string);
    environment_: string;
    /** @private {?function(!Promise<!PaymentData>)} */
    private callback_;
    /** @override */
    override onResult(callback: any): void;
    /** @override */
    override isReadyToPay(isReadyToPayRequest: any): Promise<any>;
    /** @override */
    override prefetchPaymentData(paymentDataRequest: any): void;
    /** @override */
    override loadPaymentData(paymentDataRequest: any): void;
    /**
     * Create PaymentRequest instance.
     *
     * @param {!IsReadyToPayRequest|!PaymentDataRequest} request The necessary information to check if user is
     *     ready to pay or to support a payment from merchants.
     * @param {?string=} environment (optional)
     * @param {?string=} currencyCode (optional)
     * @param {?string=} totalPrice (optional)
     * @return {!PaymentRequest} PaymentRequest instance.
     * @private
     */
    private createPaymentRequest_;
    /**
     * @param {!PaymentDataRequest} paymentDataRequest Provides necessary
     *     information to support a payment.
     * @private
     */
    private loadPaymentDataThroughPaymentRequest_;
}
import { PaymentsClientDelegateInterface } from "./payments_client_delegate_interface.js";
//# sourceMappingURL=payments_request_delegate.d.ts.map