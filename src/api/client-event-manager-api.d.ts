export type FilterResult = number;
export namespace FilterResult {
    const PROCESS_EVENT: number;
    const CANCEL_EVENT: number;
}
/**
 * Defines a client event in SwG
 * Properties:
 * - eventType: Required. The AnalyticsEvent type that occurred.
 * - eventOriginator: Required.  The codebase that initiated the event.
 * - isFromUserAction: Optional.  True if the user took an action to generate
 *   the event.
 * - additionalParameters: Optional.  A JSON object to store generic data.
 */
export type ClientEvent = {
    eventType: AnalyticsEventDef | null;
    eventOriginator: EventOriginatorDef;
    isFromUserAction: boolean | null;
    additionalParameters: any | null;
};
/**
 * Defines a client event in SwG
 * Properties:
 * - eventType: Required. The AnalyticsEvent type that occurred.
 * - eventOriginator: Required.  The codebase that initiated the event.
 * - isFromUserAction: Optional.  True if the user took an action to generate
 *   the event.
 * - additionalParameters: Optional.  A JSON object to store generic data.
 *
 *  @typedef {{
 *    eventType: ?AnalyticsEventDef,
 *    eventOriginator: !EventOriginatorDef,
 *    isFromUserAction: ?boolean,
 *    additionalParameters: ?Object,
 * }}
 */
export let ClientEvent: any;
/**
 * @interface
 */
export class ClientEventManagerApi {
    /**
     * Call this function to log an event. The registered listeners will be
     * invoked unless the event is filtered.
     * @param {!function(!ClientEvent, (!ClientEventParams|undefined)=)} listener
     */
    registerEventListener(listener: (arg0: ClientEvent, arg1: (ClientEventParams | undefined) | undefined) => any): void;
    /**
     * Register a filterer for events if you need to potentially prevent the
     * listeners from hearing about it.  A filterer should return
     * FilterResult.CANCEL_EVENT to prevent listeners from hearing about the
     * event.
     * @param {!function(!ClientEvent):FilterResult} filterer
     */
    registerEventFilterer(filterer: (arg0: ClientEvent) => FilterResult): void;
    /**
     * Call this function to log an event.  It will immediately throw an error if
     * the event is invalid.  It will then asynchronously call the filterers and
     * stop the event if a filterer cancels it.  After that, it will call each
     * listener asynchronously.
     * @param {!ClientEvent} event
     * @param {(!ClientEventParams|undefined)=} eventParams
     */
    logEvent(event: ClientEvent, eventParams?: (ClientEventParams | undefined) | undefined): void;
}
/**
 * Event Properties to handle for a specific event. For example, GA Event
 * properties to skip SwG logging but still be handled via callback.
 */
export type ClientEventParams = {
    googleAnalyticsParameters: ({
        event_category: string;
        survey_question: string;
        survey_answer_category: string;
        event_label: string;
    } | undefined);
};
/**
 * Event Properties to handle for a specific event. For example, GA Event
 * properties to skip SwG logging but still be handled via callback.
 * @typedef {{
 *   googleAnalyticsParameters: ({
 *     event_category: string,
 *     survey_question: string,
 *     survey_answer_category: string,
 *     event_label: string,
 *   }|undefined)
 * }}
 */
export let ClientEventParams: any;
import { AnalyticsEvent as AnalyticsEventDef } from "../proto/api_messages";
import { EventOriginator as EventOriginatorDef } from "../proto/api_messages";
//# sourceMappingURL=client-event-manager-api.d.ts.map