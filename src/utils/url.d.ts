/**
 * Serializes the passed parameter map into a query string with both keys
 * and values encoded.
 * @param {!JsonObject} params
 * @return {string}
 */
export function serializeQueryString(params: JsonObject): string;
/**
 * Returns a Location-like object for the given URL. If it is relative,
 * the URL gets resolved.
 * Consider the returned object immutable. This is enforced during
 * testing by freezing the object.
 * @param {string} url
 * @return {!LocationDef}
 */
export function parseUrl(url: string): LocationDef;
/**
 * Parses and builds Object of URL query string.
 * @param {string} query The URL query string.
 * @return {!Object<string, string>}
 */
export function parseQueryString(query: string): {
    [x: string]: string;
};
/**
 * Adds a parameter to a query string.
 * @param {string} url
 * @param {string} param
 * @param {string} value
 * @return {string}
 */
export function addQueryParam(url: string, param: string, value: string): string;
/**
 * @param {!../proto/api_messages.Message} message
 * @return {string}
 */
export function serializeProtoMessageForUrl(message: any): string;
/**
 * Returns the Url including the path and search, without fregment.
 * @param {string} url
 * @return {string}
 */
export function getHostUrl(url: string): string;
/**
 * Returns the canonical URL from the canonical tag. If the canonical tag is
 * not present, treat the doc URL itself as canonical.
 * @param {!../model/doc.Doc} doc
 * @return {string}
 */
export function getCanonicalUrl(doc: any): string;
/**
 * True for HTTPS URLs
 * @param {LocationDef=} parsedUrl Defaults to the current page's URL
 * @return {boolean}
 */
export function isSecure(parsedUrl?: LocationDef | undefined): boolean;
/**
 * True when the page is rendered within a secure Google application or
 * was linked to from a secure Google domain.
 * @param {LocationDef=} parsedReferrer Defaults to the current page's referrer
 * @return {boolean}
 */
export function wasReferredByGoogle(parsedReferrer?: LocationDef | undefined): boolean;
type LocationDef = {
    href: string;
    protocol: string;
    host: string;
    hostname: string;
    port: string;
    pathname: string;
    search: string;
    hash: string;
    origin: string;
};
/**
  @typedef {{
    href: string,
    protocol: string,
    host: string,
    hostname: string,
    port: string,
    pathname: string,
    search: string,
    hash: string,
    origin: string,
  }}
  */
declare let LocationDef: any;
export {};
//# sourceMappingURL=url.d.ts.map