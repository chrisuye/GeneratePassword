(this.webpackJsonppassword=this.webpackJsonppassword||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(8),a=c.n(i),r=(c(15),c(3)),l=c(6),j=(c(16),c(10)),o=c(1),d=function(){var e=Object(n.useState)(9),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),a=Object(l.a)(i,2),d=a[0],p=a[1],b="abcdefghijklmnopqrstuvwxyz".split(""),u="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),O="0123456789".split(""),h="!@#$%^&*()".split(""),x=Object(n.useState)(Object(r.a)(b)),f=Object(l.a)(x,2),m=f[0],v=f[1],y=function(e){1===e&&(m.includes.apply(m,Object(r.a)(u))?v(m.filter((function(e){return!u.includes(e)}))):v(m.concat.apply(m,Object(r.a)(u)))),2===e&&(m.includes.apply(m,Object(r.a)(O))?v(m.filter((function(e){return!O.includes(e)}))):v(m.concat.apply(m,Object(r.a)(O)))),3===e&&(m.includes.apply(m,Object(r.a)(h))?v(m.filter((function(e){return!h.includes(e)}))):v(m.concat.apply(m,Object(r.a)(h))))};return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"inner",children:[Object(o.jsx)("h1",{children:"Password Generator"}),""!==d?Object(o.jsxs)("div",{className:"password",children:[Object(o.jsx)("p",{children:d}),Object(o.jsx)("button",{onClick:function(){navigator.clipboard.writeText(d)},children:"Copy"})]}):null,Object(o.jsxs)("div",{className:"slide",children:[Object(o.jsxs)("p",{children:["Length: ",c]}),Object(o.jsx)(j.a,{axis:"x",x:c,xmin:9,xmax:20,onChange:function(e){var t=e.x;return s(t)}})]}),Object(o.jsxs)("div",{className:"options",children:[Object(o.jsx)("div",{className:"option",onClick:function(){return y(1)},children:Object(o.jsxs)("p",{children:[" ",Object(o.jsx)("input",{type:"checkbox",checked:m.includes.apply(m,Object(r.a)(u))})," Uppercase Letters"]})}),Object(o.jsx)("div",{className:"option",onClick:function(){return y(2)},children:Object(o.jsxs)("p",{children:[Object(o.jsx)("input",{type:"checkbox",checked:m.includes.apply(m,Object(r.a)(O))}),"Numbers"]})}),Object(o.jsx)("div",{className:"option",onClick:function(){return y(3)},children:Object(o.jsxs)("p",{children:[Object(o.jsx)("input",{type:"checkbox",checked:m.includes.apply(m,Object(r.a)(h))}),"Symbols"]})})]}),Object(o.jsx)("div",{className:"generate",children:Object(o.jsx)("button",{onClick:function(){return function(){for(var e="",t=0;t<c;t++){var n=Math.floor(Math.random()*m.length);e+=m[n]}p(e)}()},children:"Generate"})})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),p()}},[[19,1,2]]]);
//# sourceMappingURL=main.e52ad576.chunk.js.map