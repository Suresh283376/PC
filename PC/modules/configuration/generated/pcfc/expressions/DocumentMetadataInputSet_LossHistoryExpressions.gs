package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/DocumentMetadataInputSet.LossHistory.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentMetadataInputSet_LossHistoryExpressions {
  @javax.annotation.Generated("config/web/pcf/document/DocumentMetadataInputSet.LossHistory.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentMetadataInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NameLink) at DocumentMetadataInputSet.LossHistory.pcf: line 72, column 83
    function action_27 () : void {
      document.downloadContent()
    }
    
    // 'available' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 197, column 57
    function available_111 () : java.lang.Boolean {
      return documentMetadataPCHelper.LevelEnabled
    }
    
    // 'available' attribute on TypeKeyInput (id=Type_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 252, column 41
    function available_152 () : java.lang.Boolean {
      return documentMetadataPCHelper.TypeEnabled
    }
    
    // 'available' attribute on Link (id=NameLink) at DocumentMetadataInputSet.LossHistory.pcf: line 72, column 83
    function available_26 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(document, documentActionsEnabled)
    }
    
    // 'available' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 36, column 60
    function available_3 () : java.lang.Boolean {
      return documentMetadataPCHelper.AllowFieldsSubset
    }
    
    // 'available' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 110, column 37
    function available_47 () : java.lang.Boolean {
      return documentMetadataPCHelper.MimeTypeEnabled
    }
    
    // 'value' attribute on TextInput (id=Recipient_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 171, column 51
    function defaultSetter_103 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Recipient = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=statusEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 205, column 60
    function defaultSetter_125 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.StatusEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 216, column 47
    function defaultSetter_132 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Status = (__VALUE_TO_SET as typekey.DocumentStatusType)
    }
    
    // 'value' attribute on CheckBoxInput (id=securityTypeEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 224, column 60
    function defaultSetter_139 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.SecurityTypeEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityType_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 235, column 49
    function defaultSetter_146 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.SecurityType = (__VALUE_TO_SET as typekey.DocumentSecurityType)
    }
    
    // 'value' attribute on CheckBoxInput (id=nameEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 50, column 60
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.DocumentNameEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=DocumentName_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 60, column 46
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=descriptionEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 81, column 60
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.DescriptionEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 91, column 53
    function defaultSetter_41 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 118, column 118
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.LanguageEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 36, column 60
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.AllFieldsEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 130, column 65
    function defaultSetter_68 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on CheckBoxInput (id=authorEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 143, column 60
    function defaultSetter_82 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.AuthorEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 153, column 48
    function defaultSetter_89 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Author = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=recipientEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 161, column 60
    function defaultSetter_96 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.RecipientEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'editable' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 130, column 65
    function editable_65 () : java.lang.Boolean {
      return documentMetadataPCHelper.Language == null or not fromTemplate
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataInputSet.LossHistory.pcf: line 17, column 104
    function initialValue_0 () : gw.api.web.document.DocumentMetadataPCHelper {
      return documentDetailsApplicationHelper as gw.api.web.document.DocumentMetadataPCHelper
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataInputSet.LossHistory.pcf: line 21, column 24
    function initialValue_1 () : Document {
      return documentMetadataPCHelper.Document
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataInputSet.LossHistory.pcf: line 28, column 23
    function initialValue_2 () : Boolean {
      return documentsActionsHelper.DocumentContentServerAvailable
    }
    
    // 'label' attribute on Link (id=NameLink) at DocumentMetadataInputSet.LossHistory.pcf: line 72, column 83
    function label_28 () : java.lang.Object {
      return documentMetadataPCHelper.Name
    }
    
    // 'optionLabel' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 197, column 57
    function optionLabel_115 (VALUE :  gw.api.domain.linkedobject.LinkedObjectContainer) : java.lang.String {
      return Note.getLevelDisplayString(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 110, column 37
    function optionLabel_50 (VALUE :  java.lang.String) : java.lang.String {
      return gw.document.DocumentsUtilBase.getMimeTypeDescription(VALUE)
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at DocumentMetadataInputSet.LossHistory.pcf: line 72, column 83
    function tooltip_29 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(document)
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 197, column 57
    function valueRange_116 () : java.lang.Object {
      return documentMetadataPCHelper.GenerateLevels
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 110, column 37
    function valueRange_51 () : java.lang.Object {
      return gw.document.DocumentsUtilBase.getMimeTypes()
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 130, column 65
    function valueRange_70 () : java.lang.Object {
      return LanguageType.getTypeKeys( false )
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 36, column 60
    function valueRoot_7 () : java.lang.Object {
      return documentMetadataPCHelper
    }
    
    // 'value' attribute on TextInput (id=Recipient_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 171, column 51
    function value_102 () : java.lang.String {
      return documentMetadataPCHelper.Recipient
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 197, column 57
    function value_113 () : gw.api.domain.linkedobject.LinkedObjectContainer {
      return documentMetadataPCHelper.Level
    }
    
    // 'value' attribute on CheckBoxInput (id=statusEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 205, column 60
    function value_124 () : java.lang.Boolean {
      return documentMetadataPCHelper.StatusEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 216, column 47
    function value_131 () : typekey.DocumentStatusType {
      return documentMetadataPCHelper.Status
    }
    
    // 'value' attribute on CheckBoxInput (id=securityTypeEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 224, column 60
    function value_138 () : java.lang.Boolean {
      return documentMetadataPCHelper.SecurityTypeEnabled
    }
    
    // 'value' attribute on CheckBoxInput (id=nameEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 50, column 60
    function value_14 () : java.lang.Boolean {
      return documentMetadataPCHelper.DocumentNameEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityType_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 235, column 49
    function value_145 () : typekey.DocumentSecurityType {
      return documentMetadataPCHelper.SecurityType
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 252, column 41
    function value_153 () : typekey.DocumentType {
      return documentMetadataPCHelper.Type
    }
    
    // 'value' attribute on TextInput (id=DocumentName_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 60, column 46
    function value_21 () : java.lang.String {
      return documentMetadataPCHelper.Name
    }
    
    // 'value' attribute on CheckBoxInput (id=descriptionEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 81, column 60
    function value_33 () : java.lang.Boolean {
      return documentMetadataPCHelper.DescriptionEnabled
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 91, column 53
    function value_40 () : java.lang.String {
      return documentMetadataPCHelper.Description
    }
    
    // 'value' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 110, column 37
    function value_48 () : java.lang.String {
      return documentMetadataPCHelper.MimeType
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 36, column 60
    function value_5 () : java.lang.Boolean {
      return documentMetadataPCHelper.AllFieldsEnabled
    }
    
    // 'value' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 118, column 118
    function value_58 () : java.lang.Boolean {
      return documentMetadataPCHelper.LanguageEnabled
    }
    
    // 'value' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 130, column 65
    function value_67 () : typekey.LanguageType {
      return documentMetadataPCHelper.Language
    }
    
    // 'value' attribute on CheckBoxInput (id=authorEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 143, column 60
    function value_81 () : java.lang.Boolean {
      return documentMetadataPCHelper.AuthorEnabled
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 153, column 48
    function value_88 () : java.lang.String {
      return documentMetadataPCHelper.Author
    }
    
    // 'value' attribute on CheckBoxInput (id=recipientEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 161, column 60
    function value_95 () : java.lang.Boolean {
      return documentMetadataPCHelper.RecipientEnabled
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 197, column 57
    function verifyValueRangeIsAllowedType_117 ($$arg :  gw.api.domain.linkedobject.LinkedObjectContainer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 197, column 57
    function verifyValueRangeIsAllowedType_117 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 110, column 37
    function verifyValueRangeIsAllowedType_52 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 110, column 37
    function verifyValueRangeIsAllowedType_52 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 130, column 65
    function verifyValueRangeIsAllowedType_71 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 130, column 65
    function verifyValueRangeIsAllowedType_71 ($$arg :  typekey.LanguageType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 197, column 57
    function verifyValueRange_118 () : void {
      var __valueRangeArg = documentMetadataPCHelper.GenerateLevels
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_117(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 110, column 37
    function verifyValueRange_53 () : void {
      var __valueRangeArg = gw.document.DocumentsUtilBase.getMimeTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_52(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 130, column 65
    function verifyValueRange_72 () : void {
      var __valueRangeArg = LanguageType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_71(__valueRangeArg)
    }
    
    // 'visible' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 197, column 57
    function visible_112 () : java.lang.Boolean {
      return documentMetadataPCHelper.LevelsVisible
    }
    
    // 'visible' attribute on ContentInput (id=DocumentLink) at DocumentMetadataInputSet.LossHistory.pcf: line 64, column 69
    function visible_30 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode and document != null
    }
    
    // 'visible' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 118, column 118
    function visible_57 () : java.lang.Boolean {
      return documentMetadataPCHelper.AllowFieldsSubset && LanguageType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.LossHistory.pcf: line 130, column 65
    function visible_66 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    property get document () : Document {
      return getVariableValue("document", 0) as Document
    }
    
    property set document ($arg :  Document) {
      setVariableValue("document", 0, $arg)
    }
    
    property get documentActionsEnabled () : Boolean {
      return getVariableValue("documentActionsEnabled", 0) as Boolean
    }
    
    property set documentActionsEnabled ($arg :  Boolean) {
      setVariableValue("documentActionsEnabled", 0, $arg)
    }
    
    property get documentDetailsApplicationHelper () : gw.document.DocumentDetailsApplicationHelper {
      return getRequireValue("documentDetailsApplicationHelper", 0) as gw.document.DocumentDetailsApplicationHelper
    }
    
    property set documentDetailsApplicationHelper ($arg :  gw.document.DocumentDetailsApplicationHelper) {
      setRequireValue("documentDetailsApplicationHelper", 0, $arg)
    }
    
    property get documentMetadataPCHelper () : gw.api.web.document.DocumentMetadataPCHelper {
      return getVariableValue("documentMetadataPCHelper", 0) as gw.api.web.document.DocumentMetadataPCHelper
    }
    
    property set documentMetadataPCHelper ($arg :  gw.api.web.document.DocumentMetadataPCHelper) {
      setVariableValue("documentMetadataPCHelper", 0, $arg)
    }
    
    property get documentsActionsHelper () : gw.document.DocumentsActionsUIHelper {
      return getVariableValue("documentsActionsHelper", 0) as gw.document.DocumentsActionsUIHelper
    }
    
    property set documentsActionsHelper ($arg :  gw.document.DocumentsActionsUIHelper) {
      setVariableValue("documentsActionsHelper", 0, $arg)
    }
    
    property get fromTemplate () : boolean {
      return getRequireValue("fromTemplate", 0) as java.lang.Boolean
    }
    
    property set fromTemplate ($arg :  boolean) {
      setRequireValue("fromTemplate", 0, $arg)
    }
    
    
  }
  
  
}