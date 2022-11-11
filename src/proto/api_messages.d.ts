/**
 * @implements {Message}
 */
export class AccountCreationRequest implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?boolean} */
    private complete_;
    /**
     * @return {?boolean}
     */
    getComplete(): boolean | null;
    /**
     * @param {boolean} value
     */
    setComplete(value: boolean): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class ActionRequest implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?ActionType} */
    private action_;
    /**
     * @return {?ActionType}
     */
    getAction(): ActionType | null;
    /**
     * @param {!ActionType} value
     */
    setAction(value: ActionType): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
export type ActionType = number;
export namespace ActionType {
    const ACTION_TYPE_UNKNOWN: number;
    const ACTION_TYPE_RELOAD_PAGE: number;
    const ACTION_TYPE_UPDATE_COUNTER: number;
}
/**
 * @implements {Message}
 */
export class AlreadySubscribedResponse implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?boolean} */
    private subscriberOrMember_;
    /** @private {?boolean} */
    private linkRequested_;
    /**
     * @return {?boolean}
     */
    getSubscriberOrMember(): boolean | null;
    /**
     * @param {boolean} value
     */
    setSubscriberOrMember(value: boolean): void;
    /**
     * @return {?boolean}
     */
    getLinkRequested(): boolean | null;
    /**
     * @param {boolean} value
     */
    setLinkRequested(value: boolean): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class AnalyticsContext implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?string} */
    private embedderOrigin_;
    /** @private {?string} */
    private transactionId_;
    /** @private {?string} */
    private referringOrigin_;
    /** @private {?string} */
    private utmSource_;
    /** @private {?string} */
    private utmCampaign_;
    /** @private {?string} */
    private utmMedium_;
    /** @private {?string} */
    private sku_;
    /** @private {?boolean} */
    private readyToPay_;
    /** @private {!Array<string>} */
    private label_;
    /** @private {?string} */
    private clientVersion_;
    /** @private {?string} */
    private url_;
    /** @private {?Timestamp} */
    private clientTimestamp_;
    /** @private {?ReaderSurfaceType} */
    private readerSurfaceType_;
    /** @private {?string} */
    private integrationVersion_;
    /**
     * @return {?string}
     */
    getEmbedderOrigin(): string | null;
    /**
     * @param {string} value
     */
    setEmbedderOrigin(value: string): void;
    /**
     * @return {?string}
     */
    getTransactionId(): string | null;
    /**
     * @param {string} value
     */
    setTransactionId(value: string): void;
    /**
     * @return {?string}
     */
    getReferringOrigin(): string | null;
    /**
     * @param {string} value
     */
    setReferringOrigin(value: string): void;
    /**
     * @return {?string}
     */
    getUtmSource(): string | null;
    /**
     * @param {string} value
     */
    setUtmSource(value: string): void;
    /**
     * @return {?string}
     */
    getUtmCampaign(): string | null;
    /**
     * @param {string} value
     */
    setUtmCampaign(value: string): void;
    /**
     * @return {?string}
     */
    getUtmMedium(): string | null;
    /**
     * @param {string} value
     */
    setUtmMedium(value: string): void;
    /**
     * @return {?string}
     */
    getSku(): string | null;
    /**
     * @param {string} value
     */
    setSku(value: string): void;
    /**
     * @return {?boolean}
     */
    getReadyToPay(): boolean | null;
    /**
     * @param {boolean} value
     */
    setReadyToPay(value: boolean): void;
    /**
     * @return {!Array<string>}
     */
    getLabelList(): Array<string>;
    /**
     * @param {!Array<string>} value
     */
    setLabelList(value: Array<string>): void;
    /**
     * @return {?string}
     */
    getClientVersion(): string | null;
    /**
     * @param {string} value
     */
    setClientVersion(value: string): void;
    /**
     * @return {?string}
     */
    getUrl(): string | null;
    /**
     * @param {string} value
     */
    setUrl(value: string): void;
    /**
     * @return {?Timestamp}
     */
    getClientTimestamp(): Timestamp | null;
    /**
     * @param {!Timestamp} value
     */
    setClientTimestamp(value: Timestamp): void;
    /**
     * @return {?ReaderSurfaceType}
     */
    getReaderSurfaceType(): ReaderSurfaceType | null;
    /**
     * @param {!ReaderSurfaceType} value
     */
    setReaderSurfaceType(value: ReaderSurfaceType): void;
    /**
     * @return {?string}
     */
    getIntegrationVersion(): string | null;
    /**
     * @param {string} value
     */
    setIntegrationVersion(value: string): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
