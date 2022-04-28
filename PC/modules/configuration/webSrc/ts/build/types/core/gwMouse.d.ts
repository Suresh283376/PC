import { GwDomNode, GwMap } from "../types/gwTypes";
import { GwRegisteredSystem } from "./util/GwRegisteredSystem";
export declare class GwMouse extends GwRegisteredSystem {
    getSystemName(): string;
    /**
     * The method called by events.js for all systems that need to share the mouseenter event listener.
     * Any system needling to listen to mouseenter needs to add a complex transform in event.js, then register itself here.
     * @param node
     * @param args
     * @param e
     */
    enter(node: GwDomNode, args: GwMap, e: MouseEvent): void;
}
export declare const gwMouse: GwMouse;
