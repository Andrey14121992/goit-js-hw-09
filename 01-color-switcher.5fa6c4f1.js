let t=null;const e=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.disabled=!0,t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),console.log(t)})),o.addEventListener("click",(function(){return e.disabled=!1,void clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.5fa6c4f1.js.map
