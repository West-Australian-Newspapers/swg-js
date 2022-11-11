/**
 * Gets a message for a given language code, from a map of messages.
 * @param {!Object<string, string>} map
 * @param {?string|?Element} languageCodeOrElement
 * @return {?string}
 */
export function msg(map: {
    [x: string]: string;
}, languageCodeOrElement: (string | (Element | null)) | null): string | null;
/**
 * Gets a language code (ex: "en-US") from a given Element.
 * @param {!Element} element
 * @return {string}
 */
export function getLanguageCodeFromElement(element: Element): string;
//# sourceMappingURL=i18n.d.ts.map