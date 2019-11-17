(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2b24"],{"24e1":function(t,e,o){"use strict";o.r(e);var c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"page-clipboard-demo"}},[o("clipboard-directive"),o("clipboard-without-directive")],1)},i=[],n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("vx-card",{attrs:{title:"Using Directive",subtitle:"Use directive on button to copy text.","code-toggler":""}},[o("vs-input",{staticClass:"inline-flex mb-2 mr-2",model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),o("vs-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.text,expression:"text",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}]},[t._v(" Copy! ")]),o("template",{slot:"codeContainer"},[t._v(" <template> <vs-input v-model=\"text\" class=\"inline-flex\" /> <vs-button v-clipboard:copy=\"text\" v-clipboard:success=\"onCopy\" v-clipboard:error=\"onError\"> Copy! </vs-button> </template> <script> export default { data() { return { text: 'Copy Me!', } }, methods: { onCopy() { this.$vs.notify({ title: 'Success!', text: 'Text copied successfully.', color: 'success', iconPack: 'feather', position: 'top-center', icon: 'icon-check-circle' }) }, onError() { this.$vs.notify({ title: 'Failed!', text: 'Error in copying text.', color: 'danger', iconPack: 'feather', position: 'top-center', icon: 'icon-alert-circle' }) }, } } <\/script> ")])],2)},r=[],s={data:function(){return{text:"Copy Me!"}},methods:{onCopy:function(){this.$vs.notify({title:"Success!",text:"Text copied successfully.",color:"success",iconPack:"feather",position:"top-center",icon:"icon-check-circle"})},onError:function(){this.$vs.notify({title:"Failed!",text:"Error in copying text.",color:"danger",iconPack:"feather",position:"top-center",icon:"icon-alert-circle"})}}},l=s,a=o("2877"),p=Object(a["a"])(l,n,r,!1,null,null,null),u=p.exports,d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("vx-card",{attrs:{title:"Without directive",subtitle:"You can copy text without a specific button. Use $copyText to copy text when event got fired.","code-toggler":""}},[o("vs-input",{staticClass:"inline-flex mb-2 mr-2",model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}}),o("vs-button",{on:{click:t.copyText}},[t._v("Copy!")]),o("template",{slot:"codeContainer"},[t._v(" <template> <vs-input v-model=\"text2\" class=\"inline-flex\" /> <vs-button @click=\"copyText\">Copy!</vs-button> </template> <script> export default { data() { return { text2: 'Copy Me Without Directive!', } }, methods: { copyText() { const thisIns = this; this.$copyText(this.text2).then(function() { thisIns.$vs.notify({ title: 'Success!', text: 'Text copied successfully.', color: 'success', iconPack: 'feather', position: 'top-center', icon: 'icon-check-circle' }) }, function() { thisIns.$vs.notify({ title: 'Failed!', text: 'Error in copying text.', color: 'danger', iconPack: 'feather', position: 'top-center', icon: 'icon-alert-circle' }) }) } } } <\/script> ")])],2)},x=[],v={data:function(){return{text2:"Copy Me Without Directive!"}},methods:{copyText:function(){var t=this;this.$copyText(this.text2).then((function(){t.$vs.notify({title:"Success!",text:"Text copied successfully.",color:"success",iconPack:"feather",position:"top-center",icon:"icon-check-circle"})}),(function(){t.$vs.notify({title:"Failed!",text:"Error in copying text.",color:"danger",iconPack:"feather",position:"top-center",icon:"icon-alert-circle"})}))}}},f=v,h=Object(a["a"])(f,d,x,!1,null,null,null),y=h.exports,b={components:{ClipboardDirective:u,ClipboardWithoutDirective:y}},m=b,k=Object(a["a"])(m,c,i,!1,null,null,null);e["default"]=k.exports}}]);
//# sourceMappingURL=chunk-2d0b2b24.b0ebf361.js.map