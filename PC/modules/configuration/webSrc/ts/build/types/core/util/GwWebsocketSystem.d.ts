import { GwMap } from "../../types/gwTypes";
import { GwInitializableSystem } from "./GwInitializableSystem";
export declare abstract class GwWebsocketSystem extends GwInitializableSystem {
    constructor();
    protected availableToWebSocket(): boolean;
    abstract onWebSocket(info: GwMap): void;
}
