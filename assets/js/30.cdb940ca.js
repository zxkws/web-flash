(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{91:function(a,t,e){"use strict";e.r(t);var r=e(0),s=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[a._v("#")]),a._v(" 常见问题")]),a._v(" "),e("h2",{attrs:{id:"本地开发正常，打包运行的时候提交中文内容乱码，检查了数据库编码也没问题？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地开发正常，打包运行的时候提交中文内容乱码，检查了数据库编码也没问题？","aria-hidden":"true"}},[a._v("#")]),a._v(" 本地开发正常，打包运行的时候提交中文内容乱码，检查了数据库编码也没问题？")]),a._v(" "),e("p",[a._v("打包为jar包运行的时候可以指定运行时编码为UTF8：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("java -Dfile.encoding=utf-8 -jar xxxxxxx.jar\n")])])]),e("h2",{attrs:{id:"打包vue-admin或者vue-h5总是下载依赖包失败"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包vue-admin或者vue-h5总是下载依赖包失败","aria-hidden":"true"}},[a._v("#")]),a._v(" 打包vue-admin或者vue-h5总是下载依赖包失败")]),a._v(" "),e("p",[a._v("使用淘宝源")]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" --registry"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://registry.npm.taobao.org\n")])])]),e("h2",{attrs:{id:"使用代码生成器的时候生成不了代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用代码生成器的时候生成不了代码","aria-hidden":"true"}},[a._v("#")]),a._v(" 使用代码生成器的时候生成不了代码")]),a._v(" "),e("p",[a._v("下载项目好，首先运行mvn package -DskipTestss将项目打包成功，然后再生成，代码生成器读取实体类的class文件进行生成，所以必须构建生成class文件")]),a._v(" "),e("h2",{attrs:{id:"invalid-character-found-in-the-request-target-the-valid-characters-are-defined-in-rfc-3986"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#invalid-character-found-in-the-request-target-the-valid-characters-are-defined-in-rfc-3986","aria-hidden":"true"}},[a._v("#")]),a._v(" Invalid character found in the request target. The valid characters are defined in RFC 3986")]),a._v(" "),e("p",[a._v("将api部署在tomcat中的时候，如果前端请求参数有特殊字符，例如{},[]等，tomcat会报上述错误，\n出现这个错误的原因是不支持参数中的特殊字符，可以通过该如下方式借据：")]),a._v(" "),e("ul",[e("li",[a._v("在conf/catalina.properties中最后添加2行：")])]),a._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("tomcat.util.http.parser.HttpParser.requestTargetAllow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("|{}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("org.apache.tomcat.util.buf.UDecoder.ALLOW_ENCODED_SLASH")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[a._v("true")]),a._v("\n")])])]),e("ul",[e("li",[a._v('requestTargetAllow 只能配置|、{、} 允许这三个字符，对于其他的(例如" < > [ \\ ] ^ ` { | } .)，在请求时，仍然拦截，如果使用了|{}之外的其他字符那怎么办呢？那就还需要如下配置。')]),a._v(" "),e("li",[a._v("在conf/server.xml中的Connector节点中，添加2个属性：")])]),a._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[a._v('relaxedPathChars="|{}[],"\nrelaxedQueryChars="|{}[],"\n')])])]),e("p",[a._v("这2个属性，可以接收任意特殊字符的组合，根据需要可以自行增减。")]),a._v(" "),e("p",[e("strong",[a._v("参考文档：")]),a._v(" https://blog.csdn.net/ljheee/article/details/82051755")])])}],!1,null,null,null);t.default=s.exports}}]);