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
 * abstract View Class. Used to render the content within the Dialog. The
 * extended class has actual content.
 * @abstract
 */
export class View {
    /**
     * Gets the iframe element.
     * @return {!Element}
     * @abstract
     */
    getElement(): Element;
    /**
     * @param {!./dialog.Dialog} unusedDialog
     * @return {!Promise}
     * @abstract
     */
    init(unusedDialog: any): Promise<any>;
    /**
     * Resizes the content.
     */
    resized(): void;
    /**
     * Accept the result.
     * @return {!Promise}
     * @abstract
     */
    whenComplete(): Promise<any>;
    /**
     * @return {boolean}
     * @abstract
     */
    shouldFadeBody(): boolean;
    /**
     * @return {boolean}
     * @abstract
     */
    hasLoadingIndicator(): boolean;
}
//# sourceMappingURL=view.d.ts.map