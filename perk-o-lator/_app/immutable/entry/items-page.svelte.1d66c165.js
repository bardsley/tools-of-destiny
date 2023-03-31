import{S as fe,i as he,s as de,k as w,q as U,a as q,l as v,m as A,r as I,h as d,c as N,n as b,p as ie,b as T,D as E,u as ae,I as H,j as lt,K as $,M as Le,g as pe,d as ge,H as Y,O as ct,y as Fe,z as $e,A as Ge,B as Ve,L as ze,P as Ae}from"../chunks/index.a2eae374.js";import{w as ut}from"../chunks/paths.e2870077.js";import{b as ft,c as ht}from"../chunks/manifest.ef7379e8.js";import{p as dt}from"../chunks/stores.21e54819.js";function te(){return typeof navigator=="object"&&"userAgent"in navigator?navigator.userAgent:typeof process=="object"&&"version"in process?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}var J={},pt={get exports(){return J},set exports(e){J=e}},gt=Me;function Me(e,t,r,n){if(typeof r!="function")throw new Error("method for before hook must be a function");return n||(n={}),Array.isArray(t)?t.reverse().reduce(function(s,o){return Me.bind(null,e,o,s,n)},r)():Promise.resolve().then(function(){return e.registry[t]?e.registry[t].reduce(function(s,o){return o.hook.bind(null,s,n)},r)():r(n)})}var mt=yt;function yt(e,t,r,n){var s=n;e.registry[r]||(e.registry[r]=[]),t==="before"&&(n=function(o,i){return Promise.resolve().then(s.bind(null,i)).then(o.bind(null,i))}),t==="after"&&(n=function(o,i){var a;return Promise.resolve().then(o.bind(null,i)).then(function(l){return a=l,s(a,i)}).then(function(){return a})}),t==="error"&&(n=function(o,i){return Promise.resolve().then(o.bind(null,i)).catch(function(a){return s(a,i)})}),e.registry[r].push({hook:n,orig:s})}var bt=wt;function wt(e,t,r){if(e.registry[t]){var n=e.registry[t].map(function(s){return s.orig}).indexOf(r);n!==-1&&e.registry[t].splice(n,1)}}var We=gt,vt=mt,_t=bt,Te=Function.bind,ke=Te.bind(Te);function Xe(e,t,r){var n=ke(_t,null).apply(null,r?[t,r]:[t]);e.api={remove:n},e.remove=n,["before","error","after","wrap"].forEach(function(s){var o=r?[t,s,r]:[t,s];e[s]=e.api[s]=ke(vt,null).apply(null,o)})}function Et(){var e="h",t={registry:{}},r=We.bind(null,t,e);return Xe(r,t,e),r}function Je(){var e={registry:{}},t=We.bind(null,e);return Xe(t,e),t}var Oe=!1;function V(){return Oe||(console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'),Oe=!0),Je()}V.Singular=Et.bind();V.Collection=Je.bind();pt.exports=V;J.Hook=V;J.Singular=V.Singular;var At=J.Collection=V.Collection;/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function Se(e){return Object.prototype.toString.call(e)==="[object Object]"}function Ke(e){var t,r;return Se(e)===!1?!1:(t=e.constructor,t===void 0?!0:(r=t.prototype,!(Se(r)===!1||r.hasOwnProperty("isPrototypeOf")===!1)))}function Tt(e){return e?Object.keys(e).reduce((t,r)=>(t[r.toLowerCase()]=e[r],t),{}):{}}function Ze(e,t){const r=Object.assign({},e);return Object.keys(t).forEach(n=>{Ke(t[n])?n in e?r[n]=Ze(e[n],t[n]):Object.assign(r,{[n]:t[n]}):Object.assign(r,{[n]:t[n]})}),r}function je(e){for(const t in e)e[t]===void 0&&delete e[t];return e}function le(e,t,r){if(typeof t=="string"){let[s,o]=t.split(" ");r=Object.assign(o?{method:s,url:o}:{url:s},r)}else r=Object.assign({},t);r.headers=Tt(r.headers),je(r),je(r.headers);const n=Ze(e||{},r);return e&&e.mediaType.previews.length&&(n.mediaType.previews=e.mediaType.previews.filter(s=>!n.mediaType.previews.includes(s)).concat(n.mediaType.previews)),n.mediaType.previews=n.mediaType.previews.map(s=>s.replace(/-preview/,"")),n}function kt(e,t){const r=/\?/.test(e)?"&":"?",n=Object.keys(t);return n.length===0?e:e+r+n.map(s=>s==="q"?"q="+t.q.split("+").map(encodeURIComponent).join("+"):`${s}=${encodeURIComponent(t[s])}`).join("&")}const Ot=/\{[^}]+\}/g;function St(e){return e.replace(/^\W+|\W+$/g,"").split(/,/)}function jt(e){const t=e.match(Ot);return t?t.map(St).reduce((r,n)=>r.concat(n),[]):[]}function Pe(e,t){return Object.keys(e).filter(r=>!t.includes(r)).reduce((r,n)=>(r[n]=e[n],r),{})}function Qe(e){return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t).replace(/%5B/g,"[").replace(/%5D/g,"]")),t}).join("")}function G(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function z(e,t,r){return t=e==="+"||e==="#"?Qe(t):G(t),r?G(r)+"="+t:t}function F(e){return e!=null}function ne(e){return e===";"||e==="&"||e==="?"}function Pt(e,t,r,n){var s=e[r],o=[];if(F(s)&&s!=="")if(typeof s=="string"||typeof s=="number"||typeof s=="boolean")s=s.toString(),n&&n!=="*"&&(s=s.substring(0,parseInt(n,10))),o.push(z(t,s,ne(t)?r:""));else if(n==="*")Array.isArray(s)?s.filter(F).forEach(function(i){o.push(z(t,i,ne(t)?r:""))}):Object.keys(s).forEach(function(i){F(s[i])&&o.push(z(t,s[i],i))});else{const i=[];Array.isArray(s)?s.filter(F).forEach(function(a){i.push(z(t,a))}):Object.keys(s).forEach(function(a){F(s[a])&&(i.push(G(a)),i.push(z(t,s[a].toString())))}),ne(t)?o.push(G(r)+"="+i.join(",")):i.length!==0&&o.push(i.join(","))}else t===";"?F(s)&&o.push(G(r)):s===""&&(t==="&"||t==="?")?o.push(G(r)+"="):s===""&&o.push("");return o}function Dt(e){return{expand:Rt.bind(null,e)}}function Rt(e,t){var r=["+","#",".","/",";","?","&"];return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(n,s,o){if(s){let a="";const l=[];if(r.indexOf(s.charAt(0))!==-1&&(a=s.charAt(0),s=s.substr(1)),s.split(/,/g).forEach(function(f){var m=/([^:\*]*)(?::(\d+)|(\*))?/.exec(f);l.push(Pt(t,a,m[1],m[2]||m[3]))}),a&&a!=="+"){var i=",";return a==="?"?i="&":a!=="#"&&(i=a),(l.length!==0?a:"")+l.join(i)}else return l.join(",")}else return Qe(o)})}function Ye(e){let t=e.method.toUpperCase(),r=(e.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),n=Object.assign({},e.headers),s,o=Pe(e,["method","baseUrl","url","headers","request","mediaType"]);const i=jt(r);r=Dt(r).expand(o),/^http/.test(r)||(r=e.baseUrl+r);const a=Object.keys(e).filter(m=>i.includes(m)).concat("baseUrl"),l=Pe(o,a);if(!/application\/octet-stream/i.test(n.accept)&&(e.mediaType.format&&(n.accept=n.accept.split(/,/).map(m=>m.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${e.mediaType.format}`)).join(",")),e.mediaType.previews.length)){const m=n.accept.match(/[\w-]+(?=-preview)/g)||[];n.accept=m.concat(e.mediaType.previews).map(h=>{const y=e.mediaType.format?`.${e.mediaType.format}`:"+json";return`application/vnd.github.${h}-preview${y}`}).join(",")}return["GET","HEAD"].includes(t)?r=kt(r,l):"data"in l?s=l.data:Object.keys(l).length&&(s=l),!n["content-type"]&&typeof s<"u"&&(n["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(t)&&typeof s>"u"&&(s=""),Object.assign({method:t,url:r,headers:n},typeof s<"u"?{body:s}:null,e.request?{request:e.request}:null)}function Ut(e,t,r){return Ye(le(e,t,r))}function et(e,t){const r=le(e,t),n=Ut.bind(null,r);return Object.assign(n,{DEFAULTS:r,defaults:et.bind(null,r),merge:le.bind(null,r),parse:Ye})}const It="7.0.5",Bt=`octokit-endpoint.js/${It} ${te()}`,qt={method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":Bt},mediaType:{format:"",previews:[]}},Nt=et(null,qt);var j=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof j<"u"&&j,D={searchParams:"URLSearchParams"in j,iterable:"Symbol"in j&&"iterator"in Symbol,blob:"FileReader"in j&&"Blob"in j&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in j,arrayBuffer:"ArrayBuffer"in j};function xt(e){return e&&DataView.prototype.isPrototypeOf(e)}if(D.arrayBuffer)var Ht=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],Ct=ArrayBuffer.isView||function(e){return e&&Ht.indexOf(Object.prototype.toString.call(e))>-1};function Z(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function me(e){return typeof e!="string"&&(e=String(e)),e}function ye(e){var t={next:function(){var r=e.shift();return{done:r===void 0,value:r}}};return D.iterable&&(t[Symbol.iterator]=function(){return t}),t}function k(e){this.map={},e instanceof k?e.forEach(function(t,r){this.append(r,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}k.prototype.append=function(e,t){e=Z(e),t=me(t);var r=this.map[e];this.map[e]=r?r+", "+t:t};k.prototype.delete=function(e){delete this.map[Z(e)]};k.prototype.get=function(e){return e=Z(e),this.has(e)?this.map[e]:null};k.prototype.has=function(e){return this.map.hasOwnProperty(Z(e))};k.prototype.set=function(e,t){this.map[Z(e)]=me(t)};k.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)};k.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),ye(e)};k.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),ye(e)};k.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),ye(e)};D.iterable&&(k.prototype[Symbol.iterator]=k.prototype.entries);function se(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function tt(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function Lt(e){var t=new FileReader,r=tt(t);return t.readAsArrayBuffer(e),r}function Ft(e){var t=new FileReader,r=tt(t);return t.readAsText(e),r}function $t(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function De(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function rt(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:D.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:D.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:D.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():D.arrayBuffer&&D.blob&&xt(e)?(this._bodyArrayBuffer=De(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):D.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||Ct(e))?this._bodyArrayBuffer=De(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):D.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},D.blob&&(this.blob=function(){var e=se(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=se(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(Lt)}),this.text=function(){var e=se(this);if(e)return e;if(this._bodyBlob)return Ft(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve($t(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},D.formData&&(this.formData=function(){return this.text().then(zt)}),this.json=function(){return this.text().then(JSON.parse)},this}var Gt=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Vt(e){var t=e.toUpperCase();return Gt.indexOf(t)>-1?t:e}function L(e,t){if(!(this instanceof L))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{};var r=t.body;if(e instanceof L){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new k(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&e._bodyInit!=null&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new k(t.headers)),this.method=Vt(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),(this.method==="GET"||this.method==="HEAD")&&(t.cache==="no-store"||t.cache==="no-cache")){var n=/([?&])_=[^&]*/;if(n.test(this.url))this.url=this.url.replace(n,"$1_="+new Date().getTime());else{var s=/\?/;this.url+=(s.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}L.prototype.clone=function(){return new L(this,{body:this._bodyInit})};function zt(e){var t=new FormData;return e.trim().split("&").forEach(function(r){if(r){var n=r.split("="),s=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(s),decodeURIComponent(o))}}),t}function Mt(e){var t=new k,r=e.replace(/\r?\n[\t ]+/g," ");return r.split("\r").map(function(n){return n.indexOf(`
`)===0?n.substr(1,n.length):n}).forEach(function(n){var s=n.split(":"),o=s.shift().trim();if(o){var i=s.join(":").trim();t.append(o,i)}}),t}rt.call(L.prototype);function B(e,t){if(!(this instanceof B))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText===void 0?"":""+t.statusText,this.headers=new k(t.headers),this.url=t.url||"",this._initBody(e)}rt.call(B.prototype);B.prototype.clone=function(){return new B(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new k(this.headers),url:this.url})};B.error=function(){var e=new B(null,{status:0,statusText:""});return e.type="error",e};var Wt=[301,302,303,307,308];B.redirect=function(e,t){if(Wt.indexOf(t)===-1)throw new RangeError("Invalid status code");return new B(null,{status:t,headers:{location:e}})};var C=j.DOMException;try{new C}catch{C=function(t,r){this.message=t,this.name=r;var n=Error(t);this.stack=n.stack},C.prototype=Object.create(Error.prototype),C.prototype.constructor=C}function nt(e,t){return new Promise(function(r,n){var s=new L(e,t);if(s.signal&&s.signal.aborted)return n(new C("Aborted","AbortError"));var o=new XMLHttpRequest;function i(){o.abort()}o.onload=function(){var l={status:o.status,statusText:o.statusText,headers:Mt(o.getAllResponseHeaders()||"")};l.url="responseURL"in o?o.responseURL:l.headers.get("X-Request-URL");var f="response"in o?o.response:o.responseText;setTimeout(function(){r(new B(f,l))},0)},o.onerror=function(){setTimeout(function(){n(new TypeError("Network request failed"))},0)},o.ontimeout=function(){setTimeout(function(){n(new TypeError("Network request failed"))},0)},o.onabort=function(){setTimeout(function(){n(new C("Aborted","AbortError"))},0)};function a(l){try{return l===""&&j.location.href?j.location.href:l}catch{return l}}o.open(s.method,a(s.url),!0),s.credentials==="include"?o.withCredentials=!0:s.credentials==="omit"&&(o.withCredentials=!1),"responseType"in o&&(D.blob?o.responseType="blob":D.arrayBuffer&&s.headers.get("Content-Type")&&s.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(o.responseType="arraybuffer")),t&&typeof t.headers=="object"&&!(t.headers instanceof k)?Object.getOwnPropertyNames(t.headers).forEach(function(l){o.setRequestHeader(l,me(t.headers[l]))}):s.headers.forEach(function(l,f){o.setRequestHeader(f,l)}),s.signal&&(s.signal.addEventListener("abort",i),o.onreadystatechange=function(){o.readyState===4&&s.signal.removeEventListener("abort",i)}),o.send(typeof s._bodyInit>"u"?null:s._bodyInit)})}nt.polyfill=!0;j.fetch||(j.fetch=nt,j.Headers=k,j.Request=L,j.Response=B);var Xt=self.fetch.bind(self);class Re extends Error{constructor(t){super(t),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="Deprecation"}}var K={},Jt={get exports(){return K},set exports(e){K=e}},Kt=st;function st(e,t){if(e&&t)return st(e)(t);if(typeof e!="function")throw new TypeError("need wrapper function");return Object.keys(e).forEach(function(n){r[n]=e[n]}),r;function r(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];var o=e.apply(this,n),i=n[n.length-1];return typeof o=="function"&&o!==i&&Object.keys(i).forEach(function(a){o[a]=i[a]}),o}}var ot=Kt;Jt.exports=ot(ee);K.strict=ot(it);ee.proto=ee(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return ee(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return it(this)},configurable:!0})});function ee(e){var t=function(){return t.called?t.value:(t.called=!0,t.value=e.apply(this,arguments))};return t.called=!1,t}function it(e){var t=function(){if(t.called)throw new Error(t.onceError);return t.called=!0,t.value=e.apply(this,arguments)},r=e.name||"Function wrapped with `once`";return t.onceError=r+" shouldn't be called more than once",t.called=!1,t}const Zt=K(e=>console.warn(e)),Qt=K(e=>console.warn(e));class M extends Error{constructor(t,r,n){super(t),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=r;let s;"headers"in n&&typeof n.headers<"u"&&(s=n.headers),"response"in n&&(this.response=n.response,s=n.response.headers);const o=Object.assign({},n.request);n.request.headers.authorization&&(o.headers=Object.assign({},n.request.headers,{authorization:n.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),o.url=o.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=o,Object.defineProperty(this,"code",{get(){return Zt(new Re("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),r}}),Object.defineProperty(this,"headers",{get(){return Qt(new Re("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.")),s||{}}})}}const Yt="6.2.3";function er(e){return e.arrayBuffer()}function Ue(e){const t=e.request&&e.request.log?e.request.log:console;(Ke(e.body)||Array.isArray(e.body))&&(e.body=JSON.stringify(e.body));let r={},n,s;return(e.request&&e.request.fetch||globalThis.fetch||Xt)(e.url,Object.assign({method:e.method,body:e.body,headers:e.headers,redirect:e.redirect},e.request)).then(async i=>{s=i.url,n=i.status;for(const a of i.headers)r[a[0]]=a[1];if("deprecation"in r){const a=r.link&&r.link.match(/<([^>]+)>; rel="deprecation"/),l=a&&a.pop();t.warn(`[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${r.sunset}${l?`. See ${l}`:""}`)}if(!(n===204||n===205)){if(e.method==="HEAD"){if(n<400)return;throw new M(i.statusText,n,{response:{url:s,status:n,headers:r,data:void 0},request:e})}if(n===304)throw new M("Not modified",n,{response:{url:s,status:n,headers:r,data:await oe(i)},request:e});if(n>=400){const a=await oe(i);throw new M(tr(a),n,{response:{url:s,status:n,headers:r,data:a},request:e})}return oe(i)}}).then(i=>({status:n,url:s,headers:r,data:i})).catch(i=>{throw i instanceof M||i.name==="AbortError"?i:new M(i.message,500,{request:e})})}async function oe(e){const t=e.headers.get("content-type");return/application\/json/.test(t)?e.json():!t||/^text\/|charset=utf-8$/.test(t)?e.text():er(e)}function tr(e){return typeof e=="string"?e:"message"in e?Array.isArray(e.errors)?`${e.message}: ${e.errors.map(JSON.stringify).join(", ")}`:e.message:`Unknown error: ${JSON.stringify(e)}`}function ce(e,t){const r=e.defaults(t);return Object.assign(function(s,o){const i=r.merge(s,o);if(!i.request||!i.request.hook)return Ue(r.parse(i));const a=(l,f)=>Ue(r.parse(r.merge(l,f)));return Object.assign(a,{endpoint:r,defaults:ce.bind(null,r)}),i.request.hook(a,i)},{endpoint:r,defaults:ce.bind(null,r)})}const ue=ce(Nt,{headers:{"user-agent":`octokit-request.js/${Yt} ${te()}`}}),rr="5.0.5";function nr(e){return`Request failed due to following response errors:
`+e.errors.map(t=>` - ${t.message}`).join(`
`)}class sr extends Error{constructor(t,r,n){super(nr(n)),this.request=t,this.headers=r,this.response=n,this.name="GraphqlResponseError",this.errors=n.errors,this.data=n.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}const or=["method","baseUrl","url","headers","request","query","mediaType"],ir=["query","method","url"],Ie=/\/api\/v3\/?$/;function ar(e,t,r){if(r){if(typeof t=="string"&&"query"in r)return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));for(const i in r)if(ir.includes(i))return Promise.reject(new Error(`[@octokit/graphql] "${i}" cannot be used as variable name`))}const n=typeof t=="string"?Object.assign({query:t},r):t,s=Object.keys(n).reduce((i,a)=>or.includes(a)?(i[a]=n[a],i):(i.variables||(i.variables={}),i.variables[a]=n[a],i),{}),o=n.baseUrl||e.endpoint.DEFAULTS.baseUrl;return Ie.test(o)&&(s.url=o.replace(Ie,"/api/graphql")),e(s).then(i=>{if(i.data.errors){const a={};for(const l of Object.keys(i.headers))a[l]=i.headers[l];throw new sr(s,a,i.data)}return i.data.data})}function be(e,t){const r=e.defaults(t);return Object.assign((s,o)=>ar(r,s,o),{defaults:be.bind(null,r),endpoint:r.endpoint})}be(ue,{headers:{"user-agent":`octokit-graphql.js/${rr} ${te()}`},method:"POST",url:"/graphql"});function lr(e){return be(e,{method:"POST",url:"/graphql"})}const cr=/^v1\./,ur=/^ghs_/,fr=/^ghu_/;async function hr(e){const t=e.split(/\./).length===3,r=cr.test(e)||ur.test(e),n=fr.test(e);return{type:"token",token:e,tokenType:t?"app":r?"installation":n?"user-to-server":"oauth"}}function dr(e){return e.split(/\./).length===3?`bearer ${e}`:`token ${e}`}async function pr(e,t,r,n){const s=t.endpoint.merge(r,n);return s.headers.authorization=dr(e),t(s)}const gr=function(t){if(!t)throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");if(typeof t!="string")throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");return t=t.replace(/^(token|bearer) +/i,""),Object.assign(hr.bind(null,t),{hook:pr.bind(null,t)})},at="4.2.0";class we{constructor(t={}){const r=new At,n={baseUrl:ue.endpoint.DEFAULTS.baseUrl,headers:{},request:Object.assign({},t.request,{hook:r.bind(null,"request")}),mediaType:{previews:[],format:""}};if(n.headers["user-agent"]=[t.userAgent,`octokit-core.js/${at} ${te()}`].filter(Boolean).join(" "),t.baseUrl&&(n.baseUrl=t.baseUrl),t.previews&&(n.mediaType.previews=t.previews),t.timeZone&&(n.headers["time-zone"]=t.timeZone),this.request=ue.defaults(n),this.graphql=lr(this.request).defaults(n),this.log=Object.assign({debug:()=>{},info:()=>{},warn:console.warn.bind(console),error:console.error.bind(console)},t.log),this.hook=r,t.authStrategy){const{authStrategy:o,...i}=t,a=o(Object.assign({request:this.request,log:this.log,octokit:this,octokitOptions:i},t.auth));r.wrap("request",a.hook),this.auth=a}else if(!t.auth)this.auth=async()=>({type:"unauthenticated"});else{const o=gr(t.auth);r.wrap("request",o.hook),this.auth=o}this.constructor.plugins.forEach(o=>{Object.assign(this,o(this,t))})}static defaults(t){return class extends this{constructor(...n){const s=n[0]||{};if(typeof t=="function"){super(t(s));return}super(Object.assign({},t,s,s.userAgent&&t.userAgent?{userAgent:`${s.userAgent} ${t.userAgent}`}:null))}}}static plugin(...t){var r;const n=this.plugins;return r=class extends this{},r.plugins=n.concat(t.filter(o=>!n.includes(o))),r}}we.VERSION=at;we.plugins=[];let X,W;console.log("Load creds from localstorage key:github value: {personalAuthToken:'XXXX'}"),X=localStorage.getItem("github")?JSON.parse(localStorage.getItem("github"))?.personalAuthToken:!1,X&&(W=new we({auth:X}));const mr=async(e,t,r,n,s)=>{if(typeof X>"u"||typeof W>"u")return console.error("Incorrect token",X,W),!1;if(!(e&&e.personalAuthToken&&e.repoName&&e.personalAuthToken))return console.error("Incorrect gitConfig",e),!1;let o={data:{content:""}},i=`${t}.txt`;try{o=await W.request("GET /repos/{owner}/{repo}/contents/{path}",{owner:e.owner,repo:e.repoName,path:i,headers:{}})}catch{console.log("File does not exist",i)}finally{console.log(o?.data)}let a=atob(o?.data?.content),l=new RegExp(`(//${r}start)([\\s\\S.]*?)(//${r}end)

`,"gm");a=a.replace(l,""),a=a.replace(/[\n\r]{3,}/gm,`

`);let f=a+`//${r}start
// ${n}
`+s+`
//${r}end

`,m={owner:"bardsley",repo:"wishwall",path:i,message:"Commit from the JSss",committer:{name:"perk-o-lator",email:"riven@destiny.tools"},content:btoa(f),headers:{}};o?.data?.sha&&(m={...m,sha:o?.data?.sha}),console.log(m);const h=await W.request("PUT /repos/{owner}/{repo}/contents/{path}",m);return console.log(h),h?.data?.content?.download_url};function Be(e){let t,r,n,s,o,i,a;return{c(){t=w("button"),r=U("Copy to Clipboard"),n=q(),s=w("button"),o=U("Add To Git"),this.h()},l(l){t=v(l,"BUTTON",{class:!0});var f=A(t);r=I(f,"Copy to Clipboard"),f.forEach(d),n=N(l),s=v(l,"BUTTON",{class:!0});var m=A(s);o=I(m,"Add To Git"),m.forEach(d),this.h()},h(){b(t,"class","svelte-1gdozns"),b(s,"class","svelte-1gdozns")},m(l,f){T(l,t,f),E(t,r),T(l,n,f),T(l,s,f),E(s,o),i||(a=[$(t,"click",e[3]),$(t,"touch",e[3]),$(s,"click",e[4]),$(s,"touch",e[4])],i=!0)},p:H,d(l){l&&d(t),l&&d(n),l&&d(s),i=!1,Le(a)}}}function yr(e){let t,r,n=e[0].length+"",s,o,i,a,l,f,m,h,y,S,_=e[1]?.message+"",P,g,c=e[0].length>0&&Be(e);return{c(){t=w("h3"),r=U("Generated "),s=U(n),o=U(` Perk Combos for DIM \r
    `),c&&c.c(),i=q(),a=w("textarea"),f=w("br"),m=q(),h=w("p"),y=w("a"),S=w("span"),P=U(_),this.h()},l(u){t=v(u,"H3",{class:!0});var p=A(t);r=I(p,"Generated "),s=I(p,n),o=I(p,` Perk Combos for DIM \r
    `),c&&c.l(p),p.forEach(d),i=N(u),a=v(u,"TEXTAREA",{id:!0,style:!0,class:!0}),A(a).forEach(d),f=v(u,"BR",{}),m=N(u),h=v(u,"P",{id:!0,class:!0});var R=A(h);y=v(R,"A",{href:!0,class:!0});var O=A(y);S=v(O,"SPAN",{class:!0});var x=A(S);P=I(x,_),x.forEach(d),O.forEach(d),R.forEach(d),this.h()},h(){b(t,"class","svelte-1gdozns"),b(a,"id","wish-wall"),ie(a,"height",Math.min(e[2].length*1.125,20)+"em"),a.value=l=""+e[2].join(`
`)+`\r
`,b(a,"class","svelte-1gdozns"),b(S,"class","svelte-1gdozns"),b(y,"href",g=e[1]?.url),b(y,"class","svelte-1gdozns"),b(h,"id","status"),b(h,"class","svelte-1gdozns")},m(u,p){T(u,t,p),E(t,r),E(t,s),E(t,o),c&&c.m(t,null),T(u,i,p),T(u,a,p),T(u,f,p),T(u,m,p),T(u,h,p),E(h,y),E(y,S),E(S,P)},p(u,[p]){p&1&&n!==(n=u[0].length+"")&&ae(s,n),u[0].length>0?c?c.p(u,p):(c=Be(u),c.c(),c.m(t,null)):c&&(c.d(1),c=null),p&4&&ie(a,"height",Math.min(u[2].length*1.125,20)+"em"),p&4&&l!==(l=""+u[2].join(`
`)+`\r
`)&&(a.value=l),p&2&&_!==(_=u[1]?.message+"")&&ae(P,_),p&2&&g!==(g=u[1]?.url)&&b(y,"href",g)},i:H,o:H,d(u){u&&d(t),c&&c.d(),u&&d(i),u&&d(a),u&&d(f),u&&d(m),u&&d(h)}}}function qe(e){return e.every(t=>t<1)}function br(e,t,r){let n,{selectedPerks:s=[]}=t,{itemID:o=0}=t,{itemName:i=""}=t,{wishes:a=[]}=t,l=new Array(s.length).fill(0),f={message:"",url:""},m=[],h=(g,c)=>`dimwishlist:item=${g}&perks=${s[0][c[0]]},${s[1][c[1]]},${s[2][c[2]]},${s[3][c[3]]}`,y=()=>{let g=document.getElementById("wish-wall");g.select(),g.setSelectionRange(0,99999),navigator.clipboard.writeText(g.value)};lt(()=>{if(console.log(`Updated Wishlist
----------------`),P("Start"),n)console.log("Not enough options");else{for(r(0,a=[]),s.forEach((g,c)=>{l[c]=g.length-1});!qe(l)&&_<100;)r(0,a=[...a,h(o,l)]),l[0]>0?l[0]-=1:(l[0]=s[0].length-1,l[1]>0?l[1]-=1:(l[1]=s[1].length-1,l[2]>0?l[2]-=1:(l[2]=s[2].length-1,l[3]>0?l[3]-=1:l[3]=s[3].length-1))),_+=1;P("Last Wish"),r(0,a=[...a,h(o,l)]),r(2,m=[`// ${i}`,"// - perks from perk-o-lator https://destiny.tools/perk-o-lator",...a])}_=0});let S=g=>{let c=localStorage.getItem("github");c&&(c=JSON.parse(c)),a.length>0&&c&&c.personalAuthToken&&c.repoName&&c.owner&&c.fileName&&c.personalAuthToken&&mr(c,c.fileName,o,i,a.join(`
`)).then(p=>{r(1,f={message:"Saved to "+p,url:p})},p=>{r(1,f={message:"Failed"})})},_=0,P=g=>{console.debug("----",g,"----",`
Done?`,qe(l),`
Indices`,l,"Perks",s)};return e.$$set=g=>{"selectedPerks"in g&&r(5,s=g.selectedPerks),"itemID"in g&&r(6,o=g.itemID),"itemName"in g&&r(7,i=g.itemName),"wishes"in g&&r(0,a=g.wishes)},e.$$.update=()=>{e.$$.dirty&32&&s.forEach((g,c)=>{l[c]=g.length-1}),e.$$.dirty&32&&(n=s.some(g=>g.length<1))},[a,f,m,y,S,s,o,i]}class wr extends fe{constructor(t){super(),he(this,t,br,yr,de,{selectedPerks:5,itemID:6,itemName:7,wishes:0})}}function vr(e){let t,r,n,s;return{c(){t=w("span"),r=U("Loading"),n=q(),s=w("small"),this.h()},l(o){t=v(o,"SPAN",{id:!0});var i=A(t);r=I(i,"Loading"),i.forEach(d),n=N(o),s=v(o,"SMALL",{});var a=A(s);a.forEach(d),this.h()},h(){b(t,"id","loader")},m(o,i){T(o,t,i),E(t,r),T(o,n,i),T(o,s,i)},p:H,i:H,o:H,d(o){o&&d(t),o&&d(n),o&&d(s)}}}class _r extends fe{constructor(t){super(),he(this,t,null,vr,de,{})}}function Ne(e,t,r){const n=e.slice();return n[14]=t[r],n[16]=r,n}function xe(e,t,r){const n=e.slice();return n[17]=t[r],n}function Er(e){let t,r;return t=new _r({}),{c(){Fe(t.$$.fragment)},l(n){$e(t.$$.fragment,n)},m(n,s){Ge(t,n,s),r=!0},p:H,i(n){r||(pe(t.$$.fragment,n),r=!0)},o(n){ge(t.$$.fragment,n),r=!1},d(n){Ve(t,n)}}}function Ar(e){let t,r,n,s,o,i,a,l,f,m,h,y,S,_,P,g=e[5],c=[];for(let u=0;u<g.length;u+=1)c[u]=Ce(Ne(e,g,u));return _=new wr({props:{selectedPerks:e[1],itemID:e[3],itemName:e[4]}}),{c(){t=w("header"),r=w("h1"),n=U(e[4]),s=q(),o=w("p"),i=w("a"),a=U("Light.GG"),l=q(),f=w("div"),m=w("div"),h=w("div");for(let u=0;u<c.length;u+=1)c[u].c();y=q(),S=w("div"),Fe(_.$$.fragment),this.h()},l(u){t=v(u,"HEADER",{class:!0});var p=A(t);r=v(p,"H1",{class:!0});var R=A(r);n=I(R,e[4]),R.forEach(d),s=N(p),o=v(p,"P",{class:!0});var O=A(o);i=v(O,"A",{href:!0,target:!0,class:!0});var x=A(i);a=I(x,"Light.GG"),x.forEach(d),O.forEach(d),p.forEach(d),l=N(u),f=v(u,"DIV",{class:!0});var Q=A(f);m=v(Q,"DIV",{class:!0});var ve=A(m);h=v(ve,"DIV",{class:!0});var _e=A(h);for(let re=0;re<c.length;re+=1)c[re].l(_e);_e.forEach(d),ve.forEach(d),y=N(Q),S=v(Q,"DIV",{class:!0});var Ee=A(S);$e(_.$$.fragment,Ee),Ee.forEach(d),Q.forEach(d),this.h()},h(){b(r,"class","svelte-fc7gww"),b(i,"href","https://www.light.gg/db/items/"+e[3]),b(i,"target","_blank"),b(i,"class","svelte-fc7gww"),b(o,"class","svelte-fc7gww"),b(t,"class","svelte-fc7gww"),b(h,"class","perks svelte-fc7gww"),b(m,"class","selector"),b(S,"class","cut-n-paste"),b(f,"class","columns svelte-fc7gww")},m(u,p){T(u,t,p),E(t,r),E(r,n),E(t,s),E(t,o),E(o,i),E(i,a),T(u,l,p),T(u,f,p),E(f,m),E(m,h);for(let R=0;R<c.length;R+=1)c[R]&&c[R].m(h,null);E(f,y),E(f,S),Ge(_,S,null),P=!0},p(u,p){if(p&96){g=u[5];let O;for(O=0;O<g.length;O+=1){const x=Ne(u,g,O);c[O]?c[O].p(x,p):(c[O]=Ce(x),c[O].c(),c[O].m(h,null))}for(;O<c.length;O+=1)c[O].d(1);c.length=g.length}const R={};p&2&&(R.selectedPerks=u[1]),_.$set(R)},i(u){P||(pe(_.$$.fragment,u),P=!0)},o(u){ge(_.$$.fragment,u),P=!1},d(u){u&&d(t),u&&d(l),u&&d(f),ze(c,u),Ve(_)}}}function He(e){let t,r,n;return{c(){t=w("a"),this.h()},l(s){t=v(s,"A",{"data-perkid":!0,"data-colid":!0,class:!0,style:!0});var o=A(t);o.forEach(d),this.h()},h(){b(t,"data-perkid",e[17].id),b(t,"data-colid",e[16]),b(t,"class","perk "+e[17].enhanced+" svelte-fc7gww"),ie(t,"background-image","url('https://www.bungie.net"+e[17].icon+"')")},m(s,o){T(s,t,o),r||(n=[$(t,"click",Ae(e[6])),$(t,"touch",Ae(e[6]))],r=!0)},p:H,d(s){s&&d(t),r=!1,Le(n)}}}function Ce(e){let t,r,n=e[14],s=[];for(let o=0;o<n.length;o+=1)s[o]=He(xe(e,n,o));return{c(){t=w("div");for(let o=0;o<s.length;o+=1)s[o].c();r=q(),this.h()},l(o){t=v(o,"DIV",{class:!0});var i=A(t);for(let a=0;a<s.length;a+=1)s[a].l(i);r=N(i),i.forEach(d),this.h()},h(){b(t,"class","perkCol")},m(o,i){T(o,t,i);for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(t,null);E(t,r)},p(o,i){if(i&96){n=o[14];let a;for(a=0;a<n.length;a+=1){const l=xe(o,n,a);s[a]?s[a].p(l,i):(s[a]=He(l),s[a].c(),s[a].m(t,r))}for(;a<s.length;a+=1)s[a].d(1);s.length=n.length}},d(o){o&&d(t),ze(s,o)}}}function Tr(e){let t=console.log(e[0])+"",r,n,s,o,i,a;const l=[Ar,Er],f=[];function m(h,y){return h[4]?0:1}return o=m(e),i=f[o]=l[o](e),{c(){r=U(t),n=q(),s=w("div"),i.c(),this.h()},l(h){r=I(h,t),n=N(h),s=v(h,"DIV",{class:!0});var y=A(s);i.l(y),y.forEach(d),this.h()},h(){b(s,"class","item svelte-fc7gww")},m(h,y){T(h,r,y),T(h,n,y),T(h,s,y),f[o].m(s,null),a=!0},p(h,[y]){(!a||y&1)&&t!==(t=console.log(h[0])+"")&&ae(r,t),i.p(h,y)},i(h){a||(pe(i),a=!0)},o(h){ge(i),a=!1},d(h){h&&d(r),h&&d(n),h&&d(s),f[o].d()}}}function kr(e,t,r){let n,s,o,i;Y(e,ft,c=>r(7,s=c)),Y(e,ht,c=>r(8,o=c)),Y(e,dt,c=>r(9,i=c));let{data:a}=t;const l=ut([[],[],[],[]]);Y(e,l,c=>r(1,n=c));const f=i.url.hash.substr(1),m=s[f]?.displayProperties?.name,y=[1,2,3,4].map(c=>s[f]?.sockets.socketEntries[c].randomizedPlugSetHash).filter(c=>c>0).map(c=>o[c].reusablePlugItems.map(u=>u.plugItemHash)),S=new RegExp("Enhanced"),_=y.map(function(c){return c.map(function(u){return{id:u,name:s[u]?.displayProperties?.name,icon:s[u]?.displayProperties?.iconSequences[1]?.frames[0],enhanced:s[u]?.itemTypeDisplayName.match(S)?"enhanced":"basic"}})}),P=(c,u)=>c.includes(u)?c.filter(p=>p!=u):[...c,u];function g(c){c.target.dataset.perkid;let u=c.target.dataset.colid;c.target.classList.toggle("selected"),ct(l,n[u]=P(n[u],c.target.dataset.perkid),n)}return e.$$set=c=>{"data"in c&&r(0,a=c.data)},[a,n,l,f,m,_,g]}class Dr extends fe{constructor(t){super(),he(this,t,kr,Tr,de,{data:0})}}export{Dr as default};
