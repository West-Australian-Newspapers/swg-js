/**
 * /api/entitlements.Entitlements),
 *  clientConfig: (../model/client-config.ClientConfig),
 *  audienceActions: ({
 *    actions: Array<{
 *      type: (string)
 *    }>,
 *    engineId: (string)
 *  }),
 *  experimentConfig: ({
 *    experimentFlags: Array<{
 *      type: (string)
 *    }>
 *  })
 * }}
 */
export type Article = {
    entitlements: (any);
};
/**
 * Article response object.
 *
 * @typedef {{
 *  entitlements: (../api/entitlements.Entitlements),
 *  clientConfig: (../model/client-config.ClientConfig),
 *  audienceActions: ({
 *    actions: Array<{
 *      type: (string)
 *    }>,
 *    engineId: (string)
 *  }),
 *  experimentConfig: ({
 *    experimentFlags: Array<{
 *      type: (string)
 *    }>
 *  })
 * }}
 */
export let Article: any;
/**
 */
export class EntitlementsManager {
    /**
     * @param {!Window} win
     * @param {!../model/page-config.PageConfig} pageConfig
     * @param {!./fetcher.Fetcher} fetcher
     * @param {!./deps.DepsDef} deps
     * @param {!boolean} useArticleEndpoint
     * @param {!boolean} enableDefaultMeteringHandler
     */
    constructor(win: Window, pageConfig: any, fetcher: any, deps: any, useArticleEndpoint: boolean, enableDefaultMeteringHandler: boolean);
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!../model/page-config.PageConfig} */
    private pageConfig_;
    /** @private @const {string} */
    private publicationId_;
    /** @private @const {!./fetcher.Fetcher} */
    private fetcher_;
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!JwtHelper} */
    private jwtHelper_;
    /** @private {?Promise<!Entitlements>} */
    private responsePromise_;
    /** @private {number} */
    private positiveRetries_;
    /** @private {boolean} */
    private blockNextNotification_;
    /** @private {boolean} */
    private blockNextToast_;
    /**
     * String containing encoded metering parameters currently.
     * We may expand this to contain more information in the future.
     * @private {?string}
     */
    private encodedParams_;
    /** @protected {!string} */
    protected encodedParamName_: string;
    /** @protected {!string} */
    protected action_: string;
    /** @private @const {!./storage.Storage} */
    private storage_;
    /** @private @const {!../runtime/analytics-service.AnalyticsService} */
    private analyticsService_;
    /** @private @const {!../api/subscriptions.Config} */
    private config_;
    /**
     * Tests can use this promise to wait for POST requests to finish.
     * @visibleForTesting
     */
    entitlementsPostPromise: Promise<any>;
    /** @private @const {boolean} */
    private useArticleEndpoint_;
    /** @private @const {boolean} */
    private enableDefaultMeteringHandler_;
    /** @private {?Article} */
    private article_;
    /** @private {boolean} */
    private enableMeteredByGoogle_;
    /**
     * @param {boolean=} expectPositive
     */
    reset(expectPositive?: boolean | undefined): void;
    /**
     * Clears all of the entitlements state and cache.
     */
    clear(): void;
    /**
     * @param {!GetEntitlementsParamsExternalDef=} params
     * @return {!Promise<!Entitlements>}
     */
    getEntitlements(params?: GetEntitlementsParamsExternalDef | undefined): Promise<Entitlements>;
    /**
     * @param {string} raw
     * @param {boolean=} isReadyToPay
     * @return {boolean}
     */
    pushNextEntitlements(raw: string, isReadyToPay?: boolean | undefined): boolean;
    /**
     * Retrieves the 'gaa_n' parameter from the query string.
     */
    getGaaToken_(): string;
    /**
     * Sends a pingback that marks a metering entitlement as used.
     * @param {!Entitlement|null} entitlement
     */
    consumeMeter_(entitlement: Entitlement | null): void;
    /**
     * Listens for events from the event manager and informs the server
     * about publisher entitlements and non-consumable Google entitlements.
     * @param {!../api/client-event-manager-api.ClientEvent} event
     */
    possiblyPingbackOnClientEvent_(event: any): void;
    postEntitlementsRequest_(usedEntitlement: any, entitlementResult: any, entitlementSource: any, optionalToken?: string, optionalIsUserRegistered?: any, optionalSubscriptionTimestamp?: any): void;
    /**
     * @param {!GetEntitlementsParamsExternalDef=} params
     * @return {!Promise<!Entitlements>}
     * @private
     */
    private getEntitlementsFlow_;
    /**
     * @param {!GetEntitlementsParamsExternalDef=} params
     * @return {!Promise<!Entitlements>}
     * @private
     */
    private fetchEntitlementsWithCaching_;
    /**
     * If the manager is also responsible for fetching the Article, it
     * will be accessible from here and should resolve a null promise otherwise.
     * @returns {!Promise<?Article>}
     */
    getArticle(): Promise<Article | null>;
    /**
     * The experiment flags that are returned by the article endpoint should be accessible from here.
     * @returns {Promise<Array<string>>}
     */
    getExperimentConfigFlags(): Promise<Array<string>>;
    /**
     * @param {!GetEntitlementsParamsExternalDef=} params
     * @return {!Promise<!Entitlements>}
     * @private
     */
    private fetchEntitlements_;
    /**
     * @param {boolean} value
     */
    setToastShown(value: boolean): void;
    /**
     */
    blockNextNotification(): void;
    /**
     */
    blockNextToast(): void;
    /**
     */
    unblockNextNotification(): void;
    /**
     * Allow Google to handle metering for the given page.
     */
    enableMeteredByGoogle(): void;
    /**
     * The JSON must either contain a "signedEntitlements" with JWT, or
     * "entitlements" field with plain JSON object.
     * @param {!Object} json
     * @return {!Entitlements}
     */
    parseEntitlements(json: any): Entitlements;
    /**
     * Persist swgUserToken in local storage if entitlements and swgUserToken exist
     * @param {?string|undefined} swgUserToken
     * @private
     */
    private saveSwgUserToken_;
    /**
     * @param {string} raw
     * @param {boolean} requireNonExpired
     * @param {boolean=} isReadyToPay
     * @param {?string=} decryptedDocumentKey
     * @return {?Entitlements}
     * @private
     */
    private getValidJwtEntitlements_;
    /**
     * @param {string} raw
     * @param {!Object|!Array<!Object>} json
     * @param {boolean=} isReadyToPay
     * @param {?string=} decryptedDocumentKey
     * @return {!Entitlements}
     * @private
     */
    private createEntitlements_;
    /**
     * @param {!Entitlements} entitlements
     * @private
     */
    private onEntitlementsFetched_;
    /**
     * @param {!Entitlement} entitlement
     * @return {!Promise}
     * @private
     */
    private maybeShowToast_;
    /**
     * @param {!Entitlements} entitlements
     * @private
     */
    private ack_;
    /**
     * @param {!Entitlements} entitlements
     * @param {?Function=} onCloseDialog Called after the user closes the dialog.
     * @private
     */
    private consume_;
    /**
     * @param {!GetEntitlementsParamsExternalDef=} params
     * @return {!Promise<!Entitlements>}
     * @private
     */
    private fetch_;
}
import { GetEntitlementsParamsExternalDef } from "../api/subscriptions";
import { Entitlements } from "../api/entitlements";
import { Entitlement } from "../api/entitlements";
//# sourceMappingURL=entitlements-manager.d.ts.map