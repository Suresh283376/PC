import { GwOrderDependantInitializableSystem } from "./util/GwOrderDependantInitializableSystem";
export declare class GwStorage extends GwOrderDependantInitializableSystem {
    getSystemName(): string;
    private username;
    private retryCount;
    /**
     * Used by registerRestoreFunctions to allow any component to register a method to be called
     * @type {{}}
     */
    private readonly componentRestoreFunctions;
    /**
     * Holds a parsed cache object of the entire user storage, to prevent multiple gets from having to JSON.parse each time.
     * Is invalidated on full page reload and localstorage clear.
     */
    private userStorageCache;
    /**
     * Right now this gets called on full page and partial page. Technically, we could do something smart where we
     * only fire the restore ui function for a diffed element, but I'm trying to avoid early optimization.
     * @optimize
     */
    orderSpecificInit(fullPageReload: boolean): void;
    /**
     * @private
     * Takes a dot delimited path or pathArray and returns the value at the path on the given object.
     * If any path chunks are undefined, then it creates the object and adds it to the provided storage object
     * @param path
     * @param userStorageObject
     * @returns {*}
     */
    private getValueAtDotPath(path, userStorageObject, returnFirstUndefined?);
    /**
     * @private
     * @param path
     * @returns {{key: String, pathArray: String[]}}
     */
    private getKeyAndPathArray(path);
    /**
     * @private
     * Returns the userStorage cache if it exists, or if not, goes and gets it. If still undefined, then creates a new object and returns it.
     * @returns {*}
     */
    private getStorageForUser();
    /**
     * @private
     * Takes an object, stores it in the userStorageCache, and sets the object at the currentUser key in local storage, after stringifying it.
     * If the set operation throws an error, then it begins a retry loop of catching error, freeing up storage, setting value again.
     * @param obj
     */
    private setStorageForUser(obj, errorStatePath, errorStateValue);
    /**
     * @private
     * This is triggered on attempting to set storage and localStorage throws a full error of error code 22.
     * This method takes the loopCount and increments it, then tries various options to free up local storage space.
     * Based on the value of the loopCount.
     * 1. Deletes other local user storage.
     * 2. Deletes all dirty data storage.
     * 3. Deletes all local storage.
     * 4. Throws its hands up.
     * @param errLoopCount
     * @param e
     */
    private storageIsFull(e);
    /**
     * @public
     * Sets a key value pair in local storage at a dotDelimted path. k<String>, v<*>
     *     Calls setStorageForUser
     * @param dotPath: dot delimted path.
     * @param value: any valid JSON stringify-able value
     */
    set(dotPath: string, value: any): void;
    /**
     * @public
     * get a value at key in local storage. k<String>, v<String> but the set and get are modified to allow
     * booleans to be set and get as actual booleans, for ease of use.
     * @param dotPath: String, unique
     * @return {*}: if value is "true" or "false" will convert to boolean. if "null" will convert to null;
     */
    get(dotPath: string): any;
    toggleFlag(dotPath: string, optDefault?: boolean): boolean;
    /**
     * Helper method to remove a value. Just calls .set with null
     * @param dotPath
     */
    remove(dotPath: string): void;
    /**
     * @private
     * @returns {*}
     */
    private getStoragePathForUser();
    /**
     * @public
     * Stores the current user name.
     * @param user
     */
    setCurrentUser(user?: string): void;
    /**
     * @public
     * @returns {*}
     */
    getCurrentUser(): string;
    /**
     * @public
     * Deletes local storage for the current username.
     */
    clearStorage(): void;
    /**
     * @debug
     */
    debug_MaxOutStorage(doNotReset?: boolean): void;
}
export declare const gwStorage: GwStorage;
