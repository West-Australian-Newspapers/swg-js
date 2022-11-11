export class AnalyticsService {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {!./fetcher.Fetcher} fetcher
     */
    constructor(deps: any, fetcher: any);
    /** @private @const {!./fetcher.Fetcher} */
    private fetcher_;
    /** @private @const {!../model/doc.Doc} */
    private doc_;
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {!HTMLIFrameElement} */
    private iframe_;
    /** @private @type {!boolean} */
    private everFinishedLog_;
    /**
     * @private @const {!AnalyticsContext}
     */
    private context_;
    /** @private {?Promise<!web-activities/activity-ports.ActivityIframePort>} */
    private serviceReady_;
    /** @private {?Promise} */
    private lastAction_;
    /** @private @const {!ClientEventManager} */
    private eventManager_;
    /** @private {!number} */
    private unfinishedLogs_;
    /** @private {?function(boolean)} */
    private loggingResolver_;
    /** @private {?Promise} */
    private promiseToLog_;
    /** @private {!boolean} */
    private loggingBroken_;
    /** @private {?number} */
    private timeout_;
    /** @private {function():!../proto/api_messages.Timestamp} */
    private getTimestamp_;
    /** @private {boolean} */
    private readyForLogging_;
    /** @private {Array<!../api/client-event-manager-api.ClientEvent>}*/
    private logs_;
    /**
     * Sets ready for logging to true and logs all the client events that were previously buffered.
     */
    setReadyForLogging(): void;
    /**
     * @param {string} transactionId
     */
    setTransactionId(transactionId: string): void;
    /**
     * @return {string}
     */
    getTransactionId(): string;
    /**
     * @return {?string}
     */
    getSku(): string | null;
    /**
     * @param {string} sku
     */
    setSku(sku: string): void;
    /**
     * @param {string} url
     */
    setUrl(url: string): void;
    /**
     * @param {!Array<string>} labels
     */
    addLabels(labels: Array<string>): void;
    /**
     * @return {!HTMLIFrameElement}
     */
    getElement(): HTMLIFrameElement;
    /**
     * @return {string}
     * @private
     */
    private getQueryString_;
    /**
     * @return {string}
     * @private
     */
    private getReferrer_;
    /**
     * @private
     */
    private setStaticContext_;
    /**
     * @return {!Promise<!../components/activities.ActivityIframePort>}
     */
    start(): Promise<any>;
    /**
     * @param {boolean} isReadyToPay
     */
    setReadyToPay(isReadyToPay: boolean): void;
    /**
     */
    close(): void;
    /**
     * @return {!AnalyticsContext}
     */
    getContext(): AnalyticsContext;
    /**
     * @param {!../api/client-event-manager-api.ClientEvent} event
     * @return {!AnalyticsRequest}
     */
    createLogRequest_(event: any): AnalyticsRequest;
    /**
     * @return {boolean}
     */
    shouldLogPublisherEvents_(): boolean;
    /**
     * @param {!../api/client-event-manager-api.ClientEvent} event
     * @return {boolean}
     */
    shouldAlwaysLogEvent_(event: any): boolean;
    /**
     *  Listens for new events from the events manager and handles logging
     * @param {!../api/client-event-manager-api.ClientEvent} event
     */
    handleClientEvent_(event: any): void;
    /**
     * This function is called by the iframe after it sends the log to the server.
     * @param {../proto/api_messages.Message=} message
     */
    afterLogging_(message: any): void;
    /**
     * Please note that logs sent after getLoggingPromise is called are not
     * guaranteed to be finished when the promise is resolved.  You should call
     * this function just prior to redirecting the page after SwG is finished
     * logging.
     * @return {!Promise}
     */
    getLoggingPromise(): Promise<any>;
    /**
     * A beacon is a rapid fire browser request that does not wait for a response
     * from the server.  It is guaranteed to go out before the page redirects.
     * @param {!AnalyticsRequest} analyticsRequest
     */
    sendBeacon_(analyticsRequest: AnalyticsRequest): void;
}
import { AnalyticsContext } from "../proto/api_messages";
import { AnalyticsRequest } from "../proto/api_messages";
//# sourceMappingURL=analytics-service.d.ts.map