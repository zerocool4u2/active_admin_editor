//= require wysihtml
//= require wysihtml-toolbar
//= require active_admin/editor/config
//= require active_admin/editor/editor

;(function(window, $) {
  $(function() { $('.html_editor').editor(window.AA.editor_config) })
})(window, jQuery)
