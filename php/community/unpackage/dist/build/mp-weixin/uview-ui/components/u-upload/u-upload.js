(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-upload/u-upload"],{"5bd9":function(e,t,n){"use strict";var i=n("aa14"),s=n.n(i);s.a},"87a5":function(e,t,n){"use strict";n.r(t);var i=n("ccbe"),s=n("d18b");for(var o in s)"default"!==o&&function(e){n.d(t,e,(function(){return s[e]}))}(o);n("5bd9");var r,a=n("f0c5"),u=Object(a["a"])(s["default"],i["b"],i["c"],!1,null,"d44725da",null,!1,i["a"],r);t["default"]=u.exports},aa14:function(e,t,n){},ccbe:function(e,t,n){"use strict";var i={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"b1ed"))},uLineProgress:function(){return n.e("uview-ui/components/u-line-progress/u-line-progress").then(n.bind(null,"67aa"))}},s=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}))},d18b:function(e,t,n){"use strict";n.r(t);var i=n("e58e"),s=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=s.a},e58e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n("4795"));function s(e){return e&&e.__esModule?e:{default:e}}function o(e,t,n,i,s,o,r){try{var a=e[o](r),u=a.value}catch(l){return void n(l)}a.done?t(u):Promise.resolve(u).then(i,s)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(i,s){var r=e.apply(t,n);function a(e){o(r,i,s,a,u,"next",e)}function u(e){o(r,i,s,a,u,"throw",e)}a(void 0)}))}}var a={name:"u-upload",props:{showUploadList:{type:Boolean,default:!0},action:{type:String,default:""},maxCount:{type:[String,Number],default:52},showProgress:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},imageMode:{type:String,default:"aspectFill"},header:{type:Object,default:function(){return{}}},formData:{type:Object,default:function(){return{}}},name:{type:String,default:"file"},sizeType:{type:Array,default:function(){return["original","compressed"]}},sourceType:{type:Array,default:function(){return["album","camera"]}},previewFullImage:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},deletable:{type:Boolean,default:!0},maxSize:{type:[String,Number],default:Number.MAX_VALUE},fileList:{type:Array,default:function(){return[]}},uploadText:{type:String,default:"????????????"},autoUpload:{type:Boolean,default:!0},showTips:{type:Boolean,default:!0},customBtn:{type:Boolean,default:!1},width:{type:[String,Number],default:200},delBgColor:{type:String,default:"#fa3534"},delColor:{type:String,default:"#ffffff"},delIcon:{type:String,default:"close"},toJson:{type:Boolean,default:!0},beforeUpload:{type:Function,default:null}},mounted:function(){},data:function(){return{lists:[],isInCount:!0,uploading:!1}},watch:{fileList:{immediate:!0,handler:function(e){var t=this;e.map((function(e){var n=t.lists.some((function(t){return t.url==e.url}));!n&&t.lists.push({url:e.url,error:!1,progress:100})}))}},lists:function(e){this.$emit("on-list-change",e)}},methods:{clear:function(){this.lists=[]},reUpload:function(){this.uploadFile()},selectFile:function(){var t=this;if(!this.disabled){this.name;var n=this.maxCount,i=this.multiple,s=this.maxSize,o=this.sizeType,r=this.lists,a=(this.camera,this.compressed,this.maxDuration,this.sourceType),u=null,l=n-r.length;u=new Promise((function(t,n){e.chooseImage({count:i?l>9?9:l:1,sourceType:a,sizeType:o,success:t,fail:n})})),u.then((function(e){var o=t.lists.length;e.tempFiles.map((function(e,o){if(i||!(o>=1))if(e.size>s)t.$emit("on-oversize",e,t.lists),t.showToast("???????????????????????????");else{if(n<=r.length)return t.$emit("on-exceed",e,t.lists),void t.showToast("?????????????????????????????????");r.push({url:e.path,progress:0,error:!1})}})),t.$emit("on-choose-complete",t.lists),t.autoUpload&&t.uploadFile(o)})).catch((function(e){}))}},showToast:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];(this.showTips||n)&&e.showToast({title:t,icon:"none"})},upload:function(){this.uploadFile()},retry:function(t){this.lists[t].progress=0,this.lists[t].error=!1,this.lists[t].response=null,e.showLoading({title:"????????????"}),this.uploadFile(t)},uploadFile:function(){var t=arguments,n=this;return r(i.default.mark((function s(){var o,r,a;return i.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(o=t.length>0&&void 0!==t[0]?t[0]:0,!n.disabled){i.next=3;break}return i.abrupt("return");case 3:if(!n.uploading){i.next=5;break}return i.abrupt("return");case 5:if(!(o>=n.lists.length)){i.next=8;break}return n.$emit("on-uploaded",n.lists),i.abrupt("return");case 8:if(n.action){i.next=11;break}return n.showToast("?????????????????????",!0),i.abrupt("return");case 11:if(100!=n.lists[o].progress){i.next=14;break}return 0==n.autoUpload&&n.uploadFile(o+1),i.abrupt("return");case 14:if(!n.beforeUpload||"function"!==typeof n.beforeUpload){i.next=23;break}if(r=n.beforeUpload(o,n.lists),!r||"function"!==typeof r.then){i.next=21;break}return i.next=19,r.then((function(e){})).catch((function(e){return n.uploadFile(o+1)}));case 19:i.next=23;break;case 21:if(!1!==r){i.next=23;break}return i.abrupt("return",n.uploadFile(o+1));case 23:n.lists[o].error=!1,n.uploading=!0,a=e.uploadFile({url:n.action,filePath:n.lists[o].url,name:n.name,formData:n.formData,header:n.header,success:function(e){var t=n.toJson&&n.$u.test.jsonString(e.data)?JSON.parse(e.data):e.data;[200,201].includes(e.statusCode)?(n.lists[o].response=t,n.lists[o].progress=100,n.lists[o].error=!1,n.$emit("on-success",t,o,n.lists)):n.uploadError(o,t)},fail:function(e){n.uploadError(o,e)},complete:function(t){e.hideLoading(),n.uploading=!1,n.uploadFile(o+1),n.$emit("on-change",t,o,n.lists)}}),a.onProgressUpdate((function(e){e.progress>0&&(n.lists[o].progress=e.progress,n.$emit("on-progress",e,o,n.lists))}));case 27:case"end":return i.stop()}}),s)})))()},uploadError:function(e,t){this.lists[e].progress=0,this.lists[e].error=!0,this.lists[e].response=null,this.$emit("on-error",t,e,this.lists),this.showToast("????????????????????????")},deleteItem:function(t){var n=this;e.showModal({title:"??????",content:"??????????????????????????????",success:function(e){e.confirm&&(n.lists[t].process<100&&n.lists[t].process>0&&"undefined"!=typeof n.lists[t].uploadTask&&n.lists[t].uploadTask.abort(),n.lists.splice(t,1),n.$forceUpdate(),n.$emit("on-remove",t,n.lists),n.showToast("????????????"))}})},remove:function(e){e>=0&&e<this.lists.length&&(this.lists.splice(e,1),this.$emit("on-list-change",this.lists))},doPreviewImage:function(t,n){var i=this;if(this.previewFullImage){var s=this.lists.map((function(e){return e.url||e.path}));e.previewImage({urls:s,current:t,success:function(){i.$emit("on-preview",t,i.lists)},fail:function(){e.showToast({title:"??????????????????",icon:"none"})}})}}}};t.default=a}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-upload/u-upload-create-component',
    {
        'uview-ui/components/u-upload/u-upload-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("87a5"))
        })
    },
    [['uview-ui/components/u-upload/u-upload-create-component']]
]);
