import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as d}from"./assets/vendor-4338649a.js";let u;function y(e){const a=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:a,hours:i,minutes:l,seconds:m}}const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,static:!0,onClose(e){const t=e[0];u=t,t<new Date?(d.error({title:"Error",message:"Please choose a date in the future"}),document.querySelector("[data-start]").disabled=!0):document.querySelector("[data-start]").disabled=!1}};f("#datetime-picker",h);function r(e){return e<10?`0${e}`:e}document.querySelector("[data-start]").addEventListener("click",()=>{document.querySelector("[data-start]").disabled=!0;const e=setInterval(()=>{const t=u-new Date;if(t<=0)clearInterval(e),c(0,0,0,0),d.success({title:"Success",message:"Countdown complete!"});else{const{days:o,hours:n,minutes:s,seconds:a}=y(t);c(o,n,s,a)}},1e3)});function c(e,t,o,n){document.querySelector("[data-days]").textContent=r(e),document.querySelector("[data-hours]").textContent=r(t),document.querySelector("[data-minutes]").textContent=r(o),document.querySelector("[data-seconds]").textContent=r(n)}
//# sourceMappingURL=commonHelpers.js.map
