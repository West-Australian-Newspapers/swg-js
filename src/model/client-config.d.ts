/**
 * /attribution-params.AttributionParams|undefined),
 *   autoPromptConfig: (./auto-prompt-config.AutoPromptConfig|undefined),
 *   paySwgVersion: (string|undefined),
 *   uiPredicates: (UiPredicates|undefined),
 *   usePrefixedHostPath: (boolean|undefined),
 *   useUpdatedOfferFlows: (boolean|undefined),
 *   skipAccountCreationScreen: (boolean|undefined),
 * }}
 */
export type ClientConfigOptions = {
    attributionParams: (any);
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
 * Client configuration options.
 *
 * @typedef {{
 *   attributionParams: (./attribution-params.AttributionParams|undefined),
 *   autoPromptConfig: (./auto-prompt-config.AutoPromptConfig|undefined),
 *   paySwgVersion: (string|undefined),
 *   uiPredicates: (UiPredicates|undefined),
 *   usePrefixedHostPath: (boolean|undefined),
 *   useUpdatedOfferFlows: (boolean|undefined),
 *   skipAccountCreationScreen: (boolean|undefined),
 * }}
 */
export let ClientConfigOptions: any;
/**
 * Container for the details relating to how the client should be configured.
 */
export class ClientConfig {
    /**
     * @param {ClientConfigOptions} options
     */
    constructor({ attributionParams, autoPromptConfig, paySwgVersion, uiPredicates, usePrefixedHostPath, useUpdatedOfferFlows, skipAccountCreationScreen, }?: ClientConfigOptions);
    /** @const {./auto-prompt-config.AutoPromptConfig|undefined} */
    autoPromptConfig: any;
    /** @const {string|undefined} */
    paySwgVersion: any;
    /** @const {boolean} */
    usePrefixedHostPath: any;
    /** @const {boolean} */
    useUpdatedOfferFlows: any;
    /** @const {boolean} */
    skipAccountCreationScreen: any;
    /** @const {UiPredicates|undefined} */
    uiPredicates: any;
    /** @const {./attribution-params.AttributionParams|undefined} */
    attributionParams: any;
}
/**
 * Predicates to control UI elements.
 */
export class UiPredicates {
    /**
     * @param {boolean|undefined} canDisplayAutoPrompt
     * @param {boolean|undefined} canDisplayButton
     * @param {boolean|undefined} purchaseUnavailableRegion
     */
    constructor(canDisplayAutoPrompt: boolean | undefined, canDisplayButton: boolean | undefined, purchaseUnavailableRegion: boolean | undefined);
    /** @const {boolean|undefined} */
    canDisplayAutoPrompt: boolean;
    /** @const {boolean|undefined} */
    canDisplayButton: boolean;
    /** @const {boolean|undefined} */
    purchaseUnavailableRegion: boolean;
}
//# sourceMappingURL=client-config.d.ts.map