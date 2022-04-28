import { GwDomNode } from "../../types/gwTypes";
export declare class GwShuttleBoxInfo {
    readonly left: HTMLSelectElement;
    readonly right: HTMLSelectElement;
    readonly hidden: HTMLSelectElement;
    readonly parent: GwDomNode;
    constructor(parentWidgetForRangeShuttle: GwDomNode);
}
