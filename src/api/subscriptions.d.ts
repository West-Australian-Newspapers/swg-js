/**
 * @return {!Config}
 */
export function defaultConfig(): Config;
/**
 * @interface
 */
export class Subscriptions {
    /**
     * Optionally initializes the subscriptions runtime with publication or
     * product ID. If not called, the runtime will look for the initialization
     * parameters in the page's markup.
     * @param {string} productOrPublicationId
     */
    init(productOrPublicationId: string): void;
    /**
     * Optionally configures the runtime with non-default properties. See
     * `Config` definition for details.
     * @param {!Config} config
     * @return {?}
     */
    configure(config: Config): unknown;
    /**
     * Starts the entitlement flow.
     * @return {?}
     */
    start(): unknown;
    /**
     * Resets the entitlements that can be fetched again.
     * @return {?}
     */
    reset(): unknown;
    /**
     * Resets the entitlements and clears all of the caches.
     * @return {?}
     */
    clear(): unknown;
    /**
     * @param {!GetEntitlementsParamsExternalDef=} params
     * @return {!Promise<!EntitlementsDef>}
     */
    getEntitlements(params?: GetEntitlementsParamsExternalDef | undefined): Promise<EntitlementsDef>;
    /**
     * Set the subscribe callback.
     * @param {function(!Promise<!EntitlementsDef>)} callback
     * @return {?}
     */
    setOnEntitlementsResponse(callback: (arg0: Promise<EntitlementsDef>) => any): unknown;
    /**
     * Returns a set of offers.
     * @param {{
     *   productId: (string|undefined),
     * }=} options
     * @return {!Promise<!Array<!OfferDef>>}
     */
    getOffers(options?: {
        productId: (string | undefined);
    } | undefined): Promise<Array<OfferDef>>;
    /**
     * Starts the Offers flow.
     * @param {!OffersRequest=} options
     * @return {?}
     */
    showOffers(options?: OffersRequest | undefined): unknown;
    /**
     * Starts the Offers flow for a subscription update.
     * @param {!OffersRequest=} options
     * @return {?}
     */
    showUpdateOffers(options?: OffersRequest | undefined): unknown;
    /**
     * Show subscription option.
     * @param {!OffersRequest=} options
     * @return {?}
     */
    showSubscribeOption(options?: OffersRequest | undefined): unknown;
    /**
     * Show abbreviated offers.
     * @param {!OffersRequest=} options
     * @return {?}
     */
    showAbbrvOffer(options?: OffersRequest | undefined): unknown;
    /**
     * Show contribution options for the users to select from.
     * The options are grouped together by periods (Weekly, Monthly, etc.).
     * User can select the amount to contribute to from available options
     * to the publisher. These options are based on the SKUs defined in the Play
     * console for a given publication.
     * Each SKU has Amount, Period, SKUId and other attributes.
     * @param {!OffersRequest=} options
     * @return {?}
     */
    showContributionOptions(options?: OffersRequest | undefined): unknown;
    /**
     * Set the callback for the native subscribe request. Setting this callback
     * triggers the "native" option in the offers flow.
     * @param {function()} callback
     * @return {?}
     */
    setOnNativeSubscribeRequest(callback: () => any): unknown;
    /**
     * Set the subscribe complete callback.
     * @param {function(!Promise<!SubscribeResponseDef>)} callback
     * @return {?}
     */
    setOnSubscribeResponse(callback: (arg0: Promise<SubscribeResponseDef>) => any): unknown;
    /**
     * Starts subscription purchase flow.
     * @param {string} sku
     * @return {?}
     */
    subscribe(sku: string): unknown;
    /**
     * Starts subscription purchase flow.
     * @param {SubscriptionRequest} subscriptionRequest
     * @return {?}
     */
    updateSubscription(subscriptionRequest: SubscriptionRequest): unknown;
    /**
     * Set the contribution complete callback.
     * @param {function(!Promise<!SubscribeResponseDef>)} callback
     * @return {?}
     */
    setOnContributionResponse(callback: (arg0: Promise<SubscribeResponseDef>) => any): unknown;
    /**
     * Set the payment complete callback.
     * @param {function(!Promise<!SubscribeResponseDef>)} callback
     * @return {?}
     */
    setOnPaymentResponse(callback: (arg0: Promise<SubscribeResponseDef>) => any): unknown;
    /**
     * Starts contributions purchase flow.
     * @param {string|SubscriptionRequest} skuOrSubscriptionRequest
     * @return {?}
     */
    contribute(skuOrSubscriptionRequest: string | SubscriptionRequest): unknown;
    /**
     * Starts the deferred account creation flow.
     * See `DeferredAccountCreationRequest` for more details.
     * @param {?DeferredAccountCreationRequest=} options
     * @return {!Promise<!DeferredAccountCreationResponse>}
     */
    completeDeferredAccountCreation(options?: (DeferredAccountCreationRequest | null) | undefined): Promise<DeferredAccountCreationResponse>;
    /**
     * @param {function(!LoginRequest)} callback
     * @return {?}
     */
    setOnLoginRequest(callback: (arg0: LoginRequest) => any): unknown;
    /**
     * @param {!LoginRequest} request
     * @return {?}
     */
    triggerLoginRequest(request: LoginRequest): unknown;
    /**
     * Starts the login prompt flow.
     * @return {!Promise}
     */
    showLoginPrompt(): Promise<any>;
    /**
     * Starts the login notification flow.
     * @return {!Promise}
     */
    showLoginNotification(): Promise<any>;
    /**
     * @param {function()} callback
     * @return {?}
     */
    setOnLinkComplete(callback: () => any): unknown;
    /**
     * @param {!Promise} accountPromise Publisher's promise to lookup account.
     * @return {!Promise}
     */
    waitForSubscriptionLookup(accountPromise: Promise<any>): Promise<any>;
    /**
     * Starts the Account linking flow.
     * TODO(dparikh): decide if it's only exposed for testing or PROD purposes.
     * @param {{ampReaderId: (string|undefined)}=} params
     * @return {?}
     */
    linkAccount(params?: {
        ampReaderId: (string | undefined);
    } | undefined): unknown;
    /**
     * Notifies the client that a flow has been started. The name of the flow
     * is passed as the callback argument. The flow name corresponds to the
     * method name in this interface, such as "showOffers", or "subscribe".
     * See `SubscriptionFlows` for the full list.
     *
     * Also see `setOnFlowCanceled` method.
     *
     * @param {function({flow: string, data: !Object})} callback
     * @return {?}
     */
    setOnFlowStarted(callback: (arg0: {
        flow: string;
        data: any;
    }) => any): unknown;
    /**
     * Notifies the client that a flow has been canceled. The name of the flow
     * is passed as the callback argument. The flow name corresponds to the
     * method name in this interface, such as "showOffers", or "subscribe".
     * See `SubscriptionFlows` for the full list.
     *
     * Notice that some of the flows, such as "subscribe", could additionally
     * have their own "cancel" events.
     *
     * Also see `setOnFlowStarted` method.
     *
     * @param {function({flow: string, data: !Object})} callback
     * @return {?}
     */
    setOnFlowCanceled(callback: (arg0: {
        flow: string;
        data: any;
    }) => any): unknown;
    /**
     * Starts the save subscriptions flow.
     * @param {!SaveSubscriptionRequestCallback} requestCallback
     * @return {!Promise} a promise indicating flow is started
     */
    saveSubscription(requestCallback: SaveSubscriptionRequestCallback): Promise<any>;
    /**
     * Creates an element with the SwG button style and the provided callback.
     * The default theme is "light".
     *
     * @param {!ButtonOptions|function()} optionsOrCallback
     * @param {function()=} callback
     * @return {!Element}
     */
    createButton(optionsOrCallback: ButtonOptions | (() => any), callback?: (() => any) | undefined): Element;
    /**
     * Attaches the SwG button style and the provided callback to an existing
     * DOM element. The default theme is "light".
     *
     * @param {!Element} button
     * @param {!ButtonOptions|function()} optionsOrCallback
     * @param {function()=} callback
     * @return {?}
     */
    attachButton(button: Element, optionsOrCallback: ButtonOptions | (() => any), callback?: (() => any) | undefined): unknown;
    /**
     * Attaches smartButton element and the provided callback.
     * The default theme is "light".
     *
     * @param {!Element} button
     * @param {!SmartButtonOptions|function()} optionsOrCallback
     * @param {function()=} callback
     * @return {?}
     */
    attachSmartButton(button: Element, optionsOrCallback: SmartButtonOptions | (() => any), callback?: (() => any) | undefined): unknown;
    /**
     * Retrieves the propensity module that provides APIs to
     * get propensity scores based on user state and events
     * @return {!Promise<PropensityApiDef>}
     */
    getPropensityModule(): Promise<PropensityApiDef>;
    /** @return {!Promise<LoggerApiDef>} */
    getLogger(): Promise<LoggerApiDef>;
    /** @return {!Promise<ClientEventManagerApiDef>} */
    getEventManager(): Promise<ClientEventManagerApiDef>;
    /**
     * Publishers participating in Showcase should call this with their own entitlements
     * and entitlement related UI events.  SwG will automatically do this for Google
     * sourced subscriptions and meters.
     * @param {!PublisherEntitlement} entitlement
     * @return {?}
     */
    setShowcaseEntitlement(entitlement: PublisherEntitlement): unknown;
    /**
     * Publishers, who both (1) participate in Showcase and (2) use server-side paywalls,
     * should call this method to consume Showcase entitlements.
     * @param {string} showcaseEntitlementJwt
     * @param {?Function=} onCloseDialog Called after the user closes the dialog.
     * @return {?}
     */
    consumeShowcaseEntitlementJwt(showcaseEntitlementJwt: string, onCloseDialog?: (Function | null) | undefined): unknown;
    /**
     * Intelligently returns the most interesting action to the
     * reader based on different different user status. For
     * instance, a new user may get free metering by simply
     * clicking 'follow-publisher' action, and a frequently
     * visiting user may be shown a 'creating an account' action.
     * TODO(moonbong): Implement this function.
     * @return {?}
     */
    showBestAudienceAction(): unknown;
    /**
     * Sets the publisherProvidedId.
     * @param {string} publisherProvidedId
     * @return {?}
     */
    setPublisherProvidedId(publisherProvidedId: string): unknown;
}
export type ShowcaseEvent = string;
export namespace ShowcaseEvent {
    const EVENT_SHOWCASE_METER_OFFERED: string;
    const EVENT_SHOWCASE_UNLOCKED_BY_SUBSCRIPTION: string;
    const EVENT_SHOWCASE_UNLOCKED_BY_METER: string;
    const EVENT_SHOWCASE_UNLOCKED_FREE_PAGE: string;
    const EVENT_SHOWCASE_NO_ENTITLEMENTS_REGWALL: string;
    const EVENT_SHOWCASE_INELIGIBLE_PAYWALL: string;
    const EVENT_SHOWCASE_NO_ENTITLEMENTS_PAYWALL: string;
}
/**
 * PublisherEntitlement
 *   In order to participate in News Showcase, publishers must report information about their entitlements.
 * Properties:
 * - isUserRegistered: Is the user registered currently?
 * - entitlement: Publisher entitlement event type.
 * - subscriptionTimestamp: Timestamp(in millisecond) when the user converted to a subscriber. Null if the user is not a subscriber.
 */
