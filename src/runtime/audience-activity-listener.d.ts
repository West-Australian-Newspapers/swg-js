export class AudienceActivityEventListener {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {!./fetcher.Fetcher} fetcher
     */
    constructor(deps: any, fetcher: any);
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!./client-event-manager.ClientEventManager} */
    private eventManager_;
    /** @private @const {!./fetcher.Fetcher} */
    private fetcher_;
    /** @private @const {!../runtime/storage.Storage} */
    private storage_;
    /**
     * Start listening to client events.
     * @public
     */
    public start(): void;
    /**
     *  Listens for new audience activity events from the events manager and sends them to the SwG Client Server.
     * @param {!../api/client-event-manager-api.ClientEvent} event
     * @private
     */
    private handleClientEvent_;
    /**
     * @param {!../api/client-event-manager-api.ClientEvent} event
     * @return {!AudienceActivityClientLogsRequest}
     * @private
     */
    private createLogRequest_;
}
//# sourceMappingURL=audience-activity-listener.d.ts.map