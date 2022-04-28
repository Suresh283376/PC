import { GwDomNode, GwMap } from "../types/gwTypes";
import { GwRegisteredSystem } from "../core/util/GwRegisteredSystem";
export declare class GwNoteBody extends GwRegisteredSystem {
    getSystemName(): string;
    downloadDocument(triggerNode: GwDomNode, args: GwMap): void;
}
export declare const gwNoteBody: GwNoteBody;
