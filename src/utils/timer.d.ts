/**
 * Helper with all things Timer.
 */
export class Timer {
    /**
     * @param {!Window} win
     */
    constructor(win: Window);
    /** @const {!Window} */
    win: Window;
    /** @private @const {!Promise}  */
    private resolved_;
    taskCount_: number;
    canceled_: {};
    /**
     * Runs the provided callback after the specified delay. This uses a micro
     * task for 0 or no specified time. This means that the delay will actually
     * be close to 0 and this will NOT yield to the event queue.
     *
     * Returns the timer ID that can be used to cancel the timer (cancel method).
     * @param {!function()} callback
     * @param {number=} delay
     * @return {number|string}
     */
    delay(callback: () => any, delay?: number | undefined): number | string;
    /**
     * Cancels the previously scheduled callback.
     * @param {number|string|null} timeoutId
     */
    cancel(timeoutId: number | string | null): void;
    /**
     * Returns a promise that will resolve after the delay. Optionally, the
     * resolved value can be provided as result argument.
     * @param {number=} delay
     * @return {!Promise}
     */
    promise(delay?: number | undefined): Promise<any>;
    /**
     * Returns a promise that will fail after the specified delay. Optionally,
     * this method can take racePromise parameter. In this case, the
     * resulting promise will either fail when the specified delay expires or
     * will resolve based on the racePromise, whichever happens first.
     * @param {number} delay
     * @param {?Promise<RESULT>|undefined} racePromise
     * @param {string=} message
     * @return {!Promise<RESULT>}
     * @template RESULT
     */
    timeoutPromise<RESULT>(delay: number, racePromise: Promise<RESULT>, message?: string | undefined): Promise<RESULT>;
    /**
     * Returns a promise that resolves after `predicate` returns true.
     * Polls with interval `delay`
     * @param {number} delay
     * @param {function():boolean} predicate
     * @return {!Promise}
     */
    poll(delay: number, predicate: () => boolean): Promise<any>;
}
//# sourceMappingURL=timer.d.ts.map