export type AnalyticsEvent = number;
export namespace AnalyticsEvent {
    const UNKNOWN: number;
    const IMPRESSION_PAYWALL: number;
    const IMPRESSION_AD: number;
    const IMPRESSION_OFFERS: number;
    const IMPRESSION_SUBSCRIBE_BUTTON: number;
    const IMPRESSION_SMARTBOX: number;
    const IMPRESSION_SWG_BUTTON: number;
    const IMPRESSION_CLICK_TO_SHOW_OFFERS: number;
    const IMPRESSION_CLICK_TO_SHOW_OFFERS_OR_ALREADY_SUBSCRIBED: number;
    const IMPRESSION_SUBSCRIPTION_COMPLETE: number;
    const IMPRESSION_ACCOUNT_CHANGED: number;
    const IMPRESSION_PAGE_LOAD: number;
    const IMPRESSION_LINK: number;
    const IMPRESSION_SAVE_SUBSCR_TO_GOOGLE: number;
    const IMPRESSION_GOOGLE_UPDATED: number;
    const IMPRESSION_SHOW_OFFERS_SMARTBOX: number;
    const IMPRESSION_SHOW_OFFERS_SWG_BUTTON: number;
    const IMPRESSION_SELECT_OFFER_SMARTBOX: number;
    const IMPRESSION_SELECT_OFFER_SWG_BUTTON: number;
    const IMPRESSION_SHOW_CONTRIBUTIONS_SWG_BUTTON: number;
    const IMPRESSION_SELECT_CONTRIBUTION_SWG_BUTTON: number;
    const IMPRESSION_METER_TOAST: number;
    const IMPRESSION_REGWALL: number;
    const IMPRESSION_SHOWCASE_REGWALL: number;
    const IMPRESSION_SWG_SUBSCRIPTION_MINI_PROMPT: number;
    const IMPRESSION_SWG_CONTRIBUTION_MINI_PROMPT: number;
    const IMPRESSION_CONTRIBUTION_OFFERS: number;
    const IMPRESSION_TWG_COUNTER: number;
    const IMPRESSION_TWG_SITE_SUPPORTER_WALL: number;
    const IMPRESSION_TWG_PUBLICATION: number;
    const IMPRESSION_TWG_STATIC_BUTTON: number;
    const IMPRESSION_TWG_DYNAMIC_BUTTON: number;
    const IMPRESSION_TWG_STICKER_SELECTION_SCREEN: number;
    const IMPRESSION_TWG_PUBLICATION_NOT_SET_UP: number;
    const IMPRESSION_REGWALL_OPT_IN: number;
    const IMPRESSION_NEWSLETTER_OPT_IN: number;
    const IMPRESSION_SUBSCRIPTION_OFFERS_ERROR: number;
    const IMPRESSION_CONTRIBUTION_OFFERS_ERROR: number;
    const IMPRESSION_TWG_SHORTENED_STICKER_FLOW: number;
    const IMPRESSION_SUBSCRIPTION_LINKING_LOADING: number;
    const IMPRESSION_SUBSCRIPTION_LINKING_COMPLETE: number;
    const IMPRESSION_SUBSCRIPTION_LINKING_ERROR: number;
    const IMPRESSION_SURVEY: number;
    const ACTION_SUBSCRIBE: number;
    const ACTION_PAYMENT_COMPLETE: number;
    const ACTION_ACCOUNT_CREATED: number;
    const ACTION_ACCOUNT_ACKNOWLEDGED: number;
    const ACTION_SUBSCRIPTIONS_LANDING_PAGE: number;
    const ACTION_PAYMENT_FLOW_STARTED: number;
    const ACTION_OFFER_SELECTED: number;
    const ACTION_SWG_BUTTON_CLICK: number;
    const ACTION_VIEW_OFFERS: number;
    const ACTION_ALREADY_SUBSCRIBED: number;
    const ACTION_NEW_DEFERRED_ACCOUNT: number;
    const ACTION_LINK_CONTINUE: number;
    const ACTION_LINK_CANCEL: number;
    const ACTION_GOOGLE_UPDATED_CLOSE: number;
    const ACTION_USER_CANCELED_PAYFLOW: number;
    const ACTION_SAVE_SUBSCR_TO_GOOGLE_CONTINUE: number;
    const ACTION_SAVE_SUBSCR_TO_GOOGLE_CANCEL: number;
    const ACTION_SWG_BUTTON_SHOW_OFFERS_CLICK: number;
    const ACTION_SWG_BUTTON_SELECT_OFFER_CLICK: number;
    const ACTION_SWG_BUTTON_SHOW_CONTRIBUTIONS_CLICK: number;
    const ACTION_SWG_BUTTON_SELECT_CONTRIBUTION_CLICK: number;
    const ACTION_USER_CONSENT_DEFERRED_ACCOUNT: number;
    const ACTION_USER_DENY_DEFERRED_ACCOUNT: number;
    const ACTION_DEFERRED_ACCOUNT_REDIRECT: number;
    const ACTION_GET_ENTITLEMENTS: number;
    const ACTION_METER_TOAST_SUBSCRIBE_CLICK: number;
    const ACTION_METER_TOAST_EXPANDED: number;
    const ACTION_METER_TOAST_CLOSED_BY_ARTICLE_INTERACTION: number;
    const ACTION_METER_TOAST_CLOSED_BY_SWIPE_DOWN: number;
    const ACTION_METER_TOAST_CLOSED_BY_X_CLICKED: number;
    const ACTION_SWG_SUBSCRIPTION_MINI_PROMPT_CLICK: number;
    const ACTION_SWG_CONTRIBUTION_MINI_PROMPT_CLICK: number;
    const ACTION_SWG_SUBSCRIPTION_MINI_PROMPT_CLOSE: number;
    const ACTION_SWG_CONTRIBUTION_MINI_PROMPT_CLOSE: number;
    const ACTION_CONTRIBUTION_OFFER_SELECTED: number;
    const ACTION_SHOWCASE_REGWALL_GSI_CLICK: number;
    const ACTION_SHOWCASE_REGWALL_EXISTING_ACCOUNT_CLICK: number;
    const ACTION_SUBSCRIPTION_OFFERS_CLOSED: number;
    const ACTION_CONTRIBUTION_OFFERS_CLOSED: number;
    const ACTION_TWG_STATIC_CTA_CLICK: number;
    const ACTION_TWG_DYNAMIC_CTA_CLICK: number;
    const ACTION_TWG_SITE_LEVEL_SUPPORTER_WALL_CTA_CLICK: number;
    const ACTION_TWG_DIALOG_SUPPORTER_WALL_CTA_CLICK: number;
    const ACTION_TWG_COUNTER_CLICK: number;
    const ACTION_TWG_SITE_SUPPORTER_WALL_ALL_THANKS_CLICK: number;
    const ACTION_TWG_PAID_STICKER_SELECTED_SCREEN_CLOSE_CLICK: number;
    const ACTION_TWG_PAID_STICKER_SELECTION_CLICK: number;
    const ACTION_TWG_FREE_STICKER_SELECTION_CLICK: number;
    const ACTION_TWG_MINI_SUPPORTER_WALL_CLICK: number;
    const ACTION_TWG_CREATOR_BENEFIT_CLICK: number;
    const ACTION_TWG_FREE_TRANSACTION_START_NEXT_BUTTON_CLICK: number;
    const ACTION_TWG_PAID_TRANSACTION_START_NEXT_BUTTON_CLICK: number;
    const ACTION_TWG_STICKER_SELECTION_SCREEN_CLOSE_CLICK: number;
    const ACTION_TWG_ARTICLE_LEVEL_SUPPORTER_WALL_CTA_CLICK: number;
    const ACTION_REGWALL_OPT_IN_BUTTON_CLICK: number;
    const ACTION_REGWALL_ALREADY_OPTED_IN_CLICK: number;
    const ACTION_NEWSLETTER_OPT_IN_BUTTON_CLICK: number;
    const ACTION_NEWSLETTER_ALREADY_OPTED_IN_CLICK: number;
    const ACTION_REGWALL_OPT_IN_CLOSE: number;
    const ACTION_NEWSLETTER_OPT_IN_CLOSE: number;
    const ACTION_SHOWCASE_REGWALL_SWIG_CLICK: number;
    const ACTION_TWG_CHROME_APP_MENU_ENTRY_POINT_CLICK: number;
    const ACTION_TWG_DISCOVER_FEED_MENU_ENTRY_POINT_CLICK: number;
    const ACTION_SHOWCASE_REGWALL_3P_BUTTON_CLICK: number;
    const ACTION_SUBSCRIPTION_OFFERS_RETRY: number;
    const ACTION_CONTRIBUTION_OFFERS_RETRY: number;
    const ACTION_TWG_SHORTENED_STICKER_FLOW_STICKER_SELECTION_CLICK: number;
    const ACTION_INITIATE_UPDATED_SUBSCRIPTION_LINKING: number;
    const ACTION_SURVEY_SUBMIT_CLICK: number;
    const ACTION_SURVEY_CLOSED: number;
    const ACTION_SURVEY_DATA_TRANSFER: number;
    const EVENT_PAYMENT_FAILED: number;
    const EVENT_REGWALL_OPT_IN_FAILED: number;
    const EVENT_NEWSLETTER_OPT_IN_FAILED: number;
    const EVENT_REGWALL_ALREADY_OPT_IN: number;
    const EVENT_NEWSLETTER_ALREADY_OPT_IN: number;
    const EVENT_SUBSCRIPTION_LINKING_FAILED: number;
    const EVENT_SURVEY_ALREADY_SUBMITTED: number;
    const EVENT_SURVEY_SUBMIT_FAILED: number;
    const EVENT_CUSTOM: number;
    const EVENT_CONFIRM_TX_ID: number;
    const EVENT_CHANGED_TX_ID: number;
    const EVENT_GPAY_NO_TX_ID: number;
    const EVENT_GPAY_CANNOT_CONFIRM_TX_ID: number;
    const EVENT_GOOGLE_UPDATED: number;
    const EVENT_NEW_TX_ID: number;
    const EVENT_UNLOCKED_BY_SUBSCRIPTION: number;
    const EVENT_UNLOCKED_BY_METER: number;
    const EVENT_NO_ENTITLEMENTS: number;
    const EVENT_HAS_METERING_ENTITLEMENTS: number;
    const EVENT_OFFERED_METER: number;
    const EVENT_UNLOCKED_FREE_PAGE: number;
    const EVENT_INELIGIBLE_PAYWALL: number;
    const EVENT_UNLOCKED_FOR_CRAWLER: number;
    const EVENT_TWG_COUNTER_VIEW: number;
    const EVENT_TWG_SITE_SUPPORTER_WALL_VIEW: number;
    const EVENT_TWG_STATIC_BUTTON_VIEW: number;
    const EVENT_TWG_DYNAMIC_BUTTON_VIEW: number;
    const EVENT_TWG_PRE_TRANSACTION_PRIVACY_SETTING_PRIVATE: number;
    const EVENT_TWG_POST_TRANSACTION_SETTING_PRIVATE: number;
    const EVENT_TWG_PRE_TRANSACTION_PRIVACY_SETTING_PUBLIC: number;
    const EVENT_TWG_POST_TRANSACTION_SETTING_PUBLIC: number;
    const EVENT_REGWALL_OPTED_IN: number;
    const EVENT_NEWSLETTER_OPTED_IN: number;
    const EVENT_SHOWCASE_METERING_INIT: number;
    const EVENT_DISABLE_MINIPROMPT_DESKTOP: number;
    const EVENT_SUBSCRIPTION_LINKING_SUCCESS: number;
    const EVENT_SURVEY_SUBMITTED: number;
    const EVENT_LINK_ACCOUNT_SUCCESS: number;
    const EVENT_SAVE_SUBSCRIPTION_SUCCESS: number;
    const EVENT_SUBSCRIPTION_STATE: number;
}
/**
 * @implements {Message}
 */
