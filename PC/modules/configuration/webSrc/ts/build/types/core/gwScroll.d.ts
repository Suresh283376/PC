import { GwDomNode, GwMap } from "../types/gwTypes";
import { GwOrderDependantInitializableSystem } from "./util/GwOrderDependantInitializableSystem";
/**
 * System to store and restore scroll position on Dom elements between server round-trips;
 * Before each server event it stores off any divs that have a scroll position other than 0 into local storage
 * and then on page refresh, uses events.js doCustomSystemWorkOnEveryNodeOnPageLoad to restore scroll position.
 * @type {{}}
 */
export declare class GwScroll extends GwOrderDependantInitializableSystem {
    getSystemName(): string;
    private readonly LOC_OBJECT_CLASS;
    private readonly DEST_HASH_ATTR;
    private readonly SCREEN_WIDGET_CLASS;
    readonly scrollKey: string;
    orderSpecificInit(isFullPageReload: boolean, partialReloadDetails: GwMap): void;
    setScreenScrollTo0(node: GwDomNode): void;
    private scrollElTo0(node);
    private getLocationObject();
    private getDestinationHash();
    private getStorageKeyForNode(node);
    /**
     * If a node has an id and either a scrollTop or a scrollLeft greater than 0, then store it in local storage
     * @param node
     */
    storeScrollForNode(node: GwDomNode): void;
    private setTopAndLeftInStorage(keyId, top?, left?);
    /**
     * If a node has an id, and that id has an object stored in the scroll local storage,
     * then set the scrollTop and scrollLeft values of that node.
     * Called per node in events.js doCustomSystemWorkOnEveryNodeOnPageLoad
     * @param node
     */
    restoreScrollForNode(node: GwDomNode): void;
    /**
     * sets the local storage for 'scroll' to an empty object.
     * Currently called by resizer.js onResize
     */
    clearStoredScrollPositions(): void;
    /**
     * This is a relatively brute force implementation, as it just goes and gets every single div,
     * but it's simple and clean. Once day we may choose to have a "walkAllDomNodesBeforeServerEvent" method
     * and if we do that, this would become part of it.
     * @returns {*|jQuery|HTMLElement}
     */
    private getScrollNodesInDom();
    /**
     * Calls storeScrollForNode on the results of getScrollNodesInDom
     * Currently called by beforeFireServerEvent in app.js
     */
    saveScrollPositions(): void;
}
export declare const gwScroll: GwScroll;
