import { GwDomNode, GwMap } from "../types/gwTypes";
import { GwRegisteredSystem } from "../core/util/GwRegisteredSystem";
export declare class GwPaging extends GwRegisteredSystem {
    getSystemName(): string;
    page(pagingButtonNode: GwDomNode, pageArgs: GwMap): void;
    parent(pagingButtonNode: GwDomNode, pageArgs: GwMap): void;
    child(pagingButtonNode: GwDomNode, pageArgs: GwMap): void;
}
export declare const gwPaging: GwPaging;
