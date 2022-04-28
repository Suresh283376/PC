import { GwDomNode, GwMap } from "../types/gwTypes";
import { GwRegisteredSystem } from "../core/util/GwRegisteredSystem";
export declare class GwInputGroup extends GwRegisteredSystem {
    getSystemName(): string;
    toggle(widget: GwDomNode, args: GwMap): void;
    private expandGroup(checkboxId);
    private collapseGroup(checkboxId);
    private toggleGroup(checkboxId, expand?);
}
export declare const gwInputGroup: GwInputGroup;
