/**
 * This class is responsible for the storage of data in session storage. If
 * you're looking to store data in local storage, see
 * src/runtime/local-storage.LocalStorage.
 */
export class Storage {
    /**
     * @param {!Window} win
     */
    constructor(win: Window);
    /** @private @const {!Window} */
    private win_;
    /** @private @const {!Object<string, !Promise<?string>>} */
    private values_;
    /**
     * @param {string} key
     * @param {boolean=} useLocalStorage
     * @return {!Promise<?string>}
     */
    get(key: string, useLocalStorage?: boolean | undefined): Promise<string | null>;
    /**
     * @param {string} key
     * @param {string} value
     * @param {boolean=} useLocalStorage
     * @return {!Promise}
     */
    set(key: string, value: string, useLocalStorage?: boolean | undefined): Promise<any>;
    /**
     * @param {string} key
     * @param {boolean=} useLocalStorage
     * @return {!Promise}
     */
    remove(key: string, useLocalStorage?: boolean | undefined): Promise<any>;
}
//# sourceMappingURL=storage.d.ts.map