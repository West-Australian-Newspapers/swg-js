/**
 * Properties:
 * - entitlements - the current entitlements.
 * - consent - whether to ask the user for account creation consent.
 *   Default is `true`.
 */
export type DeferredAccountCreationRequest = {
    entitlements: ((EntitlementsDef | undefined) | null);
    consent: (boolean | undefined);
};
/**
 * Properties:
 * - entitlements - the current entitlements.
 * - consent - whether to ask the user for account creation consent.
 *   Default is `true`.
 *
 * @typedef {{
 *   entitlements: (?EntitlementsDef|undefined),
 *   consent: (boolean|undefined),
 * }}
 */
export let DeferredAccountCreationRequest: any;
/**
 */
export class DeferredAccountCreationResponse {
    /**
     * @param {!EntitlementsDef} entitlements
     * @param {!UserDataDef} userData
     * @param {!Array<!PurchaseDataDef>} purchaseDataList
     * @param {function():!Promise} completeHandler
     */
    constructor(entitlements: EntitlementsDef, userData: UserDataDef, purchaseDataList: Array<PurchaseDataDef>, completeHandler: () => Promise<any>);
    /** @const {!EntitlementsDef} */
    entitlements: EntitlementsDef;
    /** @const {!UserDataDef} */
    userData: UserDataDef;
    /** @const {!Array<!PurchaseDataDef>} */
    purchaseDataList: PurchaseDataDef[];
    /** @const {!PurchaseDataDef} */
    purchaseData: PurchaseDataDef;
    /** @private @const {function():!Promise} */
    private completeHandler_;
    /**
     * @return {!DeferredAccountCreationResponse}
     */
    clone(): DeferredAccountCreationResponse;
    /**
     * @return {!Object}
     */
    json(): any;
    /**
     * Allows the receiving site to complete/acknowledge that it registered
     * the subscription info. The typical action would be to create an
     * account (or match an existing one) and associated the subscription with
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
import { Entitlements as EntitlementsDef } from "./entitlements";
import { UserData as UserDataDef } from "./user-data";
import { PurchaseData as PurchaseDataDef } from "./subscribe-response";
//# sourceMappingURL=deferred-account-creation.d.ts.map