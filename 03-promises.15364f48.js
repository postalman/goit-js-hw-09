function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),u=document.querySelector('[name="amount"]');document.querySelector('[type="submit"]').addEventListener("click",(function(t){t.preventDefault();const n=l.value,o=a.value,r=u.value;let d=0,s=+n;setTimeout((()=>{const t=setInterval((()=>{var n,l;d+=1,(n=d,l=s,new Promise(((e,t)=>{Math.random()>.3?e({position:n,delay:l}):t({position:n,delay:l})}))).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),s+=+o,d===+r&&clearInterval(t)}),o)}),s)}));
//# sourceMappingURL=03-promises.15364f48.js.map
