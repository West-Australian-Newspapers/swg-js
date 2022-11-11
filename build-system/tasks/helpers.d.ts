/**
 * Stops the timer for the given build step and prints the execution time,
 * unless we are on CI.
 * @param {string} stepName Name of the action, like 'Compiled' or 'Minified'
 * @param {string} targetName Name of the target, like a filename or path
 * @param {DOMHighResTimeStamp} startTime Start time of build step
 */
export function endBuildStep(stepName: string, targetName: string, startTime: DOMHighResTimeStamp): void;
/**
 * Creates directory in sync manner.
 *
 * @param {string} path
 */
export function mkdirSync(path: string): void;
//# sourceMappingURL=helpers.d.ts.map