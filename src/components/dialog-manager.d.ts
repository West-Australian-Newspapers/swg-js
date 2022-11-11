/**
 * The class for the top level dialog.
 * @final
 */
export class DialogManager {
    /**
     * @param {!../model/doc.Doc} doc
     */
    constructor(doc: any);
    /** @private @const {!../model/doc.Doc} */
    private doc_;
    /** @private {?Dialog} */
    private dialog_;
    /** @private {?Promise<!Dialog>} */
    private openPromise_;
    /** @private @const {!Graypane} */
    private popupGraypane_;
    /** @private {?Window} */
    private popupWin_;
    /**
     * @param {boolean=} hidden
     * @param {!./dialog.DialogConfig=} dialogConfig Configuration options for the
     *     dialog.
     * @return {!Promise<!Dialog>}
     */
    openDialog(hidden?: boolean | undefined, dialogConfig?: {}): Promise<Dialog>;
    /**
     * @param {!./view.View} view
     * @param {boolean=} hidden
     * @param {!./dialog.DialogConfig=} dialogConfig Configuration options for the
     *    dialog.
     * @return {!Promise}
     */
    openView(view: any, hidden?: boolean | undefined, dialogConfig?: {}): Promise<any>;
    /**
     * Handles cancellations (ex: user clicks close button on dialog).
     * @param {!./view.View} view
     * @return {!Promise}
     */
    handleCancellations(view: any): Promise<any>;
    /**
     * @param {?./view.View} view
     */
    completeView(view: any): void;
    /**
     */
    completeAll(): void;
    /**
     * @returns {?Dialog}
     */
    getDialog(): Dialog | null;
    /** @private */
    private close_;
    /**
     * @param {?Window|undefined} targetWin
     */
    popupOpened(targetWin: (Window | undefined) | null): void;
    /**
     */
    popupClosed(): void;
}
import { Dialog } from "./dialog";
//# sourceMappingURL=dialog-manager.d.ts.map