export type PublisherEntitlement = {
    isUserRegistered: boolean;
    entitlement: ShowcaseEvent;
    subscriptionTimestamp: (number | null);
};
/**
 * PublisherEntitlement
 *   In order to participate in News Showcase, publishers must report information about their entitlements.
 * Properties:
 * - isUserRegistered: Is the user registered currently?
 * - entitlement: Publisher entitlement event type.
 * - subscriptionTimestamp: Timestamp(in millisecond) when the user converted to a subscriber. Null if the user is not a subscriber.
 *  @typedef {{
 *    isUserRegistered:  !boolean,
 *    entitlement: !ShowcaseEvent,
 *    subscriptionTimestamp: (!number|null),
 * }}
 */
export let PublisherEntitlement: any;
export type SubscriptionFlows = string;
export namespace SubscriptionFlows {
    const SHOW_OFFERS: string;
    const SHOW_SUBSCRIBE_OPTION: string;
    const SHOW_ABBRV_OFFER: string;
    const SHOW_CONTRIBUTION_OPTIONS: string;
    const SUBSCRIBE: string;
    const CONTRIBUTE: string;
    const COMPLETE_DEFERRED_ACCOUNT_CREATION: string;
    const LINK_ACCOUNT: string;
    const SHOW_LOGIN_PROMPT: string;
    const SHOW_LOGIN_NOTIFICATION: string;
    const SHOW_METER_TOAST: string;
}
/**
 * Configuration properties:
 * - windowOpenMode - either "auto" or "redirect". The "redirect" value will
 *   force redirect flow for any window.open operation, including payments.
 *   The "auto" value either uses a redirect or a popup flow depending on
 *   what's possible on a specific environment. Defaults to "auto".
 * - enableSwgAnalytics - if set to true then events logged by the publisher's
 *   client will be sent to Google's SwG analytics service.  This information is
 *   used to compare the effectiveness of Google's buy-flow events to those
 *   generated by the publisher's client code.  This includes events sent to
 *   both PropensityApi and LoggerApi.
 * - enablePropensity - If true events from the logger api are sent to the
 *   propensity server.  Note events from the legacy propensity endpoint are
 *   always sent.
 */
