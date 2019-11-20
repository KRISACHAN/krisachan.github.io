(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{179:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("作者：陈大鱼头")]),t._v(" "),s("li",[t._v("github： "),s("a",{attrs:{href:"https://github.com/KRISACHAN",target:"_blank",rel:"noopener noreferrer"}},[t._v("KRISACHAN"),s("OutboundLink")],1)])])]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("在我们的日常业务中，表单验证是个很常见设计需求，像一些登录注册框，问卷调查也都需要用到表单验证。")]),t._v(" "),s("p",[t._v("一般我们的实现思路都是JS监听input框的输入内容，判断用户输入内容，从而以此来决定下一步的操作。")]),t._v(" "),s("p",[t._v("例如这样：（以下例子来自优秀的开源UI库，"),s("a",{attrs:{href:"http://element-cn.eleme.io/#/zh-CN/component/form",target:"_blank",rel:"noopener noreferrer"}},[t._v("element"),s("OutboundLink")],1),t._v("）")]),t._v(" "),t._m(2),s("p",[t._v("以上就是我们常规的表达验证了，基本就都是用JS来完成的，那么我们能不能用CSS来实现呢？答案是可以的。这里先上"),s("a",{attrs:{href:t.$withBase("/css/css-form-validation.html")}},[t._v("DEMO")])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),s("OutboundLink")],1),t._v("的解释：")]),t._v(" "),s("p",[t._v("检查控件值的正则表达式.。pattern必须匹配整个值，而不仅仅是某些子集.。使用title属性来描述帮助用户的模式.。当类型属性的值为text, search, tel, url 或 email时，此属性适用，否则将被忽略。（兼容ie10+）")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),s("p",[t._v("详细介绍请看我的博文 "),s("a",{attrs:{href:"https://krisachan.github.io/css/others/19-css-level-4-selectors.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("[译]19个CSS level 4 选择器"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("如果你喜欢探讨技术，或者对本文有任何的意见或建议，非常欢迎加鱼头微信好友一起探讨，当然，鱼头也非常希望能跟你一起聊生活，聊爱好，谈天说地。 鱼头的微信号是：krisChans95 也可以扫码添加好友，备注“博客”就行")]),t._v(" "),t._m(19)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"纯css实现表单验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#纯css实现表单验证","aria-hidden":"true"}},[this._v("#")]),this._v(" 纯CSS实现表单验证")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"关于表单验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于表单验证","aria-hidden":"true"}},[this._v("#")]),this._v(" 关于表单验证")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v('<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">\n  <el-form-item\n    label="年龄"\n    prop="age"\n    :rules="[\n      { required: true, message: \'年龄不能为空\'},\n      { type: \'number\', message: \'年龄必须为数字值\'}\n    ]"\n  >\n    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>\n  </el-form-item>\n  <el-form-item>\n    <el-button type="primary" @click="submitForm(\'numberValidateForm\')">提交</el-button>\n    <el-button @click="resetForm(\'numberValidateForm\')">重置</el-button>\n  </el-form-item>\n</el-form>\n<script>\n  export default {\n    data() {\n      return {\n        numberValidateForm: {\n          age: \'\'\n        }\n      };\n    },\n    methods: {\n      submitForm(formName) {\n        this.$refs[formName].validate((valid) => {\n          if (valid) {\n            alert(\'submit!\');\n          } else {\n            console.log(\'error submit!!\');\n            return false;\n          }\n        });\n      },\n      resetForm(formName) {\n        this.$refs[formName].resetFields();\n      }\n    }\n  }\n<\/script>\n')])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"css实现表单验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css实现表单验证","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS实现表单验证")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("strong",[t._v("上面的表单验证就完全是由CSS来实现的，核心属性就是"),s("code",[t._v("CSS Level 4")]),t._v("的"),s("code",[t._v("Validity")]),t._v("。思路就是利用"),s("code",[t._v(":valid")]),t._v("跟"),s("code",[t._v(":invalid")]),t._v("可以对"),s("code",[t._v("<input>")]),t._v("的"),s("code",[t._v("value")]),t._v("进行判断的特性。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"这里是全部代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这里是全部代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 这里是全部代码")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v('/*\n * css\n */\n :root {\n \t--error-color: red;\n }\n .form > input {\n \tmargin-bottom: 10px;\n }\n .form > .f-tips {\n \tcolor: var(--error-color);\n \tdisplay: none;\n }\n input[type="text"]:invalid ~ input[type="submit"],\n input[type="password"]:invalid ~ input[type="submit"] {\n \tdisplay: none;\n }\n input[required]:invalid + span {\n \tdisplay: inline;\n }\n \n /*\n  * html\n  */\n'),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("get"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("action")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/api/form"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    账号：\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("data-title")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("账号"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("pattern")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\\w{6,10}"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("account"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("required")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("f-tips"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("请输入正确的账号"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    密码：\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("data-title")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("密码"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("pattern")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("\\w{6,10}"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("password"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("password"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("required")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("f-tips"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("请输入正确的密码"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("button"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("提交"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"效果截图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效果截图","aria-hidden":"true"}},[this._v("#")]),this._v(" 效果截图")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://fish-pond-1253945200.cos.ap-guangzhou.myqcloud.com/img/css/essay/css-form-validation/invalid.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://fish-pond-1253945200.cos.ap-guangzhou.myqcloud.com/img/css/essay/css-form-validation/valid.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"使用到的知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用到的知识点","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用到的知识点")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"_1-html5里-input-的新属性：pattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-html5里-input-的新属性：pattern","aria-hidden":"true"}},[this._v("#")]),this._v(" 1.  "),a("code",[this._v("HTML5")]),this._v("里"),a("code",[this._v("<input>")]),this._v("的新属性："),a("code",[this._v("pattern")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("备注：")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",[a("li",[this._v("如果"),a("code",[this._v("pattern")]),this._v("里的验证规则不合法，例如多了长度校验内多了空格，也是会在控制台报错的，详情如下：")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://fish-pond-1253945200.cos.ap-guangzhou.myqcloud.com/img/css/essay/css-form-validation/error-pattern.png",alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v('<input data-title="账号" pattern="/[\\w]{6, 10}/" name="account" type="text" required />\n')])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ol",{attrs:{start:"2"}},[a("li",[a("code",[this._v("CSS")]),this._v("与"),a("code",[this._v("JS")]),this._v("里的验证规则不一样，以下写法是会无效的，核心校验规则需要用"),a("code",[this._v("[]")]),this._v("包起来（目前从测试的几个例子是这样，具体详情还需要翻查资料，如果有大佬知道更具体的信息，请告知，谢谢！）")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v('<input data-title="账号" pattern="/\\w{6,10}/" name="account" type="text" required />\n')])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"_2-css-level-4-选择器的新属性：invalid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-css-level-4-选择器的新属性：invalid","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. "),a("code",[this._v("CSS Level 4 选择器")]),this._v("的新属性："),a("code",[this._v("invalid")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:"https://fish-pond-1253945200.cos.ap-guangzhou.myqcloud.com/img/base/wx-qrcode1.jpg",alt:"wx-qrcode"}})])}],!1,null,null,null);a.default=e.exports}}]);