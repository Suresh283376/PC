import { GwMap } from "../../types/gwTypes";
export declare class GwCurrencyHelper {
    readonly MACRO_CHARS: string;
    readonly COPY_SYMBOL: string;
    readonly maxIllegalCharsBeforePunting: number;
    macros: GwMap;
    macroChars: string[];
    /**
     * Currency Macros
     * Currently only single chars are supported. Macro characters are NOT case sensitive.
     * Examples:
     * 107b => 107,000,000,000
     * 1.9m => 1,900,000
     * These are not multipliers, so changing the values to anything other than 0s will not have the effect you expect
     * display.properties defines the single keys for each amount, per language
     */
    macroZeroMap: GwMap;
    getConfigValue(constKey: string): string;
    /**
     * Closure Variables
     */
    private readonly nonDigitChars;
    private cursorIndex;
    private cursorOffset;
    private i;
    /**
     * @private
     * helper method for valueChangedSoProcessCurrencyInfo
     */
    private decrementOffsetIfIndexGreaterThanOrEqualTo(valOrDefaultI?);
    /**
     * @private
     * helper method for valueChangedSoProcessCurrencyInfo
     */
    private addCursorOffsetToCursorIndex();
    private finalizeElValue(el, val, optCursorPos?);
    /**
     * Runs on data-gw-currency-info elements to do inline automatic locale specific currency formatting.
     * requires: 'data-gw-currency-info="USD;$;,;.;2" where the semi-colon separated values are:
     * 1. International Currency Code: ex USD
     * 2. Currency Symbol: ex $
     * 3. Thousands Grouping Separator: ex ,
     * 4. Radix Separator: ex .
     * 5. Maximum Allowed Decimal Places: ex 2
     *
     * Features:
     * a. automatically adds grouping separators on the fly
     * b. restricts any invalid input
     * c. typing a matching radix or grouping symbol will move the cursor past the existing one
     * d. caps major digits to maxCurrencyDigits
     * e. Parses the macros in gw.currency.macros to convert things like 1.5m into 1,500,000 if enableMacroChars == true
     * f. adds and removes leading 0s when needed
     * g. delete key when to the right of a grouping symbol will move the cursor to the left of the symbol
     * h. typing or pasting a value with () for negative will convert them to a leading -
     * @param el
     * @param args
     * @param e
     */
    valueChangedSoProcessCurrencyInfo(el: HTMLInputElement): void;
}
export declare const gwCurrencyHelper: GwCurrencyHelper;
