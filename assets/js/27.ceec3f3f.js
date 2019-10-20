(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{181:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("作者：陈大鱼头")]),t._v(" "),s("li",[t._v("github： "),s("a",{attrs:{href:"https://github.com/KRISACHAN",target:"_blank",rel:"noopener noreferrer"}},[t._v("KRISACHAN"),s("OutboundLink")],1)])])]),t._v(" "),t._m(1),t._v(" "),s("ul",[s("li",[t._v("刚刚看了掘金上一篇文章"),s("a",{attrs:{href:"https://juejin.im/post/5c1e7a086fb9a049b82a7310",target:"_blank",rel:"noopener noreferrer"}},[t._v("《作为技术面试官，为什么把你pass了》"),s("OutboundLink")],1),t._v("，里面第一题就是用"),s("code",[t._v("es5")]),t._v("实现"),s("code",[t._v("const")]),t._v("，据作者反馈 "),s("strong",[t._v("这一题所有的面试者都没有回答出来")]),t._v("，感觉挺可惜的，其实这是一道比较简单的题目，但是由于涉及到了一些Object对象属性描述符的知识，这些描述符往往用到的场景不多，所以不容易记住。")])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"如何在-es5-环境下实现一个const-？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何在-es5-环境下实现一个const-？","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何在 ES5 环境下实现一个const ？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"属性描述符："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性描述符：","aria-hidden":"true"}},[this._v("#")]),this._v(" 属性描述符：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"对象里目前的属性描述符有两种："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对象里目前的属性描述符有两种：","aria-hidden":"true"}},[this._v("#")]),this._v(" 对象里目前的属性描述符有两种：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("数据描述符："),e("strong",[this._v("具有值的属性")])]),this._v(" "),e("li",[this._v("存取描述符："),e("strong",[this._v("由getter与setter函数对描述的属性")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"描述符功能："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述符功能：","aria-hidden":"true"}},[this._v("#")]),this._v(" 描述符功能：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"数据描述符与存取描述符皆可修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据描述符与存取描述符皆可修改","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据描述符与存取描述符皆可修改:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("configurable：当前对象元素的属性描述符是否可改，是否可删除")]),this._v(" "),e("li",[this._v("enumerable：当前对象元素是否可枚举")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"唯有数据描述符可以修改："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#唯有数据描述符可以修改：","aria-hidden":"true"}},[this._v("#")]),this._v(" 唯有数据描述符可以修改：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("value: 当前对象元素的值")]),this._v(" "),e("li",[this._v("writable：当前对象元素的值是否可修改")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"唯有存取描述符可以修改："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#唯有存取描述符可以修改：","aria-hidden":"true"}},[this._v("#")]),this._v(" 唯有存取描述符可以修改：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("get：读取元素属性值时的操作")]),this._v(" "),e("li",[this._v("set：修改元素属性值时的操作")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"描述符可同时具有的键值："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#描述符可同时具有的键值：","aria-hidden":"true"}},[this._v("#")]),this._v(" 描述符可同时具有的键值：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th"),t._v(" "),s("th",[t._v("configurable")]),t._v(" "),s("th",[t._v("enumerable")]),t._v(" "),s("th",[t._v("value")]),t._v(" "),s("th",[t._v("writable")]),t._v(" "),s("th",[t._v("get")]),t._v(" "),s("th",[t._v("set")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("数据描述符")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("No")])]),t._v(" "),s("tr",[s("td",[t._v("存取描述符")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("No")]),t._v(" "),s("td",[t._v("Yes")]),t._v(" "),s("td",[t._v("Yes")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"const-实现原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#const-实现原理","aria-hidden":"true"}},[this._v("#")]),this._v(" const 实现原理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("由于ES5环境没有block的概念，所以是无法百分百实现const，只能是挂载到某个对象下，要么是全局的window，要么就是自定义一个object来当容器")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("      var __const = function __const (data, value) {\n        window.data = value // 把要定义的data挂载到window下，并赋值value\n        Object.defineProperty(window, data, { // 利用Object.defineProperty的能力劫持当前对象，并修改其属性描述符\n          enumerable: false,\n          configurable: false,\n          get: function () {\n            return value\n          },\n          set: function (data) {\n            if (data !== value) { // 当要对当前属性进行赋值时，则抛出错误！\n              throw new TypeError('Assignment to constant variable.')\n            } else {\n              return value\n            }\n          }\n        })\n      }\n      __const('a', 10)\n      console.log(a)\n      delete a\n      console.log(a)\n      for (let item in window) { // 因为const定义的属性在global下也是不存在的，所以用到了enumerable: false来模拟这一功能\n        if (item === 'a') { // 因为不可枚举，所以不执行\n          console.log(window[item])\n        }\n      }\n      a = 20 // 报错\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"题外话"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#题外话","aria-hidden":"true"}},[this._v("#")]),this._v(" 题外话")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Vue目前双向绑定的核心实现思路就是利用Object.defineProperty对"),e("code",[this._v("get")]),this._v("跟"),e("code",[this._v("set")]),this._v("进行劫持，监听用户对属性进行调用以及赋值时的具体情况，从而实现的双向绑定~~")])}],!1,null,null,null);e.default=a.exports}}]);