(this.webpackJsonptest3205=this.webpackJsonptest3205||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(20),i=c.n(a),r=(c(25),c(26),c(5)),j=c(8),d=c.n(j),b=c(9),u=c(2);function o(){var e=Object(n.useState)(),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(u.jsxs)("div",{className:"convert",children:[Object(u.jsx)("input",{value:"15 usd in rubles",onKeyPress:function(e){"Enter"===e.key&&d.a.get("https://www.cbr-xml-daily.ru/latest.js").then((function(e){var t=(15/e.data.rates.USD).toFixed(2);s(t)}))}}),Object(u.jsxs)("div",{children:[" ",c," "]}),Object(u.jsx)(b.b,{to:"/course",children:"SEE COURSE"})]})}function l(){Object(n.useEffect)((function(){d.a.get("https://www.cbr-xml-daily.ru/latest.js").then((function(e){var t=e.data.rates.USD,c=e.data.rates.EUR;s(t),b(c)}))}),[]);var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(0),i=Object(r.a)(a,2),j=i[0],b=i[1];return"en-US"===navigator.language?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[" 1 RUB = ",c," USD"]}),Object(u.jsxs)("div",{children:["1 RUB = ",j," EUR"]})]}):Object(u.jsxs)("div",{className:"convert",children:[Object(u.jsxs)("div",{children:[" 1 USD = ","".concat((1/c).toFixed(2))," RUBLES"]}),Object(u.jsxs)("div",{children:[" 1 EUR = ","".concat((1/j).toFixed(2))," RUBLES"]})]})}var O=c(1);var h=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(b.a,{children:Object(u.jsxs)(O.c,{children:[Object(u.jsx)(O.a,{path:"/",element:Object(u.jsx)(o,{})}),Object(u.jsx)(O.a,{path:"/course",element:Object(u.jsx)(l,{})})]})})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),x()}},[[46,1,2]]]);
//# sourceMappingURL=main.4f4f86a4.chunk.js.map