(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(e,t,n){e.exports=n(44)},34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),l=n.n(r),u=(n(34),n(35),function(e){var t=e.buy,n=e.sale,a=e.key,r=e.ccy;return c.a.createElement("div",{className:"valute-item",key:a},c.a.createElement("span",null,r),c.a.createElement("div",{className:"item-title_buy"},"Buy: ",t),c.a.createElement("div",{className:"item-title_sale"},"Sale: ",n))}),i=n(10),o=n(6),s=(n(40),function(){var e=Object(o.c)((function(e){return e.valutesReducer.currentValutes})).map((function(e){return c.a.createElement(u,{key:e.ccy,buy:e.buy,sale:e.sale,ccy:e.ccy})}));return c.a.createElement("div",{className:"currentCursesPage"},c.a.createElement(i.b,{to:"/",className:"btn"},"Conventor Valutes"),c.a.createElement("div",{className:"valuteList"},e))}),v=n(22),m=n.n(v),d=n(27),f=n(8),b=function(){return fetch("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((function(e){return e.json()}))},E={currentValutes:null,isSelectValuteActive:null,isSelectValutePasive:null,inputValue:""},p=function(){return function(){var e=Object(d.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:n=e.sent,console.log(n),t({type:"GET_CURRENT_VALUE",currentValues:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};window._state_=p;var N=n(2),y=n(23),j=n(14),O=(n(43),function(){var e,t,n,r=Object(a.useState)(["valute-list_wrapper"]),l=Object(j.a)(r,2),u=l[0],s=l[1],v=Object(a.useState)(["valute-list_wrapper"]),m=Object(j.a)(v,2),d=m[0],f=m[1],b=Object(a.useState)("0"),E=Object(j.a)(b,2),p=E[0],N=E[1],O=Object(a.useState)("0"),V=Object(j.a)(O,2),_=V[0],S=V[1],g=Object(o.c)((function(e){return e.valutesReducer.currentValutes})),h=Object(o.c)((function(e){return e.valutesReducer.isSelectValuteActive})),C=Object(o.c)((function(e){return e.valutesReducer.isSelectValutePasive})),T=Object(o.b)(),k=Object(a.useCallback)((function(e){T(function(e){return{type:"SELECT_CURRENT_VALUTES",item:e}}(e))}),[T]),w=function(e){return function(){var t,n;R((null===e||void 0===e?void 0:e.ccy)===(null===(t=C)||void 0===t?void 0:t.ccy)?h:C),k((null===e||void 0===e?void 0:e.ccy)===(null===(n=C)||void 0===n?void 0:n.ccy)?C:e),s((function(){var e=u.indexOf("open");return e>-1?u.splice(e-1,1):u}))}},x=null===g||void 0===g?void 0:g.map((function(e){return c.a.createElement("li",{className:"list-item",onClick:w(e),key:e.ccy},e.ccy)})),R=Object(a.useCallback)((function(e){T(function(e){return{type:"SELECT_VISE_VALUTES",item:e}}(e))}),[T]),L=function(e){return function(){var t,n;R((null===e||void 0===e?void 0:e.ccy)===(null===(t=h)||void 0===t?void 0:t.ccy)?h:e),k((null===e||void 0===e?void 0:e.ccy)===(null===(n=h)||void 0===n?void 0:n.ccy)?C:h),f((function(){var e=d.indexOf("open");return e>-1?d.splice(e-1,1):d}))}},U=null===g||void 0===g?void 0:g.map((function(e){return c.a.createElement("li",{className:"list-item",onClick:L(e),key:e.ccy},e.ccy)}));return g&&(h||(h=g[0]),C||(C=g[1])),Object(a.useEffect)((function(){var e,t;N(String((Number(null===(e=C)||void 0===e?void 0:e.sale)/Number(null===(t=h)||void 0===t?void 0:t.sale)*Number(_)).toFixed(2)))}),[null===(e=C)||void 0===e?void 0:e.ccy]),Object(a.useEffect)((function(){var e,t;S(String((Number(null===(e=h)||void 0===e?void 0:e.sale)/Number(null===(t=C)||void 0===t?void 0:t.sale)*Number(p)).toFixed(2)))})),g?c.a.createElement("div",{className:"conventerValutesPage"},c.a.createElement(i.b,{to:"/currentCurses",className:"btn"},"Current Curses"),c.a.createElement("div",{className:"conventer-form"},c.a.createElement("div",{className:"currentValue-valute"}),c.a.createElement("div",{className:"conventer-form_wrapper"},c.a.createElement("div",{className:"form-col form-col_active"},c.a.createElement("div",{className:"active-valute_number"},c.a.createElement("input",{type:"number",name:"",min:"0",value:p,onChange:function(e){var t,n;N(e.currentTarget.value),S(String((Number(null===(t=h)||void 0===t?void 0:t.sale)/Number(null===(n=C)||void 0===n?void 0:n.sale)*Number(e.currentTarget.value)).toFixed(2)))}})),c.a.createElement("div",{className:"active-valute_sign"},c.a.createElement("ul",{className:"valute-list"},c.a.createElement("span",{onClick:function(){d.includes("open")&&d.splice(1,1),s((function(){var e=u.indexOf("open");return e>-1?u.splice(e-1,1):[].concat(Object(y.a)(u),["open"])}))}},null===(t=h)||void 0===t?void 0:t.ccy),c.a.createElement("div",{className:u.join(" ")},x)))),c.a.createElement("div",{className:"form-col form-col_pasive"},c.a.createElement("div",{className:"pasive-valute_number"},c.a.createElement("input",{type:"number",name:"",min:"0",value:_,onChange:function(e){var t,n;S(e.currentTarget.value),N(String((Number(null===(t=C)||void 0===t?void 0:t.sale)/Number(null===(n=h)||void 0===n?void 0:n.sale)*Number(e.currentTarget.value)).toFixed(2)))}})),c.a.createElement("div",{className:"pasive-valute_sign"},c.a.createElement("ul",{className:"valute-list"},c.a.createElement("span",{onClick:function(){u.includes("open")&&u.splice(1,1),f((function(){var e=d.indexOf("open");return e>-1?d.splice(e-1,1):[].concat(Object(y.a)(d),["open"])}))}},null===(n=C)||void 0===n?void 0:n.ccy),c.a.createElement("div",{className:d.join(" ")},U))))))):c.a.createElement("div",null,"Loading...")}),V=function(){Object(o.c)((function(e){return e.valutesReducer.currentValutes}));var e=Object(o.b)(),t=Object(a.useCallback)((function(){e(p())}),[e]);return Object(a.useEffect)((function(){t()}),[]),c.a.createElement("div",{className:"container"},c.a.createElement(N.c,null,c.a.createElement(N.a,{path:"/",exact:!0,render:function(){return c.a.createElement(O,null)}}),c.a.createElement(N.a,{path:"/currentCurses",render:function(){return c.a.createElement(s,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=n(11),S=n(28),g=Object(_.c)({valutesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CURRENT_VALUE":return Object(f.a)(Object(f.a)({},e),{},{currentValutes:t.currentValues});case"SELECT_CURRENT_VALUTES":return Object(f.a)(Object(f.a)({},e),{},{isSelectValuteActive:t.item});case"SELECT_VISE_VALUTES":return Object(f.a)(Object(f.a)({},e),{},{isSelectValutePasive:t.item});case"INPUT_VALUTE":return Object(f.a)(Object(f.a)({},e),{},{inputValue:t.inputText});default:return e}}}),h=Object(_.d)(g,Object(_.a)(S.a));l.a.render(c.a.createElement(i.a,null,c.a.createElement(o.a,{store:h},c.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.a8714419.chunk.js.map