/**
 * Class to build and render Activity iframe view.
 */
export class ActivityIframeView extends View {
    /**
     * @param {!Window} win
     * @param {!../components/activities.ActivityPorts} activityPorts
     * @param {string} src
     * @param {!Object<string, ?>=} args Additional data to be passed to the iframe.
     * @param {boolean=} shouldFadeBody
     * @param {boolean=} hasLoadingIndicator
     */
    constructor(win: Window, activityPorts: any, src: string, args?: {
        [x: string]: unknown;
    } | undefined, shouldFadeBody?: boolean | undefined, hasLoadingIndicator?: boolean | undefined);
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!Document} */
    private doc_;
    /** @private @const {!HTMLIFrameElement} */
    private iframe_;
    /** @private @const {!../components/activities.ActivityPorts} */
    private activityPorts_;
    /** @private @const {string} */
    private src_;
    /** @private @const {!Object<string, ?>} */
    private args_;
    /** @private @const {boolean} */
    private shouldFadeBody_;
    /** @private @const {boolean} */
    private hasLoadingIndicator_;
    /** @private {?../components/activities.ActivityIframePort} */
    private port_;
    /**
     * @private
     * {?function<!web-activities/activity-ports.ActivityIframePort|!Promise>}
     */
    private portResolver_;
    /**
     * @private @const
     * {!Promise<!web-activities/activity-ports.ActivityIframePort>}
     */
    private portPromise_;
    /** @override */
    override getElement(): HTMLIFrameElement;
    /** @override */
    override init(dialog: any): any;
    /**
     * @param {!../components/activities.ActivityIframePort} port
     * @param {!../components/dialog.Dialog} dialog
     * @return {!Promise}
     */
    onOpenIframeResponse_(port: any, dialog: any): Promise<any>;
    /**
     * @return {!Promise<!../components/activities.ActivityIframePort>}
     * @private
     */
    private getPortPromise_;
    /**
     * @param {!function(new: T)}  message
     * @param {function(?)} callback
     * @template T
     */
    on<T>(message: new () => T, callback: (arg0: unknown) => any): void;
    /**
     * @param {!../proto/api_messages.Message} request
     */
    execute(request: any): void;
    /**
     * Accepts results from the caller.
     * @return {!Promise<!web-activities/activity-ports.ActivityResult>}
     */
    acceptResult(): Promise<web>;
    /**
     * Accepts results from the caller and verifies origin.
     * @param {string} requireOrigin
     * @param {boolean} requireOriginVerified
     * @param {boolean} requireSecureChannel
     * @return {!Promise<!Object>}
     */
    acceptResultAndVerify(requireOrigin: string, requireOriginVerified: boolean, requireSecureChannel: boolean): Promise<any>;
    /**
     * @param {function()} callback
     */
    onCancel(callback: () => any): void;
}
import { View } from "../components/view";
//# sourceMappingURL=activity-iframe-view.d.ts.map