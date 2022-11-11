/**
 * @param {!IsReadyToPayRequest} isReadyToPayRequest
 * @param {Constants.AuthMethod} apiV2AuthMethod
 *
 * @return {boolean} true if the merchant supports pan cards.
 */
export function apiV2DoesMerchantSupportSpecifiedCardType(isReadyToPayRequest: IsReadyToPayRequest, apiV2AuthMethod: Constants.AuthMethod): boolean;
/**
 * @return {boolean} true if this version of Chrome supports PaymentHandler.
 */
export function chromeSupportsPaymentHandler(): boolean;
/**
 * @return {boolean} true if this version of Chrome supports PaymentRequest.
 */
export function chromeSupportsPaymentRequest(): boolean;
/**
 * @param {!IsReadyToPayRequest} isReadyToPayRequest
 *
 * @return {boolean} true if the merchant only supports tokenized cards.
 */
export function doesMerchantSupportOnlyTokenizedCards(isReadyToPayRequest: IsReadyToPayRequest): boolean;
/**
 * Returns upi payment method object if it exists in allowed payment methods
 * or null if it doesn't
 *
 * @param {!IsReadyToPayRequest|!PaymentDataRequest} request
 * @return {?Object}
 */
export function getUpiPaymentMethod(request: IsReadyToPayRequest | PaymentDataRequest): any | null;
/**
 * Validate the payment method.
 *
 * @param {string} paymentMethod
 * @return {boolean} if the current payment method is valid.
 */
export function isPaymentMethodValid(paymentMethod: string): boolean;
/**
 * Validate IsReadyToPayRequest.
 *
 * @param {!IsReadyToPayRequest} isReadyToPayRequest
 * @return {?string} errorMessage if the request is invalid.
 */
export function validateIsReadyToPayRequest(isReadyToPayRequest: IsReadyToPayRequest): string | null;
/**
 * Validate PaymentOptions.
 *
 * @param {!PaymentOptions} paymentOptions
 */
export function validatePaymentOptions(paymentOptions: PaymentOptions): void;
/**
 * Validate PaymentDataRequest.
 *
 * @param {!PaymentDataRequest} paymentDataRequest
 * @return {?string} errorMessage if the request is invalid.
 */
export function validatePaymentDataRequest(paymentDataRequest: PaymentDataRequest): string | null;
/**
 * Validate if is secure context. Returns null if context is secure, otherwise
 * return error message.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts
 *
 * @return {?string} null if current context is secure, otherwise return error
 * message.
 */
export function validateSecureContext(): string | null;
import { Constants } from "./constants.js";
//# sourceMappingURL=validator.d.ts.map