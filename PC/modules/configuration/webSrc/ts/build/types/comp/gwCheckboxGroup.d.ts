import { GwClassIdTagOrNode, GwDomNode, GwMap } from "../types/gwTypes";
import { GwRegisteredSystem } from "../core/util/GwRegisteredSystem";
export declare class GwCheckboxGroup extends GwRegisteredSystem {
    getSystemName(): string;
    setOptions(classIdTagOrNode: GwClassIdTagOrNode, renderId: string, options: GwMap[]): void;
    setValues(checkboxGroupNode: GwClassIdTagOrNode, values: string | string[]): void;
    getValues(checkboxGroupNode: GwDomNode): string[];
    enable(checkboxGroupNode: GwDomNode, enabled?: boolean): void;
}
export declare const gwCheckboxGroup: GwCheckboxGroup;
