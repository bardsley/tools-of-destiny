import{S as C,i as U,s as X,k as w,q as A,a as G,l as k,m as y,r as D,h as d,c as L,n as _,p as q,b as P,D as E,u as B,I as O,j as ue,K as R,M as ae,g as j,d as J,H as V,N as fe,y as ne,z as re,A as oe,B as ie,L as ce,O as Z}from"../chunks/index.466a05aa.js";import{w as he}from"../chunks/index.f83cb8e3.js";import{O as de}from"../chunks/index.14018fbc.js";import{b as me,c as pe}from"../chunks/manifest.d6839a65.js";let W,M;console.log("Load creds from localstorage key:github value: {personalAuthToken:'XXXX'}"),W=localStorage.getItem("github")?JSON.parse(localStorage.getItem("github"))?.personalAuthToken:!1,W&&(M=new de({auth:W}));const ge=async(n,e,r,o,t)=>{if(typeof W>"u"||typeof M>"u")return console.error("Incorrect token",W,M),!1;if(!(n&&n.personalAuthToken&&n.repoName&&n.personalAuthToken))return console.error("Incorrect gitConfig",n),!1;let s={data:{content:""}},u=`${e}.txt`;try{s=await M.request("GET /repos/{owner}/{repo}/contents/{path}",{owner:n.owner,repo:n.repoName,path:u,headers:{}})}catch{console.log("File does not exist",u)}finally{console.log(s?.data)}let l=atob(s?.data?.content),f=new RegExp(`(//${r}start)([\\s\\S.]*?)(//${r}end)

`,"gm");l=l.replace(f,""),l=l.replace(/[\n\r]{3,}/gm,`

`);let p=l+`//${r}start
// ${o}
`+t+`
//${r}end

`,v={owner:"bardsley",repo:"wishwall",path:u,message:"Commit from the JSss",committer:{name:"perk-o-lator",email:"riven@destiny.tools"},content:btoa(p),headers:{}};s?.data?.sha&&(v={...v,sha:s?.data?.sha}),console.log(v);const h=await M.request("PUT /repos/{owner}/{repo}/contents/{path}",v);return console.log(h),h?.data?.content?.download_url};function x(n){let e,r,o,t,s,u,l;return{c(){e=w("button"),r=A("Copy to Clipboard"),o=G(),t=w("button"),s=A("Add To Git"),this.h()},l(f){e=k(f,"BUTTON",{class:!0});var p=y(e);r=D(p,"Copy to Clipboard"),p.forEach(d),o=L(f),t=k(f,"BUTTON",{class:!0});var v=y(t);s=D(v,"Add To Git"),v.forEach(d),this.h()},h(){_(e,"class","svelte-1gdozns"),_(t,"class","svelte-1gdozns")},m(f,p){P(f,e,p),E(e,r),P(f,o,p),P(f,t,p),E(t,s),u||(l=[R(e,"click",n[3]),R(e,"touch",n[3]),R(t,"click",n[4]),R(t,"touch",n[4])],u=!0)},p:O,d(f){f&&d(e),f&&d(o),f&&d(t),u=!1,ae(l)}}}function _e(n){let e,r,o=n[0].length+"",t,s,u,l,f,p,v,h,g,S,b=n[1]?.message+"",T,c,a=n[0].length>0&&x(n);return{c(){e=w("h3"),r=A("Generated "),t=A(o),s=A(` Perk Combos for DIM \r
    `),a&&a.c(),u=G(),l=w("textarea"),p=w("br"),v=G(),h=w("p"),g=w("a"),S=w("span"),T=A(b),this.h()},l(i){e=k(i,"H3",{class:!0});var m=y(e);r=D(m,"Generated "),t=D(m,o),s=D(m,` Perk Combos for DIM \r
    `),a&&a.l(m),m.forEach(d),u=L(i),l=k(i,"TEXTAREA",{id:!0,style:!0,class:!0}),y(l).forEach(d),p=k(i,"BR",{}),v=L(i),h=k(i,"P",{id:!0,class:!0});var N=y(h);g=k(N,"A",{href:!0,class:!0});var I=y(g);S=k(I,"SPAN",{class:!0});var z=y(S);T=D(z,b),z.forEach(d),I.forEach(d),N.forEach(d),this.h()},h(){_(e,"class","svelte-1gdozns"),_(l,"id","wish-wall"),q(l,"height",Math.min(n[2].length*1.125,20)+"em"),l.value=f=""+n[2].join(`
`)+`\r
`,_(l,"class","svelte-1gdozns"),_(S,"class","svelte-1gdozns"),_(g,"href",c=n[1]?.url),_(g,"class","svelte-1gdozns"),_(h,"id","status"),_(h,"class","svelte-1gdozns")},m(i,m){P(i,e,m),E(e,r),E(e,t),E(e,s),a&&a.m(e,null),P(i,u,m),P(i,l,m),P(i,p,m),P(i,v,m),P(i,h,m),E(h,g),E(g,S),E(S,T)},p(i,[m]){m&1&&o!==(o=i[0].length+"")&&B(t,o),i[0].length>0?a?a.p(i,m):(a=x(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null),m&4&&q(l,"height",Math.min(i[2].length*1.125,20)+"em"),m&4&&f!==(f=""+i[2].join(`
`)+`\r
`)&&(l.value=f),m&2&&b!==(b=i[1]?.message+"")&&B(T,b),m&2&&c!==(c=i[1]?.url)&&_(g,"href",c)},i:O,o:O,d(i){i&&d(e),a&&a.d(),i&&d(u),i&&d(l),i&&d(p),i&&d(v),i&&d(h)}}}function $(n){return n.every(e=>e<1)}function ve(n,e,r){let o,{selectedPerks:t=[]}=e,{itemID:s=0}=e,{itemName:u=""}=e,{wishes:l=[]}=e,f=new Array(t.length).fill(0),p={message:"",url:""},v=[],h=(c,a)=>`dimwishlist:item=${c}&perks=${t[0][a[0]]},${t[1][a[1]]},${t[2][a[2]]},${t[3][a[3]]}`,g=()=>{let c=document.getElementById("wish-wall");c.select(),c.setSelectionRange(0,99999),navigator.clipboard.writeText(c.value)};ue(()=>{if(console.log(`Updated Wishlist
----------------`),T("Start"),o)console.log("Not enough options");else{for(r(0,l=[]),t.forEach((c,a)=>{f[a]=c.length-1});!$(f)&&b<100;)r(0,l=[...l,h(s,f)]),f[0]>0?f[0]-=1:(f[0]=t[0].length-1,f[1]>0?f[1]-=1:(f[1]=t[1].length-1,f[2]>0?f[2]-=1:(f[2]=t[2].length-1,f[3]>0?f[3]-=1:f[3]=t[3].length-1))),b+=1;T("Last Wish"),r(0,l=[...l,h(s,f)]),r(2,v=[`// ${u}`,"// - perks from perk-o-lator https://destiny.tools/perk-o-lator",...l])}b=0});let S=c=>{let a=localStorage.getItem("github");a&&(a=JSON.parse(a)),l.length>0&&a&&a.personalAuthToken&&a.repoName&&a.owner&&a.fileName&&a.personalAuthToken&&ge(a,a.fileName,s,u,l.join(`
`)).then(m=>{r(1,p={message:"Saved to "+m,url:m})},m=>{r(1,p={message:"Failed"})})},b=0,T=c=>{console.debug("----",c,"----",`
Done?`,$(f),`
Indices`,f,"Perks",t)};return n.$$set=c=>{"selectedPerks"in c&&r(5,t=c.selectedPerks),"itemID"in c&&r(6,s=c.itemID),"itemName"in c&&r(7,u=c.itemName),"wishes"in c&&r(0,l=c.wishes)},n.$$.update=()=>{n.$$.dirty&32&&t.forEach((c,a)=>{f[a]=c.length-1}),n.$$.dirty&32&&(o=t.some(c=>c.length<1))},[l,p,v,g,S,t,s,u]}class we extends C{constructor(e){super(),U(this,e,ve,_e,X,{selectedPerks:5,itemID:6,itemName:7,wishes:0})}}function ke(n){let e,r,o,t;return{c(){e=w("span"),r=A("Loading"),o=G(),t=w("small"),this.h()},l(s){e=k(s,"SPAN",{id:!0});var u=y(e);r=D(u,"Loading"),u.forEach(d),o=L(s),t=k(s,"SMALL",{});var l=y(t);l.forEach(d),this.h()},h(){_(e,"id","loader")},m(s,u){P(s,e,u),E(e,r),P(s,o,u),P(s,t,u)},p:O,i:O,o:O,d(s){s&&d(e),s&&d(o),s&&d(t)}}}class be extends C{constructor(e){super(),U(this,e,null,ke,X,{})}}function ee(n,e,r){const o=n.slice();return o[13]=e[r],o[15]=r,o}function te(n,e,r){const o=n.slice();return o[16]=e[r],o}function Ee(n){let e,r;return e=new be({}),{c(){ne(e.$$.fragment)},l(o){re(e.$$.fragment,o)},m(o,t){oe(e,o,t),r=!0},p:O,i(o){r||(j(e.$$.fragment,o),r=!0)},o(o){J(e.$$.fragment,o),r=!1},d(o){ie(e,o)}}}function ye(n){let e,r,o,t,s,u,l,f,p,v,h,g,S,b,T,c=n[5],a=[];for(let i=0;i<c.length;i+=1)a[i]=le(ee(n,c,i));return b=new we({props:{selectedPerks:n[1],itemID:n[3],itemName:n[4]}}),{c(){e=w("header"),r=w("h1"),o=A(n[4]),t=G(),s=w("p"),u=w("a"),l=A("Light.GG"),f=G(),p=w("div"),v=w("div"),h=w("div");for(let i=0;i<a.length;i+=1)a[i].c();g=G(),S=w("div"),ne(b.$$.fragment),this.h()},l(i){e=k(i,"HEADER",{class:!0});var m=y(e);r=k(m,"H1",{class:!0});var N=y(r);o=D(N,n[4]),N.forEach(d),t=L(m),s=k(m,"P",{class:!0});var I=y(s);u=k(I,"A",{href:!0,target:!0,class:!0});var z=y(u);l=D(z,"Light.GG"),z.forEach(d),I.forEach(d),m.forEach(d),f=L(i),p=k(i,"DIV",{class:!0});var F=y(p);v=k(F,"DIV",{class:!0});var K=y(v);h=k(K,"DIV",{class:!0});var Q=y(h);for(let H=0;H<a.length;H+=1)a[H].l(Q);Q.forEach(d),K.forEach(d),g=L(F),S=k(F,"DIV",{class:!0});var Y=y(S);re(b.$$.fragment,Y),Y.forEach(d),F.forEach(d),this.h()},h(){_(r,"class","svelte-fc7gww"),_(u,"href","https://www.light.gg/db/items/"+n[3]),_(u,"target","_blank"),_(u,"class","svelte-fc7gww"),_(s,"class","svelte-fc7gww"),_(e,"class","svelte-fc7gww"),_(h,"class","perks svelte-fc7gww"),_(v,"class","selector"),_(S,"class","cut-n-paste"),_(p,"class","columns svelte-fc7gww")},m(i,m){P(i,e,m),E(e,r),E(r,o),E(e,t),E(e,s),E(s,u),E(u,l),P(i,f,m),P(i,p,m),E(p,v),E(v,h);for(let N=0;N<a.length;N+=1)a[N]&&a[N].m(h,null);E(p,g),E(p,S),oe(b,S,null),T=!0},p(i,m){if(m&96){c=i[5];let I;for(I=0;I<c.length;I+=1){const z=ee(i,c,I);a[I]?a[I].p(z,m):(a[I]=le(z),a[I].c(),a[I].m(h,null))}for(;I<a.length;I+=1)a[I].d(1);a.length=c.length}const N={};m&2&&(N.selectedPerks=i[1]),b.$set(N)},i(i){T||(j(b.$$.fragment,i),T=!0)},o(i){J(b.$$.fragment,i),T=!1},d(i){i&&d(e),i&&d(f),i&&d(p),ce(a,i),ie(b)}}}function se(n){let e,r,o;return{c(){e=w("a"),this.h()},l(t){e=k(t,"A",{"data-perkid":!0,"data-colid":!0,class:!0,style:!0});var s=y(e);s.forEach(d),this.h()},h(){_(e,"data-perkid",n[16].id),_(e,"data-colid",n[15]),_(e,"class","perk "+n[16].enhanced+" svelte-fc7gww"),q(e,"background-image","url('https://www.bungie.net"+n[16].icon+"')")},m(t,s){P(t,e,s),r||(o=[R(e,"click",Z(n[6])),R(e,"touch",Z(n[6]))],r=!0)},p:O,d(t){t&&d(e),r=!1,ae(o)}}}function le(n){let e,r,o=n[13],t=[];for(let s=0;s<o.length;s+=1)t[s]=se(te(n,o,s));return{c(){e=w("div");for(let s=0;s<t.length;s+=1)t[s].c();r=G(),this.h()},l(s){e=k(s,"DIV",{class:!0});var u=y(e);for(let l=0;l<t.length;l+=1)t[l].l(u);r=L(u),u.forEach(d),this.h()},h(){_(e,"class","perkCol")},m(s,u){P(s,e,u);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(e,null);E(e,r)},p(s,u){if(u&96){o=s[13];let l;for(l=0;l<o.length;l+=1){const f=te(s,o,l);t[l]?t[l].p(f,u):(t[l]=se(f),t[l].c(),t[l].m(e,r))}for(;l<t.length;l+=1)t[l].d(1);t.length=o.length}},d(s){s&&d(e),ce(t,s)}}}function Pe(n){let e=console.log(n[0])+"",r,o,t,s,u,l;const f=[ye,Ee],p=[];function v(h,g){return h[4]?0:1}return s=v(n),u=p[s]=f[s](n),{c(){r=A(e),o=G(),t=w("div"),u.c(),this.h()},l(h){r=D(h,e),o=L(h),t=k(h,"DIV",{class:!0});var g=y(t);u.l(g),g.forEach(d),this.h()},h(){_(t,"class","item svelte-fc7gww")},m(h,g){P(h,r,g),P(h,o,g),P(h,t,g),p[s].m(t,null),l=!0},p(h,[g]){(!l||g&1)&&e!==(e=console.log(h[0])+"")&&B(r,e),u.p(h,g)},i(h){l||(j(u),l=!0)},o(h){J(u),l=!1},d(h){h&&d(r),h&&d(o),h&&d(t),p[s].d()}}}function Ie(n,e,r){let o,t,s;V(n,me,c=>r(7,t=c)),V(n,pe,c=>r(8,s=c));let{data:u}=e;const l=he([[],[],[],[]]);V(n,l,c=>r(1,o=c));const f=window.location.hash.substr(1),p=t[f]?.displayProperties?.name,h=[1,2,3,4].map(c=>t[f]?.sockets.socketEntries[c].randomizedPlugSetHash).filter(c=>c>0).map(c=>s[c].reusablePlugItems.map(a=>a.plugItemHash)),g=new RegExp("Enhanced"),S=h.map(function(c){return c.map(function(a){return{id:a,name:t[a]?.displayProperties?.name,icon:t[a]?.displayProperties?.iconSequences[1]?.frames[0],enhanced:t[a]?.itemTypeDisplayName.match(g)?"enhanced":"basic"}})}),b=(c,a)=>c.includes(a)?c.filter(i=>i!=a):[...c,a];function T(c){c.target.dataset.perkid;let a=c.target.dataset.colid;c.target.classList.toggle("selected"),fe(l,o[a]=b(o[a],c.target.dataset.perkid),o)}return n.$$set=c=>{"data"in c&&r(0,u=c.data)},[u,o,l,f,p,S,T]}class De extends C{constructor(e){super(),U(this,e,Ie,Pe,X,{data:0})}}export{De as default};
