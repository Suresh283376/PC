package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.Generated("config/web/pcf/document/DocumentMetadataInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DocumentMetadataInputSet_defaultExpressions {
  @javax.annotation.Generated("config/web/pcf/document/DocumentMetadataInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DocumentMetadataInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on Link (id=NameLink) at DocumentMetadataInputSet.default.pcf: line 73, column 83
    function action_30 () : void {
      document.downloadContent()
    }
    
    // 'available' attribute on Link (id=NameLink) at DocumentMetadataInputSet.default.pcf: line 73, column 83
    function available_29 () : java.lang.Boolean {
      return documentsActionsHelper.isViewDocumentContentAvailable(document, documentActionsEnabled)
    }
    
    // 'available' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 36, column 60
    function available_3 () : java.lang.Boolean {
      return documentMetadataPCHelper.AllowFieldsSubset
    }
    
    // 'value' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 167, column 118
    function defaultSetter_103 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.LanguageEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 179, column 65
    function defaultSetter_112 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Language = (__VALUE_TO_SET as typekey.LanguageType)
    }
    
    // 'value' attribute on CheckBoxInput (id=relatedToEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 187, column 60
    function defaultSetter_124 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.LevelEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 202, column 57
    function defaultSetter_132 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Level = (__VALUE_TO_SET as gw.api.domain.linkedobject.LinkedObjectContainer)
    }
    
    // 'value' attribute on CheckBoxInput (id=statusEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 210, column 60
    function defaultSetter_144 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.StatusEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=nameEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 50, column 60
    function defaultSetter_15 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.DocumentNameEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at DocumentMetadataInputSet.default.pcf: line 221, column 47
    function defaultSetter_151 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Status = (__VALUE_TO_SET as typekey.DocumentStatusType)
    }
    
    // 'value' attribute on CheckBoxInput (id=securityTypeEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 229, column 60
    function defaultSetter_158 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.SecurityTypeEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityType_Input) at DocumentMetadataInputSet.default.pcf: line 240, column 49
    function defaultSetter_165 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.SecurityType = (__VALUE_TO_SET as typekey.DocumentSecurityType)
    }
    
    // 'value' attribute on CheckBoxInput (id=typeEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 248, column 60
    function defaultSetter_172 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.TypeEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at DocumentMetadataInputSet.default.pcf: line 259, column 41
    function defaultSetter_179 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Type = (__VALUE_TO_SET as typekey.DocumentType)
    }
    
    // 'value' attribute on CheckBoxInput (id=sectionEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 267, column 60
    function defaultSetter_186 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.SectionEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TypeKeyInput (id=Section_Input) at DocumentMetadataInputSet.default.pcf: line 278, column 68
    function defaultSetter_194 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Section = (__VALUE_TO_SET as typekey.DocumentSection)
    }
    
    // 'value' attribute on CheckBoxInput (id=obsoleteEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 286, column 60
    function defaultSetter_202 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.ObsoleteEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on BooleanRadioInput (id=Obsolete_Input) at DocumentMetadataInputSet.default.pcf: line 296, column 50
    function defaultSetter_209 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Obsolete = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=DocumentName_Input) at DocumentMetadataInputSet.default.pcf: line 61, column 45
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Name = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=descriptionEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 82, column 60
    function defaultSetter_37 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.DescriptionEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at DocumentMetadataInputSet.default.pcf: line 92, column 53
    function defaultSetter_44 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=mimeTypeEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 100, column 60
    function defaultSetter_51 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.MimeTypeEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function defaultSetter_59 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.MimeType = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 36, column 60
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.AllFieldsEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on CheckBoxInput (id=authorEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 126, column 60
    function defaultSetter_73 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.AuthorEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentMetadataInputSet.default.pcf: line 136, column 48
    function defaultSetter_80 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Author = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CheckBoxInput (id=recipientEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 144, column 60
    function defaultSetter_87 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.RecipientEnabled = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextInput (id=Recipient_Input) at DocumentMetadataInputSet.default.pcf: line 154, column 51
    function defaultSetter_94 (__VALUE_TO_SET :  java.lang.Object) : void {
      documentMetadataPCHelper.Recipient = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'editable' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 179, column 65
    function editable_109 () : java.lang.Boolean {
      return documentMetadataPCHelper.Language == null or not fromTemplate
    }
    
    // 'editable' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function editable_57 () : java.lang.Boolean {
      return !fromTemplate
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataInputSet.default.pcf: line 17, column 104
    function initialValue_0 () : gw.api.web.document.DocumentMetadataPCHelper {
      return documentDetailsApplicationHelper as gw.api.web.document.DocumentMetadataPCHelper
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataInputSet.default.pcf: line 21, column 24
    function initialValue_1 () : Document {
      return documentMetadataPCHelper.Document
    }
    
    // 'initialValue' attribute on Variable at DocumentMetadataInputSet.default.pcf: line 28, column 23
    function initialValue_2 () : Boolean {
      return documentsActionsHelper.DocumentContentServerAvailable
    }
    
    // 'label' attribute on Link (id=NameLink) at DocumentMetadataInputSet.default.pcf: line 73, column 83
    function label_31 () : java.lang.Object {
      return documentMetadataPCHelper.Name
    }
    
    // 'optionLabel' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 202, column 57
    function optionLabel_134 (VALUE :  gw.api.domain.linkedobject.LinkedObjectContainer) : java.lang.String {
      return Note.getLevelDisplayString(VALUE)
    }
    
    // 'optionLabel' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function optionLabel_61 (VALUE :  java.lang.String) : java.lang.String {
      return gw.document.DocumentsUtilBase.getMimeTypeDescription(VALUE)
    }
    
    // 'required' attribute on TextInput (id=DocumentName_Input) at DocumentMetadataInputSet.default.pcf: line 61, column 45
    function required_22 () : java.lang.Boolean {
      return !documentMetadataPCHelper.AllowFieldsSubset
    }
    
    // 'tooltip' attribute on Link (id=NameLink) at DocumentMetadataInputSet.default.pcf: line 73, column 83
    function tooltip_32 () : java.lang.String {
      return documentsActionsHelper.getViewDocumentContentTooltip(document)
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 179, column 65
    function valueRange_114 () : java.lang.Object {
      return LanguageType.getTypeKeys( false )
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 202, column 57
    function valueRange_135 () : java.lang.Object {
      return documentMetadataPCHelper.GenerateLevels
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function valueRange_62 () : java.lang.Object {
      return gw.document.DocumentsUtilBase.getMimeTypes()
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 36, column 60
    function valueRoot_7 () : java.lang.Object {
      return documentMetadataPCHelper
    }
    
    // 'value' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 167, column 118
    function value_102 () : java.lang.Boolean {
      return documentMetadataPCHelper.LanguageEnabled
    }
    
    // 'value' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 179, column 65
    function value_111 () : typekey.LanguageType {
      return documentMetadataPCHelper.Language
    }
    
    // 'value' attribute on CheckBoxInput (id=relatedToEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 187, column 60
    function value_123 () : java.lang.Boolean {
      return documentMetadataPCHelper.LevelEnabled
    }
    
    // 'value' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 202, column 57
    function value_131 () : gw.api.domain.linkedobject.LinkedObjectContainer {
      return documentMetadataPCHelper.Level
    }
    
    // 'value' attribute on CheckBoxInput (id=nameEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 50, column 60
    function value_14 () : java.lang.Boolean {
      return documentMetadataPCHelper.DocumentNameEnabled
    }
    
    // 'value' attribute on CheckBoxInput (id=statusEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 210, column 60
    function value_143 () : java.lang.Boolean {
      return documentMetadataPCHelper.StatusEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=Status_Input) at DocumentMetadataInputSet.default.pcf: line 221, column 47
    function value_150 () : typekey.DocumentStatusType {
      return documentMetadataPCHelper.Status
    }
    
    // 'value' attribute on CheckBoxInput (id=securityTypeEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 229, column 60
    function value_157 () : java.lang.Boolean {
      return documentMetadataPCHelper.SecurityTypeEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=SecurityType_Input) at DocumentMetadataInputSet.default.pcf: line 240, column 49
    function value_164 () : typekey.DocumentSecurityType {
      return documentMetadataPCHelper.SecurityType
    }
    
    // 'value' attribute on CheckBoxInput (id=typeEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 248, column 60
    function value_171 () : java.lang.Boolean {
      return documentMetadataPCHelper.TypeEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=Type_Input) at DocumentMetadataInputSet.default.pcf: line 259, column 41
    function value_178 () : typekey.DocumentType {
      return documentMetadataPCHelper.Type
    }
    
    // 'value' attribute on CheckBoxInput (id=sectionEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 267, column 60
    function value_185 () : java.lang.Boolean {
      return documentMetadataPCHelper.SectionEnabled
    }
    
    // 'value' attribute on TypeKeyInput (id=Section_Input) at DocumentMetadataInputSet.default.pcf: line 278, column 68
    function value_193 () : typekey.DocumentSection {
      return documentMetadataPCHelper.Section
    }
    
    // 'value' attribute on CheckBoxInput (id=obsoleteEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 286, column 60
    function value_201 () : java.lang.Boolean {
      return documentMetadataPCHelper.ObsoleteEnabled
    }
    
    // 'value' attribute on BooleanRadioInput (id=Obsolete_Input) at DocumentMetadataInputSet.default.pcf: line 296, column 50
    function value_208 () : java.lang.Boolean {
      return documentMetadataPCHelper.Obsolete
    }
    
    // 'value' attribute on TextInput (id=DocumentName_Input) at DocumentMetadataInputSet.default.pcf: line 61, column 45
    function value_23 () : java.lang.String {
      return documentMetadataPCHelper.Name
    }
    
    // 'value' attribute on CheckBoxInput (id=descriptionEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 82, column 60
    function value_36 () : java.lang.Boolean {
      return documentMetadataPCHelper.DescriptionEnabled
    }
    
    // 'value' attribute on TextInput (id=Description_Input) at DocumentMetadataInputSet.default.pcf: line 92, column 53
    function value_43 () : java.lang.String {
      return documentMetadataPCHelper.Description
    }
    
    // 'value' attribute on CheckBoxInput (id=allEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 36, column 60
    function value_5 () : java.lang.Boolean {
      return documentMetadataPCHelper.AllFieldsEnabled
    }
    
    // 'value' attribute on CheckBoxInput (id=mimeTypeEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 100, column 60
    function value_50 () : java.lang.Boolean {
      return documentMetadataPCHelper.MimeTypeEnabled
    }
    
    // 'value' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function value_58 () : java.lang.String {
      return documentMetadataPCHelper.MimeType
    }
    
    // 'value' attribute on CheckBoxInput (id=authorEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 126, column 60
    function value_72 () : java.lang.Boolean {
      return documentMetadataPCHelper.AuthorEnabled
    }
    
    // 'value' attribute on TextInput (id=Author_Input) at DocumentMetadataInputSet.default.pcf: line 136, column 48
    function value_79 () : java.lang.String {
      return documentMetadataPCHelper.Author
    }
    
    // 'value' attribute on CheckBoxInput (id=recipientEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 144, column 60
    function value_86 () : java.lang.Boolean {
      return documentMetadataPCHelper.RecipientEnabled
    }
    
    // 'value' attribute on TextInput (id=Recipient_Input) at DocumentMetadataInputSet.default.pcf: line 154, column 51
    function value_93 () : java.lang.String {
      return documentMetadataPCHelper.Recipient
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 179, column 65
    function verifyValueRangeIsAllowedType_115 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 179, column 65
    function verifyValueRangeIsAllowedType_115 ($$arg :  typekey.LanguageType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 202, column 57
    function verifyValueRangeIsAllowedType_136 ($$arg :  gw.api.domain.linkedobject.LinkedObjectContainer[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 202, column 57
    function verifyValueRangeIsAllowedType_136 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function verifyValueRangeIsAllowedType_63 ($$arg :  java.lang.String[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function verifyValueRangeIsAllowedType_63 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 179, column 65
    function verifyValueRange_116 () : void {
      var __valueRangeArg = LanguageType.getTypeKeys( false )
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_115(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 202, column 57
    function verifyValueRange_137 () : void {
      var __valueRangeArg = documentMetadataPCHelper.GenerateLevels
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_136(__valueRangeArg)
    }
    
    // 'valueRange' attribute on RangeInput (id=MimeType_Input) at DocumentMetadataInputSet.default.pcf: line 113, column 37
    function verifyValueRange_64 () : void {
      var __valueRangeArg = gw.document.DocumentsUtilBase.getMimeTypes()
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_63(__valueRangeArg)
    }
    
    // 'visible' attribute on CheckBoxInput (id=languageEnabled_Input) at DocumentMetadataInputSet.default.pcf: line 167, column 118
    function visible_101 () : java.lang.Boolean {
      return documentMetadataPCHelper.AllowFieldsSubset && LanguageType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on RangeInput (id=Language_Input) at DocumentMetadataInputSet.default.pcf: line 179, column 65
    function visible_110 () : java.lang.Boolean {
      return LanguageType.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on RangeInput (id=RelatedTo_Input) at DocumentMetadataInputSet.default.pcf: line 202, column 57
    function visible_130 () : java.lang.Boolean {
      return documentMetadataPCHelper.LevelsVisible
    }
    
    // 'visible' attribute on TypeKeyInput (id=Section_Input) at DocumentMetadataInputSet.default.pcf: line 278, column 68
    function visible_192 () : java.lang.Boolean {
      return DocumentSection.getTypeKeys( false ).Count > 1
    }
    
    // 'visible' attribute on TextInput (id=DocumentName_Input) at DocumentMetadataInputSet.default.pcf: line 61, column 45
    function visible_21 () : java.lang.Boolean {
      return CurrentLocation.InEditMode
    }
    
    // 'visible' attribute on ContentInput (id=DocumentLink) at DocumentMetadataInputSet.default.pcf: line 65, column 69
    function visible_33 () : java.lang.Boolean {
      return not CurrentLocation.InEditMode and document != null
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