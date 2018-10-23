webpackJsonp([17],{J6T5:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:a.dialogTitle,visible:a.visible},on:{"update:visible":function(e){a.visible=e},close:function(e){a.closeDialog(!1)}}},[t("el-form",{attrs:{size:"mini",inline:!0}},[t("el-form-item",{attrs:{label:""}},[t("el-input",{staticClass:"inputwinth192",attrs:{placeholder:"用户名",maxlength:60},model:{value:a.dialogData.code,callback:function(e){a.$set(a.dialogData,"code",e)},expression:"dialogData.code"}},[t("template",{slot:"prepend"},[a._v("用户名")])],2)],1),a._v(" "),t("el-form-item",{attrs:{label:""}},[t("el-input",{staticClass:"inputwinth192",attrs:{placeholder:"真实姓名",maxlength:60},model:{value:a.dialogData.name,callback:function(e){a.$set(a.dialogData,"name",e)},expression:"dialogData.name"}},[t("template",{slot:"prepend"},[a._v("真实姓名")])],2)],1),a._v(" "),t("el-form-item",{attrs:{label:"性别","label-width":"80px"}},[t("el-radio",{attrs:{label:1},model:{value:a.dialogData.is_Male,callback:function(e){a.$set(a.dialogData,"is_Male",e)},expression:"dialogData.is_Male"}},[a._v("男")]),a._v(" "),t("el-radio",{attrs:{label:0},model:{value:a.dialogData.is_Male,callback:function(e){a.$set(a.dialogData,"is_Male",e)},expression:"dialogData.is_Male"}},[a._v("女")])],1),a._v(" "),t("el-form-item",{attrs:{label:""}},[t("el-input",{staticClass:"inputwinth192",attrs:{placeholder:"手机号码",maxlength:20},model:{value:a.dialogData.phoneNum,callback:function(e){a.$set(a.dialogData,"phoneNum",e)},expression:"dialogData.phoneNum"}},[t("template",{slot:"prepend"},[a._v("手机号码")])],2)],1),a._v(" "),t("el-form-item",{attrs:{label:""}},[t("el-input",{staticClass:"inputwinth192",attrs:{placeholder:"排序",maxlength:20},model:{value:a.dialogData.sortNum,callback:function(e){a.$set(a.dialogData,"sortNum",e)},expression:"dialogData.sortNum"}},[t("template",{slot:"prepend"},[a._v("排序")])],2)],1),a._v(" "),t("el-form-item",{attrs:{label:"状态","label-width":"80px"}},[t("el-radio",{attrs:{label:1},model:{value:a.dialogData.is_Enable,callback:function(e){a.$set(a.dialogData,"is_Enable",e)},expression:"dialogData.is_Enable"}},[a._v("启用")]),a._v(" "),t("el-radio",{attrs:{label:0},model:{value:a.dialogData.is_Enable,callback:function(e){a.$set(a.dialogData,"is_Enable",e)},expression:"dialogData.is_Enable"}},[a._v("弃用")])],1),a._v(" "),t("el-form-item",{attrs:{label:"角色","label-width":"41.6px"}},[t("el-select",{staticClass:"inputwinth150",attrs:{placeholder:"角色",maxlength:20},model:{value:a.dialogData.roleId,callback:function(e){a.$set(a.dialogData,"roleId",e)},expression:"dialogData.roleId"}},a._l(a.roleList,function(a){return t("el-option",{key:a.id,attrs:{label:a.name,value:a.id}})}))],1),a._v(" "),t("el-form-item",{attrs:{label:"组织","label-width":"61.6px"}},[t("el-cascader",{staticClass:"inputwinth295",attrs:{options:a.organizeTree,"expand-trigger":"hover",maxlength:20},model:{value:a.dialogData.organizeList,callback:function(e){a.$set(a.dialogData,"organizeList",e)},expression:"dialogData.organizeList"}})],1)],1),a._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini",icon:"fa fa-file-o"},on:{click:function(e){a.closeDialog(!1)}}},[a._v(" 取 消")]),a._v(" "),t("el-button",{attrs:{size:"mini",icon:"fa fa-file-text-o",type:"primary"},on:{click:a.saveDialog}},[a._v(" 保 存")])],1)],1)},staticRenderFns:[]},l=t("VU/8")({data:function(){return{moduleName:"userInfo",visible:this.dialogShow,roleList:[],organizeList:[],organizeTree:[]}},props:{dialogTitle:"",dialogShow:{Boolean:!1},dialogData:{id:0,code:"",name:"",organizeId:"",organizeIds:"",organizeList:[],is_Enable:1,is_Hide:0}},created:function(){this.initData()},methods:{initData:function(){var a=this;this.$ajax.get(this.moduleName+"/findResource").then(function(e){a.roleList=e.data.roleList,a.organizeList=e.data.organizeList,a.organizeTree=e.data.organizeTree})},closeDialog:function(a){this.$emit("update:dialogShow",a)},saveDialog:function(){var a=this;this.dialogData.organizeId=this.dialogData.organizeList[this.dialogData.organizeList.length-1],this.dialogData.organizeIds=this.dialogData.organizeList.join();var e=this.moduleName+(this.dialogData.id>0?"/updateOne":"/insertOne");this.$ajax.post(e,this.dialogData).then(function(e){a.$emit("update:dialogData",e.data),a.$emit("update:dialogShow",!1),a.$emit("RefreshData")})}},watch:{dialogShow:function(){this.visible=this.dialogShow}}},i,!1,null,null,null);e.default=l.exports}});
//# sourceMappingURL=17.5127eab07f67216c6b9d.js.map