var d=(a,r,t)=>new Promise((l,n)=>{var c=s=>{try{e(t.next(s))}catch(o){n(o)}},_=s=>{try{e(t.throw(s))}catch(o){n(o)}},e=s=>s.done?l(s.value):Promise.resolve(s.value).then(c,_);e((t=t.apply(a,r)).next())});import{a as b}from"./axios.js";import{d as g,h as f,r as v,i as x,n as y,o as i,j as h,w as p,c as w,F as B,l as k,q as W,t as C,b as L,u as I,B as S,p as H,m as F,a as u,_ as P}from"./index.js";import{u as V,H as $,a as j}from"./HotspotBox.js";const q="/hotspot/assets/weibo.svg",N=a=>(H("data-v-2957da27"),a=a(),F(),a),U=N(()=>u("div",{class:"weibo_header"},[u("img",{src:q,style:{"margin-right":"8px"},height:"18",alt:""}),u("div",{class:"weibo-top-nav"},"微博热搜")],-1)),z=g({__name:"WeiBoWidget",setup(a){const r=f.fromCurrentLocation(),t=v([]);x(()=>d(this,null,function*(){yield y(),yield c()})),V(()=>{c(),console.log("refresh")},20*60*1e3);function l(e){S.openUrl(`https://s.weibo.com/weibo?q=${e}`)}function n(e){return e.icon_desc?e.icon_desc:e.label_name?e.label_name:e.small_icon_desc}function c(){return d(this,null,function*(){const e=yield _.get("/ajax/side/hotSearch");t.value=e.data.data.realtime,console.info("weibo hot list",t.value)})}const _=b.create({baseURL:"https://weibo.com",withCredentials:!0,timeout:5e4});return(e,s)=>(i(),h(j,{class:"weibo-box",height:I(r).heightPx},{header:p(()=>[U]),body:p(()=>[(i(!0),w(B,null,k(t.value,(o,m)=>(i(),h($,{onClick:D=>l(o.word),key:m,title:o.word,position:m+1},{append:p(()=>[n(o)?(i(),w("span",{key:0,class:"weibo-label",style:W({backgroundColor:o.small_icon_desc_color})},C(n(o)),5)):L("",!0)]),_:2},1032,["onClick","title","position"]))),128))]),_:1},8,["height"]))}});const A=P(z,[["__scopeId","data-v-2957da27"]]),G=g({__name:"WeiBoWidgetView",setup(a){return(r,t)=>(i(),h(A))}});export{G as default};
