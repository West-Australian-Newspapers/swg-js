/**
 * Display configration options for dialogs.
 *
 * Properties:
 * - desktopConfig: Options for dialogs on desktop screens.
 * - maxAllowedHeightRatio: The max allowed height of the view as a ratio of the
 *       viewport height.
 * - iframeCssClassOverride: The CSS class to use for the iframe, overriding
 *       default classes such as swg-dialog.
 * - shouldDisableBodyScrolling: Whether to disable scrolling on the content page
 *       when the dialog is visible.
 */
export type DialogConfig = {
    desktopConfig: (DesktopDialogConfig | undefined);
    maxAllowedHeightRatio: (number | undefined);
    iframeCssClassOverride: (string | undefined);
    shouldDisableBodyScrolling: (boolean | undefined);
};
/**
 * Display configration options for dialogs.
 *
 * Properties:
 * - desktopConfig: Options for dialogs on desktop screens.
 * - maxAllowedHeightRatio: The max allowed height of the view as a ratio of the
 *       viewport height.
 * - iframeCssClassOverride: The CSS class to use for the iframe, overriding
 *       default classes such as swg-dialog.
 * - shouldDisableBodyScrolling: Whether to disable scrolling on the content page
 *       when the dialog is visible.
 *
 * @typedef {{
 *   desktopConfig: (DesktopDialogConfig|undefined),
 *   maxAllowedHeightRatio: (number|undefined),
 *   iframeCssClassOverride: (string|undefined),
 *   shouldDisableBodyScrolling: (boolean|undefined),
 * }}
 */
export let DialogConfig: any;
/**
 * Display configuration options for dialogs on desktop screens.
 *
 * Properties:
 * - isCenterPositioned: Whether the dialog should be positioned at the center
 *       of the viewport rather than at the bottom on desktop screens.
 * - supportsWideScreen: Whether the dialog supports a 808px width on viewports
 *       that are >= 870px wide.
 */
export type DesktopDialogConfig = {
    isCenterPositioned: (boolean | undefined);
    supportsWideScreen: (boolean | undefined);
};
/**
 * Display configuration options for dialogs on desktop screens.
 *
 * Properties:
 * - isCenterPositioned: Whether the dialog should be positioned at the center
 *       of the viewport rather than at the bottom on desktop screens.
 * - supportsWideScreen: Whether the dialog supports a 808px width on viewports
 *       that are >= 870px wide.
 *
 * @typedef {{
 *   isCenterPositioned: (boolean|undefined),
 *   supportsWideScreen: (boolean|undefined),
 * }}
 */
export let DesktopDialogConfig: any;
/**
 * The class for the top level dialog.
 * @final
 */
