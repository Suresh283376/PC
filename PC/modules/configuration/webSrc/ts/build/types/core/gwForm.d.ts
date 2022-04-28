import { GwInputElement } from "../types/gwTypes";
import { GwInitializableSystem } from "./util/GwInitializableSystem";
export declare class GwForm extends GwInitializableSystem {
    getSystemName(): string;
    readonly dirtyIdMapKey: string;
    private readonly changedClass;
    private readonly editControllerAttr;
    private readonly doNotTrackDirtyDataClass;
    _editableControllers: string | null;
    init(isFullPage: boolean): void;
    testIfInputHasChangedValue(el: HTMLInputElement): boolean;
    isDirty(): boolean;
    /**
     * @param el
     * @returns {*}
     */
    private getValueSynonym(el);
    /**
     * @private
     * iterates over all the dirtyIdMapKey edit contexts. If it's currently on the screen then iterates all inputs
     * listed, and compares their original value vs their current value.
     */
    private recheckDirtyStatusOfInputs(testForAnyDirty);
    private checkDirtySingleSelect(el);
    private checkDirtyMultiSelect(el);
    /**
     * @private
     * @param el
     */
    private checkIfDirtyByType(el);
    private getElWithIdMatchingName(el);
    /**
     * @public
     * Called by the onChange and onInput event listener in events.js;
     * @param el
     */
    elementChanged(el: GwInputElement): void;
    /**
     * @public
     * Called by cmds.js to set editController dirty data to clear, when form.js runs init.
     * @param spaceDelimitedIds
     */
    setEditableControllers(spaceDelimitedIds: string): void;
    /**
     * @public
     */
    refreshEditControllersInStorage(): void;
    /**
     * @public
     * Wipes all stored dirty data information.
     */
    clearAllDirtyData(): void;
    /**
     * @private
     * @param screenEl
     * @returns {string} dirtyMapId.editId.elementIdOrName
     */
    private getScreenDotPath(screenEl);
    /**
     * @private
     * @param el - Dom element
     * @returns {string} dot delimited path of dirtyIdMap.editId.elementIdOrName
     */
    private getScreenBasedDotPathForElement(el);
    private getChangeTargetElement(el);
    /**
     * @private
     */
    private setElementAsDirty(el, val);
    /**
     * @private
     * @param el
     */
    private setElementAsClean(el);
}
export declare const gwForm: GwForm;