export class AnalyticsEventMeta implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?EventOriginator} */
    private eventOriginator_;
    /** @private {?boolean} */
    private isFromUserAction_;
    /**
     * @return {?EventOriginator}
     */
    getEventOriginator(): EventOriginator | null;
    /**
     * @param {!EventOriginator} value
     */
    setEventOriginator(value: EventOriginator): void;
    /**
     * @return {?boolean}
     */
    getIsFromUserAction(): boolean | null;
    /**
     * @param {boolean} value
     */
    setIsFromUserAction(value: boolean): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class AnalyticsRequest implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?AnalyticsContext} */
    private context_;
    /** @private {?AnalyticsEvent} */
    private event_;
    /** @private {?AnalyticsEventMeta} */
    private meta_;
    /** @private {?EventParams} */
    private params_;
    /**
     * @return {?AnalyticsContext}
     */
    getContext(): AnalyticsContext | null;
    /**
     * @param {!AnalyticsContext} value
     */
    setContext(value: AnalyticsContext): void;
    /**
     * @return {?AnalyticsEvent}
     */
    getEvent(): AnalyticsEvent | null;
    /**
     * @param {!AnalyticsEvent} value
     */
    setEvent(value: AnalyticsEvent): void;
    /**
     * @return {?AnalyticsEventMeta}
     */
    getMeta(): AnalyticsEventMeta | null;
    /**
     * @param {!AnalyticsEventMeta} value
     */
    setMeta(value: AnalyticsEventMeta): void;
    /**
     * @return {?EventParams}
     */
    getParams(): EventParams | null;
    /**
     * @param {!EventParams} value
     */
    setParams(value: EventParams): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class AudienceActivityClientLogsRequest implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?AnalyticsEvent} */
    private event_;
    /**
     * @return {?AnalyticsEvent}
     */
    getEvent(): AnalyticsEvent | null;
    /**
     * @param {!AnalyticsEvent} value
     */
    setEvent(value: AnalyticsEvent): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class CompleteAudienceActionResponse implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?string} */
    private swgUserToken_;
    /** @private {?boolean} */
    private actionCompleted_;
    /** @private {?string} */
    private userEmail_;
    /** @private {?boolean} */
    private alreadyCompleted_;
    /**
     * @return {?string}
     */
    getSwgUserToken(): string | null;
    /**
     * @param {string} value
     */
    setSwgUserToken(value: string): void;
    /**
     * @return {?boolean}
     */
    getActionCompleted(): boolean | null;
    /**
     * @param {boolean} value
     */
    setActionCompleted(value: boolean): void;
    /**
     * @return {?string}
     */
    getUserEmail(): string | null;
    /**
     * @param {string} value
     */
    setUserEmail(value: string): void;
    /**
     * @return {?boolean}
     */
    getAlreadyCompleted(): boolean | null;
    /**
     * @param {boolean} value
     */
    setAlreadyCompleted(value: boolean): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class EntitlementJwt implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?string} */
    private jwt_;
    /** @private {?string} */
    private source_;
    /**
     * @return {?string}
     */
    getJwt(): string | null;
    /**
     * @param {string} value
     */
    setJwt(value: string): void;
    /**
     * @return {?string}
     */
    getSource(): string | null;
    /**
     * @param {string} value
     */
    setSource(value: string): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
