var S=Object.defineProperty,j=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var w=(s,o,r)=>o in s?S(s,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[o]=r,R=(s,o)=>{for(var r in o||(o={}))I.call(o,r)&&w(s,r,o[r]);if(A)for(var r of A(o))M.call(o,r)&&w(s,r,o[r]);return s},V=(s,o)=>j(s,N(o));import{d as E,r as D,o as g,c as y,w as t,a as v,u as c,S as F,C as U,b as e,e as m,t as T,R as q,_ as z,f as G,g as W,h as J,i as Q,j as X,k as O,L as Y,U as Z,l as ee,M as te,A as ne,D as oe,m as ae,n as ue,p as se,q as re,s as le,v as de,x as b,y as B,H as ie,z as $,B as ce,E as _e,F as me,G as pe,I as he,J as L,K as fe,N as ge,O as ve}from"./vendor.9ed021a9.js";const ye=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))a(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const i of d.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerpolicy&&(d.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?d.credentials="include":u.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(u){if(u.ep)return;u.ep=!0;const d=r(u);fetch(u.href,d)}};ye();const ke="modulepreload",K={},xe="/preview-pro/",k=function(o,r){return!r||r.length===0?o():Promise.all(r.map(a=>{if(a=`${xe}${a}`,a in K)return;K[a]=!0;const u=a.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${d}`))return;const i=document.createElement("link");if(i.rel=u?"stylesheet":ke,u||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),u)return new Promise((n,p)=>{i.addEventListener("load",n),i.addEventListener("error",p)})})).then(()=>o())};const be={class:"margin-bottom: 24px"},Ce=v("h3",null,"\u5BFC\u822A\u6A21\u5F0F",-1),Ee=m("\u5DE6\u4FA7\u83DC\u5355\u5E03\u5C40"),Ae=m("\u9876\u90E8\u83DC\u5355\u5E03\u5C40"),we=m("\u6DF7\u5408\u83DC\u5355\u5E03\u5C40"),Re=m("\u56FA\u5B9A Header"),Ve=m("\u56FA\u5B9A \u5DE6\u4FA7\u83DC\u5355"),De=m("\u81EA\u52A8\u5206\u5272\u83DC\u5355"),Fe=v("h3",null,"\u5185\u5BB9\u533A\u57DF",-1),Oe=m("\u9876\u680F"),Be=m("\u9875\u811A"),$e=m("\u83DC\u5355"),Le=m("\u83DC\u5355\u5934"),Ke=E({props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(s,{emit:o}){const r=s,a=D(!1),u=()=>{a.value=!a.value},d=(i,n)=>{const p=V(R({},T(r.modelValue)),{[`${n}`]:i});console.log("newConf",p),o("update:modelValue",p)};return(i,n)=>{const p=q,C=z,x=G,l=W,f=J,h=Q,H=X;return g(),y(H,{visible:a.value,"onUpdate:visible":n[8]||(n[8]=_=>a.value=_),width:300,placement:"right",closable:!1},{handle:t(()=>[v("div",{class:"ant-pro-setting-drawer-handle",onClick:u},[a.value?(g(),y(c(U),{key:1})):(g(),y(c(F),{key:0}))])]),default:t(()=>[v("div",be,[Ce,e(C,{value:s.modelValue.layout,onChange:n[0]||(n[0]=({target:_})=>d(_.value,"layout"))},{default:t(()=>[e(p,{value:"side"},{default:t(()=>[Ee]),_:1}),e(p,{value:"top"},{default:t(()=>[Ae]),_:1}),e(p,{value:"mix"},{default:t(()=>[we]),_:1})]),_:1},8,["value"]),e(x),e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(l,{span:12},{default:t(()=>[Re]),_:1}),e(l,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.fixedHeader,onChange:n[1]||(n[1]=_=>d(_,"fixedHeader"))},null,8,["checked"])]),_:1})]),_:1}),e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(l,{span:12},{default:t(()=>[Ve]),_:1}),e(l,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.fixSiderbar,onChange:n[2]||(n[2]=_=>d(_,"fixSiderbar"))},null,8,["checked"])]),_:1})]),_:1}),e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(l,{span:12},{default:t(()=>[De]),_:1}),e(l,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.splitMenus,onChange:n[3]||(n[3]=_=>d(_,"splitMenus"))},null,8,["checked"])]),_:1})]),_:1}),e(x),Fe,e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(l,{span:12},{default:t(()=>[Oe]),_:1}),e(l,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.headerRender===void 0,onChange:n[4]||(n[4]=_=>d(_===!0&&void 0,"headerRender"))},null,8,["checked"])]),_:1})]),_:1}),e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(l,{span:12},{default:t(()=>[Be]),_:1}),e(l,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.footerRender===void 0,onChange:n[5]||(n[5]=_=>d(_===!0&&void 0,"footerRender"))},null,8,["checked"])]),_:1})]),_:1}),e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(l,{span:12},{default:t(()=>[$e]),_:1}),e(l,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{disabled:"","checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.menu===void 0,onChange:n[6]||(n[6]=_=>d(_===!0&&void 0,"menu"))},null,8,["checked"])]),_:1})]),_:1}),e(h,{style:{"margin-bottom":"12px"}},{default:t(()=>[e(l,{span:12},{default:t(()=>[Le]),_:1}),e(l,{span:12,style:{"text-align":"right"}},{default:t(()=>[e(f,{"checked-children":"\u5F00","un-checked-children":"\u5173",checked:s.modelValue.menuHeaderRender===void 0,onChange:n[7]||(n[7]=_=>d(_===!0&&void 0,"menuHeaderRender"))},null,8,["checked"])]),_:1})]),_:1})])]),_:1},8,["visible"])}}}),Pe={style:{"margin-right":"12px"}},He=v("span",null,"\u4E2A\u4EBA\u8BBE\u7F6E",-1),Se=v("span",null,"\u9000\u51FA\u767B\u5F55",-1),je=E({setup(s){return(o,r)=>{const a=ee,u=te,d=ne,i=oe;return g(),O("div",Pe,[e(i,null,{overlay:t(()=>[e(u,null,{default:t(()=>[e(a,null,{icon:t(()=>[e(c(F))]),default:t(()=>[He]),_:1}),e(a,null,{icon:t(()=>[e(c(Y))]),default:t(()=>[Se]),_:1})]),_:1})]),default:t(()=>[e(d,{shape:"square",size:"small"},{icon:t(()=>[e(c(Z))]),_:1})]),_:1})])}}}),Ne=v("img",{src:"https://alicdn.antdv.com/v2/assets/logo.1ef800a8.svg"},null,-1),Ie=v("h1",null,"Preview Pro",-1),Me={key:0},Ue=E({setup(s){const o=ae(),{menuData:r}=ue(se(o.getRoutes())),a=re({collapsed:!1,openKeys:[],selectedKeys:[]}),u=D({layout:"mix",fixedHeader:!1,fixSiderbar:!1,splitMenus:!1,menuHeaderRender:void 0,footerRender:void 0,headerRender:void 0}),d=le(()=>o.currentRoute.value.matched.concat().map(i=>({path:i.path,breadcrumbName:i.meta.title||""})));return de(()=>{if(o.currentRoute){console.log("router",o.currentRoute.value);const i=o.currentRoute.value.matched.concat();a.selectedKeys=i.filter(n=>n.name!=="index").map(n=>n.path),a.openKeys=i.filter(n=>n.path!==o.currentRoute.value.path).map(n=>n.path)}}),(i,n)=>{const p=Ke,C=b("router-view"),x=b("pro-layout");return g(),y(x,me({collapsed:c(a).collapsed,"onUpdate:collapsed":n[1]||(n[1]=l=>c(a).collapsed=l),selectedKeys:c(a).selectedKeys,"onUpdate:selectedKeys":n[2]||(n[2]=l=>c(a).selectedKeys=l),openKeys:c(a).openKeys,"onUpdate:openKeys":n[3]||(n[3]=l=>c(a).openKeys=l),"menu-data":c(r),breadcrumb:{routes:c(d)},"iconfont-url":"//at.alicdn.com/t/font_2804900_2sp8hxw3ln8.js"},u.value),{menuHeaderRender:t(()=>[e(c(B),{to:{path:"/"}},{default:t(()=>[Ne,Ie]),_:1})]),rightContentRender:t(()=>[e(je)]),breadcrumbRender:t(({route:l,params:f,routes:h})=>[h.indexOf(l)===h.length-1?(g(),O("span",Me,[e(c(ie)),m(" "+$(l.breadcrumbName),1)])):(g(),y(c(B),{key:1,to:{path:l.path,params:f}},{default:t(()=>[e(c(ce)),m(" "+$(l.breadcrumbName),1)]),_:2},1032,["to"]))]),footerRender:t(()=>[e(c(_e),{links:[{title:"Github",href:"https://github.com/sendya/preview-pro"},{title:"Ant Design Vue",href:"https://2x.antdv.com"}],copyright:"2021 \xA9 Sendya"},null,8,["links"])]),default:t(()=>[e(p,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=l=>u.value=l)},null,8,["modelValue"]),e(C)]),_:1},16,["collapsed","selectedKeys","openKeys","menu-data","breadcrumb"])}}});var P=(s,o)=>{const r=s.__vccOpts||s;for(const[a,u]of o)r[a]=u;return r};const Te={};function qe(s,o){const r=b("router-view");return g(),y(r)}var ze=P(Te,[["render",qe]]),Ge=pe({history:he(),routes:[{path:"/",name:"index",meta:{title:"Home"},component:Ue,redirect:"/welcome",children:[{path:"/welcome",name:"welcome",meta:{title:"\u6B22\u8FCE",icon:"icon-icon-test"},component:()=>k(()=>import("./page1.24d42fa2.js"),["assets/page1.24d42fa2.js","assets/index.8524c7f6.css","assets/vendor.9ed021a9.js","assets/vendor.14933662.css"])},{path:"/admins",name:"admins",meta:{title:"\u7BA1\u7406\u9875",icon:"icon-tuijian"},component:ze,redirect:()=>({name:"page1"}),children:[{path:"page-1",name:"page1",meta:{title:"\u4E00\u7EA7\u9875\u9762"},component:()=>k(()=>import("./page1.fcd543e4.js"),["assets/page1.fcd543e4.js","assets/index.8524c7f6.css","assets/index.704e0d38.css","assets/vendor.9ed021a9.js","assets/vendor.14933662.css"])},{path:"page-2",name:"page2",meta:{title:"\u4E8C\u7EA7\u9875\u9762"},component:()=>k(()=>import("./page1.fcd543e4.js"),["assets/page1.fcd543e4.js","assets/index.8524c7f6.css","assets/index.704e0d38.css","assets/vendor.9ed021a9.js","assets/vendor.14933662.css"])},{path:"dynamic-match/:id(\\d+)",name:"dynamic-match",meta:{title:"\u52A8\u6001\u53C2\u6570\u9875\u9762",params:{id:1}},component:()=>k(()=>import("./dynamic-match.8aeb3ac5.js"),["assets/dynamic-match.8aeb3ac5.js","assets/dynamic-match.e00f7e92.css","assets/index.704e0d38.css","assets/vendor.9ed021a9.js","assets/vendor.14933662.css"])}]},{path:"/version",name:"version",meta:{title:"Version",icon:"icon-antdesign"},component:()=>k(()=>import("./detail.09e91720.js"),["assets/detail.09e91720.js","assets/detail.e4ff522d.css","assets/vendor.9ed021a9.js","assets/vendor.14933662.css"])}]}]});const We={};function Je(s,o){const r=b("router-view"),a=L;return g(),y(a,null,{default:t(()=>[e(r)]),_:1})}var Qe=P(We,[["render",Je]]);fe(Qe).use(Ge).use(L).use(ge).use(ve).mount("#app");