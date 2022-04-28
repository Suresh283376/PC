import { GwDomNode, GwMap } from "../../types/gwTypes";
import { GwInitializableSystem } from "./GwInitializableSystem";
export declare abstract class GwDraggableSystem extends GwInitializableSystem {
    constructor();
    abstract dragStart(el: GwDomNode, args: GwMap, e: DragEvent): void;
    abstract drag(el: GwDomNode, args: GwMap, e: DragEvent): void;
    abstract dragEnd(el: GwDomNode, args: GwMap, e: DragEvent): void;
    abstract dragCancel(el: GwDomNode, args: GwMap, e: DragEvent): void;
    protected availableToDraggable(): boolean;
}
