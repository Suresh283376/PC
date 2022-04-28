import { GwRegisteredSystem } from "../../core/util/GwRegisteredSystem";
import { GwClassIdTagOrNode, GwDomNode } from "../../types/gwTypes";
export declare class GwRangeRadio extends GwRegisteredSystem {
    getSystemName(): string;
    setValue(classIdTagOrNode: GwClassIdTagOrNode, renderId: string, value: string): void;
    getValue(node: GwDomNode): string | null;
    enable(classIdTagOrNode: GwClassIdTagOrNode, enabled?: boolean): void;
}
export declare const gwRangeRadio: GwRangeRadio;
