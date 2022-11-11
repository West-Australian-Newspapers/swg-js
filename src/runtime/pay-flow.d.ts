/**
 * @param {!./deps.DepsDef} deps
 * @param {*} data
 * @param {function():!Promise} completeHandler
 * @return {!SubscribeResponse}
 */
export function parseSubscriptionResponse(deps: any, data: any, completeHandler: () => Promise<any>): SubscribeResponse;
/**
 * @param {!Object} swgData
 * @return {?UserData}
 * @package Visible for testing.
 */
export function parseUserData(swgData: any): UserData | null;
/**
 * @param {!./deps.DepsDef} deps
 * @param {!Object} swgData
 * @return {?../api/entitlements.Entitlements}
 * @package Visible for testing.
 */
export function parseEntitlements(deps: any, swgData: any): any;
/**
 * Subscribe with Google request to pass to payments.
 */
export type SwgPaymentRequest = {
    skuId: string;
    oldSku: (string | undefined);
    replaceSkuProrationMode: (number | undefined);
    paymentRecurrence: (number | undefined);
    swgVersion: (string | undefined);
    metadata: (any | undefined);
};
/**
 * Subscribe with Google request to pass to payments.
 *  @typedef {{
 *    skuId: string,
 *    oldSku: (string|undefined),
 *    replaceSkuProrationMode: (number|undefined),
 *    paymentRecurrence: (number|undefined),
 *    swgVersion: (string|undefined),
 *    metadata: (Object|undefined)
 * }}
 */
export let SwgPaymentRequest: any;
/**
 * String values input by the publisher are mapped to the number values.
 * @type {!Object<string, number>}
 */
export const ReplaceSkuProrationModeMapping: {
    [x: string]: number;
};
export namespace RecurrenceMapping {
    const AUTO: number;
    const ONE_TIME: number;
}
/**
 * The flow to initiate payment process.
 */
export class PayStartFlow {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {!../api/subscriptions.SubscriptionRequest} subscriptionRequest
     * @param {!../api/subscriptions.ProductType} productType
     */
    constructor(deps: any, subscriptionRequest: any, productType?: string);
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!./pay-client.PayClient} */
    private payClient_;
    /** @private @const {!../model/page-config.PageConfig} */
    private pageConfig_;
    /** @private @const {!../components/dialog-manager.DialogManager} */
    private dialogManager_;
    /** @private @const {!../api/subscriptions.SubscriptionRequest} */
    private subscriptionRequest_;
    /**@private @const {!ProductType} */
    private productType_;
    /** @private @const {!../runtime/analytics-service.AnalyticsService} */
    private analyticsService_;
    /** @private @const {!../runtime/client-event-manager.ClientEventManager} */
    private eventManager_;
    /** @private @const {!../runtime/client-config-manager.ClientConfigManager} */
    private clientConfigManager_;
    /**
     * Starts the payments flow.
     * @return {!Promise}
     */
    start(): Promise<any>;
    /**
     * Starts the payments flow for the given version.
     * @param {!string=} paySwgVersion
     * @return {!Promise}
     */
    start_(paySwgVersion?: string | undefined): Promise<any>;
}
/**
 * The flow for successful payments completion.
 */
export class PayCompleteFlow {
    /**
     * @param {!./deps.DepsDef} deps
     */
    static configurePending(deps: any): void;
    /**
     * @param {!./deps.DepsDef} deps
     */
    constructor(deps: any);
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {!../components/dialog-manager.DialogManager} */
    private dialogManager_;
    /** @private {?Promise<!ActivityIframeView>} */
    private activityIframeViewPromise_;
    /** @private {?Promise} */
    private readyPromise_;
    /** @private @const {!../runtime/analytics-service.AnalyticsService} */
    private analyticsService_;
    /** @private @const {!../runtime/client-event-manager.ClientEventManager} */
    private eventManager_;
    /** @private @const {!../runtime/client-config-manager.ClientConfigManager} */
    private clientConfigManager_;
    /** @private {?string} */
    private sku_;
    /**
     * Starts the payments completion flow.
     * @param {{
     *   productType: string,
     *   oldSku: ?string,
     *   paymentRecurrence: ?number,
     * }} response
     * @return {!Promise}
     */
    start(response: {
        productType: string;
        oldSku: string | null;
        paymentRecurrence: number | null;
    }): Promise<any>;
    /**
     * @param {!EntitlementsResponse} response
     * @private
     */
    private handleEntitlementsResponse_;
    /**
     * @return {!Promise}
     */
    complete(): Promise<any>;
}
export namespace PayCompleteFlow {
    const waitingForPayClient_: boolean;
}
import { SubscribeResponse } from "../api/subscribe-response";
import { UserData } from "../api/user-data";
//# sourceMappingURL=pay-flow.d.ts.map