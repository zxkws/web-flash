(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{100:function(e,t,i){"use strict";i.r(t);var a=i(0),l=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"文件管理"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#文件管理","aria-hidden":"true"}},[e._v("#")]),e._v(" 文件管理")]),e._v(" "),i("p",[e._v("本系统了设计了一个文件管理功能，用来做文件的上传下载")]),e._v(" "),i("h2",{attrs:{id:"功能"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#功能","aria-hidden":"true"}},[e._v("#")]),e._v(" 功能")]),e._v(" "),i("ul",[i("li",[e._v("文件上传")]),e._v(" "),i("li",[e._v("文件下载")]),e._v(" "),i("li",[e._v("图片浏览")])]),e._v(" "),i("h2",{attrs:{id:"设计"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#设计","aria-hidden":"true"}},[e._v("#")]),e._v(" 设计")]),e._v(" "),i("ul",[i("li",[e._v("t_sys_file_info 表存放文件元信息，包括文件名称，uuid，文件存储路径")]),e._v(" "),i("li",[e._v('在"系统管理"->"参数管理"配置"系统默认上传文件路径"：system.file.upload.path')])]),e._v(" "),i("h2",{attrs:{id:"实现"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#实现","aria-hidden":"true"}},[e._v("#")]),e._v(" 实现")]),e._v(" "),i("ul",[i("li",[e._v("文件上传参考内容管理(CMS)模块中的banner管理和文章管理")]),e._v(" "),i("li",[e._v("文件下载使用url：/file/download?idFile=${fileId}")]),e._v(" "),i("li",[e._v("在线显示图片使用url:/file/getImgStream?idFile=${fileId},如果需要获取图片的base64编码内容，可以通过url：/file/getImgBase64?idFile=${fileId}来获取")]),e._v(" "),i("li",[e._v("具体实现参见：cn.enilu.flash.api.controller.FileController")])])])}],!1,null,null,null);t.default=l.exports}}]);