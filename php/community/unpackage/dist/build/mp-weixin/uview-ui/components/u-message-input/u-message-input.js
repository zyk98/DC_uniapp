(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-message-input/u-message-input"],{1745:function(t,e,n){},"2c5e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-message-input",props:{maxlength:{type:[Number,String],default:4},dotFill:{type:Boolean,default:!1},mode:{type:String,default:"box"},value:{type:[String,Number],default:""},breathe:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},fontSize:{type:[String,Number],default:60},activeColor:{type:String,default:"#2979ff"},inactiveColor:{type:String,default:"#606266"},width:{type:[Number,String],default:"80"},disabledKeyboard:{type:Boolean,default:!1}},watch:{maxlength:{immediate:!0,handler:function(t){this.maxlength=Number(t)}},value:{immediate:!0,handler:function(t){t=String(t),this.valueModel=t.substring(0,this.maxlength)}}},data:function(){return{valueModel:""}},computed:{animationClass:function(){var t=this;return function(e){return t.breathe&&t.charArr.length==e?"u-breathe":""}},charArr:function(){return this.valueModel.split("")},charArrLength:function(){return this.charArr.length}},methods:{getVal:function(t){var e=t.detail.value;this.valueModel=e,String(e).length>this.maxlength||(this.$emit("change",e),String(e).length==this.maxlength&&this.$emit("finish",e))}}};e.default=a},3506:function(t,e,n){"use strict";n.r(e);var a=n("2c5e"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=u.a},"42c6":function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}))},5573:function(t,e,n){"use strict";var a=n("1745"),u=n.n(a);u.a},b98f:function(t,e,n){"use strict";n.r(e);var a=n("42c6"),u=n("3506");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("5573");var i,l=n("f0c5"),o=Object(l["a"])(u["default"],a["b"],a["c"],!1,null,"76d1a0a8",null,!1,a["a"],i);e["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-message-input/u-message-input-create-component',
    {
        'uview-ui/components/u-message-input/u-message-input-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b98f"))
        })
    },
    [['uview-ui/components/u-message-input/u-message-input-create-component']]
]);
