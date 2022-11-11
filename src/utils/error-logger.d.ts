/**
 * Copyright 2020 The Subscribe with Google Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Triple zero width space.
 *
 * This is added to user error messages, so that we can later identify
 * them, when the only thing that we have is the message. This is the
 * case in many browsers when the global exception handler is invoked.
 *
 * @const {string}
 */
export const AMP_USER_ERROR_SENTINEL: "​​​";
/** Helper class for throwing standardized errors. */
export class ErrorLogger {
    /**
     * Constructor.
     *
     * opt_suffix will be appended to error message to identify the type of the
     * error message. We can't rely on the error object to pass along the type
     * because some browsers do not have this param in its window.onerror API.
     * See:
     * https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror.html
     *
     * @param {string=} opt_suffix
     */
    constructor(opt_suffix?: string | undefined);
    /** @private @const {string} */
    private suffix_;
    /**
     * Modifies an error before reporting, such as to add metadata.
     * @param {!Error} error
     * @private
     */
    private prepareError_;
    /**
     * Creates an error.
     * @param {...*} var_args
     * @return {!Error}
     */
    createError(...args: any[]): Error;
    /**
     * Creates an error object with its expected property set to true. Used for
     * expected failure states (ex. incorrect configuration, localStorage
     * unavailable due to browser settings, etc.) as opposed to unexpected
     * breakages/failures.
     * @param {...*} var_args
     * @return {!Error}
     */
    createExpectedError(...args: any[]): Error;
    /**
     * Throws an error.
     * @param {...*} var_args
     * @throws {!Error}
     */
    error(...args: any[]): void;
    /**
     * Throws an error and marks with an expected property.
     * @param {...*} var_args
     * @throws {!Error}
     */
    expectedError(...args: any[]): void;
}
export function user(): ErrorLogger;
export function dev(): ErrorLogger;
//# sourceMappingURL=error-logger.d.ts.map