export type EntitlementResult = number;
export namespace EntitlementResult {
    const UNKNOWN_ENTITLEMENT_RESULT: number;
    const UNLOCKED_SUBSCRIBER: number;
    const UNLOCKED_FREE: number;
    const UNLOCKED_METER: number;
    const LOCKED_REGWALL: number;
    const LOCKED_PAYWALL: number;
    const INELIGIBLE_PAYWALL: number;
}
export type EntitlementSource = number;
export namespace EntitlementSource {
    const UNKNOWN_ENTITLEMENT_SOURCE: number;
    const GOOGLE_SUBSCRIBER_ENTITLEMENT: number;
    const GOOGLE_SHOWCASE_METERING_SERVICE: number;
    const SUBSCRIBE_WITH_GOOGLE_METERING_SERVICE: number;
    const PUBLISHER_ENTITLEMENT: number;
}
/**
 * @implements {Message}
 */
export class EntitlementsRequest implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?EntitlementJwt} */
    private usedEntitlement_;
    /** @private {?Timestamp} */
    private clientEventTime_;
    /** @private {?EntitlementSource} */
    private entitlementSource_;
    /** @private {?EntitlementResult} */
    private entitlementResult_;
    /** @private {?string} */
    private token_;
    /** @private {?boolean} */
    private isUserRegistered_;
    /** @private {?Timestamp} */
    private subscriptionTimestamp_;
    /**
     * @return {?EntitlementJwt}
     */
    getUsedEntitlement(): EntitlementJwt | null;
    /**
     * @param {!EntitlementJwt} value
     */
    setUsedEntitlement(value: EntitlementJwt): void;
    /**
     * @return {?Timestamp}
     */
    getClientEventTime(): Timestamp | null;
    /**
     * @param {!Timestamp} value
     */
    setClientEventTime(value: Timestamp): void;
    /**
     * @return {?EntitlementSource}
     */
    getEntitlementSource(): EntitlementSource | null;
    /**
     * @param {!EntitlementSource} value
     */
    setEntitlementSource(value: EntitlementSource): void;
    /**
     * @return {?EntitlementResult}
     */
    getEntitlementResult(): EntitlementResult | null;
    /**
     * @param {!EntitlementResult} value
     */
    setEntitlementResult(value: EntitlementResult): void;
    /**
     * @return {?string}
     */
    getToken(): string | null;
    /**
     * @param {string} value
     */
    setToken(value: string): void;
    /**
     * @return {?boolean}
     */
    getIsUserRegistered(): boolean | null;
    /**
     * @param {boolean} value
     */
    setIsUserRegistered(value: boolean): void;
    /**
     * @return {?Timestamp}
     */
    getSubscriptionTimestamp(): Timestamp | null;
    /**
     * @param {!Timestamp} value
     */
    setSubscriptionTimestamp(value: Timestamp): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class EntitlementsResponse implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?string} */
    private jwt_;
    /** @private {?string} */
    private swgUserToken_;
    /**
     * @return {?string}
     */
    getJwt(): string | null;
    /**
     * @param {string} value
     */
    setJwt(value: string): void;
    /**
     * @return {?string}
     */
    getSwgUserToken(): string | null;
    /**
     * @param {string} value
     */
    setSwgUserToken(value: string): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
