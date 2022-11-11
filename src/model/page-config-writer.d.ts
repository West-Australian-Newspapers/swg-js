/**
 * Page configuration writer, which writes the details of the publication in the
 * JSON-LD markup of the page. If a valid, existing JSON-LD markup already
 * exists on the page, we will attempt to merge the values in the existing
 * markup with the values passed to this class, with the existing values taking
 * precedence.
 */
export class PageConfigWriter {
    /**
     * @param {!Window|!Document|!Doc} winOrDoc
     */
    constructor(winOrDoc: Window | Document | Doc);
    /** @private @const {!Doc} */
    private doc_;
    /** @private {?{
     *   type: (string|!Array<string>),
     *   isAccessibleForFree: boolean,
     *   isPartOfType: (string|!Array<string>),
     *   isPartOfProductId: string,
     * }} */
    private markupValues_;
    /** @private {?function()} */
    private configWrittenResolver_;
    /** @private @const {!Promise} */
    private configWrittenPromise_;
    /**
     * Writes the markup to the DOM, when ready.
     * @param {{
     *   type: (string|!Array<string>),
     *   isAccessibleForFree: boolean,
     *   isPartOfType: (string|!Array<string>),
     *   isPartOfProductId: string,
     * }} markupValues
     * @return {!Promise} */
    writeConfigWhenReady(markupValues: {
        type: (string | Array<string>);
        isAccessibleForFree: boolean;
        isPartOfType: (string | Array<string>);
        isPartOfProductId: string;
    }): Promise<any>;
    /** Parses the DOM and modifies it to include the new markup values. */
    writeConfig_(): void;
    merge_(valueOne: any, valueTwo: any): any;
    toArray_(value: any): any[];
}
import { Doc } from "./doc";
//# sourceMappingURL=page-config-writer.d.ts.map