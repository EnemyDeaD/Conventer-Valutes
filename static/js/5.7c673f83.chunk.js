(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{107:function(e,t,a){"use strict";a.r(t);var l=a(77),n=a(78),c=a(0),r=a.n(c),i=a(20),u=(a(76),a(49),a(13)),o=a(14),v=a(108),s=a(109);t.default=function(){var e,t,a,d,m,p,b,f,y=Object(c.useState)(["valute-list_wrapper"]),N=Object(n.a)(y,2),E=N[0],j=N[1],O=Object(c.useState)(["valute-list_wrapper"]),g=Object(n.a)(O,2),V=g[0],C=g[1],S=Object(c.useState)("0"),_=Object(n.a)(S,2),k=_[0],h=_[1],x=Object(c.useState)("0"),w=Object(n.a)(x,2),F=w[0],P=w[1],T=Object(u.c)((function(e){return e.valutesReducer.currentValutes})),R=Object(u.c)((function(e){return e.valutesReducer.isSelectValuteActive})),J=Object(u.c)((function(e){return e.valutesReducer.isSelectValutePasive})),A=Object(u.b)();T&&(R||(R=T[0]),J||(J=T[1]));var L=function(e,t){return A(t(e))},q=function(e,t,a,l,n,c){return function(){L(t,n),L(a,c),l((function(){var t=e.indexOf("open");return t>-1?e.splice(t-1,1):e}))}},z=function(e,t,a){e.includes("open")&&e.splice(1,1),a((function(){var e=t.indexOf("open");return e>-1?t.splice(e-1,1):[].concat(Object(l.a)(t),["open"])}))},B=null===T||void 0===T?void 0:T.map((function(e){var t,a;return r.a.createElement("li",{className:"list-item",onClick:q(E,(null===e||void 0===e?void 0:e.ccy)===(null===(t=J)||void 0===t?void 0:t.ccy)?J:e,(null===e||void 0===e?void 0:e.ccy)===(null===(a=J)||void 0===a?void 0:a.ccy)?R:J,j,o.a.selectCurrentValutes,o.a.selectViseValutes),key:e.ccy},e.ccy)})),D=null===T||void 0===T?void 0:T.map((function(e){var t,a;return r.a.createElement("li",{className:"list-item",onClick:q(V,(null===e||void 0===e?void 0:e.ccy)===(null===(t=R)||void 0===t?void 0:t.ccy)?J:R,(null===e||void 0===e?void 0:e.ccy)===(null===(a=R)||void 0===a?void 0:a.ccy)?R:e,C,o.a.selectCurrentValutes,o.a.selectViseValutes),key:e.ccy},e.ccy)})),G=function(e,t){h(e),P(t)};return Object(c.useEffect)((function(){var e,t;P(String((Number(null===(e=R)||void 0===e?void 0:e.sale)/Number(null===(t=J)||void 0===t?void 0:t.sale)*Number(k)).toFixed(2)))}),[null===(e=J)||void 0===e?void 0:e.ccy,null===(t=R)||void 0===t?void 0:t.ccy]),T?r.a.createElement("div",{className:"conventerValutesPage"},r.a.createElement(i.b,{to:"/currentCurses"},r.a.createElement(s.a,{variant:"outlined",color:"secondary"},"Current Valutes")),r.a.createElement("div",{className:"conventer-form"},r.a.createElement("div",{className:"currentValue-valute"},r.a.createElement("span",null,"1 ",null===(a=R)||void 0===a?void 0:a.ccy," = ",(Number(null===(d=R)||void 0===d?void 0:d.sale)/Number(null===(m=J)||void 0===m?void 0:m.sale)).toFixed(2)," ",null===(p=J)||void 0===p?void 0:p.ccy)),r.a.createElement("div",{className:"conventer-form_wrapper"},r.a.createElement("div",{className:"form-col form-col_active"},r.a.createElement("div",{className:"active-valute_number"},r.a.createElement(v.a,{type:"number",inputProps:{min:"0"},value:k,onChange:function(e){var t,a;return G(e.currentTarget.value,String((Number(null===(t=R)||void 0===t?void 0:t.sale)/Number(null===(a=J)||void 0===a?void 0:a.sale)*Number(e.currentTarget.value)).toFixed(2)))},placeholder:"valute",color:"secondary"})),r.a.createElement("div",{className:"active-valute_sign"},r.a.createElement("ul",{className:"valute-list"},r.a.createElement("span",{onClick:function(){return z(V,E,j)}},null===(b=R)||void 0===b?void 0:b.ccy),r.a.createElement("div",{className:E.join(" ")},B)))),r.a.createElement("div",{className:"form-col form-col_pasive"},r.a.createElement("div",{className:"pasive-valute_number"},r.a.createElement(v.a,{type:"number",inputProps:{min:"0"},value:F,onChange:function(e){var t,a;return G(String((Number(null===(t=J)||void 0===t?void 0:t.sale)/Number(null===(a=R)||void 0===a?void 0:a.sale)*Number(e.currentTarget.value)).toFixed(2)),e.currentTarget.value)},color:"secondary",placeholder:"valute"})),r.a.createElement("div",{className:"pasive-valute_sign"},r.a.createElement("ul",{className:"valute-list"},r.a.createElement("span",{onClick:function(){return z(E,V,C)}},null===(f=J)||void 0===f?void 0:f.ccy),r.a.createElement("div",{className:V.join(" ")},D))))))):r.a.createElement("div",null,"Loading...")}},49:function(e,t,a){},76:function(e,t,a){}}]);
//# sourceMappingURL=5.7c673f83.chunk.js.map