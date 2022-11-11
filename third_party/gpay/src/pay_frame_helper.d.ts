/**
 * Types of buy flow activity modes.
 */
export type BuyFlowActivityMode = number;
export namespace BuyFlowActivityMode {
    const UNKNOWN_MODE: number;
    const IFRAME: number;
    const POPUP: number;
    const REDIRECT: number;
    const ANDROID_NATIVE: number;
    const PAYMENT_HANDLER: number;
}
/**
 * The presentation mode of the buy flow
 */
export type BuyFlowMode = number;
export namespace BuyFlowMode {
    const PAY_WITH_GOOGLE: number;
    const SUBSCRIBE_WITH_GOOGLE: number;
}
export class PayFrameHelper {
    /**
     * Creates a hidden iframe for logging and appends it to the top level
     * document.
     */
    static load(): void;
    /**
     * Appends the iframe to the DOM and updates the post message service.
     * @private
     */
    private static initialize_;
    /**
     * Sends a message to the iframe and wait for a response.
     * Uses the responseHandler specified only if the responseType is a match.
     *
     * @param {!Object} data
     * @param {!PostMessageEventType} eventType
     * @param {string} responseType
     * @param {function(!Event)} responseHandler
     */
    static sendAndWaitForResponse(data: any, eventType: PostMessageEventType, responseType: string, responseHandler: (arg0: Event) => any): void;
    /**
     * Add an event listener for listening to messages received.
     *
     * @param {function(!Event)} callback
     * @private
     */
    private static addMessageEventListener_;
    /**
     * Remove the event listener for listening to messages.
     *
     * @param {function(!Event)} callback
     * @private
     */
    private static removeMessageEventListener_;
    /**
     * Posts a message to the iframe with the given data.
     *
     * @param {!Object} data
     */
    static postMessage(data: any): void;
    /**
     * Sets the activity mode.
     *
     * @param {!BuyFlowActivityMode} mode
     */
    static setBuyFlowActivityMode(mode: BuyFlowActivityMode): void;
    /**
     * Sets the google transaction id.
     *
     * @param {string} txnId
     */
    static setGoogleTransactionId(txnId: string): void;
    /**
     * Sets the originTimeMs. To be used only for tests.
     *
     * @param {number} originTimeMsTemp
     */
    static setOriginTimeMs(originTimeMsTemp: number): void;
    /**
     * Override postMessageService for testing.
     *
     * @param {!PostMessageService} messageService
     */
    static setPostMessageService(messageService: PostMessageService): void;
    /**
     * Clears the singleton variables.
     */
    static reset(): void;
    /**
     * Sets whether the iframe has been loaded or not.
     *
     * @param {boolean} loaded
     */
    static setIframeLoaded(loaded: boolean): void;
    /**
     * Called whenever the iframe is loaded.
     */
    static iframeLoaded(): void;
    /**
     * Returns the events that have been buffered.
     *
     * @return {!Array<!Object>}
     */
    static getBuffer(): Array<any>;
    /**
     * Mocks the iframe as an arbitrary html element instead of actually injecting
     * it for testing.
     */
    static injectIframeForTesting(): void;
    /**
     * Returns the payframe origin based on the environment.
     *
     * @return {string}
     * @private
     */
    private static getIframeOrigin_;
    /**
     * Returns the payframe URL based on the environment.
     *
     * @param {string} origin The origin that is opening the payframe.
     * @param {string|null=} merchantId The merchant id.
     * @return {string}
     * @private
     */
    private static getIframeUrl_;
}
/**
 * Supported interactions between iframe and merchant page.
 */
export type PostMessageEventType = number;
export namespace PostMessageEventType {
    const IS_READY_TO_PAY: number;
    const LOG_BUTTON_CLICK: number;
    const LOG_IS_READY_TO_PAY_API: number;
    const LOG_LOAD_PAYMENT_DATA_API: number;
    const LOG_RENDER_BUTTON: number;
    const LOG_INITIALIZE_PAYMENTS_CLIENT: number;
    const LOG_PAY_FRAME_REQUESTED: number;
    const LOG_PAY_FRAME_LOADED: number;
    const LOG_PAY_FRAME_LOADED_WITH_ALL_JS: number;
    const LOG_INLINE_PAYMENT_WIDGET_INITIALIZE: number;
    const LOG_INLINE_PAYMENT_WIDGET_SUBMIT: number;
    const LOG_INLINE_PAYMENT_WIDGET_DISPLAYED: number;
    const LOG_INLINE_PAYMENT_WIDGET_HIDDEN: number;
}
/**
 * Types of buy flow activity modes.
 */
export type PublicErrorCode = number;
export namespace PublicErrorCode {
    const UNKNOWN_ERROR_TYPE: number;
    const INTERNAL_ERROR: number;
    const DEVELOPER_ERROR: number;
    const BUYER_ACCOUNT_ERROR: number;
    const MERCHANT_ACCOUNT_ERROR: number;
    const UNSUPPORTED_API_VERSION: number;
    const BUYER_CANCEL: number;
}
import { PostMessageService } from "./post_message_service.js";
//# sourceMappingURL=pay_frame_helper.d.ts.map