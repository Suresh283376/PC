import { GwDomNode, GwMap } from "../../types/gwTypes";
import { GwKeyListener } from "./GwKeyListener";
import { GwInitializableSystem } from "../util/GwInitializableSystem";
export declare class GwKeys extends GwInitializableSystem {
    getSystemName(): string;
    /**
     * @private
     * Used to translate special characters to the equivalent keyCode
     */
    keyCodeMap: GwMap;
    /**
     * @private
     * Used to map shortcut key words to keyCode for use with shortcuts
     */
    shortcutKeyWordToKeyCodeMap: GwMap;
    /**
     * @private
     * Stores keyboard shortcuts sent down from the server via a client command. The shortcuts are stored
     * as a map of arrays where the keys to the map are scopes (MAIN/WORKSHEET) and the arrays contain the
     * actual listeners. The listeners have a createEventDescription function, which is called if a matching
     * key event is detected. This function searches for the widget with the id specified by the server and
     * finds its data-gw-click attribute (which may be directly on the element, or hidden in a sub element)
     * to determine the full event description
     * @type {Object}
     */
    private serverShortcutKeyListeners;
    /**
     * @private
     * We ignore any of these keycodes if they appear inside of the keyup event
     * @type {{16: boolean, 17: boolean, 18: boolean, 91: boolean, 93: boolean}}
     */
    ignoredKeyCodes: GwMap;
    /**
     * @private
     * If an element has focus and triggers a keyup event, this map will be used if the element doesn't explicitly
     * define a data-gw-keyup method So if an element has a data-gw-click method, then when keycode 13 fires (the
     * enter key) the on click method will fire. This is so we can implement things like space bar toggling radio
     * buttons, etc. These can also take shift, alt, ctrl, and meta key modifiers by setting shift: true,
     * alt: true, etc.
     */
    genericKeyReactors: GwKeyListener[];
    /**
     * Contextual key listeners, who only fire if they key combination was fired within an element of the given contextClass
     */
    contextualKeyListeners: GwKeyListener[];
    /**
     * @private
     * These global shortcuts are only evaluated if the the focused element does not listen to the given keycode.
     * These are processed for shift, alt, ctrl, and meta key modifiers, but historically the gw shortcuts only used
     * alt and shift
     */
    globalShortcutKeyListeners: GwKeyListener[];
    init(isFullReload: boolean): void;
    /**
     * Used by server side shortcuts to track down the target of the shortcut and return it
     */
    findServerShortcutKeyTarget(id: string): GwDomNode | null;
    addServerKeyboardShortcut(shortcutMapKey: string, eventId: string): void;
    clearServerKeyboardShortcuts(): void;
    getServerKeyboardShortcutCharacters(): string[];
    /**
     * Checks whether a contextual key listener is setup for the current node. If there is a matching
     * spec for the keypress, we see if it is in the designated context, if so returning it as the
     * key listener for this event
     */
    findMatchingContextualKeyListener(e: KeyboardEvent, node: GwDomNode, keyCode: string): GwKeyListener | null;
    /**
     * Returns the keyCode of the associated shortcut.  First we check keycodes to see if there's a keycode
     * shortcut.  If we find no keycode match, we assume the shortcut is a single letter shortcut key.
     *
     * For a single letter shortcut key we usually return the ASCII character code.  However, the shortcut does
     * not always match the keyCode for a given character.  e.g. - the keycode for '.' is 190.  '.'.charCodeAt(0) is 46
     * @param shortcut
     * @returns {Number}
     */
    getShortcutToKeyCode(shortcut: string): string;
    /**
     * Checks server shortcut keys and returns a key listener if it finds a match.
     * Checks current panel Scope to determine the priority of shortcut listeners.
     * If the current scope is South, center is never checked. If Center, south is never checked.
     *
     * @param e
     * @param keyCode
     */
    findMatchingServerShortcutKeyListener(e: KeyboardEvent, keyCode: string): GwKeyListener;
    /**
     * @private
     * Finds the first key listener that matches the given key event in the supplied array of key listener
     * objects, or returns null if none match. A key listener must have a keyCode and may have various other
     * flags such as alt, shift, ctrl, meta, internalTool and enableDefault.
     * @param e: the event
     * @param keyListeners: an array of objects to be matched via keyCode and modifier keys.
     * @param keyCode: the keyCode from the event.
     * @returns {object}
     */
    findMatchingKeyListener(e: KeyboardEvent, keyListeners: GwKeyListener[], keyCode: string): GwKeyListener;
    /**
     * @private
     * Finds all key listeners, in order, that match the given key event in the supplied array of key listener
     * objects, or returns an empty array if none match. A key listener must have a keyCode and may have various other
     * flags such as alt, shift, ctrl, meta, internalTool and enableDefault.
     * @param e: the event
     * @param keyListeners: an array of objects to be matched via keyCode and modifier keys.
     * @param keyCode: the keyCode from the event.
     * @returns {object}
     */
    findMatchingKeyListeners(e: KeyboardEvent, keyListeners: GwKeyListener[], keyCode: string): GwKeyListener[];
}
export declare const gwKeys: GwKeys;
