import { GwRegisteredSystem } from "./core/util/GwRegisteredSystem";
import { GwMap } from "./types/gwTypes";
import { GwOrderDependantInitializableSystem } from "./core/util/GwOrderDependantInitializableSystem";
export declare enum GwPartialReloadReason {
    REPLACE_ITEMS = 0,
    REPLACE_BODY = 1,
    THEME_CHANGE = 2,
    ERROR = 3,
}
export declare class GwApp extends GwRegisteredSystem {
    readonly maxElementsToReplacePerFrame: number;
    shouldFlash: boolean;
    showDevLogs: boolean;
    showEventLogs: boolean;
    showEventTrace: boolean;
    readonly minScreenWidth: number;
    readonly minScreenHeight: number;
    newSession: boolean;
    readonly enableWebsocket: boolean;
    getSystemName(): string;
    fireAfterFullPageReload(): void;
    fireAfterPartialPageReload(details: GwMap): void;
    fireAfterGwBodyReplace(): void;
    showBody(): void;
    hideBody(): void;
    private resetInitOnlyValues();
    _dev_showBodyAfterReloadChunk(): void;
    popupAboutWindow(): Window | null;
    openShortcutHelp(): void;
    closeShortcutHelp(): void;
    private isNavigating;
    /**
     * Prepares the app for Nav, which cancels all remaining initialization. If navigating within the Cluster,
     * the onbeforeunload is cleared. Otherwise, we only stop initialization if there is no
     * onbeforeunload registered.
     */
    prepareForExitPointNavigation(isClusterNav?: boolean): void;
    getPreInitializationOrderSpecificSystems(): GwOrderDependantInitializableSystem[];
    getPostInitializationOrderSpecificSystems(): GwOrderDependantInitializableSystem[];
    /**
     * @private
     * method used by both fullPage and partialPage reload. Passes the isFullPageReload
     * parameter in to any init method it calls, so the system or widget can do different things
     * based on whether it's a full or partial page reload.
     * @param isFullPageReload
     * @param partialReloadDetails an object containing a reason field and, if the reason is REPLACE_ITEMS,
     *        and ids field containing the ids of the items that were replaced
     */
    abstractReload(isFullPageReload: boolean, partialReloadDetails: GwMap): void;
    /**
     * Fires before every server event.
     * Eventually, if many systems begin using this, it should be converted into a
     * "walkAllDomNodesBeforeServerEvent" where each node is passed into the methods defined in it.
     */
    beforeEachFireEventToServer(): void;
    private registerAjaxForm();
}
export declare const gwApp: GwApp;
