import { GwOrderDependantInitializableSystem } from "./util/GwOrderDependantInitializableSystem";
export declare class GwLocale extends GwOrderDependantInitializableSystem {
    getSystemName(): string;
    private localeCode;
    orderSpecificInit(): void;
    getDecimalSymbol(): string;
    getThousandsSymbol(): string;
    getMinWeekdays(): string[];
    getShortWeekdays(): string[];
    getWeekdays(): string[];
    getShortMonths(): string[];
    getMonths(): string[];
    getPeriods(): string[];
}
export declare const gwLocale: GwLocale;
