import { GwDomNode } from "../../types/gwTypes";
import { GwEventDescription } from "./GwEventDescription";
export declare class GwKeyListener {
    keyCode: string;
    internalTool: boolean;
    meta: boolean;
    ctrl: boolean;
    shift: boolean;
    alt: boolean;
    enableDefault: boolean;
    methodName: string | undefined;
    reactors: string[] | undefined;
    createEventDescription: undefined | "reactors" | "server";
    contextClass: string | undefined;
    eventType: string;
    shortcutKey: string | undefined;
    openMenuOnShortcut: boolean;
    serverEventId: string | undefined;
    constructor(keyCode: string);
    withServerEventId(id: string): this;
    withOpenMenuOnShortcut(bool: boolean): this;
    withShortcutKey(key: string): this;
    withMeta(): this;
    withAlt(): this;
    withInternalTool(): this;
    withCtrl(): this;
    withShift(): this;
    withEnableDefault(): this;
    withMethodName(name: string): this;
    withReactors(...args: string[]): this;
    withContextClass(cls: string): this;
    useCreateEventDescription(functionType: "reactors" | "server"): this;
    /**
     * Function used by "reactor" key listeners, which map key presses to specific events (such as click)
     * on the target node. If the target node contains a data attribute containing an appropriate event
     * description then returns the parsed description, otherwise returns null.
     */
    applyReactorsForKeyEvent(el: GwDomNode): GwEventDescription | null;
    serverShortcut(): GwEventDescription | null;
}
