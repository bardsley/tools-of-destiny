import{S as ce,i as _e,s as me,k as d,l as g,m as b,h as _,n as h,b as I,J as C,I as re,q as E,r as D,a as P,c as T,D as u,K as ie,E as ne,L as pe,M as ve,e as he,N as de,O as oe,u as $}from"../chunks/index.1846bc77.js";import{b as ge}from"../chunks/manifest.aebb6e3a.js";import{s as ye}from"../chunks/d2Hardcoded.fcb0776a.js";import{p as be}from"../chunks/stores.d8fdb444.js";import{e as ke}from"../chunks/singletons.ffa9242e.js";import"../chunks/navigation.06e64111.js";function fe(r,e,l){const s=r.slice();return s[10]=e[l],s}function we(r){let e;return{c(){e=E("Loading d2 Database")},l(l){e=D(l,"Loading d2 Database")},m(l,s){I(l,e,s)},p:C,d(l){l&&_(e)}}}function Se(r){let e,l,s,t,i,a,f,v;function w(o,n){if(o[1].length>0)return De;if(o[0])return Ee}let y=w(r),c=y&&y(r);return{c(){e=d("h1"),l=E("Search for a weapon"),s=P(),t=d("input"),i=P(),a=d("div"),c&&c.c(),this.h()},l(o){e=g(o,"H1",{});var n=b(e);l=D(n,"Search for a weapon"),n.forEach(_),s=T(o),t=g(o,"INPUT",{type:!0,class:!0}),i=T(o),a=g(o,"DIV",{id:!0,class:!0});var k=b(a);c&&c.l(k),k.forEach(_),this.h()},h(){h(t,"type","text"),h(t,"class","svelte-1nmvyha"),h(a,"id","results"),h(a,"class","svelte-1nmvyha")},m(o,n){I(o,e,n),u(e,l),I(o,s,n),I(o,t,n),ie(t,r[0]),I(o,i,n),I(o,a,n),c&&c.m(a,null),f||(v=[ne(t,"input",r[6]),ne(t,"keyup",function(){pe(r[3](r[0]))&&r[3](r[0]).apply(this,arguments)})],f=!0)},p(o,n){r=o,n&1&&t.value!==r[0]&&ie(t,r[0]),y===(y=w(r))&&c?c.p(r,n):(c&&c.d(1),c=y&&y(r),c&&(c.c(),c.m(a,null)))},d(o){o&&_(e),o&&_(s),o&&_(t),o&&_(i),o&&_(a),c&&c.d(),f=!1,ve(v)}}}function Ee(r){let e;return{c(){e=E("No results")},l(l){e=D(l,"No results")},m(l,s){I(l,e,s)},p:C,d(l){l&&_(e)}}}function De(r){let e,l=r[1],s=[];for(let t=0;t<l.length;t+=1)s[t]=ue(fe(r,l,t));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=he()},l(t){for(let i=0;i<s.length;i+=1)s[i].l(t);e=he()},m(t,i){for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(t,i);I(t,e,i)},p(t,i){if(i&50){l=t[1];let a;for(a=0;a<l.length;a+=1){const f=fe(t,l,a);s[a]?s[a].p(f,i):(s[a]=ue(f),s[a].c(),s[a].m(e.parentNode,e))}for(;a<s.length;a+=1)s[a].d(1);s.length=l.length}},d(t){de(s,t),t&&_(e)}}}function ue(r){let e,l,s,t,i,a,f,v,w=r[10].displayProperties?.name+"",y,c,o,n=r[10]?.itemTypeAndTierDisplayName+"",k,G,M,J,V=r[4](r[10])+"",O,W,K,S,N,Q,j,z,A,B,H,F,L,X,U,Y;return{c(){e=d("div"),l=d("a"),s=d("img"),a=P(),f=d("h1"),v=d("a"),y=E(w),c=P(),o=d("small"),k=E(n),G=P(),M=d("small"),J=E("Season "),O=E(V),K=P(),S=d("div"),N=d("a"),Q=E("Add Rolls"),z=P(),A=d("a"),B=E("Light.GG"),F=P(),L=d("a"),X=E("DataSets"),Y=P(),this.h()},l(m){e=g(m,"DIV",{class:!0});var p=b(e);l=g(p,"A",{href:!0,class:!0});var x=b(l);s=g(x,"IMG",{src:!0,alt:!0,class:!0}),x.forEach(_),a=T(p),f=g(p,"H1",{class:!0});var ee=b(f);v=g(ee,"A",{href:!0,class:!0});var q=b(v);y=D(q,w),c=T(q),o=g(q,"SMALL",{class:!0});var te=b(o);k=D(te,n),te.forEach(_),G=T(q),M=g(q,"SMALL",{class:!0});var Z=b(M);J=D(Z,"Season "),O=D(Z,V),Z.forEach(_),q.forEach(_),ee.forEach(_),K=T(p),S=g(p,"DIV",{class:!0});var R=b(S);N=g(R,"A",{href:!0,class:!0});var se=b(N);Q=D(se,"Add Rolls"),se.forEach(_),z=T(R),A=g(R,"A",{href:!0,target:!0,class:!0});var ae=b(A);B=D(ae,"Light.GG"),ae.forEach(_),F=T(R),L=g(R,"A",{href:!0,target:!0,class:!0});var le=b(L);X=D(le,"DataSets"),le.forEach(_),R.forEach(_),Y=T(p),p.forEach(_),this.h()},h(){oe(s.src,t="https://www.bungie.net"+(r[10]?.displayProperties?.icon||"/none"))||h(s,"src",t),h(s,"alt",""),h(s,"class","svelte-1nmvyha"),h(l,"href",i=r[5](r[10])),h(l,"class","svelte-1nmvyha"),h(o,"class","svelte-1nmvyha"),h(M,"class","svelte-1nmvyha"),h(v,"href",W=r[5](r[10])),h(v,"class","svelte-1nmvyha"),h(f,"class","svelte-1nmvyha"),h(N,"href",j=r[5](r[10])),h(N,"class","svelte-1nmvyha"),h(A,"href",H="https://www.light.gg/db/items/"+r[10].hash),h(A,"target","_blank"),h(A,"class","svelte-1nmvyha"),h(L,"href",U="https://data.destinysets.com/i/InventoryItem:"+r[10].hash),h(L,"target","_blank"),h(L,"class","svelte-1nmvyha"),h(S,"class","actions svelte-1nmvyha"),h(e,"class","result svelte-1nmvyha")},m(m,p){I(m,e,p),u(e,l),u(l,s),u(e,a),u(e,f),u(f,v),u(v,y),u(v,c),u(v,o),u(o,k),u(v,G),u(v,M),u(M,J),u(M,O),u(e,K),u(e,S),u(S,N),u(N,Q),u(S,z),u(S,A),u(A,B),u(S,F),u(S,L),u(L,X),u(e,Y)},p(m,p){p&2&&!oe(s.src,t="https://www.bungie.net"+(m[10]?.displayProperties?.icon||"/none"))&&h(s,"src",t),p&2&&i!==(i=m[5](m[10]))&&h(l,"href",i),p&2&&w!==(w=m[10].displayProperties?.name+"")&&$(y,w),p&2&&n!==(n=m[10]?.itemTypeAndTierDisplayName+"")&&$(k,n),p&2&&V!==(V=m[4](m[10])+"")&&$(O,V),p&2&&W!==(W=m[5](m[10]))&&h(v,"href",W),p&2&&j!==(j=m[5](m[10]))&&h(N,"href",j),p&2&&H!==(H="https://www.light.gg/db/items/"+m[10].hash)&&h(A,"href",H),p&2&&U!==(U="https://data.destinysets.com/i/InventoryItem:"+m[10].hash)&&h(L,"href",U)},d(m){m&&_(e)}}}function Ie(r){let e,l;function s(a,f){return f&4&&(l=null),l==null&&(l=Object.keys(a[2]).length>0),l?Se:we}let t=s(r,-1),i=t(r);return{c(){e=d("div"),i.c(),this.h()},l(a){e=g(a,"DIV",{id:!0,class:!0});var f=b(e);i.l(f),f.forEach(_),this.h()},h(){h(e,"id","search"),h(e,"class","svelte-1nmvyha")},m(a,f){I(a,e,f),i.m(e,null)},p(a,[f]){t===(t=s(a,f))&&i?i.p(a,f):(i.d(1),i=t(a),i&&(i.c(),i.m(e,null)))},i:C,o:C,d(a){a&&_(e),i.d()}}}const Ae=3;let Le=400;function Pe(r,e,l){let s,t;re(r,ge,n=>l(2,s=n)),re(r,be,n=>l(8,t=n));let i=t.url.searchParams.get("q"),a;const f=n=>{n.length>=Ae&&(clearTimeout(a),a=setTimeout(v,Le,n))},v=n=>{if(n){t.url.searchParams.get("q")!==n&&(t.url.searchParams.set("q",n),history.pushState(history.state,"Title",`?${t.url.searchParams.toString()}`));let k=new RegExp(n,"i");l(1,c=Object.values(s).filter(G=>G.equippable&&G.itemType===3&&G.displayProperties?.name.match(k)))}},w=n=>{let k=n?.iconWatermark||n?.iconWatermarkShelved||"";return ye[k]||1},y=n=>`${ke}/items?returnQ=${i}#${n?.hash}`;let c=[];v(i);function o(){i=this.value,l(0,i)}return[i,c,s,f,w,y,o]}class Ve extends ce{constructor(e){super(),_e(this,e,Pe,Ie,me,{})}}export{Ve as default};