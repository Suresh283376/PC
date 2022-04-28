import { GwInitializableSystem } from "./util/GwInitializableSystem";
export declare class GwPageLoadBar extends GwInitializableSystem {
    getSystemName(): string;
    private percent;
    private readonly filling;
    private clearId;
    /**
     * @public
     * Needs to be called on full page reload
     */
    init(): void;
    /**
     * @public
     * Moves the progress bar to a percent filled.
     * @param num: float as percent of 100
     */
    go(num: number): void;
    /**
     * @private
     * @param val
     */
    private startFilling(val);
    /**
     * @private
     */
    private show();
    /**
     * @private
     */
    private hide();
    /**
     * @private
     */
    private clearTimeouts();
    /**
     * @private
     */
    private getInner();
    /**
     * @private
     * @param val
     */
    private setPercent(val);
}
export declare const gwPageLoadBar: GwPageLoadBar;
