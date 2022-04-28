import { GwMap } from "../../types/gwTypes";
import { GwOrderDependantInitializableSystem } from "../util/GwOrderDependantInitializableSystem";
export declare enum GwServerEventEnum {
    STARTED_EDITING = "STARTED_EDITING",
    CANCELED_EDITING = "CANCELED_EDITING",
    COMMITTED = "COMMITTED",
    FAILED_COMMITTING = "FAILED_COMMITTING",
}
export declare class GwServerEvents extends GwOrderDependantInitializableSystem {
    getSystemName(): string;
    orderSpecificInit(): void;
    processServerEvents(): void;
    handleEvent(event: GwServerEventEnum, args: GwMap): void;
    onStartEditing(args: GwMap): void;
}
export declare const gwServerEvents: GwServerEvents;
