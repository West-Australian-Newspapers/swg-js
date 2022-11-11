export = gulpEslint;
/**
 * Append ESLint result to each file
 *
 * @param {(Object|String)} [options] - Configure rules, env, global, and other options for running ESLint
 * @returns {stream} gulp file stream
 */
declare function gulpEslint(options?: (any | string)): stream;
declare namespace gulpEslint {
    /**
     * Handle each ESLint result as it passes through the stream.
     *
     * @param {Function} action - A function to handle each ESLint result
     * @returns {stream} gulp file stream
     */
    function result(action: Function): stream;
    /**
     * Handle all ESLint results at the end of the stream.
     *
     * @param {Function} action - A function to handle all ESLint results
     * @returns {stream} gulp file stream
     */
    function results(action: Function): stream;
    /**
     * Fail when an ESLint error is found in ESLint results.
     *
     * @returns {stream} gulp file stream
     */
    function failOnError(): stream;
    /**
     * Fail when the stream ends if any ESLint error(s) occurred
     *
     * @returns {stream} gulp file stream
     */
    function failAfterError(): stream;
    /**
     * Format the results of each file individually.
     *
     * @param {(Function|Stream)} [writable=fancy-log] - A funtion or stream to write the formatted ESLint results.
     * @returns {stream} gulp file stream
     */
    function formatEach(writable?: any): stream;
    /**
     * Wait until all files have been linted and format all results at once.
     *
     * @param {(Function|stream)} [writable=fancy-log] - A funtion or stream to write the formatted ESLint results.
     * @returns {stream} gulp file stream
     */
    function format(writable?: any): stream;
}
//# sourceMappingURL=index.d.ts.map