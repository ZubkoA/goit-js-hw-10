function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,s=f||a||Function("return this")(),l=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return s.Date.now()};function p(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var e=i.test(t);return e||u.test(t)?c(t.slice(2),e?2:8):r.test(t)?NaN:+t}n=function(t,n,e){var o,r,i,u,c,f,a=0,s=!1,l=!1,b=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function h(n){var e=o,i=r;return o=r=void 0,a=n,u=t.apply(i,e)}function g(t){return a=t,c=setTimeout(T,n),s?h(t):u}function j(t){var e=t-f;return void 0===f||e>=n||e<0||l&&t-a>=i}function T(){var t=m();if(j(t))return w(t);c=setTimeout(T,function(t){var e=n-(t-f);return l?v(e,i-(t-a)):e}(t))}function w(t){return c=void 0,b&&o?h(t):(o=r=void 0,u)}function O(){var t=m(),e=j(t);if(o=arguments,r=this,f=t,e){if(void 0===c)return g(f);if(l)return c=setTimeout(T,n),h(f)}return void 0===c&&(c=setTimeout(T,n)),u}return n=y(n)||0,p(e)&&(s=!!e.leading,i=(l="maxWait"in e)?d(y(e.maxWait)||0,n):i,b="trailing"in e?!!e.trailing:b),O.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=f=r=c=void 0},O.flush=function(){return void 0===c?u:w(m())},O};const b=document.querySelector(".country-list"),h=document.getElementById("search-box");h.addEventListener("input",t(n)((function(){const t=h.value;g(t).then((t=>{j(t[0])})).catch((t=>console.error(t)))}),300));const g=t=>fetch(`https://restcountries.com/v3.1/name/${t}`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()})),j=function(t){b.innerHTML="";const n=t.map((({flags:t,name:n})=>`\n   <div class="country">\n   <img class="country__img" src="${t.svg}" />\n   <h3 class="country__name">${n.common}</h3>\n   </div>`)).join("");b.innerHTML=n};
//# sourceMappingURL=index.648527cc.js.map
