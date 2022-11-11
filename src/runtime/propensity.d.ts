/**
 * @implements {PropensityApi.PropensityApi}
 */
export class Propensity implements PropensityApi.PropensityApi {
    /**
     * @param {!Window} win
     * @param {!./deps.DepsDef} deps
     * @param {!./fetcher.Fetcher} fetcher
     *
     * IMPORTANT: deps may not be full initialized config and pageConfig are
     * available immediately, other function should be gated on a ready promise.
     * #TODO(jpettitt) switch refactor to take out the win and use deps to get win
     */
    constructor(win: Window, deps: any, fetcher: any);
    /** @private @const {!Window} */
    private win_;
    /** @private {PropensityServer} */
    private propensityServer_;
    /** @private @const {!../api/client-event-manager-api.ClientEventManagerApi} */
    private eventManager_;
    /** @override */
    override sendSubscriptionState(state: any, jsonProducts: any): void;
    /** @override */
    override getPropensity(type: any): Promise<any>;
    /** @override */
    override sendEvent(userEvent: any): void;
}
import * as PropensityApi from "../api/propensity-api";
//# sourceMappingURL=propensity.d.ts.map