import { GwClassIdTagOrNode, GwDomNode } from "../types/gwTypes";
export declare class GwFocus {
    /**
     * @private
     * Key for localStorage.
     * @type {string}
     */
    private readonly CURR_FOCUS_KEY;
    /**
     * @private
     * Key for localStorage.
     * @type {string}
     */
    private readonly LAST_FOCUS_KEY;
    /**
     * @private
     * The cache for the current focused node.
     * We cache it to prevent having to do an ID lookup from localStorage everytime.
     * But it means we need to clear the cache on full and partial page reloads.
     * Only accessed via gw.navigation.setCurrentFocus and getCurrentFocus
     */
    private currentFocusNode;
    /**
     * ibid.
     */
    private lastFocusNode;
    /**
     * @public
     * Returns either the cached node in currentFocusNode, or pulls the stored id from localStorage and does a DOM lookup.
     * @returns {*}
     */
    getCurrentFocus(): GwDomNode | null;
    /**
     * @public
     * Sets the currentFocus node. And gets the id or name attribute from the node, storing it in local storage.
     * If the node has no id or name attribute, throws a warning, as this is likely an error state.
     * @param node
     */
    setCurrentFocus(node: GwDomNode): void;
    /**
     * Removes focus and focus styling from all nodes
     */
    clearFocus(): void;
    /**
     * @public
     * Holds a reference to the last focused node.
     * @returns {*}
     */
    getLastFocus(): GwDomNode | null;
    /**
     * @public
     * Sets the last focused node.
     * @param node
     */
    setLastFocus(node: GwDomNode | null): void;
    /**
     * @private
     * Given a node, returns an array of focusable children via querySelectorAll tabindex.
     * And filters the array for various properties and styles that would make it "invisible".
     * @param node
     * @returns {[DOMNodes]}
     */
    private getFocusable(node);
    /**
     * @private
     * used by getFocusable and isFocusable, to determine if an element meets the criteria of visibility and size to be focused.
     * @param el - an HTML DOM element.
     * @returns {boolean}
     */
    private canSelfBeFocusedBasedOnHtmlState(el);
    private readonly defaultFocusableMap;
    private allowsFocusBasedOnDisabledOrReadonly(el);
    /**
     * @private
     * Check if element is focusable based on tabIndex.  If the tabIndex is not explicitly specified
     * on the element, check a default focusable map to determine if the element should be focusable.
     */
    private focusableUsingTabIndex(el);
    focusableOnClick(el: GwDomNode): boolean;
    /**
     * @public
     * Returns true if the node, or anyone of it's children is focusable.
     * @param node
     * @param allowChildren whether to search down for a focusable element to consider the node focusable
     * @returns {boolean}
     */
    isFocusable(node: GwDomNode | null, allowChildren?: boolean): boolean;
    /**
     * When an element is clicked, we search up the DOM for something with a tabIndex
     * to focus. In IE, everything receives a focusIn event, so we need to search
     * for what elements we support focus on.
     * @param targetNode
     * @returns {*}
     */
    findFocusableNodeForClick(targetNode: GwDomNode): GwDomNode | null;
    private processNewFocus(el, animateOnFocus?);
    /**
     * @public
     * This call takes a class or Id string, or a node, and sets focus to it if it has a tab index.
     * If it does not have a tabindex it begins recursively drilling down to find the first child of child with a tabindex
     * @param classIdOrNode: argument passed to getDomNode
     * @param animateOnFocus: Whether the DOM element should "bounce" to show it has been focused
     * @returns {boolean} returns true to stop the recursive calls.
     */
    forceFocus(classIdOrNode: GwClassIdTagOrNode, animateOnFocus?: boolean): boolean;
    /**
     * @public
     * Needs to be called after full and partial page reload to restore the focus correctly.
     * Clears current node caches then forces focus onto the the currentFocus
     * @param asyncTimer: if present, and a number, then will delay calling restore focus for n milleseconds.
     * This is mainly for debugging, but it's likely there will come a time where we have async logic running
     * after page reload, and restore focus will need to wait until it's done. Though when that happens,
     * this should probably become a callback to the given async method.
     */
    restoreFocus(isFullPageReload: boolean, asyncTimer?: number): void;
}
export declare const gwFocus: GwFocus;
