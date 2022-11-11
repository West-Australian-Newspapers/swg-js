/**
 * /api/subscriptions.SmartButtonOptions|!../api/subscriptions.ButtonOptions),
 *   clickFun: !function(!Event=),
 * }} ButtonParams
 */
export type ButtonParams = {
    options: (any);
};
/**
 * Properties:
 * - lang: Sets the button SVG and title. Default is "en".
 * - theme: "light" or "dark". Default is "light".
 *
 * @typedef {{
 *   options: (!../api/subscriptions.SmartButtonOptions|!../api/subscriptions.ButtonOptions),
 *   clickFun: !function(!Event=),
 * }} ButtonParams
 */
export let ButtonParams: any;
export type ButtonAttributeValues = string;
export namespace ButtonAttributeValues {
    const SUBSCRIPTION: string;
    const CONTRIBUTION: string;
}
/**
 * The button stylesheet can be found in the `/assets/swg-button.css`.
 * It's produced by the `gulp assets` task and deployed to
 * `https://news.google.com/swg/js/v1/swg-button.css`.
 */
export class ButtonApi {
    /**
     * @param {!../model/doc.Doc} doc
     * @param {!Promise<!./runtime.ConfiguredRuntime>} configuredRuntimePromise
     */
    constructor(doc: any, configuredRuntimePromise: any);
    /** @private @const {!../model/doc.Doc} */
    private doc_;
    /** @private @const {!Promise<!./runtime.ConfiguredRuntime>} */
    private configuredRuntimePromise_;
    /**
     */
    init(): void;
    /**
     * @param {!../api/subscriptions.ButtonOptions|function()} optionsOrCallback
     * @param {function()=} callback
     * @return {!Element}
     */
    create(optionsOrCallback: any, callback?: (() => any) | undefined): Element;
    /**
     * Attaches the Classic 'Subscribe With Google' button.
     * @param {!Element} button
     * @param {../api/subscriptions.ButtonOptions|function()} optionsOrCallback
     * @param {function()=} callback
     * @return {!Element}
     */
    attach(button: Element, optionsOrCallback: any, callback?: (() => any) | undefined): Element;
    /**
     * Attaches the new subscribe button, for subscription product types.
     * @param {!Element} button
     * @param {../api/subscriptions.ButtonOptions|function()} optionsOrCallback
     * @param {function()=} callback
     * @return {!Element}
     */
    attachSubscribeButton(button: Element, optionsOrCallback: any, callback?: (() => any) | undefined): Element;
    /**
     * Attaches the new contribute button, for contribution product types.
     * @param {!Element} button
     * @param {../api/subscriptions.ButtonOptions|function()} optionsOrCallback
     * @param {function()=} callback
     * @return {!Element}
     */
    attachContributeButton(button: Element, optionsOrCallback: any, callback?: (() => any) | undefined): Element;
    /**
     * Attaches all buttons with the specified attribute set to any of the
     * attribute values.
     * @param {string} attribute
     * @param {!Array<string>} attributeValues
     * @param {../api/subscriptions.ButtonOptions} options
     * @param {!Object<string, function()>} attributeValueToCallback
     */
    attachButtonsWithAttribute(attribute: string, attributeValues: Array<string>, options: any, attributeValueToCallback: {
        [x: string]: () => any;
    }): void;
    /**
     * @param {!AnalyticsEvent} eventType
     * @param {boolean=} isFromUserAction
     */
    logSwgEvent_(eventType: AnalyticsEvent, isFromUserAction?: boolean | undefined): void;
    /**
     *
     * @param {../api/subscriptions.ButtonOptions|../api/subscriptions.SmartButtonOptions|function()} optionsOrCallback
     * @return {!../api/subscriptions.ButtonOptions|!../api/subscriptions.SmartButtonOptions}
     * @private
     */
    private getOptions_;
    /**
     *
     * @param {?../api/subscriptions.ButtonOptions|?../api/subscriptions.SmartButtonOptions|function()} optionsOrCallback
     * @param {function()=} callback
     * @return {function()|function(Event):boolean}
     * @private
     */
    private getCallback_;
    /**
     * @param {!Element} button
     * @param {AnalyticsEvent} clickEvent
     * @param {../api/subscriptions.SmartButtonOptions|function()|../api/subscriptions.ButtonOptions} optionsOrCallback
     * @param {function()=} callbackFun
     * @return {ButtonParams}
     */
    setupButtonAndGetParams_(button: Element, clickEvent: AnalyticsEvent, optionsOrCallback: any, callbackFun?: (() => any) | undefined): ButtonParams;
    /**
     * @param {!./deps.DepsDef} deps
     * @param {!Element} button
     * @param {../api/subscriptions.SmartButtonOptions|function()} optionsOrCallback
     * @param {function()=} callback
     * @return {!Element}
     */
    attachSmartButton(deps: any, button: Element, optionsOrCallback: any, callback?: (() => any) | undefined): Element;
}
import { AnalyticsEvent } from "../proto/api_messages";
//# sourceMappingURL=button-api.d.ts.map