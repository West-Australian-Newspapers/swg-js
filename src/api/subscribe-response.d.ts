/**
 */
export class SubscribeResponse {
    /**
     * @param {string} raw
     * @param {!PurchaseData} purchaseData
     * @param {?UserDataDef} userData
     * @param {?EntitlementsDef} entitlements
     * @param {!string} productType
     * @param {function():!Promise} completeHandler
     * @param {?string=} oldSku
     * @param {?string=} swgUserToken
     * @param {?number=} paymentRecurrence
     * @param {?Object=} requestMetadata
     */
    constructor(raw: string, purchaseData: PurchaseData, userData: UserDataDef | null, entitlements: EntitlementsDef | null, productType: string, completeHandler: () => Promise<any>, oldSku?: (string | null) | undefined, swgUserToken?: (string | null) | undefined, paymentRecurrence?: (number | null) | undefined, requestMetadata?: (any | null) | undefined);
    /** @const {string} */
    raw: string;
    /** @const {!PurchaseData} */
    purchaseData: PurchaseData;
    /** @const {?UserDataDef} */
    userData: UserDataDef;
    /** @const {?EntitlementsDef} */
    entitlements: EntitlementsDef;
    /** @const {string} */
    productType: string;
    /** @private @const {function():!Promise} */
    private completeHandler_;
    /** @const {?string} */
    oldSku: string;
    /** @const {?string} */
    swgUserToken: string;
    /** @const {?number} */
    paymentRecurrence: number;
    /** @const {?Object} */
    requestMetadata: any;
    /**
     * @return {!SubscribeResponse}
     */
    clone(): SubscribeResponse;
    /**
     * @return {!Object}
     */
    json(): any;
    /**
     * Allows the receiving site to complete/acknowledge that it registered
     * the subscription purchase. The typical action would be to create an
     * account (or match an existing one) and associated the purchase with
     * that account.
     *
     * SwG will display progress indicator until this method is called and
     * upon receiving this call will show the confirmation to the user.
     * The promise returned by this method will yield once the user closes
     * the confirmation.
     *
     * @return {!Promise}
     */
    complete(): Promise<any>;
}
/**
 */
export class PurchaseData {
    /**
     * @param {string} raw
     * @param {string} signature
     */
    constructor(raw: string, signature: string);
    /** @const {string} */
    raw: string;
    /** @const {string} */
    data: string;
    /** @const {string} */
    signature: string;
    /**
     * @return {!PurchaseData}
     */
    clone(): PurchaseData;
    /**
     * @return {!Object}
     */
    json(): any;
}
import { UserData as UserDataDef } from "./user-data";
import { Entitlements as EntitlementsDef } from "./entitlements";
//# sourceMappingURL=subscribe-response.d.ts.map