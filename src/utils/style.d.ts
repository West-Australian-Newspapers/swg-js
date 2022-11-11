/**
 * @param {string} camelCase camel cased string
 * @return {string} title cased string
 */
export function camelCaseToTitleCase(camelCase: string): string;
/**
 * Returns the possibly prefixed JavaScript property name of a style property
 * (ex. WebkitTransitionDuration) given a camelCase'd version of the property
 * (ex. transitionDuration).
 * @param {!Object} style
 * @param {string} camelCase the camel cased version of a css property name
 * @param {boolean=} bypassCache bypass the memoized cache of property
 *   mapping
 * @return {string}
 */
export function getVendorJsPropertyName(style: any, camelCase: string, bypassCache?: boolean | undefined): string;
/**
 * Sets the CSS styles of the specified element with !important. The styles
 * are specified as a map from CSS property names to their values.
 * @param {!Element} element
 * @param {!Object<string, string|number>} styles
 */
export function setImportantStyles(element: Element, styles: {
    [x: string]: string | number;
}): void;
/**
 * Sets the CSS style of the specified element with optional units, e.g. "px".
 * @param {Element} element
 * @param {string} property
 * @param {?string|number|boolean} value
 * @param {string=} units
 * @param {boolean=} bypassCache
 */
export function setStyle(element: Element, property: string, value: (string | number | boolean) | null, units?: string | undefined, bypassCache?: boolean | undefined): void;
/**
 * Returns the value of the CSS style of the specified element.
 * @param {!Element} element
 * @param {string} property
 * @param {boolean=} bypassCache
 * @return {*}
 */
export function getStyle(element: Element, property: string, bypassCache?: boolean | undefined): any;
/**
 * Sets the CSS styles of the specified element. The styles
 * a specified as a map from CSS property names to their values.
 * @param {!Element} element
 * @param {!Object<string, ?string|number|boolean>} styles
 */
export function setStyles(element: Element, styles: {
    [x: string]: (string | number | boolean) | null;
}): void;
/**
 * Shows or hides the specified element.
 * @param {!Element} element
 * @param {boolean=} display
 */
export function toggle(element: Element, display?: boolean | undefined): void;
/**
 * Returns a pixel value.
 * @param {number} value
 * @return {string}
 */
export function px(value: number): string;
/**
 * Returns a "translateX" for CSS "transform" property.
 * @param {number|string} value
 * @return {string}
 */
export function translateX(value: number | string): string;
/**
 * Returns a "translateX" for CSS "transform" property.
 * @param {number|string} x
 * @param {(number|string)=} y
 * @return {string}
 */
export function translate(x: number | string, y?: (number | string) | undefined): string;
/**
 * Returns a "scale" for CSS "transform" property.
 * @param {number|string} value
 * @return {string}
 */
export function scale(value: number | string): string;
/**
 * Remove alpha value from a rgba color value.
 * Return the new color property with alpha equals if has the alpha value.
 * Caller needs to make sure the input color value is a valid rgba/rgb value
 * @param {string} rgbaColor
 * @return {string}
 */
export function removeAlphaFromColor(rgbaColor: string): string;
/**
 * Gets the computed style of the element. The helper is necessary to enforce
 * the possible `null` value returned by a buggy Firefox.
 *
 * @param {!Window} win
 * @param {!Element} el
 * @return {!Object<string, string>}
 */
export function computedStyle(win: Window, el: Element): {
    [x: string]: string;
};
/**
 * Resets styles that were set dynamically (i.e. inline)
 * @param {!Element} element
 * @param {!Array<string>} properties
 */
export function resetStyles(element: Element, properties: Array<string>): void;
/**
 * Resets all the styles of an element to a given value. Defaults to null.
 * The valid values are 'inherit', 'initial', 'unset' or null.
 * @param {!Element} element
 */
export function resetAllStyles(element: Element): void;
/**
 * Default styles to be set for top level friendly iframe.
 * Some attributes are not included such as height, left, margin-left; since
 * these attributes are updated by @media queries and having these values
 * defined here as !important does not work on IE/edge browsers.
 * @const {!Object<string, string|number>}
 */
export const defaultStyles: {
    'align-content': string;
    animation: string;
    'align-items': string;
    'align-self': string;
    'alignment-baseline': string;
    'backface-visibility': string;
    'background-clip': string;
    'background-image': string;
    'baseline-shift': string;
    'block-size': string;
    border: string;
    'border-collapse': string;
    bottom: string;
    'box-sizing': string;
    'break-after': string;
    'break-before': string;
    'break-inside': string;
    'buffered-rendering': string;
    'caption-side': string;
    'caret-color': string;
    clear: string;
    color: string;
    'color-rendering': string;
    'column-count': string;
    'column-fill': string;
    'column-gap': string;
    'column-rule-color': string;
    'column-rule-style': string;
    'column-rule-width': string;
    'column-span': string;
    'column-width': string;
    contain: string;
    'counter-increment': string;
    'counter-reset': string;
    cursor: string;
    direction: string;
    display: string;
    'empty-cells': string;
    filter: string;
    flex: string;
    'flex-flow': string;
    float: string;
    'flood-color': string;
    'flood-opacity': string;
    font: string;
    'font-size': string;
    'font-family': string;
    height: string;
    hyphens: string;
    'image-rendering': string;
    'inline-size': string;
    isolation: string;
    'justify-content': string;
    'justify-items': string;
    'justify-self': string;
    'letter-spacing': string;
    'lighting-color': string;
    'line-break': string;
    'line-height': string;
    'margin-bottom': string;
    mask: string;
    'max-block-size': string;
    'max-height': string;
    'max-inline-size': string;
    'max-width': string;
    'min-block-size': string;
    'min-height': string;
    'min-inline-size': string;
    'min-width': string;
    'mix-blend-mode': string;
    'object-fit': string;
    'offset-distance': string;
    'offset-path': string;
    'offset-rotate': string;
    opacity: string;
    order: string;
    orphans: string;
    outline: string;
    'overflow-anchor': string;
    'overflow-wrap': string;
    overflow: string;
    padding: string;
    page: string;
    perspective: string;
    'pointer-events': string;
    position: string;
    quotes: string;
    resize: string;
    right: string;
    'scroll-behavior': string;
    'tab-size': string;
    'table-layout': string;
    'text-align': string;
    'text-align-last': string;
    'text-anchor': string;
    'text-combine-upright': string;
    'text-decoration': string;
    'text-indent': string;
    'text-orientation': string;
    'text-overflow': string;
    'text-rendering': string;
    'text-shadow': string;
    'text-size-adjust': string;
    'text-transform': string;
    'text-underline-position': string;
    top: string;
    'touch-action': string;
    transform: string;
    transition: string;
    'unicode-bidi': string;
    'user-select': string;
    'vector-effect': string;
    'vertical-align': string;
    visibility: string;
    'white-space': string;
    widows: string;
    'word-break': string;
    'word-spacing': string;
    'word-wrap': string;
    'writing-mode': string;
    zoom: string;
    'z-index': string;
};
/** @const {string} */
export const googleFontsUrl: "https://fonts.googleapis.com/css?family=Google+Sans";
//# sourceMappingURL=style.d.ts.map