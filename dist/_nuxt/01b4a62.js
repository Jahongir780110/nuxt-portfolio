(window.webpackJsonp=window.webpackJsonp||[]).push([[3,8,12],{210:function(t,e,o){var content=o(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("840a4844",content,!0,{sourceMap:!1})},211:function(t,e,o){var content=o(223);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("4ff47b62",content,!0,{sourceMap:!1})},219:function(t,e,o){var content=o(246);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("3c027a06",content,!0,{sourceMap:!1})},220:function(t,e,o){"use strict";o(210)},221:function(t,e,o){var l=o(43)(!1);l.push([t.i,'.hexagon[data-v-401fba96]{height:120px;width:140px;position:relative;margin:auto}.hexagon[data-v-401fba96]:after{border-top:60px solid #04c2c9;top:60px}.hexagon[data-v-401fba96]:after,.hexagon[data-v-401fba96]:before{content:"";width:100%;border-left:30px solid transparent;border-right:30px solid transparent;position:absolute;left:0}.hexagon[data-v-401fba96]:before{border-bottom:60px solid #04c2c9}.hexagon .icon[data-v-401fba96]{color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:64px;z-index:100}.title[data-v-401fba96]{font-size:28px;font-weight:500}.desc[data-v-401fba96]{color:#616161}',""]),t.exports=l},222:function(t,e,o){"use strict";o(211)},223:function(t,e,o){var l=o(43)(!1);l.push([t.i,".tech[data-v-24bb62a4]{width:100%;height:35px;background-color:#eee;margin-top:12px;display:flex;align-items:center;position:relative}.level-bar[data-v-24bb62a4]{height:100%;background-color:#00a1a7}.level-name[data-v-24bb62a4]{top:0;left:0;width:110px;color:#fff;background-color:#04c2c9;font-weight:500}.level-name[data-v-24bb62a4],.level-number[data-v-24bb62a4]{position:absolute;display:flex;align-items:center;justify-content:center;height:100%}.level-number[data-v-24bb62a4]{color:#666;font-style:italic;right:10px}@media (max-width:540px){.tech[data-v-24bb62a4]{height:30px}.level-number[data-v-24bb62a4]{display:none}}",""]),t.exports=l},232:function(t,e,o){"use strict";o.r(e);var l={name:"TheSkill",props:["skill"]},n=(o(220),o(19)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-lg-3 col-6 text-center",class:t.skill.mt?"mt-sm-0 mt-5":null},[o("div",{staticClass:"hexagon",attrs:{"data-aos":"flip-right","data-aos-duration":"500","data-aos-delay":t.skill.delay}},[o("span",{staticClass:"icon",class:t.skill.icon.isOutlined?"material-icons-outlined":"material-icons"},[t._v("\n      "+t._s(t.skill.icon.name)+"\n    ")])]),t._v(" "),o("br"),t._v(" "),o("div",{attrs:{"data-aos":"fade","data-aos-duration":"500","data-aos-delay":t.skill.delay}},[o("span",{staticClass:"title"},[t._v(t._s(t.skill.title))]),t._v(" "),o("br"),t._v(" "),o("span",{staticClass:"desc"},[t._v(t._s(t.skill.desc))])])])}),[],!1,null,"401fba96",null);e.default=component.exports},233:function(t,e,o){"use strict";o.r(e);var l={name:"SkillBar",props:["name","width"]},n=(o(222),o(19)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tech"},[o("span",{staticClass:"level-name"},[t._v(t._s(t.name))]),t._v(" "),o("span",{staticClass:"level-bar",style:{width:t.width}}),t._v(" "),o("span",{staticClass:"level-number"},[t._v(t._s(t.width))])])}),[],!1,null,"24bb62a4",null);e.default=component.exports},245:function(t,e,o){"use strict";o(219)},246:function(t,e,o){var l=o(43)(!1);l.push([t.i,'.about[data-v-170595d2]{padding:100px 0;overflow-x:hidden}.heading[data-v-170595d2]{color:#444649;text-align:center;position:relative}.line[data-v-170595d2]{width:80px;height:4px;background-color:#444649;margin:20px auto 0}.me[data-v-170595d2],.skills[data-v-170595d2]{margin-top:80px}.hex-photo[data-v-170595d2]{height:220px;width:260px;position:relative;margin:auto}.hex-photo[data-v-170595d2]:after{border-top:110px solid #04c2c9;top:110px}.hex-photo[data-v-170595d2]:after,.hex-photo[data-v-170595d2]:before{content:"";width:100%;border-left:55px solid transparent;border-right:55px solid transparent;position:absolute;left:0}.hex-photo[data-v-170595d2]:before{border-bottom:110px solid #04c2c9}.me .photo-title[data-v-170595d2]{margin-top:16px;font-size:24px;font-weight:500;color:#616161}.me .photo-desc[data-v-170595d2]{line-height:22px;font-size:18px;width:75%;margin:16px auto 0;color:#616161}.photo-desc .special[data-v-170595d2]{color:#009ada;cursor:pointer}',""]),t.exports=l},274:function(t,e,o){"use strict";o.r(e);var l={name:"AboutSection",data:function(){return{skills:[{icon:{name:"speed",isOutlined:!1},title:"Fast",desc:"Fast load times and lag free interaction, my highest priority",delay:0},{icon:{name:"devices",isOutlined:!1},title:"Responsive",desc:"My layouts will work on any device, big or small.",delay:200},{icon:{name:"lightbulb",isOutlined:!0},title:"Intuitive",desc:"Strong preference for easy to use, intuitive UX/UI.",mt:!0,delay:400},{icon:{name:"published_with_changes",isOutlined:!0},title:"Dynamic",desc:"Websites don't have to be static, I love making pages come to life.",mt:!0,delay:600}],bars:[{name:"CSS",width:"90%"},{name:"HTML",width:"90%"},{name:"JavaScript",width:"80%"},{name:"Vue",width:"90%"},{name:"Node.js",width:"70%"},{name:"Express.js",width:"80%"},{name:"MongoDB",width:"65%"}]}},methods:{scrollTo:function(section){document.getElementById(section).scrollIntoView(!0)}}},n=(o(245),o(19)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about",attrs:{id:"about"}},[o("div",{staticClass:"container"},[t._m(0),t._v(" "),o("div",{staticClass:"row skills"},t._l(t.skills,(function(t){return o("the-skill",{key:t.title,attrs:{skill:t}})})),1),t._v(" "),o("div",{staticClass:"row me align-items-center"},[o("div",{staticClass:"col-lg-6 col-11 text-center mx-auto",attrs:{"data-aos":"slide-right","data-aos-duration":"500"}},[o("div",{staticClass:"hex-photo"}),t._v(" "),o("div",{staticClass:"photo-title"},[t._v("Who's this guy?")]),t._v(" "),o("div",{staticClass:"photo-desc"},[t._v("\n          I'm a Front-End Developer for ProDVD in Tashkent, UZB. I have\n          serious passion for UI effects, animations and creating intuitive,\n          dynamic user experiences. "),o("br"),t._v(" "),o("span",{staticClass:"special",on:{click:function(e){return t.scrollTo("contact")}}},[t._v("Let's make something special")])])]),t._v(" "),o("div",{staticClass:"col-lg-6 col-11 mt-lg-0 mt-5 mx-auto",attrs:{"data-aos":"slide-left","data-aos-duration":"500"}},t._l(t.bars,(function(t){return o("skill-bar",{key:t.name,attrs:{name:t.name,width:t.width}})})),1)])])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row heading"},[o("h1",{attrs:{"data-aos":"fade-right"}},[t._v("ABOUT")]),t._v(" "),o("div",{staticClass:"line",attrs:{"data-aos":"fade-right","data-aos-delay":"200"}})])}],!1,null,"170595d2",null);e.default=component.exports;installComponents(component,{TheSkill:o(232).default,SkillBar:o(233).default})}}]);