(function(t){function e(e){for(var n,c,a=e[0],s=e[1],l=e[2],d=0,h=[];d<a.length;d++)c=a[d],o[c]&&h.push(o[c][0]),o[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],n=!0,a=1;a<i.length;a++){var s=i[a];0!==o[s]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=i[0]))}return t}var n={},o={app:0},r=[];function c(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=n,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(i,n,function(e){return t[e]}.bind(null,n));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=s;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("64a9"),o=i.n(n);o.a},"3eb5":function(t,e,i){"use strict";var n=i("8452"),o=i.n(n);o.a},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("GenViz")},r=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"genviz"},[i("GridViz",{attrs:{traces:t.traces,info:t.info}})],1)},a=[],s=(i("34ef"),i("6b54"),i("a481"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("Traces")]),i("div",{attrs:{id:"traces"}},t._l(t.traces,function(e,n){return i("div",{key:n},[i("Trace",{attrs:{trace:e,info:t.info,size:t.traceSize,tId:n}})],1)}),0)])}),l=[],u=(i("ac6a"),i("456d"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{height:t.size.w,width:t.size.w,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1"}},[t._l(t.points,function(e,n){return i("circle",{key:n,attrs:{cx:t.xLogicalToPixel(e.x),cy:t.yLogicalToPixel(e.y),r:"3",fill:e.is_outlier?"red":"blue"}})}),i("polygon",{staticStyle:{fill:"rgba(0,0,0,0.3)"},attrs:{points:t.inlierNoisePolygonPoints}}),i("line",{style:"stroke:rgba(0,0,0,0.1);stroke-width:"+4*t.stdLogicalToPixel(10),attrs:{x1:0,y1:t.yLogicalToPixel(0),x2:t.size.w,y2:t.yLogicalToPixel(0)}}),i("line",{staticStyle:{stroke:"rgba(0,0,0,0.7)","stroke-width":"2"},attrs:{x1:-200,y1:t.yLogicalToPixel(t.xPixelToLogical(-200)*t.trace["slope"]+t.trace["intercept"]),x2:t.size.w+200,y2:t.yLogicalToPixel(t.xPixelToLogical(t.size.w+200)*t.trace["slope"]+t.trace["intercept"])}})],2)}),d=[],h=i("2909"),f={name:"Trace",props:["trace","info","size","tId"],computed:{paddingPixels:function(){return.1*this.size.w},actualSize:function(){return this.size.w-2*this.paddingPixels},minX:function(){return Math.min.apply(Math,Object(h["a"])(this.info[0]))},minY:function(){return Math.min.apply(Math,Object(h["a"])(this.trace["y-coords"]))},maxX:function(){return Math.max.apply(Math,Object(h["a"])(this.info[0]))},maxY:function(){return Math.max.apply(Math,Object(h["a"])(this.trace["y-coords"]))},points:function(){var t=this;return this.info[0].map(function(e,i){return{x:e,y:t.trace["y-coords"][i],is_outlier:t.trace["outliers"][i]}})},inlierNoisePolygonPoints:function(){var t=-200,e=this.xPixelToLogical(t)*this.trace["slope"]+this.trace["intercept"],i=this.yLogicalToPixel(e+2*this.trace["inlier_std"]),n=this.yLogicalToPixel(e-2*this.trace["inlier_std"]),o=this.size.w+200,r=this.xPixelToLogical(o)*this.trace["slope"]+this.trace["intercept"],c=this.yLogicalToPixel(r+2*this.trace["inlier_std"]),a=this.yLogicalToPixel(r-2*this.trace["inlier_std"]);return"".concat(t,",").concat(i," ").concat(o,",").concat(c," ").concat(o,",").concat(a," ").concat(t,",").concat(n)}},methods:{xLogicalToPixel:function(t){return this.paddingPixels+this.actualSize*((t-this.minX)/(this.maxX-this.minX))},yLogicalToPixel:function(t){return this.size.w-this.paddingPixels-this.actualSize*((t-this.minY)/(this.maxY-this.minY))},xPixelToLogical:function(t){return(t-this.paddingPixels)/this.actualSize*(this.maxX-this.minX)+this.minX},stdLogicalToPixel:function(t){return t/(this.maxY-this.minY)*this.actualSize}}},w=f,p=i("2877"),g=Object(p["a"])(w,u,d,!1,null,null,null);g.options.__file="Trace.vue";var v=g.exports,x={name:"GridViz",components:{Trace:v},data:function(){return{windowSize:{height:window.innerHeight,width:window.innerWidth}}},props:["traces","info"],computed:{traceSize:function(){var t=Object.keys(this.traces).length,e=t<5?t:5,i=Math.ceil(t/e);return{h:this.windowSize.height/i,w:Math.min(500,(this.windowSize.width-10)/e)}}},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("resize",function(){t.windowSize={height:window.innerHeight,width:window.innerWidth}})})}},y=x,m=(i("3eb5"),i("c275"),Object(p["a"])(y,s,l,!1,null,"2e966a4f",null));m.options.__file="GridViz.vue";var z=m.exports;function T(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,function(t){return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)})}window.clientId=T(),window.vizId=window.location.pathname.replace(/\//g,""),window.socket=new WebSocket("ws://"+window.location.hostname+":"+window.location.port),window.onbeforeunload=function(){window.socket.send(JSON.stringify({clientId:window.clientId,vizId:window.vizId,action:"disconnect"})),window.socket.close()},window.getCSS=function(){for(var t=[],e=0;e<document.styleSheets.length;e++)for(var i=document.styleSheets[e],n=("cssRules"in i?i.cssRules:i.rules),o=0;o<n.length;o++){var r=n[o];"cssText"in r?t.push(r.cssText):t.push(r.selectorText+" {\n"+r.style.cssText+"\n}\n")}return t.join("\n")};var b={name:"GenViz",components:{GridViz:z},data:function(){return{traces:{},info:{}}},methods:{initialize:function(t,e){this.info=t,this.traces=e},putTrace:function(t,e){this.$set(this.traces,t,e)},removeTrace:function(t){this.$delete(this.traces,t)},sendHTML:function(){var t=this.$refs["genviz"].innerHTML+"<style>".concat(window.getCSS(),"</style>");window.socket.send(JSON.stringify({clientId:window.clientId,vizId:window.vizId,action:"save",content:t}))}},mounted:function(){var t=this;window.socket.onopen=function(){window.socket.onmessage=function(e){var i=e.data,n=JSON.parse(i);switch(n.action){case"initialize":t.initialize(n.info,n.traces);break;case"putTrace":t.putTrace(n.tId,n.t);break;case"removeTrace":t.removeTrace(n.tId);break;case"saveHTML":t.sendHTML();break}},window.socket.send(JSON.stringify({clientId:window.clientId,vizId:window.vizId,action:"connect"}))}}},P=b,_=Object(p["a"])(P,c,a,!1,null,null,null);_.options.__file="GenViz.vue";var S=_.exports,k={components:{GenViz:S}},L=k,O=(i("034f"),Object(p["a"])(L,o,r,!1,null,null,null));O.options.__file="App.vue";var j=O.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(j)}}).$mount("#app")},"64a9":function(t,e,i){},8452:function(t,e,i){},c275:function(t,e,i){"use strict";var n=i("ed94"),o=i.n(n);o.a},ed94:function(t,e,i){}});
//# sourceMappingURL=app.870bfca3.js.map