(function(e){function t(t){for(var s,r,a=t[0],l=t[1],c=t[2],d=0,h=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(h.length)h.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],s=!0,a=1;a<i.length;a++){var l=i[a];0!==o[l]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=i[0]))}return e}var s={},o={app:0},n=[];function r(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=s,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/ross-chalange/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"3c12":function(e){e.exports=JSON.parse('{"articles":[{"code":3641637,"name":"Lysol  Spray do Dezynfekcji Kwiat Jabłoni 400,ml","weight":0.44,"price":23.99,"stock":22},{"code":1469493,"name":"MONTANA ROJA CZERWONE WYTRAWNE cz.0,75L","weight":1.113,"price":18.49,"stock":1},{"code":2973852,"name":"Adidas UEFA IV EDT 100 ml + SG 250 ml 1 szt","weight":0.622,"price":72.99,"stock":5},{"code":409759,"name":"Lactacyd Femina emulsja do hig.int.z pompką 200 ml","weight":0.269,"price":13.49,"stock":7},{"code":2964980,"name":"Bielenda Zestaw Botanic Spa Opuncja+Aloes 1 szt","weight":0.65,"price":29.99,"stock":0},{"code":1475043,"name":" P_O JA CIĘ! SMOK W KRAWACIE!","weight":0.98,"price":34.9,"stock":0},{"code":1442090,"name":"Monsenhor Vinho Verde B/W 0,75L","weight":1.218,"price":12.59,"stock":15},{"code":3429365,"name":"Yoskine GeishaSecret krem na dzień i noc 50+,50 ml","weight":0.284,"price":57.99,"stock":9},{"code":2934051,"name":"P_Zdrowo, lokalnie, naturalnie., 1 szt.","weight":0.487,"price":29.99,"stock":0},{"code":3401545,"name":"KIDS male klamry do wlosĂłw","weight":1.55,"price":14.99,"stock":3}]}')},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e._m(0),i("div",{staticClass:"articles"},[i("h2",[e._v("Artykuły")]),i("Search",{attrs:{numberLimit:"13",which:"articles",btn:"Sprawdź kod"},on:{findResult:e.findResult,hideResult:e.hideResult}}),e.isResultHidden?e._e():i("div",{class:[e.isResultHidden?"articles__result--hidden":"articles__result"]},[0===e.articlesResult.length?i("div",[i("p",[e._v(" Artykuł o kodzie "),i("span",[e._v(e._s(e.articlesSearchValue))]),e._v(" nie istnieje ")])]):i("div",[i("p",[i("span",[e._v("Nazwa:")]),e._v(" "+e._s(e.articlesResult[0].name))]),i("p",[i("span",[e._v("Kod artykułu:")]),e._v(" "+e._s(e.articlesResult[0].code))]),i("p",[i("span",[e._v("Cena:")]),e._v(" "+e._s(e.articlesResult[0].price))]),i("p",[i("span",[e._v("Stok:")]),e._v(" "+e._s(e.articlesResult[0].stock))])])])],1),i("div",{staticClass:"boxes"},[i("h2",[e._v("Pojemniki")]),i("Search",{attrs:{numberLimit:"6",btn:"Sprawdź i dodaj",which:"boxes"},on:{findResult:e.findResult,hideResult:e.hideResult},scopedSlots:e._u([{key:"boxesSlot",fn:function(){return[i("p",[e._v("boxes")])]},proxy:!0}])}),i("div",{class:[e.isResultHiddenBoxes?"boxes__result--hidden":"boxes__result"]},[0===e.boxesResult.length?i("div",[i("p",[e._v(" Pojemnik o kodzie "),i("span",[e._v(e._s(e.boxesSearchValue))]),e._v(" nie istnieje lub jest nieaktywny ")])]):e._e()]),i("div",{staticClass:"boxes__list"},e._l(e.boxesUserArray,(function(t){return i("div",{key:t.BoxCode},[i("div",{staticClass:"boxes__card"},[i("div",{staticClass:"card__inside"},[i("p",[i("span",[e._v("Kod pojemnika:")]),e._v(" "+e._s(t.BoxCode))]),i("p",[i("span",[e._v("Szerokość: ")]),e._v(e._s(t.Width))]),i("p",[i("span",[e._v("Wysokość: ")]),e._v(e._s(t.Height))]),i("p",[i("span",[e._v("Głębokość:")]),e._v(" "+e._s(t.Depth))])]),i("button",{staticClass:"btn-delete",on:{click:function(i){return e.deleteBox(t)}}},[e._v("usuń")])])])})),0)],1)])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"logo"},[i("div",{staticClass:"logo__circle"})])}],r=(i("4de4"),i("caad"),i("2532"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"input",attrs:{placeholder:"wpisz kod",type:"text",maxlength:e.numberLimit},domProps:{value:e.searchValue},on:{keypress:function(t){return e.isNumber(t)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleClick.apply(null,arguments)},input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),i("button",{staticClass:"btn",on:{click:e.handleClick}},[e._v(e._s(e.btn))])])}),a=[],l={props:["numberLimit","which","btn"],data:function(){return{searchValue:""}},methods:{isNumber:function(e){e=e||window.event;var t=e.which?e.which:e.keyCode;if(!(t<48||t>57))return this.$emit("hideResult",this.which);e.preventDefault()},handleClick:function(){this.$emit("findResult",{value:this.searchValue,which:this.which})}}},c=l,u=i("2877"),d=Object(u["a"])(c,r,a,!1,null,null,null),h=d.exports,p=i("3c12"),f=i("c4fd"),v={name:"App",components:{Search:h},data:function(){return{articlesArray:p.articles,articlesResult:[],articlesSearchValue:null,boxesArray:f.boxes,boxesResult:[],boxesSearchValue:null,boxesUserArray:[],isResultHidden:!0,isResultHiddenBoxes:!0}},methods:{findResult:function(e){"articles"===e.which?(this.articlesResult=this.articlesArray.filter((function(t){return t.code===parseInt(e.value)})),this.articlesSearchValue=e.value,this.isResultHidden=!1):"boxes"===e.which&&(this.boxesResult=this.boxesArray.filter((function(t){return t.BoxCode===e.value})),this.boxesSearchValue=e.value,this.isResultHiddenBoxes=!1,0===this.boxesResult.length||this.boxesUserArray.includes(this.boxesResult[0])||this.boxesUserArray.push(this.boxesResult[0]))},hideResult:function(e){"articles"===e?this.isResultHidden=!0:"boxes"===e&&(this.isResultHiddenBoxes=!0)},deleteBox:function(e){this.boxesUserArray=this.boxesUserArray.filter((function(t){return e!==t}))}}},_=v,x=Object(u["a"])(_,o,n,!1,null,null,null),b=x.exports;i("927c");s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(b)}}).$mount("#app")},"927c":function(e,t,i){},c4fd:function(e){e.exports=JSON.parse('{"boxes":[{"BoxCode":"10001","Width":700,"Height":500,"Depth":350},{"BoxCode":"10002","Width":700,"Height":500,"Depth":350},{"BoxCode":"10003","Width":700,"Height":500,"Depth":350},{"BoxCode":"10004","Width":700,"Height":500,"Depth":350},{"BoxCode":"10005","Width":700,"Height":500,"Depth":350},{"BoxCode":"10006","Width":700,"Height":500,"Depth":350},{"BoxCode":"10007","Width":700,"Height":500,"Depth":350},{"BoxCode":"10008","Width":700,"Height":500,"Depth":350},{"BoxCode":"10009","Width":700,"Height":500,"Depth":350},{"BoxCode":"10010","Width":700,"Height":500,"Depth":350},{"BoxCode":"10011","Width":700,"Height":500,"Depth":350},{"BoxCode":"10012","Width":700,"Height":500,"Depth":350},{"BoxCode":"10013","Width":700,"Height":500,"Depth":350},{"BoxCode":"10014","Width":700,"Height":500,"Depth":350},{"BoxCode":"10015","Width":700,"Height":500,"Depth":350},{"BoxCode":"10016","Width":700,"Height":500,"Depth":350},{"BoxCode":"10017","Width":700,"Height":500,"Depth":350},{"BoxCode":"10018","Width":700,"Height":500,"Depth":350},{"BoxCode":"10019","Width":700,"Height":500,"Depth":350},{"BoxCode":"10020","Width":700,"Height":500,"Depth":350}]}')}});
//# sourceMappingURL=app.00e2e5cf.js.map