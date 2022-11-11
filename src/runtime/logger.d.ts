/**
 * @implements {../api/logger-api.LoggerApi}
 */
export class Logger implements .. {
    /**
     * @param {!./deps.DepsDef} deps
     */
    constructor(deps: any);
    /** @private @const {!../api/client-event-manager-api.ClientEventManagerApi} */
    private eventManager_;
    /** @override */
    override sendSubscriptionState(state: any, jsonProducts: any): void;
    /** @override */
    override sendEvent(userEvent: any): void;
}
//# sourceMappingURL=logger.d.ts.map