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
 * Determines if value is actually an Object.
 * @param {*} value
 * @return {boolean}
 */
export function isObject(value: any): boolean;
/**
 * Checks whether `s` is a valid value of `enumObj`.
 *
 * @param {!Object<T>} enumObj
 * @param {T} s
 * @return {boolean}
 * @template T
 */
export function isEnumValue<T>(enumObj: any, s: T): boolean;
/**
 * True if the value is a function.
 * @param {*} value
 * @return {boolean}
 */
export function isFunction(value: any): boolean;
/**
 * True if the value is either true or false.
 * @param {?*} value
 * @return {boolean}
 */
export function isBoolean(value: any | null): boolean;
//# sourceMappingURL=types.d.ts.map