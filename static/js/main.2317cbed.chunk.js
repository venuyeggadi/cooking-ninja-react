(this["webpackJsonpcooking-ninja"]=this["webpackJsonpcooking-ninja"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(15),s=c.n(i),a=(c(23),c(6)),j=c(7),o=(c(24),c(0)),d=function(){return Object(o.jsx)("div",{className:"navbar",children:Object(o.jsxs)("nav",{children:[Object(o.jsx)(a.b,{to:"/",className:"brand",children:Object(o.jsx)("h1",{children:"Cooking Ninja"})}),Object(o.jsx)(a.b,{to:"/create",children:"Create Recipe"})]})})},l=c(18),b=c(10),h=c(14),u=c.n(h),O=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)(!1),a=Object(b.a)(s,2),j=a[0],o=a[1],d=Object(n.useState)(null),h=Object(b.a)(d,2),O=h[0],x=h[1];return Object(n.useEffect)((function(){var t=new AbortController,c=function(){var c=Object(l.a)(u.a.mark((function c(){var n,r;return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return o(!0),c.prev=1,c.next=4,fetch(e,{signal:t.signal});case 4:if((n=c.sent).ok){c.next=7;break}throw new Error(n.statusText);case 7:return c.next=9,n.json();case 9:r=c.sent,o(!1),i(r),x(null),c.next=18;break;case 15:c.prev=15,c.t0=c.catch(1),"AbortError"===c.t0.name?console.log("the fetch was aborted"):(o(!1),x("Could not fetch the data"));case 18:case"end":return c.stop()}}),c,null,[[1,15]])})));return function(){return c.apply(this,arguments)}}();return c(),function(){t.abort()}}),[e]),{data:r,isPending:j,error:O}};function x(){return Object({NODE_ENV:"production",PUBLIC_URL:"/cooking-ninja-react",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).HOST||"http://localhost:3000"}c(36),c(37);var p=function(e){var t=e.recipes;return Object(o.jsx)("div",{className:"recipe-list",children:t.map((function(e){return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("h3",{children:e.title}),Object(o.jsxs)("p",{children:[e.cookingTime," to make."]}),Object(o.jsxs)("div",{children:[e.method.substring(0,100),"..."]}),Object(o.jsx)(a.b,{to:"/recipes/".concat(e.id),children:"Cook This"})]},e.id)}))})},f=function(){var e=x(),t=O(e+"/recipes"),c=t.data,n=t.isPending,r=t.error;return Object(o.jsxs)("div",{className:"home",children:[r&&Object(o.jsx)("p",{className:"error",children:r}),n&&Object(o.jsx)("p",{className:"loading",children:"Loading..."}),c&&Object(o.jsx)(p,{recipes:c})]})},m=(c(38),function(){return Object(o.jsx)("div",{children:"Create"})}),v=(c(39),function(){var e=Object(j.f)().id,t=x(),c=O(t+"/recipes/"+e),n=c.data,r=c.isPending,i=c.error;return Object(o.jsxs)("div",{className:"recipe",children:[i&&Object(o.jsx)("p",{className:"error",children:i}),r&&Object(o.jsx)("p",{className:"loading",children:"Loading..."}),n&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"page-title",children:n.title}),Object(o.jsxs)("p",{children:["Takes ",n.cookingTime," to cook."]}),Object(o.jsx)("ul",{children:n.ingredients.map((function(e){return Object(o.jsx)("li",{children:e},e)}))}),Object(o.jsx)("p",{className:"method",children:n.method})]})]})}),g=(c(40),function(){return Object(o.jsx)("div",{children:"Search"})});c(41);var k=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(a.a,{basename:"/cooking-ninja-react",children:[Object(o.jsx)(d,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",children:Object(o.jsx)(f,{})}),Object(o.jsx)(j.a,{path:"/create",children:Object(o.jsx)(m,{})}),Object(o.jsx)(j.a,{path:"/search",children:Object(o.jsx)(g,{})}),Object(o.jsx)(j.a,{exact:!0,path:"/recipes/:id",children:Object(o.jsx)(v,{})})]})]})})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(k,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.2317cbed.chunk.js.map