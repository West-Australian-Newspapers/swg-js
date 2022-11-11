/**
 * Interface for users of the basic tier of Subscribe with Google.
 * @interface
 */
export class BasicSubscriptions {
    /**
     * Initializes the basic subscriptions runtime. This includes setting of the
     * specified param values in the JSON-LD markup of the page, sets up any SwG
     * buttons with attribute 'swg-standard-button', and inserts a SwG prompt for
     * contributions/subscriptions. If the fields specified in the params are
     * already specified in the JSON-LD markup on the page, the existing values
     * will be preserved, and the values within init will be ignored.
     * @param {{
     *   type: (string|!Array<string>),
     *   isAccessibleForFree: boolean,
     *   isPartOfType: (string|!Array<string>),
     *   isPartOfProductId: string,
     *   autoPromptType: (AutoPromptType|undefined),
     *   clientOptions: (ClientOptions|undefined),
     *   alwaysShow: (boolean|undefined),
     *   disableDefaultMeteringHandler: (boolean|undefined),
     *   publisherProvidedId: (string|undefined),
     * }=} params
     */
    init(params?: {
        type: (string | Array<string>);
        isAccessibleForFree: boolean;
        isPartOfType: (string | Array<string>);
        isPartOfProductId: string;
        autoPromptType: (AutoPromptType | undefined);
        clientOptions: (ClientOptions | undefined);
        alwaysShow: (boolean | undefined);
        disableDefaultMeteringHandler: (boolean | undefined);
        publisherProvidedId: (string | undefined);
    } | undefined): void;
    /**
     * Set the entitlement check callback.
     * @param {function(!Promise<!EntitlementsDef>)} callback
     * @return {?}
     */
    setOnEntitlementsResponse(callback: (arg0: Promise<EntitlementsDef>) => any): unknown;
    /**
     * Set the payment complete callback.
     * @param {function(!Promise<!SubscribeResponseDef>)} callback
     * @return {?}
     */
    setOnPaymentResponse(callback: (arg0: Promise<SubscribeResponseDef>) => any): unknown;
    /**
     * Open CheckEntitlementsView to let users log in Google and check their entitlements.
     * @param {function(!LoginRequest)} callback
     * @return {?}
     */
    setOnLoginRequest(callback: (arg0: LoginRequest) => any): unknown;
    /**
     * Creates and displays a SwG subscription or contribution prompt, where the
     * prompt type is determined by the parameters passed in to init. If the auto
     * prompt is determined to have been already set up, the setup portion of the
     * function will be skipped, and the prompt will be displayed. The
     * autoPromptType specifies which type of prompt should be displayed (see
     * AutoPromptType below). The alwaysShow parameter is an option to force show
     * the prompt, regardless of any display rules. This parameter is intended for
     * preview purposes.
     * @param {{
     *   autoPromptType: (!AutoPromptType|undefined),
     *   alwaysShow: (boolean|undefined),
     * }} options
     * @returns {!Promise}
     */
    setupAndShowAutoPrompt(options: {
        autoPromptType: (AutoPromptType | undefined);
        alwaysShow: (boolean | undefined);
    }): Promise<any>;
    /**
     * Dismisses any SwG UI currently displayed. Intended to be used for preview
     * purposes.
     * @return {?}
     */
    dismissSwgUI(): unknown;
}
/**
 * The types of autoprompt that can be specified to be shown. CONTRIBUTION and
 * SUBSCRIPTION will trigger the small, button-like prompt, and
 * CONTRIBUTION_LARGE and SUBSCRIPTION_LARGE will trigger the larger purchase
 * UI.
 */
export type AutoPromptType = string;
export namespace AutoPromptType {
    const NONE: string;
    const CONTRIBUTION: string;
    const CONTRIBUTION_LARGE: string;
    const SUBSCRIPTION: string;
    const SUBSCRIPTION_LARGE: string;
}
/**
 * Options for configuring all client UI.
 * Properties:
 * - disableButton: whether to enable button.
 * - forceLangInIframes: whether to force the specified lang in iframes.
 * - lang: Sets the button and prompt language. Default is "en".
 * - theme: "light" or "dark". Default is "light".
 */
export type ClientOptions = {
    disableButton: (boolean | undefined);
    lang: (string | undefined);
    forceLangInIframes: (boolean | undefined);
    theme: (ClientTheme | undefined);
    allowScroll: (boolean | undefined);
};
/**
 * Options for configuring all client UI.
 * Properties:
 * - disableButton: whether to enable button.
 * - forceLangInIframes: whether to force the specified lang in iframes.
 * - lang: Sets the button and prompt language. Default is "en".
 * - theme: "light" or "dark". Default is "light".
 *
 * @typedef {{
 *   disableButton: (boolean|undefined),
 *   lang: (string|undefined),
 *   forceLangInIframes: (boolean|undefined),
 *   theme: (ClientTheme|undefined),
 *   allowScroll: (boolean|undefined),
 * }}
 */
export let ClientOptions: any;
export type LoginRequest = {
    linkRequested: boolean;
};
/**
 * @typedef {{
 *   linkRequested: boolean,
 * }}
 */
export let LoginRequest: any;
export type ClientTheme = string;
export namespace ClientTheme {
    const LIGHT: string;
    const DARK: string;
}
import { Entitlements as EntitlementsDef } from "./entitlements";
import { SubscribeResponse as SubscribeResponseDef } from "./subscribe-response";
//# sourceMappingURL=basic-subscriptions.d.ts.map