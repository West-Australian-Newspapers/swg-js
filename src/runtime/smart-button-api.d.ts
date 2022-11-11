export type Theme = string;
export namespace Theme {
    const LIGHT: string;
    const DARK: string;
}
/**
 * The class for Smart button Api.
 */
export class SmartSubscriptionButtonApi {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {!Element} button
     * @param {!../api/subscriptions.SmartButtonOptions} options
     * @param {function(!Event=)=} callback
     */
    constructor(deps: any, button: Element, options: any, callback?: ((arg0: Event | undefined) => any) | undefined);
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!Document} */
    private doc_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {!HTMLIFrameElement} */
    private iframe_;
    /** @private @const {!Element} */
    private button_;
    /** @private {!../api/subscriptions.SmartButtonOptions} */
    private options_;
    /** @private @const */
    private callback_;
    /** @private @const {string} */
    private src_;
    /** @private @const {!Object} */
    private args_;
    /**
     * @param {SmartBoxMessage} smartBoxMessage
     */
    handleSmartBoxClick_(smartBoxMessage: SmartBoxMessage): void;
    /**
     * Make a call to build button content and listens for the 'click' message.
     * @return {!Element}
     */
    start(): Element;
}
import { SmartBoxMessage } from "../proto/api_messages";
//# sourceMappingURL=smart-button-api.d.ts.map