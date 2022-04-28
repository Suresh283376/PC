/// <reference types="jquery" />
import ErrorCallback = JQuery.Ajax.ErrorCallback;
import { GwForcedEvent } from "../core/events/GwForcedEvent";
export declare class GwBreaker {
}
export declare const GW_BREAKER: GwBreaker;
export declare type GwNavigationPredicate = (node: GwDomNode, methodName: GwNavDirection, info: GwMap, event: GwEventType) => boolean;
export declare type GwMap = {
    [key: string]: any;
};
export declare type GwTypedMap<T> = {
    [key: string]: T;
};
export declare type GwDomNode = HTMLDivElement | HTMLSpanElement | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLOptionElement;
export declare type GwInputElement = HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement;
export declare type GwClassIdTagOrNode = string | GwDomNode;
export declare type GwContextNode = GwDomNode | HTMLDocument;
export declare type GwDomNodeList = GwDomNode[] | NodeListOf<Element> | JQuery;
export declare type GwIterable = any[] | string | HTMLCollection | NodeList | JQuery | GwMap;
export declare type GwIterationCallback = (value: any, key: string, collection: GwIterable, mockIndex: number) => GwBreaker | void;
export declare type GwEventType = Event | GwForcedEvent;
export declare type GwAction = (node: GwDomNode, args: GwMap, event?: GwEventType, optCb?: Function) => void;
export declare type GwErrorCallback = ErrorCallback<void>;
export declare const enum GwPanelScope {
    NORTH = "NORTH",
    SOUTH = "SOUTH",
    WEST = "WEST",
    CENTER = "CENTER",
    NULL = "NULL",
}
export declare const enum GwAjaxResponseStatus {
    OK = 0,
    UNEXPECTED_RESPONSE = 1,
    LOGOUT = 2,
    DISPLAYABLE_ERROR = 3,
    FATAL_ERROR = 4,
    TIMEOUT = 5,
}
export declare const enum GwResponseErrorHandleResult {
    DONE = 0,
    UNABLE_TO_PROCESS = 1,
}
export interface GwConfirmTargets {
    getConfirmTargets(node: GwDomNode): GwDomNodeList;
}
export interface GwKeyboardNavigation {
    up(node: GwDomNode, info: GwMap, event: GwEventType): void;
    down(node: GwDomNode, info: GwMap, event: GwEventType): void;
    left(node: GwDomNode, info: GwMap, event: GwEventType): void;
    right(node: GwDomNode, info: GwMap, event: GwEventType): void;
}
export declare const enum GwNavDirection {
    up = 0,
    down = 1,
    left = 2,
    right = 3,
}
