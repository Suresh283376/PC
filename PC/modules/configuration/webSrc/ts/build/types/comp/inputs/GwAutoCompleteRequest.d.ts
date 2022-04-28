import { GwMap } from "../../types/gwTypes";
export declare class GwAutoCompleteRequest {
    readonly textSoFar: string;
    readonly caretPos: number;
    readonly widgetId: string;
    readonly additionalArgs: GwMap;
    constructor(textSoFar: string, caretPos: number, widgetId: string);
}
