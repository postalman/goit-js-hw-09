const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");function d(){document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}let a;t.addEventListener("click",(function(){a=setInterval(d,1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(a),e.setAttribute("disabled","disabled"),t.removeAttribute("disabled")})),e.setAttribute("disabled","disabled");
//# sourceMappingURL=01-color-switcher.64131dd8.js.map
