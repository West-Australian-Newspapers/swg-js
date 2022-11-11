export namespace toastImportantStyles {
    const height: number;
}
export type ToastSpecDef = {
    text: string;
    action: ({
        label: string;
        handler: () => any;
    } | undefined);
};
/** @typedef {{
 *    text: string,
 *    action: ({label: string, handler: function()}|undefined)
 *  }}
 */
export let ToastSpecDef: any;
/**
 * The class Notification toast.
 */
export class Toast {
    /**
     * @param {!../runtime/deps.DepsDef} deps
     * @param {string} src
     * @param {?Object<string, ?>=} args
     */
    constructor(deps: any, src: string, args?: ({
        [x: string]: unknown;
    } | null) | undefined);
    /** @private @const {!../model/doc.Doc} */
    private doc_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {string} */
    private src_;
    /** @private {?Object<string, ?>} */
    private args_;
    /** @private {?Promise} */
    private animating_;
    /** @private @const {!HTMLIFrameElement} */
    private iframe_;
    /** @private @const {!Promise} */
    private ready_;
    /**
     * Returns the iframe element.
     * @return {!HTMLIFrameElement}
     */
    getElement(): HTMLIFrameElement;
    /**
     * Opens the notification toast.
     * @return {!Promise}
     */
    open(): Promise<any>;
    /**
     * Builds the content of the iframe. On load, animates the toast.
     */
    buildToast_(): any;
    /**
     * @param {function():!Promise} callback
     * @return {!Promise}
     * @private
     */
    private animate_;
    /**
     * Closes the toast.
     * @return {!Promise}
     */
    close(): Promise<any>;
}
//# sourceMappingURL=toast.d.ts.map