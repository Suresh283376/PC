import { GwMap } from "../../types/gwTypes";
import { GwInitializableSystem } from "../util/GwInitializableSystem";
export declare class GwCurrency extends GwInitializableSystem {
    getSystemName(): string;
    init(isFullPageReload: boolean): void;
    private setupCurrencyMacroCharacters();
    private escapeCurrencySymb(cSymb);
    private getCurrencyFormatRegEx(currencyInfo);
    private stripFirstAndLastCharsIfParens(pastedValue);
    /**
     * Method called when paste is triggered on a currency input.
     * 1. Does extra logic to determine whether we need to throw up an alert if the pasted value is formatted correctly.
     * @param el
     * @param args
     * @param e
     */
    pasteOnCurrencyInput(el: HTMLInputElement, args: GwMap, e: ClipboardEvent): boolean;
    /**
     * Method called when copy or cut is triggered on a currency input.
     * 1. Does extra logic to determine whether it should affix the prefix and suffix to the clipboard value.
     * 2. If the value is determined to be negative, then moves the prefix or suffix currency symbols inside of the
     *    negative symbol. ie: -$500.98 or ($500.98)
     * @param el
     * @param args
     * @param e
     */
    copyOnCurrencyInput(el: HTMLInputElement, args: GwMap, e: ClipboardEvent): void;
    valueChangedSoProcessCurrencyInfo(el: HTMLInputElement): void;
}
export declare const gwCurrency: GwCurrency;
