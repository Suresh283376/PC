import { GwRegisteredSystem } from "../../core/util/GwRegisteredSystem";
import { GwDomNode, GwMap } from "../../types/gwTypes";
export declare class GwRadioButtonGroup extends GwRegisteredSystem {
    getSystemName(): string;
    /**
     * Updates the styling and values of the underlying inputs used to represent a logical radio group.
     * @param radioButtonWidget the radio button widget which is being selected
     */
    updateRadioGroup(radioButtonWidget: GwDomNode, args: GwMap): void;
    private isConfirmSpecified(radioButtonWidget);
}
export declare const gwRadioButtonGroup: GwRadioButtonGroup;
