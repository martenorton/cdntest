(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05b5a2ec"],{"64e5":function(e,t,a){},"65bf":function(e,t,a){"use strict";var s=a("64e5"),n=a.n(s);n.a},7538:function(e,t,a){"use strict";var s=a("9a10"),n=a.n(s);n.a},"9a10":function(e,t,a){},f00c:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"users-list-warp"},[a("div",{staticClass:"container"},[e._m(0),a("div",{staticClass:"handle-box"},[a("span",{staticClass:"label"},[e._v("搜索：")]),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"账户"},model:{value:e.params.nickname,callback:function(t){e.$set(e.params,"nickname",t)},expression:"params.nickname"}}),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"手机/email"},model:{value:e.params.mobile,callback:function(t){e.$set(e.params,"mobile",t)},expression:"params.mobile"}}),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.goSearch}},[e._v("搜索")])],1),a("div",{staticClass:"screen-box"},[a("v-screen",{key:e.params.resetOptions,attrs:{label:"是否会员",dataList:e.vipParams},on:{click:function(t){e.handleParams(t,"is_vip")}}}),a("v-screen",{key:e.params.resetOptions,attrs:{label:"账号状态",dataList:e.statusParams},on:{click:function(t){e.handleParams(t,"status")}}})],1),e.nexus&&e.nexus.length>0&&!e.is_search?a("div",{staticStyle:{margin:"20px 0"}},[a("div",{staticStyle:{width:"100%",height:"40px",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","background-color":"#f8f8f8",border:"1px solid #e7e7e7"}},[a("ul",{staticStyle:{display:"flex","flex-direction":"row !important","list-style":"none"}},[a("li",[e._v("当前位置")]),e._l(e.nexus,(function(t){return a("li",[a("span",[e._v(" > ")]),a("span",{staticStyle:{cursor:"pointer",color:"#409eff"},on:{click:function(a){return e.getDownData(t.id)}}},[e._v(e._s(t.name)+" ")]),a("span",[e._v(" ")])])}))],2)]),a("div",{staticStyle:{display:"flex","flex-direction":"column"}},[e._m(1),a("ul",{staticClass:"userm-upuser-info-ul"},[a("li",[a("span",[e._v(e._s(e.nexus[e.nexus.length-1].name))])]),a("li",[a("span",[e._v(e._s(e.nexus[e.nexus.length-1].mobile))])]),a("li",[a("span",[e._v(e._s(e.nexus[e.nexus.length-1].teamusers)+"人")])]),a("li",[a("span",[e._v(e._s(e.nexus[e.nexus.length-1].teamvips)+"人")])]),a("li",[a("span",[e._v(e._s(e.nexus[e.nexus.length-1].todayusers)+"人")])]),a("li",[a("span",[e._v(e._s(e.nexus[e.nexus.length-1].todayvips)+"人")])]),a("li",{staticStyle:{"min-width":"162px"}},[a("span",[e._v(e._s(e.nexus[e.nexus.length-1].last_login_time))])]),a("li",[a("span",[""!=e.nexus[e.nexus.length-1].mobile||e.nexus[e.nexus.length-1].email?a("div",{staticClass:"table-cell"},[1==e.nexus[e.nexus.length-1].status?a("a",{staticClass:"icon icon-show",on:{click:function(t){return e.handleEditShow(e.nexus[e.nexus.length-1],0)}}},[e._v("启用")]):e._e(),0==e.nexus[e.nexus.length-1].status?a("a",{staticClass:"icon icon-none",on:{click:function(t){return e.handleEditShow(e.nexus[e.nexus.length-1],1)}}},[e._v("禁用")]):e._e()]):a("div",{staticClass:"table-cell"},[1==e.nexus[e.nexus.length-1].status?a("span",[e._v("启用")]):e._e(),0==e.nexus[e.nexus.length-1].status?a("span",[e._v("禁用")]):e._e()])])])])])]):e._e(),e.nexus&&e.nexus.length>0||e.is_search?a("div",{staticStyle:{width:"100%",height:"40px",display:"flex","flex-direction":"column","justify-content":"center","align-items":"center","background-color":"#f8f8f8",border:"1px solid #e7e7e7"}},[a("ul",{staticStyle:{display:"flex","flex-direction":"row !important","list-style":"none"}},[e.is_search?a("li",[e._v(e._s(e.params.nickname||e.params.mobile)+" 的用户列表")]):a("li",[e._v(e._s(e.nexus[e.nexus.length-1].name)+"的用户列表")])])]):e._e(),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{label:"账户","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"table-name",staticStyle:{cursor:"pointer"},on:{click:function(a){return e.getDownData(t.row.id)}}},[e._v(e._s(t.row.name))])]}}])}),a("el-table-column",{attrs:{label:"手机/email"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"vip-cell"},[a("div",[e._v("\n              "+e._s(t.row.mobile)+"\n              "),""!=t.row.mobile&&null!=t.row.is_vip.mobile?a("span",[e._v("/")]):e._e(),e._v("\n              "+e._s(t.row.email)+"\n            ")])])]}}])}),a("el-table-column",{attrs:{label:"设备id"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.row.device)+"（"+e._s(t.row.source)+"）")])]}}])}),a("el-table-column",{attrs:{prop:"is_vip",label:"是否会员",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"vip-cell"},[a("div",[e._v(e._s(0==t.row.is_vip?"否":"是"))]),a("br")])]}}])}),a("el-table-column",{attrs:{prop:"created_at",label:"注册时间",sortable:""}}),a("el-table-column",{attrs:{prop:"vip_time",label:"会员到期时间",sortable:"",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"!=t.row.is_vip?a("span",[e._v("\n            "+e._s(t.row.vip_time)+"\n            "),""!=t.row.hy_days?a("span",[e._v("（"+e._s(t.row.hy_days)+"天）")]):e._e()]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"status",label:"状态",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[""!=t.row.mobile||t.row.email?a("div",{staticClass:"table-cell",staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[1==t.row.status?a("a",{staticClass:"icon icon-show",on:{click:function(a){return e.handleEditShow(t.row,0)}}},[e._v("启用")]):e._e(),0==t.row.status?a("a",{staticClass:"icon icon-none",on:{click:function(a){return e.handleEditShow(t.row,1)}}},[e._v("禁用")]):e._e()]):a("div",{staticClass:"table-cell",staticStyle:{display:"flex","align-items":"center","justify-content":"center"}},[1==t.row.status?a("span",[e._v("启用")]):e._e(),0==t.row.status?a("span",[e._v("禁用")]):e._e()])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("v-add",{staticClass:"cell-item",attrs:{type:"edit",id:t.row.id,dataSource:t.row||null,getData:e.getData}}),a("v-del",{attrs:{getData:e.getData,id:t.row.id}})]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.params.pageSize||20},on:{"current-change":e.handleCurrentChange}})],1)],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"head-nav"},[a("span",{staticClass:"title"},[e._v("会员列表")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"userm-upuser-info-ul",staticStyle:{display:"flex","flex-direction":"row"}},[a("li",[a("span",[e._v("账户")])]),a("li",[a("span",[e._v("手机")])]),a("li",[a("span",[e._v("团队人数")])]),a("li",[a("span",[e._v("会员人数")])]),a("li",[a("span",[e._v("今日注册")])]),a("li",[a("span",[e._v("今日开通会员")])]),a("li",{staticStyle:{"min-width":"162px"}},[a("span",[e._v("上次登陆")])]),a("li",[a("span",[e._v("状态")])])])}],i=(a("7f7f"),a("96cf"),a("3b8d")),l=a("3856"),r=a("3dda"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add-warp"},["edit"!=e.type?a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleOpen()}}},[e._v("增加天数")]):e._e(),"edit"==e.type?a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(t){return e.handleOpen()}}},[e._v("编辑")]):e._e(),a("el-dialog",{attrs:{title:"增加VIP天数","close-on-click-modal":!1,visible:e.editVisible,width:"40%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",staticClass:"detalis-form",attrs:{rules:e.rules,model:e.form,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"账户"}},[a("div",[e._v(e._s(e.form.name))])]),a("el-form-item",{attrs:{label:"设备id"}},[a("div",[e._v(e._s(e.form.device)+"（"+e._s(e.form.source)+"）")])]),a("el-form-item",{attrs:{label:"会员剩余天数"}},[a("div",[e._v(e._s(e.form.hy_days)+"天")])]),a("el-form-item",{attrs:{label:"增加会员天数"}},[a("el-input",{attrs:{type:"number",placeholder:"增加的会员天数(负数为减)"},model:{value:e.vip_days,callback:function(t){e.vip_days=t},expression:"vip_days"}})],1),a("el-form-item",{attrs:{label:"手机/邮箱"}},[a("el-input",{attrs:{placeholder:"请输入手机或邮箱"},model:{value:e.contact,callback:function(t){e.contact=t},expression:"contact"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("el-form-item",{attrs:{label:"状态"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.closeBtn("form")}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("确 定")])],1)],1)],1)},c=[],u=(a("c5f6"),a("d2f3")),d={name:"word",components:{vUpload:r["a"]},props:{getData:{type:Function,default:null},dataSource:{type:Object,default:null},type:{type:String,default:null}},data:function(){return{editVisible:!1,status:"0",password:"",contact:"",vip_days:"",form:{platform_flag:1},rules:{days:[{required:!0,type:Number,message:"请输入新增天数",trigger:"change"}],remain_days:[{required:!0,message:"请输入会员剩余天数",trigger:"change"}],sex:[{required:!0,message:"请填写性别",trigger:"change"}],status:[{required:!0,message:"请填写状态",trigger:"change"}],name:[{required:!0,message:"请填写昵称",trigger:"change"}],password:[{required:!0,message:"请填写密码",trigger:"change"}],platform_flag:[{required:!0,message:"请填写密码",trigger:"change"}]}}},created:function(){},computed:{},methods:{handleOpen:function(){this.dataSource&&(this.form=this.dataSource,this.status=""+this.form.status,this.contact=this.form.mobile||this.form.email),this.editVisible=!0},handleUploadImg:function(e){this.form.head_img=e},submitForm:function(e){var t=this;this.$refs[e].validate((function(a){if(!a)return console.log("error submit!!"),!1;if("edit"==t.type){var s={};s.id=t.form.id,s.days=t.form.days,console.log(s);var n={};n.status=t.status,n.id=t.form.id,n.contact=t.contact,n.password=t.password,n.vip_days=t.vip_days,Object(u["g"])(n,(function(a){200==a.code&&(t.status="",t.contact="",t.password="",t.vip_days="",t.closeBtn(e),t.$message.success("保存成功"))}))}else Object(u["n"])(t.form,(function(e){200==e.code&&(t.getData(),t.form={},t.$message.success("新增成功"))}));t.editVisible=!1,t.$refs[e].resetFields()}))},closeBtn:function(e){this.editVisible=!1,this.getData(),this.$refs[e].resetFields()},resetForm:function(e){this.$refs[e].resetFields()}}},p=d,m=(a("65bf"),a("2877")),f=Object(m["a"])(p,o,c,!1,null,"625f8b56",null),h=f.exports,v=a("44f8"),g=a("7ed4"),_={name:"user-list",components:{vUpload:r["a"],vScreen:l["a"],vAdd:h,vDel:v["a"]},data:function(){return{url:"./vuetable.json",cur_page:1,multipleSelection:[],select_cate:"0",del_list:[],is_search:!1,editVisible:!1,delVisible:!1,form:{name:"",date:"",address:""},idx:-1,tableData:[],params:{page:1,pageSize:10,sex:"",status:"",mobile:"",uid:0},total:1,editId:"",statusParams:[{label:"全部",value:""},{label:"正常",value:1},{label:"禁用",value:0}],loading:!0,vipParams:[{label:"全部",value:""},{label:"是",value:1},{label:"否",value:0}],sexParams:[{label:"全部",value:""},{label:"男性",value:1},{label:"女性",value:2}],nexus:[]}},beforeDestroy:function(){g["a"].$off("leftReloadData")},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getNexues();case 2:return e.next=4,this.getData();case 4:g["a"].$on("leftReloadData",(function(e){e&&e==t.$route.path&&(console.log("msg=".concat(JSON.stringify(e),",,,").concat(t.$route.path)),t.params.mobile="",t.params.nickname="",t.params.status="",t.params.is_vip="",t.params.resetOptions=!0,t.params.resetOptions=!1,t.params.page=1,t.loading=!0,t.getNexues(),t.getData())}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),computed:{},methods:{goSearch:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.params.nickname||this.params.mobile?this.is_search=!0:this.is_search=!1,this.params.page=1,e.next=4,this.getData();case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getDownData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.params.nickname="",this.params.mobile="",this.is_search=!1,this.loading=!0,this.params.page=1,this.params.uid=t,t||(this.params.uid=0),e.next=9,this.getNexues(t);case 9:return e.next=11,this.getData();case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getNexues:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t||(t=0),e.next=3,Object(u["m"])({uid:t},(function(e){a.nexus=e.data,console.log(JSON.stringify(e.data))}));case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),handleCurrentChange:function(e){this.params.page=e,this.getData()},jumpDetails:function(e){},handleEditShow:function(e,t){var a=this;Object(u["h"])({id:e.id,status:t},(function(e){200==e.code&&(a.getData(),a.$message.success("修改成功"))}))},jumpChapter:function(e){this.$router.push({path:"/novel/chapter",query:{book_id:e}})},getData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,Object(u["l"])(this.params,(function(e){t.tableData=e.data.list,t.total=e.data.count,t.loading=!1}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),search:function(){this.is_search=!0},sexFormatter:function(e,t){return"1"==e.sex?"男性":"2"==e.sex?"女性":"未设置"},filterTag:function(e,t){return t.tag===e},handleParams:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.params.page=1,this.params[a]=t,e.next=4,this.getNexues();case 4:return e.next=6,this.getData();case 6:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}(),handleUp:function(e,t){this.editId=e.id,this.delVisible=!0},delAll:function(){var e=this.multipleSelection.length,t="";this.del_list=this.del_list.concat(this.multipleSelection);for(var a=0;a<e;a++)t+=this.multipleSelection[a].name+" ";this.$message.error("删除了"+t),this.multipleSelection=[]},handleSelectionChange:function(e){this.multipleSelection=e},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1,this.$message.success("修改第 ".concat(this.idx+1," 行成功"))},deleteRow:function(){this.tableData.splice(this.idx,1),this.$message.success("删除成功"),this.delVisible=!1}}},b=_,x=(a("7538"),Object(m["a"])(b,s,n,!1,null,null,null));t["default"]=x.exports}}]);