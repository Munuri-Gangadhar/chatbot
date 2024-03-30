(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(n,e){if(!n)throw ft(e)},ft=function(n){return new Error("Firebase Database ("+go.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xl=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},yi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(d=64)),s.push(t[u],t[h],t[d],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Pl;const d=r<<2|a>>4;if(s.push(d),c!==64){const p=a<<4&240|c>>2;if(s.push(p),h!==64){const f=c<<6&192|h;s.push(f)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Pl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wo=function(n){const e=yo(n);return yi.encodeByteArray(e,!0)},In=function(n){return wo(n).replace(/\./g,"")},js=function(n){try{return yi.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(n){return bo(void 0,n)}function bo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!kl(t)||(n[t]=bo(n[t],e[t]));return n}function kl(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=()=>Ol().__FIREBASE_DEFAULTS__,Ml=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&js(n[1]);return e&&JSON.parse(e)},Co=()=>{try{return Dl()||Ml()||Fl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ll=n=>{var e,t;return(t=(e=Co())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Bl=n=>{const e=Ll(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Wl=()=>{var n;return(n=Co())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[In(JSON.stringify(t)),In(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vo(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ul())}function Hl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Eo(){return go.NODE_ADMIN===!0}function jl(){try{return typeof indexedDB=="object"}catch{return!1}}function Vl(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql="FirebaseError";class Xt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ql,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,So.prototype.create)}}class So{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Gl(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,a,s)}}function Gl(n,e){return n.replace(zl,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const zl=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n){return JSON.parse(n)}function M(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Mt(js(r[0])||""),t=Mt(js(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Kl=function(n){const e=Io(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Yl=function(n){const e=Io(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ct(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function cr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Tn(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Vs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(hr(r)&&hr(o)){if(!Vs(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function hr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function wi(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,_(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},fs=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(n){return n&&n._delegate?n._delegate:n}class Ft{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new ds;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tc(e))try{this.getOrInitializeService({instanceIdentifier:Me})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Me){return this.instances.has(e)}getOptions(e=Me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ec(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Me){return this.component?this.component.multipleInstances?e:Me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ec(n){return n===Me?void 0:n}function tc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(R||(R={}));const sc={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},ic=R.INFO,rc={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},oc=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=rc[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class To{constructor(e){this.name=e,this._logLevel=ic,this._logHandler=oc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const ac=(n,e)=>e.some(t=>n instanceof t);let ur,dr;function lc(){return ur||(ur=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cc(){return dr||(dr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ro=new WeakMap,qs=new WeakMap,Ao=new WeakMap,Ts=new WeakMap,bi=new WeakMap;function hc(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ae(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ro.set(t,n)}).catch(()=>{}),bi.set(e,n),e}function uc(n){if(qs.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});qs.set(n,e)}let Gs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qs.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ao.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ae(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function dc(n){Gs=n(Gs)}function fc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Rs(this),e,...t);return Ao.set(s,e.sort?e.sort():[e]),Ae(s)}:cc().includes(n)?function(...e){return n.apply(Rs(this),e),Ae(Ro.get(this))}:function(...e){return Ae(n.apply(Rs(this),e))}}function pc(n){return typeof n=="function"?fc(n):(n instanceof IDBTransaction&&uc(n),ac(n,lc())?new Proxy(n,Gs):n)}function Ae(n){if(n instanceof IDBRequest)return hc(n);if(Ts.has(n))return Ts.get(n);const e=pc(n);return e!==n&&(Ts.set(n,e),bi.set(e,n)),e}const Rs=n=>bi.get(n);function _c(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=Ae(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Ae(o.result),l.oldVersion,l.newVersion,Ae(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const mc=["get","getKey","getAll","getAllKeys","count"],gc=["put","add","delete","clear"],As=new Map;function fr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(As.get(e))return As.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=gc.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||mc.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return As.set(e,r),r}dc(n=>({...n,get:(e,t,s)=>fr(e,t)||n.get(e,t,s),has:(e,t)=>!!fr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wc(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function wc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zs="@firebase/app",pr="0.9.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He=new To("@firebase/app"),bc="@firebase/app-compat",Cc="@firebase/analytics-compat",vc="@firebase/analytics",Ec="@firebase/app-check-compat",Sc="@firebase/app-check",Ic="@firebase/auth",Tc="@firebase/auth-compat",Rc="@firebase/database",Ac="@firebase/database-compat",xc="@firebase/functions",Pc="@firebase/functions-compat",Nc="@firebase/installations",kc="@firebase/installations-compat",Oc="@firebase/messaging",Dc="@firebase/messaging-compat",Mc="@firebase/performance",Fc="@firebase/performance-compat",Lc="@firebase/remote-config",Bc="@firebase/remote-config-compat",Wc="@firebase/storage",$c="@firebase/storage-compat",Uc="@firebase/firestore",Hc="@firebase/firestore-compat",jc="firebase",Vc="9.20.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="[DEFAULT]",qc={[zs]:"fire-core",[bc]:"fire-core-compat",[vc]:"fire-analytics",[Cc]:"fire-analytics-compat",[Sc]:"fire-app-check",[Ec]:"fire-app-check-compat",[Ic]:"fire-auth",[Tc]:"fire-auth-compat",[Rc]:"fire-rtdb",[Ac]:"fire-rtdb-compat",[xc]:"fire-fn",[Pc]:"fire-fn-compat",[Nc]:"fire-iid",[kc]:"fire-iid-compat",[Oc]:"fire-fcm",[Dc]:"fire-fcm-compat",[Mc]:"fire-perf",[Fc]:"fire-perf-compat",[Lc]:"fire-rc",[Bc]:"fire-rc-compat",[Wc]:"fire-gcs",[$c]:"fire-gcs-compat",[Uc]:"fire-fst",[Hc]:"fire-fst-compat","fire-js":"fire-js",[jc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Map,Ys=new Map;function Gc(n,e){try{n.container.addComponent(e)}catch(t){He.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function An(n){const e=n.name;if(Ys.has(e))return He.debug(`There were multiple attempts to register component ${e}.`),!1;Ys.set(e,n);for(const t of Rn.values())Gc(t,n);return!0}function zc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xe=new So("app","Firebase",Kc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=Vc;function xo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ks,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw xe.create("bad-app-name",{appName:String(i)});if(t||(t=Wl()),!t)throw xe.create("no-options");const r=Rn.get(i);if(r){if(Vs(t,r.options)&&Vs(s,r.config))return r;throw xe.create("duplicate-app",{appName:i})}const o=new nc(i);for(const l of Ys.values())o.addComponent(l);const a=new Yc(t,s,o);return Rn.set(i,a),a}function Xc(n=Ks){const e=Rn.get(n);if(!e&&n===Ks)return xo();if(!e)throw xe.create("no-app",{appName:n});return e}function nt(n,e,t){var s;let i=(s=qc[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),He.warn(a.join(" "));return}An(new Ft(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="firebase-heartbeat-database",Zc=1,Lt="firebase-heartbeat-store";let xs=null;function Po(){return xs||(xs=_c(Jc,Zc,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Lt)}}}).catch(n=>{throw xe.create("idb-open",{originalErrorMessage:n.message})})),xs}async function eh(n){try{return(await Po()).transaction(Lt).objectStore(Lt).get(No(n))}catch(e){if(e instanceof Xt)He.warn(e.message);else{const t=xe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});He.warn(t.message)}}}async function _r(n,e){try{const s=(await Po()).transaction(Lt,"readwrite");return await s.objectStore(Lt).put(e,No(n)),s.done}catch(t){if(t instanceof Xt)He.warn(t.message);else{const s=xe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});He.warn(s.message)}}}function No(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const th=1024,nh=30*24*60*60*1e3;class sh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rh(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=nh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mr(),{heartbeatsToSend:t,unsentEntries:s}=ih(this._heartbeatsCache.heartbeats),i=In(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function mr(){return new Date().toISOString().substring(0,10)}function ih(n,e=th){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),gr(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),gr(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class rh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jl()?Vl().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _r(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return _r(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gr(n){return In(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(n){An(new Ft("platform-logger",e=>new yc(e),"PRIVATE")),An(new Ft("heartbeat",e=>new sh(e),"PRIVATE")),nt(zs,pr,n),nt(zs,pr,"esm2017"),nt("fire-js","")}oh("");var ah="firebase",lh="9.20.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(ah,lh,"app");const yr="@firebase/database",wr="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko="";function ch(n){ko=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),M(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Mt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Se(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hh(e)}}catch{}return new uh},Be=Oo("localStorage"),Qs=Oo("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=new To("@firebase/database"),dh=function(){let n=1;return function(){return n++}}(),Do=function(n){const e=Jl(n),t=new Xl;t.update(e);const s=t.digest();return yi.encodeByteArray(s)},Jt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Jt.apply(null,s):typeof s=="object"?e+=M(s):e+=s,e+=" "}return e};let Ue=null,br=!0;const fh=function(n,e){_(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(st.logLevel=R.VERBOSE,Ue=st.log.bind(st),e&&Qs.set("logging_enabled",!0)):typeof n=="function"?Ue=n:(Ue=null,Qs.remove("logging_enabled"))},q=function(...n){if(br===!0&&(br=!1,Ue===null&&Qs.get("logging_enabled")===!0&&fh(!0)),Ue){const e=Jt.apply(null,n);Ue(e)}},Zt=function(n){return function(...e){q(n,...e)}},Xs=function(...n){const e="FIREBASE INTERNAL ERROR: "+Jt(...n);st.error(e)},Ee=function(...n){const e=`FIREBASE FATAL ERROR: ${Jt(...n)}`;throw st.error(e),new Error(e)},Z=function(...n){const e="FIREBASE WARNING: "+Jt(...n);st.warn(e)},ph=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Mo=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},_h=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ht="[MIN_NAME]",je="[MAX_NAME]",pt=function(n,e){if(n===e)return 0;if(n===ht||e===je)return-1;if(e===ht||n===je)return 1;{const t=Cr(n),s=Cr(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},mh=function(n,e){return n===e?0:n<e?-1:1},gt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+M(e))},Ci=function(n){if(typeof n!="object"||n===null)return M(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=M(e[s]),t+=":",t+=Ci(n[e[s]]);return t+="}",t},Fo=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ee(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Lo=function(n){_(!Mo(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},gh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const bh=new RegExp("^-?(0*)\\d{1,10}$"),Ch=-2147483648,vh=2147483647,Cr=function(n){if(bh.test(n)){const e=Number(n);if(e>=Ch&&e<=vh)return e}return null},_t=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Z("Exception was thrown by user callback.",t),e},Math.floor(0))}},Eh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Z(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(q("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Z(e)}}class it{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}it.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="5",Bo="v",Wo="s",$o="r",Uo="f",Ho=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jo="ls",Vo="p",Js="ac",qo="websocket",Go="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Be.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Be.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Th(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ko(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let s;if(e===qo)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Go)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Th(n)&&(t.ns=n.namespace);const i=[];return ee(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this.counters_={}}incrementCounter(e,t=1){Se(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Nl(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps={},Ns={};function Ei(n){const e=n.toString();return Ps[e]||(Ps[e]=new Rh),Ps[e]}function Ah(n,e){const t=n.toString();return Ns[t]||(Ns[t]=e()),Ns[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&_t(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="start",Ph="close",Nh="pLPCommand",kh="pRTLPCB",Yo="id",Qo="pw",Xo="ser",Oh="cb",Dh="seg",Mh="ts",Fh="d",Lh="dframe",Jo=1870,Zo=30,Bh=Jo-Zo,Wh=25e3,$h=3e4;class et{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zt(e),this.stats_=Ei(t),this.urlFn=l=>(this.appCheckToken&&(l[Js]=this.appCheckToken),Ko(t,Go,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new xh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($h)),_h(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Si((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===vr)this.id=a,this.password=l;else if(o===Ph)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[vr]="t",s[Xo]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Oh]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Bo]=vi,this.transportSessionId&&(s[Wo]=this.transportSessionId),this.lastSessionId&&(s[jo]=this.lastSessionId),this.applicationId&&(s[Vo]=this.applicationId),this.appCheckToken&&(s[Js]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ho.test(location.hostname)&&(s[$o]=Uo);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){et.forceAllow_=!0}static forceDisallow(){et.forceDisallow_=!0}static isAvailable(){return et.forceAllow_?!0:!et.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gh()&&!yh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=M(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=wo(t),i=Fo(s,Bh);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Lh]="t",s[Yo]=e,s[Qo]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=M(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Si{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=dh(),window[Nh+this.uniqueCallbackIdentifier]=e,window[kh+this.uniqueCallbackIdentifier]=t,this.myIFrame=Si.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){q("frame writing exception"),a.stack&&q(a.stack),q(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||q("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Yo]=this.myID,e[Qo]=this.myPW,e[Xo]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zo+s.length<=Jo;){const o=this.pendingSegs.shift();s=s+"&"+Dh+i+"="+o.seg+"&"+Mh+i+"="+o.ts+"&"+Fh+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Wh)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{q("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=16384,Hh=45e3;let xn=null;typeof MozWebSocket<"u"?xn=MozWebSocket:typeof WebSocket<"u"&&(xn=WebSocket);class le{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zt(this.connId),this.stats_=Ei(t),this.connURL=le.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Bo]=vi,typeof location<"u"&&location.hostname&&Ho.test(location.hostname)&&(o[$o]=Uo),t&&(o[Wo]=t),s&&(o[jo]=s),i&&(o[Js]=i),r&&(o[Vo]=r),Ko(e,qo,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Be.set("previous_websocket_failure",!0);try{let s;Eo(),this.mySock=new xn(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&xn!==null&&!le.forceDisallow_}static previouslyFailed(){return Be.isInMemoryStorage||Be.get("previous_websocket_failure")===!0}markConnectionHealthy(){Be.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Mt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=M(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Fo(t,Uh);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Hh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}le.responsesRequiredToBeHealthy=2;le.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[et,le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=le&&le.isAvailable();let s=t&&!le.previouslyFailed();if(e.webSocketOnly&&(t||Z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[le];else{const i=this.transports_=[];for(const r of Bt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Bt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh=6e4,Vh=5e3,qh=10*1024,Gh=100*1024,ks="t",Er="d",zh="s",Sr="r",Kh="e",Ir="o",Tr="a",Rr="n",Ar="p",Yh="h";class Qh{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zt("c:"+this.id+":"),this.transportManager_=new Bt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=xt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Gh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ks in e){const t=e[ks];t===Tr?this.upgradeIfSecondaryHealthy_():t===Sr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ir&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=gt("t",e),s=gt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ar,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Tr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Rr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=gt("t",e),s=gt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=gt(ks,e);if(Er in e){const s=e[Er];if(t===Yh){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Rr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===zh?this.onConnectionShutdown_(s):t===Sr?this.onReset_(s):t===Kh?Xs("Server Error: "+s):t===Ir?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),vi!==s&&Z("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),xt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Vh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ar,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Be.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends ta{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vo()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Pn}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=32,Pr=768;class T{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function I(){return new T("")}function E(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ke(n){return n.pieces_.length-n.pieceNum_}function A(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new T(n.pieces_,e)}function na(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Xh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function sa(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ia(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new T(e,0)}function F(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof T)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new T(t,0)}function v(n){return n.pieceNum_>=n.pieces_.length}function Q(n,e){const t=E(n),s=E(e);if(t===null)return e;if(t===s)return Q(A(n),A(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function ra(n,e){if(ke(n)!==ke(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ce(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ke(n)>ke(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Jh{constructor(e,t){this.errorPrefix_=t,this.parts_=sa(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=fs(this.parts_[s]);oa(this)}}function Zh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=fs(e),oa(n)}function eu(n){const e=n.parts_.pop();n.byteLength_-=fs(e),n.parts_.length>0&&(n.byteLength_-=1)}function oa(n){if(n.byteLength_>Pr)throw new Error(n.errorPrefix_+"has a key path longer than "+Pr+" bytes ("+n.byteLength_+").");if(n.parts_.length>xr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xr+") or object contains a cycle "+Fe(n))}function Fe(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends ta{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ii}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=1e3,tu=60*5*1e3,Nr=30*1e3,nu=1.3,su=3e4,iu="server_kill",kr=3;class Ce extends ea{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ce.nextPersistentConnectionId_++,this.log_=Zt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yt,this.maxReconnectDelay_=tu,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Eo())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ii.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(M(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new ds,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ce.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Se(e,"w")){const s=ct(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Z(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Yl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Nr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Kl(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+M(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Xs("Unrecognized action received from server: "+M(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>su&&(this.reconnectDelay_=yt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nu)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ce.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?q("getToken() completed but was canceled"):(q("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new Qh(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{Z(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(iu)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Z(h),l())}}}interrupt(e){q("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){q("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cr(this.interruptReasons_)&&(this.reconnectDelay_=yt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ci(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new T(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){q("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kr&&(this.reconnectDelay_=Nr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){q("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ko.replace(/\./g,"-")]=1,vo()?e["framework.cordova"]=1:Hl()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pn.getInstance().currentlyOnline();return cr(this.interruptReasons_)&&e}}Ce.nextPersistentConnectionId_=0;Ce.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new b(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new b(ht,e),i=new b(ht,t);return this.compare(s,i)!==0}minPost(){return b.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn;class aa extends ps{static get __EMPTY_NODE(){return rn}static set __EMPTY_NODE(e){rn=e}compare(e,t){return pt(e.name,t.name)}isDefinedOn(e){throw ft("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return b.MIN}maxPost(){return new b(je,rn)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new b(e,rn)}toString(){return".key"}}const rt=new aa;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class B{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??B.RED,this.left=i??J.EMPTY_NODE,this.right=r??J.EMPTY_NODE}copy(e,t,s,i,r){return new B(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return J.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return J.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}B.RED=!0;B.BLACK=!1;class ru{copy(e,t,s,i,r){return this}insert(e,t,s){return new B(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class J{constructor(e,t=J.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new J(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,B.BLACK,null,null))}remove(e){return new J(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,B.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new on(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new on(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new on(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new on(this.root_,null,this.comparator_,!0,e)}}J.EMPTY_NODE=new ru;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(n,e){return pt(n.name,e.name)}function Ti(n,e){return pt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs;function au(n){Zs=n}const la=function(n){return typeof n=="number"?"number:"+Lo(n):"string:"+n},ca=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Se(e,".sv"),"Priority must be a string or number.")}else _(n===Zs||n.isEmpty(),"priority of unexpected type.");_(n===Zs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or;class L{constructor(e,t=L.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ca(this.priorityNode_)}static set __childrenNodeConstructor(e){Or=e}static get __childrenNodeConstructor(){return Or}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new L(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:L.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return v(e)?this:E(e)===".priority"?this.priorityNode_:L.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:L.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=E(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(_(s!==".priority"||ke(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,L.__childrenNodeConstructor.EMPTY_NODE.updateChild(A(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+la(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Lo(this.value_):e+=this.value_,this.lazyHash_=Do(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===L.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof L.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=L.VALUE_TYPE_ORDER.indexOf(t),r=L.VALUE_TYPE_ORDER.indexOf(s);return _(i>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}L.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha,ua;function lu(n){ha=n}function cu(n){ua=n}class hu extends ps{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?pt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return b.MIN}maxPost(){return new b(je,new L("[PRIORITY-POST]",ua))}makePost(e,t){const s=ha(e);return new b(t,new L("[PRIORITY-POST]",s))}toString(){return".priority"}}const D=new hu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=Math.log(2);class du{constructor(e){const t=r=>parseInt(Math.log(r)/uu,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Nn=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new B(d,h.node,B.BLACK,null,null);{const p=parseInt(u/2,10)+l,f=i(l,p),w=i(p+1,c);return h=n[p],d=t?t(h):h,new B(d,h.node,B.BLACK,f,w)}},r=function(l){let c=null,u=null,h=n.length;const d=function(f,w){const y=h-f,x=h;h-=f;const P=i(y+1,x),G=n[y],z=t?t(G):G;p(new B(z,G.node,w,null,P))},p=function(f){c?(c.left=f,c=f):(u=f,c=f)};for(let f=0;f<l.count;++f){const w=l.nextBitIsOne(),y=Math.pow(2,l.count-(f+1));w?d(y,B.BLACK):(d(y,B.BLACK),d(y,B.RED))}return u},o=new du(n.length),a=r(o);return new J(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os;const Qe={};class we{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return _(Qe&&D,"ChildrenNode.ts has not been loaded"),Os=Os||new we({".priority":Qe},{".priority":D}),Os}get(e){const t=ct(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof J?t:null}hasIndex(e){return Se(this.indexSet_,e.toString())}addIndex(e,t){_(e!==rt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(b.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Nn(s,e.getCompare()):a=Qe;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new we(u,c)}addToIndexes(e,t){const s=Tn(this.indexes_,(i,r)=>{const o=ct(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),i===Qe)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(b.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Nn(a,o.getCompare())}else return Qe;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new b(e.name,a))),l.insert(e,e.node)}});return new we(s,this.indexSet_)}removeFromIndexes(e,t){const s=Tn(this.indexes_,i=>{if(i===Qe)return i;{const r=t.get(e.name);return r?i.remove(new b(e.name,r)):i}});return new we(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wt;class g{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ca(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return wt||(wt=new g(new J(Ti),null,we.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||wt}updatePriority(e){return this.children_.isEmpty()?this:new g(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?wt:t}}getChild(e){const t=E(e);return t===null?this:this.getImmediateChild(t).getChild(A(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new b(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?wt:this.priorityNode_;return new g(i,o,r)}}updateChild(e,t){const s=E(e);if(s===null)return t;{_(E(e)!==".priority"||ke(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(A(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(D,(o,a)=>{t[o]=a.val(e),s++,r&&g.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+la(this.getPriority().val())+":"),this.forEachChild(D,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Do(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new b(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new b(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new b(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,b.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,b.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===en?-1:0}withIndex(e){if(e===rt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new g(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===rt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(D),i=t.getIterator(D);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===rt?null:this.indexMap_.get(e.toString())}}g.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fu extends g{constructor(){super(new J(Ti),g.EMPTY_NODE,we.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return g.EMPTY_NODE}isEmpty(){return!1}}const en=new fu;Object.defineProperties(b,{MIN:{value:new b(ht,g.EMPTY_NODE)},MAX:{value:new b(je,en)}});aa.__EMPTY_NODE=g.EMPTY_NODE;L.__childrenNodeConstructor=g;au(en);cu(en);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=!0;function W(n,e=null){if(n===null)return g.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new L(t,W(e))}if(!(n instanceof Array)&&pu){const t=[];let s=!1;if(ee(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=W(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new b(o,l)))}}),t.length===0)return g.EMPTY_NODE;const r=Nn(t,ou,o=>o.name,Ti);if(s){const o=Nn(t,D.getCompare());return new g(r,W(e),new we({".priority":o},{".priority":D}))}else return new g(r,W(e),we.Default)}else{let t=g.EMPTY_NODE;return ee(n,(s,i)=>{if(Se(n,s)&&s.substring(0,1)!=="."){const r=W(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(W(e))}}lu(W);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends ps{constructor(e){super(),this.indexPath_=e,_(!v(e)&&E(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?pt(e.name,t.name):r}makePost(e,t){const s=W(e),i=g.EMPTY_NODE.updateChild(this.indexPath_,s);return new b(t,i)}maxPost(){const e=g.EMPTY_NODE.updateChild(this.indexPath_,en);return new b(je,e)}toString(){return sa(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu extends ps{compare(e,t){const s=e.node.compareTo(t.node);return s===0?pt(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return b.MIN}maxPost(){return b.MAX}makePost(e,t){const s=W(e);return new b(t,s)}toString(){return".value"}}const gu=new mu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(n){return{type:"value",snapshotNode:n}}function ut(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Wt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function $t(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function yu(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Wt(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ut(t,s)):o.trackChildChange($t(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(D,(i,r)=>{t.hasChild(i)||s.trackChildChange(Wt(i,r))}),t.isLeafNode()||t.forEachChild(D,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange($t(i,r,o))}else s.trackChildChange(ut(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?g.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.indexedFilter_=new Ri(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ut.getStartPost_(e),this.endPost_=Ut.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new b(t,s))||(s=g.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=g.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(g.EMPTY_NODE);const r=this;return t.forEachChild(D,(o,a)=>{r.matches(new b(o,a))||(i=i.updateImmediateChild(o,g.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ut(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new b(t,s))||(s=g.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=g.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=g.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(g.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,g.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,p)=>h(p,d)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new b(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const p=d==null?1:o(d,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange($t(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Wt(t,h));const w=a.updateImmediateChild(t,g.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(ut(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Wt(c.name,c.node)),r.trackChildChange(ut(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,g.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=D}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ht}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:je}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===D}copy(){const e=new Ai;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bu(n){return n.loadsAllData()?new Ri(n.getIndex()):n.hasLimit()?new wu(n):new Ut(n)}function Dr(n){const e={};if(n.isDefault())return e;let t;if(n.index_===D?t="$priority":n.index_===gu?t="$value":n.index_===rt?t="$key":(_(n.index_ instanceof _u,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=M(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=M(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+M(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=M(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+M(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Mr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==D&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends ea{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Zt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=kn.getListenId_(e,s),a={};this.listens_[o]=a;const l=Dr(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),ct(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=kn.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Dr(e._queryParams),s=e._path.toString(),i=new ds;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ql(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Mt(a.responseText)}catch{Z("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Z("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this.rootNode_=g.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return{value:null,children:new Map}}function fa(n,e,t){if(v(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=E(e);n.children.has(s)||n.children.set(s,On());const i=n.children.get(s);e=A(e),fa(i,e,t)}}function ei(n,e,t){n.value!==null?t(e,n.value):vu(n,(s,i)=>{const r=new T(e.toString()+"/"+s);ei(i,r,t)})}function vu(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ee(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=10*1e3,Su=30*1e3,Iu=5*60*1e3;class Tu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Eu(e);const s=Fr+(Su-Fr)*Math.random();xt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ee(e,(i,r)=>{r>0&&Se(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),xt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Iu))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(he||(he={}));function pa(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xi(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pi(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=he.ACK_USER_WRITE,this.source=pa()}operationForChild(e){if(v(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new T(e));return new Dn(I(),t,this.revert)}}else return _(E(this.path)===e,"operationForChild called for unrelated child."),new Dn(A(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t){this.source=e,this.path=t,this.type=he.LISTEN_COMPLETE}operationForChild(e){return v(this.path)?new Ht(this.source,I()):new Ht(this.source,A(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=he.OVERWRITE}operationForChild(e){return v(this.path)?new Ve(this.source,I(),this.snap.getImmediateChild(e)):new Ve(this.source,A(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=he.MERGE}operationForChild(e){if(v(this.path)){const t=this.children.subtree(new T(e));return t.isEmpty()?null:t.value?new Ve(this.source,I(),t.value):new jt(this.source,I(),t)}else return _(E(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jt(this.source,A(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(v(e))return this.isFullyInitialized()&&!this.filtered_;const t=E(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Au(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(yu(o.childName,o.snapshotNode))}),bt(n,i,"child_removed",e,s,t),bt(n,i,"child_added",e,s,t),bt(n,i,"child_moved",r,s,t),bt(n,i,"child_changed",e,s,t),bt(n,i,"value",e,s,t),i}function bt(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Pu(n,a,l)),o.forEach(a=>{const l=xu(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function xu(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Pu(n,e,t){if(e.childName==null||t.childName==null)throw ft("Should only compare child_ events.");const s=new b(e.childName,e.snapshotNode),i=new b(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n,e){return{eventCache:n,serverCache:e}}function Pt(n,e,t,s){return _s(new Oe(e,t,s),n.serverCache)}function _a(n,e,t,s){return _s(n.eventCache,new Oe(e,t,s))}function Mn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function qe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds;const Nu=()=>(Ds||(Ds=new J(mh)),Ds);class N{constructor(e,t=Nu()){this.value=e,this.children=t}static fromObject(e){let t=new N(null);return ee(e,(s,i)=>{t=t.set(new T(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:I(),value:this.value};if(v(e))return null;{const s=E(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(A(e),t);return r!=null?{path:F(new T(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(v(e))return this;{const t=E(e),s=this.children.get(t);return s!==null?s.subtree(A(e)):new N(null)}}set(e,t){if(v(e))return new N(t,this.children);{const s=E(e),r=(this.children.get(s)||new N(null)).set(A(e),t),o=this.children.insert(s,r);return new N(this.value,o)}}remove(e){if(v(e))return this.children.isEmpty()?new N(null):new N(null,this.children);{const t=E(e),s=this.children.get(t);if(s){const i=s.remove(A(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new N(null):new N(this.value,r)}else return this}}get(e){if(v(e))return this.value;{const t=E(e),s=this.children.get(t);return s?s.get(A(e)):null}}setTree(e,t){if(v(e))return t;{const s=E(e),r=(this.children.get(s)||new N(null)).setTree(A(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new N(this.value,o)}}fold(e){return this.fold_(I(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(F(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,I(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(v(e))return null;{const r=E(e),o=this.children.get(r);return o?o.findOnPath_(A(e),F(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,I(),t)}foreachOnPath_(e,t,s){if(v(e))return this;{this.value&&s(t,this.value);const i=E(e),r=this.children.get(i);return r?r.foreachOnPath_(A(e),F(t,i),s):new N(null)}}foreach(e){this.foreach_(I(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(F(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.writeTree_=e}static empty(){return new ue(new N(null))}}function Nt(n,e,t){if(v(e))return new ue(new N(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Q(i,e);return r=r.updateChild(o,t),new ue(n.writeTree_.set(i,r))}else{const i=new N(t),r=n.writeTree_.setTree(e,i);return new ue(r)}}}function Lr(n,e,t){let s=n;return ee(t,(i,r)=>{s=Nt(s,F(e,i),r)}),s}function Br(n,e){if(v(e))return ue.empty();{const t=n.writeTree_.setTree(e,new N(null));return new ue(t)}}function ti(n,e){return Ke(n,e)!=null}function Ke(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Q(t.path,e)):null}function Wr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(D,(s,i)=>{e.push(new b(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new b(s,i.value))}),e}function Pe(n,e){if(v(e))return n;{const t=Ke(n,e);return t!=null?new ue(new N(t)):new ue(n.writeTree_.subtree(e))}}function ni(n){return n.writeTree_.isEmpty()}function dt(n,e){return ma(I(),n.writeTree_,e)}function ma(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ma(F(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(F(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n,e){return ba(e,n)}function ku(n,e,t,s,i){_(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Nt(n.visibleWrites,e,t)),n.lastWriteId=s}function Ou(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Du(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Mu(a,s.path)?i=!1:ce(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Fu(n),!0;if(s.snap)n.visibleWrites=Br(n.visibleWrites,s.path);else{const a=s.children;ee(a,l=>{n.visibleWrites=Br(n.visibleWrites,F(s.path,l))})}return!0}else return!1}function Mu(n,e){if(n.snap)return ce(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ce(F(n.path,t),e))return!0;return!1}function Fu(n){n.visibleWrites=ga(n.allWrites,Lu,I()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Lu(n){return n.visible}function ga(n,e,t){let s=ue.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ce(t,o)?(a=Q(t,o),s=Nt(s,a,r.snap)):ce(o,t)&&(a=Q(o,t),s=Nt(s,I(),r.snap.getChild(a)));else if(r.children){if(ce(t,o))a=Q(t,o),s=Lr(s,a,r.children);else if(ce(o,t))if(a=Q(o,t),v(a))s=Lr(s,I(),r.children);else{const l=ct(r.children,E(a));if(l){const c=l.getChild(A(a));s=Nt(s,I(),c)}}}else throw ft("WriteRecord should have .snap or .children")}}return s}function ya(n,e,t,s,i){if(!s&&!i){const r=Ke(n.visibleWrites,e);if(r!=null)return r;{const o=Pe(n.visibleWrites,e);if(ni(o))return t;if(t==null&&!ti(o,I()))return null;{const a=t||g.EMPTY_NODE;return dt(o,a)}}}else{const r=Pe(n.visibleWrites,e);if(!i&&ni(r))return t;if(!i&&t==null&&!ti(r,I()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ce(c.path,e)||ce(e,c.path))},a=ga(n.allWrites,o,e),l=t||g.EMPTY_NODE;return dt(a,l)}}}function Bu(n,e,t){let s=g.EMPTY_NODE;const i=Ke(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(D,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Pe(n.visibleWrites,e);return t.forEachChild(D,(o,a)=>{const l=dt(Pe(r,new T(o)),a);s=s.updateImmediateChild(o,l)}),Wr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Pe(n.visibleWrites,e);return Wr(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Wu(n,e,t,s,i){_(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=F(e,t);if(ti(n.visibleWrites,r))return null;{const o=Pe(n.visibleWrites,r);return ni(o)?i.getChild(t):dt(o,i.getChild(t))}}function $u(n,e,t,s){const i=F(e,t),r=Ke(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Pe(n.visibleWrites,i);return dt(o,s.getNode().getImmediateChild(t))}else return null}function Uu(n,e){return Ke(n.visibleWrites,e)}function Hu(n,e,t,s,i,r,o){let a;const l=Pe(n.visibleWrites,e),c=Ke(l,I());if(c!=null)a=c;else if(t!=null)a=dt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=d.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=d.getNext();return u}else return[]}function ju(){return{visibleWrites:ue.empty(),allWrites:[],lastWriteId:-1}}function Fn(n,e,t,s){return ya(n.writeTree,n.treePath,e,t,s)}function Ni(n,e){return Bu(n.writeTree,n.treePath,e)}function $r(n,e,t,s){return Wu(n.writeTree,n.treePath,e,t,s)}function Ln(n,e){return Uu(n.writeTree,F(n.treePath,e))}function Vu(n,e,t,s,i,r){return Hu(n.writeTree,n.treePath,e,t,s,i,r)}function ki(n,e,t){return $u(n.writeTree,n.treePath,e,t)}function wa(n,e){return ba(F(n.treePath,e),n.writeTree)}function ba(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,$t(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Wt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,ut(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,$t(s,e.snapshotNode,i.oldSnap));else throw ft("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Ca=new Gu;class Oi{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Oe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ki(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qe(this.viewCache_),r=Vu(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zu(n){return{filter:n}}function Ku(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Yu(n,e,t,s,i){const r=new qu;let o,a;if(t.type===he.OVERWRITE){const c=t;c.source.fromUser?o=si(n,e,c.path,c.snap,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!v(c.path),o=Bn(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===he.MERGE){const c=t;c.source.fromUser?o=Xu(n,e,c.path,c.children,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ii(n,e,c.path,c.children,s,i,a,r))}else if(t.type===he.ACK_USER_WRITE){const c=t;c.revert?o=ed(n,e,c.path,s,i,r):o=Ju(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===he.LISTEN_COMPLETE)o=Zu(n,e,t.path,s,r);else throw ft("Unknown operation type: "+t.type);const l=r.getChanges();return Qu(e,o,l),{viewCache:o,changes:l}}function Qu(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Mn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(da(Mn(e)))}}function va(n,e,t,s,i,r){const o=e.eventCache;if(Ln(s,t)!=null)return e;{let a,l;if(v(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=qe(e),u=c instanceof g?c:g.EMPTY_NODE,h=Ni(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Fn(s,qe(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=E(t);if(c===".priority"){_(ke(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=$r(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=A(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=$r(s,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ki(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Pt(e,a,o.isFullyInitialized()||v(t),n.filter.filtersNodes())}}function Bn(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(v(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=E(t);if(!l.isCompleteForPath(t)&&ke(t)>1)return e;const f=A(t),y=l.getNode().getImmediateChild(p).updateChild(f,s);p===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),p,y,f,Ca,null)}const h=_a(e,c,l.isFullyInitialized()||v(t),u.filtersNodes()),d=new Oi(i,h,r);return va(n,h,t,i,d,a)}function si(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new Oi(i,e,r);if(v(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Pt(e,c,!0,n.filter.filtersNodes());else{const h=E(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Pt(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=A(t),p=a.getNode().getImmediateChild(h);let f;if(v(d))f=s;else{const w=u.getCompleteChild(h);w!=null?na(d)===".priority"&&w.getChild(ia(d)).isEmpty()?f=w:f=w.updateChild(d,s):f=g.EMPTY_NODE}if(p.equals(f))l=e;else{const w=n.filter.updateChild(a.getNode(),h,f,d,u,o);l=Pt(e,w,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Ur(n,e){return n.eventCache.isCompleteForChild(e)}function Xu(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=F(t,l);Ur(e,E(u))&&(a=si(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=F(t,l);Ur(e,E(u))||(a=si(n,a,u,c,i,r,o))}),a}function Hr(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ii(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;v(t)?c=s:c=new N(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),f=Hr(n,p,d);l=Bn(n,l,new T(h),f,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const p=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!p){const f=e.serverCache.getNode().getImmediateChild(h),w=Hr(n,f,d);l=Bn(n,l,new T(h),w,i,r,o,a)}}),l}function Ju(n,e,t,s,i,r,o){if(Ln(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(v(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Bn(n,e,t,l.getNode().getChild(t),i,r,a,o);if(v(t)){let c=new N(null);return l.getNode().forEachChild(rt,(u,h)=>{c=c.set(new T(u),h)}),ii(n,e,t,c,i,r,a,o)}else return e}else{let c=new N(null);return s.foreach((u,h)=>{const d=F(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),ii(n,e,t,c,i,r,a,o)}}function Zu(n,e,t,s,i){const r=e.serverCache,o=_a(e,r.getNode(),r.isFullyInitialized()||v(t),r.isFiltered());return va(n,o,t,s,Ca,i)}function ed(n,e,t,s,i,r){let o;if(Ln(s,t)!=null)return e;{const a=new Oi(s,e,i),l=e.eventCache.getNode();let c;if(v(t)||E(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Fn(s,qe(e));else{const h=e.serverCache.getNode();_(h instanceof g,"serverChildren would be complete if leaf node"),u=Ni(s,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=E(t);let h=ki(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,A(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,g.EMPTY_NODE,A(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fn(s,qe(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ln(s,I())!=null,Pt(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ri(s.getIndex()),r=bu(s);this.processor_=zu(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(g.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(g.EMPTY_NODE,a.getNode(),null),u=new Oe(l,o.isFullyInitialized(),i.filtersNodes()),h=new Oe(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=_s(h,u),this.eventGenerator_=new Ru(this.query_)}get query(){return this.query_}}function nd(n){return n.viewCache_.serverCache.getNode()}function sd(n){return Mn(n.viewCache_)}function id(n,e){const t=qe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!v(e)&&!t.getImmediateChild(E(e)).isEmpty())?t.getChild(e):null}function jr(n){return n.eventRegistrations_.length===0}function rd(n,e){n.eventRegistrations_.push(e)}function Vr(n,e,t){const s=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function qr(n,e,t,s){e.type===he.MERGE&&e.source.queryId!==null&&(_(qe(n.viewCache_),"We should always have a full cache before handling merges"),_(Mn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Yu(n.processor_,i,e,t,s);return Ku(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ea(n,r.changes,r.viewCache.eventCache.getNode(),null)}function od(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(D,(r,o)=>{s.push(ut(r,o))}),t.isFullyInitialized()&&s.push(da(t.getNode())),Ea(n,s,t.getNode(),e)}function Ea(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Au(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn;class Sa{constructor(){this.views=new Map}}function ad(n){_(!Wn,"__referenceConstructor has already been defined"),Wn=n}function ld(){return _(Wn,"Reference.ts has not been loaded"),Wn}function cd(n){return n.views.size===0}function Di(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return _(r!=null,"SyncTree gave us an op for an invalid query."),qr(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(qr(o,e,t,s));return r}}function Ia(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Fn(t,i?s:null),l=!1;a?l=!0:s instanceof g?(a=Ni(t,s),l=!1):(a=g.EMPTY_NODE,l=!1);const c=_s(new Oe(a,l,!1),new Oe(s,i,!1));return new td(e,c)}return o}function hd(n,e,t,s,i,r){const o=Ia(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),rd(o,t),od(o,t)}function ud(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=De(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Vr(c,t,s)),jr(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Vr(l,t,s)),jr(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!De(n)&&r.push(new(ld())(e._repo,e._path)),{removed:r,events:o}}function Ta(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ne(n,e){let t=null;for(const s of n.views.values())t=t||id(s,e);return t}function Ra(n,e){if(e._queryParams.loadsAllData())return gs(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Aa(n,e){return Ra(n,e)!=null}function De(n){return gs(n)!=null}function gs(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n;function dd(n){_(!$n,"__referenceConstructor has already been defined"),$n=n}function fd(){return _($n,"Reference.ts has not been loaded"),$n}let pd=1;class Gr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new N(null),this.pendingWriteTree_=ju(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function xa(n,e,t,s,i){return ku(n.pendingWriteTree_,e,t,s,i),i?nn(n,new Ve(pa(),e,t)):[]}function We(n,e,t=!1){const s=Ou(n.pendingWriteTree_,e);if(Du(n.pendingWriteTree_,e)){let r=new N(null);return s.snap!=null?r=r.set(I(),!0):ee(s.children,o=>{r=r.set(new T(o),!0)}),nn(n,new Dn(s.path,r,t))}else return[]}function tn(n,e,t){return nn(n,new Ve(xi(),e,t))}function _d(n,e,t){const s=N.fromObject(t);return nn(n,new jt(xi(),e,s))}function md(n,e){return nn(n,new Ht(xi(),e))}function gd(n,e,t){const s=Fi(n,t);if(s){const i=Li(s),r=i.path,o=i.queryId,a=Q(r,e),l=new Ht(Pi(o),a);return Bi(n,r,l)}else return[]}function Pa(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Aa(o,e))){const l=ud(o,e,t,s);cd(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,p)=>De(p));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const p=Cd(d);for(let f=0;f<p.length;++f){const w=p[f],y=w.query,x=Da(n,w);n.listenProvider_.startListening(kt(y),Vt(n,y),x.hashFn,x.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(kt(e),null):c.forEach(d=>{const p=n.queryToTagMap.get(ys(d));n.listenProvider_.stopListening(kt(d),p)}))}vd(n,c)}return a}function Na(n,e,t,s){const i=Fi(n,s);if(i!=null){const r=Li(i),o=r.path,a=r.queryId,l=Q(o,e),c=new Ve(Pi(a),l,t);return Bi(n,o,c)}else return[]}function yd(n,e,t,s){const i=Fi(n,s);if(i){const r=Li(i),o=r.path,a=r.queryId,l=Q(o,e),c=N.fromObject(t),u=new jt(Pi(a),l,c);return Bi(n,o,u)}else return[]}function wd(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,p)=>{const f=Q(d,i);r=r||Ne(p,f),o=o||De(p)});let a=n.syncPointTree_.get(i);a?(o=o||De(a),r=r||Ne(a,I())):(a=new Sa,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=g.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,f)=>{const w=Ne(f,I());w&&(r=r.updateImmediateChild(p,w))}));const c=Aa(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=ys(e);_(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const p=Ed();n.queryToTagMap.set(d,p),n.tagToQueryMap.set(p,d)}const u=ms(n.pendingWriteTree_,i);let h=hd(a,e,t,u,r,l);if(!c&&!o&&!s){const d=Ra(a,e);h=h.concat(Sd(n,e,d))}return h}function Mi(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Q(o,e),c=Ne(a,l);if(c)return c});return ya(i,e,r,t,!0)}function bd(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=Q(c,t);s=s||Ne(u,h)});let i=n.syncPointTree_.get(t);i?s=s||Ne(i,I()):(i=new Sa,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Oe(s,!0,!1):null,a=ms(n.pendingWriteTree_,e._path),l=Ia(i,e,a,r?o.getNode():g.EMPTY_NODE,r);return sd(l)}function nn(n,e){return ka(e,n.syncPointTree_,null,ms(n.pendingWriteTree_,I()))}function ka(n,e,t,s){if(v(n.path))return Oa(n,e,t,s);{const i=e.get(I());t==null&&i!=null&&(t=Ne(i,I()));let r=[];const o=E(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=wa(s,o);r=r.concat(ka(a,l,c,u))}return i&&(r=r.concat(Di(i,n,s,t))),r}}function Oa(n,e,t,s){const i=e.get(I());t==null&&i!=null&&(t=Ne(i,I()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=wa(s,o),u=n.operationForChild(o);u&&(r=r.concat(Oa(u,a,l,c)))}),i&&(r=r.concat(Di(i,n,s,t))),r}function Da(n,e){const t=e.query,s=Vt(n,t);return{hashFn:()=>(nd(e)||g.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?gd(n,t._path,s):md(n,t._path);{const r=wh(i,t);return Pa(n,t,null,r)}}}}function Vt(n,e){const t=ys(e);return n.queryToTagMap.get(t)}function ys(n){return n._path.toString()+"$"+n._queryIdentifier}function Fi(n,e){return n.tagToQueryMap.get(e)}function Li(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new T(n.substr(0,e))}}function Bi(n,e,t){const s=n.syncPointTree_.get(e);_(s,"Missing sync point for query tag that we're tracking");const i=ms(n.pendingWriteTree_,e);return Di(s,t,i,null)}function Cd(n){return n.fold((e,t,s)=>{if(t&&De(t))return[gs(t)];{let i=[];return t&&(i=Ta(t)),ee(s,(r,o)=>{i=i.concat(o)}),i}})}function kt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(fd())(n._repo,n._path):n}function vd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=ys(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Ed(){return pd++}function Sd(n,e,t){const s=e._path,i=Vt(n,e),r=Da(n,t),o=n.listenProvider_.startListening(kt(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)_(!De(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!v(c)&&u&&De(u))return[gs(u).query];{let d=[];return u&&(d=d.concat(Ta(u).map(p=>p.query))),ee(h,(p,f)=>{d=d.concat(f)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(kt(u),Vt(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Wi(t)}node(){return this.node_}}class $i{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=F(this.path_,e);return new $i(this.syncTree_,t)}node(){return Mi(this.syncTree_,this.path_)}}const Id=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},zr=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Td(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Rd(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Td=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},Rd=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&_(!1,"Unexpected increment value: "+s);const i=e.node();if(_(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Ad=function(n,e,t,s){return Ui(e,new $i(t,n),s)},Ma=function(n,e,t){return Ui(n,new Wi(e),t)};function Ui(n,e,t){const s=n.getPriority().val(),i=zr(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=zr(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new L(a,W(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new L(i))),o.forEachChild(D,(a,l)=>{const c=Ui(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ji(n,e){let t=e instanceof T?e:new T(e),s=n,i=E(t);for(;i!==null;){const r=ct(s.node.children,i)||{children:{},childCount:0};s=new Hi(i,s,r),t=A(t),i=E(t)}return s}function mt(n){return n.node.value}function Fa(n,e){n.node.value=e,ri(n)}function La(n){return n.node.childCount>0}function xd(n){return mt(n)===void 0&&!La(n)}function ws(n,e){ee(n.node.children,(t,s)=>{e(new Hi(t,n,s))})}function Ba(n,e,t,s){t&&!s&&e(n),ws(n,i=>{Ba(i,e,!0,s)}),t&&s&&e(n)}function Pd(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function sn(n){return new T(n.parent===null?n.name:sn(n.parent)+"/"+n.name)}function ri(n){n.parent!==null&&Nd(n.parent,n.name,n)}function Nd(n,e,t){const s=xd(t),i=Se(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,ri(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ri(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kd=/[\[\].#$\/\u0000-\u001F\u007F]/,Od=/[\[\].#$\u0000-\u001F\u007F]/,Ms=10*1024*1024,Wa=function(n){return typeof n=="string"&&n.length!==0&&!kd.test(n)},$a=function(n){return typeof n=="string"&&n.length!==0&&!Od.test(n)},Dd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),$a(n)},Ua=function(n,e,t,s){s&&e===void 0||Vi(wi(n,"value"),e,t)},Vi=function(n,e,t){const s=t instanceof T?new Jh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Fe(s));if(typeof e=="function")throw new Error(n+"contains a function "+Fe(s)+" with contents = "+e.toString());if(Mo(e))throw new Error(n+"contains "+e.toString()+" "+Fe(s));if(typeof e=="string"&&e.length>Ms/3&&fs(e)>Ms)throw new Error(n+"contains a string greater than "+Ms+" utf8 bytes "+Fe(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ee(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Wa(o)))throw new Error(n+" contains an invalid key ("+o+") "+Fe(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Zh(s,o),Vi(n,a,s),eu(s)}),i&&r)throw new Error(n+' contains ".value" child '+Fe(s)+" in addition to actual children.")}},Ha=function(n,e,t,s){if(!(s&&t===void 0)&&!$a(t))throw new Error(wi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Md=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ha(n,e,t,s)},qi=function(n,e){if(E(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Fd=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Wa(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Dd(t))throw new Error(wi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ja(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!ra(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function _e(n,e,t){ja(n,t),Bd(n,s=>ce(s,e)||ce(e,s))}function Bd(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(Wd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Wd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ue&&q("event: "+t.toString()),_t(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="repo_interrupt",Ud=25;class Hd{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ld,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=On(),this.transactionQueueTree_=new Hi,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function jd(n,e,t){if(n.stats_=Ei(n.repoInfo_),n.forceRestClient_||Eh())n.server_=new kn(n.repoInfo_,(s,i,r,o)=>{Kr(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Yr(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{M(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ce(n.repoInfo_,e,(s,i,r,o)=>{Kr(n,s,i,r,o)},s=>{Yr(n,s)},s=>{Vd(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Ah(n.repoInfo_,()=>new Tu(n.stats_,n.server_)),n.infoData_=new Cu,n.infoSyncTree_=new Gr({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=tn(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),zi(n,"connected",!1),n.serverSyncTree_=new Gr({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);_e(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function Va(n){const t=n.infoData_.getNode(new T(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Gi(n){return Id({timestamp:Va(n)})}function Kr(n,e,t,s,i){n.dataUpdateCount++;const r=new T(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=Tn(t,c=>W(c));o=yd(n.serverSyncTree_,r,l,i)}else{const l=W(t);o=Na(n.serverSyncTree_,r,l,i)}else if(s){const l=Tn(t,c=>W(c));o=_d(n.serverSyncTree_,r,l)}else{const l=W(t);o=tn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Cs(n,r)),_e(n.eventQueue_,a,o)}function Yr(n,e){zi(n,"connected",e),e===!1&&zd(n)}function Vd(n,e){ee(e,(t,s)=>{zi(n,t,s)})}function zi(n,e,t){const s=new T("/.info/"+e),i=W(t);n.infoData_.updateSnapshot(s,i);const r=tn(n.infoSyncTree_,s,i);_e(n.eventQueue_,s,r)}function qa(n){return n.nextWriteId_++}function qd(n,e,t){const s=bd(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=W(i).withIndex(e._queryParams.getIndex());wd(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=tn(n.serverSyncTree_,e._path,r);else{const a=Vt(n.serverSyncTree_,e);o=Na(n.serverSyncTree_,e._path,r,a)}return _e(n.eventQueue_,e._path,o),Pa(n.serverSyncTree_,e,t,null,!0),r},i=>(bs(n,"get for query "+M(e)+" failed: "+i),Promise.reject(new Error(i))))}function Gd(n,e,t,s,i){bs(n,"set",{path:e.toString(),value:t,priority:s});const r=Gi(n),o=W(t,s),a=Mi(n.serverSyncTree_,e),l=Ma(o,a,r),c=qa(n),u=xa(n.serverSyncTree_,e,l,c,!0);ja(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,p)=>{const f=d==="ok";f||Z("set at "+e+" failed: "+d);const w=We(n.serverSyncTree_,c,!f);_e(n.eventQueue_,e,w),Yd(n,i,d,p)});const h=Qa(n,e);Cs(n,h),_e(n.eventQueue_,h,[])}function zd(n){bs(n,"onDisconnectEvents");const e=Gi(n),t=On();ei(n.onDisconnect_,I(),(i,r)=>{const o=Ad(i,r,n.serverSyncTree_,e);fa(t,i,o)});let s=[];ei(t,I(),(i,r)=>{s=s.concat(tn(n.serverSyncTree_,i,r));const o=Qa(n,i);Cs(n,o)}),n.onDisconnect_=On(),_e(n.eventQueue_,I(),s)}function Kd(n){n.persistentConnection_&&n.persistentConnection_.interrupt($d)}function bs(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),q(t,...e)}function Yd(n,e,t,s){e&&_t(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Ga(n,e,t){return Mi(n.serverSyncTree_,e,t)||g.EMPTY_NODE}function Ki(n,e=n.transactionQueueTree_){if(e||vs(n,e),mt(e)){const t=Ka(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Qd(n,sn(e),t)}else La(e)&&ws(e,t=>{Ki(n,t)})}function Qd(n,e,t){const s=t.map(c=>c.currentWriteId),i=Ga(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];_(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Q(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{bs(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(We(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();vs(n,ji(n.transactionQueueTree_,e)),Ki(n,n.transactionQueueTree_),_e(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)_t(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Z("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Cs(n,e)}},o)}function Cs(n,e){const t=za(n,e),s=sn(t),i=Ka(n,t);return Xd(n,i,s),s}function Xd(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Q(t,l.path);let u=!1,h;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(We(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ud)u=!0,h="maxretry",i=i.concat(We(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Ga(n,l.path,o);l.currentInputSnapshot=d;const p=e[a].update(d.val());if(p!==void 0){Vi("transaction failed: Data returned ",p,l.path);let f=W(p);typeof p=="object"&&p!=null&&Se(p,".priority")||(f=f.updatePriority(d.getPriority()));const y=l.currentWriteId,x=Gi(n),P=Ma(f,d,x);l.currentOutputSnapshotRaw=f,l.currentOutputSnapshotResolved=P,l.currentWriteId=qa(n),o.splice(o.indexOf(y),1),i=i.concat(xa(n.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),i=i.concat(We(n.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(We(n.serverSyncTree_,l.currentWriteId,!0))}_e(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}vs(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)_t(s[a]);Ki(n,n.transactionQueueTree_)}function za(n,e){let t,s=n.transactionQueueTree_;for(t=E(e);t!==null&&mt(s)===void 0;)s=ji(s,t),e=A(e),t=E(e);return s}function Ka(n,e){const t=[];return Ya(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Ya(n,e,t){const s=mt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);ws(e,i=>{Ya(n,i,t)})}function vs(n,e){const t=mt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Fa(e,t.length>0?t:void 0)}ws(e,s=>{vs(n,s)})}function Qa(n,e){const t=sn(za(n,e)),s=ji(n.transactionQueueTree_,e);return Pd(s,i=>{Fs(n,i)}),Fs(n,s),Ba(s,i=>{Fs(n,i)}),t}function Fs(n,e){const t=mt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(We(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Fa(e,void 0):t.length=r+1,_e(n.eventQueue_,sn(e),i);for(let o=0;o<s.length;o++)_t(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Zd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Z(`Invalid query segment '${t}' in query '${n}'`)}return e}const Qr=function(n,e){const t=ef(n),s=t.namespace;t.domain==="firebase.com"&&Ee(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Ee("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ph();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new zo(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new T(t.pathString)}},ef=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=Jd(n.substring(u,h)));const d=Zd(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const f=e.indexOf(".");s=e.substring(0,f).toLowerCase(),t=e.substring(f+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",tf=function(){let n=0;const e=[];return function(t){const s=t===n;n=t;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Xr.charAt(t%64),t=Math.floor(t/64);_(t===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Xr.charAt(e[i]);return _(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+M(this.snapshot.exportVal())}}class sf{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return v(this._path)?null:na(this._path)}get ref(){return new Ie(this._repo,this._path)}get _queryIdentifier(){const e=Mr(this._queryParams),t=Ci(e);return t==="{}"?"default":t}get _queryObject(){return Mr(this._queryParams)}isEqual(e){if(e=ze(e),!(e instanceof Yi))return!1;const t=this._repo===e._repo,s=ra(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Xh(this._path)}}class Ie extends Yi{constructor(e,t){super(e,t,new Ai,!1)}get parent(){const e=ia(this._path);return e===null?null:new Ie(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new T(e),s=Gt(this.ref,e);return new qt(this._node.getChild(t),s,D)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new qt(i,Gt(this.ref,s),D)))}hasChild(e){const t=new T(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function of(n,e){return n=ze(n),n._checkNotDeleted("ref"),e!==void 0?Gt(n._root,e):n._root}function Gt(n,e){return n=ze(n),E(n._path)===null?Md("child","path",e,!1):Ha("child","path",e,!1),new Ie(n._repo,F(n._path,e))}function Xa(n,e){n=ze(n),qi("push",n._path),Ua("push",e,n._path,!0);const t=Va(n._repo),s=tf(t),i=Gt(n,s),r=Gt(n,s);let o;return e!=null?o=Ja(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function af(n){return qi("remove",n._path),Ja(n,null)}function Ja(n,e){n=ze(n),qi("set",n._path),Ua("set",e,n._path,!1);const t=new ds;return Gd(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Za(n){n=ze(n);const e=new rf(()=>{}),t=new Qi(e);return qd(n._repo,n,t).then(s=>new qt(s,new Ie(n._repo,n._path),n._queryParams.getIndex()))}class Qi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new nf("value",this,new qt(e.snapshotNode,new Ie(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new sf(this,e,t):null}matches(e){return e instanceof Qi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}ad(Ie);dd(Ie);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="FIREBASE_DATABASE_EMULATOR_HOST",oi={};let cf=!1;function hf(n,e,t,s){n.repoInfo_=new zo(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function uf(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||Ee("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),q("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Qr(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[lf]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Qr(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new it(it.OWNER):new Ih(n.name,n.options,e);Fd("Invalid Firebase Database URL",o),v(o.path)||Ee("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ff(a,n,u,new Sh(n.name,t));return new pf(h,n)}function df(n,e){const t=oi[e];(!t||t[n.key]!==n)&&Ee(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Kd(n),delete t[n.key]}function ff(n,e,t,s){let i=oi[e.name];i||(i={},oi[e.name]=i);let r=i[n.toURLString()];return r&&Ee("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Hd(n,cf,t,s),i[n.toURLString()]=r,r}class pf{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(jd(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ie(this._repo,I())),this._rootInternal}_delete(){return this._rootInternal!==null&&(df(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ee("Cannot call "+e+" on a deleted database.")}}function _f(n=Xc(),e){const t=zc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Bl("database");s&&mf(t,...s)}return t}function mf(n,e,t,s={}){n=ze(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Ee("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Ee('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new it(it.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:$l(s.mockUserToken,n.app.options.projectId);r=new it(o)}hf(i,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(n){ch(Qc),An(new Ft("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return uf(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),nt(yr,wr,n),nt(yr,wr,"esm2017")}Ce.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ce.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};gf();const Xe="4.29.2";let Jr=!1,Ot,el,tl,ai,nl,sl,il,rl,ol;function yf(n,e={auto:!1}){if(Jr)throw new Error(`you must \`import 'openai/shims/${n.kind}'\` before importing anything else from openai`);if(Ot)throw new Error(`can't \`import 'openai/shims/${n.kind}'\` after \`import 'openai/shims/${Ot}'\``);Jr=e.auto,Ot=n.kind,el=n.fetch,n.Request,n.Response,n.Headers,tl=n.FormData,n.Blob,ai=n.File,nl=n.ReadableStream,sl=n.getMultipartRequestOptions,il=n.getDefaultAgent,rl=n.fileFromPath,ol=n.isFsReadStream}class wf{constructor(e){this.body=e}get[Symbol.toStringTag](){return"MultipartBody"}}function bf({manuallyImported:n}={}){const e=n?"You may need to use polyfills":"Add one of these imports before your first `import … from 'openai'`:\n- `import 'openai/shims/node'` (if you're running on Node)\n- `import 'openai/shims/web'` (otherwise)\n";let t,s,i,r;try{t=fetch,s=Request,i=Response,r=Headers}catch(o){throw new Error(`this environment is missing the following Web Fetch API type: ${o.message}. ${e}`)}return{kind:"web",fetch:t,Request:s,Response:i,Headers:r,FormData:typeof FormData<"u"?FormData:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'FormData' is undefined. ${e}`)}},Blob:typeof Blob<"u"?Blob:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'Blob' is undefined. ${e}`)}},File:typeof File<"u"?File:class{constructor(){throw new Error(`file uploads aren't supported in this environment yet as 'File' is undefined. ${e}`)}},ReadableStream:typeof ReadableStream<"u"?ReadableStream:class{constructor(){throw new Error(`streaming isn't supported in this environment yet as 'ReadableStream' is undefined. ${e}`)}},getMultipartRequestOptions:async(o,a)=>({...a,body:new wf(o)}),getDefaultAgent:o=>{},fileFromPath:()=>{throw new Error("The `fileFromPath` function is only supported in Node. See the README for more details: https://www.github.com/openai/openai-node#file-uploads")},isFsReadStream:o=>!1}}Ot||yf(bf(),{auto:!0});class S extends Error{}class H extends S{constructor(e,t,s,i){super(`${H.makeMessage(e,t,s)}`),this.status=e,this.headers=i;const r=t;this.error=r,this.code=r==null?void 0:r.code,this.param=r==null?void 0:r.param,this.type=r==null?void 0:r.type}static makeMessage(e,t,s){const i=t!=null&&t.message?typeof t.message=="string"?t.message:JSON.stringify(t.message):t?JSON.stringify(t):s;return e&&i?`${e} ${i}`:e?`${e} status code (no body)`:i||"(no status code or body)"}static generate(e,t,s,i){if(!e)return new Es({cause:ci(t)});const r=t==null?void 0:t.error;return e===400?new al(e,r,s,i):e===401?new ll(e,r,s,i):e===403?new cl(e,r,s,i):e===404?new hl(e,r,s,i):e===409?new ul(e,r,s,i):e===422?new dl(e,r,s,i):e===429?new fl(e,r,s,i):e>=500?new pl(e,r,s,i):new H(e,r,s,i)}}class se extends H{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0),this.status=void 0}}class Es extends H{constructor({message:e,cause:t}){super(void 0,void 0,e||"Connection error.",void 0),this.status=void 0,t&&(this.cause=t)}}class Xi extends Es{constructor({message:e}={}){super({message:e??"Request timed out."})}}class al extends H{constructor(){super(...arguments),this.status=400}}class ll extends H{constructor(){super(...arguments),this.status=401}}class cl extends H{constructor(){super(...arguments),this.status=403}}class hl extends H{constructor(){super(...arguments),this.status=404}}class ul extends H{constructor(){super(...arguments),this.status=409}}class dl extends H{constructor(){super(...arguments),this.status=422}}class fl extends H{constructor(){super(...arguments),this.status=429}}class pl extends H{}class be{constructor(e,t){this.iterator=e,this.controller=t}static fromSSEResponse(e,t){let s=!1;const i=new Cf;async function*r(){if(!e.body)throw t.abort(),new S("Attempted to iterate over a response with no body");const a=new Ge,l=Zr(e.body);for await(const c of l)for(const u of a.decode(c)){const h=i.decode(u);h&&(yield h)}for(const c of a.flush()){const u=i.decode(c);u&&(yield u)}}async function*o(){if(s)throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");s=!0;let a=!1;try{for await(const l of r())if(!a){if(l.data.startsWith("[DONE]")){a=!0;continue}if(l.event===null){let c;try{c=JSON.parse(l.data)}catch(u){throw console.error("Could not parse message into JSON:",l.data),console.error("From chunk:",l.raw),u}if(c&&c.error)throw new H(void 0,c.error,void 0,void 0);yield c}else{let c;try{c=JSON.parse(l.data)}catch(u){throw console.error("Could not parse message into JSON:",l.data),console.error("From chunk:",l.raw),u}if(l.event=="error")throw new H(void 0,c.error,c.message,void 0);yield{event:l.event,data:c}}}a=!0}catch(l){if(l instanceof Error&&l.name==="AbortError")return;throw l}finally{a||t.abort()}}return new be(o,t)}static fromReadableStream(e,t){let s=!1;async function*i(){const o=new Ge,a=Zr(e);for await(const l of a)for(const c of o.decode(l))yield c;for(const l of o.flush())yield l}async function*r(){if(s)throw new Error("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");s=!0;let o=!1;try{for await(const a of i())o||a&&(yield JSON.parse(a));o=!0}catch(a){if(a instanceof Error&&a.name==="AbortError")return;throw a}finally{o||t.abort()}}return new be(r,t)}[Symbol.asyncIterator](){return this.iterator()}tee(){const e=[],t=[],s=this.iterator(),i=r=>({next:()=>{if(r.length===0){const o=s.next();e.push(o),t.push(o)}return r.shift()}});return[new be(()=>i(e),this.controller),new be(()=>i(t),this.controller)]}toReadableStream(){const e=this;let t;const s=new TextEncoder;return new nl({async start(){t=e[Symbol.asyncIterator]()},async pull(i){try{const{value:r,done:o}=await t.next();if(o)return i.close();const a=s.encode(JSON.stringify(r)+`
`);i.enqueue(a)}catch(r){i.error(r)}},async cancel(){var i;await((i=t.return)==null?void 0:i.call(t))}})}}class Cf{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;const r={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],r}if(this.chunks.push(e),e.startsWith(":"))return null;let[t,s,i]=vf(e,":");return i.startsWith(" ")&&(i=i.substring(1)),t==="event"?this.event=i:t==="data"&&this.data.push(i),null}}class Ge{constructor(){this.buffer=[],this.trailingCR=!1}decode(e){let t=this.decodeText(e);if(this.trailingCR&&(t="\r"+t,this.trailingCR=!1),t.endsWith("\r")&&(this.trailingCR=!0,t=t.slice(0,-1)),!t)return[];const s=Ge.NEWLINE_CHARS.has(t[t.length-1]||"");let i=t.split(Ge.NEWLINE_REGEXP);return s&&i.pop(),i.length===1&&!s?(this.buffer.push(i[0]),[]):(this.buffer.length>0&&(i=[this.buffer.join("")+i[0],...i.slice(1)],this.buffer=[]),s||(this.buffer=[i.pop()||""]),i)}decodeText(e){if(e==null)return"";if(typeof e=="string")return e;if(typeof Buffer<"u"){if(e instanceof Buffer)return e.toString();if(e instanceof Uint8Array)return Buffer.from(e).toString();throw new S(`Unexpected: received non-Uint8Array (${e.constructor.name}) stream chunk in an environment with a global "Buffer" defined, which this library assumes to be Node. Please report this error.`)}if(typeof TextDecoder<"u"){if(e instanceof Uint8Array||e instanceof ArrayBuffer)return this.textDecoder??(this.textDecoder=new TextDecoder("utf8")),this.textDecoder.decode(e);throw new S(`Unexpected: received non-Uint8Array/ArrayBuffer (${e.constructor.name}) in a web platform. Please report this error.`)}throw new S("Unexpected: neither Buffer nor TextDecoder are available as globals. Please report this error.")}flush(){if(!this.buffer.length&&!this.trailingCR)return[];const e=[this.buffer.join("")];return this.buffer=[],this.trailingCR=!1,e}}Ge.NEWLINE_CHARS=new Set([`
`,"\r","\v","\f","","","","","\u2028","\u2029"]);Ge.NEWLINE_REGEXP=/\r\n|[\n\r\x0b\x0c\x1c\x1d\x1e\x85\u2028\u2029]/g;function vf(n,e){const t=n.indexOf(e);return t!==-1?[n.substring(0,t),e,n.substring(t+e.length)]:[n,"",""]}function Zr(n){if(n[Symbol.asyncIterator])return n;const e=n.getReader();return{async next(){try{const t=await e.read();return t!=null&&t.done&&e.releaseLock(),t}catch(t){throw e.releaseLock(),t}},async return(){const t=e.cancel();return e.releaseLock(),await t,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}const _l=n=>n!=null&&typeof n=="object"&&typeof n.url=="string"&&typeof n.blob=="function",Ef=n=>n!=null&&typeof n=="object"&&typeof n.name=="string"&&typeof n.lastModified=="number"&&ml(n),ml=n=>n!=null&&typeof n=="object"&&typeof n.size=="number"&&typeof n.type=="string"&&typeof n.text=="function"&&typeof n.slice=="function"&&typeof n.arrayBuffer=="function",Sf=n=>Ef(n)||_l(n)||ol(n);async function gl(n,e,t={}){var i;if(n=await n,_l(n)){const r=await n.blob();return e||(e=new URL(n.url).pathname.split(/[\\/]/).pop()??"unknown_file"),new ai([r],e,t)}const s=await If(n);if(e||(e=Rf(n)??"unknown_file"),!t.type){const r=(i=s[0])==null?void 0:i.type;typeof r=="string"&&(t={...t,type:r})}return new ai(s,e,t)}async function If(n){var t;let e=[];if(typeof n=="string"||ArrayBuffer.isView(n)||n instanceof ArrayBuffer)e.push(n);else if(ml(n))e.push(await n.arrayBuffer());else if(Af(n))for await(const s of n)e.push(s);else throw new Error(`Unexpected data type: ${typeof n}; constructor: ${(t=n==null?void 0:n.constructor)==null?void 0:t.name}; props: ${Tf(n)}`);return e}function Tf(n){return`[${Object.getOwnPropertyNames(n).map(t=>`"${t}"`).join(", ")}]`}function Rf(n){var e;return Ls(n.name)||Ls(n.filename)||((e=Ls(n.path))==null?void 0:e.split(/[\\/]/).pop())}const Ls=n=>{if(typeof n=="string")return n;if(typeof Buffer<"u"&&n instanceof Buffer)return String(n)},Af=n=>n!=null&&typeof n=="object"&&typeof n[Symbol.asyncIterator]=="function",eo=n=>n&&typeof n=="object"&&n.body&&n[Symbol.toStringTag]==="MultipartBody",zt=async n=>{const e=await xf(n.body);return sl(e,n)},xf=async n=>{const e=new tl;return await Promise.all(Object.entries(n||{}).map(([t,s])=>li(e,t,s))),e},li=async(n,e,t)=>{if(t!==void 0){if(t==null)throw new TypeError(`Received null for "${e}"; to pass null in FormData, you must use the string 'null'`);if(typeof t=="string"||typeof t=="number"||typeof t=="boolean")n.append(e,String(t));else if(Sf(t)){const s=await gl(t);n.append(e,s)}else if(Array.isArray(t))await Promise.all(t.map(s=>li(n,e+"[]",s)));else if(typeof t=="object")await Promise.all(Object.entries(t).map(([s,i])=>li(n,`${e}[${s}]`,i)));else throw new TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${t} instead`)}};var Pf=globalThis&&globalThis.__classPrivateFieldSet||function(n,e,t,s,i){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?i.call(n,t):i?i.value=t:e.set(n,t),t},Nf=globalThis&&globalThis.__classPrivateFieldGet||function(n,e,t,s){if(t==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!s:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?s:t==="a"?s.call(n):s?s.value:e.get(n)},an;async function yl(n){const{response:e}=n;if(n.options.stream)return ot("response",e.status,e.url,e.headers,e.body),n.options.__streamClass?n.options.__streamClass.fromSSEResponse(e,n.controller):be.fromSSEResponse(e,n.controller);if(e.status===204)return null;if(n.options.__binaryResponse)return e;const t=e.headers.get("content-type");if((t==null?void 0:t.includes("application/json"))||(t==null?void 0:t.includes("application/vnd.api+json"))){const r=await e.json();return ot("response",e.status,e.url,e.headers,r),r}const i=await e.text();return ot("response",e.status,e.url,e.headers,i),i}class Ss extends Promise{constructor(e,t=yl){super(s=>{s(null)}),this.responsePromise=e,this.parseResponse=t}_thenUnwrap(e){return new Ss(this.responsePromise,async t=>e(await this.parseResponse(t)))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){const[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(this.parseResponse)),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}}class kf{constructor({baseURL:e,maxRetries:t=2,timeout:s=6e5,httpAgent:i,fetch:r}){this.baseURL=e,this.maxRetries=Bs("maxRetries",t),this.timeout=Bs("timeout",s),this.httpAgent=i,this.fetch=r??el}authHeaders(e){return{}}defaultHeaders(e){return{Accept:"application/json","Content-Type":"application/json","User-Agent":this.getUserAgent(),...Bf(),...this.authHeaders(e)}}validateHeaders(e,t){}defaultIdempotencyKey(){return`stainless-node-retry-${Hf()}`}get(e,t){return this.methodRequest("get",e,t)}post(e,t){return this.methodRequest("post",e,t)}patch(e,t){return this.methodRequest("patch",e,t)}put(e,t){return this.methodRequest("put",e,t)}delete(e,t){return this.methodRequest("delete",e,t)}methodRequest(e,t,s){return this.request(Promise.resolve(s).then(i=>({method:e,path:t,...i})))}getAPIList(e,t,s){return this.requestAPIList(t,{method:"get",path:e,...s})}calculateContentLength(e){if(typeof e=="string"){if(typeof Buffer<"u")return Buffer.byteLength(e,"utf8").toString();if(typeof TextEncoder<"u")return new TextEncoder().encode(e).length.toString()}return null}buildRequest(e){var f;const{method:t,path:s,query:i,headers:r={}}=e,o=eo(e.body)?e.body.body:e.body?JSON.stringify(e.body,null,2):null,a=this.calculateContentLength(o),l=this.buildURL(s,i);"timeout"in e&&Bs("timeout",e.timeout);const c=e.timeout??this.timeout,u=e.httpAgent??this.httpAgent??il(l),h=c+1e3;typeof((f=u==null?void 0:u.options)==null?void 0:f.timeout)=="number"&&h>(u.options.timeout??0)&&(u.options.timeout=h),this.idempotencyHeader&&t!=="get"&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),r[this.idempotencyHeader]=e.idempotencyKey);const d=this.buildHeaders({options:e,headers:r,contentLength:a});return{req:{method:t,...o&&{body:o},headers:d,...u&&{agent:u},signal:e.signal??null},url:l,timeout:c}}buildHeaders({options:e,headers:t,contentLength:s}){const i={};s&&(i["content-length"]=s);const r=this.defaultHeaders(e);return io(i,r),io(i,t),eo(e.body)&&Ot!=="node"&&delete i["content-type"],this.validateHeaders(i,t),i}async prepareOptions(e){}async prepareRequest(e,{url:t,options:s}){}parseHeaders(e){return e?Symbol.iterator in e?Object.fromEntries(Array.from(e).map(t=>[...t])):{...e}:{}}makeStatusError(e,t,s,i){return H.generate(e,t,s,i)}request(e,t=null){return new Ss(this.makeRequest(e,t))}async makeRequest(e,t){var u,h;const s=await e;t==null&&(t=s.maxRetries??this.maxRetries),await this.prepareOptions(s);const{req:i,url:r,timeout:o}=this.buildRequest(s);if(await this.prepareRequest(i,{url:r,options:s}),ot("request",r,s,i.headers),(u=s.signal)!=null&&u.aborted)throw new se;const a=new AbortController,l=await this.fetchWithTimeout(r,i,o,a).catch(ci);if(l instanceof Error){if((h=s.signal)!=null&&h.aborted)throw new se;if(t)return this.retryRequest(s,t);throw l.name==="AbortError"?new Xi:new Es({cause:l})}const c=Df(l.headers);if(!l.ok){if(t&&this.shouldRetry(l)){const x=`retrying, ${t} attempts remaining`;return ot(`response (error; ${x})`,l.status,r,c),this.retryRequest(s,t,c)}const d=await l.text().catch(x=>ci(x).message),p=Wf(d),f=p?void 0:d;throw ot(`response (error; ${t?"(error; no more retries left)":"(error; not retryable)"})`,l.status,r,c,f),this.makeStatusError(l.status,p,f,c)}return{response:l,options:s,controller:a}}requestAPIList(e,t){const s=this.makeRequest(t,null);return new Of(this,s,e)}buildURL(e,t){const s=Uf(e)?new URL(e):new URL(this.baseURL+(this.baseURL.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),i=this.defaultQuery();return Cl(i)||(t={...i,...t}),typeof t=="object"&&t&&!Array.isArray(t)&&(s.search=this.stringifyQuery(t)),s.toString()}stringifyQuery(e){return Object.entries(e).filter(([t,s])=>typeof s<"u").map(([t,s])=>{if(typeof s=="string"||typeof s=="number"||typeof s=="boolean")return`${encodeURIComponent(t)}=${encodeURIComponent(s)}`;if(s===null)return`${encodeURIComponent(t)}=`;throw new S(`Cannot stringify type ${typeof s}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}async fetchWithTimeout(e,t,s,i){const{signal:r,...o}=t||{};r&&r.addEventListener("abort",()=>i.abort());const a=setTimeout(()=>i.abort(),s);return this.getRequestClient().fetch.call(void 0,e,{signal:i.signal,...o}).finally(()=>{clearTimeout(a)})}getRequestClient(){return{fetch:this.fetch}}shouldRetry(e){const t=e.headers.get("x-should-retry");return t==="true"?!0:t==="false"?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,t,s){let i;const r=s==null?void 0:s["retry-after-ms"];if(r){const a=parseFloat(r);Number.isNaN(a)||(i=a)}const o=s==null?void 0:s["retry-after"];if(o&&!i){const a=parseFloat(o);Number.isNaN(a)?i=Date.parse(o)-Date.now():i=a*1e3}if(!(i&&0<=i&&i<60*1e3)){const a=e.maxRetries??this.maxRetries;i=this.calculateDefaultRetryTimeoutMillis(t,a)}return await bl(i),this.makeRequest(e,t-1)}calculateDefaultRetryTimeoutMillis(e,t){const r=t-e,o=Math.min(.5*Math.pow(2,r),8),a=1-Math.random()*.25;return o*a*1e3}getUserAgent(){return`${this.constructor.name}/JS ${Xe}`}}class wl{constructor(e,t,s,i){an.set(this,void 0),Pf(this,an,e,"f"),this.options=i,this.response=t,this.body=s}hasNextPage(){return this.getPaginatedItems().length?this.nextPageInfo()!=null:!1}async getNextPage(){const e=this.nextPageInfo();if(!e)throw new S("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");const t={...this.options};if("params"in e&&typeof t.query=="object")t.query={...t.query,...e.params};else if("url"in e){const s=[...Object.entries(t.query||{}),...e.url.searchParams.entries()];for(const[i,r]of s)e.url.searchParams.set(i,r);t.query=void 0,t.path=e.url.toString()}return await Nf(this,an,"f").requestAPIList(this.constructor,t)}async*iterPages(){let e=this;for(yield e;e.hasNextPage();)e=await e.getNextPage(),yield e}async*[(an=new WeakMap,Symbol.asyncIterator)](){for await(const e of this.iterPages())for(const t of e.getPaginatedItems())yield t}}class Of extends Ss{constructor(e,t,s){super(t,async i=>new s(e,i.response,await yl(i),i.options))}async*[Symbol.asyncIterator](){const e=await this;for await(const t of e)yield t}}const Df=n=>new Proxy(Object.fromEntries(n.entries()),{get(e,t){const s=t.toString();return e[s.toLowerCase()]||e[s]}}),Mf={method:!0,path:!0,query:!0,body:!0,headers:!0,maxRetries:!0,stream:!0,timeout:!0,httpAgent:!0,signal:!0,idempotencyKey:!0,__binaryResponse:!0,__streamClass:!0},me=n=>typeof n=="object"&&n!==null&&!Cl(n)&&Object.keys(n).every(e=>vl(Mf,e)),Ff=()=>{if(typeof Deno<"u"&&Deno.build!=null)return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":no(Deno.build.os),"X-Stainless-Arch":to(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":Deno.version};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":process.version};if(Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":no(process.platform),"X-Stainless-Arch":to(process.arch),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":process.version};const n=Lf();return n?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${n.browser}`,"X-Stainless-Runtime-Version":n.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Xe,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function Lf(){if(typeof navigator>"u"||!navigator)return null;const n=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(const{key:e,pattern:t}of n){const s=t.exec(navigator.userAgent);if(s){const i=s[1]||0,r=s[2]||0,o=s[3]||0;return{browser:e,version:`${i}.${r}.${o}`}}}return null}const to=n=>n==="x32"?"x32":n==="x86_64"||n==="x64"?"x64":n==="arm"?"arm":n==="aarch64"||n==="arm64"?"arm64":n?`other:${n}`:"unknown",no=n=>(n=n.toLowerCase(),n.includes("ios")?"iOS":n==="android"?"Android":n==="darwin"?"MacOS":n==="win32"?"Windows":n==="freebsd"?"FreeBSD":n==="openbsd"?"OpenBSD":n==="linux"?"Linux":n?`Other:${n}`:"Unknown");let so;const Bf=()=>so??(so=Ff()),Wf=n=>{try{return JSON.parse(n)}catch{return}},$f=new RegExp("^(?:[a-z]+:)?//","i"),Uf=n=>$f.test(n),bl=n=>new Promise(e=>setTimeout(e,n)),Bs=(n,e)=>{if(typeof e!="number"||!Number.isInteger(e))throw new S(`${n} must be an integer`);if(e<0)throw new S(`${n} must be a positive integer`);return e},ci=n=>n instanceof Error?n:new Error(n),Ws=n=>{var e,t,s,i,r;if(typeof process<"u")return((t=(e=process.env)==null?void 0:e[n])==null?void 0:t.trim())??void 0;if(typeof Deno<"u")return(r=(i=(s=Deno.env)==null?void 0:s.get)==null?void 0:i.call(s,n))==null?void 0:r.trim()};function Cl(n){if(!n)return!0;for(const e in n)return!1;return!0}function vl(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function io(n,e){for(const t in e){if(!vl(e,t))continue;const s=t.toLowerCase();if(!s)continue;const i=e[t];i===null?delete n[s]:i!==void 0&&(n[s]=i)}}function ot(n,...e){typeof process<"u"&&process.env.DEBUG==="true"&&console.log(`OpenAI:DEBUG:${n}`,...e)}const Hf=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const e=Math.random()*16|0;return(n==="x"?e:e&3|8).toString(16)}),jf=()=>typeof window<"u"&&typeof window.document<"u"&&typeof navigator<"u";function ro(n){return n!=null&&typeof n=="object"&&!Array.isArray(n)}class Ji extends wl{constructor(e,t,s,i){super(e,t,s,i),this.data=s.data||[],this.object=s.object}getPaginatedItems(){return this.data??[]}nextPageParams(){return null}nextPageInfo(){return null}}class Te extends wl{constructor(e,t,s,i){super(e,t,s,i),this.data=s.data||[]}getPaginatedItems(){return this.data??[]}nextPageParams(){const e=this.nextPageInfo();if(!e)return null;if("params"in e)return e.params;const t=Object.fromEntries(e.url.searchParams);return Object.keys(t).length?t:null}nextPageInfo(){var s;const e=this.getPaginatedItems();if(!e.length)return null;const t=(s=e[e.length-1])==null?void 0:s.id;return t?{params:{after:t}}:null}}class k{constructor(e){this._client=e}}let Un=class extends k{create(e,t){return this._client.post("/chat/completions",{body:e,...t,stream:e.stream??!1})}};Un||(Un={});let Hn=class extends k{constructor(){super(...arguments),this.completions=new Un(this._client)}};(function(n){n.Completions=Un})(Hn||(Hn={}));class jn extends k{create(e,t){return this._client.post("/audio/speech",{body:e,...t,__binaryResponse:!0})}}jn||(jn={});class Vn extends k{create(e,t){return this._client.post("/audio/transcriptions",zt({body:e,...t}))}}Vn||(Vn={});class qn extends k{create(e,t){return this._client.post("/audio/translations",zt({body:e,...t}))}}qn||(qn={});class Gn extends k{constructor(){super(...arguments),this.transcriptions=new Vn(this._client),this.translations=new qn(this._client),this.speech=new jn(this._client)}}(function(n){n.Transcriptions=Vn,n.Translations=qn,n.Speech=jn})(Gn||(Gn={}));let zn=class extends k{create(e,t,s){return this._client.post(`/assistants/${e}/files`,{body:t,...s,headers:{"OpenAI-Beta":"assistants=v1",...s==null?void 0:s.headers}})}retrieve(e,t,s){return this._client.get(`/assistants/${e}/files/${t}`,{...s,headers:{"OpenAI-Beta":"assistants=v1",...s==null?void 0:s.headers}})}list(e,t={},s){return me(t)?this.list(e,{},t):this._client.getAPIList(`/assistants/${e}/files`,Zi,{query:t,...s,headers:{"OpenAI-Beta":"assistants=v1",...s==null?void 0:s.headers}})}del(e,t,s){return this._client.delete(`/assistants/${e}/files/${t}`,{...s,headers:{"OpenAI-Beta":"assistants=v1",...s==null?void 0:s.headers}})}};class Zi extends Te{}(function(n){n.AssistantFilesPage=Zi})(zn||(zn={}));class Kn extends k{constructor(){super(...arguments),this.files=new zn(this._client)}create(e,t){return this._client.post("/assistants",{body:e,...t,headers:{"OpenAI-Beta":"assistants=v1",...t==null?void 0:t.headers}})}retrieve(e,t){return this._client.get(`/assistants/${e}`,{...t,headers:{"OpenAI-Beta":"assistants=v1",...t==null?void 0:t.headers}})}update(e,t,s){return this._client.post(`/assistants/${e}`,{body:t,...s,headers:{"OpenAI-Beta":"assistants=v1",...s==null?void 0:s.headers}})}list(e={},t){return me(e)?this.list({},e):this._client.getAPIList("/assistants",er,{query:e,...t,headers:{"OpenAI-Beta":"assistants=v1",...t==null?void 0:t.headers}})}del(e,t){return this._client.delete(`/assistants/${e}`,{...t,headers:{"OpenAI-Beta":"assistants=v1",...t==null?void 0:t.headers}})}}class er extends Te{}(function(n){n.AssistantsPage=er,n.Files=zn,n.AssistantFilesPage=Zi})(Kn||(Kn={}));function oo(n){return typeof n.parse=="function"}const at=n=>(n==null?void 0:n.role)==="assistant",El=n=>(n==null?void 0:n.role)==="function",Sl=n=>(n==null?void 0:n.role)==="tool";var ie=globalThis&&globalThis.__classPrivateFieldSet||function(n,e,t,s,i){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?i.call(n,t):i?i.value=t:e.set(n,t),t},C=globalThis&&globalThis.__classPrivateFieldGet||function(n,e,t,s){if(t==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!s:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?s:t==="a"?s.call(n):s?s.value:e.get(n)},V,hn,un,Ct,vt,dn,Et,ge,St,fn,pn,Je,hi,Yn,ui,di,fi,pi,Il,_i;const ao=10;class Tl{constructor(){V.add(this),this.controller=new AbortController,hn.set(this,void 0),un.set(this,()=>{}),Ct.set(this,()=>{}),vt.set(this,void 0),dn.set(this,()=>{}),Et.set(this,()=>{}),ge.set(this,{}),this._chatCompletions=[],this.messages=[],St.set(this,!1),fn.set(this,!1),pn.set(this,!1),Je.set(this,!1),pi.set(this,e=>{if(ie(this,fn,!0,"f"),e instanceof Error&&e.name==="AbortError"&&(e=new se),e instanceof se)return ie(this,pn,!0,"f"),this._emit("abort",e);if(e instanceof S)return this._emit("error",e);if(e instanceof Error){const t=new S(e.message);return t.cause=e,this._emit("error",t)}return this._emit("error",new S(String(e)))}),ie(this,hn,new Promise((e,t)=>{ie(this,un,e,"f"),ie(this,Ct,t,"f")}),"f"),ie(this,vt,new Promise((e,t)=>{ie(this,dn,e,"f"),ie(this,Et,t,"f")}),"f"),C(this,hn,"f").catch(()=>{}),C(this,vt,"f").catch(()=>{})}_run(e){setTimeout(()=>{e().then(()=>{this._emitFinal(),this._emit("end")},C(this,pi,"f"))},0)}_addChatCompletion(e){var s;this._chatCompletions.push(e),this._emit("chatCompletion",e);const t=(s=e.choices[0])==null?void 0:s.message;return t&&this._addMessage(t),e}_addMessage(e,t=!0){if("content"in e||(e.content=null),this.messages.push(e),t){if(this._emit("message",e),(El(e)||Sl(e))&&e.content)this._emit("functionCallResult",e.content);else if(at(e)&&e.function_call)this._emit("functionCall",e.function_call);else if(at(e)&&e.tool_calls)for(const s of e.tool_calls)s.type==="function"&&this._emit("functionCall",s.function)}}_connected(){this.ended||(C(this,un,"f").call(this),this._emit("connect"))}get ended(){return C(this,St,"f")}get errored(){return C(this,fn,"f")}get aborted(){return C(this,pn,"f")}abort(){this.controller.abort()}on(e,t){return(C(this,ge,"f")[e]||(C(this,ge,"f")[e]=[])).push({listener:t}),this}off(e,t){const s=C(this,ge,"f")[e];if(!s)return this;const i=s.findIndex(r=>r.listener===t);return i>=0&&s.splice(i,1),this}once(e,t){return(C(this,ge,"f")[e]||(C(this,ge,"f")[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,s)=>{ie(this,Je,!0,"f"),e!=="error"&&this.once("error",s),this.once(e,t)})}async done(){ie(this,Je,!0,"f"),await C(this,vt,"f")}async finalChatCompletion(){await this.done();const e=this._chatCompletions[this._chatCompletions.length-1];if(!e)throw new S("stream ended without producing a ChatCompletion");return e}async finalContent(){return await this.done(),C(this,V,"m",hi).call(this)}async finalMessage(){return await this.done(),C(this,V,"m",Yn).call(this)}async finalFunctionCall(){return await this.done(),C(this,V,"m",ui).call(this)}async finalFunctionCallResult(){return await this.done(),C(this,V,"m",di).call(this)}async totalUsage(){return await this.done(),C(this,V,"m",fi).call(this)}allChatCompletions(){return[...this._chatCompletions]}_emit(e,...t){if(C(this,St,"f"))return;e==="end"&&(ie(this,St,!0,"f"),C(this,dn,"f").call(this));const s=C(this,ge,"f")[e];if(s&&(C(this,ge,"f")[e]=s.filter(i=>!i.once),s.forEach(({listener:i})=>i(...t))),e==="abort"){const i=t[0];!C(this,Je,"f")&&!(s!=null&&s.length)&&Promise.reject(i),C(this,Ct,"f").call(this,i),C(this,Et,"f").call(this,i),this._emit("end");return}if(e==="error"){const i=t[0];!C(this,Je,"f")&&!(s!=null&&s.length)&&Promise.reject(i),C(this,Ct,"f").call(this,i),C(this,Et,"f").call(this,i),this._emit("end")}}_emitFinal(){const e=this._chatCompletions[this._chatCompletions.length-1];e&&this._emit("finalChatCompletion",e);const t=C(this,V,"m",Yn).call(this);t&&this._emit("finalMessage",t);const s=C(this,V,"m",hi).call(this);s&&this._emit("finalContent",s);const i=C(this,V,"m",ui).call(this);i&&this._emit("finalFunctionCall",i);const r=C(this,V,"m",di).call(this);r!=null&&this._emit("finalFunctionCallResult",r),this._chatCompletions.some(o=>o.usage)&&this._emit("totalUsage",C(this,V,"m",fi).call(this))}async _createChatCompletion(e,t,s){const i=s==null?void 0:s.signal;i&&(i.aborted&&this.controller.abort(),i.addEventListener("abort",()=>this.controller.abort())),C(this,V,"m",Il).call(this,t);const r=await e.create({...t,stream:!1},{...s,signal:this.controller.signal});return this._connected(),this._addChatCompletion(r)}async _runChatCompletion(e,t,s){for(const i of t.messages)this._addMessage(i,!1);return await this._createChatCompletion(e,t,s)}async _runFunctions(e,t,s){var d;const i="function",{function_call:r="auto",stream:o,...a}=t,l=typeof r!="string"&&(r==null?void 0:r.name),{maxChatCompletions:c=ao}=s||{},u={};for(const p of t.functions)u[p.name||p.function.name]=p;const h=t.functions.map(p=>({name:p.name||p.function.name,parameters:p.parameters,description:p.description}));for(const p of t.messages)this._addMessage(p,!1);for(let p=0;p<c;++p){const w=(d=(await this._createChatCompletion(e,{...a,function_call:r,functions:h,messages:[...this.messages]},s)).choices[0])==null?void 0:d.message;if(!w)throw new S("missing message in ChatCompletion response");if(!w.function_call)return;const{name:y,arguments:x}=w.function_call,P=u[y];if(P){if(l&&l!==y){const K=`Invalid function_call: ${JSON.stringify(y)}. ${JSON.stringify(l)} requested. Please try again`;this._addMessage({role:i,name:y,content:K});continue}}else{const K=`Invalid function_call: ${JSON.stringify(y)}. Available options are: ${h.map(j=>JSON.stringify(j.name)).join(", ")}. Please try again`;this._addMessage({role:i,name:y,content:K});continue}let G;try{G=oo(P)?await P.parse(x):x}catch(K){this._addMessage({role:i,name:y,content:K instanceof Error?K.message:String(K)});continue}const z=await P.function(G,this),X=C(this,V,"m",_i).call(this,z);if(this._addMessage({role:i,name:y,content:X}),l)return}}async _runTools(e,t,s){var d,p;const i="tool",{tool_choice:r="auto",stream:o,...a}=t,l=typeof r!="string"&&((d=r==null?void 0:r.function)==null?void 0:d.name),{maxChatCompletions:c=ao}=s||{},u={};for(const f of t.tools)f.type==="function"&&(u[f.function.name||f.function.function.name]=f.function);const h="tools"in t?t.tools.map(f=>f.type==="function"?{type:"function",function:{name:f.function.name||f.function.function.name,parameters:f.function.parameters,description:f.function.description}}:f):void 0;for(const f of t.messages)this._addMessage(f,!1);for(let f=0;f<c;++f){const y=(p=(await this._createChatCompletion(e,{...a,tool_choice:r,tools:h,messages:[...this.messages]},s)).choices[0])==null?void 0:p.message;if(!y)throw new S("missing message in ChatCompletion response");if(!y.tool_calls)return;for(const x of y.tool_calls){if(x.type!=="function")continue;const P=x.id,{name:G,arguments:z}=x.function,X=u[G];if(X){if(l&&l!==G){const U=`Invalid tool_call: ${JSON.stringify(G)}. ${JSON.stringify(l)} requested. Please try again`;this._addMessage({role:i,tool_call_id:P,content:U});continue}}else{const U=`Invalid tool_call: ${JSON.stringify(G)}. Available options are: ${h.map(Is=>JSON.stringify(Is.function.name)).join(", ")}. Please try again`;this._addMessage({role:i,tool_call_id:P,content:U});continue}let K;try{K=oo(X)?await X.parse(z):z}catch(U){const Is=U instanceof Error?U.message:String(U);this._addMessage({role:i,tool_call_id:P,content:Is});continue}const j=await X.function(K,this),Ye=C(this,V,"m",_i).call(this,j);if(this._addMessage({role:i,tool_call_id:P,content:Ye}),l)return}}}}hn=new WeakMap,un=new WeakMap,Ct=new WeakMap,vt=new WeakMap,dn=new WeakMap,Et=new WeakMap,ge=new WeakMap,St=new WeakMap,fn=new WeakMap,pn=new WeakMap,Je=new WeakMap,pi=new WeakMap,V=new WeakSet,hi=function(){return C(this,V,"m",Yn).call(this).content??null},Yn=function(){let e=this.messages.length;for(;e-- >0;){const t=this.messages[e];if(at(t))return{...t,content:t.content??null}}throw new S("stream ended without producing a ChatCompletionMessage with role=assistant")},ui=function(){var e,t;for(let s=this.messages.length-1;s>=0;s--){const i=this.messages[s];if(at(i)&&(i!=null&&i.function_call))return i.function_call;if(at(i)&&((e=i==null?void 0:i.tool_calls)!=null&&e.length))return(t=i.tool_calls.at(-1))==null?void 0:t.function}},di=function(){for(let e=this.messages.length-1;e>=0;e--){const t=this.messages[e];if(El(t)&&t.content!=null||Sl(t)&&t.content!=null&&this.messages.some(s=>{var i;return s.role==="assistant"&&((i=s.tool_calls)==null?void 0:i.some(r=>r.type==="function"&&r.id===t.tool_call_id))}))return t.content}},fi=function(){const e={completion_tokens:0,prompt_tokens:0,total_tokens:0};for(const{usage:t}of this._chatCompletions)t&&(e.completion_tokens+=t.completion_tokens,e.prompt_tokens+=t.prompt_tokens,e.total_tokens+=t.total_tokens);return e},Il=function(e){if(e.n!=null&&e.n>1)throw new S("ChatCompletion convenience helpers only support n=1 at this time. To use n>1, please use chat.completions.create() directly.")},_i=function(e){return typeof e=="string"?e:e===void 0?"undefined":JSON.stringify(e)};class Kt extends Tl{static runFunctions(e,t,s){const i=new Kt,r={...s,headers:{...s==null?void 0:s.headers,"X-Stainless-Helper-Method":"runFunctions"}};return i._run(()=>i._runFunctions(e,t,r)),i}static runTools(e,t,s){const i=new Kt,r={...s,headers:{...s==null?void 0:s.headers,"X-Stainless-Helper-Method":"runTools"}};return i._run(()=>i._runTools(e,t,r)),i}_addMessage(e){super._addMessage(e),at(e)&&e.content&&this._emit("content",e.content)}}var re=globalThis&&globalThis.__classPrivateFieldGet||function(n,e,t,s){if(t==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!s:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?s:t==="a"?s.call(n):s?s.value:e.get(n)},$s=globalThis&&globalThis.__classPrivateFieldSet||function(n,e,t,s,i){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?i.call(n,t):i?i.value=t:e.set(n,t),t},de,Re,Us,Hs,ln,lo;class Yt extends Tl{constructor(){super(...arguments),de.add(this),Re.set(this,void 0)}get currentChatCompletionSnapshot(){return re(this,Re,"f")}static fromReadableStream(e){const t=new Yt;return t._run(()=>t._fromReadableStream(e)),t}static createChatCompletion(e,t,s){const i=new Yt;return i._run(()=>i._runChatCompletion(e,{...t,stream:!0},{...s,headers:{...s==null?void 0:s.headers,"X-Stainless-Helper-Method":"stream"}})),i}async _createChatCompletion(e,t,s){var o;const i=s==null?void 0:s.signal;i&&(i.aborted&&this.controller.abort(),i.addEventListener("abort",()=>this.controller.abort())),re(this,de,"m",Us).call(this);const r=await e.create({...t,stream:!0},{...s,signal:this.controller.signal});this._connected();for await(const a of r)re(this,de,"m",Hs).call(this,a);if((o=r.controller.signal)!=null&&o.aborted)throw new se;return this._addChatCompletion(re(this,de,"m",ln).call(this))}async _fromReadableStream(e,t){var o;const s=t==null?void 0:t.signal;s&&(s.aborted&&this.controller.abort(),s.addEventListener("abort",()=>this.controller.abort())),re(this,de,"m",Us).call(this),this._connected();const i=be.fromReadableStream(e,this.controller);let r;for await(const a of i)r&&r!==a.id&&this._addChatCompletion(re(this,de,"m",ln).call(this)),re(this,de,"m",Hs).call(this,a),r=a.id;if((o=i.controller.signal)!=null&&o.aborted)throw new se;return this._addChatCompletion(re(this,de,"m",ln).call(this))}[(Re=new WeakMap,de=new WeakSet,Us=function(){this.ended||$s(this,Re,void 0,"f")},Hs=function(t){var o,a,l;if(this.ended)return;const s=re(this,de,"m",lo).call(this,t);this._emit("chunk",t,s);const i=(a=(o=t.choices[0])==null?void 0:o.delta)==null?void 0:a.content,r=(l=s.choices[0])==null?void 0:l.message;i!=null&&(r==null?void 0:r.role)==="assistant"&&(r!=null&&r.content)&&this._emit("content",i,r.content)},ln=function(){if(this.ended)throw new S("stream has ended, this shouldn't happen");const t=re(this,Re,"f");if(!t)throw new S("request ended without sending any chunks");return $s(this,Re,void 0,"f"),Vf(t)},lo=function(t){var s,i,r;let o=re(this,Re,"f");const{choices:a,...l}=t;o?Object.assign(o,l):o=$s(this,Re,{...l,choices:[]},"f");for(const{delta:c,finish_reason:u,index:h,logprobs:d=null,...p}of t.choices){let f=o.choices[h];if(f||(f=o.choices[h]={finish_reason:u,index:h,message:{},logprobs:d,...p}),d)if(!f.logprobs)f.logprobs=Object.assign({},d);else{const{content:z,...X}=d;Object.assign(f.logprobs,X),z&&((s=f.logprobs).content??(s.content=[]),f.logprobs.content.push(...z))}if(u&&(f.finish_reason=u),Object.assign(f,p),!c)continue;const{content:w,function_call:y,role:x,tool_calls:P,...G}=c;if(Object.assign(f.message,G),w&&(f.message.content=(f.message.content||"")+w),x&&(f.message.role=x),y&&(f.message.function_call?(y.name&&(f.message.function_call.name=y.name),y.arguments&&((i=f.message.function_call).arguments??(i.arguments=""),f.message.function_call.arguments+=y.arguments)):f.message.function_call=y),P){f.message.tool_calls||(f.message.tool_calls=[]);for(const{index:z,id:X,type:K,function:j,...Ye}of P){const U=(r=f.message.tool_calls)[z]??(r[z]={});Object.assign(U,Ye),X&&(U.id=X),K&&(U.type=K),j&&(U.function??(U.function={arguments:""})),j!=null&&j.name&&(U.function.name=j.name),j!=null&&j.arguments&&(U.function.arguments+=j.arguments)}}}return o},Symbol.asyncIterator)](){const e=[],t=[];let s=!1;return this.on("chunk",i=>{const r=t.shift();r?r.resolve(i):e.push(i)}),this.on("end",()=>{s=!0;for(const i of t)i.resolve(void 0);t.length=0}),this.on("abort",i=>{s=!0;for(const r of t)r.reject(i);t.length=0}),this.on("error",i=>{s=!0;for(const r of t)r.reject(i);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:s?{value:void 0,done:!0}:new Promise((r,o)=>t.push({resolve:r,reject:o})).then(r=>r?{value:r,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new be(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}}function Vf(n){const{id:e,choices:t,created:s,model:i,system_fingerprint:r,...o}=n;return{...o,id:e,choices:t.map(({message:a,finish_reason:l,index:c,logprobs:u,...h})=>{if(!l)throw new S(`missing finish_reason for choice ${c}`);const{content:d=null,function_call:p,tool_calls:f,...w}=a,y=a.role;if(!y)throw new S(`missing role for choice ${c}`);if(p){const{arguments:x,name:P}=p;if(x==null)throw new S(`missing function_call.arguments for choice ${c}`);if(!P)throw new S(`missing function_call.name for choice ${c}`);return{...h,message:{content:d,function_call:{arguments:x,name:P},role:y},finish_reason:l,index:c,logprobs:u}}return f?{...h,index:c,finish_reason:l,logprobs:u,message:{...w,role:y,content:d,tool_calls:f.map((x,P)=>{const{function:G,type:z,id:X,...K}=x,{arguments:j,name:Ye,...U}=G||{};if(X==null)throw new S(`missing choices[${c}].tool_calls[${P}].id
${cn(n)}`);if(z==null)throw new S(`missing choices[${c}].tool_calls[${P}].type
${cn(n)}`);if(Ye==null)throw new S(`missing choices[${c}].tool_calls[${P}].function.name
${cn(n)}`);if(j==null)throw new S(`missing choices[${c}].tool_calls[${P}].function.arguments
${cn(n)}`);return{...K,id:X,type:z,function:{...U,name:Ye,arguments:j}}})}}:{...h,message:{...w,content:d,role:y},finish_reason:l,index:c,logprobs:u}}),created:s,model:i,object:"chat.completion",...r?{system_fingerprint:r}:{}}}function cn(n){return JSON.stringify(n)}class lt extends Yt{static fromReadableStream(e){const t=new lt;return t._run(()=>t._fromReadableStream(e)),t}static runFunctions(e,t,s){const i=new lt,r={...s,headers:{...s==null?void 0:s.headers,"X-Stainless-Helper-Method":"runFunctions"}};return i._run(()=>i._runFunctions(e,t,r)),i}static runTools(e,t,s){const i=new lt,r={...s,headers:{...s==null?void 0:s.headers,"X-Stainless-Helper-Method":"runTools"}};return i._run(()=>i._runTools(e,t,r)),i}}let Rl=class extends k{runFunctions(e,t){return e.stream?lt.runFunctions(this._client.chat.completions,e,t):Kt.runFunctions(this._client.chat.completions,e,t)}runTools(e,t){return e.stream?lt.runTools(this._client.chat.completions,e,t):Kt.runTools(this._client.chat.completions,e,t)}stream(e,t){return Yt.createChatCompletion(this._client.chat.completions,e,t)}};class Qn extends k{constructor(){super(...arguments),this.completions=new Rl(this._client)}}(function(n){n.Completions=Rl})(Qn||(Qn={}));var oe=globalThis&&globalThis.__classPrivateFieldSet||function(n,e,t,s,i){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?i.call(n,t):i?i.value=t:e.set(n,t),t},O=globalThis&&globalThis.__classPrivateFieldGet||function(n,e,t,s){if(t==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!s:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?s:t==="a"?s.call(n):s?s.value:e.get(n)},_n,mn,It,Tt,gn,Rt,ye,At,yn,wn,Ze,mi;class qf{constructor(){this.controller=new AbortController,_n.set(this,void 0),mn.set(this,()=>{}),It.set(this,()=>{}),Tt.set(this,void 0),gn.set(this,()=>{}),Rt.set(this,()=>{}),ye.set(this,{}),At.set(this,!1),yn.set(this,!1),wn.set(this,!1),Ze.set(this,!1),mi.set(this,e=>{if(oe(this,yn,!0,"f"),e instanceof Error&&e.name==="AbortError"&&(e=new se),e instanceof se)return oe(this,wn,!0,"f"),this._emit("abort",e);if(e instanceof S)return this._emit("error",e);if(e instanceof Error){const t=new S(e.message);return t.cause=e,this._emit("error",t)}return this._emit("error",new S(String(e)))}),oe(this,_n,new Promise((e,t)=>{oe(this,mn,e,"f"),oe(this,It,t,"f")}),"f"),oe(this,Tt,new Promise((e,t)=>{oe(this,gn,e,"f"),oe(this,Rt,t,"f")}),"f"),O(this,_n,"f").catch(()=>{}),O(this,Tt,"f").catch(()=>{})}_run(e){setTimeout(()=>{e().then(()=>{this._emit("end")},O(this,mi,"f"))},0)}_addRun(e){return e}_connected(){this.ended||(O(this,mn,"f").call(this),this._emit("connect"))}get ended(){return O(this,At,"f")}get errored(){return O(this,yn,"f")}get aborted(){return O(this,wn,"f")}abort(){this.controller.abort()}on(e,t){return(O(this,ye,"f")[e]||(O(this,ye,"f")[e]=[])).push({listener:t}),this}off(e,t){const s=O(this,ye,"f")[e];if(!s)return this;const i=s.findIndex(r=>r.listener===t);return i>=0&&s.splice(i,1),this}once(e,t){return(O(this,ye,"f")[e]||(O(this,ye,"f")[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,s)=>{oe(this,Ze,!0,"f"),e!=="error"&&this.once("error",s),this.once(e,t)})}async done(){oe(this,Ze,!0,"f"),await O(this,Tt,"f")}_emit(e,...t){if(O(this,At,"f"))return;e==="end"&&(oe(this,At,!0,"f"),O(this,gn,"f").call(this));const s=O(this,ye,"f")[e];if(s&&(O(this,ye,"f")[e]=s.filter(i=>!i.once),s.forEach(({listener:i})=>i(...t))),e==="abort"){const i=t[0];!O(this,Ze,"f")&&!(s!=null&&s.length)&&Promise.reject(i),O(this,It,"f").call(this,i),O(this,Rt,"f").call(this,i),this._emit("end");return}if(e==="error"){const i=t[0];!O(this,Ze,"f")&&!(s!=null&&s.length)&&Promise.reject(i),O(this,It,"f").call(this,i),O(this,Rt,"f").call(this,i),this._emit("end")}}async _threadAssistantStream(e,t,s){return await this._createThreadAssistantStream(t,e,s)}async _runAssistantStream(e,t,s,i){return await this._createAssistantStream(t,e,s,i)}async _runToolAssistantStream(e,t,s,i,r){return await this._createToolAssistantStream(s,e,t,i,r)}async _createThreadAssistantStream(e,t,s){const i=s==null?void 0:s.signal;i&&(i.aborted&&this.controller.abort(),i.addEventListener("abort",()=>this.controller.abort()));const r=await e.createAndRun({...t,stream:!1},{...s,signal:this.controller.signal});return this._connected(),this._addRun(r)}async _createToolAssistantStream(e,t,s,i,r){const o=r==null?void 0:r.signal;o&&(o.aborted&&this.controller.abort(),o.addEventListener("abort",()=>this.controller.abort()));const a=await e.submitToolOutputs(t,s,{...i,stream:!1},{...r,signal:this.controller.signal});return this._connected(),this._addRun(a)}async _createAssistantStream(e,t,s,i){const r=i==null?void 0:i.signal;r&&(r.aborted&&this.controller.abort(),r.addEventListener("abort",()=>this.controller.abort()));const o=await e.create(t,{...s,stream:!1},{...i,signal:this.controller.signal});return this._connected(),this._addRun(o)}}_n=new WeakMap,mn=new WeakMap,It=new WeakMap,Tt=new WeakMap,gn=new WeakMap,Rt=new WeakMap,ye=new WeakMap,At=new WeakMap,yn=new WeakMap,wn=new WeakMap,Ze=new WeakMap,mi=new WeakMap;var m=globalThis&&globalThis.__classPrivateFieldGet||function(n,e,t,s){if(t==="a"&&!s)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!s:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?s:t==="a"?s.call(n):s?s.value:e.get(n)},te=globalThis&&globalThis.__classPrivateFieldSet||function(n,e,t,s,i){if(s==="m")throw new TypeError("Private method is not writable");if(s==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return s==="a"?i.call(n,t):i?i.value=t:e.set(n,t),t},Y,gi,fe,bn,ae,$e,tt,Le,Xn,ne,Cn,vn,Dt,En,Sn,co,ho,uo,fo,po,_o,mo;class ve extends qf{constructor(){super(...arguments),Y.add(this),gi.set(this,[]),fe.set(this,{}),bn.set(this,{}),ae.set(this,void 0),$e.set(this,void 0),tt.set(this,void 0),Le.set(this,void 0),Xn.set(this,void 0),ne.set(this,void 0),Cn.set(this,void 0),vn.set(this,void 0),Dt.set(this,void 0)}[(gi=new WeakMap,fe=new WeakMap,bn=new WeakMap,ae=new WeakMap,$e=new WeakMap,tt=new WeakMap,Le=new WeakMap,Xn=new WeakMap,ne=new WeakMap,Cn=new WeakMap,vn=new WeakMap,Dt=new WeakMap,Y=new WeakSet,Symbol.asyncIterator)](){const e=[],t=[];let s=!1;return this.on("event",i=>{const r=t.shift();r?r.resolve(i):e.push(i)}),this.on("end",()=>{s=!0;for(const i of t)i.resolve(void 0);t.length=0}),this.on("abort",i=>{s=!0;for(const r of t)r.reject(i);t.length=0}),this.on("error",i=>{s=!0;for(const r of t)r.reject(i);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:s?{value:void 0,done:!0}:new Promise((r,o)=>t.push({resolve:r,reject:o})).then(r=>r?{value:r,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new be(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}static createToolAssistantStream(e,t,s,i,r){const o=new ve;return o._run(()=>o._runToolAssistantStream(e,t,s,i,{...r,headers:{...r==null?void 0:r.headers,"X-Stainless-Helper-Method":"stream"}})),o}async _createToolAssistantStream(e,t,s,i,r){var c;const o=r==null?void 0:r.signal;o&&(o.aborted&&this.controller.abort(),o.addEventListener("abort",()=>this.controller.abort()));const a={...i,stream:!0},l=await e.submitToolOutputs(t,s,a,{...r,signal:this.controller.signal});this._connected();for await(const u of l)m(this,Y,"m",En).call(this,u);if((c=l.controller.signal)!=null&&c.aborted)throw new se;return this._addRun(m(this,Y,"m",Sn).call(this))}static createThreadAssistantStream(e,t,s){const i=new ve;return i._run(()=>i._threadAssistantStream(e,t,{...s,headers:{...s==null?void 0:s.headers,"X-Stainless-Helper-Method":"stream"}})),i}static createAssistantStream(e,t,s,i){const r=new ve;return r._run(()=>r._runAssistantStream(e,t,s,{...i,headers:{...i==null?void 0:i.headers,"X-Stainless-Helper-Method":"stream"}})),r}currentEvent(){return m(this,Cn,"f")}currentRun(){return m(this,vn,"f")}currentMessageSnapshot(){return m(this,ae,"f")}currentRunStepSnapshot(){return m(this,Dt,"f")}async finalRunSteps(){return await this.done(),Object.values(m(this,fe,"f"))}async finalMessages(){return await this.done(),Object.values(m(this,bn,"f"))}async finalRun(){if(await this.done(),!m(this,$e,"f"))throw Error("Final run was not received.");return m(this,$e,"f")}async _createThreadAssistantStream(e,t,s){var a;const i=s==null?void 0:s.signal;i&&(i.aborted&&this.controller.abort(),i.addEventListener("abort",()=>this.controller.abort()));const r={...t,stream:!0},o=await e.createAndRun(r,{...s,signal:this.controller.signal});this._connected();for await(const l of o)m(this,Y,"m",En).call(this,l);if((a=o.controller.signal)!=null&&a.aborted)throw new se;return this._addRun(m(this,Y,"m",Sn).call(this))}async _createAssistantStream(e,t,s,i){var l;const r=i==null?void 0:i.signal;r&&(r.aborted&&this.controller.abort(),r.addEventListener("abort",()=>this.controller.abort()));const o={...s,stream:!0},a=await e.create(t,o,{...i,signal:this.controller.signal});this._connected();for await(const c of a)m(this,Y,"m",En).call(this,c);if((l=a.controller.signal)!=null&&l.aborted)throw new se;return this._addRun(m(this,Y,"m",Sn).call(this))}static accumulateDelta(e,t){for(const[s,i]of Object.entries(t)){if(!e.hasOwnProperty(s)){e[s]=i;continue}let r=e[s];if(r==null){e[s]=i;continue}if(s==="index"||s==="type"){e[s]=i;continue}if(typeof r=="string"&&typeof i=="string")r+=i;else if(typeof r=="number"&&typeof i=="number")r+=i;else if(ro(r)&&ro(i))r=this.accumulateDelta(r,i);else if(Array.isArray(r)&&Array.isArray(i)){if(r.every(o=>typeof o=="string"||typeof o=="number")){r.push(...i);continue}}else throw Error(`Unhandled record type: ${s}, deltaValue: ${i}, accValue: ${r}`);e[s]=r}return e}}En=function(e){if(!this.ended)switch(te(this,Cn,e,"f"),m(this,Y,"m",uo).call(this,e),e.event){case"thread.created":break;case"thread.run.created":case"thread.run.queued":case"thread.run.in_progress":case"thread.run.requires_action":case"thread.run.completed":case"thread.run.failed":case"thread.run.cancelling":case"thread.run.cancelled":case"thread.run.expired":m(this,Y,"m",mo).call(this,e);break;case"thread.run.step.created":case"thread.run.step.in_progress":case"thread.run.step.delta":case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":m(this,Y,"m",ho).call(this,e);break;case"thread.message.created":case"thread.message.in_progress":case"thread.message.delta":case"thread.message.completed":case"thread.message.incomplete":m(this,Y,"m",co).call(this,e);break;case"error":throw new Error("Encountered an error event in event processing - errors should be processed earlier")}},Sn=function(){if(this.ended)throw new S("stream has ended, this shouldn't happen");if(!m(this,$e,"f"))throw Error("Final run has been been received");return m(this,$e,"f")},co=function(e){const[t,s]=m(this,Y,"m",po).call(this,e,m(this,ae,"f"));te(this,ae,t,"f"),m(this,bn,"f")[t.id]=t;for(const i of s){const r=t.content[i.index];(r==null?void 0:r.type)=="text"&&this._emit("textCreated",r.text)}switch(e.event){case"thread.message.created":this._emit("messageCreated",e.data);break;case"thread.message.in_progress":break;case"thread.message.delta":if(this._emit("messageDelta",e.data.delta,t),e.data.delta.content)for(const i of e.data.delta.content){if(i.type=="text"&&i.text){let r=i.text,o=t.content[i.index];if(o&&o.type=="text")this._emit("textDelta",r,o.text);else throw Error("The snapshot associated with this text delta is not text or missing")}if(i.index!=m(this,tt,"f")){if(m(this,Le,"f"))switch(m(this,Le,"f").type){case"text":this._emit("textDone",m(this,Le,"f").text,m(this,ae,"f"));break;case"image_file":this._emit("imageFileDone",m(this,Le,"f").image_file,m(this,ae,"f"));break}te(this,tt,i.index,"f")}te(this,Le,t.content[i.index],"f")}break;case"thread.message.completed":case"thread.message.incomplete":if(m(this,tt,"f")!==void 0){const i=e.data.content[m(this,tt,"f")];if(i)switch(i.type){case"image_file":this._emit("imageFileDone",i.image_file,m(this,ae,"f"));break;case"text":this._emit("textDone",i.text,m(this,ae,"f"));break}}m(this,ae,"f")&&this._emit("messageDone",e.data),te(this,ae,void 0,"f")}},ho=function(e){const t=m(this,Y,"m",fo).call(this,e);switch(te(this,Dt,t,"f"),e.event){case"thread.run.step.created":this._emit("runStepCreated",e.data);break;case"thread.run.step.delta":const s=e.data.delta;if(s.step_details&&s.step_details.type=="tool_calls"&&s.step_details.tool_calls&&t.step_details.type=="tool_calls")for(const r of s.step_details.tool_calls)r.index==m(this,Xn,"f")?this._emit("toolCallDelta",r,t.step_details.tool_calls[r.index]):(m(this,ne,"f")&&this._emit("toolCallDone",m(this,ne,"f")),te(this,Xn,r.index,"f"),te(this,ne,t.step_details.tool_calls[r.index],"f"),m(this,ne,"f")&&this._emit("toolCallCreated",m(this,ne,"f")));this._emit("runStepDelta",e.data.delta,t);break;case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":te(this,Dt,void 0,"f"),e.data.step_details.type=="tool_calls"&&m(this,ne,"f")&&(this._emit("toolCallDone",m(this,ne,"f")),te(this,ne,void 0,"f")),this._emit("runStepDone",e.data,t);break}},uo=function(e){m(this,gi,"f").push(e),this._emit("event",e)},fo=function(e){switch(e.event){case"thread.run.step.created":return m(this,fe,"f")[e.data.id]=e.data,e.data;case"thread.run.step.delta":let t=m(this,fe,"f")[e.data.id];if(!t)throw Error("Received a RunStepDelta before creation of a snapshot");let s=e.data;if(s.delta){const i=ve.accumulateDelta(t,s.delta);m(this,fe,"f")[e.data.id]=i}return m(this,fe,"f")[e.data.id];case"thread.run.step.completed":case"thread.run.step.failed":case"thread.run.step.cancelled":case"thread.run.step.expired":case"thread.run.step.in_progress":m(this,fe,"f")[e.data.id]=e.data;break}if(m(this,fe,"f")[e.data.id])return m(this,fe,"f")[e.data.id];throw new Error("No snapshot available")},po=function(e,t){let s=[];switch(e.event){case"thread.message.created":return[e.data,s];case"thread.message.delta":if(!t)throw Error("Received a delta with no existing snapshot (there should be one from message creation)");let i=e.data;if(i.delta.content)for(const r of i.delta.content)if(r.index in t.content){let o=t.content[r.index];t.content[r.index]=m(this,Y,"m",_o).call(this,r,o)}else t.content[r.index]=r,s.push(r);return[t,s];case"thread.message.in_progress":case"thread.message.completed":case"thread.message.incomplete":if(t)return[t,s];throw Error("Received thread message event with no existing snapshot")}throw Error("Tried to accumulate a non-message event")},_o=function(e,t){return ve.accumulateDelta(t,e)},mo=function(e){switch(te(this,vn,e.data,"f"),e.event){case"thread.run.created":break;case"thread.run.queued":break;case"thread.run.in_progress":break;case"thread.run.requires_action":case"thread.run.cancelled":case"thread.run.failed":case"thread.run.completed":case"thread.run.expired":te(this,$e,e.data,"f"),m(this,ne,"f")&&(this._emit("toolCallDone",m(this,ne,"f")),te(this,ne,void 0,"f"));break}};let Jn=class extends k{retrieve(e,t,s,i){return this._client.get(`/threads/${e}/messages/${t}/files/${s}`,{...i,headers:{"OpenAI-Beta":"assistants=v1",...i==null?void 0:i.headers}})}list(e,t,s={},i){return me(s)?this.list(e,t,{},s):this._client.getAPIList(`/threads/${e}/messages/${t}/files`,tr,{query:s,...i,headers:{"OpenAI-Beta":"assistants=v1",...i==null?void 0:i.headers}})}};class tr extends Te{}(function(n){n.MessageFilesPage=tr})(Jn||(Jn={}));class Zn extends k{constructor(){super(...arguments),this.files=new Jn(this._client)}create(e,t,s){return this._client.post(`/threads/${e}/messages`,{body:t,...s,headers:{"OpenAI-Beta":"assistants=v1",...s==null?void 0:s.headers}})}retrieve(e,t,s){return this._client.get(`/threads/${e}/messages/${t}`,{...s,headers:{"OpenAI-Beta":"assistants=v1",...s==null?void 0:s.headers}})}update(e,t,s,i){return this._client.post(`/threads/${e}/messages/${t}`,{body:s,...i,headers:{"OpenAI-Beta":"assistants=v1",...i==null?void 0:i.headers}})}list(e,t={},s){return me(t)?this.list(e,{},t):this._client.getAPIList(`/threads/${e}/messages`,nr,{query:t,...s,headers:{"OpenAI-Beta":"assistants=v1",...s==null?void 0:s.headers}})}}class nr extends Te{}(function(n){n.MessagesPage=nr,n.Files=Jn,n.MessageFilesPage=tr})(Zn||(Zn={}));class es extends k{retrieve(e,t,s,i){return this._client.get(`/threads/${e}/runs/${t}/steps/${s}`,{...i,headers:{"OpenAI-Beta":"assistants=v1",...i==null?void 0:i.headers}})}list(e,t,s={},i){return me(s)?this.list(e,t,{},s):this._client.getAPIList(`/threads/${e}/runs/${t}/steps`,sr,{query:s,...i,headers:{"OpenAI-Beta":"assistants=v1",...i==null?void 0:i.headers}})}}class sr extends Te{}(function(n){n.RunStepsPage=sr})(es||(es={}));class ts extends k{constructor(){super(...arguments),this.steps=new es(this._client)}create(e,t,s){return this._client.post(`/threads/${e}/runs`,{body:t,...s,headers:{"OpenAI-Beta":"assistants=v1",...s==null?void 0:s.headers},stream:t.stream??!1})}retrieve(e,t,s){return this._client.get(`/threads/${e}/runs/${t}`,{...s,headers:{"OpenAI-Beta":"assistants=v1",...s==null?void 0:s.headers}})}update(e,t,s,i){return this._client.post(`/threads/${e}/runs/${t}`,{body:s,...i,headers:{"OpenAI-Beta":"assistants=v1",...i==null?void 0:i.headers}})}list(e,t={},s){return me(t)?this.list(e,{},t):this._client.getAPIList(`/threads/${e}/runs`,ir,{query:t,...s,headers:{"OpenAI-Beta":"assistants=v1",...s==null?void 0:s.headers}})}cancel(e,t,s){return this._client.post(`/threads/${e}/runs/${t}/cancel`,{...s,headers:{"OpenAI-Beta":"assistants=v1",...s==null?void 0:s.headers}})}createAndStream(e,t,s){return ve.createAssistantStream(e,this._client.beta.threads.runs,t,s)}submitToolOutputs(e,t,s,i){return this._client.post(`/threads/${e}/runs/${t}/submit_tool_outputs`,{body:s,...i,headers:{"OpenAI-Beta":"assistants=v1",...i==null?void 0:i.headers},stream:s.stream??!1})}submitToolOutputsStream(e,t,s,i){return ve.createToolAssistantStream(e,t,this._client.beta.threads.runs,s,i)}}class ir extends Te{}(function(n){n.RunsPage=ir,n.Steps=es,n.RunStepsPage=sr})(ts||(ts={}));class ns extends k{constructor(){super(...arguments),this.runs=new ts(this._client),this.messages=new Zn(this._client)}create(e={},t){return me(e)?this.create({},e):this._client.post("/threads",{body:e,...t,headers:{"OpenAI-Beta":"assistants=v1",...t==null?void 0:t.headers}})}retrieve(e,t){return this._client.get(`/threads/${e}`,{...t,headers:{"OpenAI-Beta":"assistants=v1",...t==null?void 0:t.headers}})}update(e,t,s){return this._client.post(`/threads/${e}`,{body:t,...s,headers:{"OpenAI-Beta":"assistants=v1",...s==null?void 0:s.headers}})}del(e,t){return this._client.delete(`/threads/${e}`,{...t,headers:{"OpenAI-Beta":"assistants=v1",...t==null?void 0:t.headers}})}createAndRun(e,t){return this._client.post("/threads/runs",{body:e,...t,headers:{"OpenAI-Beta":"assistants=v1",...t==null?void 0:t.headers},stream:e.stream??!1})}createAndRunStream(e,t){return ve.createThreadAssistantStream(e,this._client.beta.threads,t)}}(function(n){n.Runs=ts,n.RunsPage=ir,n.Messages=Zn,n.MessagesPage=nr})(ns||(ns={}));class ss extends k{constructor(){super(...arguments),this.chat=new Qn(this._client),this.assistants=new Kn(this._client),this.threads=new ns(this._client)}}(function(n){n.Chat=Qn,n.Assistants=Kn,n.AssistantsPage=er,n.Threads=ns})(ss||(ss={}));class is extends k{create(e,t){return this._client.post("/completions",{body:e,...t,stream:e.stream??!1})}}is||(is={});class rs extends k{create(e,t){return this._client.post("/embeddings",{body:e,...t})}}rs||(rs={});class os extends k{create(e,t){return this._client.post("/files",zt({body:e,...t}))}retrieve(e,t){return this._client.get(`/files/${e}`,t)}list(e={},t){return me(e)?this.list({},e):this._client.getAPIList("/files",rr,{query:e,...t})}del(e,t){return this._client.delete(`/files/${e}`,t)}content(e,t){return this._client.get(`/files/${e}/content`,{...t,__binaryResponse:!0})}retrieveContent(e,t){return this._client.get(`/files/${e}/content`,{...t,headers:{Accept:"application/json",...t==null?void 0:t.headers}})}async waitForProcessing(e,{pollInterval:t=5e3,maxWait:s=30*60*1e3}={}){const i=new Set(["processed","error","deleted"]),r=Date.now();let o=await this.retrieve(e);for(;!o.status||!i.has(o.status);)if(await bl(t),o=await this.retrieve(e),Date.now()-r>s)throw new Xi({message:`Giving up on waiting for file ${e} to finish processing after ${s} milliseconds.`});return o}}class rr extends Ji{}(function(n){n.FileObjectsPage=rr})(os||(os={}));class as extends k{create(e,t){return this._client.post("/fine_tuning/jobs",{body:e,...t})}retrieve(e,t){return this._client.get(`/fine_tuning/jobs/${e}`,t)}list(e={},t){return me(e)?this.list({},e):this._client.getAPIList("/fine_tuning/jobs",or,{query:e,...t})}cancel(e,t){return this._client.post(`/fine_tuning/jobs/${e}/cancel`,t)}listEvents(e,t={},s){return me(t)?this.listEvents(e,{},t):this._client.getAPIList(`/fine_tuning/jobs/${e}/events`,ar,{query:t,...s})}}class or extends Te{}class ar extends Te{}(function(n){n.FineTuningJobsPage=or,n.FineTuningJobEventsPage=ar})(as||(as={}));class ls extends k{constructor(){super(...arguments),this.jobs=new as(this._client)}}(function(n){n.Jobs=as,n.FineTuningJobsPage=or,n.FineTuningJobEventsPage=ar})(ls||(ls={}));class cs extends k{createVariation(e,t){return this._client.post("/images/variations",zt({body:e,...t}))}edit(e,t){return this._client.post("/images/edits",zt({body:e,...t}))}generate(e,t){return this._client.post("/images/generations",{body:e,...t})}}cs||(cs={});class hs extends k{retrieve(e,t){return this._client.get(`/models/${e}`,t)}list(e){return this._client.getAPIList("/models",lr,e)}del(e,t){return this._client.delete(`/models/${e}`,t)}}class lr extends Ji{}(function(n){n.ModelsPage=lr})(hs||(hs={}));class us extends k{create(e,t){return this._client.post("/moderations",{body:e,...t})}}us||(us={});var Al;class $ extends kf{constructor({baseURL:e=Ws("OPENAI_BASE_URL"),apiKey:t=Ws("OPENAI_API_KEY"),organization:s=Ws("OPENAI_ORG_ID")??null,...i}={}){if(t===void 0)throw new S("The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).");const r={apiKey:t,organization:s,...i,baseURL:e||"https://api.openai.com/v1"};if(!r.dangerouslyAllowBrowser&&jf())throw new S(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
`);super({baseURL:r.baseURL,timeout:r.timeout??6e5,httpAgent:r.httpAgent,maxRetries:r.maxRetries,fetch:r.fetch}),this.completions=new is(this),this.chat=new Hn(this),this.embeddings=new rs(this),this.files=new os(this),this.images=new cs(this),this.audio=new Gn(this),this.moderations=new us(this),this.models=new hs(this),this.fineTuning=new ls(this),this.beta=new ss(this),this._options=r,this.apiKey=t,this.organization=s}defaultQuery(){return this._options.defaultQuery}defaultHeaders(e){return{...super.defaultHeaders(e),"OpenAI-Organization":this.organization,...this._options.defaultHeaders}}authHeaders(e){return{Authorization:`Bearer ${this.apiKey}`}}}Al=$;$.OpenAI=Al;$.OpenAIError=S;$.APIError=H;$.APIConnectionError=Es;$.APIConnectionTimeoutError=Xi;$.APIUserAbortError=se;$.NotFoundError=hl;$.ConflictError=ul;$.RateLimitError=fl;$.BadRequestError=al;$.AuthenticationError=ll;$.InternalServerError=pl;$.PermissionDeniedError=cl;$.UnprocessableEntityError=dl;(function(n){n.toFile=gl,n.fileFromPath=rl,n.Page=Ji,n.CursorPage=Te,n.Completions=is,n.Chat=Hn,n.Embeddings=rs,n.Files=os,n.FileObjectsPage=rr,n.Images=cs,n.Audio=Gn,n.Moderations=us,n.Models=hs,n.ModelsPage=lr,n.FineTuning=ls,n.Beta=ss})($||($={}));const Gf=$,zf=new Gf({apiKey:{}.OPENAI_API_KEY,dangerouslyAllowBrowser:!0}),Kf={databaseURL:"https://agrichatbot-c6fdb-default-rtdb.firebaseio.com/"},Yf=xo(Kf),Qf=_f(Yf),Qt=of(Qf),pe=document.getElementById("chatbot-conversation"),Xf={role:"system",content:"You are a helpful assistant."},Jf=[{user:"What are the signs of nutrient deficiency in maize crops, and how can I address them?",assistant:"Signs of nutrient deficiency in maize crops include yellowing of leaves, stunted growth, and poor kernel development. To address deficiencies, conduct soil tests to identify lacking nutrients and apply fertilizers accordingly. Consider using balanced fertilizers or organic amendments to replenish nutrients and promote healthy maize growth."},{user:"How can I control aphids in my soybean field using organic methods?",assistant:"Organic methods for aphid control in soybean fields include introducing natural predators like ladybugs or lacewings, spraying insecticidal soap or neem oil, and practicing intercropping with companion plants that repel aphids. Monitor aphid populations regularly and implement cultural practices such as crop rotation to reduce pest pressure."},{user:"What are the best practices for managing soil erosion in vineyards on sloping terrain?",assistant:"To manage soil erosion in vineyards on sloping terrain, implement contour plowing, construct terraces or retaining walls, and establish cover crops to stabilize soil and reduce runoff. Use erosion control blankets or mulching to protect bare soil surfaces, and avoid excessive tillage practices that can exacerbate erosion."},{user:"What are the key considerations for selecting tomato varieties suitable for greenhouse cultivation?",assistant:"When selecting tomato varieties for greenhouse cultivation, consider factors such as growth habit, disease resistance, fruit quality, and yield potential. Choose determinate or semi-determinate varieties suited to greenhouse conditions, and prioritize disease-resistant varieties to minimize pesticide reliance. Consult with local extension services or experienced growers for variety recommendations tailored to your specific greenhouse environment."},{user:"How can farmers mitigate the impact of drought on wheat production?",assistant:"To mitigate the impact of drought on wheat production, farmers can adopt several strategies such as selecting drought-tolerant wheat varieties, practicing conservation tillage to conserve soil moisture, and adjusting planting dates to avoid periods of water stress. Implementing efficient irrigation systems and applying soil amendments like organic matter or polymers can also help improve water retention in drought-prone areas."},{user:"What are some organic methods for controlling weeds in sugarcane fields?",assistant:"Organic methods for controlling weeds in sugarcane fields include using cover crops or mulches to suppress weed growth, practicing regular cultivation or hoeing to remove weeds manually, and applying organic herbicides derived from natural substances such as vinegar or citric acid. Additionally, promoting competitive crop stands through proper spacing and fertilization can help reduce weed pressure in sugarcane fields."},{user:"How can farmers enhance pollination in sunflower crops to improve seed set and yield?",assistant:"To enhance pollination in sunflower crops, farmers can encourage the presence of pollinators such as bees and butterflies by planting pollinator-friendly flowering plants nearby. Avoiding the use of insecticides during bloom periods preserves pollinator populations. Additionally, planting sunflower varieties with open, accessible flower heads facilitates pollinator visitation and improves seed set."},{user:"What are the best practices for managing nutrient deficiencies in tomato plants?",assistant:"Best practices for managing nutrient deficiencies in tomato plants include conducting soil tests to identify specific nutrient deficiencies, applying balanced fertilizers or organic amendments to correct deficiencies, and adjusting soil pH levels as needed for optimal nutrient availability. Foliar application of micronutrient sprays can provide rapid correction of nutrient deficiencies, especially during critical growth stages."},{user:"How can farmers prevent lodging in maize crops during periods of high winds or heavy rainfall?",assistant:"To prevent lodging in maize crops during adverse weather conditions, farmers can select maize varieties with sturdy stalks and good standability traits. Implementing proper plant spacing and avoiding excessive nitrogen fertilizer applications help reduce plant height and lodging risk. Additionally, timely harvesting before severe weather events and providing structural support such as trellises or braces can mitigate lodging damage."},{user:"What are the recommended storage conditions for preserving potato tubers after harvest?",assistant:"Recommended storage conditions for preserving potato tubers after harvest include maintaining cool temperatures between 4 to 10 degrees Celsius to inhibit sprouting and reduce decay. Ensure high humidity levels of 85 to 95% to prevent tuber dehydration and minimize shrinkage. Store potatoes in well-ventilated facilities with good airflow to prevent buildup of ethylene gas and reduce disease incidence."},{user:"How can farmers manage common pests such as aphids and caterpillars in broccoli crops?",assistant:"Farmers can manage common pests such as aphids and caterpillars in broccoli crops through integrated pest management (IPM) practices. This includes using natural enemies like ladybugs and parasitic wasps for biological control, applying insecticidal soaps or oils to target pest populations, and implementing physical barriers such as row covers to exclude pests. Regular scouting and monitoring help detect pest outbreaks early for timely intervention."},{user:"What are the key considerations for selecting bean varieties for cultivation in subtropical climates?",assistant:"When selecting bean varieties for cultivation in subtropical climates, farmers should consider factors such as heat tolerance, disease resistance, and adaptability to local soil and climatic conditions. Choose bush or semi-vining bean varieties suited to warmer temperatures and shorter growing seasons. Additionally, select disease-resistant varieties to minimize reliance on pesticides and ensure consistent yields."},{user:"How can farmers prevent blossom-end rot in tomato plants?",assistant:"To prevent blossom-end rot in tomato plants, farmers should maintain consistent soil moisture levels by watering evenly and avoiding drought stress or fluctuations. Ensure adequate calcium availability by maintaining proper soil pH levels and applying calcium-containing fertilizers as needed. Mulching around tomato plants helps conserve soil moisture and maintain more stable growing conditions, reducing the risk of blossom-end rot."},{user:"What are the optimal planting dates for cabbage cultivation in temperate regions?",assistant:"Optimal planting dates for cabbage cultivation in temperate regions depend on factors such as frost dates and growing season length. In general, cabbage can be planted as early as 4 to 6 weeks before the last expected frost date in spring for an early summer harvest. For a fall crop, plant cabbage in mid to late summer to mature before the first fall frost."},{user:"How can farmers manage powdery mildew in squash crops using organic methods?",assistant:"Farmers can manage powdery mildew in squash crops using organic methods such as applying sulfur-based fungicides or potassium bicarbonate sprays to control fungal growth. Additionally, promoting good air circulation by spacing plants adequately and avoiding overhead irrigation helps reduce humidity levels and minimize disease spread. Planting resistant squash varieties and removing infected plant debris promptly also contribute to disease management."},{user:"Hey!",assistant:"Hi there! How can I help you?"},{user:"Are you there?",assistant:"Yes, I am here to help! What can I do"}];document.addEventListener("submit",n=>{n.preventDefault();const e=document.getElementById("user-input");Xa(Qt,{role:"user",content:e.value}),Zf();const t=document.createElement("div");t.classList.add("speech","speech-human"),pe.appendChild(t),t.textContent=e.value,e.value="",pe.scrollTop=pe.scrollHeight});async function Zf(){try{const n=await Za(Qt);if(n.exists()){const e=Object.values(n.val());e.unshift(Xf),Jf.forEach(s=>{e.unshift({role:"user",content:s.user}),e.unshift({role:"assistant",content:s.assistant})});const t=await zf.chat.completions.create({model:"gpt-3.5-turbo",messages:e,presence_penalty:0,frequency_penalty:.3,max_tokens:100,temperature:0});Xa(Qt,t.choices[0].message),ep(t.choices[0].message.content)}else console.log("No data available")}catch(n){console.error("Error fetching reply:",n)}}function ep(n){const e=document.createElement("div");e.classList.add("speech","speech-ai","blinking-cursor"),pe.appendChild(e);let t=0;const s=setInterval(()=>{e.textContent+=n.slice(t-1,t),n.length===t&&(clearInterval(s),e.classList.remove("blinking-cursor")),t++,pe.scrollTop=pe.scrollHeight},50)}document.getElementById("clear-btn").addEventListener("click",()=>{af(Qt),pe.innerHTML='<div class="speech speech-ai">How can I help you?</div>'});function tp(){Za(Qt).then(async n=>{n.exists()&&(Object.values(n.val()).forEach(e=>{const t=document.createElement("div");t.classList.add("speech",`speech-${e.role==="user"?"human":"ai"}`),pe.appendChild(t),t.textContent=e.content}),pe.scrollTop=pe.scrollHeight)})}tp();
