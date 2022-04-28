import { GwInitializableSystem } from "../../core/util/GwInitializableSystem";
import { GwDateInfo } from "./GwDateInfo";
export declare class GwDatePickerHelper extends GwInitializableSystem {
    private readonly _mainDivClass;
    private readonly _mainDivId;
    private readonly _unselectableClass;
    private readonly _otherMonthDayClass;
    private readonly _inputtedValueDayClass;
    private readonly _todayDayClass;
    private readonly _keyEventCurrentDayClass;
    private readonly _uuidAttr;
    private readonly minRows;
    private _datePickerShowing;
    private _keyEvent;
    private _datePickerDiv;
    private _$datePickerDiv;
    _currInst: GwDateInfo | null;
    private _lastInput;
    /**
     * The storage object for all datePicker code. Much of it depends on jquery being instantiated, so we initialize it
     * all inside of loadAllRequiredJCode, but we need access to the methods externally, primarily for events
     * and to show hide the calendar from the global events system.
     * @type {{}}
     */
    private readonly dateInstMap;
    private readonly _defaults;
    protected availableToGlobal(): boolean;
    getSystemName(): string;
    init(isFullPageReload: boolean): void;
    readonly datePickerDiv: HTMLDivElement;
    readonly $datePickerDiv: JQuery;
    isDatePickerShowing(): boolean;
    getCurrDateInfoOrThrow(): GwDateInfo;
    setupDateInput(inputEl: HTMLInputElement): void;
    private _newInst(inputEl);
    _getInst(inputEl: HTMLInputElement): GwDateInfo | null;
    _setDateDatePicker(inputEl: HTMLInputElement, dateObj: Date): void;
    _getDateDatePicker(inputEl: HTMLInputElement, noDefault?: boolean): Date | null;
    _doKeyDown(event: KeyboardEvent): void;
    /**
     * TODO: cooper. I do not know what this method does, or rather, why it needs to do it.
     * Going to comment out and see if anything breaks
     */
    _doKeyUp(event: KeyboardEvent): boolean;
    /** Pop-up the date picker for a given input field.
     * @param  inputEl - the input field attached to the date picker or
     *                    event - if triggered by focus
     */
    _showDatePicker(inputEl: HTMLInputElement): void;
    _putFocusBackOnInput(inst: GwDateInfo): void;
    _updateDatePicker(inst: GwDateInfo): void;
    _hideDatePicker(): void;
    _adjustDate(inst: GwDateInfo, offset?: number, period?: string): void;
    /**
     * Show the month and year that currently contains today's date.
     * @param inst
     * @private
     */
    _gotoToday(inst: GwDateInfo): void;
    _selectToday(inst: GwDateInfo): void;
    /**
     * Show the month and year of the date displayed in the input element
     * @param inst
     * @private
     */
    _gotoCurrent(inst: GwDateInfo): void;
    _selectMonthYear(inst: GwDateInfo, select: HTMLSelectElement, period: string): void;
    _selectDay(inst: GwDateInfo, month: number, year: number, day: number): void;
    _clearDate(inst: GwDateInfo): void;
    _selectDate(inst: GwDateInfo, dateStr: string): void;
    noWeekends(date: Date): any;
    private getDateFormatFromInst(inst);
    parseDate(inst: GwDateInfo, forcedValue?: any): Date;
    formatDate(inst: GwDateInfo, date: Date): string;
    _get(name: string): any;
    /** Parse existing date and initialise date picker.
     *  @return: boolean, true if the input value has changed and the datepicker needs updating
     */
    _setDateFromField(inst: GwDateInfo, noDefault?: boolean, parsedDate?: Date): boolean;
    _getDefaultDate(inst: GwDateInfo): Date;
    _determineDate(inst: GwDateInfo, date: Date | number | string | null, defaultDate: Date | null): Date | null;
    _daylightSavingAdjust(date: Date): Date;
    _setDate(inst: GwDateInfo, date: Date, noChange?: boolean): void;
    _getDate(inst: GwDateInfo): Date | null;
    disableDaysAfter(lastValidDay: number | string): void;
    disableDaysBefore(firstValidDay: number | string): void;
    private shouldDisableCalendarDate(num, inst);
    private getCurrentButtonText();
    private getTodayButtonText();
    _generateHTML(inst: GwDateInfo): string;
    _generateMonthYearHeader(inst: GwDateInfo, drawMonth: number, drawYear: number, minDate: Date | null, maxDate: Date | null, secondary?: any, monthNamesShort?: any): string;
    private getInfoButtonHTML();
    _adjustInstDate(inst: GwDateInfo, offset?: number, period?: string): void;
    _restrictMinMax(inst: GwDateInfo, date: Date | null): Date;
    _getNumberOfMonths(inst: GwDateInfo): number[];
    _getMinMaxDate(inst: GwDateInfo, minMax: "min" | "max"): Date | null;
    _getDaysInMonth(year: number, month: number): number;
    _getFirstDayOfMonth(year: number, month: number): number;
    _canAdjustMonth(inst: GwDateInfo, offset: number, curYear: number, curMonth: number): boolean;
    _isInRange(inst: GwDateInfo, date: Date): boolean;
    _formatDate(inst: GwDateInfo, day?: any, month?: any, year?: any): string;
    markDateValueInputModified(el: HTMLInputElement, ignoresystem?: string): void;
}
export declare const gwDatePickerHelper: GwDatePickerHelper;
