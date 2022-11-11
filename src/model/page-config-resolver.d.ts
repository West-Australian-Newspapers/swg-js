/**
 * @param {!Node} rootNode
 * @return {?string}
 */
export function getControlFlag(rootNode: Node): string | null;
/**
 */
export class PageConfigResolver {
    /**
     * @param {!Window|!Document|!DocInterface} winOrDoc
     */
    constructor(winOrDoc: Window | Document | DocInterface);
    /** @private @const {!DocInterface} */
    private doc_;
    /** @private {?function((!PageConfig|!Promise))} */
    private configResolver_;
    /** @private @const {!Promise<!PageConfig>} */
    private configPromise_;
    /** @private @const {!MetaParser} */
    private metaParser_;
    /** @private @const {!JsonLdParser} */
    private ldParser_;
    /** @private @const {!MicrodataParser} */
    private microdataParser_;
    /**
     * @return {!Promise<!PageConfig>}
     */
    resolveConfig(): Promise<PageConfig>;
    /**
     * @return {?PageConfig}
     */
    check(): PageConfig | null;
}
import { PageConfig } from "./page-config";
import { Doc as DocInterface } from "./doc";
//# sourceMappingURL=page-config-resolver.d.ts.map