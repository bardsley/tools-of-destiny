function _(){return typeof navigator=="object"&&"userAgent"in navigator?navigator.userAgent:typeof process=="object"&&"version"in process?`Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`:"<environment undetectable>"}var A={},le={get exports(){return A},set exports(e){A=e}},he=M;function M(e,r,t,n){if(typeof t!="function")throw new Error("method for before hook must be a function");return n||(n={}),Array.isArray(r)?r.reverse().reduce(function(s,i){return M.bind(null,e,i,s,n)},t)():Promise.resolve().then(function(){return e.registry[r]?e.registry[r].reduce(function(s,i){return i.hook.bind(null,s,n)},t)():t(n)})}var de=pe;function pe(e,r,t,n){var s=n;e.registry[t]||(e.registry[t]=[]),r==="before"&&(n=function(i,o){return Promise.resolve().then(s.bind(null,o)).then(i.bind(null,o))}),r==="after"&&(n=function(i,o){var a;return Promise.resolve().then(i.bind(null,o)).then(function(u){return a=u,s(a,o)}).then(function(){return a})}),r==="error"&&(n=function(i,o){return Promise.resolve().then(i.bind(null,o)).catch(function(a){return s(a,o)})}),e.registry[t].push({hook:n,orig:s})}var ye=be;function be(e,r,t){if(e.registry[r]){var n=e.registry[r].map(function(s){return s.orig}).indexOf(t);n!==-1&&e.registry[r].splice(n,1)}}var X=he,ge=de,me=ye,q=Function.bind,I=q.bind(q);function W(e,r,t){var n=I(me,null).apply(null,t?[r,t]:[r]);e.api={remove:n},e.remove=n,["before","error","after","wrap"].forEach(function(s){var i=t?[r,s,t]:[r,s];e[s]=e.api[s]=I(ge,null).apply(null,i)})}function we(){var e="h",r={registry:{}},t=X.bind(null,r,e);return W(t,r,e),t}function J(){var e={registry:{}},r=X.bind(null,e);return W(r,e),r}var H=!1;function w(){return H||(console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'),H=!0),J()}w.Singular=we.bind();w.Collection=J.bind();le.exports=w;A.Hook=w;A.Singular=w.Singular;var ve=A.Collection=w.Collection;/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function C(e){return Object.prototype.toString.call(e)==="[object Object]"}function K(e){var r,t;return C(e)===!1?!1:(r=e.constructor,r===void 0?!0:(t=r.prototype,!(C(t)===!1||t.hasOwnProperty("isPrototypeOf")===!1)))}function Ee(e){return e?Object.keys(e).reduce((r,t)=>(r[t.toLowerCase()]=e[t],r),{}):{}}function Z(e,r){const t=Object.assign({},e);return Object.keys(r).forEach(n=>{K(r[n])?n in e?t[n]=Z(e[n],r[n]):Object.assign(t,{[n]:r[n]}):Object.assign(t,{[n]:r[n]})}),t}function N(e){for(const r in e)e[r]===void 0&&delete e[r];return e}function B(e,r,t){if(typeof r=="string"){let[s,i]=r.split(" ");t=Object.assign(i?{method:s,url:i}:{url:s},t)}else t=Object.assign({},r);t.headers=Ee(t.headers),N(t),N(t.headers);const n=Z(e||{},t);return e&&e.mediaType.previews.length&&(n.mediaType.previews=e.mediaType.previews.filter(s=>!n.mediaType.previews.includes(s)).concat(n.mediaType.previews)),n.mediaType.previews=n.mediaType.previews.map(s=>s.replace(/-preview/,"")),n}function Ae(e,r){const t=/\?/.test(e)?"&":"?",n=Object.keys(r);return n.length===0?e:e+t+n.map(s=>s==="q"?"q="+r.q.split("+").map(encodeURIComponent).join("+"):`${s}=${encodeURIComponent(r[s])}`).join("&")}const Te=/\{[^}]+\}/g;function Oe(e){return e.replace(/^\W+|\W+$/g,"").split(/,/)}function je(e){const r=e.match(Te);return r?r.map(Oe).reduce((t,n)=>t.concat(n),[]):[]}function F(e,r){return Object.keys(e).filter(t=>!r.includes(t)).reduce((t,n)=>(t[n]=e[n],t),{})}function Q(e){return e.split(/(%[0-9A-Fa-f]{2})/g).map(function(r){return/%[0-9A-Fa-f]/.test(r)||(r=encodeURI(r).replace(/%5B/g,"[").replace(/%5D/g,"]")),r}).join("")}function m(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(r){return"%"+r.charCodeAt(0).toString(16).toUpperCase()})}function v(e,r,t){return r=e==="+"||e==="#"?Q(r):m(r),t?m(t)+"="+r:r}function g(e){return e!=null}function S(e){return e===";"||e==="&"||e==="?"}function _e(e,r,t,n){var s=e[t],i=[];if(g(s)&&s!=="")if(typeof s=="string"||typeof s=="number"||typeof s=="boolean")s=s.toString(),n&&n!=="*"&&(s=s.substring(0,parseInt(n,10))),i.push(v(r,s,S(r)?t:""));else if(n==="*")Array.isArray(s)?s.filter(g).forEach(function(o){i.push(v(r,o,S(r)?t:""))}):Object.keys(s).forEach(function(o){g(s[o])&&i.push(v(r,s[o],o))});else{const o=[];Array.isArray(s)?s.filter(g).forEach(function(a){o.push(v(r,a))}):Object.keys(s).forEach(function(a){g(s[a])&&(o.push(m(a)),o.push(v(r,s[a].toString())))}),S(r)?i.push(m(t)+"="+o.join(",")):o.length!==0&&i.push(o.join(","))}else r===";"?g(s)&&i.push(m(t)):s===""&&(r==="&"||r==="?")?i.push(m(t)+"="):s===""&&i.push("");return i}function Se(e){return{expand:Re.bind(null,e)}}function Re(e,r){var t=["+","#",".","/",";","?","&"];return e.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g,function(n,s,i){if(s){let a="";const u=[];if(t.indexOf(s.charAt(0))!==-1&&(a=s.charAt(0),s=s.substr(1)),s.split(/,/g).forEach(function(d){var p=/([^:\*]*)(?::(\d+)|(\*))?/.exec(d);u.push(_e(r,a,p[1],p[2]||p[3]))}),a&&a!=="+"){var o=",";return a==="?"?o="&":a!=="#"&&(o=a),(u.length!==0?a:"")+u.join(o)}else return u.join(",")}else return Q(i)})}function Y(e){let r=e.method.toUpperCase(),t=(e.url||"/").replace(/:([a-z]\w+)/g,"{$1}"),n=Object.assign({},e.headers),s,i=F(e,["method","baseUrl","url","headers","request","mediaType"]);const o=je(t);t=Se(t).expand(i),/^http/.test(t)||(t=e.baseUrl+t);const a=Object.keys(e).filter(p=>o.includes(p)).concat("baseUrl"),u=F(i,a);if(!/application\/octet-stream/i.test(n.accept)&&(e.mediaType.format&&(n.accept=n.accept.split(/,/).map(p=>p.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/,`application/vnd$1$2.${e.mediaType.format}`)).join(",")),e.mediaType.previews.length)){const p=n.accept.match(/[\w-]+(?=-preview)/g)||[];n.accept=p.concat(e.mediaType.previews).map(ce=>{const fe=e.mediaType.format?`.${e.mediaType.format}`:"+json";return`application/vnd.github.${ce}-preview${fe}`}).join(",")}return["GET","HEAD"].includes(r)?t=Ae(t,u):"data"in u?s=u.data:Object.keys(u).length&&(s=u),!n["content-type"]&&typeof s<"u"&&(n["content-type"]="application/json; charset=utf-8"),["PATCH","PUT"].includes(r)&&typeof s>"u"&&(s=""),Object.assign({method:r,url:t,headers:n},typeof s<"u"?{body:s}:null,e.request?{request:e.request}:null)}function Ue(e,r,t){return Y(B(e,r,t))}function ee(e,r){const t=B(e,r),n=Ue.bind(null,t);return Object.assign(n,{DEFAULTS:t,defaults:ee.bind(null,t),merge:B.bind(null,t),parse:Y})}const Be="7.0.5",xe=`octokit-endpoint.js/${Be} ${_()}`,Pe={method:"GET",baseUrl:"https://api.github.com",headers:{accept:"application/vnd.github.v3+json","user-agent":xe},mediaType:{format:"",previews:[]}},De=ee(null,Pe);var f=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof f<"u"&&f,l={searchParams:"URLSearchParams"in f,iterable:"Symbol"in f&&"iterator"in Symbol,blob:"FileReader"in f&&"Blob"in f&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in f,arrayBuffer:"ArrayBuffer"in f};function $e(e){return e&&DataView.prototype.isPrototypeOf(e)}if(l.arrayBuffer)var ke=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],qe=ArrayBuffer.isView||function(e){return e&&ke.indexOf(Object.prototype.toString.call(e))>-1};function O(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function D(e){return typeof e!="string"&&(e=String(e)),e}function $(e){var r={next:function(){var t=e.shift();return{done:t===void 0,value:t}}};return l.iterable&&(r[Symbol.iterator]=function(){return r}),r}function c(e){this.map={},e instanceof c?e.forEach(function(r,t){this.append(t,r)},this):Array.isArray(e)?e.forEach(function(r){this.append(r[0],r[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(r){this.append(r,e[r])},this)}c.prototype.append=function(e,r){e=O(e),r=D(r);var t=this.map[e];this.map[e]=t?t+", "+r:r};c.prototype.delete=function(e){delete this.map[O(e)]};c.prototype.get=function(e){return e=O(e),this.has(e)?this.map[e]:null};c.prototype.has=function(e){return this.map.hasOwnProperty(O(e))};c.prototype.set=function(e,r){this.map[O(e)]=D(r)};c.prototype.forEach=function(e,r){for(var t in this.map)this.map.hasOwnProperty(t)&&e.call(r,this.map[t],t,this)};c.prototype.keys=function(){var e=[];return this.forEach(function(r,t){e.push(t)}),$(e)};c.prototype.values=function(){var e=[];return this.forEach(function(r){e.push(r)}),$(e)};c.prototype.entries=function(){var e=[];return this.forEach(function(r,t){e.push([t,r])}),$(e)};l.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);function R(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function re(e){return new Promise(function(r,t){e.onload=function(){r(e.result)},e.onerror=function(){t(e.error)}})}function Ie(e){var r=new FileReader,t=re(r);return r.readAsArrayBuffer(e),t}function He(e){var r=new FileReader,t=re(r);return r.readAsText(e),t}function Ce(e){for(var r=new Uint8Array(e),t=new Array(r.length),n=0;n<r.length;n++)t[n]=String.fromCharCode(r[n]);return t.join("")}function L(e){if(e.slice)return e.slice(0);var r=new Uint8Array(e.byteLength);return r.set(new Uint8Array(e)),r.buffer}function te(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:l.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:l.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:l.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():l.arrayBuffer&&l.blob&&$e(e)?(this._bodyArrayBuffer=L(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||qe(e))?this._bodyArrayBuffer=L(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):l.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},l.blob&&(this.blob=function(){var e=R(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=R(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(Ie)}),this.text=function(){var e=R(this);if(e)return e;if(this._bodyBlob)return He(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(Ce(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l.formData&&(this.formData=function(){return this.text().then(Le)}),this.json=function(){return this.text().then(JSON.parse)},this}var Ne=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Fe(e){var r=e.toUpperCase();return Ne.indexOf(r)>-1?r:e}function b(e,r){if(!(this instanceof b))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');r=r||{};var t=r.body;if(e instanceof b){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,r.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!t&&e._bodyInit!=null&&(t=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=r.credentials||this.credentials||"same-origin",(r.headers||!this.headers)&&(this.headers=new c(r.headers)),this.method=Fe(r.method||this.method||"GET"),this.mode=r.mode||this.mode||null,this.signal=r.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&t)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(t),(this.method==="GET"||this.method==="HEAD")&&(r.cache==="no-store"||r.cache==="no-cache")){var n=/([?&])_=[^&]*/;if(n.test(this.url))this.url=this.url.replace(n,"$1_="+new Date().getTime());else{var s=/\?/;this.url+=(s.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}b.prototype.clone=function(){return new b(this,{body:this._bodyInit})};function Le(e){var r=new FormData;return e.trim().split("&").forEach(function(t){if(t){var n=t.split("="),s=n.shift().replace(/\+/g," "),i=n.join("=").replace(/\+/g," ");r.append(decodeURIComponent(s),decodeURIComponent(i))}}),r}function Ve(e){var r=new c,t=e.replace(/\r?\n[\t ]+/g," ");return t.split("\r").map(function(n){return n.indexOf(`
`)===0?n.substr(1,n.length):n}).forEach(function(n){var s=n.split(":"),i=s.shift().trim();if(i){var o=s.join(":").trim();r.append(i,o)}}),r}te.call(b.prototype);function h(e,r){if(!(this instanceof h))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');r||(r={}),this.type="default",this.status=r.status===void 0?200:r.status,this.ok=this.status>=200&&this.status<300,this.statusText=r.statusText===void 0?"":""+r.statusText,this.headers=new c(r.headers),this.url=r.url||"",this._initBody(e)}te.call(h.prototype);h.prototype.clone=function(){return new h(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})};h.error=function(){var e=new h(null,{status:0,statusText:""});return e.type="error",e};var Ge=[301,302,303,307,308];h.redirect=function(e,r){if(Ge.indexOf(r)===-1)throw new RangeError("Invalid status code");return new h(null,{status:r,headers:{location:e}})};var y=f.DOMException;try{new y}catch{y=function(r,t){this.message=r,this.name=t;var n=Error(r);this.stack=n.stack},y.prototype=Object.create(Error.prototype),y.prototype.constructor=y}function ne(e,r){return new Promise(function(t,n){var s=new b(e,r);if(s.signal&&s.signal.aborted)return n(new y("Aborted","AbortError"));var i=new XMLHttpRequest;function o(){i.abort()}i.onload=function(){var u={status:i.status,statusText:i.statusText,headers:Ve(i.getAllResponseHeaders()||"")};u.url="responseURL"in i?i.responseURL:u.headers.get("X-Request-URL");var d="response"in i?i.response:i.responseText;setTimeout(function(){t(new h(d,u))},0)},i.onerror=function(){setTimeout(function(){n(new TypeError("Network request failed"))},0)},i.ontimeout=function(){setTimeout(function(){n(new TypeError("Network request failed"))},0)},i.onabort=function(){setTimeout(function(){n(new y("Aborted","AbortError"))},0)};function a(u){try{return u===""&&f.location.href?f.location.href:u}catch{return u}}i.open(s.method,a(s.url),!0),s.credentials==="include"?i.withCredentials=!0:s.credentials==="omit"&&(i.withCredentials=!1),"responseType"in i&&(l.blob?i.responseType="blob":l.arrayBuffer&&s.headers.get("Content-Type")&&s.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(i.responseType="arraybuffer")),r&&typeof r.headers=="object"&&!(r.headers instanceof c)?Object.getOwnPropertyNames(r.headers).forEach(function(u){i.setRequestHeader(u,D(r.headers[u]))}):s.headers.forEach(function(u,d){i.setRequestHeader(d,u)}),s.signal&&(s.signal.addEventListener("abort",o),i.onreadystatechange=function(){i.readyState===4&&s.signal.removeEventListener("abort",o)}),i.send(typeof s._bodyInit>"u"?null:s._bodyInit)})}ne.polyfill=!0;f.fetch||(f.fetch=ne,f.Headers=c,f.Request=b,f.Response=h);var ze=self.fetch.bind(self);class V extends Error{constructor(r){super(r),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="Deprecation"}}var T={},Me={get exports(){return T},set exports(e){T=e}},Xe=se;function se(e,r){if(e&&r)return se(e)(r);if(typeof e!="function")throw new TypeError("need wrapper function");return Object.keys(e).forEach(function(n){t[n]=e[n]}),t;function t(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];var i=e.apply(this,n),o=n[n.length-1];return typeof i=="function"&&i!==o&&Object.keys(o).forEach(function(a){i[a]=o[a]}),i}}var ie=Xe;Me.exports=ie(j);T.strict=ie(oe);j.proto=j(function(){Object.defineProperty(Function.prototype,"once",{value:function(){return j(this)},configurable:!0}),Object.defineProperty(Function.prototype,"onceStrict",{value:function(){return oe(this)},configurable:!0})});function j(e){var r=function(){return r.called?r.value:(r.called=!0,r.value=e.apply(this,arguments))};return r.called=!1,r}function oe(e){var r=function(){if(r.called)throw new Error(r.onceError);return r.called=!0,r.value=e.apply(this,arguments)},t=e.name||"Function wrapped with `once`";return r.onceError=t+" shouldn't be called more than once",r.called=!1,r}const We=T(e=>console.warn(e)),Je=T(e=>console.warn(e));class E extends Error{constructor(r,t,n){super(r),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="HttpError",this.status=t;let s;"headers"in n&&typeof n.headers<"u"&&(s=n.headers),"response"in n&&(this.response=n.response,s=n.response.headers);const i=Object.assign({},n.request);n.request.headers.authorization&&(i.headers=Object.assign({},n.request.headers,{authorization:n.request.headers.authorization.replace(/ .*$/," [REDACTED]")})),i.url=i.url.replace(/\bclient_secret=\w+/g,"client_secret=[REDACTED]").replace(/\baccess_token=\w+/g,"access_token=[REDACTED]"),this.request=i,Object.defineProperty(this,"code",{get(){return We(new V("[@octokit/request-error] `error.code` is deprecated, use `error.status`.")),t}}),Object.defineProperty(this,"headers",{get(){return Je(new V("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`.")),s||{}}})}}const Ke="6.2.3";function Ze(e){return e.arrayBuffer()}function G(e){const r=e.request&&e.request.log?e.request.log:console;(K(e.body)||Array.isArray(e.body))&&(e.body=JSON.stringify(e.body));let t={},n,s;return(e.request&&e.request.fetch||globalThis.fetch||ze)(e.url,Object.assign({method:e.method,body:e.body,headers:e.headers,redirect:e.redirect},e.request)).then(async o=>{s=o.url,n=o.status;for(const a of o.headers)t[a[0]]=a[1];if("deprecation"in t){const a=t.link&&t.link.match(/<([^>]+)>; rel="deprecation"/),u=a&&a.pop();r.warn(`[@octokit/request] "${e.method} ${e.url}" is deprecated. It is scheduled to be removed on ${t.sunset}${u?`. See ${u}`:""}`)}if(!(n===204||n===205)){if(e.method==="HEAD"){if(n<400)return;throw new E(o.statusText,n,{response:{url:s,status:n,headers:t,data:void 0},request:e})}if(n===304)throw new E("Not modified",n,{response:{url:s,status:n,headers:t,data:await U(o)},request:e});if(n>=400){const a=await U(o);throw new E(Qe(a),n,{response:{url:s,status:n,headers:t,data:a},request:e})}return U(o)}}).then(o=>({status:n,url:s,headers:t,data:o})).catch(o=>{throw o instanceof E||o.name==="AbortError"?o:new E(o.message,500,{request:e})})}async function U(e){const r=e.headers.get("content-type");return/application\/json/.test(r)?e.json():!r||/^text\/|charset=utf-8$/.test(r)?e.text():Ze(e)}function Qe(e){return typeof e=="string"?e:"message"in e?Array.isArray(e.errors)?`${e.message}: ${e.errors.map(JSON.stringify).join(", ")}`:e.message:`Unknown error: ${JSON.stringify(e)}`}function x(e,r){const t=e.defaults(r);return Object.assign(function(s,i){const o=t.merge(s,i);if(!o.request||!o.request.hook)return G(t.parse(o));const a=(u,d)=>G(t.parse(t.merge(u,d)));return Object.assign(a,{endpoint:t,defaults:x.bind(null,t)}),o.request.hook(a,o)},{endpoint:t,defaults:x.bind(null,t)})}const P=x(De,{headers:{"user-agent":`octokit-request.js/${Ke} ${_()}`}}),Ye="5.0.5";function er(e){return`Request failed due to following response errors:
`+e.errors.map(r=>` - ${r.message}`).join(`
`)}class rr extends Error{constructor(r,t,n){super(er(n)),this.request=r,this.headers=t,this.response=n,this.name="GraphqlResponseError",this.errors=n.errors,this.data=n.data,Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}}const tr=["method","baseUrl","url","headers","request","query","mediaType"],nr=["query","method","url"],z=/\/api\/v3\/?$/;function sr(e,r,t){if(t){if(typeof r=="string"&&"query"in t)return Promise.reject(new Error('[@octokit/graphql] "query" cannot be used as variable name'));for(const o in t)if(nr.includes(o))return Promise.reject(new Error(`[@octokit/graphql] "${o}" cannot be used as variable name`))}const n=typeof r=="string"?Object.assign({query:r},t):r,s=Object.keys(n).reduce((o,a)=>tr.includes(a)?(o[a]=n[a],o):(o.variables||(o.variables={}),o.variables[a]=n[a],o),{}),i=n.baseUrl||e.endpoint.DEFAULTS.baseUrl;return z.test(i)&&(s.url=i.replace(z,"/api/graphql")),e(s).then(o=>{if(o.data.errors){const a={};for(const u of Object.keys(o.headers))a[u]=o.headers[u];throw new rr(s,a,o.data)}return o.data.data})}function k(e,r){const t=e.defaults(r);return Object.assign((s,i)=>sr(t,s,i),{defaults:k.bind(null,t),endpoint:t.endpoint})}k(P,{headers:{"user-agent":`octokit-graphql.js/${Ye} ${_()}`},method:"POST",url:"/graphql"});function ir(e){return k(e,{method:"POST",url:"/graphql"})}const or=/^v1\./,ar=/^ghs_/,ur=/^ghu_/;async function cr(e){const r=e.split(/\./).length===3,t=or.test(e)||ar.test(e),n=ur.test(e);return{type:"token",token:e,tokenType:r?"app":t?"installation":n?"user-to-server":"oauth"}}function fr(e){return e.split(/\./).length===3?`bearer ${e}`:`token ${e}`}async function lr(e,r,t,n){const s=r.endpoint.merge(t,n);return s.headers.authorization=fr(e),r(s)}const hr=function(r){if(!r)throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");if(typeof r!="string")throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");return r=r.replace(/^(token|bearer) +/i,""),Object.assign(cr.bind(null,r),{hook:lr.bind(null,r)})},ae="4.2.0";class ue{constructor(r={}){const t=new ve,n={baseUrl:P.endpoint.DEFAULTS.baseUrl,headers:{},request:Object.assign({},r.request,{hook:t.bind(null,"request")}),mediaType:{previews:[],format:""}};if(n.headers["user-agent"]=[r.userAgent,`octokit-core.js/${ae} ${_()}`].filter(Boolean).join(" "),r.baseUrl&&(n.baseUrl=r.baseUrl),r.previews&&(n.mediaType.previews=r.previews),r.timeZone&&(n.headers["time-zone"]=r.timeZone),this.request=P.defaults(n),this.graphql=ir(this.request).defaults(n),this.log=Object.assign({debug:()=>{},info:()=>{},warn:console.warn.bind(console),error:console.error.bind(console)},r.log),this.hook=t,r.authStrategy){const{authStrategy:i,...o}=r,a=i(Object.assign({request:this.request,log:this.log,octokit:this,octokitOptions:o},r.auth));t.wrap("request",a.hook),this.auth=a}else if(!r.auth)this.auth=async()=>({type:"unauthenticated"});else{const i=hr(r.auth);t.wrap("request",i.hook),this.auth=i}this.constructor.plugins.forEach(i=>{Object.assign(this,i(this,r))})}static defaults(r){return class extends this{constructor(...n){const s=n[0]||{};if(typeof r=="function"){super(r(s));return}super(Object.assign({},r,s,s.userAgent&&r.userAgent?{userAgent:`${s.userAgent} ${r.userAgent}`}:null))}}}static plugin(...r){var t;const n=this.plugins;return t=class extends this{},t.plugins=n.concat(r.filter(i=>!n.includes(i))),t}}ue.VERSION=ae;ue.plugins=[];export{ue as O};
