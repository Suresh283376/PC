import { GwMap } from "../types/gwTypes";
import { GwOrderDependantInitializableSystem } from "./util/GwOrderDependantInitializableSystem";
export declare enum GwClientCommand {
    EDITABLE_CONTROLLERS = "EDITABLE_CONTROLLERS",
    REDIRECT = "REDIRECT",
    POPUP = "POPUP",
    REGISTER_KEY_SHORTCUTS = "REGISTER_KEY_SHORTCUTS",
    REGISTER_DROPZONES = "REGISTER_DROPZONES",
    DEFERRED_DOWNLOAD = "DEFERRED_DOWNLOAD",
    FOCUS = "FOCUS",
    TITLE = "TITLE",
}
export declare class GwOps extends GwOrderDependantInitializableSystem {
    getSystemName(): string;
    orderSpecificInit(): void;
    processClientOps(): void;
    handleCommand(command: GwClientCommand, args: GwMap): void;
    redirect(method: string, url: string, parameters: GwMap, isMultiClusterNav: string): void;
    popup(url?: string, target?: string, features?: string): void;
    registerShortcuts(shortcutMap: GwMap): void;
    setTitle(newTitle: string): void;
}
export declare const gwOps: GwOps;
