/**
 * Returns runtime for testing if available. Throws if the runtime is not
 * initialized yet.
 * @visibleForTesting
 * @return {!Runtime}
 */
export function getRuntime(): Runtime;
/**
 * Installs SwG runtime.
 * @param {!Window} win
 */
export function installRuntime(win: Window): void;
/**
 * @implements {SubscriptionsInterface}
 */
export class Runtime implements SubscriptionsInterface {
    /**
     * @param {!Window} win
     */
    constructor(win: Window);
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!DocInterface} */
    private doc_;
    /** @private @const {!Promise} */
    private ready_;
    /** @private {?string} */
    private productOrPublicationId_;
    /** @private @const {!../api/subscriptions.Config} */
    private config_;
    /** @private {boolean} */
    private committed_;
    /** @private {?function((!ConfiguredRuntime|!Promise))} */
    private configuredResolver_;
    /** @private @const {!Promise<!ConfiguredRuntime>} */
    private configuredPromise_;
    /** @private {?PageConfigResolver} */
    private pageConfigResolver_;
    /** @private @const {!ButtonApi} */
    private buttonApi_;
    /**
     * @return {!Promise}
     */
    whenReady(): Promise<any>;
    /**
     * @param {boolean} commit
     * @return {!Promise<!ConfiguredRuntime>}
     * @private
     */
    private configured_;
    /**
     * Starts the subscription flow if it hasn't been started and the page is
     * configured to start it automatically.
     *
     * @return {?Promise}
     * @package
     */
    startSubscriptionsFlowIfNeeded(): Promise<any> | null;
    /** @override */
    override init(productOrPublicationId: any): void;
    /** @override */
    override configure(config: any): Promise<void>;
    /** @override */
    override start(): Promise<void>;
    /** @override */
    override reset(): Promise<void>;
    /** @override */
    override clear(): Promise<void>;
    /** @override */
    override getEntitlements(params: any): Promise<import("../api/entitlements").Entitlements>;
    /** @override */
    override setOnEntitlementsResponse(callback: any): Promise<void>;
    /** @override */
    override getOffers(options: any): Promise<any[]>;
    /** @override */
    override showOffers(options: any): Promise<any>;
    /** @override */
    override showUpdateOffers(options: any): Promise<any>;
    /** @override */
    override showSubscribeOption(options: any): Promise<any>;
    /** @override */
    override showAbbrvOffer(options: any): Promise<any>;
    /** @override */
    override showContributionOptions(options: any): Promise<any>;
    /** @override */
    override waitForSubscriptionLookup(accountPromise: any): Promise<any>;
    /** @override */
    override setOnNativeSubscribeRequest(callback: any): Promise<void>;
    /** @override */
    override setOnSubscribeResponse(callback: any): Promise<void>;
    /** @override */
    override subscribe(sku: any): Promise<any>;
    /** @override */
    override updateSubscription(subscriptionRequest: any): Promise<any>;
    /** @override */
    override setOnContributionResponse(callback: any): Promise<void>;
    /** @override */
    override setOnPaymentResponse(callback: any): Promise<void>;
    /** @override */
    override contribute(skuOrSubscriptionRequest: any): Promise<any>;
    /** @override */
    override completeDeferredAccountCreation(options: any): Promise<import("../api/deferred-account-creation").DeferredAccountCreationResponse>;
    /** @override */
    override setOnLoginRequest(callback: any): Promise<void>;
    /** @override */
    override triggerLoginRequest(request: any): Promise<void>;
    /** @override */
    override setOnLinkComplete(callback: any): Promise<void>;
    /** @override */
    override linkAccount(params?: {}): Promise<any>;
    /** @override */
    override setOnFlowStarted(callback: any): Promise<void>;
    /** @override */
    override setOnFlowCanceled(callback: any): Promise<void>;
    /** @override */
    override saveSubscription(saveSubscriptionRequestCallback: any): Promise<any>;
    /** @override */
    override showLoginPrompt(): Promise<any>;
    /** @override */
    override showLoginNotification(): Promise<any>;
    /** @override */
    override createButton(optionsOrCallback: any, callback: any): Element;
    /** @override */
    override attachSmartButton(button: any, optionsOrCallback: any, callback: any): Promise<void>;
    /** @override */
    override attachButton(button: any, optionsOrCallback: any, callback: any): Element;
    /** @override */
    override getPropensityModule(): Promise<Propensity>;
    /** @override */
    override getLogger(): Promise<Logger>;
    /** @override */
    override getEventManager(): Promise<ClientEventManager>;
    /** @override */
    override setShowcaseEntitlement(entitlement: any): Promise<void>;
    /** @override */
    override consumeShowcaseEntitlementJwt(showcaseEntitlementJwt: any, onCloseDialog: any): Promise<void>;
    /** @override */
    override showBestAudienceAction(): void;
    /** @override */
    override setPublisherProvidedId(publisherProvidedId: any): Promise<void>;
}
/**
 * @implements {DepsDef}
 * @implements {SubscriptionsInterface}
 */
