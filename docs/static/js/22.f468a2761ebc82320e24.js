webpackJsonp([22],{"+kw2":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{dialogData:{id:0,is_Enable:1,is_Remove:0},queryData:{},moduleName:"syslog",pIndex:1,pSize:10,totalNum:0,loadingdata:!1,tableData:[],userList:[],dialogShow:!1,dialogTitle:"",delVisible:!1}},created:function(){this.initData()},mounted:function(){this.getPageData()},methods:{initData:function(){var e=this;this.$ajax.get("userInfo/findAll").then(function(t){e.userList=t.data})},cleanData:function(){this.queryData={}},handleSizeChange:function(e){console.log("每页 "+e+" 条"),this.pSize=e,this.getPageData()},handleCurrentChange:function(e){console.log("当前页: "+e),this.pIndex=e,this.getPageData()},tableRowClassName:function(e){var t=e.row;e.rowIndex;return 0==t.is_Enable?"warning-row":""},getPageData:function(){var e=this,t=this.global.getcondition(this.queryData),a=this.moduleName+"/findAll?pIndex="+this.pIndex+"&pSize="+this.pSize+t;this.loadingdata=!0,this.$ajax.get(a).then(function(t){e.loadingdata=!1,e.tableData=t.data,e.totalNum=t.totalNum},function(t){e.loadingdata=!1})}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-row",[a("el-col",{attrs:{span:20}},[a("el-row",{staticStyle:{"margin-bottom":"6px",padding:"0 60px"}},[a("el-select",{staticClass:"inputwinth150",attrs:{placeholder:"请选择日志类型",size:"mini",maxlength:20},model:{value:e.queryData.logType,callback:function(t){e.$set(e.queryData,"logType",t)},expression:"queryData.logType"}},e._l(e.global.logtype,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}),1)],1),e._v(" "),a("el-row")],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-button",{attrs:{size:"mini",icon:"fa fa-eraser"},on:{click:e.cleanData}},[e._v(" 清 空")]),e._v(" "),a("el-button",{attrs:{size:"mini",icon:"el-icon-search"},on:{click:e.getPageData}},[e._v("查 询")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingdata,expression:"loadingdata"}],attrs:{data:e.tableData,"row-class-name":e.tableRowClassName,size:"mini","element-loading-text":"正在加载中...",border:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{label:"日志类型",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{innerHTML:e._s(e.global.getCodeByName(e.global.logtype,t.row.logType))}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"logLevel",label:"日志级别",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"logContent",label:"日志内容"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建人",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{innerHTML:e._s(e.global.getCodeByName(e.userList,t.row.createId))}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{innerHTML:e._s(e.$moment(t.row.createTime).format("YYYY-MM-DD HH:mm:ss"))}})]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pIndex,"page-sizes":[10,20,50,100],"page-size":e.pSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]},o=a("VU/8")(n,l,!1,null,null,null);t.default=o.exports}});
//# sourceMappingURL=22.f468a2761ebc82320e24.js.map