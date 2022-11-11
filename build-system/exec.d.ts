/// <reference types="node" />
/**
 * Executes the provided command with the given options, returning the process
 * object.
 *
 * @param {string} cmd
 * @param {?Object} options
 * @return {!Object}
 */
export function exec(cmd: string, options: any | null): any;
/**
 * Executes the provided command, and terminates the program in case of failure.
 *
 * @param {string} cmd
 * @param {?Object} options
 */
export function execOrDie(cmd: string, options: any | null): void;
/**
 * Executes the provided shell script in an asynchronous process.
 *
 * @param {string} script
 * @param {?Object} options
 */
export function execScriptAsync(script: string, options: any | null): childProcess.ChildProcessWithoutNullStreams;
/**
 * Executes the provided command, returning its stderr.
 * @param {string} cmd
 * @param {?Object} options
 * @return {string}
 */
export function getStderr(cmd: string, options: any | null): string;
/**
 * Executes the provided command, returning its stdout.
 * @param {string} cmd
 * @param {?Object} options
 * @return {string}
 */
export function getStdout(cmd: string, options: any | null): string;
import childProcess = require("child_process");
//# sourceMappingURL=exec.d.ts.map