(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/componentsB/tabbar/index"],{"27e4":function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{current:0,show:!0,bgColor:"#ffffff",borderTop:!0,list:[{iconPath:"home",selectedIconPath:"home-fill",text:"首页",count:2,isDot:!0,customIcon:!1},{iconPath:"photo",selectedIconPath:"photo-fill",text:"放映厅",customIcon:!1},{iconPath:"/static/uview/example/min_button.png",selectedIconPath:"/static/uview/example/min_button_select.png",text:"发布",midButton:!0,customIcon:!1},{iconPath:"play-right",selectedIconPath:"play-right-fill",text:"直播",customIcon:!1},{iconPath:"account",selectedIconPath:"account-fill",text:"我的",count:23,isDot:!1,customIcon:!1}],midButton:!0,inactiveColor:"#909399",activeColor:"#5098FF"}},methods:{beforeSwitch:function(t){return!0},showChange:function(t){this.show=!t},bgColorChange:function(t){0==t&&(this.activeColor="#5098FF",this.inactiveColor="#909399"),1==t&&(this.activeColor="#D0D0D0",this.inactiveColor="#5A5A5A"),this.bgColor=["#ffffff","#1f1f1d"][t]},borderTopChange:function(t){this.borderTop=!t},badgeChange:function(t){1==t?(this.list[0].count=0,this.list[4].count=0):(this.list[0].count=2,this.list[4].count=23)},minButtonChange:function(t){this.midButton=!t}}};n.default=e},"3a17":function(t,n,o){"use strict";o.r(n);var e=o("7d54"),c=o("dc6d");for(var i in c)"default"!==i&&function(t){o.d(n,t,(function(){return c[t]}))}(i);o("8bf4");var u,a=o("f0c5"),r=Object(a["a"])(c["default"],e["b"],e["c"],!1,null,"259fedd5",null,!1,e["a"],u);n["default"]=r.exports},"4d6b":function(t,n,o){},6712:function(t,n,o){"use strict";(function(t){o("e1a2");e(o("66fd"));var n=e(o("3a17"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("543d")["createPage"])},"7d54":function(t,n,o){"use strict";var e={uTabbar:function(){return Promise.all([o.e("common/vendor"),o.e("uview-ui/components/u-tabbar/u-tabbar")]).then(o.bind(null,"d7b5"))}},c=function(){var t=this,n=t.$createElement;t._self._c},i=[];o.d(n,"b",(function(){return c})),o.d(n,"c",(function(){return i})),o.d(n,"a",(function(){return e}))},"8bf4":function(t,n,o){"use strict";var e=o("4d6b"),c=o.n(e);c.a},dc6d:function(t,n,o){"use strict";o.r(n);var e=o("27e4"),c=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,(function(){return e[t]}))}(i);n["default"]=c.a}},[["6712","common/runtime","common/vendor"]]]);