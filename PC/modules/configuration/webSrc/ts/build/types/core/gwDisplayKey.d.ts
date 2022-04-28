import { GwOrderDependantInitializableSystem } from "./util/GwOrderDependantInitializableSystem";
export declare class GwDisplayKey extends GwOrderDependantInitializableSystem {
    getSystemName(): string;
    languageCode: string | null;
    orderSpecificInit(): void;
    get(key: string, ...varArgs: any[]): string;
}
export declare const gwDisplayKey: GwDisplayKey;
