import { GwDomNode, GwEventType, GwKeyboardNavigation, GwMap } from "../../types/gwTypes";
import { GwInitializableSystem } from "../../core/util/GwInitializableSystem";
export declare class GwTextValue extends GwInitializableSystem implements GwKeyboardNavigation {
    getSystemName(): string;
    private timeoutKey;
    /**
     * The delay after the last keypress before the autocomplete will be refreshed and rendered
     * @type {number}
     */
    private readonly autocompleteDelay;
    /**
     * Keeps track of whether there is currently an autocomplete visible to
     * keep every click from searching for a visible autocomplete div
     * @type {boolean}
     */
    private autocompleteVisible;
    /**
     * Caches the last value we sent a request to the server for, preventing a new
     * autocomplete request on focus if the value hasn't changed and the autocomplete
     * is still visible.
     * @type {string}
     */
    private autocompletedValueCache;
    /**
     * The current entry in the autocomplete dropdown when using arrow keys to navigate up and down
     * @type {object}
     */
    private currentAutocompleteEntry;
    init(): void;
    private cancelAnyPendingAutocomplete();
    /**
     * @public
     * Fetches and Renders autocomplete information for the given node
     * @param node the Input node that needs the autocomplete
     */
    autocomplete(node: HTMLInputElement): void;
    /**
     * @private
     * Builds the request object to send a request for autocomplete results
     * @param widgetId the renderId of the widget being autocompleted
     */
    private fetchAutocompleteData(widgetId);
    /**
     * @private
     * Handles a server response for autocomplete, creates the autocomplete elements under the input, or
     * destroys them if they are visible but there's nothing to show
     * @param widgetName the id of the autocomplete widget
     * @param data the data from the server
     */
    private renderAutocompleteData(widgetName, data);
    /**
     * @private
     * Create autocomplete entries matching the given result list under the input widget with the given name.
     * @param widgetName name of the autocomplete widget
     * @param results a non empty list of autocomplete results
     */
    private createAutocompleteEntries(widgetName, results);
    private setInputValue(input, newValue);
    private setTextFromMatchingItem(input, text);
    /**
     * Renders autocomplete using the input as a reference to position
     * Attempts to align it to the left edge of the input it's displayed for.
     * - If it's offscreen right, then aligns itself to the right of the input
     * @param input - text input
     * @param autocomplete - the dom element for the dropdown to be aligned
     *
     * @link - gw.resizer.windowHeight, gw.resizer.windowWidth
     * @private
     */
    private renderAutocomplete(input, autocomplete);
    /**
     * @private
     * Called if there is an error while calling the server to fetch autocomplete entries
     * @param widgetName name of the autocomplete widget
     */
    private handleAutocompleteError(widgetName);
    /**
     * @private
     * Destroy any visible autocomplete entries under the widget with the given name.
     * @param widgetName name of the autocomplete widget
     */
    private destroyAutocompleteEntriesIfVisible(widgetName);
    /**
     * Replaces "markers" with a div containing a markup class plus the tag for styling
     * @param displayText the display text to replace
     * @returns the displayText with divs inserted
     */
    private replaceStyles(displayText);
    private setCurrentAutocompleteEntry(newEntry);
    /**
     * Called when we want to set the value of the input to the value of the currently selected entry in
     * the autocomplete dropdown. Normally we also try to set the cursor appropriately but we have to be
     * very careful, setting the cursor causes IE to focus on the field. So we don't do it if we're trying
     * to leave the field (or we'll be bounced right back in again). This is also why we deal with the mask
     * manually instead of calling valueChangedSoProcessInputMask; that function also sets the cursor.
     * @param input autocomplete input
     * @param onBlur are we leaving the autocomplete input?
     */
    private confirmCurrentAutocompleteEntry(input, onBlur?);
    pickerClear(el: GwDomNode, args: GwMap): void;
    /**
     * @public
     * Called when the user clicks on an entry in the autocomplete dropdown
     * @param node the clicked autocomplete node
     * @param info the event info
     */
    clickAutocompleteEntry(entry: GwDomNode, info: GwMap): void;
    /**
     * @public
     * Called when the user hits enter while an autocomplete input has focus
     * @param node the clicked autocomplete node
     * @param info the event info
     */
    chooseCurrentAutocompleteEntry(input: HTMLInputElement): void;
    /**
     * @public
     * Called when the user mouses over an entry in the autocomplete dropdown
     * @param entry the dropdown entry
     */
    enterAutocompleteEntry(entry: GwDomNode): void;
    /**
     * @public
     * Called when the user's mouse exits an entry in the autocomplete dropdown
     * @param entry the dropdown entry
     */
    exitAutocompleteEntry(): void;
    /**
     * @public
     * Called when the autocomplete input loses focus. If the user clicks on something then the
     * current autocomplete entry will be null, but if they hit tab it may contain a valid entry
     * and, if so, it should become the new value of the input.
     * @param entry the dropdown entry
     */
    blurOnContainer(node: GwDomNode): void;
    /**
     * Closes all autocomplete windows.
     * removes the blur attribute from the container.
     * restores the focus attribute to the child.
     */
    closeAutocomplete(event?: GwEventType): void;
    /**
     * @private
     * Should only be called by the navigation system, handles an "up" keystroke
     * when in an autocomplete input
     * @param target the dom node where "up" was pressed
     * @param cssClass the cssClass that matched the dom node
     * @param info the event method info
     * @param event the key event
     */
    up(target: GwDomNode, info: GwMap, event: GwEventType): void;
    /**
     * @private
     * Should only be called by the navigation system, handles an "down" keystroke
     * when in an autocomplete input
     * @param target the dom node where "down" was pressed
     * @param info the method info
     * @param event the event
     */
    down(target: GwDomNode, info: GwMap, event: GwEventType): void;
    left(node: GwDomNode, info: GwMap, event: GwEventType): void;
    right(node: GwDomNode, info: GwMap, event: GwEventType): void;
}
export declare const gwTextValue: GwTextValue;
