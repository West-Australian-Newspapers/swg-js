/**
 * A type for Objects that can be JSON serialized or that come from
 * JSON serialization. Requires the objects fields to be accessed with
 * bracket notation object['name'] to make sure the fields do not get
 * obfuscated.
 * @constructor
 * @dict
 */
declare function JsonObject(): void;
declare class JsonObject {
}
declare class ArrayLike<T> {
    /**
     * @type {number}
     */
    length: number;
}
//# sourceMappingURL=extern.d.ts.map