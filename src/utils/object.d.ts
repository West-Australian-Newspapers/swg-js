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
 * Returns a map-like object.
 * If initial is provided, copies its own properties into the
 * newly created object.
 * @param {Object=} initial This should typically be an object literal.
 * @return {!Object}
 * @template T
 */
export function map<T>(initial?: any | undefined): any;
/**
 * Implements `Array.find()` method that's not yet available in all browsers.
 *
 * @param {?Array<T>} array
 * @param {function(T, number, !Array<T>):boolean} predicate
 * @return {?T}
 * @template T
 */
export function findInArray<T>(array: T[], predicate: (arg0: T, arg1: number, arg2: T[]) => boolean): T;
//# sourceMappingURL=object.d.ts.map