import { GwRegisteredSystem } from "../../core/util/GwRegisteredSystem";
export declare class GwDatePicker extends GwRegisteredSystem {
    getSystemName(): string;
    prev(): void;
    next(): void;
    hide(): void;
    today(): void;
    current(): void;
    selectDay(el: HTMLSelectElement): void;
    selectMonth(el: HTMLSelectElement): void;
    selectYear(el: HTMLSelectElement): void;
}
export declare const gwDatePicker: GwDatePicker;
