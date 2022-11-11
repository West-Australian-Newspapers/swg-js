/** Source for Google-provided non-metering entitlements. */
export const GOOGLE_SOURCE: "google";
/** Source for Google-provided metering entitlements. */
export const GOOGLE_METERING_SOURCE: "google:metering";
/** Source for privileged entitlements. */
export const PRIVILEGED_SOURCE: "privileged";
/** Subscription token for dev mode entitlements. */
export const DEV_MODE_TOKEN: "GOOGLE_DEV_MODE_TOKEN";
/** Order ID returned for dev mode entitlements. */
export const DEV_MODE_ORDER: "GOOGLE_DEV_MODE_ORDER";
/**
 * The holder of the entitlements for a service.
 */
export class Entitlements {
    /**
     * @param {string} service
     * @param {string} raw
     * @param {!Array<!Entitlement>} entitlements
     * @param {?string} currentProduct
     * @param {function(!Entitlements)} ackHandler
     * @param {function(!Entitlements, ?Function=)} consumeHandler
     * @param {?boolean|undefined} isReadyToPay
     * @param {?string|undefined} decryptedDocumentKey
     */
    constructor(service: string, raw: string, entitlements: Array<Entitlement>, currentProduct: string | null, ackHandler: (arg0: Entitlements) => any, consumeHandler: (arg0: Entitlements, arg1: (Function | null) | undefined) => any, isReadyToPay: (boolean | undefined) | null, decryptedDocumentKey: (string | undefined) | null);
    /** @const {string} */
    service: string;
    /** @const {string} */
    raw: string;
    /** @const {!Array<!Entitlement>} */
    entitlements: Entitlement[];
    /** @const {boolean} */
    isReadyToPay: boolean;
    /** @const {?string} */
    decryptedDocumentKey: string;
    /** @private @const {?string} */
    private product_;
    /** @private @const {function(!Entitlements)} */
    private ackHandler_;
    /** @private @const {function(!Entitlements, ?Function=)} */
    private consumeHandler_;
    /**
     * @return {!Entitlements}
     */
    clone(): Entitlements;
    /**
     * @return {!Object}
     */
    json(): any;
    /**
     * Returns true if the current article is unlocked by a cacheable entitlement.
     * Metering entitlements aren't cacheable, because each metering entitlement
     * is meant to be used for one article. Subscription entitlements that are
     * not returned by dev mode are cacheable, because subscription entitlements
     * are meant to be used across multiple articles on a publication.
     * @return {boolean}
     */
    enablesThisWithCacheableEntitlements(): boolean;
    /**
     * Returns true if the current article is unlocked by a
     * Google metering entitlement. These entitlements may come
     * from Google News Intiative's licensing program to support news.
     * https://www.blog.google/outreach-initiatives/google-news-initiative/licensing-program-support-news-industry-/
     * They may also come from Google's Subscribe With Google Metering
     * functionality.
     * @return {boolean}
     */
    enablesThisWithGoogleMetering(): boolean;
    /**
     * Returns true if the current article is unlocked by a Google dev mode
     * entitlement.
     * @return {boolean}
     */
    enablesThisWithGoogleDevMode(): boolean;
    /**
     * @param {string=} source
     * @return {boolean}
     */
    enablesThis(source?: string | undefined): boolean;
    /**
     * @param {string=} source
     * @return {boolean}
     */
    enablesAny(source?: string | undefined): boolean;
    /**
     * Whether these entitlements enable the specified product, optionally also
     * restricting the source.
     * @param {?string} product
     * @param {string=} source
     * @return {boolean}
     */
    enables(product: string | null, source?: string | undefined): boolean;
    /**
     * Returns the first matching entitlement for the current product,
     * optionally also matching the specified source.
     * @param {string=} source
     * @return {?Entitlement}
     */
    getEntitlementForThis(source?: string | undefined): Entitlement | null;
    /**
     * Returns the first matching entitlement for the specified product,
     * optionally also matching the specified source.
     *
     * Returns non-metering entitlements if possible, to avoid consuming
     * metered reads unnecessarily.
     *
     * @param {?string} product
     * @param {string=} source
     * @return {?Entitlement}
     */
    getEntitlementFor(product: string | null, source?: string | undefined): Entitlement | null;
    /**
     * Returns the first matching entitlement for the specified source w/o
     * matching any specific products.
     * @param {string} source
     * @return {?Entitlement}
     */
    getEntitlementForSource(source: string): Entitlement | null;
    /**
     * A 3p site should call this method to acknowledge that it "saw" and
     * "understood" entitlements.
     */
    ack(): void;
    /**
     * A 3p site should call this method to consume a Google metering entitlement.
     * When a metering entitlement is consumed, SwG shows the user a metering dialog.
     * When the user closes the dialog, SwG depletes one of the user's remaining
     * "free reads".
     * @param {?Function=} onCloseDialog Called after the user closes the dialog.
     */
    consume(onCloseDialog?: (Function | null) | undefined): void;
}
/**
 * The single entitlement object.
 */
export class Entitlement {
    /**
     * @param {?Object} json
     * @param {!../utils/jwt.JwtHelper} jwtHelper
     * @return {!Entitlement}
     */
    static parseFromJson(json: any | null, jwtHelper: any): Entitlement;
    /**
     * The JSON is expected in one of the forms:
     * - Single entitlement: `{products: [], ...}`.
     * - A list of entitlements: `[{products: [], ...}, {...}]`.
     * @param {!Object|!Array<!Object>} json
     * @param {!../utils/jwt.JwtHelper} jwtHelper
     * @return {!Array<!Entitlement>}
     */
    static parseListFromJson(json: any | Array<any>, jwtHelper: any): Array<Entitlement>;
    /**
     * @param {string} source
     * @param {!Array<string>} products
     * @param {string} subscriptionToken
     * @param {JsonObject|null|undefined} subscriptionTokenContents
     * @param {!Timestamp|null} subscriptionTimestamp
     */
    constructor(source: string, products: Array<string>, subscriptionToken: string, subscriptionTokenContents: JsonObject | null | undefined, subscriptionTimestamp: Timestamp | null);
    /** @const {string} */
    source: string;
    /** @const {!Array<string>} */
    products: string[];
    /** @const {string} */
    subscriptionToken: string;
    /** @const {JsonObject|null|undefined} */
    subscriptionTokenContents: JsonObject;
    /** @const {!Timestamp|null} */
    subscriptionTimestamp: Timestamp;
    /**
     * @return {!Entitlement}
     */
    clone(): Entitlement;
    /**
     * @return {!Object}
     */
    json(): any;
    /**
     * @param {?string} product
     * @return {boolean}
     */
    enables(product: string | null): boolean;
    /**
     * Returns the SKU associated with this entitlement.
     * @return {?string}
     */
    getSku(): string | null;
}
import { Timestamp } from "../proto/api_messages";
//# sourceMappingURL=entitlements.d.ts.map