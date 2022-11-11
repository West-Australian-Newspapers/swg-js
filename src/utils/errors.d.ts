/**
 * Whether the specified error is an AbortError type.
 * See https://heycam.github.io/webidl/#aborterror.
 * @param {*} error
 * @return {boolean}
 */
export function isCancelError(error: any): boolean;
/**
 * Creates or emulates a DOMException of AbortError type.
 * See https://heycam.github.io/webidl/#aborterror.
 * @param {!Window} win
 * @param {string=} message
 * @return {!DOMException}
 */
export function createCancelError(win: Window, message?: string | undefined): DOMException;
/**
 * A set of error utilities combined in a class to allow easy stubbing in tests.
 */
export class ErrorUtils {
    /**
     * @param {!Error} error
     */
    static throwAsync(error: Error): void;
}
//# sourceMappingURL=errors.d.ts.map