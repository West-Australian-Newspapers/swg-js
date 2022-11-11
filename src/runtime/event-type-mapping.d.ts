/**
 * Converts a propensity event enum into an analytics event enum.
 * @param {!Event|string} propensityEvent
 * @returns {!AnalyticsEvent}
 */
export function publisherEventToAnalyticsEvent(propensityEvent: Event | string): AnalyticsEvent;
/**
 * Converts an analytics event enum into a propensity event enum.
 * @param {?AnalyticsEvent} analyticsEvent
 * @returns {?Event}
 */
export function analyticsEventToPublisherEvent(analyticsEvent: AnalyticsEvent | null): Event | null;
/**
 * Converts a publisher entitlement event enum into an array analytics events.
 * @param {!ShowcaseEvent} event
 * @returns {!Array<AnalyticsEvent>}
 */
export function showcaseEventToAnalyticsEvents(event: ShowcaseEvent): Array<AnalyticsEvent>;
export function analyticsEventToEntitlementResult(event: any): number;
/**
 * Converts an analytics event enum into a Google Analytics event object.
 * @param {?AnalyticsEvent} event
 * @param {string} subscriptionFlow
 * @returns {?Object}
 */
export function analyticsEventToGoogleAnalyticsEvent(event: AnalyticsEvent | null, subscriptionFlow: string): any | null;
/** @const {!Object<?AnalyticsEvent,?Object>} */
export const AnalyticsEventToGoogleAnalyticsEvent: {
    [x: number]: any;
};
/** @const {!Object<?AnalyticsEvent,?Object>} */
export const SubscriptionSpecificAnalyticsEventToGoogleAnalyticsEvent: {
    [x: number]: any;
};
/** @const {!Object<?AnalyticsEvent,?Object>} */
export const ContributionSpecificAnalyticsEventToGoogleAnalyticsEvent: {
    [x: number]: any;
};
import { Event } from "../api/logger-api";
import { AnalyticsEvent } from "../proto/api_messages";
import { ShowcaseEvent } from "../api/subscriptions";
//# sourceMappingURL=event-type-mapping.d.ts.map