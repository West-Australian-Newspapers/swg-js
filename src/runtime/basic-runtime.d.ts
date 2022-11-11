/**
 * Returns runtime for testing if available. Throws if the runtime is not
 * initialized yet.
 * @visibleForTesting
 * @return {!BasicRuntime}
 */
export function getBasicRuntime(): BasicRuntime;
/**
 * Installs runtime for SwG Basic.
 * @param {!Window} win
 */
export function installBasicRuntime(win: Window): void;
/**
 * @implements {../api/basic-subscriptions.BasicSubscriptions}
 */
export class BasicRuntime implements .. {
    /**
     * @param {!Window} win
     */
    constructor(win: Window);
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!../model/doc.Doc} */
    private doc_;
    /** @private @const {!Promise} */
    private ready_;
    /** @private @const {!../api/subscriptions.Config} */
    private config_;
    /** @private {../api/basic-subscriptions.ClientOptions|undefined} */
    private clientOptions_;
    /** @private {boolean} */
    private committed_;
    /** @private {?function((!ConfiguredBasicRuntime|!Promise))} */
    private configuredResolver_;
    /** @private @const {!Promise<!ConfiguredBasicRuntime>} */
    private configuredPromise_;
    /** @private {?PageConfigWriter} */
    private pageConfigWriter_;
    /** @private {?PageConfigResolver} */
    private pageConfigResolver_;
    /** @private {boolean} */
    private enableDefaultMeteringHandler_;
    /** @private {string|undefined} */
    private publisherProvidedId_;
    /**
     * @return {!Promise}
     */
    whenReady(): Promise<any>;
    /**
     * @param {boolean} commit
     * @return {!Promise<!ConfiguredBasicRuntime>}
     * @private
     */
    private configured_;
    /** @override */
    override init({ type, isAccessibleForFree, isPartOfType, isPartOfProductId, clientOptions, autoPromptType, alwaysShow, disableDefaultMeteringHandler, publisherProvidedId, }: {
        type: any;
        isAccessibleForFree: any;
        isPartOfType: any;
        isPartOfProductId: any;
        clientOptions: any;
        autoPromptType: any;
        alwaysShow?: boolean;
        disableDefaultMeteringHandler?: boolean;
        publisherProvidedId: any;
    }): void;
    /** @override */
    override setOnEntitlementsResponse(callback: any): Promise<void>;
    /** @override */
    override setOnPaymentResponse(callback: any): Promise<void>;
    /** @override */
    override setOnLoginRequest(): Promise<void>;
    /** @override */
    override setupAndShowAutoPrompt(options: any): Promise<any>;
    /** @override */
    override dismissSwgUI(): Promise<void>;
    /**
     * Sets up all the buttons on the page with attribute
     * 'swg-standard-button:subscription' or 'swg-standard-button:contribution'.
     */
    setupButtons(): Promise<void>;
    /** Process result from checkentitlements view */
    processEntitlements(): Promise<void>;
}
/**
 * @implements  {../api/basic-subscriptions.BasicSubscriptions}
 * @implements {./deps.DepsDef}
 */
export class ConfiguredBasicRuntime implements .., . {
    /**
     * @param {!Window|!Document|!../model/doc.Doc} winOrDoc
     * @param {!../model/page-config.PageConfig} pageConfig
     * @param {{
     *     fetcher: (!./fetcher.Fetcher|undefined),
     *     configPromise: (!Promise|undefined),
     *     enableDefaultMeteringHandler: (boolean|undefined),
     *   }=} integr
     * @param {!../api/subscriptions.Config=} config
     * @param {!../api/basic-subscriptions.ClientOptions=} clientOptions
     */
    constructor(winOrDoc: any, pageConfig: any, integr: any, config: any, clientOptions: any);
    /** @private @const {!../model/doc.Doc} */
    private doc_;
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!./fetcher.Fetcher} */
    private fetcher_;
    /** @private @const {!ConfiguredRuntime} */
    private configuredClassicRuntime_;
    /** @private @const {!AudienceActivityEventListener} */
    private audienceActivityEventListener_;
    /** @private @const {!AutoPromptManager} */
    private autoPromptManager_;
    /** @private @const {!ButtonApi} */
    private buttonApi_;
    /** Getter for the ConfiguredRuntime, exposed for testing. */
    configuredClassicRuntime(): ConfiguredRuntime;
    /** @override */
    override doc(): import("../model/doc").Doc;
    /** @override */
    override win(): Window;
    /** @override */
    override config(): import("../api/subscriptions").Config;
    /** @override */
    override pageConfig(): any;
    /** @override */
    override activities(): import("../components/activities").ActivityPorts;
    /** @override */
    override payClient(): import("./pay-client").PayClient;
    /** @override */
    override dialogManager(): import("../components/dialog-manager").DialogManager;
    /** @override */
    override entitlementsManager(): import("./entitlements-manager").EntitlementsManager;
    /** @override */
    override callbacks(): import("./callbacks").Callbacks;
    /** @override */
    override storage(): import("./storage").Storage;
    /** @override */
    override analytics(): import("./analytics-service").AnalyticsService;
    /** @override */
    override jserror(): import("./jserror").JsError;
    /** @override */
    override eventManager(): import("./client-event-manager").ClientEventManager;
    /** @override */
    override clientConfigManager(): import("./client-config-manager").ClientConfigManager;
    /** @override */
    override init(): void;
    /** @override */
    override setOnEntitlementsResponse(callback: any): void;
    /** @override */
    override setOnPaymentResponse(callback: any): void;
    /** @override */
    override setOnLoginRequest(): void;
    /** Process result from checkentitlements view */
    processEntitlements(): void;
    /**
     * Handler function to process EntitlementsResponse.
     * @param {!../components/activities.ActivityPortDef} port
     */
    entitlementsResponseHandler(port: any): Promise<void>;
    /** @override */
    override setupAndShowAutoPrompt(options: any): Promise<any>;
    /** @override */
    /** Dismiss displayed SwG UI */
    dismissSwgUI(): void;
    /**
     * Sets up all the buttons on the page with attribute
     * 'swg-standard-button:subscription' or 'swg-standard-button:contribution'.
     */
    setupButtons(): void;
    /**
     * Sets the callback when the offers flow is requested.
     * @param {function()} callback
     * @private
     */
    private setOnOffersFlowRequest_;
}
import { ConfiguredRuntime } from "./runtime";
//# sourceMappingURL=basic-runtime.d.ts.map