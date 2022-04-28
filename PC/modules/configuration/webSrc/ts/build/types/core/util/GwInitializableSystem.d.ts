import { GwMap } from "../../types/gwTypes";
import { GwRegisteredSystem } from "./GwRegisteredSystem";
export declare abstract class GwInitializableSystem extends GwRegisteredSystem {
    constructor();
    protected availableToInitialize(): boolean;
    abstract init(isFullPageReload: boolean, partialReloadDetails?: GwMap): void;
}
