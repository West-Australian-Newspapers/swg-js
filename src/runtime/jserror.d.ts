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
 */
export class JsError {
    /**
     * @param {!../model/doc.Doc} doc
     */
    constructor(doc: any);
    /** @private @const {!../model/doc.Doc} */
    private doc_;
    /** @private @const {!Promise} */
    private microTask_;
    /**
     * @param {...*} var_args
     * @return {!Promise}
     */
    error(...args: any[]): Promise<any>;
}
//# sourceMappingURL=jserror.d.ts.map