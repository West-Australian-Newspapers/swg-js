/**
 * Manager of how the client should be configured. Fetches and stores
 * configuration details from the server.
 */
export class ClientConfigManager {
    /**
     * @param {!./deps.DepsDef} deps
     * @param {string} publicationId
     * @param {!./fetcher.Fetcher} fetcher
     * @param {!../api/basic-subscriptions.ClientOptions=} clientOptions
     */
    constructor(deps: any, publicationId: string, fetcher: any, clientOptions: any);
    /** @private @const {!./deps.DepsDef} */
    private deps_;
    /** @private @const {!../api/basic-subscriptions.ClientOptions} */
    private clientOptions_;
    /** @private @const {string} */
    private publicationId_;
    /** @private @const {!./fetcher.Fetcher} */
    private fetcher_;
    /** @private {?Promise<!ClientConfig>} */
    private responsePromise_;
    /** @private @const {ClientConfig} */
    private defaultConfig_;
    /**
     * Fetches the client config from the server.
     * @param {Promise<void>=} readyPromise optional promise to wait on before
     * attempting to fetch the clientConfiguration.
     * @return {!Promise<!ClientConfig>}
     */
    fetchClientConfig(readyPromise?: Promise<void> | undefined): Promise<ClientConfig>;
    /**
     * Gets the client config, if already requested. Otherwise returns a Promise
     * with an empty ClientConfig.
     * @return {!Promise<!ClientConfig>}
     */
    getClientConfig(): Promise<ClientConfig>;
    /**
     * Convenience method for retrieving the auto prompt portion of the client
     * configuration.
     * @return {!Promise<!../model/auto-prompt-config.AutoPromptConfig|undefined>}
     */
    getAutoPromptConfig(): Promise<any>;
    /**
     * Gets the language the UI should be displayed in. See
     * src/api/basic-subscriptions.ClientOptions.lang.
     * @return {string}
     */
    getLanguage(): string;
    /**
     * Gets the theme the UI should be displayed in. See
     * src/api/basic-subscriptions.ClientOptions.theme.
     * @return {!../api/basic-subscriptions.ClientTheme}
     */
    getTheme(): any;
    /**
     * Returns whether scrolling on main page should be allowed when
     * subscription or contribution dialog is displayed.
     * @return {boolean}
     */
    shouldAllowScroll(): boolean;
    /**
     * Returns whether iframes should also use the language specified in the
     * client options, rather than the default of letting the iframes decide the
     * display language. Note that this will return false if the lang option is
     * not set, even if forceLangInIframes was set.
     * @return {boolean}
     */
    shouldForceLangInIframes(): boolean;
    /**
     * Determines whether a subscription or contribution button should be disabled.
     * @returns {!Promise<boolean|undefined>}
     */
    shouldEnableButton(): Promise<boolean | undefined>;
    /**
     * Fetches the client config from the server.
     * @return {!Promise<!ClientConfig>}
     */
    fetch_(): Promise<ClientConfig>;
    /**
     * Parses the fetched config into the ClientConfig container object.
     * @param {!Object} json
     * @return {!ClientConfig}
     */
    parseClientConfig_(json: any): ClientConfig;
}
import { ClientConfig } from "../model/client-config";
//# sourceMappingURL=client-config-manager.d.ts.map