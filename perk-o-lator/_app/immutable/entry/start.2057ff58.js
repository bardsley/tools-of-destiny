import{o as xe,t as se}from"../chunks/index.466a05aa.js";import{S as He,a as Ve,I as T,g as Te,f as De,b as _e,c as ie,s as D,i as ge,d as W,P as Ce,e as Be}from"../chunks/singletons.84545ead.js";import{b as F}from"../chunks/paths.0a3cf751.js";function Ge(n,r){return n==="/"||r==="ignore"?n:r==="never"?n.endsWith("/")?n.slice(0,-1):n:r==="always"&&!n.endsWith("/")?n+"/":n}function Ye(n){return n.split("%25").map(decodeURI).join("%25")}function We(n){for(const r in n)n[r]=decodeURIComponent(n[r]);return n}const Xe=["href","pathname","search","searchParams","toString","toJSON"];function Ze(n,r){const f=new URL(n);for(const i of Xe){let m=f[i];Object.defineProperty(f,i,{get(){return r(),m},enumerable:!0,configurable:!0})}return Qe(f),f}function Qe(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const et="/__data.json";function tt(n){return n.replace(/\/$/,"")+et}function Je(n){try{return JSON.parse(sessionStorage[n])}catch{}}function qe(n,r){const f=JSON.stringify(r);try{sessionStorage[n]=f}catch{}}function nt(...n){let r=5381;for(const f of n)if(typeof f=="string"){let i=f.length;for(;i;)r=r*33^f.charCodeAt(--i)}else if(ArrayBuffer.isView(f)){const i=new Uint8Array(f.buffer,f.byteOffset,f.byteLength);let m=i.length;for(;m;)r=r*33^i[--m]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}const ce=window.fetch;window.fetch=(n,r)=>((n instanceof Request?n.method:r?.method||"GET")!=="GET"&&Z.delete(be(n)),ce(n,r));const Z=new Map;function at(n,r){const f=be(n,r),i=document.querySelector(f);if(i?.textContent){const{body:m,...d}=JSON.parse(i.textContent),S=i.getAttribute("data-ttl");return S&&Z.set(f,{body:m,init:d,ttl:1e3*Number(S)}),Promise.resolve(new Response(m,d))}return ce(n,r)}function rt(n,r,f){if(Z.size>0){const i=be(n,f),m=Z.get(i);if(m){if(performance.now()<m.ttl&&["default","force-cache","only-if-cached",void 0].includes(f?.cache))return new Response(m.body,m.init);Z.delete(i)}}return ce(r,f)}function be(n,r){let i=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;if(r?.headers||r?.body){const m=[];r.headers&&m.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&m.push(r.body),i+=`[data-hash="${nt(...m)}"]`}return i}const ot=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function st(n){const r=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${ct(n).map(i=>{const m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(m)return r.push({name:m[1],matcher:m[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(d)return r.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const S=i.split(/\[(.+?)\](?!\])/);return"/"+S.map((w,y)=>{if(y%2){if(w.startsWith("x+"))return ye(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return ye(String.fromCharCode(...w.slice(2).split("-").map(x=>parseInt(x,16))));const p=ot.exec(w);if(!p)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,P,I,b,A]=p;return r.push({name:b,matcher:A,optional:!!P,rest:!!I,chained:I?y===1&&S[0]==="":!1}),I?"(.*?)":P?"([^/]*)?":"([^/]+?)"}return ye(w)}).join("")}).join("")}/?$`),params:r}}function it(n){return!/^\([^)]+\)$/.test(n)}function ct(n){return n.slice(1).split("/").filter(it)}function lt(n,r,f){const i={},m=n.slice(1);let d=0;for(let S=0;S<r.length;S+=1){const c=r[S],w=m[S-d];if(c.chained&&c.rest&&d){i[c.name]=m.slice(S-d,S+1).filter(y=>y).join("/"),d=0;continue}if(w===void 0){c.rest&&(i[c.name]="");continue}if(!c.matcher||f[c.matcher](w)){i[c.name]=w;const y=r[S+1],p=m[S+1];y&&!y.rest&&y.optional&&p&&(d=0);continue}if(c.optional&&c.chained){d++;continue}return}if(!d)return i}function ye(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ft({nodes:n,server_loads:r,dictionary:f,matchers:i}){const m=new Set(r);return Object.entries(f).map(([c,[w,y,p]])=>{const{pattern:P,params:I}=st(c),b={id:c,exec:A=>{const x=P.exec(A);if(x)return lt(x,I,i)},errors:[1,...p||[]].map(A=>n[A]),layouts:[0,...y||[]].map(S),leaf:d(w)};return b.errors.length=b.layouts.length=Math.max(b.errors.length,b.layouts.length),b});function d(c){const w=c<0;return w&&(c=~c),[w,n[c]]}function S(c){return c===void 0?c:[m.has(c),n[c]]}}let X=class{constructor(r,f){this.status=r,typeof f=="string"?this.body={message:f}:f?this.body=f:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}},Fe=class{constructor(r,f){this.status=r,this.location=f}};async function ut(n){for(const r in n)if(typeof n[r]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([f,i])=>[f,await i])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const dt=-1,pt=-2,ht=-3,mt=-4,_t=-5,gt=-6;function yt(n,r){if(typeof n=="number")return m(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const f=n,i=Array(f.length);function m(d,S=!1){if(d===dt)return;if(d===ht)return NaN;if(d===mt)return 1/0;if(d===_t)return-1/0;if(d===gt)return-0;if(S)throw new Error("Invalid input");if(d in i)return i[d];const c=f[d];if(!c||typeof c!="object")i[d]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const w=c[0],y=r?.[w];if(y)return i[d]=y(m(c[1]));switch(w){case"Date":i[d]=new Date(c[1]);break;case"Set":const p=new Set;i[d]=p;for(let b=1;b<c.length;b+=1)p.add(m(c[b]));break;case"Map":const P=new Map;i[d]=P;for(let b=1;b<c.length;b+=2)P.set(m(c[b]),m(c[b+1]));break;case"RegExp":i[d]=new RegExp(c[1],c[2]);break;case"Object":i[d]=Object(c[1]);break;case"BigInt":i[d]=BigInt(c[1]);break;case"null":const I=Object.create(null);i[d]=I;for(let b=1;b<c.length;b+=2)I[c[b]]=m(c[b+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(c.length);i[d]=w;for(let y=0;y<c.length;y+=1){const p=c[y];p!==pt&&(w[y]=m(p))}}else{const w={};i[d]=w;for(const y in c){const p=c[y];w[y]=m(p)}}return i[d]}return m(0)}function wt(n){return n.filter(r=>r!=null)}const M=Je(He)??{},Y=Je(Ve)??{};function we(n){M[n]=W()}function vt(n,r){const f=ft(n),i=n.nodes[0],m=n.nodes[1];i(),m();const d=document.documentElement,S=[],c=[];let w=null;const y={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},P=!1,I=!1,b=!0,A=!1,x=!1,H=!1,C=!1,J,O=history.state?.[T];O||(O=Date.now(),history.replaceState({...history.state,[T]:O},"",location.href));const le=M[O];le&&(history.scrollRestoration="manual",scrollTo(le.x,le.y));let q,Ee,Q;async function ke(){Q=Q||Promise.resolve(),await Q,Q=null;const e=new URL(location.href),t=z(e,!0);w=null,await Ae(t,e,[])}function Se(e){c.some(t=>t?.snapshot)&&(Y[e]=c.map(t=>t?.snapshot?.capture()))}function Re(e){Y[e]?.forEach((t,a)=>{c[a]?.snapshot?.restore(t)})}function Le(){we(O),qe(He,M),Se(O),qe(Ve,Y)}async function fe(e,{noScroll:t=!1,replaceState:a=!1,keepFocus:o=!1,state:s={},invalidateAll:l=!1},_,u){return typeof e=="string"&&(e=new URL(e,Te(document))),ae({url:e,scroll:t?W():null,keepfocus:o,redirect_chain:_,details:{state:s,replaceState:a},nav_token:u,accepted:()=>{l&&(C=!0)},blocked:()=>{},type:"goto"})}async function Ie(e){return w={id:e.id,promise:Ue(e).then(t=>(t.type==="loaded"&&t.state.error&&(w=null),t))},w.promise}async function ee(...e){const a=f.filter(o=>e.some(s=>o.exec(s))).map(o=>Promise.all([...o.layouts,o.leaf].map(s=>s?.[1]())));await Promise.all(a)}async function Ae(e,t,a,o,s,l={},_){Ee=l;let u=e&&await Ue(e);if(!u){if(ge(t,F))return await V(t);u=await $e(t,{id:null},await B(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=e?.url||t,Ee!==l)return!1;if(u.type==="redirect")if(a.length>10||a.includes(t.pathname))u=await te({status:500,error:await B(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return fe(new URL(u.location,t).href,{},[...a,t.pathname],l),!1;else u.props.page?.status>=400&&await D.updated.check()&&await V(t);if(S.length=0,C=!1,A=!0,o&&(we(o),Se(o)),u.props.page?.url&&u.props.page.url.pathname!==t.pathname&&(t.pathname=u.props.page?.url.pathname),s&&s.details){const{details:h}=s,v=h.replaceState?0:1;if(h.state[T]=O+=v,history[h.replaceState?"replaceState":"pushState"](h.state,"",t),!h.replaceState){let E=O+1;for(;Y[E]||M[E];)delete Y[E],delete M[E],E+=1}}if(w=null,I?(p=u.state,u.props.page&&(u.props.page.url=t),J.$set(u.props)):Oe(u),s){const{scroll:h,keepfocus:v}=s,{activeElement:E}=document;if(await se(),b){const L=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));h?scrollTo(h.x,h.y):L?L.scrollIntoView():scrollTo(0,0)}const g=document.activeElement!==E&&document.activeElement!==document.body;!v&&!g&&await ve()}else await se();b=!0,u.props.page&&(q=u.props.page),_&&_(),A=!1}function Oe(e){p=e.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),q=e.props.page,J=new n.root({target:r,props:{...e.props,stores:D,components:c},hydrate:!0}),Re(O);const a={from:null,to:{params:p.params,route:{id:p.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter"};y.after_navigate.forEach(o=>o(a)),I=!0}async function K({url:e,params:t,branch:a,status:o,error:s,route:l,form:_}){let u="never";for(const k of a)k?.slash!==void 0&&(u=k.slash);e.pathname=Ge(e.pathname,u),e.search=e.search;const h={type:"loaded",state:{url:e,params:t,branch:a,error:s,route:l},props:{constructors:wt(a).map(k=>k.node.component)}};_!==void 0&&(h.props.form=_);let v={},E=!q,g=0;for(let k=0;k<Math.max(a.length,p.branch.length);k+=1){const U=a[k],re=p.branch[k];U?.data!==re?.data&&(E=!0),U&&(v={...v,...U.data},E&&(h.props[`data_${g}`]=v),g+=1)}return(!p.url||e.href!==p.url.href||p.error!==s||_!==void 0&&_!==q.form||E)&&(h.props.page={error:s,params:t,route:{id:l?.id??null},status:o,url:new URL(e),form:_??null,data:E?v:q.data}),h}async function ue({loader:e,parent:t,url:a,params:o,route:s,server_data_node:l}){let _=null;const u={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},h=await e();if(h.universal?.load){let v=function(...g){for(const L of g){const{href:k}=new URL(L,a);u.dependencies.add(k)}};const E={route:{get id(){return u.route=!0,s.id}},params:new Proxy(o,{get:(g,L)=>(u.params.add(L),g[L])}),data:l?.data??null,url:Ze(a,()=>{u.url=!0}),async fetch(g,L){let k;g instanceof Request?(k=g.url,L={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...L}):k=g;const U=new URL(k,a);return v(U.href),U.origin===a.origin&&(k=U.href.slice(a.origin.length)),I?rt(k,U.href,L):at(k,L)},setHeaders:()=>{},depends:v,parent(){return u.parent=!0,t()}};_=await h.universal.load.call(null,E)??null,_=_?await ut(_):null}return{node:h,loader:e,server:l,universal:h.universal?.load?{type:"data",data:_,uses:u}:null,data:_??l?.data??null,slash:h.universal?.trailingSlash??l?.slash}}function Pe(e,t,a,o,s){if(C)return!0;if(!o)return!1;if(o.parent&&e||o.route&&t||o.url&&a)return!0;for(const l of o.params)if(s[l]!==p.params[l])return!0;for(const l of o.dependencies)if(S.some(_=>_(new URL(l))))return!0;return!1}function de(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}async function Ue({id:e,invalidating:t,url:a,params:o,route:s}){if(w?.id===e)return w.promise;const{errors:l,layouts:_,leaf:u}=s,h=[..._,u];l.forEach(R=>R?.().catch(()=>{})),h.forEach(R=>R?.[1]().catch(()=>{}));let v=null;const E=p.url?e!==p.url.pathname+p.url.search:!1,g=p.route?s.id!==p.route.id:!1;let L=!1;const k=h.map((R,j)=>{const $=p.branch[j],N=!!R?.[0]&&($?.loader!==R[1]||Pe(L,g,E,$.server?.uses,o));return N&&(L=!0),N});if(k.some(Boolean)){try{v=await Me(a,k)}catch(R){return te({status:R instanceof X?R.status:500,error:await B(R,{url:a,params:o,route:{id:s.id}}),url:a,route:s})}if(v.type==="redirect")return v}const U=v?.nodes;let re=!1;const pe=h.map(async(R,j)=>{if(!R)return;const $=p.branch[j],N=U?.[j];if((!N||N.type==="skip")&&R[1]===$?.loader&&!Pe(re,g,E,$.universal?.uses,o))return $;if(re=!0,N?.type==="error")throw N;return ue({loader:R[1],url:a,params:o,route:s,parent:async()=>{const he={};for(let me=0;me<j;me+=1)Object.assign(he,(await pe[me])?.data);return he},server_data_node:de(N===void 0&&R[0]?{type:"skip"}:N??null,R[0]?$?.server:void 0)})});for(const R of pe)R.catch(()=>{});const G=[];for(let R=0;R<h.length;R+=1)if(h[R])try{G.push(await pe[R])}catch(j){if(j instanceof Fe)return{type:"redirect",location:j.location};let $=500,N;if(U?.includes(j))$=j.status??$,N=j.error;else if(j instanceof X)$=j.status,N=j.body;else{if(await D.updated.check())return await V(a);N=await B(j,{params:o,url:a,route:{id:s.id}})}const oe=await je(R,G,l);return oe?await K({url:a,params:o,branch:G.slice(0,oe.idx).concat(oe.node),status:$,error:N,route:s}):await $e(a,{id:s.id},N,$)}else G.push(void 0);return await K({url:a,params:o,branch:G,status:200,error:null,route:s,form:t?void 0:null})}async function je(e,t,a){for(;e--;)if(a[e]){let o=e;for(;!t[o];)o-=1;try{return{idx:o+1,node:{node:await a[e](),loader:a[e],data:{},server:null,universal:null}}}catch{continue}}}async function te({status:e,error:t,url:a,route:o}){const s={};let l=null;if(n.server_loads[0]===0)try{const v=await Me(a,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;l=v.nodes[0]??null}catch{(a.origin!==location.origin||a.pathname!==location.pathname||P)&&await V(a)}const u=await ue({loader:i,url:a,params:s,route:o,parent:()=>Promise.resolve({}),server_data_node:de(l)}),h={node:await m(),loader:m,universal:null,server:null,data:null};return await K({url:a,params:s,branch:[u,h],status:e,error:t,route:null})}function z(e,t){if(ge(e,F))return;const a=ne(e);for(const o of f){const s=o.exec(a);if(s)return{id:e.pathname+e.search,invalidating:t,route:o,params:We(s),url:e}}}function ne(e){return Ye(e.pathname.slice(F.length)||"/")}function Ne({url:e,type:t,intent:a,delta:o}){let s=!1;const l={from:{params:p.params,route:{id:p.route?.id??null},url:p.url},to:{params:a?.params??null,route:{id:a?.route?.id??null},url:e},willUnload:!a,type:t};o!==void 0&&(l.delta=o);const _={...l,cancel:()=>{s=!0}};return x||y.before_navigate.forEach(u=>u(_)),s?null:l}async function ae({url:e,scroll:t,keepfocus:a,redirect_chain:o,details:s,type:l,delta:_,nav_token:u,accepted:h,blocked:v}){const E=z(e,!1),g=Ne({url:e,type:l,delta:_,intent:E});if(!g){v();return}const L=O;h(),x=!0,I&&D.navigating.set(g),await Ae(E,e,o,L,{scroll:t,keepfocus:a,details:s},u,()=>{x=!1,y.after_navigate.forEach(k=>k(g)),D.navigating.set(null)})}async function $e(e,t,a,o){return e.origin===location.origin&&e.pathname===location.pathname&&!P?await te({status:o,error:a,url:e,route:t}):await V(e)}function V(e){return location.href=e.href,new Promise(()=>{})}function ze(){let e;d.addEventListener("mousemove",l=>{const _=l.target;clearTimeout(e),e=setTimeout(()=>{o(_,2)},20)});function t(l){o(l.composedPath()[0],1)}d.addEventListener("mousedown",t),d.addEventListener("touchstart",t,{passive:!0});const a=new IntersectionObserver(l=>{for(const _ of l)_.isIntersecting&&(ee(ne(new URL(_.target.href))),a.unobserve(_.target))},{threshold:0});function o(l,_){const u=De(l,d);if(!u)return;const{url:h,external:v}=_e(u,F);if(v)return;const E=ie(u);if(!E.reload)if(_<=E.preload_data){const g=z(h,!1);g&&Ie(g)}else _<=E.preload_code&&ee(ne(h))}function s(){a.disconnect();for(const l of d.querySelectorAll("a")){const{url:_,external:u}=_e(l,F);if(u)continue;const h=ie(l);h.reload||(h.preload_code===Ce.viewport&&a.observe(l),h.preload_code===Ce.eager&&ee(ne(_)))}}y.after_navigate.push(s),s()}function B(e,t){return e instanceof X?e.body:n.hooks.handleError({error:e,event:t})??{message:t.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{xe(()=>(y.after_navigate.push(e),()=>{const t=y.after_navigate.indexOf(e);y.after_navigate.splice(t,1)}))},before_navigate:e=>{xe(()=>(y.before_navigate.push(e),()=>{const t=y.before_navigate.indexOf(e);y.before_navigate.splice(t,1)}))},disable_scroll_handling:()=>{(A||!I)&&(b=!1)},goto:(e,t={})=>fe(e,t,[]),invalidate:e=>{if(typeof e=="function")S.push(e);else{const{href:t}=new URL(e,location.href);S.push(a=>a.href===t)}return ke()},invalidateAll:()=>(C=!0,ke()),preload_data:async e=>{const t=new URL(e,Te(document)),a=z(t,!1);if(!a)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);await Ie(a)},preload_code:ee,apply_action:async e=>{if(e.type==="error"){const t=new URL(location.href),{branch:a,route:o}=p;if(!o)return;const s=await je(p.branch.length,a,o.errors);if(s){const l=await K({url:t,params:p.params,branch:a.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:o});p=l.state,J.$set(l.props),se().then(ve)}}else e.type==="redirect"?fe(e.location,{invalidateAll:!0},[]):(J.$set({form:null,page:{...q,form:e.data,status:e.status}}),await se(),J.$set({form:e.data}),e.type==="success"&&ve())},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let t=!1;if(Le(),!x){const a={from:{params:p.params,route:{id:p.route?.id??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>t=!0};y.before_navigate.forEach(o=>o(a))}t?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Le()}),navigator.connection?.saveData||ze(),d.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const t=De(e.composedPath()[0],d);if(!t)return;const{url:a,external:o,target:s}=_e(t,F);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const l=ie(t);if(!(t instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:"))return;if(o||l.reload){Ne({url:a,type:"link"})?x=!0:e.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===location.href.split("#")[0]){H=!0,we(O),p.url=a,D.page.set({...q,url:a}),D.page.notify();return}ae({url:a,scroll:l.noscroll?W():null,keepfocus:l.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:l.replace_state??a.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),d.addEventListener("submit",e=>{if(e.defaultPrevented)return;const t=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if((a?.formMethod||t.method)!=="get")return;const s=new URL(a?.hasAttribute("formaction")&&a?.formAction||t.action);if(ge(s,F))return;const l=e.target,{keep_focus:_,noscroll:u,reload:h,replace_state:v}=ie(l);if(h)return;e.preventDefault(),e.stopPropagation();const E=new FormData(l),g=a?.getAttribute("name");g&&E.append(g,a?.getAttribute("value")??""),s.search=new URLSearchParams(E).toString(),ae({url:s,scroll:u?W():null,keepfocus:_??!1,redirect_chain:[],details:{state:{},replaceState:v??s.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{if(e.state?.[T]){if(e.state[T]===O)return;const t=M[e.state[T]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){M[O]=W(),O=e.state[T],scrollTo(t.x,t.y);return}const a=e.state[T]-O;let o=!1;await ae({url:new URL(location.href),scroll:t,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{O=e.state[T]},blocked:()=>{history.go(-a),o=!0},type:"popstate",delta:a}),o||Re(O)}}),addEventListener("hashchange",()=>{H&&(H=!1,history.replaceState({...history.state,[T]:++O},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&D.navigating.set(null)})},_hydrate:async({status:e=200,error:t,node_ids:a,params:o,route:s,data:l,form:_})=>{P=!0;const u=new URL(location.href);({params:o={},route:s={id:null}}=z(u,!1)||{});let h;try{const v=a.map(async(E,g)=>{const L=l[g];return L?.uses&&(L.uses=Ke(L.uses)),ue({loader:n.nodes[E],url:u,params:o,route:s,parent:async()=>{const k={};for(let U=0;U<g;U+=1)Object.assign(k,(await v[U]).data);return k},server_data_node:de(L)})});h=await K({url:u,params:o,branch:await Promise.all(v),status:e,error:t,form:_,route:f.find(({id:E})=>E===s.id)??null})}catch(v){if(v instanceof Fe){await V(new URL(v.location,location.href));return}h=await te({status:v instanceof X?v.status:500,error:await B(v,{url:u,params:o,route:s}),url:u,route:s})}Oe(h)}}}async function Me(n,r){const f=new URL(n);f.pathname=tt(n.pathname),f.searchParams.append("x-sveltekit-invalidated",r.map(m=>m?"1":"").join("_"));const i=await ce(f.href);if(!i.ok)throw new X(i.status,await i.json());return new Promise(async m=>{const d=new Map,S=i.body.getReader(),c=new TextDecoder;function w(p){return yt(p,{Promise:P=>new Promise((I,b)=>{d.set(P,{fulfil:I,reject:b})})})}let y="";for(;;){const{done:p,value:P}=await S.read();if(p&&!y)break;for(y+=!P&&y?`
`:c.decode(P);;){const I=y.indexOf(`
`);if(I===-1)break;const b=JSON.parse(y.slice(0,I));if(y=y.slice(I+1),b.type==="redirect")return m(b);if(b.type==="data")b.nodes?.forEach(A=>{A?.type==="data"&&(A.uses=Ke(A.uses),A.data=w(A.data))}),m(b);else if(b.type==="chunk"){const{id:A,data:x,error:H}=b,C=d.get(A);d.delete(A),H?C.reject(w(H)):C.fulfil(w(x))}}}})}function Ke(n){return{dependencies:new Set(n?.dependencies??[]),params:new Set(n?.params??[]),parent:!!n?.parent,route:!!n?.route,url:!!n?.url}}function ve(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const r=document.body,f=r.getAttribute("tabindex");return r.tabIndex=-1,r.focus({preventScroll:!0}),f!==null?r.setAttribute("tabindex",f):r.removeAttribute("tabindex"),new Promise(i=>{setTimeout(()=>{i(getSelection()?.removeAllRanges())})})}}async function Lt(n,r,f){const i=vt(n,r);Be({client:i}),f?await i._hydrate(f):i.goto(location.href,{replaceState:!0}),i._start_router()}export{Lt as start};