export type Config = {
    experiments: (Array<string> | undefined);
    windowOpenMode: (WindowOpenMode | undefined);
    analyticsMode: (AnalyticsMode | undefined);
    enableSwgAnalytics: (boolean | undefined);
    enablePropensity: (boolean | undefined);
    publisherProvidedId: (string | undefined);
};
/**
 * Configuration properties:
 * - windowOpenMode - either "auto" or "redirect". The "redirect" value will
 *   force redirect flow for any window.open operation, including payments.
 *   The "auto" value either uses a redirect or a popup flow depending on
 *   what's possible on a specific environment. Defaults to "auto".
 * - enableSwgAnalytics - if set to true then events logged by the publisher's
 *   client will be sent to Google's SwG analytics service.  This information is
 *   used to compare the effectiveness of Google's buy-flow events to those
 *   generated by the publisher's client code.  This includes events sent to
 *   both PropensityApi and LoggerApi.
 * - enablePropensity - If true events from the logger api are sent to the
 *   propensity server.  Note events from the legacy propensity endpoint are
 *   always sent.
 * @typedef {{
 *   experiments: (!Array<string>|undefined),
 *   windowOpenMode: (!WindowOpenMode|undefined),
 *   analyticsMode: (!AnalyticsMode|undefined),
 *   enableSwgAnalytics: (boolean|undefined),
 *   enablePropensity: (boolean|undefined),
 *   publisherProvidedId: (string|undefined),
 * }}
 */
