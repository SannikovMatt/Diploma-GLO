(()=>{"use strict";const e=()=>{document.querySelector(".popup-repair-types").style.visibility="visible"},t=()=>{document.querySelector(".popup-repair-types").style.visibility="hidden"},n=e=>{e.scrollIntoView({block:"start",behavior:"smooth"})};window.addEventListener("resize",(()=>{document.querySelector(".popup-dialog-menu").style.transform=""}));const o=()=>{document.querySelector(".popup-dialog-menu").style.transform=""},r=document.querySelectorAll('[name="phone"]');S,(()=>{const t=document.querySelector(".popup-dialog-menu"),r=document.querySelector(".menu__icon"),l=document.querySelector(".close-menu");document.querySelector(".button-footer").addEventListener("click",(e=>{if(e.target.closest(".button-footer")){e.preventDefault();const t=document.getElementById("main");n(t)}})),l.addEventListener("click",o),r.addEventListener("click",(e=>{t.style.transform="translate3d(0,0,0)"})),t.addEventListener("click",(t=>{const r=t.target;if(r.closest(".popup-menu-nav__item")){t.preventDefault();const e=r.getAttribute("href"),l=document.querySelector(e);o(),n(l)}(r.closest(".link-list-menu")||r.closest(".link-list-repair"))&&r.closest(".menu-link")&&(o(),e())})),document.addEventListener("click",(e=>{const t=e.target;t.closest(".popup-dialog-menu")||t.closest(".menu__icon")||o()}))})(),(()=>{const n=document.querySelector(".popup-repair-types").querySelector(".close");let o=document.querySelector(".link-list-repair > a");o.addEventListener("click",(t=>{o=document.querySelector(".link-list-repair > a"),t.target.closest(".link-list-repair")&&e()})),n.addEventListener("click",(()=>{t()})),document.addEventListener("click",(e=>{const n=e.target;n.closest(".popup-dialog-repair-types")||n.closest(".menu-link")||n.closest(".link-list-repair")||t()}))})(),r.forEach((e=>function(e,t="+7 (___) ___-__-__"){const n=document.querySelectorAll(e);function o(e){const n=e.keyCode,o=t,r=o.replace(/\D/g,""),l=this.value.replace(/\D/g,"");let c=0,s=o.replace(/[_\d]/g,(function(e){return c<l.length?l.charAt(c++)||r.charAt(c):e}));c=s.indexOf("_"),-1!=c&&(s=s.slice(0,c));let i=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");i=new RegExp("^"+i+"$"),(!i.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of n)e.addEventListener("input",o),e.addEventListener("focus",o),e.addEventListener("blur",o)}(`#${e.id}`)))})();