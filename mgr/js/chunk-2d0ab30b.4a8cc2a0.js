(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab30b"],{"13e8":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-tabs",{attrs:{type:"border-card"}},[i("el-tab-pane",{attrs:{label:"线下支付"}},[i("v-add-top",{attrs:{getData:t.getData}})],1)],1)},s=[],l=(i("7f7f"),i("82aa")),n={name:"capital-flow-warp",components:{vAddTop:l["default"]},data:function(){return{url:"./vuetable.json",cur_page:1,multipleSelection:[],del_list:[],editVisible:!1,delVisible:!1,params:{page:1,pageSize:20,channel:1,sort:"up",book_id:""},tableData:[],total_tickets:"",total_coins:"",total:1}},created:function(){this.getData()},computed:{},methods:{getData:function(t){t&&(this.params.page=1)},formatter:function(t,e){return t.address},filterTag:function(t,e){return e.tag===t},handleAdd:function(t,e){this.editVisible=!0,this.form={}},handleEdit:function(t,e){if(e){this.idx=t;var i=e;this.form={name:i.name,date:i.date,address:i.address}}else this.form={};this.editVisible=!0},handleDelete:function(t,e){this.idx=t,this.delVisible=!0},delAll:function(){this.multipleSelection.length;console.log(this.multipleSelection,"multipleSelection")},handleSelectionChange:function(t){this.multipleSelection=t},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1,this.$message.success("修改第 ".concat(this.idx+1," 行成功"))},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1}}},o=n,d=i("2877"),c=Object(d["a"])(o,a,s,!1,null,null,null);e["default"]=c.exports}}]);