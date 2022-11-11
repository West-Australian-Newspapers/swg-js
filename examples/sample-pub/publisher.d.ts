declare function log(message: any): void;
/**
 * Copyright 2018 The Subscribe with Google Authors. All Rights Reserved.
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
declare function log(...args: any[]): void;
/**
 * Add subsciptions when ready.
 * @param {function()} callback
 */
declare function whenReady(callback: () => any): void;
/**
 * The subscription has been complete.
 * @param {!Promise<!SubscribeResponse>} promise
 * @private
 */
declare function subscribeResponse_(promise: Promise<SubscribeResponse>): void;
/**
 * Selects the flow based on the URL query parameter.
 * The query parameter is the name of the function defined in runtime.
 * Defaults to 'showOffers'.
 * Current valid values are: 'showOffers', 'linkAccount', 'getEntitlements'.
 * @param {string} flow
 * @param {...} var_args
 */
declare function startFlow(flow: string, ...args: any[]): void;
/**
 * Selects the flow based on the URL query parameter.
 * (ex: http://localhost:8000/examples/sample-pub/1?metering)
 * The query parameter is the name of the function defined in runtime.
 * Defaults to 'showOffers'.
 * Current valid values are: 'showOffers', 'linkAccount', 'getEntitlements'.
 */
declare function startFlowAuto(): void;
/**
 * @param {function()} callback
 */
declare function whenDemoReady(callback: () => any): void;
/**
 * Returns true if the URL contains valid Google Article Access (GAA) params.
 * TODO: Link to a public document describing GAA params.
 * @return {boolean}
 */
declare function isGaa(): boolean;
/**
 * Returns anchor element from a given URL.
 * @return {HTMLAnchorElement}
 */
declare function getAnchorFromUrl(url: any): HTMLAnchorElement;
/**
 * Returns query params from URL.
 * @return {!Object<string, string>}
 */
declare function getQueryParams(): {
    [x: string]: string;
};
declare let globalSubscriptions: any;
//# sourceMappingURL=publisher.d.ts.map