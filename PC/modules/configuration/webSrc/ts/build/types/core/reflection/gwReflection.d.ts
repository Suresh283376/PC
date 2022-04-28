import { GwDomNode } from "../../types/gwTypes";
import { GwRegisteredSystem } from "../util/GwRegisteredSystem";
/**
 * Utility responsible for reflection functionality of the application.
 * See <Reflect> and <ReflectCondition> pcf elements
 *
 * There are two notions which are used in this class: trigger and reflector.
 * Both are wrappers around html elements with additional functionality.
 * A trigger provides functions to listen to change html native events and then dispatch events further to reflectors
 * A reflector provides a functionality to reflect values received from triggers to their internal HTML elements.
 */
export declare class GwReflection extends GwRegisteredSystem {
    getSystemName(): string;
    private readonly TRIGGER_IDS_PROP;
    private readonly REFLECTOR_ID_PROP;
    private readonly DIRECT_CHANGES_ONLY_PROP;
    /**
     * Cache of trigger wrappers
     */
    private triggerCache;
    /**
     * This helps prevents cyclic loops of triggers. It can happen when a reflector and a trigger listen to each other.
     */
    cycleEventsCache: any[];
    private changeListeners;
    clearCache(): void;
    notifyTriggerChange(id: string): void;
    isReflectionTrigger(node: GwDomNode): boolean;
    /**
     * For each reflector node, wrap it into a reflector class, find all of its trigger, wrap them into trigger classes,
     * cache them, then add change listeners to those triggers
     */
    initForNode(node: GwDomNode): void;
    private parseReflectionInfo(stringValue);
    private validateInfo(reflectionInfo);
    private extractTriggerIds(reflectionInfo);
    private extractReflectorId(reflectionInfo);
    private extractDirectReflectOnly(reflectionInfo);
    /**
     * Handles a trigger change. Sends a request to the server to get the reflected value , based on the trigger value.
     */
    private triggerChangeListener(trigger, allTriggers, reflector);
    /**
     * Handles a response from the server with the reflected value.
     */
    private handleReflectionResponse(trigger, allTriggers, reflector, response);
    /**
     * Reflection expressions which start with "javascript:" need to be executed on the client side, the server returns
     * such expression unchanged as a javascript code. These expression may include following symbols: TRIGGER_INDEX,
     * REFLECTOR, VALUE, VALUE1, .... , VALUEn (n - number of triggers). All these symbols need to be initialized in a
     * local context.
     *
     * All of that is done in this function.
     */
    private evalExpression(trigger, allTriggers, reflector, expression);
    private handleReflectionError(trigger, allTriggers, reflector, reason, response);
    /**
     * Wrap reflector node into a Reflector class
     */
    private reflectorify(node, reflectionInfo);
    /**
     * Set innerText on node to value, but additionally, conditionally set the gw-negative class if the value
     * could possibly be a negative currency. css will then style it  if the value widget is also a currency widget
     * @param {GwDomNode} node
     * @param {string} value
     */
    private reflectValueToReadOnlyElement(node, value);
    private reflectValueToInputElement(node, value);
    private reflectValueToSelectElement(node, value);
    private reflectValueToCheckboxRange(node, value);
    private reflectValueToReadOnlyRangeElement(node, value);
    private reflectValueToRangeRadioElement(node, reflectorId, value);
    private reflectValueToCheckboxElement(node, value);
    private reflectValueToDateElement(node, value);
    private enableNode(node, enabled?);
    /**
     * Returns trigger from the cache
     */
    private getTriggerById(id);
    private cacheTriger(trigger);
    /**
     * Wrap trigger node into a trigger wrapper class.
     */
    private triggerify(triggerNode);
    private markAsTrigger(triggerNode);
    private wrapWithFunctions(trigger);
    private wrapWithEventListener(trigger);
}
export declare const gwReflection: GwReflection;
