export function transform(transform: Function, flush?: Function): stream;
export function createIgnoreResult(file: any): any;
export function migrateOptions(options: any): any;
export function handleCallback(callback: Function, value?: any): Function;
export function tryResultAction(action: Function, result: (any | any[]), done: Function): void;
export function firstResultMessage(result: any, condition: Function): any;
export function filterResult(result: any, filter?: Function): any;
export function resolveWritable(writable?: (Function | stream)): Function;
export function writeResults(results: any[], formatter: Function, writable: Function): void;
/**
 * Determine if a message is an error
 *
 * @param {Object} message - an ESLint message
 * @returns {Boolean} whether the message is an error message
 */
export function isErrorMessage(message: any): boolean;
//# sourceMappingURL=util.d.ts.map