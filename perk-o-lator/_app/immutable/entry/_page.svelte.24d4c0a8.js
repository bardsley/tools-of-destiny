import{S as fe,i as ve,s as me,k as _,q as G,a as P,l as p,m as w,r as M,h as d,c as T,n as t,b as ce,D as l,J as le,K as re,I as ne,L as _e,M as pe,H as ie,N as he,u as Z,O as de}from"../chunks/index.65d71a4e.js";import{b as ge}from"../chunks/manifest.d514477d.js";import{s as ye}from"../chunks/d2Hardcoded.1130ecfb.js";import{p as be}from"../chunks/stores.6ea2c3ef.js";import{j as q,e as we}from"../chunks/singletons.8d2eb491.js";q.disable_scroll_handling;const ke=q.goto;q.invalidate;q.invalidateAll;q.preload_data;q.preload_code;q.before_navigate;q.after_navigate;function oe(a,s,h){const u=a.slice();return u[10]=s[h],u}function ue(a){let s,h,u,g,o,S,m,c,E=a[10].displayProperties?.name+"",y,i,n,e=a[10]?.itemTypeAndTierDisplayName+"",r,b,k,C,V=a[3](a[10])+"",H,O,J,A,L,K,W,Q,I,z,j,B,D,F,U,X;return{c(){s=_("div"),h=_("a"),u=_("img"),S=P(),m=_("h1"),c=_("a"),y=G(E),i=P(),n=_("small"),r=G(e),b=P(),k=_("small"),C=G("Season "),H=G(V),J=P(),A=_("div"),L=_("a"),K=G("Add Rolls"),Q=P(),I=_("a"),z=G("Light.GG"),B=P(),D=_("a"),F=G("DataSets"),X=P(),this.h()},l(f){s=p(f,"DIV",{class:!0});var v=w(s);h=p(v,"A",{href:!0,class:!0});var $=w(h);u=p($,"IMG",{src:!0,alt:!0,class:!0}),$.forEach(d),S=T(v),m=p(v,"H1",{class:!0});var x=w(m);c=p(x,"A",{href:!0,class:!0});var N=w(c);y=M(N,E),i=T(N),n=p(N,"SMALL",{class:!0});var ee=w(n);r=M(ee,e),ee.forEach(d),b=T(N),k=p(N,"SMALL",{class:!0});var Y=w(k);C=M(Y,"Season "),H=M(Y,V),Y.forEach(d),N.forEach(d),x.forEach(d),J=T(v),A=p(v,"DIV",{class:!0});var R=w(A);L=p(R,"A",{href:!0,class:!0});var ae=w(L);K=M(ae,"Add Rolls"),ae.forEach(d),Q=T(R),I=p(R,"A",{href:!0,target:!0,class:!0});var te=w(I);z=M(te,"Light.GG"),te.forEach(d),B=T(R),D=p(R,"A",{href:!0,target:!0,class:!0});var se=w(D);F=M(se,"DataSets"),se.forEach(d),R.forEach(d),X=T(v),v.forEach(d),this.h()},h(){he(u.src,g="https://www.bungie.net"+a[10]?.displayProperties?.icon)||t(u,"src",g),t(u,"alt",""),t(u,"class","svelte-1nmvyha"),t(h,"href",o=a[4](a[10])),t(h,"class","svelte-1nmvyha"),t(n,"class","svelte-1nmvyha"),t(k,"class","svelte-1nmvyha"),t(c,"href",O=a[4](a[10])),t(c,"class","svelte-1nmvyha"),t(m,"class","svelte-1nmvyha"),t(L,"href",W=a[4](a[10])),t(L,"class","svelte-1nmvyha"),t(I,"href",j="https://www.light.gg/db/items/"+a[10].hash),t(I,"target","_blank"),t(I,"class","svelte-1nmvyha"),t(D,"href",U="https://data.destinysets.com/i/InventoryItem:"+a[10].hash),t(D,"target","_blank"),t(D,"class","svelte-1nmvyha"),t(A,"class","actions svelte-1nmvyha"),t(s,"class","result svelte-1nmvyha")},m(f,v){ce(f,s,v),l(s,h),l(h,u),l(s,S),l(s,m),l(m,c),l(c,y),l(c,i),l(c,n),l(n,r),l(c,b),l(c,k),l(k,C),l(k,H),l(s,J),l(s,A),l(A,L),l(L,K),l(A,Q),l(A,I),l(I,z),l(A,B),l(A,D),l(D,F),l(s,X)},p(f,v){v&2&&!he(u.src,g="https://www.bungie.net"+f[10]?.displayProperties?.icon)&&t(u,"src",g),v&2&&o!==(o=f[4](f[10]))&&t(h,"href",o),v&2&&E!==(E=f[10].displayProperties?.name+"")&&Z(y,E),v&2&&e!==(e=f[10]?.itemTypeAndTierDisplayName+"")&&Z(r,e),v&2&&V!==(V=f[3](f[10])+"")&&Z(H,V),v&2&&O!==(O=f[4](f[10]))&&t(c,"href",O),v&2&&W!==(W=f[4](f[10]))&&t(L,"href",W),v&2&&j!==(j="https://www.light.gg/db/items/"+f[10].hash)&&t(I,"href",j),v&2&&U!==(U="https://data.destinysets.com/i/InventoryItem:"+f[10].hash)&&t(D,"href",U)},d(f){f&&d(s)}}}function Se(a){let s,h,u,g,o,S,m,c,E,y=a[1],i=[];for(let n=0;n<y.length;n+=1)i[n]=ue(oe(a,y,n));return{c(){s=_("div"),h=_("h1"),u=G("Search for a weapon"),g=P(),o=_("input"),S=P(),m=_("div");for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){s=p(n,"DIV",{id:!0,class:!0});var e=w(s);h=p(e,"H1",{});var r=w(h);u=M(r,"Search for a weapon"),r.forEach(d),g=T(e),o=p(e,"INPUT",{type:!0,class:!0}),S=T(e),m=p(e,"DIV",{id:!0,class:!0});var b=w(m);for(let k=0;k<i.length;k+=1)i[k].l(b);b.forEach(d),e.forEach(d),this.h()},h(){t(o,"type","text"),t(o,"class","svelte-1nmvyha"),t(m,"id","results"),t(m,"class","svelte-1nmvyha"),t(s,"id","search"),t(s,"class","svelte-1nmvyha")},m(n,e){ce(n,s,e),l(s,h),l(h,u),l(s,g),l(s,o),le(o,a[0]),l(s,S),l(s,m);for(let r=0;r<i.length;r+=1)i[r]&&i[r].m(m,null);c||(E=[re(o,"input",a[5]),re(o,"keyup",function(){de(a[2](a[0]))&&a[2](a[0]).apply(this,arguments)})],c=!0)},p(n,[e]){if(a=n,e&1&&o.value!==a[0]&&le(o,a[0]),e&26){y=a[1];let r;for(r=0;r<y.length;r+=1){const b=oe(a,y,r);i[r]?i[r].p(b,e):(i[r]=ue(b),i[r].c(),i[r].m(m,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=y.length}},i:ne,o:ne,d(n){n&&d(s),_e(i,n),c=!1,pe(E)}}}let Ee=400;function Ae(a,s,h){let u,g;ie(a,ge,e=>h(7,u=e)),ie(a,be,e=>h(8,g=e));let o=g.url.searchParams.get("q"),S;const m=e=>{clearTimeout(S),S=setTimeout(c,Ee,e)},c=e=>{if(e&&g.url.searchParams.get("q")!==e&&(g.url.searchParams.set("q",e),ke(`?${g.url.searchParams.toString()}`)),e?.length>3){console.log("Ok lets query",e);let r=new RegExp(e,"i");h(1,i=Object.values(u).filter(b=>b.equippable&&b.itemType===3&&b.displayProperties?.name.match(r)))}},E=e=>{let r=e?.iconWatermark||e?.iconWatermarkShelved||"";return ye[r]||1},y=e=>`${we}/items?returnQ=${o}#${e?.hash}`;let i=[];c(o);function n(){o=this.value,h(0,o)}return[o,i,m,E,y,n]}class Ge extends fe{constructor(s){super(),ve(this,s,Ae,Se,me,{})}}export{Ge as default};
