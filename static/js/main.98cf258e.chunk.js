(this["webpackJsonpcooking-ninja"]=this["webpackJsonpcooking-ninja"]||[]).push([[0],{36:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(31),r=c.n(i),s=(c(36),c(15)),o=c(4),j=c(5),l=c(13),u=c(2),d=Object(n.createContext)();function b(e,t){switch(t.type){case"CHANGE_COLOR":return Object(l.a)(Object(l.a)({},e),{},{color:t.payload});case"CHANGE_MODE":return Object(l.a)(Object(l.a)({},e),{},{mode:t.payload});default:return e}}function O(e){var t=e.children,c=Object(n.useReducer)(b,{color:"#58249c",mode:"dark"}),a=Object(j.a)(c,2),i=a[0],r=a[1];return Object(u.jsx)(d.Provider,{value:Object(l.a)(Object(l.a)({},i),{},{changeColor:function(e){r({type:"CHANGE_COLOR",payload:e})},changeMode:function(e){r({type:"CHANGE_MODE",payload:e})}}),children:t})}var h=function(){var e=Object(n.useContext)(d);if(void 0===e)throw new Error("useTheme() must be used inside a ThemeProvider");return e},p=(c(38),c(39),function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(o.m)();return Object(u.jsx)("div",{className:"searchbar",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i("/search?q=".concat(c))},children:[Object(u.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(u.jsx)("input",{type:"text",id:"search",onChange:function(e){return a(e.target.value)}})]})})}),m=function(){var e=h().color;return Object(u.jsx)("div",{className:"navbar",style:{background:e},children:Object(u.jsxs)("nav",{children:[Object(u.jsx)(s.b,{to:"/",className:"brand",children:Object(u.jsx)("h1",{children:"Cooking Ninja"})}),Object(u.jsx)(p,{}),Object(u.jsx)(s.b,{to:"/create",children:"Create Recipe"})]})})},x=c(29);c(51);x.a.initializeApp({apiKey:"AIzaSyBevkz7BYTIaP75FtPdte-TYxuIj6-WSqM",authDomain:"cooking-ninja-site-9822d.firebaseapp.com",projectId:"cooking-ninja-site-9822d",storageBucket:"cooking-ninja-site-9822d.appspot.com",messagingSenderId:"140297065876",appId:"1:140297065876:web:7af44a6a18aaefb348eb81"});var f=x.a.firestore(),v=(c(43),c.p+"static/media/trashcan.cb3c1341.svg"),g=(c(44),function(e){var t=e.recipes,c=h().mode;if(0===t.length)return Object(u.jsx)("div",{className:"error",children:"No recipes found!"});return Object(u.jsx)("div",{className:"recipe-list",children:t.map((function(e){return Object(u.jsxs)("div",{className:"card ".concat(c),children:[Object(u.jsx)("h3",{children:e.title}),Object(u.jsxs)("p",{children:[e.cookingTime," to make."]}),Object(u.jsxs)("div",{children:[e.method.substring(0,100),"..."]}),Object(u.jsx)(s.b,{to:"/recipes/".concat(e.id),children:"Cook This"}),Object(u.jsx)("img",{className:"delete",src:v,onClick:function(){return t=e.id,void f.collection("recipes").doc(t).delete();var t},alt:"delete icon"})]},e.id)}))})}),N=function(){var e=Object(n.useState)(null),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),r=Object(j.a)(i,2),s=r[0],o=r[1],d=Object(n.useState)(null),b=Object(j.a)(d,2),O=b[0],h=b[1];return Object(n.useEffect)((function(){o(!0);var e=f.collection("recipes").onSnapshot((function(e){if(e.empty)h("No recipes found!"),o(!1);else{var t=[];e.docs.forEach((function(e){t.push(Object(l.a)({id:e.id},e.data()))})),a(t),o(!1)}}),(function(e){h(e.message),o(!1)}));return function(){return e()}}),[]),Object(u.jsxs)("div",{className:"home",children:[O&&Object(u.jsx)("p",{className:"error",children:O}),s&&Object(u.jsx)("p",{className:"loading",children:"Loading..."}),c&&Object(u.jsx)(g,{recipes:c})]})},k=c(12),S=c(9),C=c(7),y=c.n(C);c(45);function E(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),r=Object(j.a)(i,2),s=r[0],l=r[1],d=Object(n.useState)(""),b=Object(j.a)(d,2),O=b[0],p=b[1],m=Object(n.useState)(""),x=Object(j.a)(m,2),v=x[0],g=x[1],N=Object(n.useState)([]),C=Object(j.a)(N,2),E=C[0],w=C[1],R=Object(n.useRef)(null),T=Object(o.m)(),A=h().mode,I=function(){var e=Object(S.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:c,ingredients:E,method:s,cookingTime:O+" minutes"},e.prev=2,e.next=5,f.collection("recipes").add(n);case 5:T("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"create ".concat(A),children:[Object(u.jsx)("h2",{className:"page-title",children:"Add a New Recipe"}),Object(u.jsxs)("form",{onSubmit:I,children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Recipe title:"}),Object(u.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)},value:c,required:!0})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Recipe Ingredients:"}),Object(u.jsxs)("div",{className:"ingredients",children:[Object(u.jsx)("input",{type:"text",onChange:function(e){return g(e.target.value)},value:v,ref:R}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault();var t=v.trim();t&&!E.includes(t)&&w((function(e){return[].concat(Object(k.a)(e),[v])})),g(""),R.current.focus()},className:"btn",children:"add"})]})]}),Object(u.jsxs)("p",{children:["Current ingredients: ",E.map((function(e){return Object(u.jsxs)("em",{children:[e,", "]},e)}))]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Recipe Method:"}),Object(u.jsx)("textarea",{onChange:function(e){return l(e.target.value)},value:s,required:!0})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Cooking time (minutes):"}),Object(u.jsx)("input",{type:"number",onChange:function(e){return p(e.target.value)},value:O,required:!0})]}),Object(u.jsx)("button",{className:"btn",children:"Submit"})]})]})}c(46);var w=function(){var e=Object(o.o)().id,t=h().mode,c=Object(n.useState)(null),a=Object(j.a)(c,2),i=a[0],r=a[1],s=Object(n.useState)(!1),d=Object(j.a)(s,2),b=d[0],O=d[1],p=Object(n.useState)(null),m=Object(j.a)(p,2),x=m[0],v=m[1];Object(n.useEffect)((function(){O(!0);var t=f.collection("recipes").doc(e).onSnapshot((function(e){e.exists?(r(Object(l.a)({id:e.id},e.data())),O(!1)):(v("Could not find the recipe"),O(!1))}),(function(e){v(e.message),O(!1)}));return function(){return t()}}),[e]);return Object(u.jsxs)("div",{className:"recipe ".concat(t),children:[x&&Object(u.jsx)("p",{className:"error",children:x}),b&&Object(u.jsx)("p",{className:"loading",children:"Loading..."}),i&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"page-title",children:i.title}),Object(u.jsxs)("p",{children:["Takes ",i.cookingTime," to cook."]}),Object(u.jsx)("ul",{children:i.ingredients.map((function(e){return Object(u.jsx)("li",{children:e},e)}))}),Object(u.jsx)("p",{className:"method",children:i.method}),Object(u.jsx)("button",{onClick:function(){f.collection("recipes").doc(e).update({title:"Updated document"})},children:"Update me"})]})]})},R=(c(47),function(){var e=Object(o.k)().search,t=new URLSearchParams(e).get("q"),c=h().mode,a=Object(n.useState)(null),i=Object(j.a)(a,2),r=i[0],s=i[1],d=Object(n.useState)(!1),b=Object(j.a)(d,2),O=b[0],p=b[1],m=Object(n.useState)(null),x=Object(j.a)(m,2),v=x[0],N=x[1];return Object(n.useEffect)((function(){p(!0);var e=f.collection("recipes").where("title",">=",t).where("title","<=",t+"\uf8ff").onSnapshot((function(e){if(e.empty)N("No recipes found!"),p(!1);else{var t=[];e.docs.forEach((function(e){t.push(Object(l.a)({id:e.id},e.data()))})),s(t),p(!1),N(null)}}),(function(e){N(e.message),p(!1)}));return function(){return e()}}),[t]),Object(u.jsxs)("div",{className:"search ".concat(c),children:[Object(u.jsxs)("h2",{className:"page-title",children:['Recipes including "',t,'"']}),v&&Object(u.jsx)("p",{className:"error",children:v}),O&&Object(u.jsx)("p",{className:"loading",children:"Loading..."}),!v&&!O&&r&&Object(u.jsx)(g,{recipes:r})]})}),T=c.p+"static/media/mode-icon.ee863b98.svg",A=(c(48),["#58249c","#249c6b","#b70233"]),I=function(){var e=h(),t=e.changeColor,c=e.changeMode,n=e.mode;return Object(u.jsxs)("div",{className:"theme-selector",children:[Object(u.jsx)("div",{className:"mode-toggle",children:Object(u.jsx)("img",{onClick:function(){c("dark"===n?"light":"dark")},src:T,alt:"dark/light toggle icon",style:{filter:"dark"===n?"invert(100%)":"invert(20%"}})}),Object(u.jsx)("div",{className:"theme-buttons",children:A.map((function(e){return Object(u.jsx)("div",{onClick:function(){return t(e)},style:{background:e}},e)}))})]})};c(49);var M=function(){var e=h().mode;return Object(u.jsx)("div",{className:"App ".concat(e),children:Object(u.jsxs)(s.a,{basename:"/cooking-ninja-react",children:[Object(u.jsx)(m,{}),Object(u.jsx)(I,{}),Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{path:"/",element:Object(u.jsx)(N,{})}),Object(u.jsx)(o.b,{path:"/create",element:Object(u.jsx)(E,{})}),Object(u.jsx)(o.b,{path:"/search",element:Object(u.jsx)(R,{})}),Object(u.jsx)(o.b,{path:"/recipes/:id",element:Object(u.jsx)(w,{})}),Object(u.jsx)(o.b,{path:"*",element:Object(u.jsx)(o.a,{to:"/"})})]})]})})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{children:Object(u.jsx)(M,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.98cf258e.chunk.js.map