var le=Object.defineProperty;var R=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var W=(r,e,n)=>e in r?le(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,q=(r,e)=>{for(var n in e||(e={}))ae.call(e,n)&&W(r,n,e[n]);if(R)for(var n of R(e))ue.call(e,n)&&W(r,n,e[n]);return r};var U=(r,e,n)=>(W(r,typeof e!="symbol"?e+"":e,n),n);import{b as ce,o as C,c as L,a as f,m as de,t as I,r as N,d as B,e as $,w as Z,f as z,T as F,p as K,g as G,h as E,i as pe,v as he,u as y,j as fe,k as _e,n as X,l as ge,q as ve,A as me,s as we,x as Ce,y as J,z as ye,B as be,C as Le,D as ke,E as Pe}from"./vendor.618a53b4.js";const xe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};xe();window.global===void 0&&(window.global=window,window.Buffer=ce.Buffer);const O=document.createElement("link");O.setAttribute("rel","favicon icon");const D=r=>{O.remove(),r.matches?O.setAttribute("href","plugLightTheme.svg"):O.setAttribute("href","plug.svg"),document.head.appendChild(O)};if(window.matchMedia){const r=window.matchMedia("(prefers-color-scheme: light)");r.addEventListener("change",D),D(r)}else D({matches:!1});var T=(r,e)=>{for(const[n,t]of e)r[n]=t;return r};const $e={},Me={width:"100%",height:"100%",viewBox:"0 0 2330 2330",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xml:space":"preserve","xmlns:serif":"http://www.serif.com/",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},Ie=f("path",{d:"M1164.58,0C1807.33,0 2329.16,521.832 2329.16,1164.58C2329.16,1807.33 1807.33,2329.16 1164.58,2329.16C521.829,2329.16 0,1807.33 0,1164.58C0,521.829 521.832,0 1164.58,0ZM1164.58,12.31C1800.54,12.31 2316.85,528.626 2316.85,1164.58C2316.85,1800.54 1800.53,2316.85 1164.58,2316.85C528.623,2316.85 12.31,1800.53 12.31,1164.58C12.31,528.623 528.626,12.31 1164.58,12.31ZM1164.58,169.088C615.151,169.088 169.085,615.154 169.085,1164.58C169.085,1714.01 615.151,2160.08 1164.58,2160.08C1714.01,2160.08 2160.08,1714.01 2160.08,1164.58C2160.08,615.154 1714.01,169.088 1164.58,169.088ZM1164.58,181.398C1707.22,181.398 2147.77,621.948 2147.77,1164.58C2147.77,1707.22 1707.22,2147.77 1164.58,2147.77C621.945,2147.77 181.395,1707.22 181.395,1164.58C181.395,621.948 621.945,181.398 1164.58,181.398Z",style:{fill:"white"}},null,-1),Te=f("path",{d:"M1342.38,1536.38C1338.03,1525.56 1333.68,1514.74 1329.34,1501.75C1324.99,1488.76 1322.82,1473.61 1320.64,1460.63C1309.77,1473.61 1294.55,1484.43 1279.33,1497.42C1264.11,1508.24 1246.72,1519.06 1227.15,1527.72C1209.76,1536.38 1188.02,1542.88 1166.28,1547.2C1144.54,1551.53 1120.62,1555.86 1094.54,1555.86C1053.23,1555.86 1014.09,1549.37 977.132,1538.55C942.348,1525.56 911.913,1510.41 885.823,1486.6C859.734,1464.96 840.165,1438.98 827.124,1408.68C811.905,1378.38 805.38,1345.91 805.38,1309.12C805.38,1222.55 837.994,1155.45 903.214,1107.84C968.437,1060.22 1066.27,1036.41 1194.54,1036.41L1314.12,1036.41L1314.12,986.633C1314.12,947.673 1301.07,915.205 1274.98,893.563C1248.9,869.755 1211.94,858.934 1161.93,858.934C1118.45,858.934 1088.01,867.59 1066.27,887.072C1046.7,904.384 1035.84,930.357 1035.84,960.66L822.775,960.66C822.775,926.027 831.47,891.398 846.689,861.099C861.909,828.631 885.823,802.658 914.088,778.85C944.522,755.042 981.482,735.565 1022.79,722.578C1066.27,707.427 1116.27,700.936 1170.63,700.936C1220.63,700.936 1266.29,707.427 1309.77,718.248C1353.25,731.235 1390.21,748.551 1422.82,772.359C1455.43,796.167 1479.35,826.47 1496.74,863.264C1514.13,900.058 1522.83,941.178 1522.83,988.794L1522.83,1341.59C1522.83,1384.87 1525,1421.67 1531.53,1451.97C1538.05,1480.11 1544.57,1506.08 1555.44,1525.56L1563.77,1538.55L1343.33,1538.55L1342.38,1536.38ZM1541.9,1526.24L1351.58,1526.24C1348.05,1517.42 1344.53,1508.36 1341.01,1497.84C1336.86,1485.45 1334.86,1470.98 1332.78,1458.59C1331.99,1453.85 1328.51,1450.01 1323.87,1448.75C1319.23,1447.49 1314.29,1449.04 1311.2,1452.73C1300.83,1465.11 1286.28,1475.36 1271.76,1487.7C1257.27,1497.97 1240.75,1508.24 1222.17,1516.47C1222,1516.54 1221.83,1516.62 1221.67,1516.7C1205.16,1524.92 1184.51,1531.02 1163.88,1535.13C1163.88,1535.13 1163.87,1535.13 1163.87,1535.13C1142.86,1539.31 1119.75,1543.55 1094.54,1543.55C1054.6,1543.55 1016.76,1537.28 981.019,1526.86C947.957,1514.48 918.944,1500.16 894.121,1477.51C893.977,1477.38 893.831,1477.25 893.682,1477.12C869.132,1456.76 850.703,1432.33 838.431,1403.82C838.335,1403.59 838.233,1403.37 838.124,1403.16C823.753,1374.55 817.69,1343.86 817.69,1309.12C817.69,1226.86 848.502,1163.02 910.472,1117.78C974.04,1071.37 1069.53,1048.72 1194.54,1048.72C1194.54,1048.72 1314.12,1048.72 1314.12,1048.72C1320.91,1048.72 1326.43,1043.21 1326.43,1036.41L1326.43,986.633C1326.43,943.746 1311.71,908.154 1283.06,884.271C1255.04,858.813 1215.56,846.624 1161.93,846.624C1114.64,846.624 1081.74,856.701 1058.08,877.879C1038.75,894.998 1026.74,919.532 1024.08,948.35C1024.08,948.35 879.661,948.35 835.47,948.35C837.247,919.802 845.118,891.651 857.689,866.624C857.739,866.525 857.788,866.425 857.835,866.324C872.268,835.534 895.058,810.997 921.845,788.411C951.155,765.518 986.738,746.816 1026.48,734.321C1026.6,734.283 1026.72,734.244 1026.84,734.202C1069.12,719.468 1117.77,713.246 1170.63,713.246C1219.46,713.246 1264.05,719.576 1306.52,730.123C1348.44,742.67 1384.1,759.335 1415.57,782.301C1446.48,804.875 1469.12,833.638 1485.61,868.525C1502.27,903.772 1510.52,943.18 1510.52,988.794L1510.52,1341.59C1510.52,1385.89 1512.82,1423.55 1519.49,1454.56C1519.51,1454.62 1519.52,1454.69 1519.53,1454.75C1525.77,1481.65 1532.15,1506.6 1541.9,1526.24ZM1140.19,1399.35C1163.26,1399.35 1184.03,1396.94 1202.54,1390.16C1220.79,1385.56 1239.01,1378.69 1254.98,1369.6C1271.23,1360.36 1285.11,1351.04 1296.71,1339.49C1308.37,1327.89 1317.67,1316.26 1324.66,1304.65C1325.82,1302.73 1326.43,1300.54 1326.43,1298.3L1326.43,1157.62C1326.43,1150.82 1320.91,1145.31 1314.12,1145.31L1205.41,1145.31C1171.56,1145.31 1142.22,1149.82 1117.4,1156.56C1091.69,1163.54 1070.72,1173.05 1056.59,1184.65C1039.57,1196.84 1027.44,1211.52 1020.06,1230.93C1013,1247.43 1008.31,1266.29 1008.31,1287.48C1008.31,1318.92 1020.33,1345.58 1042.12,1367.38C1061.4,1388.75 1094.65,1399.35 1140.19,1399.35ZM1140.19,1387.04C1161.93,1387.04 1181.5,1384.87 1198.89,1378.38C1216.28,1374.05 1233.68,1367.56 1248.9,1358.9C1264.11,1350.24 1277.16,1341.59 1288.03,1330.77C1298.9,1319.94 1307.6,1309.12 1314.12,1298.3L1314.12,1157.62L1205.41,1157.62C1172.8,1157.62 1144.54,1161.94 1120.62,1168.44C1096.71,1174.93 1077.14,1183.59 1064.1,1194.41C1048.88,1205.23 1038.01,1218.22 1031.49,1235.53C1024.96,1250.68 1020.62,1268 1020.62,1287.48C1020.62,1315.62 1031.49,1339.42 1051.06,1358.9C1068.44,1378.38 1098.88,1387.04 1140.19,1387.04Z",style:{fill:"white"}},null,-1),Ae=[Ie,Te];function Ee(r,e){return C(),L("svg",Me,Ae)}var Oe=T($e,[["render",Ee]]);class Q{constructor(){this.mittInstance=de()}emit(e,n){this.mittInstance.emit(e,n)}on(e,n){this.mittInstance.on(e,n)}off(e,n){this.mittInstance.off(e,n)}once(e,n){return new Promise(t=>{const i=s=>{this.off(e,i),t(s),n&&n(s)};this.on(e,i)})}}class Se extends Q{constructor(e,n){super();this._iframe={},this._popup={},this._usePopup=!0,this._keepPopup=!1,this._promiseController=[],this._pending=[],this.listener=t=>{var i,s,l,_,v,u;if(typeof t.data!="object")return;const{method:a,params:d,id:w,result:A,error:c,session:h}=t.data;if(t.source!==this._popup.window&&t.source!==((i=this._iframe)===null||i===void 0?void 0:i.window)||t.origin!==((s=this._url)===null||s===void 0?void 0:s.origin))return;if(console.info(`WalletConnector:${t.source===this._popup.window?"popup":"iframe"}`,t.data),w!=null){if(typeof w!="number"&&typeof w!="string"||typeof w=="string"&&isNaN(parseInt(w)))return;if(!this._promiseController[+w])throw"received result to nonexistent request";this._pending=this._pending.filter(p=>p!=w),c!=null&&this._promiseController[+w].reject(c),A!=null&&this._promiseController[+w].resolve(A);return}if(typeof a!="string")return;if(a==="ready"){t.source===this._popup.window&&(this._pending=[],(_=(l=this._popup).resolve)===null||_===void 0||_.call(l)),t.source===this._iframe.window&&((u=(v=this._iframe).resolve)===null||u===void 0||u.call(v));return}if(a==="change")return;if(a==="usePopup"){if(typeof d!="boolean")return;this._usePopup=d}if(a==="keepPopup"){if(typeof d!="boolean")return;this._keepPopup=d,d||this.closePopup()}const o={method:a,params:d,session:h};if(!I.is(o,p=>{function b(m){return typeof m!="string"?{}:null}function P(){return null}function te(m){return m!==void 0?{}:null}function ne(m){return typeof m!="number"?{}:null}function ie(m){var x=[te,b,ne];for(const oe of x){var re=oe(m);if(!re)return null}return{}}function se(m){if(typeof m!="object"||m===null||Array.isArray(m))return{};if("method"in m){var x=b(m.method);if(x)return x}else return{};if("params"in m){var x=P(m.params);if(x)return x}else return{};if("session"in m){var x=ie(m.session);if(x)return x}return null}return se(p)}))return console.warn("dropped");this.emit("message",o)},this._appInfo=n,this._url=e,this._url.hash=new URLSearchParams(Object.assign(Object.assign({origin:window.location.origin},this._appInfo),{session:Math.random().toString().slice(2)})).toString(),window.addEventListener("message",this.listener),this.openIframe()}get url(){var e;return(e=this._url)===null||e===void 0?void 0:e.origin}get usePopup(){return this._usePopup}get keepPopup(){return this._keepPopup}set keepPopup(e){this._keepPopup=e,this.emit("builtin",{keepPopup:e}),e?this.openPopup(!0):this.closePopup()}disconnect(e){this.closeIframe(),this.closePopup(!0),window.removeEventListener("message",this.listener)}postMessage(e,n){const t=this._promiseController.length,i=new Promise((s,l)=>this._promiseController.push({resolve:s,reject:l})).finally(()=>!this._pending.length&&this.closePopup());return this.deliverMessage(Object.assign(Object.assign({},e),{id:t})),n&&setTimeout(()=>this._promiseController[t].reject("timeout"),n),i}openIframe(){if(this._iframeEl)return;this._iframeEl=document.createElement("iframe"),this._iframeEl.src=this._url.toString(),this._iframeEl.style.display="none";const e=new Promise((t,i)=>this._iframe={resolve:t,reject:i});this._iframe.promise=e;const n=()=>{var t;document.body.appendChild(this._iframeEl),this._iframe.window=(t=this._iframeEl)===null||t===void 0?void 0:t.contentWindow};document.readyState==="complete"||document.readyState==="interactive"?n():document.addEventListener("DOMContentLoaded",n)}closeIframe(){var e,n;!this._iframeEl||(this._iframeEl.src="about:blank",this._iframeEl.remove(),this._iframeEl=void 0,(n=(e=this._iframe).reject)===null||n===void 0||n.call(e),this._iframe={})}showIframe(){}openPopup(e){if(this._popup.window&&!this._popup.window.closed){this._popup.window.focus();return}if(!this._usePopup&&!e)return;window.name="parent";const n=window.open(this._url.toString(),"_blank","location,resizable,scrollbars,width=400,height=600"),t=new Promise((s,l)=>this._popup={window:n,resolve:s,reject:l});this._popup.promise=t;const i=setInterval(()=>{this._popup.window&&!this._popup.window.closed||(this.keepPopup&&(this.keepPopup=!1),clearInterval(i))},200)}closePopup(e){var n,t,i;!this._popup.window||((n=this._popup.window)===null||n===void 0?void 0:n.closed)||this._keepPopup&&!e||(this._popup.window.location.href="about:blank",this._popup.window.close(),(i=(t=this._popup).reject)===null||i===void 0||i.call(t),this._popup={})}completeRequest(){!this._pending.length&&this.closePopup()}deliverMessage(e){if(!this._url)throw"Missing URL";const n=Object.assign(Object.assign({},e),{jsonrpc:"2.0"});this.openIframe(),this._iframe.promise=this._iframe.promise.then(()=>{var t;return(t=this._iframe.window)===null||t===void 0?void 0:t.postMessage(n,this._url.origin)}).catch(()=>{}),this.openPopup(),this._popup.promise=this._popup.promise.then(()=>n.id!=null&&this._pending.push(n.id)).then(()=>{var t;return(t=this._popup.window)===null||t===void 0?void 0:t.postMessage(n,this._url.origin)}).catch(()=>{})}}var H=globalThis&&globalThis.__awaiter||function(r,e,n,t){function i(s){return s instanceof n?s:new n(function(l){l(s)})}return new(n||(n=Promise))(function(s,l){function _(a){try{u(t.next(a))}catch(d){l(d)}}function v(a){try{u(t.throw(a))}catch(d){l(d)}}function u(a){a.done?s(a.value):i(a.value).then(_,v)}u((t=t.apply(r,e||[])).next())})};class k extends Q{constructor(e,n,t){super();this._session=0,this._protocolInfo=e,this._appInfo=n,this._listener=i=>{const{method:s,params:l,session:_}=i;if(!(_!=null&&this._session!=_)&&!(!_&&this._session)){if(s==="connect"){if(!I.is(l,v=>{function u(a){return typeof a!="string"?{}:null}return u(v)})||this._address===l)return;this._address=l,this.emit("connect",l),this.emit("change",l)}s==="disconnect"&&this.disconnectEvent(!1)}},this._emitterPassthrough=i=>{const s=Object.entries(i)[0];this.emit(s[0],s[1])},t&&this.setUrl(t)}setUrl(e){var n;const t=typeof e=="string"?new URL(e.includes("://")?e:"https://"+e):e;if(((n=this._bridge)===null||n===void 0?void 0:n.url)!==t.origin){if(this.disconnect(),!k._bridges[t.origin])this._bridge=new Se(t,this._appInfo),k._bridges[t.origin]={bridge:this._bridge,sessions:[]};else{this._bridge=k._bridges[t.origin].bridge;const i=k._bridges[t.origin].sessions;for(let s=0;s<=i.length;s++)if(i.indexOf(s)<0){this._session=s;break}}k._bridges[t.origin].sessions.push(this._session),this._bridge.on("message",this._listener),this._bridge.on("builtin",this._emitterPassthrough)}}get address(){return this._address}get connected(){return!!this._address}get url(){var e;return(e=this._bridge)===null||e===void 0?void 0:e.url}get keepPopup(){var e;return((e=this._bridge)===null||e===void 0?void 0:e.keepPopup)||!1}set keepPopup(e){this._bridge&&(this._bridge.keepPopup=e)}connect(e){return H(this,void 0,void 0,function*(){if(!this._bridge)throw"URL missing";const n=new Promise(t=>this.once("connect",t)).finally(()=>{var t;return(t=this._bridge)===null||t===void 0?void 0:t.completeRequest()});return this._bridge.deliverMessage({method:"connect",params:e}),n})}disconnect(e){return H(this,void 0,void 0,function*(){return this.disconnectEvent(!0,e)})}disconnectEvent(e,n){return H(this,void 0,void 0,function*(){if(!this._bridge)return;const t=this._bridge,i=this._session,s=t.url;if(this._address=void 0,this._bridge=void 0,this._session=0,e)try{yield t.postMessage(Object.assign(Object.assign({method:"disconnect",params:[n]},this._protocolInfo),{session:i}))}catch{console.warn("disconnect request failed")}this.emit("disconnect",void 0),this.emit("change",void 0),t.off("message",this._listener),t.off("builtin",this._emitterPassthrough),k._bridges[s].sessions=k._bridges[s].sessions.filter(l=>l!=i),setTimeout(()=>{k._bridges[s].sessions.length||(k._bridges[s].bridge.disconnect(),delete k._bridges[s])},100)})}postMessage(e,n,t){if(!this._bridge)throw"URL missing";return this._bridge.postMessage(Object.assign(Object.assign({method:e,params:n},this._protocolInfo),{session:this._session}),t)}}k._bridges={};var S=globalThis&&globalThis.__awaiter||function(r,e,n,t){function i(s){return s instanceof n?s:new n(function(l){l(s)})}return new(n||(n=Promise))(function(s,l){function _(a){try{u(t.next(a))}catch(d){l(d)}}function v(a){try{u(t.throw(a))}catch(d){l(d)}}function u(a){a.done?s(a.value):i(a.value).then(_,v)}u((t=t.apply(r,e||[])).next())})},Ve=globalThis&&globalThis.__rest||function(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(r);i<t.length;i++)e.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(r,t[i])&&(n[t[i]]=r[t[i]]);return n};class Be extends k{constructor(e,n){super({protocol:"arweave",version:"1.0.0"},Object.assign({},e),n)}getPublicKey(){return S(this,void 0,void 0,function*(){const e=yield this.postMessage("getPublicKey");if(!I.is(e,n=>{function t(i){return typeof i!="string"?{}:null}return t(n)}))throw"TypeError";return e})}getArweaveConfig(){return S(this,void 0,void 0,function*(){const e=yield this.postMessage("getArweaveConfig");if(!I.is(e,n=>{function t(o){return o!==void 0?{}:null}function i(o){return typeof o!="number"?{}:null}function s(o){var p=[t,i];for(const P of p){var b=P(o);if(!b)return null}return{}}function l(o){return typeof o!="string"?{}:null}function _(o){var p=[t,l];for(const P of p){var b=P(o);if(!b)return null}return{}}function v(o){var p=[t,l,i];for(const P of p){var b=P(o);if(!b)return null}return{}}function u(o){return o!==!1?{}:null}function a(o){return o!==!0?{}:null}function d(o){var p=[t,u,a];for(const P of p){var b=P(o);if(!b)return null}return{}}function w(o){if(typeof o!="object"||o===null||Array.isArray(o))return{};if("timeout"in o){var p=s(o.timeout);if(p)return p}if("protocol"in o){var p=_(o.protocol);if(p)return p}if("host"in o){var p=_(o.host);if(p)return p}if("port"in o){var p=v(o.port);if(p)return p}if("logging"in o){var p=d(o.logging);if(p)return p}return null}function A(){return null}function c(o){if(typeof o!="object"||o===null||Array.isArray(o))return{};if("logger"in o){var p=A(o.logger);if(p)return p}return null}function h(o){var p=[w,c];for(const P of p){var b=P(o);if(b)return b}return null}return h(n)}))throw"TypeError";return delete e.logger,e})}signTransaction(e,n){return S(this,void 0,void 0,function*(){const t=Ve(e,["data","chunks"]),i=yield this.postMessage("signTransaction",[t,n]);if(!I.is(i,s=>{function l(c){return typeof c!="string"?{}:null}function _(c){return c!==void 0?{}:null}function v(c){return c!==null?{}:null}function u(c){var h=[_,v,l];for(const p of h){var o=p(c);if(!o)return null}return{}}function a(c){if(typeof c!="object"||c===null||Array.isArray(c))return{};if("name"in c){var h=l(c.name);if(h)return h}else return{};if("value"in c){var h=l(c.value);if(h)return h}else return{};return null}function d(c){if(!Array.isArray(c))return{};for(let o=0;o<c.length;o++){var h=a(c[o]);if(h)return h}return null}function w(c){var h=[_,v,d];for(const p of h){var o=p(c);if(!o)return null}return{}}function A(c){if(typeof c!="object"||c===null||Array.isArray(c))return{};if("id"in c){var h=l(c.id);if(h)return h}else return{};if("owner"in c){var h=u(c.owner);if(h)return h}if("tags"in c){var h=w(c.tags);if(h)return h}if("signature"in c){var h=l(c.signature);if(h)return h}else return{};if("reward"in c){var h=u(c.reward);if(h)return h}return null}return A(s)}))throw"TypeError";return e.setSignature({id:i.id,owner:i.owner||e.owner,tags:i.tags,signature:i.signature,reward:i.reward||void 0}),e})}sign(e,n){return S(this,void 0,void 0,function*(){const t=yield this.postMessage("sign",[e,n]);if(!I.is(t,i=>{function s(l){return typeof l!="string"?{}:null}return s(i)}))throw"TypeError";return t})}decrypt(e,n){return S(this,void 0,void 0,function*(){const t=yield this.postMessage("decrypt",[e,n]);if(!I.is(t,i=>{function s(l){return typeof l!="string"?{}:null}return s(i)}))throw"TypeError";return t})}}class ze extends Be{constructor(e,n){super(e,n);U(this,"state",N({url:"arweave.app",address:void 0,keepPopup:!1,error:""}));this.on("connect",t=>{this.state.address=t,this.state.url=g.url}),this.on("disconnect",()=>this.state.address=void 0),this.on("keepPopup",t=>this.state.keepPopup=t)}get url(){return this.state.url}get address(){return this.state.address}get keepPopup(){return this.state.keepPopup}set keepPopup(e){super.keepPopup=e}get error(){return this.state.error}set error(e){this.state.error=e}}const g=new ze({name:"Connector Example",logo:`${location.href}placeholder.svg`});const We=B({props:["icon"]}),M=r=>(K("data-v-75541e82"),r=r(),G(),r),Ne={class:"img-container"},De={key:0,xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",fill:"currentColor"},He=M(()=>f("rect",{fill:"none",height:"24",width:"24"},null,-1)),Re=M(()=>f("path",{d:"M3,3v18h18V3H3z M17,15.59L15.59,17L12,13.41L8.41,17L7,15.59L10.59,12L7,8.41L8.41,7L12,10.59L15.59,7L17,8.41L13.41,12 L17,15.59z"},null,-1)),qe=[He,Re],Ue={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Ze=M(()=>f("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1)),Fe=M(()=>f("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"},null,-1)),Ke=[Ze,Fe],Ge={key:2,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},Xe=M(()=>f("path",{d:"M0 0h24v24H0z",fill:"none"},null,-1)),Je=M(()=>f("path",{d:"M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"},null,-1)),Qe=[Xe,Je],Ye={key:3,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"},je=M(()=>f("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1)),et=M(()=>f("path",{d:"M18 14.49V9c0-1-1.01-2.01-2-2V3h-2v4h-4V3H8v2.48l9.51 9.5.49-.49zm-1.76 1.77L7.2 7.2l-.01.01L3.98 4 2.71 5.25l3.36 3.36C6.04 8.74 6 8.87 6 9v5.48L9.5 18v3h5v-3l.48-.48L19.45 22l1.26-1.28-4.47-4.46z"},null,-1)),tt=[je,et];function nt(r,e,n,t,i,s){return C(),L("button",null,[f("div",Ne,[$(F,{name:"fade"},{default:Z(()=>[r.icon==="close"?(C(),L("svg",De,qe)):r.icon==="launch"?(C(),L("svg",Ue,Ke)):r.icon==="plug"?(C(),L("svg",Ge,Qe)):r.icon==="unplug"?(C(),L("svg",Ye,tt)):z("",!0)]),_:1})])])}var Y=T(We,[["render",nt],["__scopeId","data-v-75541e82"]]);const it={class:"url-input"},st=["placeholder","onKeydown"],rt={class:"actions"},ot=B({props:["modelValue","icon","placeholder","actions","autocomplete","mask","disabled","id"],emits:["update:modelValue"],setup(r,{emit:e}){const n=r,t=E({get(){return n.modelValue},set(a){e("update:modelValue",a)}}),i=N({loading:!1}),s=()=>{g.setUrl(t.value||g.url),g.connect(),i.loading=!0,g.once("change",()=>i.loading=!1)},l=()=>g.disconnect(),_=()=>g.keepPopup=!g.keepPopup,v=E(()=>g.keepPopup?"close":"launch"),u=E(()=>g.address?"unplug":"plug");return(a,d)=>(C(),L("div",it,[pe(f("input",{class:"url","onUpdate:modelValue":d[0]||(d[0]=w=>fe(t)?t.value=w:null),placeholder:y(g).url,onKeydown:_e(s,["enter"])},null,40,st),[[he,y(t)]]),f("div",rt,[$(F,{name:"fade"},{default:Z(()=>[y(g).address?(C(),ge(Y,{key:0,class:X(["action",{dim:!y(g).keepPopup}]),icon:y(v),onClick:_},null,8,["icon","class"])):z("",!0)]),_:1}),$(Y,{class:X(["action",{dim:y(i).loading}]),icon:y(u),onClick:d[1]||(d[1]=w=>y(g).address?l():s())},null,8,["icon","class"])])]))}});var lt=T(ot,[["__scopeId","data-v-a4af76b8"]]);const at={class:"code-box"},ut=B({props:["code"],setup(r){return(e,n)=>{const t=ve("highlightjs");return C(),L("div",at,[$(t,{class:"box",code:r.code},null,8,["code"])])}}});var j=T(ut,[["__scopeId","data-v-0b38042f"]]);const ct={},dt={fill:"currentColor",height:"2em",width:"2em","aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1","data-view-component":"true",class:"octicon octicon-mark-github v-align-middle"},pt=f("path",{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"},null,-1),ht=[pt];function ft(r,e){return C(),L("svg",dt,ht)}var _t=T(ct,[["render",ft]]);const gt={},vt={xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"2em",viewBox:"0 0 24 24",width:"2em",fill:"currentColor"},mt=f("g",null,[f("rect",{fill:"none",height:"24",width:"24"}),f("path",{d:"M16.54,11L13,7.46l1.41-1.41l2.12,2.12l4.24-4.24l1.41,1.41L16.54,11z M11,7H2v2h9V7z M21,13.41L19.59,12L17,14.59 L14.41,12L13,13.41L15.59,16L13,18.59L14.41,20L17,17.41L19.59,20L21,18.59L18.41,16L21,13.41z M11,15H2v2h9V15z"})],-1),wt=[mt];function Ct(r,e){return C(),L("svg",vt,wt)}var yt=T(gt,[["render",Ct]]);const V=r=>(K("data-v-3c89b80e"),r=r(),G(),r),bt={class:"app"},Lt=V(()=>f("div",null,"The connector module itself has no visual element included. This page is an example on how it can be integrated",-1)),kt={class:"button",href:"https://github.com/jfbeats/ArweaveWalletConnector"},Pt=V(()=>f("span",null,"View on Github",-1)),xt=V(()=>f("div",null,null,-1)),$t={key:0,id:"s1",class:"section"},Mt={class:"ellipsis"},It={style:{display:"flex","justify-content":"center"}},Tt=V(()=>f("span",null,"Sign Transaction",-1)),At=V(()=>f("div",null,null,-1)),Et=B({setup(r){const e=me.init({host:"arweave.net",port:443,protocol:"https"}),n=N({quantity:"100000000000",target:"TId0Wix2KFl1gArtAT6Do1CbWU_0wneGvS5X9BfW5PE",data:"hello world"}),t=async()=>{try{const u=await e.createTransaction(q({},n));u.addTag("App-Name","Donate to the developer"),u.addTag("Tag-1","transaction tags are all displayed here"),u.addTag("Tag-2","this is a real transaction"),u.addTag("Tag-3","it will only be sent by clicking accept"),await g.signTransaction(u)}catch(u){console.error(u),g.error=u}},i=we(g.url),s=E(()=>{const u=[g.address];let a=0;for(;u[a];)a++;return a});Ce(s,async(u,a)=>{if(!(u<=a)){for(;document.hidden;)await new Promise(d=>setTimeout(()=>d(),100));setTimeout(()=>{var d;return(d=document.querySelector("#s"+u))==null?void 0:d.scrollIntoView({behavior:"smooth"})},300)}});const l=u=>{const a=new Intl.NumberFormat(navigator.languages,{maximumFractionDigits:3}).format(u),d=new Intl.NumberFormat(navigator.languages,{maximumSignificantDigits:1}).format(u);return a.length>=d.length?a:d},_=u=>Object.entries(u).reduce((a,d)=>a+`	${d[0]}: '${d[1]}'${d[0]=="quantity"?` // ${l(e.ar.winstonToAr(d[1]))} AR`:""}
`,""),v=E(()=>[`import { ArweaveWebWallet } from 'arweave-wallet-connector'
const wallet = new ArweaveWebWallet({
	name: 'Connector Example',
	logo: '${location.href}placeholder.svg'
})

wallet.setUrl('${i.value}')`,`const transaction = await arweave.createTransaction({
${_(n)}})
await wallet.signTransaction(transaction)`]);return(u,a)=>(C(),L("div",bt,[$(Oe,{class:"logo"}),$(lt,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=d=>i.value=d),class:"wallet-selector"},null,8,["modelValue"]),$(j,{code:y(v)[0]},null,8,["code"]),Lt,f("a",kt,[$(_t),Pt]),xt,y(s)>=1?(C(),L("section",$t,[f("div",Mt,[f("div",null,"This page is now linked to "+J(y(g).url)+" with the selected address :",1),ye(" "+J(y(g).address),1)]),f("div",It,[y(g).address?(C(),L("button",{key:0,class:"button",onClick:t},[$(yt),Tt])):z("",!0)]),$(j,{code:y(v)[1]},null,8,["code"]),At])):z("",!0)]))}});var Ot=T(Et,[["__scopeId","data-v-3c89b80e"]]);be.registerLanguage("javascript",Le);const ee=ke(Ot);ee.use(Pe);ee.mount("#app");
