(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4be386d2"],{"82ff":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-tabs",{attrs:{type:"border-card"}},[s("el-tab-pane",{attrs:{label:"短信配置"}},[s("v-add-note",{attrs:{getData:e.getData}})],1),s("el-tab-pane",{attrs:{label:"存储配置"}},[s("v-add-cloud",{attrs:{getData:e.getData}})],1)],1)},i=[],o=(s("7f7f"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"add-warp"},[s("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"缓存时间"}},[s("el-input",{staticClass:"sizeLine",model:{value:e.form.message.cacheTime,callback:function(t){e.$set(e.form.message,"cacheTime",t)},expression:"form.message.cacheTime"}})],1),s("el-form-item",{attrs:{label:"密匙"}},[s("el-input",{staticClass:"sizeLine",model:{value:e.form.message.key,callback:function(t){e.$set(e.form.message,"key",t)},expression:"form.message.key"}})],1),s("el-form-item",{attrs:{label:"id"}},[s("el-input",{staticClass:"sizeLine",model:{value:e.form.message.tpl_id,callback:function(t){e.$set(e.form.message,"tpl_id",t)},expression:"form.message.tpl_id"}})],1),s("el-form-item",{attrs:{label:"地址"}},[s("el-input",{staticClass:"sizeLine",model:{value:e.form.message.url,callback:function(t){e.$set(e.form.message,"url",t)},expression:"form.message.url"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]),s("el-button",[e._v("取消")])],1)],1)],1)}),l=[],r=s("3dda"),n=s("8e44"),c={name:"word",components:{vUpload:r["a"]},props:{getData:{type:Function,default:null}},data:function(){return{form:{message:{}}}},created:function(){this.getDatas()},computed:{},methods:{getDatas:function(){var e=this;Object(n["c"])(this.params,(function(t){200==t.code&&(e.form.message=t.data.message)}))},onSubmit:function(){var e=this;Object(n["e"])(this.form,(function(t){200==t.code&&(e.$message.success("设置成功"),e.getData())}))}}},m=c,f=(s("b4b1"),s("2877")),u=Object(f["a"])(m,o,l,!1,null,"16a48315",null),d=u.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"add-warp"},[s("el-form",{ref:"form",attrs:{model:e.form,"label-width":"150px"}},[s("el-form-item",{attrs:{label:"选择存储方式"}},[s("el-radio-group",{model:{value:e.form.file_store.store_type,callback:function(t){e.$set(e.form.file_store,"store_type",t)},expression:"form.file_store.store_type"}},[s("el-radio",{attrs:{label:"1"}},[e._v("七牛云存储")]),s("el-radio",{attrs:{label:"2"}},[e._v("本地存储")])],1)],1),"1"==e.form.file_store.store_type?s("el-form-item",{attrs:{label:"存储accessKey"}},[s("el-input",{staticClass:"sizeLine",model:{value:e.form.file_store.access_key,callback:function(t){e.$set(e.form.file_store,"access_key",t)},expression:"form.file_store.access_key"}})],1):e._e(),"1"==e.form.file_store.store_type?s("el-form-item",{attrs:{label:"存储secretKey"}},[s("el-input",{staticClass:"sizeLine",model:{value:e.form.file_store.secret_key,callback:function(t){e.$set(e.form.file_store,"secret_key",t)},expression:"form.file_store.secret_key"}})],1):e._e(),"1"==e.form.file_store.store_type?s("el-form-item",{attrs:{label:"存储bucket"}},[s("el-input",{staticClass:"sizeLine",model:{value:e.form.file_store.bucket,callback:function(t){e.$set(e.form.file_store,"bucket",t)},expression:"form.file_store.bucket"}})],1):e._e(),"1"==e.form.file_store.store_type?s("el-form-item",{attrs:{label:"存储空间域名"}},[s("el-input",{staticClass:"sizeLine",model:{value:e.form.file_store.domain,callback:function(t){e.$set(e.form.file_store,"domain",t)},expression:"form.file_store.domain"}})],1):e._e(),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]),s("el-button",[e._v("取消")])],1)],1)],1)},b=[],h={name:"word",components:{vUpload:r["a"]},props:{getData:{type:Function,default:null}},data:function(){return{form:{file_store:{}}}},created:function(){this.getDatas()},computed:{},methods:{onSubmit:function(){var e=this;Object(n["e"])(this.form,(function(t){200==t.code&&(e.$message.success("设置成功"),e.getData())}))},getDatas:function(){var e=this;Object(n["c"])(this.params,(function(t){200==t.code&&(e.form.file_store=t.data.file_store)}))},handleUploadImg:function(e){this.form.img=e,this.form=JSON.parse(JSON.stringify(this.form))}}},_=h,g=(s("aa0b"),Object(f["a"])(_,p,b,!1,null,"ed6d372c",null)),k=g.exports,v={name:"capital-flow-warp",components:{vAddNote:d,vAddCloud:k},data:function(){return{url:"./vuetable.json",cur_page:1,multipleSelection:[],del_list:[],editVisible:!1,delVisible:!1,params:{page:1,pageSize:20,channel:1,sort:"up",book_id:""},tableData:[],total_tickets:"",total_coins:"",total:1}},created:function(){this.params.book_id=this.$route.query.book_id,this.getData()},computed:{},methods:{handleCurrentChange:function(e){this.params.page=e,this.getData()},jump:function(e,t){var s=this.$route.query.book_type;"add"==e?this.$router.push({path:"/novel/chapter_add/0",query:{book_id:this.params.book_id,channel:this.params.channel,book_type:s}}):this.$router.push({path:"/novel/chapter_add/".concat(t.id),query:{book_id:this.params.book_id,book_type:s}})},typeFormatter:function(e,t){return 1==e.type?"金币":"书券"},nameFormatter:function(e,t){return"".concat(e.mobile,"(").concat(e.nick_name||"未设",")")},getData:function(e){e&&(this.params.page=1)},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},handleAdd:function(e,t){this.editVisible=!0,this.form={}},handleEdit:function(e,t){if(t){this.idx=e;var s=t;this.form={name:s.name,date:s.date,address:s.address}}else this.form={};this.editVisible=!0},handleDelete:function(e,t){this.idx=e,this.delVisible=!0},delAll:function(){this.multipleSelection.length;console.log(this.multipleSelection,"multipleSelection")},handleSelectionChange:function(e){this.multipleSelection=e},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1,this.$message.success("修改第 ".concat(this.idx+1," 行成功"))},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1}}},y=v,$=Object(f["a"])(y,a,i,!1,null,null,null);t["default"]=$.exports},aa0b:function(e,t,s){"use strict";var a=s("c65f"),i=s.n(a);i.a},b4b1:function(e,t,s){"use strict";var a=s("c604"),i=s.n(a);i.a},c604:function(e,t,s){},c65f:function(e,t,s){}}]);