import { GwDomNode } from "../../types/gwTypes";
export declare enum GwReflectionType {
    readonly = 0,
    input = 1,
    checkbox = 2,
    checkboxGroup = 3,
    radioRange = 4,
    dateInput = 5,
    NULL = 6,
}
export declare class GwReflectionTrigger {
    readonly listeners: Function[];
    readonly id: string;
    readonly widget: GwDomNode;
    private reflectionType;
    constructor(triggerNode: GwDomNode);
    setReflectionType(t: GwReflectionType): void;
    getValue(): any;
    /**
     * Returns true, if this triggered has already triggered
     */
    hasTriggered(): boolean;
    /**
     * Dispatch trigger change event.
     * @param isDirectChange indicates that this change is direct event from the input. false, by default
     */
    dispatchChangeEvent(isDirectChange?: boolean): void;
    addChangeListener(listener: Function): void;
    /**
     * For internal use. All direct changes need to trigger events with use of this function.
     * @private
     */
    internalDispatchChangeEvent(): void;
}
