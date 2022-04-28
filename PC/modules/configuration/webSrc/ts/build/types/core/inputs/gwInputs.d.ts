import { GwClassIdTagOrNode, GwDomNode, GwEventType, GwInputElement, GwMap } from "../../types/gwTypes";
import { GwRegisteredSystem } from "../util/GwRegisteredSystem";
import { GwEventDescription } from "../events/GwEventDescription";
export declare class GwInputs extends GwRegisteredSystem {
    getSystemName(): string;
    private readonly DEFAULT_INPUT_MASK_PLACEHOLDER_CHAR;
    private readonly clearTrailingMaskCharacters;
    setCheckedOnInput(classIdTagOrNode: GwClassIdTagOrNode, checked: boolean | string): void;
    /**
     * If an input has a data-gw-undo property, then swaps the value and the data-gw-undo value and calls prevent default.
     * @param el
     * @param args
     * @param e
     */
    undo(el: GwInputElement, args: GwMap, e: GwEventType): void;
    /**
     * Takes a addonDiv and attempts to align it to an input inside of a given parent div.
     *
     * Attempts to align it to the left edge of the input it's displayed for.
     * - If it's offscreen right, then aligns it to the right of the input.
     * Similarly with positioning below the input, or above it.
     *
     * @param parent - the value widget
     * @param input - the dom element for the picker to be aligned to
     * @param addonDiv - the dom element being aligned
     *
     * @link - gwResizer.windowHeight, gwResizer.windowWidth
     * @private
     */
    preventPickerBeingOffscreen(parent: GwDomNode, input: GwInputElement, addonDiv: GwDomNode, alignRight?: boolean, alignTop?: boolean): void;
    private renderAddOnDiv(targetDiv, renderAbove, topPosWhenBelow, bottomPosWhenAbove);
    private getTrueFalseOrNullFromDomAttrValue(val);
    /**
     * Setting an input's value to true or false can have unexpected outcomes, in different browsers, but mainly just because
     * true and false become the strings "true" and "false" or true becomes empty string, etc. So this method handles all of the possible
     * cases, also checking the 'checked' property.
     * @param el
     * @returns {boolean}
     */
    getValueAsBoolean(el: GwInputElement): boolean;
    /**
     * see getValueAsBoolean, for the reasons behind needing this method.
     * Eventually fired gwEvents.forceGlobalEvent(el, "change")
     * @param node
     * @param args: if args.ignoreChangeEvent is true, then forceGlobalEvent will not be called.
     * @param e
     */
    toggleBooleanValue(node: GwInputElement, args: GwMap, e: GwEventType): void;
    /**
     * Clears the invalid value status from the ValueWidget parent of the given Node
     */
    clearInvalidValueStatus(node: GwDomNode): void;
    /**
     * Adds an invalid value status from the Valuewidget parent of the given Node
     */
    addInvalidValueStatus(node: GwDomNode): void;
    /**
     * Return the type of the input as a simple string. Often this is just "input.type", but also looks
     * for the special cases of select controls (result is "select") and textarea (result is "text")
     * @param input an HTML input, select or textarea element
     * @returns {string|null} type, as a string, or null if the given element is not an input
     */
    inputType(input: HTMLElement): string | null;
    /**
     * Find the index of the select option that was originally selected. Assumes no multiselect.
     * @param select an HTMLSelectElement
     * @returns {number} the index of the option that was originally selected, or 0 if none were selected
     */
    defaultSelectedIndex(select: HTMLSelectElement): number;
    /**
     * Given a single radio button input, finds all other radio inputs with the same name and returns them
     * as a JQuery collection
     * @param radio a radio input
     */
    radioButtonsInGroup(radio: HTMLInputElement): NodeListOf<HTMLInputElement>;
    /**
     * Search the page for the input with the given name. If found, return its DOM node. Otherwise return null
     */
    getInputByName(name: string): GwInputElement | null;
    inputEventNotifySystems(el: GwInputElement, args: GwMap, e: GwEventType): void;
    pasteEventNotifySystems(el: GwInputElement, args: GwMap, e: GwEventType): void;
    copyEventNotifySystems(el: GwInputElement, args: GwMap, e: GwEventType): void;
    notifySystemsOfInputValueChange(el: GwInputElement, ignoreSystem?: string | null, args?: GwMap, e?: GwEventType): void;
    private hasDigitsOnlyMask(el);
    private clearElementWithInputMaskValue(el);
    private setValueOnElementWithInputMask(el, val);
    /**
     * We use this to handle the times where a placeholder has been translated in a way that renders it an illegal mask value.
     * We only return the ph if it's the same length as the mask, otherwise, we return the mask
     * @param {GwInputElement} el
     * @param {string} mask
     * @returns {string}
     */
    private getPlaceholderValueOrMaskIfPlaceholderIsIncorrectLength(el, mask);
    /**
     * Fired for any input that has data-gw-input-mask.
     * Uses logic based on the contents of the input mask, and if the mask allows only numerical input,
     * to allow only certain input from the user
     * @param el - an input element
     * @param args - not used
     * @param e - not used
     */
    valueChangedSoProcessInputMask(el: HTMLInputElement): void;
    /**
     * @private
     * returns the select element that matches the pattern of el.name +_ampm
     * @param el
     * @returns {*}
     */
    private getAmPmInputForInput(el);
    private getTimeSelectForInput(el);
    /**
     * Called by the copy/cut event on inputs with input masks.
     * If the element has a select for am/pm, then copy/cut appends the value of the select to the clipboardData
     * only if the right hand side of the input selection extends to the end of the input.
     *
     * @param el
     * @param args
     * @param e
     */
    copyOnInputMask(el: HTMLInputElement, args: GwMap, e: ClipboardEvent): void;
    /**
     * Runs before server event is fired.
     * if clearTrailingMaskCharacters is true then:
     * - Trim off any trailing characters in the input's value that match the input mask.
     */
    beforeFireEvent(): void;
    /**
     * Returns either the value of the element, or if it has an input mask, the value with any trailing input masks chars removed
     * @param el
     * @returns {*}
     */
    getValueWithMaskTrimmed(el: HTMLInputElement): string;
    /**
     * Checks if the given input mask is "active" - that is will it actually guide user input? Some input masks
     * have no placeholder characters are just intended as a hint to the user.
     *
     * This function only works for explicitly specified PCF input masks, which always use the default input mask
     * placeholder character.
     * @param {string} inputMask the input mask
     * @returns {boolean} true if it is an active mask
     */
    isActiveInputMask(inputMask: string): boolean;
    /** Exposed as gw.api.Util.getValue, see gw.api */
    getValueById(id: string): string | number | string[] | undefined;
    /** Exposed as gw.api.Util.getValues, see gw.api */
    getValuesByIds(ids: string[]): (string | number | string[] | undefined)[];
    /** Exposed as gw.api.Util.setValue, see gw.api */
    setValueById(id: string, value: any): void;
    /** Exposed as gw.api.Util.setValues, see gw.api */
    setValuesByIds(valuesById: GwMap): void;
    private validateSetValuesConfig(valuesById);
    focusFirstInput(container: GwDomNode): void;
    closeOpenInputs(event?: GwEventType): void;
    /**
     * Verify the inputValue is digit only. All non-digit characters will be stripped out.
     *
     * @param {HTMLInputElement} inputElement
     * @param {GwMap} args
     */
    verifyDigitOnly(inputElement: HTMLInputElement, args: GwMap): void;
    /**
     * return true if an input has postOnChange configured.
     * @param el
     */
    hasPostOnChange(el: GwDomNode): boolean;
    radioButtonSelect(radioButtonDiv: GwDomNode, eventDescription: GwEventDescription): void;
}
export declare const gwInputs: GwInputs;
