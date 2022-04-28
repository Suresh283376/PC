package gw.rating.startup

@Export
public final class RatebookPrimer {
  /**
   * This function is invoked during PolicyCenter startup.
   * To disable ratebook preloading, comment out the contents of this function.
   * Removing this function will result in PolicyCenter not being able to start.
   */
   public static function prime() {
     RTMLoadActions.primeForAllRateBooks()
   }
}
