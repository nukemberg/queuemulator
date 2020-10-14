(function(e){function t(t){for(var r,i,l=t[0],u=t[1],c=t[2],m=0,v=[];m<l.length;m++)i=l[m],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&v.push(n[i][0]),n[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(v.length)v.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,l=1;l<a.length;l++){var u=a[l];0!==n[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var s=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-toolbar-title",{attrs:{dense:""}},[e._v("QueueMulator")]),a("v-spacer"),a("v-container",[a("v-row",{staticClass:"d-flex"},[a("v-col",{attrs:{colls:"2",sm:"1"}},[a("v-subheader",[e._v("Model")])],1),a("v-col",{attrs:{colls:"6",sm:"2"}},[a("v-select",{attrs:{dense:"","single-line":"",items:e.formulas,label:"Models"},model:{value:e.formula,callback:function(t){e.formula=t},expression:"formula"}})],1)],1)],1)],1),a("v-main",[a("v-container",[a(e.formula,{tag:"component"})],1)],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("Chart",{attrs:{name:"queue",ylabel:"Queueing latency",xlabel:"ρ",data:e.data}})],1),a("v-row",[a("v-col",[a("v-slider",{attrs:{label:"\\( \\sigma_\\mu \\)",hint:"Service rate stderr",min:"0.01",max:"5",step:"0.05"},model:{value:e.sigmaService,callback:function(t){e.sigmaService=t},expression:"sigmaService"}}),a("p",[e._v("= "+e._s(e.sigmaService))])],1),a("v-col",[a("v-slider",{attrs:{label:"\\( \\sigma_\\lambda \\)",hint:"Arrival rate stderr",min:"0.01",max:"5",step:"0.05"},model:{value:e.sigmaArrival,callback:function(t){e.sigmaArrival=t},expression:"sigmaArrival"}}),a("p",[e._v("= "+e._s(e.sigmaArrival))])],1)],1),a("v-row",[a("v-slider",{attrs:{label:"\\( \\mu \\)",hint:"Service rate",min:"1",max:"10",step:"0.25"},model:{value:e.mu,callback:function(t){e.mu=t},expression:"mu"}}),a("p",{domProps:{textContent:e._s(e.muFormula)}})],1),a("v-row",[a("p",[e._v("\\[ \\mathbb {E} [W_q] \\approx \\left( \\frac {\\rho} {1 - \\rho} \\right) \\left( \\frac {\\lambda^2 \\sigma_s^2 + \\mu^2 \\sigma_a^2} {2} \\right) \\mu \\]")])]),a("v-row",[a("p",[e._v(" \\( \\sigma_s , \\sigma_a \\) are the "),a("strong",[e._v("standard errors")]),e._v(" of the service and arrival rate ")])])],1)},l=[],u=(a("99af"),a("d81d"),a("2909")),c=a("2ef0"),s=a.n(c);function m(e){return e/(1-e)}function v(e){for(var t=1,a=2;a<=e;a++)t*=a;return t}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.01,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,o=s.a.range(t,a,r),i=s.a.map(o,e);if(!s.a.isUndefined(n)){var l=s.a.last(o),c=s.a.last(i),m=1;while(c<n&&m<20)l=a-Math.pow(r,m),c=e(l),m++,i.push(c),o.push(l)}return[["x"].concat(Object(u["a"])(o)),["y"].concat(Object(u["a"])(i))]}var f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:e.id}})},d=[],h=(a("b0c0"),a("2d5f")),b=a.n(h),w={props:["data","name","xlabel","ylabel"],computed:{id:function(){return"chart-".concat(this.name)}},mounted:function(){this._chart=b.a.generate({bindto:"#"+this.id,data:{columns:this.data,x:"x",type:"line"},point:{show:!1},axis:{x:{label:this.xlabel,max:1,tick:{values:s.a.range(0,1,.1),format:function(e){return e.toPrecision(2)}}},y:{label:this.ylabel,max:100}}})},watch:{data:function(e){this._chart.load({columns:e})}}},_=w,g=a("2877"),x=Object(g["a"])(_,f,d,!1,null,null,null),y=x.exports;function M(e,t,a,r){var n=e/t;return m(n)*(Math.pow(r,2)*Math.pow(e,2)+Math.pow(a,2)*Math.pow(t,2))/2*t}var k={components:{Chart:y},data:function(){return{sigmaService:.1,sigmaArrival:.1,mu:1}},computed:{data:function(){var e=this;return p((function(t){return M(t*e.mu,e.mu,e.sigmaArrival,e.sigmaService)}),0,1,.005,100)},muFormula:function(){return"\\( \\mu = ".concat(this.mu,"\\)")}},methods:{typeset:function(){window.MathJax&&window.MathJax.typeset()}},mounted:function(){this.typeset()},updated:function(){this.typeset()}},C=k,S=a("6544"),V=a.n(S),O=a("62ad"),j=a("a523"),E=a("0fd9"),A=a("ba0d"),P=Object(g["a"])(C,i,l,!1,null,null,null),q=P.exports;V()(P,{VCol:O["a"],VContainer:j["a"],VRow:E["a"],VSlider:A["a"]});var J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("Chart",{attrs:{data:e.data,xlabel:"ρ",ylabel:"Queueing latency"}})],1),a("v-row",[a("v-slider",{attrs:{label:"µ",hint:"Service rate",min:"1",max:"10",step:"0.25"},model:{value:e.mu,callback:function(t){e.mu=t},expression:"mu"}}),a("p",[e._v("µ = "+e._s(e.mu))])],1),a("v-row",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/M/M/1_queue"}},[e._v("The M/M/1 model")])]),a("v-row",[a("p",[e._v("\\[ \\mathbb {E} [W_q] = \\tau \\frac {\\rho} {1 - \\rho} \\]")])]),a("v-row",[a("p",[e._v("\\( \\tau = \\frac 1 \\mu \\) is the "),a("strong",[e._v("mean service time")])])])],1)},T=[];function $(e,t){return m(e)/t}var W={components:{Chart:y},data:function(){return{mu:1}},computed:{data:function(){var e=this;return p((function(t){return $(t,e.mu)}),0,1,.01,100)}},mounted:function(){window.MathJax&&window.MathJax.typeset()}},Q=W,R=Object(g["a"])(Q,J,T,!1,null,null,null),F=R.exports;V()(R,{VContainer:j["a"],VRow:E["a"],VSlider:A["a"]});var K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",[a("Chart",{attrs:{name:"queue",ylabel:"Queueing latency",xlabel:"ρ",data:e.data}})],1),a("v-row",[a("v-slider",{attrs:{label:"µ",hint:"Service rate",min:"1",max:"10",step:"0.25"},model:{value:e.mu,callback:function(t){e.mu=t},expression:"mu"}}),a("p",[e._v("µ = "+e._s(e.mu))])],1),a("v-row",[a("v-slider",{attrs:{label:"Workers",hint:"workers",min:"1",max:"10",step:"1"},model:{value:e.workers,callback:function(t){e.workers=t},expression:"workers"}}),a("p",[e._v("Workers = "+e._s(e.workers))])],1),a("v-row",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/M/M/c_queue"}},[e._v("MMC model")])]),a("v-row",[a("p",[e._v("\\[ \\mathbb E [W_q] = \\frac {\\rho}{1-\\rho} \\text{C} (c, \\lambda / \\mu) + c \\rho \\]")])]),a("v-row",[a("p",[a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Erlang_(unit)#Erlang_C_formula"}},[e._v("The Erlang C function")])]),a("p",[e._v("\\[ {\\displaystyle {\\text{ C}}(c,\\lambda /\\mu )={\\frac {1}{1+\\left(1-\\rho \\right)\\left({\\frac {c!}{(c\\rho )^{c}}}\\right)\\sum _{k=0}^{c-1}{\\frac {(c\\rho )^{k}}{k!}}}}} \\]")])])],1)},B=[];function U(e,t,a){for(var r=0,n=e;n<t;n++)r+=a(n);return r}function z(e,t){return 1/(1+(1-t)*v(e)/Math.pow(e*t,e)*U(0,e-1,(function(a){return Math.pow(e*t,a)/v(a)})))}function D(e,t,a){var r=t*e,n=t*a*e;return z(e,r)/(e*a-n)+1/a}var G={components:{Chart:y},data:function(){return{workers:1,mu:1}},computed:{data:function(){var e=this;return p((function(t){return D(e.workers,t,e.mu)}),0,1,.005,100)}},mounted:function(){window.MathJax.typeset()}},H=G,I=Object(g["a"])(H,K,B,!1,null,null,null),L=I.exports;V()(I,{VContainer:j["a"],VRow:E["a"],VSlider:A["a"]});var N={name:"App",data:function(){return{formula:"MM1",formulas:["Kingman","MM1","MMC"]}},components:{Kingman:q,MM1:F,MMC:L},watch:{}},X=N,Y=a("7496"),Z=a("40dc"),ee=a("f6c4"),te=a("b974"),ae=a("2fa4"),re=a("e0c7"),ne=a("2a7f"),oe=Object(g["a"])(X,n,o,!1,null,null,null),ie=oe.exports;V()(oe,{VApp:Y["a"],VAppBar:Z["a"],VCol:O["a"],VContainer:j["a"],VMain:ee["a"],VRow:E["a"],VSelect:te["a"],VSpacer:ae["a"],VSubheader:re["a"],VToolbarTitle:ne["a"]});var le=a("f309");r["a"].use(le["a"]);var ue=new le["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:ue,render:function(e){return e(ie)}}).$mount("#app")}});
//# sourceMappingURL=app.bf17f528.js.map