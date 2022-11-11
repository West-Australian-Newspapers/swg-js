/**
 * Check for swg.mode= in url fragemnet if it exists use it
 * otherwise use the default build mode.
 * @returns {Object}
 */
export function getSwgMode(): any;
/**
 * @return {string}
 */
export function feOrigin(): string;
/**
 * @param {string} url Relative URL, e.g. "/service1".
 * @return {string} The complete URL.
 */
export function serviceUrl(url: string): string;
/**
 * @param {string} url  Relative URL, e.g. "/service1".
 * @return {string} The complete URL.
 */
export function adsUrl(url: string): string;
/**
 * @param {string} url Relative URL, e.g. "/offersiframe".
 * @param {string=} prefix
 * @param {Object<string, string>=} params List of extra params to append to the URL.
 * @return {string} The complete URL.
 */
export function feUrl(url: string, params?: {
    [x: string]: string;
} | undefined, usePrefixedHostPath?: boolean, prefix?: string | undefined): string;
/**
 * @param {string} url FE URL.
 * @return {string} The complete URL including cache param.
 */
export function feCached(url: string): string;
/**
 * @param {!Object<string, ?>} args
 * @return {!Object<string, ?>}
 */
export function feArgs(args: {
    [x: string]: unknown;
}): {
    [x: string]: unknown;
};
/**
 * @param {string} cacheKey
 * @return {string}
 * @package Visible for testing only.
 */
export function cacheParam(cacheKey: string): string;
/**
 * Have to put these in the map to avoid compiler optimization. Due to
 * optimization issues, this map only allows property-style keys. E.g. "hr1",
 * as opposed to "1hr".
 * @type {!Object<string, number>}
 * @package Visible for testing only.
 */
export const CACHE_KEYS: {
    [x: string]: number;
};
export namespace DEFAULT {
    const frontEnd: string;
    const payEnv: string;
    const playEnv: string;
    const feCache: string;
}
/**
 * Operating modes, only runtime switchgable modes are here
 * build time modes set the default and are configured in prepare.sh
 *
 * IMPORTANT: modes other than prod will only work on google internal networks!
 * @type {!Object<Object>}
 * @package Visible for testing only.
 */
export const MODES: any;
//# sourceMappingURL=services.d.ts.map