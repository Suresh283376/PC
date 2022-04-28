import { GwInitializableSystem } from "../core/util/GwInitializableSystem";
export declare class GwLoginPage extends GwInitializableSystem {
    getSystemName(): string;
    private addMissingAttributesToLoginPage(centerPanel);
    init(): void;
}
export declare const gwLoginPage: GwLoginPage;