export let Config: any;
/**
 * Params for GetEntitlements requests to SwG Client.
 * swg-js constructs objects of this type, but publisher JS won't.
 * swg-js converts these params to a Base64 JSON string
 * before sending them to SwG Client.
 */
export type GetEntitlementsParamsInternalDef = {
    metering: (GetEntitlementsMeteringParamsInternal | undefined);
};
/**
 * Params for GetEntitlements requests to SwG Client.
 * swg-js constructs objects of this type, but publisher JS won't.
 * swg-js converts these params to a Base64 JSON string
 * before sending them to SwG Client.
 * @typedef {{
 *   metering: (!GetEntitlementsMeteringParamsInternal|undefined),
 * }}
 */
export let GetEntitlementsParamsInternalDef: any;
/**
 * Encryption params for GetEntitlements requests.
 */
export type GetEntitlementsEncryptionParams = {
    encryptedDocumentKey: string;
};
/**
 * Encryption params for GetEntitlements requests.
 * @typedef {{
 *   encryptedDocumentKey: string,
 * }}
 */
export let GetEntitlementsEncryptionParams: any;
/**
 * Metering params for GetEntitlements requests to SwG Client.
 * swg-js constructs objects of this type, but publisher JS won't.
 */
export type GetEntitlementsMeteringParamsInternal = {
    clientTypes: (undefined | Array<number>);
    owner: (undefined | string);
    state: (undefined | {
        id: string;
        attributes: Array<{
            name: string;
            timestamp: number;
        }>;
    });
    token: (undefined | string);
    resource: {
        hashedCanonicalUrl: string;
    };
};
/**
 * Metering params for GetEntitlements requests to SwG Client.
 * swg-js constructs objects of this type, but publisher JS won't.
 * @typedef {{
 *   clientTypes: (undefined|!Array<number>),
 *   owner: (undefined|string),
 *   state: (undefined|{
 *     id: string,
 *     attributes: !Array<{
 *       name: string,
 *       timestamp: number,
 *     }>,
 *   }),
 *   token: (undefined|string),
 *   resource: {
 *     hashedCanonicalUrl: string,
 *   },
 * }}
 */
export let GetEntitlementsMeteringParamsInternal: any;
/**
 * Params for `getEntitlements` calls from publisher JS.
 * swg-js converts objects of this type to GetEntitlementsParamsInternal.
 */
