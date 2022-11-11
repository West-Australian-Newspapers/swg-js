/**
 * @interface
 */
export class Fetcher {
    /**
     * @param {string} unusedUrl
     * @return {!Promise<!Object>}
     */
    fetchCredentialedJson(unusedUrl: string): Promise<any>;
    /**
     * @param {string} unusedUrl
     * @param {!../utils/xhr.FetchInitDef} unusedInit
     * @return {!Promise<!../utils/xhr.FetchResponse>}
     */
    fetch(unusedUrl: string, unusedInit: any): Promise<any>;
    /**
     * POST data to a URL endpoint, do not wait for a response.
     * @param {!string} unusedUrl
     * @param {!../proto/api_messages.Message} unusedData
     */
    sendBeacon(unusedUrl: string, unusedData: any): void;
    /**
     * POST data to a URL endpoint, get a Promise for a response
     * @param {!string} unusedUrl
     * @param {!../proto/api_messages.Message} unusedMessage
     * @return {!Promise<!../utils/xhr.FetchResponse>}
     */
    sendPost(unusedUrl: string, unusedMessage: any): Promise<any>;
}
/**
 * @implements {Fetcher}
 */
export class XhrFetcher implements Fetcher {
    /**
     * @param {!Window} win
     */
    constructor(win: Window);
    /** @const {!Xhr} */
    xhr_: Xhr;
    /** @override */
    override fetchCredentialedJson(url: any): Promise<JsonObject>;
    /** @override */
    override sendPost(url: any, message: any): Promise<{}>;
    /** @override */
    override fetch(url: any, init: any): Promise<import("../utils/xhr").FetchResponse>;
    /** @override */
    override sendBeacon(url: any, data: any): void;
}
import { Xhr } from "../utils/xhr";
//# sourceMappingURL=fetcher.d.ts.map