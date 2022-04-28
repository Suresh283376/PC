import { GwInitializableSystem } from "../util/GwInitializableSystem";
export declare class GwFlags extends GwInitializableSystem {
    getSystemName(): string;
    private checkAvailabilityOfAllButtons();
    headerCheckBoxChanged(checkBox: HTMLInputElement): void;
    checkBoxChanged(checkBox: HTMLInputElement): void;
    init(): void;
}
export declare const gwFlags: GwFlags;
