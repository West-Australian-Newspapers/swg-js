export class GoogleAnalyticsEventListener {
    /**
     * Function to determine whether event is eligible for GA logging.
     * @param {!./deps.DepsDef} deps
     * @returns {boolean}
     */
    static isGaEligible(deps: any): boolean;
    /**
     * Function to determine whether event is eligible for gTag logging.
     * @param {!./deps.DepsDef} deps
     * @returns {boolean}
     */
    static isGtagEligible(deps: any): boolean;
    /**
     * @param {!./deps.DepsDef} deps
     */
    constructor(deps: any);
    /** @private @const {!./deps.DepsDef} deps */
    private deps_;
    /** @private @const {!./client-event-manager.ClientEventManager} */
    private eventManager_;
    /**
     * Start listening to client events
     */
    start(): void;
    /**
     *  Listens for new events from the events manager and logs appropriate events to Google Analytics.
     * @param {!../api/client-event-manager-api.ClientEvent} event
     * @param {(!../api/client-event-manager-api.ClientEventParams|undefined)=} eventParams
     */
    handleClientEvent_(event: any, eventParams?: any): void;
}
//# sourceMappingURL=google-analytics-event-listener.d.ts.map