import { GwMap } from "../../types/gwTypes";
import { GwRegisteredSystem } from "./GwRegisteredSystem";
export declare abstract class GwOrderDependantInitializableSystem extends GwRegisteredSystem {
    abstract orderSpecificInit(isFullPageReload: boolean, partialReloadDetails?: GwMap): void;
}
