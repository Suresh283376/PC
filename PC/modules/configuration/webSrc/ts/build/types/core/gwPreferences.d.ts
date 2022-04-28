import { GwMap } from "../types/gwTypes";
import { GwOrderDependantInitializableSystem } from "./util/GwOrderDependantInitializableSystem";
export declare class GwPreferences extends GwOrderDependantInitializableSystem {
    getSystemName(): string;
    private serverPrefs;
    private alteredPrefs;
    private readonly PREF_STATE_DIV_ID;
    private readonly PREF_INPUT_ID_SELECTOR;
    private readonly PREF_DIV_ID;
    /**
     * Stores the given key/value preference under the supplied renderId.
     * These settings are not sent to the server until the next full request.
     */
    storePreference(renderId: string, key: string, value: any, preferenceType: string): void;
    getPreference(renderId: string, key: string): any;
    getPreferences(renderId: string): GwMap;
    forcePersistPreferencesToServer(): void;
    hasPreferencesOfType(prefTypeKey: string): boolean;
    /**
     * Called before a request is sent to the server, adding a hidden input
     * to send the changed preferences to the server, if necessary.
     */
    beforeServerRequest(): void;
    /**
     * Called after a request to the server is complete, flushing the preferences if necessary.
     */
    orderSpecificInit(): void;
    /**
     * Clears the altered preferences object
     */
    clearPrefs(): void;
    resetPreferencesForId(id: string): void;
}
export declare const gwPreferences: GwPreferences;
