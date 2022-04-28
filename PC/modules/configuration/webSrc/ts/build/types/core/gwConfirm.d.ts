import { GwDomNode, GwInputElement } from "../types/gwTypes";
import { GwEventDescription } from "./events/GwEventDescription";
import { GwRegisteredSystem } from "./util/GwRegisteredSystem";
export declare class GwConfirm extends GwRegisteredSystem {
    getSystemName(): string;
    /**
     * @private
     * Checks the targeted node associated with the eventDescription and returns
     * a list of input nodes that need to be confirmed.
     */
    private getInputsToBeConfirmed(eventDescription);
    /**
     * @private
     * Based on the type of node, searches the current node and it's children and returns a list of nodes
     * to whose values will be checked to see if they've changed.  If multi-input, calls
     *   gw[changeNode.getAttributeName("data-gw-multi-input")].getConfirmTargets(changeNode)
     * @param changeNode
     * @returns {{set, expr}|*|{ID, NAME, TAG}|jQuery}
     */
    private $getInputsToCheck(changeNode);
    /**
     * Save the current value of an input after a user has confirmed they want the change. Only
     * called for nodes that require confirmation before a value change. Does nothing if
     * node is not an input.
     * Assumption: we don't support multiselect select controls
     */
    saveConfirmedValue(node: GwInputElement): void;
    /**
     * @private
     * Restore previous value of an input after a user has cancelled an input change. Only
     * called for nodes that require confirmation before a value change. Does nothing if
     * node is not an input.
     * Assumption: we don't support multiselect select controls
     */
    private cancelValueChange(node);
    /**
     * @private
     * Based on the inputType of {@param node}, check to see if the current value
     * differs from the default value.
     *
     * @param node node for which current and default values will be compared
     * @returns {boolean} return true if the current value differs from the default value
     *     else returns false
     */
    private valueDiffersFromDefault(node);
    isConfirm(el: GwDomNode): boolean;
    /**
     * @public
     * Grabs method using key {@param methodKey} from multi input config object passed via
     * "data-gw-multi-input" attribute on {@param changeNode}.
     *
     * @param changeNode
     * @param methodKey
     * @returns {null}
     */
    getMethodFromMultiInputConfig(changeNode: GwDomNode, methodKey: string): Function | null;
    /**
     * @public
     * Check if executing the given event needs user confirmation. If so display a confirmation dialog
     * to the user, giving them a chance to cancel it. The event description is the result of calling
     * getEventDescription and contains details of the target node, event type and the method to be
     * executed plus its arguments.
     *
     * @return {boolean} true if the event should proceed, false if it has been cancelled by the user
     */
    confirmEvent(eventDescription: GwEventDescription): boolean;
}
export declare const gwConfirm: GwConfirm;
