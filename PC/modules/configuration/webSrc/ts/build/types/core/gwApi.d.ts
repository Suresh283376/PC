import { GwMap } from "../types/gwTypes";
import { ErrorCallback, SuccessCallback } from "./util/gwAjax";
export declare class GwApi {
    /**
     * Add an error handler that will be called if there is an error when the client makes an AJAX call to
     * the server (the majority of UI interactions cause AJAX calls). The error handler will be given three
     * arguments: the XMLHttpRequest object, an error type string and an optional HTTP error string.
     *
     * The handler should return true if it has handled the error, in which case any further error handling
     * is aborted. If it returns any other result, or throws an exception, normal error handling will continue.
     *
     * The request object can be used to examine the status code and response data. It is actually a jQuery
     * jqXHR, see the jQuery documentation for details.
     *
     * The error type string will be one of null, "timeout", "error", "abort", "parsererror" or
     * "unexpected_response". These are mainly the standard jQuery strings but "unexpected_response" is
     * Guidewire specific. It is used if the request succeeded but returned content that does not look
     * like a normal Guidewire response. This can happen, for example, if a customer uses a proxy layer
     * between the client and server, and that layer sometimes sends its own response. Note that in the
     * case of a redirect the browser will automatically redirect the AJAX request, so any redirection
     * will have already happened by the time the error handler is called.
     *
     * The HTTP error string, if present, will be the error string returned by the server when it returned
     * a non 2xx response code.
     *
     * Adding the same handler multiple times has no effect, the handler will only be added once
     *
     * @param errorHandler a that takes a request, error type and optional HTTP error string and
     *   returns a boolean
     *
     * @return the handler; may be useful when adding an anonymous
     */
    addServerErrorHandler(errorHandler: ErrorCallback): ErrorCallback;
    /**
     * Remove a previously added server error handler. The argument should be a handler previously
     * given as an argument to addServerErrorHandler. If the handler is not a, or is a
     * that was never added or has already been removed, then this method has no effect.
     */
    removeServerErrorHandler(errorHandler: ErrorCallback): void;
    /**
     * For use by a template panel, to call the panel's server side action handler with the given JSON
     * object as its argument. This will cause a full UI refresh.
     */
    submitTemplateAction(templatePanelId: string, json: GwMap): void;
    /**
     * For use by a template panel, to call the panel's server side update handler with the given JSON
     * object as its argument. This will not block or refresh the UI, and the success
     * will be called with the result of the update handler. The optional error handler will be called
     * if the call to the server fails for any reason. The error handler should be used to do any template
     * specific clean up, but does not need to display any message; the normal server error handler will
     * be called once it returns.
     */
    updateTemplate(templatePanelId: string, json: GwMap, success: SuccessCallback, error: ErrorCallback): void;
    /**
     * The following methods are typically invoked by content within an PCF TemplatePanel, which
     * automatically converts a PCF element reference to its client side id for the JavaScript call.
     * For example,
     *
     *   <TemplatePanel>
     *     <TemplatePanelContents>
     *       <ReferencedWidget widget="colorCode"/>
     *       <![CDATA[
     *         <script>
     *           selectColor(color) {
       *             gw.api.Util.setValue('${colorCode}', color);
       *           }
     *         </script>
     *       ...
     *       ]]>
     *     </TemplatePanelContents>
     *   </TemplatePanel>
     */
    Util: GwMap;
}
export declare const gwApi: GwApi;
