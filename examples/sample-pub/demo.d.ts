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
/**
 * Demo paywall controller to demonstrate some key features.
 * @param {!Subscriptions} subscriptions
 */
declare function DemoPaywallController(subscriptions: Subscriptions): void;
declare class DemoPaywallController {
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
    /**
     * Demo paywall controller to demonstrate some key features.
     * @param {!Subscriptions} subscriptions
     */
    constructor(subscriptions: Subscriptions);
    /** @const {!Subscriptions} */
    subscriptions: Subscriptions;
    /** @const {?Entitlements} */
    entitlements: any;
    /** */
    start(): void;
    private onEntitlements_;
    private openPaywall_;
    private subscribeResponse_;
    private completeDeferredAccountCreation_;
    private loginRequest_;
    private linkComplete_;
}
//# sourceMappingURL=demo.d.ts.map