import { GwDomNode, GwMap } from "../types/gwTypes";
import { GwRegisteredSystem } from "../core/util/GwRegisteredSystem";
export declare class GwTreeView extends GwRegisteredSystem {
    getSystemName(): string;
    /**
     * Handles commands for TreeViews - Expanding, Collapsing, Selecting
     */
    treeViewAction(treeViewNode: GwDomNode, args: GwMap): void;
}
export declare const gwTreeView: GwTreeView;
