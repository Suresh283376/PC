import { GwRegisteredSystem } from "./util/GwRegisteredSystem";
export declare class GwInternalTools extends GwRegisteredSystem {
    getSystemName(): string;
    showPcfStructure(): void;
    showFullPcfStructure(): void;
    reloadPCF(): void;
    goToInternalTools(): void;
    goToProfiler(): void;
    editCurrentPageInStudio(): void;
}
export declare const gwInternalTools: GwInternalTools;
