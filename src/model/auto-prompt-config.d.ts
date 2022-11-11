export type AutoPromptConfigParams = {
    displayDelaySeconds: (number | undefined);
    dismissalBackOffSeconds: (number | undefined);
    maxDismissalsPerWeek: (number | undefined);
    maxDismissalsResultingHideSeconds: (number | undefined);
    impressionBackOffSeconds: (number | undefined);
    maxImpressions: (number | undefined);
    maxImpressionsResultingHideSeconds: (number | undefined);
};
/**
 * Copyright 2021 The Subscribe with Google Authors. All Rights Reserved.
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
 * @typedef {{
 *   displayDelaySeconds: (number|undefined),
 *   dismissalBackOffSeconds: (number|undefined),
 *   maxDismissalsPerWeek: (number|undefined),
 *   maxDismissalsResultingHideSeconds: (number|undefined),
 *   impressionBackOffSeconds: (number|undefined),
 *   maxImpressions: (number|undefined),
 *   maxImpressionsResultingHideSeconds: (number|undefined),
 * }}
 */
export let AutoPromptConfigParams: any;
/**
 * Container for the auto prompt configuation details.
 */
export class AutoPromptConfig {
    /**
     * @param {!AutoPromptConfigParams=} params
     */
    constructor({ displayDelaySeconds, dismissalBackOffSeconds, maxDismissalsPerWeek, maxDismissalsResultingHideSeconds, impressionBackOffSeconds, maxImpressions, maxImpressionsResultingHideSeconds, }?: AutoPromptConfigParams | undefined);
    /** @const {!ClientDisplayTrigger} */
    clientDisplayTrigger: ClientDisplayTrigger;
    /** @const {!ExplicitDismissalConfig} */
    explicitDismissalConfig: ExplicitDismissalConfig;
    /** @const {!ImpressionConfig} */
    impressionConfig: ImpressionConfig;
}
/**
 * Client side conditions to trigger the display of the auto prompt.
 */
export class ClientDisplayTrigger {
    /**
     * @param {number|undefined} displayDelaySeconds
     */
    constructor(displayDelaySeconds: number | undefined);
    /** @const {number|undefined} */
    displayDelaySeconds: number;
}
/**
 * Configuration of explicit dismissal behavior and its effects.
 */
export class ExplicitDismissalConfig {
    /**
     * @param {number|undefined} backOffSeconds
     * @param {number|undefined} maxDismissalsPerWeek
     * @param {number|undefined} maxDismissalsResultingHideSeconds
     */
    constructor(backOffSeconds: number | undefined, maxDismissalsPerWeek: number | undefined, maxDismissalsResultingHideSeconds: number | undefined);
    /** @const {number|undefined} */
    backOffSeconds: number;
    /** @const {number|undefined} */
    maxDismissalsPerWeek: number;
    /** @const {number|undefined} */
    maxDismissalsResultingHideSeconds: number;
}
/**
 * Configuration of impression behavior and its effects.
 */
export class ImpressionConfig {
    /**
     * @param {number|undefined} backOffSeconds
     * @param {number|undefined} maxImpressions
     * @param {number|undefined} maxImpressionsResultingHideSeconds
     */
    constructor(backOffSeconds: number | undefined, maxImpressions: number | undefined, maxImpressionsResultingHideSeconds: number | undefined);
    /** @const {number|undefined} */
    backOffSeconds: number;
    /** @const {number|undefined} */
    maxImpressions: number;
    /** @const {number|undefined} */
    maxImpressionsResultingHideSeconds: number;
}
//# sourceMappingURL=auto-prompt-config.d.ts.map