export type EventOriginator = number;
export namespace EventOriginator {
    const UNKNOWN_CLIENT: number;
    const SWG_CLIENT: number;
    const AMP_CLIENT: number;
    const PROPENSITY_CLIENT: number;
    const SWG_SERVER: number;
    const PUBLISHER_CLIENT: number;
    const SHOWCASE_CLIENT: number;
}
/**
 * @implements {Message}
 */
export class EventParams implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?string} */
    private smartboxMessage_;
    /** @private {?string} */
    private gpayTransactionId_;
    /** @private {?boolean} */
    private hadLogged_;
    /** @private {?string} */
    private sku_;
    /** @private {?string} */
    private oldTransactionId_;
    /** @private {?boolean} */
    private isUserRegistered_;
    /** @private {?string} */
    private subscriptionFlow_;
    /** @private {?Timestamp} */
    private subscriptionTimestamp_;
    /**
     * @return {?string}
     */
    getSmartboxMessage(): string | null;
    /**
     * @param {string} value
     */
    setSmartboxMessage(value: string): void;
    /**
     * @return {?string}
     */
    getGpayTransactionId(): string | null;
    /**
     * @param {string} value
     */
    setGpayTransactionId(value: string): void;
    /**
     * @return {?boolean}
     */
    getHadLogged(): boolean | null;
    /**
     * @param {boolean} value
     */
    setHadLogged(value: boolean): void;
    /**
     * @return {?string}
     */
    getSku(): string | null;
    /**
     * @param {string} value
     */
    setSku(value: string): void;
    /**
     * @return {?string}
     */
    getOldTransactionId(): string | null;
    /**
     * @param {string} value
     */
    setOldTransactionId(value: string): void;
    /**
     * @return {?boolean}
     */
    getIsUserRegistered(): boolean | null;
    /**
     * @param {boolean} value
     */
    setIsUserRegistered(value: boolean): void;
    /**
     * @return {?string}
     */
    getSubscriptionFlow(): string | null;
    /**
     * @param {string} value
     */
    setSubscriptionFlow(value: string): void;
    /**
     * @return {?Timestamp}
     */
    getSubscriptionTimestamp(): Timestamp | null;
    /**
     * @param {!Timestamp} value
     */
    setSubscriptionTimestamp(value: Timestamp): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class FinishedLoggingResponse implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?boolean} */
    private complete_;
    /** @private {?string} */
    private error_;
    /**
     * @return {?boolean}
     */
    getComplete(): boolean | null;
    /**
     * @param {boolean} value
     */
    setComplete(value: boolean): void;
    /**
     * @return {?string}
     */
    getError(): string | null;
    /**
     * @param {string} value
     */
    setError(value: string): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class LinkSaveTokenRequest implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?string} */
    private authCode_;
    /** @private {?string} */
    private token_;
    /**
     * @return {?string}
     */
    getAuthCode(): string | null;
    /**
     * @param {string} value
     */
    setAuthCode(value: string): void;
    /**
     * @return {?string}
     */
    getToken(): string | null;
    /**
     * @param {string} value
     */
    setToken(value: string): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class LinkingInfoResponse implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?boolean} */
    private requested_;
    /**
     * @return {?boolean}
     */
    getRequested(): boolean | null;
    /**
     * @param {boolean} value
     */
    setRequested(value: boolean): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Protos for SwG client/iframe messaging
 * Auto generated, do not edit
 */
