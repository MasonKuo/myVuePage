webpackJsonp([0],{0:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{attrs:{id:"menuList"}},[e("ul",[e("li",[e("router-link",{attrs:{to:"/"}},[this._v("Home")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"menu"}},[this._v("Menu")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"movie"}},[this._v("Movie")])],1)])]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},i,!1,function(t){n("s/4l")},null,null).exports,r=n("/ocq"),a=n("8+8L"),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hello"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var c=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(t){n("eah0")},"data-v-56b8eee3",null).exports,l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu"},[e("h1",[this._v(this._s(this.msg))])])},staticRenderFns:[]};var v=n("VU/8")({name:"Menu",data:function(){return{msg:"Welcome to Menu"}}},l,!1,function(t){n("nGy5")},"data-v-38d935d3",null).exports,h=this,m={name:"doubanResource",data:function(){return{articles:[]}},mounted:function(){var t=this;this.$http.jsonp("https://api.douban.com/v2/movie/top250?count=10",{},{headers:{},emulateJSON:!0}).then(function(e){t.articles=e.data.subjects,console.log(e)},function(t){console.log(t)})},methods:{_showMovieDetail:function(t){var e=h;console.log(e.articles)}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"doubanResource"}},[t._m(0),t._v(" "),n("ul",t._l(t.articles,function(e){return n("li",{key:e.key,on:{click:t._showMovieDetail}},[t._v("\n        "+t._s(e.title)+" ("+t._s(e.original_title)+")\n      ")])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("D o u b a n M o v i e")])])}]};var p={name:"Movie",data:function(){return{msg:"Welcome to Movie"}},components:{DoubanResource:n("VU/8")(m,d,!1,function(t){n("Pi/r")},null,null).exports}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu"},[e("DoubanResource")],1)},staticRenderFns:[]};var _=n("VU/8")(p,f,!1,function(t){n("jHhn")},"data-v-34115522",null).exports;o.a.use(r.a),o.a.use(a.a);var M=new r.a({mode:"history",routes:[{path:"/",name:"HelloWorld",component:c},{path:"/menu",name:"Menu",component:v},{path:"/movie",name:"Movie",component:_}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:M,components:{App:s},template:"<App/>"})},"Pi/r":function(t,e){},eah0:function(t,e){},jHhn:function(t,e){},nGy5:function(t,e){},"s/4l":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5f3724cbe489b9093754.js.map