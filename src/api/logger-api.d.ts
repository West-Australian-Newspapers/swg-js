export type SubscriptionState = string;
export namespace SubscriptionState {
    const UNKNOWN: string;
    const NON_SUBSCRIBER: string;
    const SUBSCRIBER: string;
    const PAST_SUBSCRIBER: string;
}
/**
 * Subscription related events. Listed below are enum strings that
 * represent events related to Subscription flow. Event parameters
 * that provide more context about the event are sent as a JSON
 * block of depth 1 in the sendEvent() API call.
 */
export type Event = string;
export namespace Event {
    const IMPRESSION_PAYWALL: string;
    const IMPRESSION_AD: string;
    const IMPRESSION_OFFERS: string;
    const ACTION_SUBSCRIPTIONS_LANDING_PAGE: string;
    const ACTION_OFFER_SELECTED: string;
    const ACTION_PAYMENT_FLOW_STARTED: string;
    const ACTION_PAYMENT_COMPLETED: string;
    const EVENT_CUSTOM: string;
}
/**
 * Propensity Event
 * Properties:
 * - name: Required. Name should be valid string in the Event
 *         enum within src/api/logger-api.js.
 * - active: Required. A boolean that indicates whether the
 *         user took some action to participate in the flow
 *         that generated this event. For impression event,
 *         this is set to true if is_active field would be
 *         set to true, as described in documentation for
 *         enum Event. Otherwise, set this field to false.
 *         For action events, this field must always be set
 *         to true. The caller must always set this field.
 * - data: Optional. JSON block of depth '1' provides event
 *         parameters. The guideline to create this JSON block
 *         that describes the event is provided against each
 *         enum listed in the Event enum above.
 */
export type PublisherEvent = {
    name: string;
    active: boolean;
    data: JsonObject | null;
};
/**
 * Propensity Event
 * Properties:
 * - name: Required. Name should be valid string in the Event
 *         enum within src/api/logger-api.js.
 * - active: Required. A boolean that indicates whether the
 *         user took some action to participate in the flow
 *         that generated this event. For impression event,
 *         this is set to true if is_active field would be
 *         set to true, as described in documentation for
 *         enum Event. Otherwise, set this field to false.
 *         For action events, this field must always be set
 *         to true. The caller must always set this field.
 * - data: Optional. JSON block of depth '1' provides event
 *         parameters. The guideline to create this JSON block
 *         that describes the event is provided against each
 *         enum listed in the Event enum above.
 *
 *  @typedef {{
 *    name: string,
 *    active: boolean,
 *    data: ?JsonObject,
 * }}
 */
export let PublisherEvent: any;
/**
 * @interface
 */
export class LoggerApi {
    /**
     * Send a buy-flow event that occurred on the publisher's site to Google.  The
     * ultimate destination is controlled by configuration settings.  Publisher
     * configuration available:
     *   enablePropensity - Sends data to the Propensity to Subscribe ads server.
     *   enableSwgAnalytics - Sends data to Google's analytics server for buy-flow
     *     comparison purposes.
     * @param {!PublisherEvent} userEvent
     */
    sendEvent(userEvent: PublisherEvent): void;
    /**
     * Send user subscription state upon initial discovery.
     * A user may have active subscriptions to some products
     * and expired subscriptions to others. Make one API call
     * per subscription state and provide a corresponding
     * list of products with a json object of depth 1.
     * For example:
     *     {'product': ['product1', 'product2']}
     * Each call to this API should have the first argument
     * as a valid string from the enum SubscriptionState.
     * @param {SubscriptionState} state
     * @param {?JsonObject} jsonProducts
     */
    sendSubscriptionState(state: SubscriptionState, jsonProducts: JsonObject | null): void;
}
//# sourceMappingURL=logger-api.d.ts.map