/**
 * @interface
 */
export class Message {
    /**
     * @return {string}
     */
    label(): string;
    /**
     * @param {boolean=} unusedIncludeLabel
     * @return {!Array<*>}
     */
    toArray(unusedIncludeLabel?: boolean | undefined): Array<any>;
}
/**
 * @implements {Message}
 */
export class OpenDialogRequest implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?string} */
    private urlPath_;
    /**
     * @return {?string}
     */
    getUrlPath(): string | null;
    /**
     * @param {string} value
     */
    setUrlPath(value: string): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
export type ReaderSurfaceType = number;
export namespace ReaderSurfaceType {
    const READER_SURFACE_TYPE_UNSPECIFIED: number;
    const READER_SURFACE_WORDPRESS: number;
    const READER_SURFACE_CHROME: number;
    const READER_SURFACE_TENOR: number;
}
/**
 * @implements {Message}
 */
export class SkuSelectedResponse implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?string} */
    private sku_;
    /** @private {?string} */
    private oldSku_;
    /** @private {?boolean} */
    private oneTime_;
    /** @private {?string} */
    private playOffer_;
    /** @private {?string} */
    private oldPlayOffer_;
    /** @private {?string} */
    private customMessage_;
    /** @private {?boolean} */
    private anonymous_;
    /** @private {?boolean} */
    private sharingPolicyEnabled_;
    /**
     * @return {?string}
     */
    getSku(): string | null;
    /**
     * @param {string} value
     */
    setSku(value: string): void;
    /**
     * @return {?string}
     */
    getOldSku(): string | null;
    /**
     * @param {string} value
     */
    setOldSku(value: string): void;
    /**
     * @return {?boolean}
     */
    getOneTime(): boolean | null;
    /**
     * @param {boolean} value
     */
    setOneTime(value: boolean): void;
    /**
     * @return {?string}
     */
    getPlayOffer(): string | null;
    /**
     * @param {string} value
     */
    setPlayOffer(value: string): void;
    /**
     * @return {?string}
     */
    getOldPlayOffer(): string | null;
    /**
     * @param {string} value
     */
    setOldPlayOffer(value: string): void;
    /**
     * @return {?string}
     */
    getCustomMessage(): string | null;
    /**
     * @param {string} value
     */
    setCustomMessage(value: string): void;
    /**
     * @return {?boolean}
     */
    getAnonymous(): boolean | null;
    /**
     * @param {boolean} value
     */
    setAnonymous(value: boolean): void;
    /**
     * @return {?boolean}
     */
    getSharingPolicyEnabled(): boolean | null;
    /**
     * @param {boolean} value
     */
    setSharingPolicyEnabled(value: boolean): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class SmartBoxMessage implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?boolean} */
    private isClicked_;
    /**
     * @return {?boolean}
     */
    getIsClicked(): boolean | null;
    /**
     * @param {boolean} value
     */
    setIsClicked(value: boolean): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class SubscribeResponse implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?boolean} */
    private subscribe_;
    /**
     * @return {?boolean}
     */
    getSubscribe(): boolean | null;
    /**
     * @param {boolean} value
     */
    setSubscribe(value: boolean): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class SubscriptionLinkingCompleteResponse implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?string} */
    private publisherProvidedId_;
    /**
     * @return {?string}
     */
    getPublisherProvidedId(): string | null;
    /**
     * @param {string} value
     */
    setPublisherProvidedId(value: string): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class SubscriptionLinkingResponse implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?string} */
    private publisherProvidedId_;
    /**
     * @return {?string}
     */
    getPublisherProvidedId(): string | null;
    /**
     * @param {string} value
     */
    setPublisherProvidedId(value: string): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class SurveyAnswer implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?number} */
    private answerId_;
    /** @private {?string} */
    private answerText_;
    /** @private {?string} */
    private answerCategory_;
    /**
     * @return {?number}
     */
    getAnswerId(): number | null;
    /**
     * @param {number} value
     */
    setAnswerId(value: number): void;
    /**
     * @return {?string}
     */
    getAnswerText(): string | null;
    /**
     * @param {string} value
     */
    setAnswerText(value: string): void;
    /**
     * @return {?string}
     */
    getAnswerCategory(): string | null;
    /**
     * @param {string} value
     */
    setAnswerCategory(value: string): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class SurveyDataTransferRequest implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {!Array<!SurveyQuestion>} */
    private surveyQuestions_;
    /**
     * @return {!Array<!SurveyQuestion>}
     */
    getSurveyQuestionsList(): Array<SurveyQuestion>;
    /**
     * @param {!Array<!SurveyQuestion>} value
     */
    setSurveyQuestionsList(value: Array<SurveyQuestion>): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class SurveyDataTransferResponse implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?boolean} */
    private success_;
    /**
     * @return {?boolean}
     */
    getSuccess(): boolean | null;
    /**
     * @param {boolean} value
     */
    setSuccess(value: boolean): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class SurveyQuestion implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?number} */
    private questionId_;
    /** @private {?string} */
    private questionText_;
    /** @private {?string} */
    private questionCategory_;
    /** @private {!Array<!SurveyAnswer>} */
    private surveyAnswers_;
    /**
     * @return {?number}
     */
    getQuestionId(): number | null;
    /**
     * @param {number} value
     */
    setQuestionId(value: number): void;
    /**
     * @return {?string}
     */
    getQuestionText(): string | null;
    /**
     * @param {string} value
     */
    setQuestionText(value: string): void;
    /**
     * @return {?string}
     */
    getQuestionCategory(): string | null;
    /**
     * @param {string} value
     */
    setQuestionCategory(value: string): void;
    /**
     * @return {!Array<!SurveyAnswer>}
     */
    getSurveyAnswersList(): Array<SurveyAnswer>;
    /**
     * @param {!Array<!SurveyAnswer>} value
     */
    setSurveyAnswersList(value: Array<SurveyAnswer>): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class Timestamp implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?number} */
    private seconds_;
    /** @private {?number} */
    private nanos_;
    /**
     * @return {?number}
     */
    getSeconds(): number | null;
    /**
     * @param {number} value
     */
    setSeconds(value: number): void;
    /**
     * @return {?number}
     */
    getNanos(): number | null;
    /**
     * @param {number} value
     */
    setNanos(value: number): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class ToastCloseRequest implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?boolean} */
    private close_;
    /**
     * @return {?boolean}
     */
    getClose(): boolean | null;
    /**
     * @param {boolean} value
     */
    setClose(value: boolean): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * @implements {Message}
 */
export class ViewSubscriptionsResponse implements Message {
    /**
     * @param {!Array<*>=} data
     * @param {boolean=} includesLabel
     */
    constructor(data?: Array<any> | undefined, includesLabel?: boolean | undefined);
    /** @private {?boolean} */
    private native_;
    /**
     * @return {?boolean}
     */
    getNative(): boolean | null;
    /**
     * @param {boolean} value
     */
    setNative(value: boolean): void;
    /**
     * @param {boolean=} includeLabel
     * @return {!Array<?>}
     * @override
     */
    override toArray(includeLabel?: boolean | undefined): Array<unknown>;
    /**
     * @return {string}
     * @override
     */
    override label(): string;
}
/**
 * Utility to deserialize a buffer
 * @param {!Array<*>} data
 * @return {!Message}
 */
export function deserialize(data: Array<any>): Message;
/**
 * @param {function(new: T)} messageType
 * @return {string}
 * @template T
 */
export function getLabel<T>(messageType: new () => T): string;
//# sourceMappingURL=api_messages.d.ts.map