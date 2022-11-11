/**
 * @interface
 */
export class ActivityPortDef {
    /**
     * @return {!Promise<!web-activities/activity-ports.ActivityResult>}
     */
    acceptResult(): Promise<web>;
}
/**
 * @interface
 */
export class ActivityPort extends ActivityPortDef {
    /**
     * Returns the mode of the activity: iframe, popup or redirect.
     * @return {!web-activities/activity-ports.ActivityMode}
     */
    getMode(): web;
    /**
     * Returns a promise that yields when the iframe is ready to be interacted
     * with.
     * @return {!Promise}
     */
    whenReady(): Promise<any>;
    /**
     * Waits until the activity port is connected to the host.
     * @return {!Promise}
     */
    connect(): Promise<any>;
    /**
     * Disconnect the activity binding and cleanup listeners.
     */
    disconnect(): void;
    /**
     * Register a callback to handle resize requests. Once successfully resized,
     * ensure to call `resized()` method.
     * @param {function(number)} unusedCallback
     */
    onResizeRequest(unusedCallback: (arg0: number) => any): void;
    /**
     * @param {!../proto/api_messages.Message} unusedRequest
     */
    execute(unusedRequest: any): void;
    /**
     * @param {!function(new: T)} unusedMessage
     * @param {function(Object)} unusedCallback
     * @template T
     */
    on<T>(unusedMessage: new () => T, unusedCallback: (arg0: any) => any): void;
    /**
     * Signals back to the activity implementation that the client has updated
     * the activity's size.
     */
    resized(): void;
}
/**
 * @implements {ActivityPortDef}
 */
export class ActivityIframePort implements ActivityPortDef {
    /**
     * @param {!HTMLIFrameElement} iframe
     * @param {string} url
     * @param {!../runtime/deps.DepsDef} deps
     * @param {?Object=} args
     */
    constructor(iframe: HTMLIFrameElement, url: string, deps: any, args?: (any | null) | undefined);
    /** @private @const {!web-activities/activity-ports.ActivityIframePort} */
    private iframePort_;
    /** @private @const {!Object<string, function(!../proto/api_messages.Message)>} */
    private callbackMap_;
    /** @private @const {../runtime/deps.DepsDef} */
    private deps_;
    /**
     * Returns a promise that yields when the iframe is ready to be interacted
     * with.
     * @return {!Promise}
     */
    whenReady(): Promise<any>;
    /**
     * Waits until the activity port is connected to the host.
     * @return {!Promise}
     */
    connect(): Promise<any>;
    /**
     * Disconnect the activity binding and cleanup listeners.
     */
    disconnect(): void;
    /**
     * Returns the mode of the activity: iframe, popup or redirect.
     * @return {!web-activities/activity-ports.ActivityMode}
     */
    getMode(): web;
    /**
     * Accepts the result when ready. The client should verify the activity's
     * mode, origin, verification and secure channel flags before deciding
     * whether or not to trust the result.
     *
     * Returns the promise that yields when the activity has been completed and
     * either a result, a cancelation or a failure has been returned.
     *
     * @return {!Promise<!web-activities/activity-ports.ActivityResult>}
     * @override
     */
    override acceptResult(): Promise<web>;
    /**
     * Register a callback to handle resize requests. Once successfully resized,
     * ensure to call `resized()` method.
     * @param {function(number)} callback
     */
    onResizeRequest(callback: (arg0: number) => any): any;
    /**
     * @param {!../proto/api_messages.Message} request
     */
    execute(request: any): void;
    /**
     * @param {!function(new: T)} message
     * @param {function(?)} callback
     * @template T
     */
    on<T>(message: new () => T, callback: (arg0: unknown) => any): void;
    /**
     * Signals back to the activity implementation that the client has updated
     * the activity's size.
     */
    resized(): void;
}
export class ActivityPorts {
    /**
     * @param {!../runtime/deps.DepsDef} deps
     */
    constructor(deps: any);
    /** @private @const {!../runtime/deps.DepsDef} */
    private deps_;
    /** @private @const {!web-activities/activity-ports.ActivityPorts} */
    private activityPorts_;
    /**
     * Adds client version, publication, product and logging context information.
     * @param {?Object=} args
     * @return {!Object}
     */
    addDefaultArguments(args?: (any | null) | undefined): any;
    openActivityIframePort_(iframe: any, url: any, args: any): Promise<ActivityIframePort>;
    /**
     * Start an activity within the specified iframe.
     * @param {!HTMLIFrameElement} iframe
     * @param {string} url
     * @param {?Object=} args
     * @param {boolean=} addDefaultArguments
     * @return {!Promise<!ActivityIframePort>}
     */
    openIframe(iframe: HTMLIFrameElement, url: string, args?: (any | null) | undefined, addDefaultArguments?: boolean | undefined): Promise<ActivityIframePort>;
    /**
     * Start an activity in a separate window. The result will be delivered
     * to the `onResult` callback.
     *
     * The activity can be opened in two modes: "popup" and "redirect". This
     * depends on the `target` value, but also on the browser/environment.
     *
     * The allowed `target` values are `_blank`, `_top` and name targets. The
     * `_self`, `_parent` and similar targets are not allowed.
     *
     * The `_top` target indicates that the activity should be opened as a
     * "redirect", while other targets indicate that the activity should be
     * opened as a popup. The activity client will try to honor the requested
     * target. However, it's not always possible. Some environments do not
     * allow popups and they either force redirect or fail the window open
     * request. In this case, the activity will try to fallback to the "redirect"
     * mode.
     *
     * @param {string} requestId
     * @param {string} url
     * @param {string} target
     * @param {?Object=} args
     * @param {?web-activities/activity-ports.ActivityOpenOptions=} options
     * @param {boolean=} addDefaultArguments
     * @return {{targetWin: ?Window}}
     */
    open(requestId: string, url: string, target: string, args?: (any | null) | undefined, options: any, addDefaultArguments?: boolean | undefined): {
        targetWin: Window | null;
    };
    /**
     * Registers the callback for the result of the activity opened with the
     * specified `requestId` (see the `open()` method). The callback is a
     * function that takes a single `ActivityPort` argument. The client
     * can use this object to verify the port using it's origin, verified and
     * secure channel flags. Then the client can call
     * `ActivityPort.acceptResult()` method to accept the result.
     *
     * The activity result is handled via a separate callback because of a
     * possible redirect. So use of direct callbacks and/or promises is not
     * possible in that case.
     *
     * A typical implementation would look like:
     * ```
     * ports.onResult('request1', function(port) {
     *   port.acceptResult().then(function(result) {
     *     // Only verified origins are allowed.
     *     if (result.origin == expectedOrigin &&
     *         result.originVerified &&
     *         result.secureChannel) {
     *       handleResultForRequest1(result);
     *     }
     *   });
     * })
     *
     * ports.open('request1', request1Url, '_blank');
     * ```
     *
     * @param {string} requestId
     * @param {function(!ActivityPortDef)} callback
     */
    onResult(requestId: string, callback: (arg0: ActivityPortDef) => any): void;
    /**
     * @param {function(!Error)} handler
     */
    onRedirectError(handler: (arg0: Error) => any): void;
    /**
     * @return {!web-activities/activity-ports.ActivityPorts}
     */
    getOriginalWebActivityPorts(): web;
}
//# sourceMappingURL=activities.d.ts.map