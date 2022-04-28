import { GwDomNode, GwMap } from "../types/gwTypes";
import { GwDraggableSystem } from "../core/util/GwDraggableSystem";
export declare class GwWestPanel extends GwDraggableSystem {
    getSystemName(): string;
    private readonly westPanelLastActiveIDs;
    private readonly westPanelMinKey;
    private readonly westPanelSizeKey;
    private readonly westPanelSnapLine;
    /**
     * Used to calculate the offset of the drag bar from it's original position.
     * @type gw.Point
     */
    private startPos;
    init(): void;
    /**
     * @public
     * Toggles the WestPanel expanding or collapsing.
     */
    toggleMinMax(): void;
    /**
     * Only used by gwStorage.registerComponentRestoreFunction.
     * Restores the various client only UI settings relating to the west panel.
     */
    _restoreWestPanel(): void;
    /**
     * We diff-replace the currently open active menu in the west panel when the user switches to a new location, which closes the menu, which is undesired.
     * So now we save off the last active menus and open them all up again after the diff.
     */
    private openLastActiveMenuItem();
    toggleActionMenu(): void;
    /**
     * Dragging
     */
    setWestPanelSizingOnEvent(el: GwDomNode, args: GwMap, e: MouseEvent): void;
    restoreWestPanelWidth(recalculateCenterPanel?: boolean): void;
    setWestPanelSizing(pixelWidth: string | number | null, recalculateCenterPanel?: boolean): void;
    getWestPanelEl(): GwDomNode;
    private moveDragBarTo(el, e);
    private resetDragBar(el);
    /**
     * Called by draggable.js
     * @param el
     * @param args
     * @param e
     */
    drag(el: GwDomNode, args: GwMap, e: DragEvent): void;
    /**
     * Called by draggable.js
     * @param el
     * @param args
     * @param e
     */
    dragStart(el: GwDomNode, args: GwMap, e: DragEvent): void;
    /**
     * Called by draggable.js
     * @param el
     * @param args
     * @param e
     */
    dragEnd(el: GwDomNode, args: GwMap, e: DragEvent): void;
    /**
     * Called by draggable.js
     * @param el
     * @param args
     * @param e
     */
    dragCancel(el: GwDomNode, args: GwMap, e: DragEvent): void;
}
export declare const gwWestPanel: GwWestPanel;
