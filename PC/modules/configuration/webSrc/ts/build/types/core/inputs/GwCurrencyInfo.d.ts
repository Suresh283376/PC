import { GwDomNode } from "../../types/gwTypes";
export declare class GwCurrencyInfo {
    readonly code: string;
    readonly symb: string;
    readonly grouping: string;
    readonly radix: string;
    readonly maxDecimalDigits: number;
    constructor(infoArr: string[]);
    static getCurrencyInfo(currencyEl: GwDomNode): GwCurrencyInfo | null;
}