export class Dialog {
    /**
     * Create a dialog for the provided doc.
     * @param {!../model/doc.Doc} doc
     * @param {!Object<string, string|number>=} importantStyles
     * @param {!Object<string, string|number>=} styles
     * @param {!DialogConfig=} dialogConfig Configuration options for the dialog.
     */
    constructor(doc: any, importantStyles?: {
        [x: string]: string | number;
    } | undefined, styles?: {
        [x: string]: string | number;
    } | undefined, dialogConfig?: DialogConfig | undefined);
    /** @private @const {!../model/doc.Doc} */
    private doc_;
    /** @private @const {!FriendlyIframe} */
    private iframe_;
    /** @private @const {!Graypane} */
    private graypane_;
    /** @private {LoadingView} */
    private loadingView_;
    /** @private {?Element} */
    private container_;
    /** @private {?./view.View} */
    private view_;
    /** @private {?Promise} */
    private animating_;
    /**
     * Helps identify stale animations.
     * @private {number}
     */
    private animationNumber_;
    /** @private {boolean} */
    private hidden_;
    /** @private {?./view.View} */
    private previousProgressView_;
    /** @const @private {number} */
    private maxAllowedHeightRatio_;
    /** @const @private {boolean} */
    private positionCenterOnDesktop_;
    /** @const @private {boolean} */
    private shouldDisableBodyScrolling_;
    /** @const @private {!MediaQueryList} */
    private desktopMediaQuery_;
    /**
     * Reference to the listener that acts on changes to desktopMediaQuery.
     * @private {?function()}
     */
    private desktopMediaQueryListener_;
    /**
     * Opens the dialog and builds the iframe container.
     * @param {boolean=} hidden
     * @return {!Promise<!Dialog>}
     */
    open(hidden?: boolean | undefined): Promise<Dialog>;
    /**
     * Opens the iframe embedded in the given container element.
     * @param {!Element} containerEl
     */
    openInContainer(containerEl: Element): Promise<Dialog>;
    /**
     * Build the iframe with the styling after iframe is loaded.
     * @private
     */
    private buildIframe_;
    /**
     * Closes the dialog.
     * @param {boolean=} animated
     * @return {!Promise}
     */
    close(animated?: boolean | undefined): Promise<any>;
    /**
     * Gets the container within the dialog.
     * @return {!Element}
     */
    getContainer(): Element;
    /**
     * Gets the attached iframe instance.
     * @return {!FriendlyIframe}
     */
    getIframe(): FriendlyIframe;
    /**
     * Gets the Iframe element.
     * @return {!HTMLIFrameElement}
     */
    getElement(): HTMLIFrameElement;
    /**
     * Gets the LoadingView for this dialog.
     * @return {LoadingView}
     */
    getLoadingView(): LoadingView;
    /**
     * Returns the max allowed height of the view as a ratio of viewport height.
     * @return {number}
     */
    getMaxAllowedHeightRatio(): number;
    /**
     * Returns whether the dialog is center-positioned on desktop screens.
     * @return {boolean}
     */
    isPositionCenterOnDesktop(): boolean;
    /**
     * Transitions to the next view.
     * @private
     */
    private entryTransitionToNextView_;
    /**
     * Transition out of an old view.
     * @private
     */
    private exitTransitionFromOldView_;
    /** @return {?./view.View} */
    getCurrentView(): any;
    /**
     * Opens the given view and removes existing view from the DOM if any.
     * @param {!./view.View} view
     * @return {!Promise}
     */
    openView(view: any): Promise<any>;
    /**
     * Show the iframe.
     * @private
     */
    private show_;
    /**
     * Resizes the dialog container.
     * @param {!./view.View} view
     * @param {number} height
     * @param {boolean=} animated
     * @return {?Promise}
     */
    resizeView(view: any, height: number, animated?: boolean | undefined): Promise<any> | null;
    /**
     * @param {function():!Promise} callback
     * @return {!Promise}
     * @private
     */
    private animate_;
    /**
     * Returns maximum allowed height for current viewport.
     * @param {number} height
     * @return {number}
     * @private
     */
    private getMaxAllowedHeight_;
    /**
     * Update padding-bottom on the containing page to not hide any content
     * behind the popup, if rendered at the bottom. For centered dialogs, there
     * should be no added padding.
     * @param {number} newHeight
     * @private
     */
    private updatePaddingToHtml_;
    /**
     * Removes previouly added bottom padding from the document.
     * @private
     */
    private removePaddingToHtml_;
    /**
     * Sets the position of the dialog. Currently only supports 'BOTTOM', with
     * an option of switching to 'CENTER' on desktop screens.
     */
    setPosition_(): void;
    /**
     * Returns whether or not the dialog should have position 'CENTER'.
     * @return {boolean}
     * @private
     */
    private shouldPositionCenter_;
    /**
     * Returns the styles required to postion the dialog.
     * @return {!Object<string, string|number>}
     * @private
     */
    private getPositionStyle_;
    /**
     * Returns default translateY style for the dialog.
     * @return {string}
     * @private
     */
    private getDefaultTranslateY_;
}
import { FriendlyIframe } from "./friendly-iframe";
import { LoadingView } from "../ui/loading-view";
//# sourceMappingURL=dialog.d.ts.map