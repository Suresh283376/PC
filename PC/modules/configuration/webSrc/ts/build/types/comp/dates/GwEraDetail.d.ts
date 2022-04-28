import { GwMap } from "../../types/gwTypes";
export declare class GwEraDetail {
    readonly name: string;
    readonly order: number;
    readonly delta: number;
    readonly start: Date;
    readonly startYear: number;
    readonly startMonth: number;
    readonly startDay: number;
    readonly total: number;
    constructor(era: GwMap);
}