export type GetEntitlementsParamsExternalDef = {
    encryption: (GetEntitlementsEncryptionParams | undefined);
    metering: (GetEntitlementsMeteringParamsExternal | undefined);
    publisherProvidedId: (string | undefined);
};
/**
 * Params for `getEntitlements` calls from publisher JS.
 * swg-js converts objects of this type to GetEntitlementsParamsInternal.
 * @typedef {{
 *   encryption: (!GetEntitlementsEncryptionParams|undefined),
 *   metering: (!GetEntitlementsMeteringParamsExternal|undefined),
 *   publisherProvidedId: (string|undefined),
 * }}
 */
export let GetEntitlementsParamsExternalDef: any;
/**
 * Params for `getEntitlements` calls from publisher JS.
 * swg-js converts objects of this type to GetEntitlementsMeteringParamsInternal.
 */
export type GetEntitlementsMeteringParamsExternal = {
    clientTypes: Array<number>;
    owner: string;
    state: {
        id: string;
        standardAttributes: {
            [x: string]: {
                timestamp: number;
            };
        };
        customAttributes: {
            [x: string]: {
                timestamp: number;
            };
        };
    };
    resource: {
        hashedCanonicalUrl: string;
    };
};
/**
 * Params for `getEntitlements` calls from publisher JS.
 * swg-js converts objects of this type to GetEntitlementsMeteringParamsInternal.
 * @typedef {{
 *   clientTypes: !Array<number>,
 *   owner: string,
 *   state: {
 *     id: string,
 *     standardAttributes: !Object<string, {
 *       timestamp: number,
 *     }>,
 *     customAttributes: !Object<string, {
 *       timestamp: number,
 *     }>,
 *   },
 *   resource: {
 *     hashedCanonicalUrl: string,
 *   },
 * }}
 */
export let GetEntitlementsMeteringParamsExternal: any;
export type AnalyticsMode = number;
export namespace AnalyticsMode {
    const DEFAULT: number;
    const IMPRESSIONS: number;
}
export type WindowOpenMode = string;
export namespace WindowOpenMode {
    const AUTO: string;
    const REDIRECT: string;
}
export type ReplaceSkuProrationMode = string;
export namespace ReplaceSkuProrationMode {
    const IMMEDIATE_WITH_TIME_PRORATION: string;
}
/**
 * The Offers/Contributions UI is rendered differently based on the
 * ProductType. The ProductType parameter is passed to the Payments flow, and
 * then passed back to the Payments confirmation page to render messages/text
 * based on the ProductType.
 */
export type ProductType = string;
export namespace ProductType {
    const SUBSCRIPTION: string;
    const UI_CONTRIBUTION: string;
    const VIRTUAL_GIFT: string;
}
/**
 * Properties:
 * - skus - a list of SKUs to return from the defined or default list. The
 *   order is preserved. Required if oldSku is specified (to indicate which
 *   SKUs the user can upgrade or downgrade to).
 * - list - a predefined list of SKUs. Use of this property is uncommon.
 *   Possible values are "default" and "amp". Default is "default".
 * - isClosable - a boolean value to determine whether the view is closable.
 * - oldSku - Optional. The SKU to replace. For example, if a user wants to
 *   upgrade or downgrade their current subscription.
 */
export type OffersRequest = {
    skus: (Array<string> | undefined);
    list: (string | undefined);
    isClosable: (boolean | undefined);
    oldSku: (string | undefined);
};
/**
 * Properties:
 * - skus - a list of SKUs to return from the defined or default list. The
 *   order is preserved. Required if oldSku is specified (to indicate which
 *   SKUs the user can upgrade or downgrade to).
 * - list - a predefined list of SKUs. Use of this property is uncommon.
 *   Possible values are "default" and "amp". Default is "default".
 * - isClosable - a boolean value to determine whether the view is closable.
 * - oldSku - Optional. The SKU to replace. For example, if a user wants to
 *   upgrade or downgrade their current subscription.
 *
 * @typedef {{
 *   skus: (!Array<string>|undefined),
 *   list: (string|undefined),
 *   isClosable: (boolean|undefined),
 *   oldSku: (string|undefined),
 * }}
 */
export let OffersRequest: any;
export type LoginRequest = {
    linkRequested: boolean;
};
/**
 * @typedef {{
 *   linkRequested: boolean,
 * }}
 */
export let LoginRequest: any;
/**
 * Properties:
 * - one and only one of "token" or "authCode"
 * AuthCode reference: https://developers.google.com/actions/identity/oauth2-code-flow
 * Token reference: https://developers.google.com/actions/identity/oauth2-implicit-flow
 */
