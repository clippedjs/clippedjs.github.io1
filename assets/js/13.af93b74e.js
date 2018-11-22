(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{201:function(t,a,s){"use strict";s.r(a);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=s(3),o=Object(e.a)(n,function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[s("h1",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h2",{attrs:{id:"hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hook","aria-hidden":"true"}},[t._v("#")]),t._v(" Hook")]),t._v(" "),s("h3",{attrs:{id:"hook-name-add"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hook-name-add","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("hook(name).add")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{string} name")])]),t._v(" "),s("li",[s("code",[t._v("{Function | Function[]} task")])]),t._v(" "),s("li",[s("code",[t._v("{number} [index]")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("p",[t._v("Add a task under a hook, placed after index if given.")]),t._v(" "),s("p",[t._v("If given an array of tasks, they will be run in parallel")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("api"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("hook")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'hello-world'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'say-hello'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" api "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'Hello!!'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"hook-name-delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hook-name-delete","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("hook(name).delete")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{string} name")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:\nDelete a task under a hook")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("api"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("hook")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'hello-world'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("delete")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'say-hello'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"hook-name-modify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hook-name-modify","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("hook(name).modify")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{string} name")])]),t._v(" "),s("li",[s("code",[t._v("{Function | Function[]} modifier")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:\nModify tasks under a hook.")]),t._v(" "),s("p",[s("code",[t._v("modifier")]),t._v(" should return the result tasks")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("api"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("hook")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'hello-world'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("modify")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'say-hello'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cbs "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cbs"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'World!!!'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cbs "),s("span",{attrs:{class:"token comment"}},[t._v("// REQUIRED")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"exechook-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exechook-name","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("execHook(name)")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{string} name")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:\nExecute hook "),s("strong",[t._v("asynchronously")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("execHook")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'hello-world'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"helper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helper","aria-hidden":"true"}},[t._v("#")]),t._v(" Helper")]),t._v(" "),s("h3",{attrs:{id:"fs-copy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fs-copy","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("fs.copy")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{Object | Object[]} operation")])]),t._v(" "),s("li",[s("code",[t._v("{string} operation.src")])]),t._v(" "),s("li",[s("code",[t._v("{string} operation.dest")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("p",[t._v("Copy file or folder recursively from "),s("code",[t._v("src")]),t._v(" to "),s("code",[t._v("dest")])])])]),t._v(" "),s("h3",{attrs:{id:"fs-remove"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fs-remove","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("fs.remove")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{Object | Object[]} operation")])]),t._v(" "),s("li",[s("code",[t._v("{string} operation.path")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("p",[t._v("Delete file or folder recursively at "),s("code",[t._v("path")])])])]),t._v(" "),s("h3",{attrs:{id:"fs-move"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fs-move","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("fs.move")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{Object | Object[]} operation")])]),t._v(" "),s("li",[s("code",[t._v("{string} operation.src")])]),t._v(" "),s("li",[s("code",[t._v("{string} operation.dest")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("p",[t._v("Move file or folder recursively from "),s("code",[t._v("src")]),t._v(" to "),s("code",[t._v("dest")])])])]),t._v(" "),s("h3",{attrs:{id:"fs-mkdir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fs-mkdir","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("fs.mkdir")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{Object | Object[]} operation")])]),t._v(" "),s("li",[s("code",[t._v("{string} operation.path")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("p",[t._v("Create folder if not exist at "),s("code",[t._v("path")])])])]),t._v(" "),s("h3",{attrs:{id:"fs-emptydir"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fs-emptydir","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("fs.emptydir")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{Object | Object[]} operation")])]),t._v(" "),s("li",[s("code",[t._v("{string} operation.path")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("p",[t._v("Clears folder if exist at "),s("code",[t._v("path")])])])]),t._v(" "),s("h3",{attrs:{id:"fs-copytpl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fs-copytpl","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("fs.copyTpl")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{Object | Object[]} operation")])]),t._v(" "),s("li",[s("code",[t._v("{string} operation.src")])]),t._v(" "),s("li",[s("code",[t._v("{string} operation.dest")])]),t._v(" "),s("li",[s("code",[t._v("{Object} [operation.context]")])]),t._v(" "),s("li",[s("code",[t._v("{Object} [operation.tplOptions]")])]),t._v(" "),s("li",[s("code",[t._v("{Object} [operation.options]")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("p",[t._v("Copy ejs template file from "),s("code",[t._v("src")]),t._v(" to "),s("code",[t._v("dest")]),t._v(", with "),s("code",[t._v("context")]),t._v(" as variables. "),s("code",[t._v("tplOptions")]),t._v(" is passed to "),s("code",[t._v("mem-fs-editor")])])])]),t._v(" "),s("h3",{attrs:{id:"exec"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exec","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("exec")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{string} cmd")])]),t._v(" "),s("li",[s("code",[t._v("{Object} opt")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("p",[t._v("Similar to "),s("code",[t._v("child_process.exec")])])])]),t._v(" "),s("h3",{attrs:{id:"spawn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spawn","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("spawn")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{string} cmd")])]),t._v(" "),s("li",[s("code",[t._v("{any[]} args")])]),t._v(" "),s("li",[s("code",[t._v("{Object} opt")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("p",[t._v("Similar to "),s("code",[t._v("child_process.spawn")])])])]),t._v(" "),s("h3",{attrs:{id:"prompt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prompt","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("prompt")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{Object[] | Object} prompt")])]),t._v(" "),s("li",[s("code",[t._v("{Object} opt")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage\nShow prompt to get user input. Refer to "),s("a",{attrs:{href:"https://github.com/terkelg/prompts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prompts"),s("OutboundLink")],1),t._v(" for furthur info.")])])]),t._v(" "),s("h3",{attrs:{id:"editpkg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#editpkg","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("editPkg")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{Object | Function} mutator")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage\nEdit "),s("code",[t._v("package.json")]),t._v(". "),s("code",[t._v("mutator")]),t._v(" is passed in current "),s("code",[t._v("package.json")]),t._v(", does not need to return value.")])])]),t._v(" "),s("h3",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("install")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("string[]")]),t._v(" deps`")])])]),t._v(" "),s("li",[s("p",[t._v("Usage\nInstall dependencies.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" api"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("install")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'clipped'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@clipped/plugin-babel'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"plugin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugin")]),t._v(" "),s("h3",{attrs:{id:"use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("use")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{Object | Object[] | Function | Function[]} preset")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("p",[t._v("Execute plugin. To learn more about plugins go to "),s("router-link",{attrs:{to:"./plugin/"}},[t._v("Plugin")])],1)])]),t._v(" "),s("h3",{attrs:{id:"describe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#describe","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("describe")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{Object} info")])]),t._v(" "),s("li",[s("code",[t._v("{string} info.id")]),t._v(": Unique id, format should be like 'org.clipped.webpack'")]),t._v(" "),s("li",[s("code",[t._v("{string} info.name")])]),t._v(" "),s("li",[s("code",[t._v("{string} info.description")])]),t._v(" "),s("li",[s("code",[t._v("{string[]} info.before")]),t._v(": What plugins this plugin should be place before")]),t._v(" "),s("li",[s("code",[t._v("{string[]} info.after")]),t._v(": What plugins this plugin should be place after")])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("ul",[s("li",[t._v("Describe a plugin, recommended for published plugin")])])])]),t._v(" "),s("h2",{attrs:{id:"jointed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jointed","aria-hidden":"true"}},[t._v("#")]),t._v(" Jointed")]),t._v(" "),s("h3",{attrs:{id:"set"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("set")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{string} path")]),t._v(": Path to property you want to modify, can be dot-delimited")]),t._v(" "),s("li",[s("code",[t._v("{any} value")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("ul",[s("li",[t._v("Sets value at path")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("/**\nOriginally:\n{\n  module: {\n    rules: []\n  }\n}\n**/")]),t._v("\n\ncfg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'module.rules.js'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("12")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("/**\nModified:\n{\n  module: {\n    rules: [\n      12\n    ]\n  }\n}\n**/")]),t._v("\n\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cfg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rules"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// 12   ")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"has"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#has","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("has")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{string} path")]),t._v(": Path to property you want to check, can be dot-delimited")])])]),t._v(" "),s("li",[s("p",[t._v("Usage:\nChecks if given path contains value.")])])]),t._v(" "),s("h3",{attrs:{id:"delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("delete")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{string} path")]),t._v(": Path to property you want to delete, can be dot-delimited")])])]),t._v(" "),s("li",[s("p",[t._v("Usage:\nDelete value at path")])])]),t._v(" "),s("h3",{attrs:{id:"modify"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modify","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("modify")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{string} path")]),t._v(": Path to property you want to delete, can be dot-delimited")]),t._v(" "),s("li",[s("code",[t._v("{Function} modifier")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:\nModify property at path. modifier is passed current value. Return value by modifier replaces current value.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("cfg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("modify")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'module.rules.js'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" val "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 13")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"use-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-2","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("use")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{string} path")]),t._v(": Path to property you want to set, can be dot-delimited")]),t._v(" "),s("li",[s("code",[t._v("{Function} plugin")])]),t._v(" "),s("li",[s("code",[t._v("{any[]} args")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("ul",[s("li",[t._v("Add a plugin such as Webpack / Rollup plugin, with the function and args separated to make them editable afterwards")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// {plugins: []}")]),t._v("\ncfg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("use")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'plugins.html'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'html-webpack-plugin'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("template"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'template.html'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// later...")]),t._v("\ncfg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("modify")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'plugins.html.args'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  args "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("args"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("template "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'tpl.html'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" args"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alias","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("alias")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Arguments:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{string} path")]),t._v(": Path to property you want to set, can be dot-delimited")]),t._v(" "),s("li",[s("code",[t._v("{Function} func")])])])]),t._v(" "),s("li",[s("p",[t._v("Usage:")]),t._v(" "),s("ul",[s("li",[t._v("Point a property to other values. E.g. point Webpack babel-loader options to Babel")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  babel"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    presets"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token string"}},[t._v("'env'")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    plugins"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("webpack")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cfg"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" api"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cfg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("alias")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'module.rules.js.use.babel.options'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" api"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("babel"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("api"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webpack"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rules"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("use"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("babel"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("toConfig")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("/**\n{\n  presets: ['env'],\n  plugins: []\n}\n**/")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"toconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toconfig","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("code",[t._v("toConfig")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Usage:\nReturns raw value of Jointed")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cfg"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("toConfig")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("/**\n{\n  module: {\n    rules: [13]\n  }\n}\n **/")]),t._v("\n")])])])])])])},[],!1,null,null,null);o.options.__file="api.md";a.default=o.exports}}]);