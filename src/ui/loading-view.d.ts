/**
 * Display configration options for the loading view.
 *
 * Properties:
 * - additionalClasses: List of CSS classes to apply to the loading container.
 */
export type LoadingViewConfig = {
    additionalClasses: (Array<string> | undefined);
};
/**
 * Display configration options for the loading view.
 *
 * Properties:
 * - additionalClasses: List of CSS classes to apply to the loading container.
 *
 * @typedef {{
 *   additionalClasses: (!Array<string>|undefined),
 * }}
 */
export let LoadingViewConfig: any;
/**
 * Loading indicator class. Builds the loading indicator view to be injected in
 * parent element <iframe class="swg-dialog"> element. Provides methods to
 * show/hide loading indicator.
 */
export class LoadingView {
    /**
     * @param {!Document} doc
     * @param {!LoadingViewConfig=} config
     */
    constructor(doc: Document, config?: LoadingViewConfig | undefined);
    /** @private @const {!Document} */
    private doc_;
    /** @private @const {!Element} */
    private loadingContainer_;
    /** @private @const {!Element} */
    private loading_;
    /**
     * Gets the populated loading container.
     * @return {!Element}
     */
    getElement(): Element;
    /**
     * Shows the loading indicator within the container element.
     */
    show(): void;
    /**
     * Hides the loading indicator within the container element.
     */
    hide(): void;
    /**
     * Populates the loading indivicator. The populated element
     * can be added in any view, when required.
     * @private
     */
    private buildLoadingIndicator_;
}
//# sourceMappingURL=loading-view.d.ts.map