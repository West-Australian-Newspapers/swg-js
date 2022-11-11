/**
 * @param {string} s
 * @package Visible for testing only.
 */
export function setExperimentsStringForTesting(s: string): void;
/**
 * Whether the specified experiment is on or off.
 * @param {!Window} win
 * @param {string} experimentId
 * @return {boolean}
 */
export function isExperimentOn(win: Window, experimentId: string): boolean;
/**
 * Toggles the experiment on or off. Returns the actual value of the experiment
 * after toggling is done.
 * @param {!Window} win
 * @param {string} experimentId
 * @param {boolean} on
 */
export function setExperiment(win: Window, experimentId: string, on: boolean): void;
/**
 * @return {!Array<string>}
 */
export function getOnExperiments(win: any): Array<string>;
//# sourceMappingURL=experiments.d.ts.map