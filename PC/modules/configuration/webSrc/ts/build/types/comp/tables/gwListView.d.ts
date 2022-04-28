import { GwDomNode, GwEventType, GwKeyboardNavigation, GwMap } from "../../types/gwTypes";
import { GwDraggableSystem } from "../../core/util/GwDraggableSystem";
export declare class GwListView extends GwDraggableSystem implements GwKeyboardNavigation {
    getSystemName(): string;
    private readonly PREFERENCE_TYPE;
    private readonly COLUMN_PREFERENCES;
    private readonly FIRST_HEADER_CELL_CLASS;
    private readonly LAST_HEADER_CELL_CLASS;
    init(isFullPageReload: boolean): void;
    /**
     * Handles any commands an LV header cell might fire. Grouping, sorting, etc.
     * @param headerNode
     * @param args
     * @param event
     */
    headerAction(headerNode: GwDomNode, args: GwMap, event?: GwEventType): void;
    /**
     * @public
     * Filters the ListView using the given "opKey", which corresponds to specific Header's
     * filter values
     * @param filterNode
     * @param args
     */
    filter(filterNode: GwDomNode, args: GwMap): void;
    /**
     * A helper method for triggering the paging event
     */
    page(pageNode: HTMLInputElement, pageArgs: GwMap): void;
    hideColumn(headerNode: GwDomNode, args: GwMap): void;
    resetTablePreferences(headerNode: GwDomNode): void;
    /**
     * A helper method for hiding columns on the client side
     */
    hideColumnByHeaderId(associatedHeaderId: string): void;
    showColumn(clickedCell: GwDomNode, args: GwMap): void;
    /**
     * A helper method for showing columns on the client side
     */
    showColumnByHeaderId(associatedHeaderId: string): void;
    applyPreferences(): void;
    storeColumnOrder(listViewElement: GwDomNode): void;
    toggleColumnVisibility(target: GwDomNode, args: GwMap): void;
    toggleGroupedBy(target: GwDomNode, args: GwMap): void;
    private getHeaderTD(headerId);
    private resetHiddenColumns(listViewElement);
    private storeHiddenColumnValueInLVPreferences(listViewId, headerId, hiddenValue?);
    private storeColumnOrderingInLVPreferences(listViewId, columnIdsInOrder);
    private getColumnPreferences(listViewId);
    private getListViewRenderIds();
    private moveColumn(listViewElement, sourceIndex, targetIndex);
    getFirstValueWidgetInCell(td: HTMLTableDataCellElement): GwDomNode | null;
    private headerCells(listViewElement);
    private headerValueWidgets(listViewElement);
    private headerColumnIds(listViewElement);
    private headerColumnIdsInRenderOrder(listViewElement);
    applyColumnClasses(listViewElement: GwDomNode): void;
    private refreshHeaderCellWithTargetClass(listViewElement, targetClass, firstOrLast);
    private applyColumnOrdering(listViewElement, columnOrdering);
    markColumnsAsOrdered(listViewElement: GwDomNode): void;
    /**
     * @public
     * Handles an "Alt-Shift-Left" shortcut while in the context of an LV
     * @param node the node that received the shortcut
     * @param info the method info
     * @param event the event
     */
    left(node: GwDomNode, info: GwMap, event: GwEventType): void;
    /**
     * @public
     * Handles an "Alt-Shift-Right" shortcut while in the context of an LV
     * @param node the node that received the shortcut
     * @param info the method info
     * @param event the event
     */
    right(node: GwDomNode, info: GwMap, event: GwEventType): void;
    /**
     * @public
     * Handles an "Alt-Shift-Up" shortcut while in the context of an LV
     * @param node the node that received the shortcut
     * @param info the method info
     * @param event the event
     */
    up(node: GwDomNode, info: GwMap, event: GwEventType): void;
    /**
     * @public
     * Handles an "Alt-Shift-Down" shortcut while in the context of an LV
     * @param node the node that received the shortcut
     * @param info the method info
     * @param event the event
     */
    down(node: GwDomNode, info: GwMap, event: GwEventType): void;
    /**
     * Called by draggable.js
     */
    dragStart(actionInner: GwDomNode): void;
    /**
     * Called by draggable.js
     */
    dragEnd(): void;
    /**
     * Called by draggable.js
     */
    dragCancel(): void;
    /**
     * Called by draggable.js
     */
    drag(): void;
}
export declare const gwListView: GwListView;
