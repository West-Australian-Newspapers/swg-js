/**
 * Class for handling the display (and logging) of the mini prompt.
 */
export class MiniPromptApi {
    /**
     * @param {!./deps.DepsDef} deps
     */
    constructor(deps: any);
    /** @private @const {!../model/doc.Doc} */
    private doc_;
    /** @private @const {?./client-config-manager.ClientConfigManager} */
    private clientConfigManager_;
    /** @private @const {!./client-event-manager.ClientEventManager} */
    private eventManager_;
    /**
     * Does the setup required for the mini prompt's display, including injecting
     * the mini prompt's css.
     */
    init(): void;
    /**
     * Creates the element and displays it on the page.
     * @param {{
     *   autoPromptType: (!AutoPromptType|undefined),
     *   clickCallback: (function()|undefined),
     * }} options
     */
    create(options: {
        autoPromptType: (AutoPromptType | undefined);
        clickCallback: ((() => any) | undefined);
    }): void;
    /**
     * Logs an impression of the mini prompt.
     * @param {!AutoPromptType|undefined} autoPromptType
     */
    logImpression_(autoPromptType: AutoPromptType | undefined): void;
    /**
     * Logs a click of the mini prompt.
     * @param {!AutoPromptType|undefined} autoPromptType
     */
    logClick_(autoPromptType: AutoPromptType | undefined): void;
    /**
     * Logs a user initiated dismissal of the mini prompt.
     * @param {!AutoPromptType|undefined} autoPromptType
     */
    logClose_(autoPromptType: AutoPromptType | undefined): void;
}
import { AutoPromptType } from "../api/basic-subscriptions";
//# sourceMappingURL=mini-prompt-api.d.ts.map