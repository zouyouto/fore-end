webpackJsonp([26],{mNx7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={data:function(){return{loading:!0,listfuncInfoDto:[]}},created:function(){var t=JSON.parse(sessionStorage.getItem("zsylocalInfo"));if(t){this.listfuncInfoDto=t.data.functionDtoList;var e=[],i=n("A66B"),o=this.listfuncInfoDto;for(var s in o){o[s].remarks&&e.push({path:o[s].code,component:i(o[s].remarks)});var a=o[s].children;for(var r in a)a[r].remarks&&e.push({path:a[r].code,component:i(a[r].remarks)})}var c=[{path:"/default",component:i("core/home/Default"),children:e}];this.$router.addRoutes(c);var l=this;setTimeout(function(){l.loading=!1},3e3)}},mounted:function(){this.loading=!0},methods:{backUrl:function(){this.$router.go(-1)}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-row",[e("el-col",{attrs:{span:6,offset:9}},[this.loading?this._e():e("img",{attrs:{src:"static/img/404.jpg"}}),this._v(" "),this.loading?e("i",{staticClass:"el-icon-loading",staticStyle:{"font-size":"72px","margin-top":"50px","margin-left":"100px"}}):this._e()]),this._v(" "),e("el-col",{attrs:{span:4}},[e("el-button",{staticStyle:{"margin-top":"60px"},attrs:{title:"返回上一页",icon:"el-icon-back",circle:""},on:{click:this.backUrl}})],1)],1)},staticRenderFns:[]},s=n("VU/8")(i,o,!1,null,null,null);e.default=s.exports}});
//# sourceMappingURL=26.3b409a6e803665c03f99.js.map