(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{218:function(t,n,o){var content=o(244);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("41127380",content,!0,{sourceMap:!1})},243:function(t,n,o){"use strict";o(218)},244:function(t,n,o){var e=o(43)(!1);e.push([t.i,".navbar{width:100%;background-color:#1b242f;border-bottom:3px solid #04c2c9;padding:0 150px;position:sticky;top:0;z-index:9999}@media (max-width:900px){.navbar{padding:0 20px}}@media (max-width:576px){.navbar{border-bottom:none}}.nav-link{color:#fff;transition:.2s;margin:0 16px;cursor:pointer}.nav-link.active,.nav-link:hover{color:#e31b6d}.navbar-toggler,.navbar-toggler:focus{box-shadow:none}.menu{font-size:28px}.nav-line{position:absolute;top:55px;left:0;display:none;width:100%;height:3px;background-color:#04c2c9}@media (max-width:576px){.nav-line{display:inline-block}}.nav-fixed{-webkit-animation-name:nav;animation-name:nav;-webkit-animation-duration:.3s;animation-duration:.3s}@-webkit-keyframes nav{0%{top:-50px}to{top:0}}@keyframes nav{0%{top:-50px}to{top:0}}",""]),t.exports=e},273:function(t,n,o){"use strict";o.r(n);var e={name:"TheNav",data:function(){return{activeLink:""}},methods:{scrollTo:function(section){document.getElementById(section).scrollIntoView(!0)}},mounted:function(){var t=this,n=this.$refs.nav.offsetTop,o=document.getElementById("about").offsetTop,e=document.getElementById("portfolio").offsetTop,l=document.getElementById("blog").offsetTop,c=document.getElementById("contact").offsetTop;window.addEventListener("resize",(function(){n=t.$refs.nav.offsetTop,o=document.getElementById("about").offsetTop,e=document.getElementById("portfolio").offsetTop,l=document.getElementById("blog").offsetTop,c=document.getElementById("contact").offsetTop})),window.addEventListener("scroll",(function(){var r=window.scrollY;r+20>=n?t.$refs.nav.classList.add("nav-fixed"):t.$refs.nav.classList.remove("nav-fixed"),t.activeLink=r+200<=o?"home":r+200<=e?"about":r+200<=l?"portfolio":r+200<=c?"blog":"contact"}))}},l=(o(243),o(19)),component=Object(l.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("nav",{ref:"nav",staticClass:"navbar navbar-expand-sm py-2"},[t._m(0),t._v(" "),o("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[o("ul",{staticClass:"navbar-nav"},[o("li",{staticClass:"nav-item mt-sm-0 mt-3"},[o("span",{staticClass:"nav-link",class:{active:"home"===t.activeLink},on:{click:function(n){return t.scrollTo("home")}}},[t._v("HOME")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("span",{staticClass:"nav-link",class:{active:"about"===t.activeLink},on:{click:function(n){return t.scrollTo("about")}}},[t._v("ABOUT")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("span",{staticClass:"nav-link",class:{active:"portfolio"===t.activeLink},on:{click:function(n){return t.scrollTo("portfolio")}}},[t._v("PORTFOLIO")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("span",{staticClass:"nav-link",class:{active:"blog"===t.activeLink},on:{click:function(n){return t.scrollTo("blog")}}},[t._v("BLOG")])]),t._v(" "),o("li",{staticClass:"nav-item"},[o("span",{staticClass:"nav-link",class:{active:"contact"===t.activeLink},on:{click:function(n){return t.scrollTo("contact")}}},[t._v("CONTACT")])])])])])}),[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("button",{staticClass:"navbar-toggler ms-auto",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar"}},[o("span",{staticClass:"nav-line"}),t._v(" "),o("span",{staticClass:"material-icons text-white menu"},[t._v("\n      menu\n    ")])])}],!1,null,null,null);n.default=component.exports}}]);