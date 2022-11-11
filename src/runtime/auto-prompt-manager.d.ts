/**
 * Manages the display of subscription/contribution prompts automatically
 * displayed to the user.
 */
export class AutoPromptManager {
    /**
     * @param {!./deps.DepsDef} deps
     */
    constructor(deps: any);
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!../model/doc.Doc} */
    private doc_;
    /** @private @const {!../model/page-config.PageConfig} */
    private pageConfig_;
    /** @private @const {!./entitlements-manager.EntitlementsManager} */
    private entitlementsManager_;
    /** @private @const {?./client-config-manager.ClientConfigManager} */
    private clientConfigManager_;
    /** @private @const {!./storage.Storage} */
    private storage_;
    /** @private @const {!MiniPromptApi} */
    private miniPromptAPI_;
    /** @private {boolean} */
    private autoPromptDisplayed_;
    /** @private {boolean} */
    private hasStoredImpression;
    /** @private {?AudienceActionFlow} */
    private lastAudienceActionFlow_;
    /** @private {?string} */
    private promptDisplayed_;
    /** @private @const {!./client-event-manager.ClientEventManager} */
    private eventManager_;
    /**
     * Returns an instance of MiniPromptApi. Can be overwridden by subclasses,
     * such as in order to instantiate a different implementation of
     * MiniPromptApi.
     * @param {!./deps.DepsDef} deps
     * @return {!MiniPromptApi}
     * @protected
     */
    protected getMiniPromptApi(deps: any): MiniPromptApi;
    /**
     * Triggers the display of the auto prompt, if preconditions are met.
     * Preconditions are as follows:
     *   - alwaysShow == true, used for demo purposes, OR
     *   - There is no active entitlement found AND
     *   - The user had not reached the maximum impressions allowed, as specified
     *     by the publisher
     * A prompt may not be displayed if the appropriate criteria are not met.
     * @param {{
     *   autoPromptType: (AutoPromptType|undefined),
     *   alwaysShow: (boolean|undefined),
     *   displayLargePromptFn: (function()|undefined),
     * }} params
     * @return {!Promise}
     */
    showAutoPrompt(params: {
        autoPromptType: (AutoPromptType | undefined);
        alwaysShow: (boolean | undefined);
        displayLargePromptFn: ((() => any) | undefined);
    }): Promise<any>;
    /**
     * Displays the appropriate auto prompt, depending on the fetched prompt
     * configuration, entitlement state, and options specified in params.
     * @param {!../model/client-config.ClientConfig|undefined} clientConfig
     * @param {!../api/entitlements.Entitlements} entitlements
     * @param {?./entitlements-manager.Article} article
     * @param {?string|undefined} dismissedPrompts
     * @param {{
     *   autoPromptType: (AutoPromptType|undefined),
     *   alwaysShow: (boolean|undefined),
     *   displayLargePromptFn: (function()|undefined),
     * }} params
     * @return {!Promise}
     */
    showAutoPrompt_(clientConfig: any, entitlements: any, article: any, dismissedPrompts: (string | undefined) | null, params: {
        autoPromptType: (AutoPromptType | undefined);
        alwaysShow: (boolean | undefined);
        displayLargePromptFn: ((() => any) | undefined);
    }): Promise<any>;
    /**
     * Determines whether a mini prompt for contributions or subscriptions should
     * be shown.
     * @param {!../model/client-config.ClientConfig|undefined} clientConfig
     * @param {!../api/entitlements.Entitlements} entitlements
     * @param {!AutoPromptType|undefined} autoPromptType
     * @returns {!Promise<boolean>}
     */
    shouldShowAutoPrompt_(clientConfig: any, entitlements: any, autoPromptType: AutoPromptType | undefined): Promise<boolean>;
    /**
     * Determines what Audience Action prompt should be shown.
     *
     * In the case of Subscription models, we always show the first available prompt.
     *
     * In the case of Contribution models, we only show non-previously dismissed actions
     * after the initial Contribution prompt. We also always default to showing the Contribution
     * prompt if the reader is currently inside of the frequency window, indicated by shouldShowAutoPrompt.
     * @param {{
     *   article: (?./entitlements-manager.Article|undefined),
     *   autoPromptType: (AutoPromptType|undefined),
     *   dismissedPrompts: (?string|undefined),
     *   shouldShowAutoPrompt: (boolean|undefined),
     * }} params
     * @return {!string|undefined}
     */
    getAudienceActionPromptType_({ article, autoPromptType, dismissedPrompts, shouldShowAutoPrompt, }: {
        article: (any);
    }): string | undefined;
    /**
     * @param {{
     *  action: (string|undefined),
     *  autoPromptType: (AutoPromptType|undefined)
     * }} params
     * @return {!function()}
     */
    audienceActionPrompt_({ action, autoPromptType }: {
        action: (string | undefined);
        autoPromptType: (AutoPromptType | undefined);
    }): () => any;
    /** @param {!AudienceActionFlow} flow */
    setLastAudienceActionFlow(flow: AudienceActionFlow): void;
    /** @return {?AudienceActionFlow} */
    getLastAudienceActionFlow(): AudienceActionFlow | null;
    /**
     * Shows the prompt based on the type specified.
     * @param {AutoPromptType|undefined} autoPromptType
     * @param {function()|undefined} displayLargePromptFn
     * @returns
     */
    showPrompt_(autoPromptType: AutoPromptType | undefined, displayLargePromptFn: (() => any) | undefined): void;
    /**
     * Returns which type of prompt to display based on the type specified,
     * the viewport width, and whether the disableDesktopMiniprompt experiment
     * is enabled.
     *
     * If the disableDesktopMiniprompt experiment is enabled and the desktop is
     * wider than 480px then the large prompt type will be substituted for the mini
     * prompt. The original promptType will be returned as-is in all other cases.
     * @param {AutoPromptType|undefined} promptType
     * @returns
     */
    getPromptTypeToDisplay_(promptType: AutoPromptType | undefined): string;
    /**
     * Logs the disable miniprompt event.
     * @param {AutoPromptType|undefined} overriddenPromptType
     */
    logDisableMinipromptEvent_(overriddenPromptType: AutoPromptType | undefined): void;
    /**
     * Determines whether a larger, blocking prompt should be shown.
     * @param {!../api/entitlements.Entitlements} entitlements
     * @param {!boolean} hasPotentialAudienceAction
     * @returns {boolean}
     */
    shouldShowBlockingPrompt_(entitlements: any, hasPotentialAudienceAction: boolean): boolean;
    /**
     * Listens for relevant prompt impression and dismissal events, and logs them
     * to local storage for use in determining whether to display the prompt in
     * the future.
     * @param {../api/client-event-manager-api.ClientEvent} event
     * @return {!Promise}
     */
    handleClientEvent_(event: any): Promise<any>;
    /**
     * Adds the current prompt displayed to the array of all dismissed prompts.
     * @returns {!Promise}
     */
    storeLastDismissal_(): Promise<any>;
    /**
     * Stores the current time to local storage, under the storageKey provided.
     * Removes times older than a week in the process.
     * @param {string} storageKey
     */
    storeEvent_(storageKey: string): any;
    /**
     * Retrieves the locally stored impressions of the auto prompt, within a week
     * of the current time.
     * @return {!Promise<!Array<number>>}
     */
    getImpressions_(): Promise<Array<number>>;
    /**
     * Retrieves the locally stored dismissals of the auto prompt, within a week
     * of the current time.
     * @return {!Promise<!Array<number>>}
     */
    getDismissals_(): Promise<Array<number>>;
    /**
     * Retrieves the current time to local storage, under the storageKey provided.
     * Filters out timestamps older than a week.
     * @param {string} storageKey
     * @return {!Promise<!Array<number>>}
     */
    getEvent_(storageKey: string): Promise<Array<number>>;
    /**
     * Converts a stored series of timestamps to an array of numbers.
     * @param {?string} value
     * @return {!Array<number>}
     */
    storedValueToDateArray_(value: string | null): Array<number>;
    /**
     * Converts an array of numbers to a concatenated string of timestamps for
     * storage.
     * @param {!Array<number>} dateArray
     * @return {string}
     */
    arrayToStoredValue_(dateArray: Array<number>): string;
    /**
     * Filters out values that are older than a week.
     * @param {!Array<number>} dateArray
     * @return {!Array<number>}
     */
    filterOldValues_(dateArray: Array<number>): Array<number>;
    /**
     * Checks AudienceAction eligbility, used to filter potential actions.
     * @param {string} actionType
     * @return {boolean}
     */
    checkActionEligibility_(actionType: string): boolean;
}
import { MiniPromptApi } from "./mini-prompt-api";
import { AutoPromptType } from "../api/basic-subscriptions";
import { AudienceActionFlow } from "./audience-action-flow";
//# sourceMappingURL=auto-prompt-manager.d.ts.map