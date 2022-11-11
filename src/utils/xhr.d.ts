/**
 * A minimal polyfill of Fetch API. It only polyfills what we currently use.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch
 *
 * Notice that the "fetch" method itself is not exported as that would require
 * us to immediately support a much wide API.
 *
 * @param {string} input
 * @param {!FetchInitDef} init
 * @return {!Promise<!FetchResponse>}
 * @private Visible for testing
 */
export function fetchPolyfill(input: string, init: FetchInitDef): Promise<FetchResponse>;
/**
 * Returns the response if successful or otherwise throws an error.
 * @param {!FetchResponse} response
 * @return {!Promise<!FetchResponse>}
 * @private Visible for testing
 */
export function assertSuccess(response: FetchResponse): Promise<FetchResponse>;
/**
 * The "init" argument of the Fetch API. Currently, only "credentials: include"
 * is implemented.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch
 */
export type FetchInitDef = {
    body: (FormData | string | undefined);
    credentials: (string | undefined);
    headers: (any | undefined);
    method: (string | undefined);
    responseType: (string);
};
/**
 * The "init" argument of the Fetch API. Currently, only "credentials: include"
 * is implemented.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch
 *
 * @typedef {{
 *   body: (!FormData|string|undefined),
 *   credentials: (string|undefined),
 *   headers: (!Object|undefined),
 *   method: (string|undefined),
 *   responseType: (string)
 * }}
 */
export let FetchInitDef: any;
/**
 * A class that polyfills Fetch API.
 */
export class Xhr {
    /**
     * @param {!Window} win
     */
    constructor(win: Window);
    /** @const {!Window} */
    win: Window;
    /**
     * We want to call `fetch_` unbound from any context since it could
     * be either the native fetch or our polyfill.
     *
     * @param {string} input
     * @param {!FetchInitDef} init
     * @return {!Promise<!FetchResponse>|!Promise<!Response>}
     * @private
     */
    private fetch_;
    /**
     * @param {string} input URL
     * @param {?FetchInitDef} init Fetch options object.
     * @return {!Promise<!FetchResponse>}
     */
    fetch(input: string, init: FetchInitDef | null): Promise<FetchResponse>;
}
/**
 * Response object in the Fetch API.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/GlobalFetch/fetch
 */
export class FetchResponse {
    /**
     * @param {!XMLHttpRequest} xhr
     */
    constructor(xhr: XMLHttpRequest);
    /** @private @const {!XMLHttpRequest} */
    private xhr_;
    /** @const {number} */
    status: number;
    /** @const {boolean} */
    ok: boolean;
    /** @const {!FetchResponseHeaders} */
    headers: FetchResponseHeaders;
    /** @type {boolean} */
    bodyUsed: boolean;
    /** @type {?ReadableStream} */
    body: ReadableStream | null;
    /**
     * Create a copy of the response and return it.
     * @return {!FetchResponse}
     */
    clone(): FetchResponse;
    /**
     * Drains the response and returns the text.
     * @return {!Promise<string>}
     * @private
     */
    private drainText_;
    /**
     * Drains the response and returns a promise that resolves with the response
     * text.
     * @return {!Promise<string>}
     */
    text(): Promise<string>;
    /**
     * Drains the response and returns the JSON object.
     * @return {!Promise<!JsonObject>}
     */
    json(): Promise<JsonObject>;
    /**
     * Drains the response and returns a promise that resolves with the response
     * ArrayBuffer.
     * @return {!Promise<!ArrayBuffer>}
     */
    arrayBuffer(): Promise<ArrayBuffer>;
}
/**
 * Provides access to the response headers as defined in the Fetch API.
 * @private Visible for testing.
 */
export class FetchResponseHeaders {
    /**
     * @param {!XMLHttpRequest} xhr
     */
    constructor(xhr: XMLHttpRequest);
    /** @private @const {!XMLHttpRequest} */
    private xhr_;
    /**
     * @param {string} name
     * @return {?string}
     */
    get(name: string): string | null;
    /**
     * @param {string} name
     * @return {boolean}
     */
    has(name: string): boolean;
}
//# sourceMappingURL=xhr.d.ts.map