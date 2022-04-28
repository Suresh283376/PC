import { GwRegisteredSystem } from "../../core/util/GwRegisteredSystem";
import { GwClassIdTagOrNode, GwDomNode, GwMap } from "../../types/gwTypes";
export declare class GwRangeValue extends GwRegisteredSystem {
    getSystemName(): string;
    private getShuttleBoxInputs(classIdTagOrNode);
    private getRangeShuttleWidgetNode(classIdTagOrNode);
    private updateHidden(shuttleBoxInfo, node, selectedState);
    setOptions(classIdTagOrNode: GwClassIdTagOrNode, options: GwMap[]): void;
    setValue(classIdTagOrNode: GwClassIdTagOrNode, value: any): void;
    setValues(classIdTagOrNode: GwClassIdTagOrNode, values: any[]): void;
    isMultiple(classIdTagOrNode: GwClassIdTagOrNode): boolean;
    private updateButtons(shuttleBoxInfo);
    moveRight(buttonEl: GwDomNode): void;
    moveLeft(buttonEl: GwDomNode): void;
    private needsRefresh(classIdTagOrNode);
}
export declare const gwRangeValue: GwRangeValue;
