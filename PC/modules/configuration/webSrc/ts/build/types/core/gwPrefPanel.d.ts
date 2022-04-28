/**
 * The PrefPanel handles user preferences that are not set automatically by the user taking action, as in components like listview column hiding.
 * When the user presses the "save" button. If there are any dirty preferences, then it persists them to the preference system, and then
 * forces a refresh to update them on the server.
 *
 * On partial page reloads, checkAndHandleIfTopLevelWidgetIsOutOfDate is called to determine files need to be downloaded
 * and then finishes the page load once the files are done downloading. Currently, this is only for theme files.
 * @type {{}}
 */
import { GwDomNode } from "../types/gwTypes";
import { GwOrderDependantInitializableSystem } from "./util/GwOrderDependantInitializableSystem";
export declare class GwPrefPanel extends GwOrderDependantInitializableSystem {
    getSystemName(): string;
    /** Id of the preferences panel in the DOM */
    private readonly PREF_PANEL_ID;
    /** Key under which to store the pref panel values in the preferences system */
    private readonly PREFERENCES_KEY;
    /** Ids of any preference inputs whose values don't match the values in the preferences system */
    private dirtyPrefs;
    /** Timeout in milliseconds, longest time we're prepared to wait for a new theme file to load */
    private readonly MAX_WAIT_FOR_THEME;
    /**
     * @param isFullPageRefresh
     */
    orderSpecificInit(isFullPageRefresh: boolean): void;
    /**
     * should only be called by app.js
     * If the html.id matches the current theme preference then do nothing, and return false
     * Otherwise, build a link to the needed css file, insert it in the head
     * Return true, to inform the caller that the onload method will handle the page reload.
     * Then on load of the missing css file, change the html.id to the correct theme
     * and call gw.app.fireAfterPartialPageReload
     * @returns {boolean}
     */
    checkAndHandleIfTopLevelWidgetIsOutOfDate(): boolean;
    /**
     * Updates one-off preferences not handled directly by other systems
     */
    preferencesLoaded(): void;
    /**
     * Helper method so other systems can read data from the preferences system with only an id.
     * Handles all conversion of values, and also uses default values from the config system if
     * no preferences are found.
     * @param id
     * @returns {*}
     */
    getPrefValueById(id: string): string | boolean | null | undefined;
    /**
     * Opens the preferences panel, closes all open menus, and sets the UI state.
     */
    open(): void;
    /**
     * Returns true if the preferences panel has any unsaved data.
     * @returns {boolean}
     */
    isDirty(): boolean;
    /**
     * Saves all settings. If there was dirty data, then calls refresh, if not, then just closes the
     */
    save(): void;
    /**
     * If there is dirty data, then reverts any changes made in the UI to whatever is stored in the preferences system.
     * Closes
     */
    cancel(): void;
    /**
     * Reverts all values to original defaults
     */
    reset(): void;
    private getChangesRequiredToRestoreDefaults();
    private applyChangesToUi(changes);
    /**
     * Called by data-gw-change handler. Compare the new value to the original value of the input to determine if
     * the data is dirty.
     * @param el
     */
    change(el: GwDomNode): void;
    private getConfirmForDirtyFormData();
    private resetAllModifiedPrefs();
    private internalSave();
    private close();
    private refresh();
    /**
     * Helper method to save the value of a UI element to the preferences system
     * @param el preferences panel UI element
     */
    private saveUiValueToPreferences(el);
    /**
     * @param true if use alternate icon for the MenuActionsWidget
     */
    private setAlternateActionsIcon(bool);
    private setToolbarPrefs();
    private setDatePrefs();
    private setDebugPrefs();
    private setFontSize(fontSize);
    private setGlobalSpacing(globalSpacingModifier);
    private setGeneralPrefs();
    private clearDirtyPrefs();
    private uiValueDiffersFromLast(el);
    private getValueFromPreferences(el);
    private getValueFromEl(el);
    private getDefaultValueFromConfig(id);
    private getIdFromEl(el);
    private getAllPrefEls();
    /**
     * Used to differentiate between boolean preferences and list preferences, which store their values differently.
     * @param el
     * @returns {boolean}
     */
    private isBooleanPref(el);
    /**
     * Reverts all ui preferences to the corresponding values taken from the preferences system
     * @param el
     */
    private cancelPrefValue(el);
}
export declare const gwPrefPanel: GwPrefPanel;
