import { GwMap, GwTypedMap } from "../types/gwTypes";
import { GwRegisteredSystem } from "./util/GwRegisteredSystem";
import { GwInitializableSystem } from "./util/GwInitializableSystem";
import { GwDraggableSystem } from "./util/GwDraggableSystem";
import { GwWebsocketSystem } from "./util/GwWebsocketSystem";
export declare class Gw {
    readonly globals: GwTypedMap<GwRegisteredSystem>;
    private readonly inits;
    readonly draggable: GwTypedMap<GwDraggableSystem>;
    readonly sockets: GwTypedMap<GwWebsocketSystem>;
    browserActions: GwMap;
    displaykeyvalues: GwMap | null;
    api: GwMap | null;
    /**
     * objects passed to this method will appear on the gw.globals object,
     * but more importantly, will be available to inline methods such as data-gw-click="gwMouse.enter".
     * The class GwMouse builds a singleton, registers its system name as gwMouse, and then calls this
     * method passing the singleton as the argument
     *
     * This process is automatically handled by using a typescript class and having it extend GwRegisteredSystem.
     * GwRegisteredSystem constructor will call this method.
     *
     * @param {GwRegisteredSystem} global
     */
    registerGlobalSystem(global: GwRegisteredSystem): void;
    /**
     * This method registers an object to be notified on every page reload, partial or full.
     * It calls "init" on object passed as an argument.
     *
     * This process is automatically handled by the constructor method in GwInitializableSystem
     *
     * This method should NOT be used for the global systems that are ORDER DEPENDANT. These systems should extend
     * GwOrderDependantInitializableSystem, and be manually placed in order in gwApp.getInitializationOrderSpecificSystems
     * @param {GwInitializableSystem} system
     */
    registerInitializableSystem(system: GwInitializableSystem): void;
    registerDraggableSystem(draggable: GwDraggableSystem): void;
    registerWebsocketSystem(socketSystem: GwWebsocketSystem): void;
    initializeNonOrderSpecificSystems(isFullPageReload: boolean, partialReloadReasons: GwMap): void;
}
export declare const gw: Gw;
