(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56a4261b"],{"0749":function(e,t,a){},"12f3":function(e,t,a){"use strict";var r=a("0749"),s=a.n(r);s.a},"4d95":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"novel-book-details"},[a("div",{staticClass:"container"},[a("div",{staticClass:"head-nav"},[a("span",{staticClass:"title"},[e._v(e._s(e.form.name))]),a("div")]),a("el-form",{ref:"form",staticClass:"detalis-form",attrs:{model:e.form,"label-width":"140px"}},[a("el-form-item",{attrs:{label:"封面"}},[a("img",{staticClass:"cover-img",attrs:{src:e.tableData.cover,alt:""}})]),a("el-form-item",{attrs:{label:"角色名"}},[e._v("\n        "+e._s(e.tableData.name)+"\n      ")]),a("el-form-item",{attrs:{label:"描述"}},[e._v("\n        "+e._s(e.tableData.describe)+"\n      ")]),a("el-form-item",{attrs:{label:"角色对应的权限id"}},[e._v("\n        "+e._s(e.tableData.roleHasPermissions)+"\n      ")]),a("el-form-item",{attrs:{label:"状态"}},[e._v("\n        "+e._s(e.tableData.status)+"\n      ")])],1)],1)])},s=[],i={name:"novel-book-details",components:{},data:function(){return{editVisible:!1,book_id:"",form:{},rules:{cover:[{required:!0,message:"请填写信息",trigger:"change"}],brief:[{required:!0,message:"请填写简介",trigger:"blur"}],bookname:[{required:!0,message:"请填写书名",trigger:"blur"}],author:[{required:!0,message:"请填写作者",trigger:"blur"}],channel:[{required:!0,message:"请填写信息",trigger:"change"}],keywords:[{required:!0,message:"请填写信息",trigger:"blur"}],words:[{required:!0,message:"请填写信息",trigger:"blur"}]},tableData:{}}},created:function(){this.book_id=this.$route.query.book_id,this.getData()},computed:{},methods:{getData:function(){},handleJumpChapter:function(){this.$router.push({path:"/novel/chapter",query:{book_id:this.book_id}})},handleEdit:function(e,t){this.editVisible=!0},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;do_book_save(t.form,(function(e){200==e.code&&(t.getData(),t.$message.success("修改成功"))})),t.editVisible=!1}))},handleUploadImg:function(e){this.form.cover=e}}},o=i,n=(a("12f3"),a("2877")),l=Object(n["a"])(o,r,s,!1,null,null,null);t["default"]=l.exports}}]);