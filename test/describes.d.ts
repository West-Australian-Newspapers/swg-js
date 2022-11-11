export type TestSpec = {};
/**
 * @typedef {{
 * }}
 */
export let TestSpec: any;
/**
 * @param {string} name
 * @param {!Object} spec
 * @param {function(!Object)} fn
 */
export function sandboxed(name: string, spec: any, fn: (arg0: any) => any): any;
export namespace sandboxed {
    /**
     * @param {string} name
     * @param {!Object} spec
     * @param {function(!Object)} fn
     */
    function only(name: string, spec: any, fn: (arg0: any) => any): any;
    function skip(name: any, variants: any, fn: any): any;
}
/**
 * @param {string} name
 * @param {!Object} spec
 * @param {function(!Object)} fn
 */
export function realWin(name: string, spec: any, fn: (arg0: any) => any): any;
export namespace realWin { }
/**
 * @param {string} name
 * @param {!Object} spec
 * @param {function(!Object)} fn
 */
export function fixture(name: string, spec: any, fn: (arg0: any) => any): any;
export namespace fixture { }
/**
 * @param {string} name
 * @param {!Object<string, *>} variants
 * @param {function(string, *)} fn
 */
export function repeated(name: string, variants: {
    [x: string]: any;
}, fn: (arg0: string, arg1: any) => any): any;
export namespace repeated {
    /**
     * @param {string} name
     * @param {!Object<string, *>} variants
     * @param {function(string, *)} fn
     */
    function only(name: string, variants: {
        [x: string]: any;
    }, fn: (arg0: string, arg1: any) => any): any;
}
//# sourceMappingURL=describes.d.ts.map