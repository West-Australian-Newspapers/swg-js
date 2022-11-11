/**
 * Injects the provided style sheet to the document head.
 * @param {string} styleText The stylesheet to be injected.
 * @return {!Element}
 */
export function injectStyleSheet(styleText: string): Element;
/**
 * Injects the pay with google iframe.
 * @param {string} iframeClassName The classname of the iFrame wrapper.
 * @return {!{container: !Element, iframe:!HTMLIFrameElement}}
 */
export function injectIframe(iframeClassName: string): {
    container: Element;
    iframe: HTMLIFrameElement;
};
//# sourceMappingURL=element_injector.d.ts.map