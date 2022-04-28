import { GwDomNode, GwMap } from "../types/gwTypes";
import { GwPoint } from "./GwPoint";
import { GwRegisteredSystem } from "./util/GwRegisteredSystem";
/**
 * @public
 * Handles all events triggered by the global events mapped to dragstart, drag, and dragend.
 * To register a system for drag, the element just needs a data-gw-draggable="SystemName" attribute.
 * When the various drag events are triggered, then corresponding methods will be called on the system:
 * ie:
 * gw[SystemName].dragstart
 * gw[SystemName].drag
 * gw[SystemName].dragend
 * (Optional)gw[SystemName].dragcancel (if not present, and a cancel condition fires, then dragend will be fired)
 *
 * e.g. if you had data-gw-draggable="SouthPanel" then a drag operation would call:
 * gw.SouthPanel.dragStart(el, args, e)
 * gw.SouthPanel.drag(el, args, e) - maybe multiple times
 * gw.SouthPanel.dragEnd(el, args, e)
 * gw.SouthPanel.dragCancel(el, args, e) - is Optional, and dragEnd will fire if no drag cancel is found
 * @type {{}}
 */
export declare class GwDraggable extends GwRegisteredSystem {
    getSystemName(): string;
    private readonly DRAG_ATTR;
    private beingDragged;
    private surrenderMouseMoveOwnership;
    private cursorOffset;
    private mousePos;
    private dragHoverInterval;
    private currentDraggingSystemName;
    private dragHoverEnabled;
    /**
     * Returns the object currently being dragged. This is important, because we use mouse events to trigger dragging.
     * So the drag and drag end methods will pass the beingDragged element into the corresponding system methods,
     * since the events themselves, may not have the dragged element as the target of the event, like if the user has moved
     * the mouse quickly, etc.
     * @returns {*}
     */
    getBeingDragged(): GwDomNode | null;
    isDragging(): boolean;
    /**
     * And individual system needs to call this, most likely inside of dragStart,
     * in order to receive calls to the drag method every frame, even if the mouse isn't moving.
     * This is so systems can do things like "scroll the screen" while the user hovers the mouse near the edge.
     */
    enableDragHover(): void;
    private storeMousePos(el, e);
    /**
     * calls gw[el.getAttributeName("data-gw-draggable")].dragStart(el, args, e);
     * @param el
     * @param args
     * @param e
     */
    start(el: GwDomNode, args: GwMap, e: DragEvent): void;
    /**
     * Called inside of dragStart if the owner system has enabled dragHover.
     * This is so systems can do things like "scroll the screen" while the user hovers the mouse near the edge.
     */
    /**
     * calls gw[el.getAttributeName("data-gw-draggable")].drag(getBeingDragged(), args, e);
     * @param e a mouse move event
     */
    private drag(e);
    /**
     * calls gw[el.getAttributeName("data-gw-draggable")].dragend(getBeingDragged(), args, e);
     * @param el
     * @param args
     * @param e
     */
    end(el: GwDomNode, args: GwMap, e: DragEvent): void;
    /**
     * calls gw[el.getAttributeName("data-gw-draggable")].dragcancel(getBeingDragged(), args, e);
     * @param el
     * @param args
     * @param e
     */
    cancel(el: GwDomNode, args: GwMap, e: DragEvent): void;
    private abstractDragEndedOrCanceled(el, args, e, isCancel?);
    private storeCursorOffset(e);
    /**
     * returns a vector with the original offset of the cursor position relative to the 0,0 of the dragged object.
     */
    getCursorOffset(): GwPoint | null;
    getCurrentMousePos(): GwPoint | null;
}
export declare const gwDraggable: GwDraggable;
