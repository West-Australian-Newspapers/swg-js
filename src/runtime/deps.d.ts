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
/** @interface */
export class DepsDef {
    /**
     * @return {!../model/doc.Doc}
     */
    doc(): any;
    /**
     * @return {!Window}
     */
    win(): Window;
    /**
     * @return {!../api/subscriptions.Config}
     */
    config(): any;
    /**
     * @return {!../model/page-config.PageConfig}
     */
    pageConfig(): any;
    /**
     * @return {!../components/activities.ActivityPorts}
     */
    activities(): any;
    /**
     * @return {!./pay-client.PayClient}
     */
    payClient(): any;
    /**
     * @return {!../components/dialog-manager.DialogManager}
     */
    dialogManager(): any;
    /**
     * @return {!./entitlements-manager.EntitlementsManager}
     */
    entitlementsManager(): any;
    /**
     * @return {!./callbacks.Callbacks}
     */
    callbacks(): any;
    /**
     * @return {!../runtime/storage.Storage}
     */
    storage(): any;
    /**
     * @return {!../runtime/analytics-service.AnalyticsService}
     */
    analytics(): any;
    /**
     * @return {!../runtime/jserror.JsError}
     */
    jserror(): any;
    /**
     * @return {!../runtime/client-event-manager.ClientEventManager}
     */
    eventManager(): any;
    /**
     * @return {!../runtime/client-config-manager.ClientConfigManager}
     */
    clientConfigManager(): any;
}
//# sourceMappingURL=deps.d.ts.map