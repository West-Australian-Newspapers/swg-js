/** @implements {../api/client-event-manager-api.ClientEventManagerApi} */
export class ClientEventManager implements .. {
    /**
     * @param {!../api/client-event-manager-api.ClientEvent} event
     * @return {boolean}
     */
    static isPublisherEvent(event: any): boolean;
    /**
     *
     * @param {!Promise} configuredPromise
     */
    constructor(configuredPromise: Promise<any>);
    /** @private {!Array<function(!../api/client-event-manager-api.ClientEvent, (!../api/client-event-manager-api.ClientEventParams|undefined)=)>} */
    private listeners_;
    /** @private {!Array<function(!../api/client-event-manager-api.ClientEvent):!FilterResult>} */
    private filterers_;
    /** @private {?Promise} */
    private lastAction_;
    /** @private @const {!Promise} */
    private isReadyPromise_;
    /**
     * @overrides
     */
    registerEventListener(listener: any): void;
    /**
     * @overrides
     */
    registerEventFilterer(filterer: any): void;
    /**
     * @overrides
     * @param {!../api/client-event-manager-api.ClientEvent} event
     * @param {(!../api/client-event-manager-api.ClientEventParams|undefined)=} eventParams
     */
    logEvent(event: any, eventParams?: any): void;
    /**
     * Creates an event with the arguments provided and calls logEvent.
     * @param {!AnalyticsEvent} eventType
     * @param {?boolean=} isFromUserAction
     * @param {../proto/api_messages.EventParams=} eventParams
     */
    logSwgEvent(eventType: AnalyticsEvent, isFromUserAction?: (boolean | null) | undefined, eventParams?: any): void;
    /** @return {!Promise<null>} */
    getReadyPromise(): Promise<null>;
}
import { AnalyticsEvent } from "../proto/api_messages";
//# sourceMappingURL=client-event-manager.d.ts.map