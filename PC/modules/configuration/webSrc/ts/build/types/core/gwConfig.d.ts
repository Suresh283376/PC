import { GwTypedMap } from "../types/gwTypes";
import { GwOrderDependantInitializableSystem } from "./util/GwOrderDependantInitializableSystem";
export declare class GwConfig extends GwOrderDependantInitializableSystem {
    getSystemName(): string;
    private values;
    orderSpecificInit(isFullPageReload: boolean): void;
    serverTimeoutMillis(): number;
    prefPanelDefaults(): GwTypedMap<string | boolean>;
    /** Only used for testing */
    _setServerTimeoutSeconds(seconds: number): void;
}
export declare const gwConfig: GwConfig;
