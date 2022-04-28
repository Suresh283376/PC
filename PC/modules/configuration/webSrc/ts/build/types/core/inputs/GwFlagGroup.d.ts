import { GwTypedMap } from "../../types/gwTypes";
export declare class GwFlagGroup {
    readonly checkBoxes: HTMLInputElement[];
    readonly buttons: HTMLElement[];
    headerCheckBox: HTMLInputElement | null;
    constructor(iteratorId: string | undefined);
    updateButtonsAvailability(): void;
    updateButtonAvailability(button: HTMLElement): void;
    evaluateCondition(button: HTMLElement, condition: string): boolean;
    operations: GwTypedMap<Function>;
    countTargetedCheckedCheckBoxesWithFlag(button: HTMLElement, flagName: string): number;
    checkBoxHasFlag(checkBox: HTMLInputElement, flagName: string): boolean;
    targetedCheckedCheckBoxes(button: HTMLElement): HTMLInputElement[];
    targetedCheckBoxes(button: HTMLElement): HTMLInputElement[];
    targetListStartsWith(targetList: string, targetSubList: string): boolean;
}