export type SaveSubscriptionRequest = {
    token: (string | undefined);
    authCode: (string | undefined);
};
/**
 * Properties:
 * - one and only one of "token" or "authCode"
 * AuthCode reference: https://developers.google.com/actions/identity/oauth2-code-flow
 * Token reference: https://developers.google.com/actions/identity/oauth2-implicit-flow
 * @typedef {{
 *   token: (string|undefined),
 *   authCode: (string|undefined),
 * }}
 */
export let SaveSubscriptionRequest: any;
/**
 * Callback for retrieving subscription request
 */
export type SaveSubscriptionRequestCallback = () => (Promise<SaveSubscriptionRequest> | SaveSubscriptionRequest);
/**
 * Callback for retrieving subscription request
 *
 * @typedef {function():(!Promise<SaveSubscriptionRequest> | !SaveSubscriptionRequest)} SaveSubscriptionRequestCallback
 */
export let SaveSubscriptionRequestCallback: any;
/**
 * Properties:
 * - lang: Sets the button SVG and title. Default is "en".
 * - theme: "light" or "dark". Default is "light".
 * - disable: whether to grey out the button.
 */
export type ButtonOptions = {
    theme: (string | undefined);
    lang: (string | undefined);
    disable: (boolean | undefined);
};
/**
 * Properties:
 * - lang: Sets the button SVG and title. Default is "en".
 * - theme: "light" or "dark". Default is "light".
 * - disable: whether to grey out the button.
 *
 * @typedef {{
 *   theme: (string|undefined),
 *   lang: (string|undefined),
 *   disable: (boolean|undefined),
 * }}
 */
export let ButtonOptions: any;
/**
 * Properties:
 * - lang: Sets the button SVG and title. Default is "en".
 * - theme: "light" or "dark". Default is "light".
 * - messageTextColor: Overrides theme color for message text. (ex: "#09f")
 */
export type SmartButtonOptions = {
    theme: (string | undefined);
    lang: (string | undefined);
    messageTextColor: (string | undefined);
};
/**
 * Properties:
 * - lang: Sets the button SVG and title. Default is "en".
 * - theme: "light" or "dark". Default is "light".
 * - messageTextColor: Overrides theme color for message text. (ex: "#09f")
 *
 * @typedef {{
 *   theme: (string|undefined),
 *   lang: (string|undefined),
 *   messageTextColor: (string|undefined),
 * }}
 */
export let SmartButtonOptions: any;
/**
 * Properties:
 * - sku: Required. Sku to add to the user's subscriptions.
 * - oldSku: Optional. This is if you want to replace one sku with another. For
 *  example, if a user wants to upgrade or downgrade their current subscription.
 * - prorationMode: Optional. When replacing a subscription you can decide on a
 *  specific proration mode to charge the user.
 *  The default is IMMEDIATE_WITH_TIME_PRORATION.
 * - oneTime: Optional. When a user chooses a contribution, they have the option
 *  to make it non-recurring.
 */
export type SubscriptionRequest = {
    skuId: string;
    oldSku: (string | undefined);
    replaceSkuProrationMode: (ReplaceSkuProrationMode | undefined);
    oneTime: (boolean | undefined);
};
/**
 * Properties:
 * - sku: Required. Sku to add to the user's subscriptions.
 * - oldSku: Optional. This is if you want to replace one sku with another. For
 *  example, if a user wants to upgrade or downgrade their current subscription.
 * - prorationMode: Optional. When replacing a subscription you can decide on a
 *  specific proration mode to charge the user.
 *  The default is IMMEDIATE_WITH_TIME_PRORATION.
 * - oneTime: Optional. When a user chooses a contribution, they have the option
 *  to make it non-recurring.
 *
 *  @typedef {{
 *    skuId: string,
 *    oldSku: (string|undefined),
 *    replaceSkuProrationMode: (ReplaceSkuProrationMode|undefined),
 *    oneTime: (boolean|undefined),
 * }}
 */
export let SubscriptionRequest: any;
import { Entitlements as EntitlementsDef } from "./entitlements";
import { Offer as OfferDef } from "./offer";
import { SubscribeResponse as SubscribeResponseDef } from "./subscribe-response";
import { DeferredAccountCreationRequest } from "./deferred-account-creation";
import { DeferredAccountCreationResponse } from "./deferred-account-creation";
import { PropensityApi as PropensityApiDef } from "./propensity-api";
import { LoggerApi as LoggerApiDef } from "./logger-api";
import { ClientEventManagerApi as ClientEventManagerApiDef } from "./client-event-manager-api";
//# sourceMappingURL=subscriptions.d.ts.map