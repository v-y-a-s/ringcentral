/*! For license information please see redirect.js.LICENSE.txt */
!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=5277)}({10:function(t,n,e){"use strict";var r=e(42),o=e(165)(0),i=e(145)([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(t){return o(this,t,arguments[1])}})},100:function(t,n,e){var r=e(81),o=e(328),i=e(171),s=Object.defineProperty;n.f=e(95)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return s(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},106:function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},107:function(t,n,e){var r=e(152),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},114:function(t,n,e){var r=e(100),o=e(163);t.exports=e(95)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},124:function(t,n,e){var r=e(76),o=e(114),i=e(128),s=e(159)("src"),a=e(443),u="toString",c=(""+a).split(u);e(106).inspectSource=function(t){return a.call(t)},(t.exports=function(t,n,e,a){var u="function"==typeof e;u&&(i(e,"name")||o(e,"name",n)),t[n]!==e&&(u&&(i(e,s)||o(e,s,t[n]?""+t[n]:c.join(String(n)))),t===r?t[n]=e:a?t[n]?t[n]=e:o(t,n,e):(delete t[n],o(t,n,e)))})(Function.prototype,u,(function(){return"function"==typeof this&&this[s]||a.call(this)}))},128:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},129:function(t,n,e){var r=e(224),o=e(144);t.exports=function(t){return r(o(t))}},135:function(t,n,e){var r=e(144);t.exports=function(t){return Object(r(t))}},14:function(t,n,e){"use strict";var r=e(42),o=e(266)(!1),i=[].indexOf,s=!!i&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(s||!e(145)(i)),"Array",{indexOf:function(t){return s?i.apply(this,arguments)||0:o(this,t,arguments[1])}})},143:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},144:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},145:function(t,n,e){"use strict";var r=e(78);t.exports=function(t,n){return!!t&&r((function(){n?t.call(null,(function(){}),1):t.call(null)}))}},152:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},159:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},163:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},164:function(t,n,e){var r=e(173);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},165:function(t,n,e){var r=e(164),o=e(224),i=e(135),s=e(107),a=e(451);t.exports=function(t,n){var e=1==t,u=2==t,c=3==t,h=4==t,l=6==t,f=5==t||l,p=n||a;return function(n,a,v){for(var d,g,m=i(n),y=o(m),x=r(a,v,3),b=s(y.length),w=0,j=e?p(n,b):u?p(n,0):void 0;b>w;w++)if((f||w in y)&&(g=x(d=y[w],w,m),t))if(e)j[w]=g;else if(g)switch(t){case 3:return!0;case 5:return d;case 6:return w;case 2:j.push(d)}else if(h)return!1;return l?-1:c||h?h:j}}},17:function(t,n,e){var r=e(100).f,o=Function.prototype,i=/^\s*function ([^ (]*)/,s="name";s in o||e(95)&&r(o,s,{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},171:function(t,n,e){var r=e(84);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},172:function(t,n){t.exports=!1},173:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},202:function(t,n,e){var r=e(106),o=e(76),i="__core-js_shared__",s=o[i]||(o[i]={});(t.exports=function(t,n){return s[t]||(s[t]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:e(172)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},213:function(t,n,e){"use strict";var r=e(455),o=e(456);function i(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}n.parse=x,n.resolve=function(t,n){return x(t,!1,!0).resolve(n)},n.resolveObject=function(t,n){return t?x(t,!1,!0).resolveObject(n):n},n.format=function(t){o.isString(t)&&(t=x(t));return t instanceof i?t.format():i.prototype.format.call(t)},n.Url=i;var s=/^([a-z0-9.+-]+:)/i,a=/:[0-9]*$/,u=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),h=["'"].concat(c),l=["%","/","?",";","#"].concat(h),f=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,v=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,d={javascript:!0,"javascript:":!0},g={javascript:!0,"javascript:":!0},m={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},y=e(334);function x(t,n,e){if(t&&o.isObject(t)&&t instanceof i)return t;var r=new i;return r.parse(t,n,e),r}i.prototype.parse=function(t,n,e){if(!o.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var i=t.indexOf("?"),a=-1!==i&&i<t.indexOf("#")?"?":"#",c=t.split(a);c[0]=c[0].replace(/\\/g,"/");var x=t=c.join(a);if(x=x.trim(),!e&&1===t.split("#").length){var b=u.exec(x);if(b)return this.path=x,this.href=x,this.pathname=b[1],b[2]?(this.search=b[2],this.query=n?y.parse(this.search.substr(1)):this.search.substr(1)):n&&(this.search="",this.query={}),this}var w=s.exec(x);if(w){var j=(w=w[0]).toLowerCase();this.protocol=j,x=x.substr(w.length)}if(e||w||x.match(/^\/\/[^@\/]+@[^@\/]+/)){var O="//"===x.substr(0,2);!O||w&&g[w]||(x=x.substr(2),this.slashes=!0)}if(!g[w]&&(O||w&&!m[w])){for(var A,S,C=-1,E=0;E<f.length;E++){-1!==(I=x.indexOf(f[E]))&&(-1===C||I<C)&&(C=I)}-1!==(S=-1===C?x.lastIndexOf("@"):x.lastIndexOf("@",C))&&(A=x.slice(0,S),x=x.slice(S+1),this.auth=decodeURIComponent(A)),C=-1;for(E=0;E<l.length;E++){var I;-1!==(I=x.indexOf(l[E]))&&(-1===C||I<C)&&(C=I)}-1===C&&(C=x.length),this.host=x.slice(0,C),x=x.slice(C),this.parseHost(),this.hostname=this.hostname||"";var R="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!R)for(var _=this.hostname.split(/\./),P=(E=0,_.length);E<P;E++){var U=_[E];if(U&&!U.match(p)){for(var M="",k=0,q=U.length;k<q;k++)U.charCodeAt(k)>127?M+="x":M+=U[k];if(!M.match(p)){var F=_.slice(0,E),T=_.slice(E+1),N=U.match(v);N&&(F.push(N[1]),T.unshift(N[2])),T.length&&(x="/"+T.join(".")+x),this.hostname=F.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),R||(this.hostname=r.toASCII(this.hostname));var $=this.port?":"+this.port:"",z=this.hostname||"";this.host=z+$,this.href+=this.host,R&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==x[0]&&(x="/"+x))}if(!d[j])for(E=0,P=h.length;E<P;E++){var L=h[E];if(-1!==x.indexOf(L)){var B=encodeURIComponent(L);B===L&&(B=escape(L)),x=x.split(L).join(B)}}var G=x.indexOf("#");-1!==G&&(this.hash=x.substr(G),x=x.slice(0,G));var H=x.indexOf("?");if(-1!==H?(this.search=x.substr(H),this.query=x.substr(H+1),n&&(this.query=y.parse(this.query)),x=x.slice(0,H)):n&&(this.search="",this.query={}),x&&(this.pathname=x),m[j]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){$=this.pathname||"";var K=this.search||"";this.path=$+K}return this.href=this.format(),this},i.prototype.format=function(){var t=this.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var n=this.protocol||"",e=this.pathname||"",r=this.hash||"",i=!1,s="";this.host?i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&o.isObject(this.query)&&Object.keys(this.query).length&&(s=y.stringify(this.query));var a=this.search||s&&"?"+s||"";return n&&":"!==n.substr(-1)&&(n+=":"),this.slashes||(!n||m[n])&&!1!==i?(i="//"+(i||""),e&&"/"!==e.charAt(0)&&(e="/"+e)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),a&&"?"!==a.charAt(0)&&(a="?"+a),n+i+(e=e.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})))+(a=a.replace("#","%23"))+r},i.prototype.resolve=function(t){return this.resolveObject(x(t,!1,!0)).format()},i.prototype.resolveObject=function(t){if(o.isString(t)){var n=new i;n.parse(t,!1,!0),t=n}for(var e=new i,r=Object.keys(this),s=0;s<r.length;s++){var a=r[s];e[a]=this[a]}if(e.hash=t.hash,""===t.href)return e.href=e.format(),e;if(t.slashes&&!t.protocol){for(var u=Object.keys(t),c=0;c<u.length;c++){var h=u[c];"protocol"!==h&&(e[h]=t[h])}return m[e.protocol]&&e.hostname&&!e.pathname&&(e.path=e.pathname="/"),e.href=e.format(),e}if(t.protocol&&t.protocol!==e.protocol){if(!m[t.protocol]){for(var l=Object.keys(t),f=0;f<l.length;f++){var p=l[f];e[p]=t[p]}return e.href=e.format(),e}if(e.protocol=t.protocol,t.host||g[t.protocol])e.pathname=t.pathname;else{for(var v=(t.pathname||"").split("/");v.length&&!(t.host=v.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==v[0]&&v.unshift(""),v.length<2&&v.unshift(""),e.pathname=v.join("/")}if(e.search=t.search,e.query=t.query,e.host=t.host||"",e.auth=t.auth,e.hostname=t.hostname||t.host,e.port=t.port,e.pathname||e.search){var d=e.pathname||"",y=e.search||"";e.path=d+y}return e.slashes=e.slashes||t.slashes,e.href=e.format(),e}var x=e.pathname&&"/"===e.pathname.charAt(0),b=t.host||t.pathname&&"/"===t.pathname.charAt(0),w=b||x||e.host&&t.pathname,j=w,O=e.pathname&&e.pathname.split("/")||[],A=(v=t.pathname&&t.pathname.split("/")||[],e.protocol&&!m[e.protocol]);if(A&&(e.hostname="",e.port=null,e.host&&(""===O[0]?O[0]=e.host:O.unshift(e.host)),e.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===v[0]?v[0]=t.host:v.unshift(t.host)),t.host=null),w=w&&(""===v[0]||""===O[0])),b)e.host=t.host||""===t.host?t.host:e.host,e.hostname=t.hostname||""===t.hostname?t.hostname:e.hostname,e.search=t.search,e.query=t.query,O=v;else if(v.length)O||(O=[]),O.pop(),O=O.concat(v),e.search=t.search,e.query=t.query;else if(!o.isNullOrUndefined(t.search)){if(A)e.hostname=e.host=O.shift(),(R=!!(e.host&&e.host.indexOf("@")>0)&&e.host.split("@"))&&(e.auth=R.shift(),e.host=e.hostname=R.shift());return e.search=t.search,e.query=t.query,o.isNull(e.pathname)&&o.isNull(e.search)||(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.href=e.format(),e}if(!O.length)return e.pathname=null,e.search?e.path="/"+e.search:e.path=null,e.href=e.format(),e;for(var S=O.slice(-1)[0],C=(e.host||t.host||O.length>1)&&("."===S||".."===S)||""===S,E=0,I=O.length;I>=0;I--)"."===(S=O[I])?O.splice(I,1):".."===S?(O.splice(I,1),E++):E&&(O.splice(I,1),E--);if(!w&&!j)for(;E--;E)O.unshift("..");!w||""===O[0]||O[0]&&"/"===O[0].charAt(0)||O.unshift(""),C&&"/"!==O.join("/").substr(-1)&&O.push("");var R,_=""===O[0]||O[0]&&"/"===O[0].charAt(0);A&&(e.hostname=e.host=_?"":O.length?O.shift():"",(R=!!(e.host&&e.host.indexOf("@")>0)&&e.host.split("@"))&&(e.auth=R.shift(),e.host=e.hostname=R.shift()));return(w=w||e.host&&O.length)&&!_&&O.unshift(""),O.length?e.pathname=O.join("/"):(e.pathname=null,e.path=null),o.isNull(e.pathname)&&o.isNull(e.search)||(e.path=(e.pathname?e.pathname:"")+(e.search?e.search:"")),e.auth=t.auth||e.auth,e.slashes=e.slashes||t.slashes,e.href=e.format(),e},i.prototype.parseHost=function(){var t=this.host,n=a.exec(t);n&&(":"!==(n=n[0])&&(this.port=n.substr(1)),t=t.substr(0,t.length-n.length)),t&&(this.hostname=t)}},224:function(t,n,e){var r=e(143);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},225:function(t,n,e){var r=e(152),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=r(t))<0?o(t+n,0):i(t,n)}},240:function(t,n,e){var r=e(143),o=e(85)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(s=r(n))&&"function"==typeof n.callee?"Arguments":s}},242:function(t,n,e){"use strict";var r,o,i=e(290),s=RegExp.prototype.exec,a=String.prototype.replace,u=s,c=(r=/a/,o=/b*/g,s.call(r,"a"),s.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),h=void 0!==/()??/.exec("")[1];(c||h)&&(u=function(t){var n,e,r,o,u=this;return h&&(e=new RegExp("^"+u.source+"$(?!\\s)",i.call(u))),c&&(n=u.lastIndex),r=s.call(u,t),c&&r&&(u.lastIndex=u.global?r.index+r[0].length:n),h&&r&&r.length>1&&a.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=u},244:function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},266:function(t,n,e){var r=e(129),o=e(107),i=e(225);t.exports=function(t){return function(n,e,s){var a,u=r(n),c=o(u.length),h=i(s,c);if(t&&e!=e){for(;c>h;)if((a=u[h++])!=a)return!0}else for(;c>h;h++)if((t||h in u)&&u[h]===e)return t||h||0;return!t&&-1}}},283:function(t,n,e){var r=e(84),o=e(76).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},285:function(t,n,e){var r=e(143);t.exports=Array.isArray||function(t){return"Array"==r(t)}},290:function(t,n,e){"use strict";var r=e(81);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},291:function(t,n,e){"use strict";var r=e(240),o=RegExp.prototype.exec;t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},292:function(t,n,e){"use strict";e(379);var r=e(124),o=e(114),i=e(78),s=e(144),a=e(85),u=e(242),c=a("species"),h=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,n,e){var f=a(t),p=!i((function(){var n={};return n[f]=function(){return 7},7!=""[t](n)})),v=p?!i((function(){var n=!1,e=/a/;return e.exec=function(){return n=!0,null},"split"===t&&(e.constructor={},e.constructor[c]=function(){return e}),e[f](""),!n})):void 0;if(!p||!v||"replace"===t&&!h||"split"===t&&!l){var d=/./[f],g=e(s,f,""[t],(function(t,n,e,r,o){return n.exec===u?p&&!o?{done:!0,value:d.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}})),m=g[0],y=g[1];r(String.prototype,t,m),o(RegExp.prototype,f,2==n?function(t,n){return y.call(t,this,n)}:function(t){return y.call(t,this)})}}},328:function(t,n,e){t.exports=!e(95)&&!e(78)((function(){return 7!=Object.defineProperty(e(283)("div"),"a",{get:function(){return 7}}).a}))},331:function(t,n,e){var r=e(81),o=e(173),i=e(85)("species");t.exports=function(t,n){var e,s=r(t).constructor;return void 0===s||null==(e=r(s)[i])?n:o(e)}},334:function(t,n,e){"use strict";n.decode=n.parse=e(457),n.encode=n.stringify=e(458)},379:function(t,n,e){"use strict";var r=e(242);e(42)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},42:function(t,n,e){var r=e(76),o=e(106),i=e(114),s=e(124),a=e(164),u=function(t,n,e){var c,h,l,f,p=t&u.F,v=t&u.G,d=t&u.S,g=t&u.P,m=t&u.B,y=v?r:d?r[n]||(r[n]={}):(r[n]||{}).prototype,x=v?o:o[n]||(o[n]={}),b=x.prototype||(x.prototype={});for(c in v&&(e=n),e)l=((h=!p&&y&&void 0!==y[c])?y:e)[c],f=m&&h?a(l,r):g&&"function"==typeof l?a(Function.call,l):l,y&&s(y,c,l,t&u.U),x[c]!=l&&i(x,c,f),g&&b[c]!=l&&(b[c]=l)};r.core=o,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},443:function(t,n,e){t.exports=e(202)("native-function-to-string",Function.toString)},447:function(t,n,e){var r=e(152),o=e(144);t.exports=function(t){return function(n,e){var i,s,a=String(o(n)),u=r(e),c=a.length;return u<0||u>=c?t?"":void 0:(i=a.charCodeAt(u))<55296||i>56319||u+1===c||(s=a.charCodeAt(u+1))<56320||s>57343?t?a.charAt(u):i:t?a.slice(u,u+2):s-56320+(i-55296<<10)+65536}}},449:function(t,n,e){var r=e(84),o=e(143),i=e(85)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},451:function(t,n,e){var r=e(452);t.exports=function(t,n){return new(r(t))(n)}},452:function(t,n,e){var r=e(84),o=e(285),i=e(85)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[i])&&(n=void 0)),void 0===n?Array:n}},454:function(t,n,e){"use strict";var r=e(447)(!0);t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},455:function(t,n,e){(function(t,r){var o;!function(i){n&&n.nodeType,t&&t.nodeType;var s="object"==typeof r&&r;s.global!==s&&s.window!==s&&s.self;var a,u=2147483647,c=36,h=/^xn--/,l=/[^\x20-\x7E]/,f=/[\x2E\u3002\uFF0E\uFF61]/g,p={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},v=Math.floor,d=String.fromCharCode;function g(t){throw new RangeError(p[t])}function m(t,n){for(var e=t.length,r=[];e--;)r[e]=n(t[e]);return r}function y(t,n){var e=t.split("@"),r="";return e.length>1&&(r=e[0]+"@",t=e[1]),r+m((t=t.replace(f,".")).split("."),n).join(".")}function x(t){for(var n,e,r=[],o=0,i=t.length;o<i;)(n=t.charCodeAt(o++))>=55296&&n<=56319&&o<i?56320==(64512&(e=t.charCodeAt(o++)))?r.push(((1023&n)<<10)+(1023&e)+65536):(r.push(n),o--):r.push(n);return r}function b(t){return m(t,(function(t){var n="";return t>65535&&(n+=d((t-=65536)>>>10&1023|55296),t=56320|1023&t),n+=d(t)})).join("")}function w(t,n){return t+22+75*(t<26)-((0!=n)<<5)}function j(t,n,e){var r=0;for(t=e?v(t/700):t>>1,t+=v(t/n);t>455;r+=c)t=v(t/35);return v(r+36*t/(t+38))}function O(t){var n,e,r,o,i,s,a,h,l,f,p,d=[],m=t.length,y=0,x=128,w=72;for((e=t.lastIndexOf("-"))<0&&(e=0),r=0;r<e;++r)t.charCodeAt(r)>=128&&g("not-basic"),d.push(t.charCodeAt(r));for(o=e>0?e+1:0;o<m;){for(i=y,s=1,a=c;o>=m&&g("invalid-input"),((h=(p=t.charCodeAt(o++))-48<10?p-22:p-65<26?p-65:p-97<26?p-97:c)>=c||h>v((u-y)/s))&&g("overflow"),y+=h*s,!(h<(l=a<=w?1:a>=w+26?26:a-w));a+=c)s>v(u/(f=c-l))&&g("overflow"),s*=f;w=j(y-i,n=d.length+1,0==i),v(y/n)>u-x&&g("overflow"),x+=v(y/n),y%=n,d.splice(y++,0,x)}return b(d)}function A(t){var n,e,r,o,i,s,a,h,l,f,p,m,y,b,O,A=[];for(m=(t=x(t)).length,n=128,e=0,i=72,s=0;s<m;++s)(p=t[s])<128&&A.push(d(p));for(r=o=A.length,o&&A.push("-");r<m;){for(a=u,s=0;s<m;++s)(p=t[s])>=n&&p<a&&(a=p);for(a-n>v((u-e)/(y=r+1))&&g("overflow"),e+=(a-n)*y,n=a,s=0;s<m;++s)if((p=t[s])<n&&++e>u&&g("overflow"),p==n){for(h=e,l=c;!(h<(f=l<=i?1:l>=i+26?26:l-i));l+=c)O=h-f,b=c-f,A.push(d(w(f+O%b,0))),h=v(O/b);A.push(d(w(h,0))),i=j(e,y,r==o),e=0,++r}++e,++n}return A.join("")}a={version:"1.4.1",ucs2:{decode:x,encode:b},decode:O,encode:A,toASCII:function(t){return y(t,(function(t){return l.test(t)?"xn--"+A(t):t}))},toUnicode:function(t){return y(t,(function(t){return h.test(t)?O(t.slice(4).toLowerCase()):t}))}},void 0===(o=function(){return a}.call(n,e,n,t))||(t.exports=o)}()}).call(this,e(244)(t),e(83))},456:function(t,n,e){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},457:function(t,n,e){"use strict";function r(t,n){return Object.prototype.hasOwnProperty.call(t,n)}t.exports=function(t,n,e,i){n=n||"&",e=e||"=";var s={};if("string"!=typeof t||0===t.length)return s;var a=/\+/g;t=t.split(n);var u=1e3;i&&"number"==typeof i.maxKeys&&(u=i.maxKeys);var c=t.length;u>0&&c>u&&(c=u);for(var h=0;h<c;++h){var l,f,p,v,d=t[h].replace(a,"%20"),g=d.indexOf(e);g>=0?(l=d.substr(0,g),f=d.substr(g+1)):(l=d,f=""),p=decodeURIComponent(l),v=decodeURIComponent(f),r(s,p)?o(s[p])?s[p].push(v):s[p]=[s[p],v]:s[p]=v}return s};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},458:function(t,n,e){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,n,e,a){return n=n||"&",e=e||"=",null===t&&(t=void 0),"object"==typeof t?i(s(t),(function(s){var a=encodeURIComponent(r(s))+e;return o(t[s])?i(t[s],(function(t){return a+encodeURIComponent(r(t))})).join(n):a+encodeURIComponent(r(t[s]))})).join(n):a?encodeURIComponent(r(a))+e+encodeURIComponent(r(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function i(t,n){if(t.map)return t.map(n);for(var e=[],r=0;r<t.length;r++)e.push(n(t[r],r));return e}var s=Object.keys||function(t){var n=[];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);return n}},46:function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0},5277:function(t,n,e){"use strict";e.r(n);e(92),e(17),e(10);var r=e(46),o=e.n(r),i=(e(14),e(213)),s=e.n(i),a=["https://ringcentral.github.io","https://apps.ringcentral.com"];a.indexOf(window.location.origin)<0&&a.push(window.location.origin);n.default=new function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.prefix;o()(this,t),window.addEventListener("load",(function(){var t=window.location.href;try{if(window.opener&&window.opener.oAuthCallback)return window.opener.oAuthCallback(t),void window.close()}catch(t){}try{window.opener&&window.opener.postMessage&&(a.forEach((function(n){window.opener.postMessage({callbackUri:t},n)})),window.close())}catch(t){console.error(t)}try{window.parent&&window.parent!==window&&("SSOIframe"===window.name?a.forEach((function(n){window.parent.postMessage({callbackUri:t},n)})):a.forEach((function(n){window.parent.postMessage({refreshCallbackUri:t},n)})))}catch(t){console.error(t)}var n=s.a.parse(t,!0).query.state;if(n){var r=n.split("-").slice(1).join("-"),o="".concat(e,"-").concat(r,"-redirect-callbackUri");localStorage.removeItem(o),window.addEventListener("storage",(function(t){t.key!==o||t.newValue&&""!==t.newValue||window.close()})),localStorage.setItem(o,t)}}))}({prefix:"rc-widget"})},76:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},78:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},81:function(t,n,e){var r=e(84);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},83:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},84:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},85:function(t,n,e){var r=e(202)("wks"),o=e(159),i=e(76).Symbol,s="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=s&&i[t]||(s?i:o)("Symbol."+t))}).store=r},92:function(t,n,e){"use strict";var r=e(449),o=e(81),i=e(331),s=e(454),a=e(107),u=e(291),c=e(242),h=e(78),l=Math.min,f=[].push,p=4294967295,v=!h((function(){RegExp(p,"y")}));e(292)("split",2,(function(t,n,e,h){var d;return d="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var o=String(this);if(void 0===t&&0===n)return[];if(!r(t))return e.call(o,t,n);for(var i,s,a,u=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),l=0,v=void 0===n?p:n>>>0,d=new RegExp(t.source,h+"g");(i=c.call(d,o))&&!((s=d.lastIndex)>l&&(u.push(o.slice(l,i.index)),i.length>1&&i.index<o.length&&f.apply(u,i.slice(1)),a=i[0].length,l=s,u.length>=v));)d.lastIndex===i.index&&d.lastIndex++;return l===o.length?!a&&d.test("")||u.push(""):u.push(o.slice(l)),u.length>v?u.slice(0,v):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,r){var o=t(this),i=null==e?void 0:e[n];return void 0!==i?i.call(e,o,r):d.call(String(o),e,r)},function(t,n){var r=h(d,t,this,n,d!==e);if(r.done)return r.value;var c=o(t),f=String(this),g=i(c,RegExp),m=c.unicode,y=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),x=new g(v?c:"^(?:"+c.source+")",y),b=void 0===n?p:n>>>0;if(0===b)return[];if(0===f.length)return null===u(x,f)?[f]:[];for(var w=0,j=0,O=[];j<f.length;){x.lastIndex=v?j:0;var A,S=u(x,v?f:f.slice(j));if(null===S||(A=l(a(x.lastIndex+(v?0:j)),f.length))===w)j=s(f,j,m);else{if(O.push(f.slice(w,j)),O.length===b)return O;for(var C=1;C<=S.length-1;C++)if(O.push(S[C]),O.length===b)return O;j=w=A}}return O.push(f.slice(w)),O}]}))},95:function(t,n,e){t.exports=!e(78)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))}});