import { GwRegisteredSystem } from "../../core/util/GwRegisteredSystem";
import { GwDomNode, GwMap } from "../../types/gwTypes";
export declare class GwPrivacy extends GwRegisteredSystem {
    getSystemName(): string;
    private readonly hiddenClass;
    clearEncrypted(triggerNode: GwDomNode, args: GwMap): void;
}
export declare const gwPrivacy: GwPrivacy;
