webpackJsonp([25],{AtPx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-col",{attrs:{span:5,offset:1}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("功能信息")])]),e._v(" "),a("el-tree",{ref:"funcTree",attrs:{data:e.funcList,"check-strictly":!0,"default-expand-all":"",props:e.defaultProps,"node-key":"id","show-checkbox":""}})],1)],1),e._v(" "),a("el-col",{attrs:{span:5,offset:1}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("角色信息")])]),e._v(" "),a("el-select",{staticClass:"inputwinth192",attrs:{placeholder:"请选择角色",maxlength:20},on:{change:e.selectOnTree},model:{value:e.roleId,callback:function(t){e.roleId=t},expression:"roleId"}},e._l(e.roleList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1),e._v(" "),a("el-button",{staticStyle:{"padding-left":"6px","padding-right":"6px"},attrs:{icon:"fa fa-file-text-o",size:"small",type:"primary"},on:{click:e.onSubmit}},[e._v("\n        保 存\n      ")])],1)],1)],1)},staticRenderFns:[]},l=a("VU/8")({data:function(){return{defaultProps:{children:"children",label:"name"},moduleName:"appMenu",loadingdata:!1,roleId:"",roleList:[],funcList:[]}},created:function(){this.getInitData()},mounted:function(){},methods:{getInitData:function(){var e=this;this.loadingdata=!0,this.$ajax.get(this.moduleName+"/getRoleApp").then(function(t){e.loadingdata=!1,e.roleList=t.data.roleList,e.funcList=t.data.funcList,e.roleId=e.roleList[0].id,e.selectOnTree(e.roleId)},function(t){e.loadingdata=!1})},selectOnTree:function(e){var t=this,a="/findOne?id="+e;this.loadingdata=!0,this.$refs.funcTree.setCheckedKeys([]),this.$ajax.get(this.moduleName+a).then(function(e){t.loadingdata=!1,t.$refs.funcTree.setCheckedKeys(e.data)},function(e){t.loadingdata=!1})},onSubmit:function(){var e=this,t="/saveData?roleId="+this.roleId;this.loadingdata=!0,this.$ajax.post(this.moduleName+t,this.$refs.funcTree.getCheckedKeys()).then(function(t){e.loadingdata=!1},function(t){e.loadingdata=!1})}}},n,!1,null,null,null);t.default=l.exports}});
//# sourceMappingURL=25.f59cce0c83b93755ea5f.js.map