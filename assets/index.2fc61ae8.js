import{d as v,o as d,c as g,a as c,w as s,u as a,S as L,L as k,U as A,b as p,_ as B,M as P,A as D,D as N,e as $,g as C,f as S,r as U,h as V,i as j,j as f,k as h,R as b,H,l as w,t as K,m as q,n as F,p as I,C as R,q as M,B as T,s as W}from"./vendor.dc00f251.js";const z=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const e of o.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&t(e)}).observe(document,{childList:!0,subtree:!0});function l(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(n){if(n.ep)return;n.ep=!0;const o=l(n);fetch(n.href,o)}};z();const G="modulepreload",E={},J="/",O=function(r,l){return!l||l.length===0?r():Promise.all(l.map(t=>{if(t=`${J}${t}`,t in E)return;E[t]=!0;const n=t.endsWith(".css"),o=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const e=document.createElement("link");if(e.rel=n?"stylesheet":G,n||(e.as="script",e.crossOrigin=""),e.href=t,document.head.appendChild(e),n)return new Promise((_,m)=>{e.addEventListener("load",_),e.addEventListener("error",m)})})).then(()=>r())},Q={style:{"margin-right":"12px"}},X=p("span",null,"\u4E2A\u4EBA\u8BBE\u7F6E",-1),Y=p("span",null,"\u9000\u51FA\u767B\u5F55",-1),Z=v({setup(u){return(r,l)=>{const t=B,n=P,o=D,e=N;return d(),g("div",Q,[c(e,null,{overlay:s(()=>[c(n,null,{default:s(()=>[c(t,null,{icon:s(()=>[c(a(L))]),default:s(()=>[X]),_:1}),c(t,null,{icon:s(()=>[c(a(k))]),default:s(()=>[Y]),_:1})]),_:1})]),default:s(()=>[c(o,{shape:"square",size:"small"},{icon:s(()=>[c(a(A))]),_:1})]),_:1})])}}}),ee=p("img",{src:"https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg"},null,-1),te=p("h1",null,"Preview Pro",-1),ne={key:0},oe=v({setup(u){const r=$(),{menuData:l}=C(S(r.getRoutes())),t=U({collapsed:!1,openKeys:[],selectedKeys:[]}),n=V(()=>r.currentRoute.value.matched.concat().map(o=>({path:o.path,breadcrumbName:o.meta.title||""})));return j(()=>{if(r.currentRoute){const o=r.currentRoute.value.matched.concat();t.selectedKeys=o.filter(e=>e.name!=="index").map(e=>e.path),t.openKeys=o.filter(e=>e.path!==r.currentRoute.value.path).map(e=>e.path)}}),(o,e)=>{const _=f("router-view"),m=f("pro-layout");return d(),h(m,{collapsed:a(t).collapsed,"onUpdate:collapsed":e[0]||(e[0]=i=>a(t).collapsed=i),selectedKeys:a(t).selectedKeys,"onUpdate:selectedKeys":e[1]||(e[1]=i=>a(t).selectedKeys=i),openKeys:a(t).openKeys,"onUpdate:openKeys":e[2]||(e[2]=i=>a(t).openKeys=i),menuData:a(l),breadcrumb:{routes:a(n)},fixSiderbar:!0,iconfontUrl:"//at.alicdn.com/t/font_2804900_c2k6gsut3fn.js",layout:"top"},{menuHeaderRender:s(()=>[c(a(b),{to:{path:"/"}},{default:s(()=>[ee,te]),_:1})]),rightContentRender:s(()=>[c(Z)]),breadcrumbRender:s(({route:i,params:x,routes:y})=>[y.indexOf(i)===y.length-1?(d(),g("span",ne,[c(a(H)),w(" "+K(i.breadcrumbName),1)])):(d(),h(a(b),{key:1,to:{path:i.path,params:x}},{default:s(()=>[c(a(q)),w(" "+K(i.breadcrumbName),1)]),_:2},1032,["to"]))]),default:s(()=>[c(_)]),_:1},8,["collapsed","selectedKeys","openKeys","menuData","breadcrumb"])}}});var re=F({history:I(),routes:[{path:"/",name:"index",meta:{title:"Home"},component:oe,redirect:"/welcome",children:[{path:"/welcome",name:"welcome",meta:{title:"Welcome",icon:"icon-icon-test"},component:()=>O(()=>import("./page1.de2c5330.js"),["assets/page1.de2c5330.js","assets/page1.d7edacdd.css","assets/vendor.dc00f251.js","assets/vendor.598db93e.css"])},{path:"/version",name:"version",meta:{title:"Version",icon:"icon-antdesign"},component:()=>O(()=>import("./detail.79598796.js"),["assets/detail.79598796.js","assets/detail.3819d4e6.css","assets/vendor.dc00f251.js","assets/vendor.598db93e.css"])}]}]});var se=(u,r)=>{const l=u.__vccOpts||u;for(const[t,n]of r)l[t]=n;return l};const ae={};function ce(u,r){const l=f("router-view"),t=R;return d(),h(t,null,{default:s(()=>[c(l)]),_:1})}var le=se(ae,[["render",ce]]);M(le).use(re).use(R).use(T).use(W).mount("#app");
