(function(t){function e(e){for(var n,o,c=e[0],l=e[1],r=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,r||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,c=1;c<i.length;c++){var l=i[c];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var r=0;r<c.length;r++)e(c[r]);var u=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("e792"),i("0cdd");var n=i("2b0e"),a=i("5f5b");i("ab8b"),i("2dd8");n["default"].use(a["a"]);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("cv")],1)},o=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("sectionLeft"),i("sectionRight")],1)},l=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section-right"},[i("div",{staticClass:"div"}),i("h1",{attrs:{contenteditable:"",spellcheck:"none"}},[t._v("Deniz Sultanoğlu")]),i("h3",{attrs:{contenteditable:"",spellcheck:"none"}},[t._v("Web Developer")]),t._m(0),i("hr",{staticStyle:{width:"80%",color:"black"}}),t._l(t.experience,(function(e){return i("div",{key:e.id,staticClass:"container"},[i("div",{staticClass:"col"},[i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.date=""}}},[t._v(" "+t._s(e.date)+" ")]),i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.company=""}}},[t._v(" "+t._s(e.company)+" ")])]),i("div",{staticClass:"col"},[i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.title=""}}},[t._v(" "+t._s(e.title)+" ")]),i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.description=""}}},[t._v(" "+t._s(e.description)+" ")])])])})),i("button",{staticClass:"btn",staticStyle:{margin:"5px"},on:{click:function(e){return t.field("experience")}}},[i("i",{staticClass:"fa fa-plus",staticStyle:{color:"black"},attrs:{"aria-hidden":"true"}})]),t._m(1),i("hr",{staticStyle:{width:"80%",color:"black"}}),t._l(t.education,(function(e){return i("div",{key:e.id,staticClass:"container"},[i("div",{staticClass:"col"},[i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.date=""}}},[t._v(" "+t._s(e.date)+" ")]),i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.company=""}}},[t._v(" "+t._s(e.company)+" ")])]),i("div",{staticClass:"col"},[i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.title=""}}},[t._v(" "+t._s(e.title)+" ")]),i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.description=""}}},[t._v(" "+t._s(e.description)+" ")])])])})),i("button",{staticClass:"btn",staticStyle:{margin:"5px"},on:{click:function(e){return t.field("education")}}},[i("i",{staticClass:"fa fa-plus",staticStyle:{color:"black"},attrs:{"aria-hidden":"true"}})]),t._m(2),i("hr",{staticStyle:{width:"80%",color:"black"}}),t._l(t.references,(function(e){return i("div",{key:e.id,staticClass:"container"},[i("div",{staticClass:"col"},[i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.date=""}}},[t._v(" "+t._s(e.date)+" ")]),i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.company=""}}},[t._v(" "+t._s(e.company)+" ")]),i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.company=""}}},[t._v(" "+t._s(e.company)+" ")]),i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.company=""}}},[t._v(" "+t._s(e.company)+" ")])]),i("div",{staticClass:"col"},[i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.date=""}}},[t._v(" "+t._s(e.date)+" ")]),i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.company=""}}},[t._v(" "+t._s(e.company)+" ")]),i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.company=""}}},[t._v(" "+t._s(e.company)+" ")]),i("p",{attrs:{contenteditable:"",spellcheck:"none"},on:{click:function(t){e.company=""}}},[t._v(" "+t._s(e.company)+" ")])])])})),i("b-alert",{staticClass:"position-fixed fixed-bottom m-0 rounded-0",staticStyle:{"z-index":"2000"},attrs:{variant:"warning",dismissible:""},model:{value:t.showBottom,callback:function(e){t.showBottom=e},expression:"showBottom"}},[t._v(" En fazla 4 özellik ekleyebilirsiniz. ")])],2)},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"baslik"},[i("i",{staticClass:"fa fa-briefcase icons",attrs:{"aria-hidden":"true"}}),i("h1",[t._v("Experience")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"baslik"},[i("i",{staticClass:"fas fa-school icons",attrs:{"aria-hidden":"true"}}),i("h1",[t._v("Education")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"baslik"},[i("i",{staticClass:"fas fa-pen-alt icons",attrs:{"aria-hidden":"true"}}),i("h1",[t._v("References")])])}],d=(i("a4d3"),i("e01a"),{data:function(){return{showBottom:!1,experience:[{title:"Çalıştığınız pozisyonu giriniz",company:"Şirket adını giriniz",description:"Açıklama giriniz",date:"İşe başlama ve bitiş tarihizi giriniz"}],education:[{title:"Çalıştığınız pozisyonu giriniz",company:"Şirket adını giriniz",description:"Açıklama giriniz",date:"İşe başlama ve bitiş tarihizi giriniz"}],references:[{name:"Çalıştığınız pozisyonu giriniz",company:"Şirket adını giriniz",description:"Açıklama giriniz",date:"İşe başlama ve bitiş tarihizi giriniz"}]}},methods:{field:function(t){"experience"===t?this.experience.length>2?this.showBottom=!0:this.experience.push({title:this.experience[0].title,company:this.experience[0].company,description:this.experience[0].description,date:this.experience[0].date}):this.education.length>2?this.showBottom=!0:this.education.push({title:this.education[0].title,company:this.education[0].company,description:this.education[0].description,date:this.education[0].date})}}}),f=d,p=i("2877"),h=Object(p["a"])(f,r,u,!1,null,null,null),v=h.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"section-left"},[i("img",{staticClass:"img",attrs:{src:t.src,alt:""},on:{click:function(e){return t.$refs.upload.click()}}}),t._m(0),i("input",{ref:"upload",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/png, image/gif, image/jpeg"},on:{change:t.upload}}),i("h1",[t._v("Contact Me")]),i("hr",{staticStyle:{width:"50%"}}),i("ul",{staticClass:"ul-responsive"},t._l(t.contact,(function(e){return i("li",{key:e.id,staticClass:"liste"},[i("div",{staticClass:"div"},[i("i",{class:e.icon}),i("div",{staticClass:"adres",attrs:{contenteditable:"",spellcheck:"none"}},[t._v(" "+t._s(e.title)+" ")])])])})),0),i("h1",[t._v("Pro Skills")]),i("hr",{staticStyle:{width:"50%"}}),i("ul",{staticClass:"ul-responsive"},[t._l(t.fields,(function(e){return i("li",{key:e.id,staticClass:"liste"},[i("label",{directives:[{name:"show",rawName:"v-show",value:!1===t.show,expression:"show === false"}]},[t._v(" "+t._s(e.title)+" ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:!1===t.show,expression:"show === false"}],staticClass:"div"},[i("div",{staticClass:"ozellik",on:{click:t.giris}},[i("b-progress",[i("b-progress-bar",{attrs:{variant:"light",value:e.value}})],1)],1)]),i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.show,expression:"show == true"}],staticClass:"div"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"field.title"}],attrs:{for:"adres"},domProps:{value:e.title},on:{blur:function(e){t.show=!1},keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.show=!1},input:function(i){i.target.composing||t.$set(e,"title",i.target.value)}}}),i("b-form-spinbutton",{staticClass:"textbox",staticStyle:{background:"grey !important"},attrs:{min:"0",max:"100",step:"10"},on:{blur:function(e){t.show=!1},keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.show=!1}},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"field.value"}})],1)])})),i("button",{staticClass:"btn",on:{click:t.field}},[i("i",{staticClass:"fa fa-plus",staticStyle:{color:"white"},attrs:{"aria-hidden":"true"}})])],2),i("h1",[t._v("Follow Me")]),i("hr",{staticStyle:{width:"50%"}}),i("ul",{staticClass:"ul-responsive"},t._l(t.social,(function(e){return i("li",{key:e.id,staticClass:"liste"},[i("div",{staticClass:"div"},[i("i",{class:e.icon}),i("div",{staticClass:"adres",attrs:{contenteditable:"",spellcheck:"none"}},[t._v(" "+t._s(e.title)+" ")])])])})),0),i("b-alert",{staticClass:"position-fixed fixed-bottom m-0 rounded-0",staticStyle:{"z-index":"2000",background:"#fff3cd !important"},attrs:{variant:"warning",dismissible:""},model:{value:t.showBottom,callback:function(e){t.showBottom=e},expression:"showBottom"}},[t._v(" En fazla 4 özellik ekleyebilirsiniz. ")])],1)},b=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image-fill"},[i("i",{staticClass:"fas fa-camera",staticStyle:{background:"transparent"}}),t._v(" Resim Seçiniz ")])}],k={data:function(){return{image:null,fields:[{title:"Özellik",value:50}],showBottom:!1,show:!1,src:"https://kstu.edu.tr/kstu-file/uploads/default-user-image.png",contact:{adres:{icon:"fas fa-map-marker-alt  icons",title:"Kazımdirik, 161. Sk., No: 11, Kat: 3, Daire: 301 - Bornova (Ergene Mah.) Şok marketin Üstü"},telefon:{icon:"fa fa-phone  icons",title:"05355141450"},web:{icon:"fa fa-globe  icons",title:"www.google.com"}},social:{facebook:{icon:"fab fa-facebook-f  icons",title:"www.facebook.com"},twitter:{icon:"fab fa-twitter  icons",title:"www.twitter.com"},linkedin:{icon:"fab fa-linkedin  icons",title:"www.linkedin.com"},github:{icon:"fab fa-github  icons",title:"www.github.com"}}}},methods:{field:function(){this.fields.length>3?this.showBottom=!0:this.fields.push({title:"Özellik",value:""})},giris:function(t){console.log(t),this.show=!0},upload:function(t){var e=this,i=t.target;if(i.files){var n=new FileReader;n.onload=function(t){e.src=t.target.result},this.image=i.files[0],n.readAsDataURL(i.files[0])}}}},g=k,_=Object(p["a"])(g,m,b,!1,null,null,null),w=_.exports,y={components:{sectionRight:v,sectionLeft:w}},C=y,x=Object(p["a"])(C,c,l,!1,null,null,null),z=x.exports,S={name:"App",components:{cv:z}},O=S,j=Object(p["a"])(O,s,o,!1,null,null,null),E=j.exports,B=i("9483");Object(B["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var $=i("2f62");n["default"].use($["a"]);var P=new $["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["default"].config.productionTip=!1,new n["default"]({store:P,render:function(t){return t(E)}}).$mount("#app")}});
//# sourceMappingURL=app.410b1f19.js.map