export type PropensityType = string;
export namespace PropensityType {
    const GENERAL: string;
    const PAYWALL: string;
}
/**
 * The Propensity Score
 * - value: Required. A number that indicates the propensity to subscribe.
 * - bucketed: Required. Indicates if the score is a raw score [1-100] or bucketed[1-20].
 */
export type Score = {
    value: number;
    bucketed: boolean;
};
/**
 * The Propensity Score
 * - value: Required. A number that indicates the propensity to subscribe.
 * - bucketed: Required. Indicates if the score is a raw score [1-100] or bucketed[1-20].
 *
 * @typedef {{
 *   value: number,
 *   bucketed: boolean,
 * }}
 */
export let Score: any;
/**
 * Propensity Score Detail
 * Properties:
 * - product: Required. Indicates the publication_id:product_id for which the score is provided.
 * - score: Optional. When score is available, this field contains the propensity score for this product.
 * - error: Optional. When no score is avaialble, a string provides the error message.
 */
export type ScoreDetail = {
    product: string;
    score: Score | null;
    error: string | null;
};
/**
 * Propensity Score Detail
 * Properties:
 * - product: Required. Indicates the publication_id:product_id for which the score is provided.
 * - score: Optional. When score is available, this field contains the propensity score for this product.
 * - error: Optional. When no score is avaialble, a string provides the error message.
 *
 * @typedef {{
 *   product: string,
 *   score: ?Score,
 *   error: ?string,
 * }}
 */
export let ScoreDetail: any;
/**
 * The Body field of the Propensity Score.
 * Properties:
 * - scores: Optional, an array of scores. When header indicates so, atleast one score is available.
 * - error: Optional, string describing why, if no scores were provided by the server.
 */
export type Body = {
    scores: Array<ScoreDetail> | null;
    error: string | null;
};
/**
 * The Body field of the Propensity Score.
 * Properties:
 * - scores: Optional, an array of scores. When header indicates so, atleast one score is available.
 * - error: Optional, string describing why, if no scores were provided by the server.
 *
 *  @typedef {{
 *    scores: ?Array<ScoreDetail>,
 *    error: ?string,
 * }}
 */
export let Body: any;
/**
 * The Header of the Propensity Score.
 * Properties:
 * - ok: Required. true, if propensity score is available, false otherwise.
 */
export type Header = {
    ok: boolean;
};
/**
 * The Header of the Propensity Score.
 * Properties:
 * - ok: Required. true, if propensity score is available, false otherwise.
 *
 *  @typedef {{
 *    ok: boolean,
 * }}
 */
export let Header: any;
/**
 * The Propensity Score.
 * Properties:
 * - header: Required. Provides the header of the Score response.
 * - body: Required. Provides the body of the Score response.
 */
export type PropensityScore = {
    header: Header;
    body: Body;
};
/**
 * The Propensity Score.
 * Properties:
 * - header: Required. Provides the header of the Score response.
 * - body: Required. Provides the body of the Score response.
 *
 *  @typedef {{
 *    header: Header,
 *    body: Body,
 * }}
 */
export let PropensityScore: any;
/**
 * Propensity Event
 *   Please note that the primary defition of this object has changed to
 *   PublisherEvent and is defined in logger-api.js.  These two object
 *   definitions are identical.
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
export type PropensityEvent = {
    name: string;
    active: boolean;
    data: JsonObject | null;
};
/**
 * Propensity Event
 *   Please note that the primary defition of this object has changed to
 *   PublisherEvent and is defined in logger-api.js.  These two object
 *   definitions are identical.
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
export let PropensityEvent: any;
export const Event: {
    IMPRESSION_PAYWALL: string;
    IMPRESSION_AD: string;
    IMPRESSION_OFFERS: string;
    ACTION_SUBSCRIPTIONS_LANDING_PAGE: string;
    ACTION_OFFER_SELECTED: string;
    ACTION_PAYMENT_FLOW_STARTED: string;
    ACTION_PAYMENT_COMPLETED: string;
    EVENT_CUSTOM: string;
};
export const SubscriptionState: {
    UNKNOWN: string;
    NON_SUBSCRIBER: string;
    SUBSCRIBER: string;
    PAST_SUBSCRIBER: string;
};
/**
 * @extends {LoggerApi.LoggerApi}
 * @interface
 */
export class PropensityApi extends LoggerApi.LoggerApi {
    /**
     * Get the propensity of a user to subscribe based on the type.
     * The argument should be a valid string from PropensityType.
     * If no type is provided, GENERAL score is returned.
     * @param {PropensityType=} type
     * @return {?Promise<!PropensityScore>}
     */
    getPropensity(type?: PropensityType | undefined): Promise<PropensityScore> | null;
}
import * as LoggerApi from "./logger-api";
//# sourceMappingURL=propensity-api.d.ts.map