export class ConfiguredRuntime implements DepsDef, SubscriptionsInterface {
    /**
     * @param {!Window|!Document|!DocInterface} winOrDoc
     * @param {!../model/page-config.PageConfig} pageConfig
     * @param {{
     *     fetcher: (!FetcherInterface|undefined),
     *     configPromise: (!Promise|undefined),
     *     enableGoogleAnalytics: (boolean|undefined),
     *     enableDefaultMeteringHandler: (boolean|undefined),
     *     useArticleEndpoint: (boolean|undefined)
     *   }=} integr
     * @param {!../api/subscriptions.Config=} config
     * @param {!{
     *   lang: (string|undefined),
     *   theme: (!../api/basic-subscriptions.ClientTheme|undefined),
     *   }=} clientOptions
     */
    constructor(winOrDoc: Window | Document | DocInterface, pageConfig: any, integr?: {
        fetcher: (FetcherInterface | undefined);
        configPromise: (Promise<any> | undefined);
        enableGoogleAnalytics: (boolean | undefined);
        enableDefaultMeteringHandler: (boolean | undefined);
        useArticleEndpoint: (boolean | undefined);
    } | undefined, config: any, clientOptions: any);
    /** @private @const {!ClientEventManager} */
    private eventManager_;
    /** @private @const {!DocInterface} */
    private doc_;
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!../api/subscriptions.Config} */
    private config_;
    /** @private @const {!../model/page-config.PageConfig} */
    private pageConfig_;
    /** @private @const {!Promise} */
    private documentParsed_;
    /** @private @const {!JsError} */
    private jserror_;
    /** @private @const {!FetcherInterface} */
    private fetcher_;
    /** @private @const {!Storage} */
    private storage_;
    /** @private @const {!DialogManager} */
    private dialogManager_;
    /** @private @const {!Callbacks} */
    private callbacks_;
    /** @private {?OffersFlow} */
    private lastOffersFlow_;
    /** @private {?ContributionsFlow} */
    private lastContributionsFlow_;
    /** @private {string|undefined} */
    private publisherProvidedId_;
    /** @private @const {!GoogleAnalyticsEventListener} */
    private googleAnalyticsEventListener_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {!AnalyticsService} */
    private analyticsService_;
    /** @private @const {!PayClient} */
    private payClient_;
    /** @private @const {!Logger} */
    private logger_;
    /** @private @const {!EntitlementsManager} */
    private entitlementsManager_;
    /** @private @const {!ClientConfigManager} */
    private clientConfigManager_;
    /** @private @const {!Propensity} */
    private propensityModule_;
    /** @private @const {!OffersApi} */
    private offersApi_;
    /** @private @const {!ButtonApi} */
    private buttonApi_;
    /** @override */
    override doc(): DocInterface;
    /** @override */
    override win(): Window;
    /** @override */
    override pageConfig(): any;
    /** @override */
    override jserror(): JsError;
    /** @override */
    override activities(): ActivityPorts;
    /** @override */
    override payClient(): PayClient;
    /** @override */
    override dialogManager(): DialogManager;
    /** @override */
    override entitlementsManager(): EntitlementsManager;
    /** @override */
    override callbacks(): Callbacks;
    /** @override */
    override storage(): Storage;
    /** @override */
    override clientConfigManager(): ClientConfigManager;
    /** @override */
    override analytics(): AnalyticsService;
    /** @override */
    override init(): void;
    /** @override */
    override configure(config: any): void;
    /**
     * @param {!../api/subscriptions.Config} config
     * @private
     */
    private configure_;
    /** @override */
    override config(): import("../api/subscriptions").Config;
    /** @override */
    override reset(): void;
    /** @override */
    override clear(): void;
    /** Close dialog. */
    closeDialog(): void;
    /** @override */
    override start(): Promise<void>;
    /** @override */
    override getEntitlements(params: any): Promise<import("../api/entitlements").Entitlements>;
    /** @override */
    override setOnEntitlementsResponse(callback: any): void;
    /** @override */
    override getOffers(options: any): Promise<any[]>;
    /** @override */
    override showOffers(options: any): Promise<any>;
    /** @override */
    override showUpdateOffers(options: any): Promise<any>;
    /** @override */
    override showSubscribeOption(options: any): Promise<any>;
    /** @override */
    override showAbbrvOffer(options: any): Promise<any>;
    /** @override */
    override showContributionOptions(options: any): Promise<any>;
    /**
     * Get the last contribution offers flow.
     * @return {?ContributionsFlow}
     */
    getLastContributionsFlow(): ContributionsFlow | null;
    /** @override */
    override waitForSubscriptionLookup(accountPromise: any): Promise<any>;
    /** @override */
    override setOnLoginRequest(callback: any): void;
    /** @override */
    override triggerLoginRequest(request: any): void;
    /** @override */
    override setOnLinkComplete(callback: any): void;
    /** @override */
    override linkAccount(params?: {}): Promise<any>;
    /** @override */
    override saveSubscription(saveSubscriptionRequestCallback: any): Promise<any>;
    /** @override */
    override showLoginPrompt(): Promise<any>;
    /** @override */
    override showLoginNotification(): Promise<any>;
    /** @override */
    override setOnNativeSubscribeRequest(callback: any): void;
    /** @override */
    override setOnSubscribeResponse(callback: any): void;
    /** @override */
    override setOnPaymentResponse(callback: any): void;
    /** @override */
    override subscribe(sku: any): Promise<any>;
    /** @override */
    override updateSubscription(subscriptionRequest: any): Promise<any>;
    /** @override */
    override setOnContributionResponse(callback: any): void;
    /** @override */
    override contribute(skuOrSubscriptionRequest: any): Promise<any>;
    /** @override */
    override completeDeferredAccountCreation(options: any): Promise<import("../api/deferred-account-creation").DeferredAccountCreationResponse>;
    /** @override */
    override setOnFlowStarted(callback: any): void;
    /** @override */
    override setOnFlowCanceled(callback: any): void;
    /** @override */
    override createButton(optionsOrCallback: any, callback: any): Element;
    /** @override */
    override attachButton(button: any, optionsOrCallback: any, callback: any): void;
    /** @override */
    override attachSmartButton(button: any, optionsOrCallback: any, callback: any): void;
    /** @override */
    override getPropensityModule(): Promise<Propensity>;
    /**
     * This one exists as an internal helper so SwG logging doesn't require a promise.
     * @return {!ClientEventManager}
     */
    eventManager(): ClientEventManager;
    /**
     * Get the last subscription offers flow.
     * @return {?OffersFlow}
     */
    getLastOffersFlow(): OffersFlow | null;
    /**
     * This one exists as a public API so publishers can subscribe to SwG events.
     * @override */
    override getEventManager(): Promise<ClientEventManager>;
    /** @override */
    override getLogger(): Promise<Logger>;
    /** @override */
    override setShowcaseEntitlement(entitlement: any): Promise<void>;
    /** @override */
    override consumeShowcaseEntitlementJwt(showcaseEntitlementJwt: any, onCloseDialog: any): void;
    /** @override */
    override showBestAudienceAction(): void;
    /** @override */
    override setPublisherProvidedId(publisherProvidedId: any): void;
}
import { Subscriptions as SubscriptionsInterface } from "../api/subscriptions";
import { Propensity } from "./propensity";
import { Logger } from "./logger";
import { ClientEventManager } from "./client-event-manager";
import { DepsDef } from "./deps";
import { Doc as DocInterface } from "../model/doc";
import { JsError } from "./jserror";
import { ActivityPorts } from "../components/activities";
import { PayClient } from "./pay-client";
import { DialogManager } from "../components/dialog-manager";
import { EntitlementsManager } from "./entitlements-manager";
import { Callbacks } from "./callbacks";
import { Storage } from "./storage";
import { ClientConfigManager } from "./client-config-manager";
import { AnalyticsService } from "./analytics-service";
import { ContributionsFlow } from "./contributions-flow";
import { OffersFlow } from "./offers-flow";
import { Fetcher as FetcherInterface } from "./fetcher";
//# sourceMappingURL=runtime.d.ts.map