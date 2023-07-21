(()=>{"use strict";function e(e){const t=document.querySelector(e);t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}function t(e,t){const n=document.querySelector(e);n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden",t&&clearInterval(t)}window.addEventListener("DOMContentLoaded",(function(){const n=setTimeout((()=>t(".modal",n)),3e5);(function(e,t,n,s){let a=document.querySelectorAll(e),o=document.querySelectorAll(t),c=document.querySelector(n);function r(){o.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),a.forEach((e=>{e.classList.remove(s)}))}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;o[e].classList.add("show","fade"),o[e].classList.remove("hide"),a[e].classList.add(s)}r(),i(),c.addEventListener("click",(function(t){const n=t.target;n&&n.classList.contains(e.slice(1))&&a.forEach(((e,t)=>{n==e&&(r(),i(t))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,s,a){const o=document.querySelectorAll(n),c=document.querySelector(s);o.forEach((e=>{e.addEventListener("click",(()=>{t(s,a)}))})),c.addEventListener("click",(t=>{t.target!==c&&""!=t.target.getAttribute("data-close")||e(s)})),document.addEventListener("keydown",(t=>{"Escape"===t.code&&c.classList.contains("show")&&e(s)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(t(s,a),window.removeEventListener("scroll",e))}))}("[data-modal]",".modal",n),function(e,t){function n(e){return e>=0&&e<10?"0"+e:e}!function(e,t){const s=document.querySelector(e),a=s.querySelector("#days"),o=s.querySelector("#hours"),c=s.querySelector("#minutes"),r=s.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const e=function(e){const t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/864e5),s=Math.floor(t/1e3%60),a=Math.floor(t/1e3/60%60);return{total:t,days:n,hours:Math.floor(t/36e5%24),minutes:a,seconds:s}}(t);a.innerHTML=n(e.days),o.innerHTML=n(e.hours),c.innerHTML=n(e.minutes),r.innerHTML=n(e.seconds),e.total<=0&&clearInterval(i)}l()}(e,t)}(".timer",`${(new Date).getFullYear()}-${(new Date).getMonth()+2}-13 `),function(){const e=document.querySelector(".calculating__field"),t=e.querySelector(".calculating__result span");let n,s,a,o,c;function r(t,n){e.querySelectorAll(t).forEach((e=>{e.classList.remove(n),e.getAttribute("id")===localStorage.getItem("gender")&&e.classList.add(n),e.getAttribute("data-activity")===localStorage.getItem("activity")&&e.classList.add(n)}))}function i(){if(n&&s&&a&&o&&c)switch(n){case"female":t.textContent=Math.round((447.6+9.2*a+3.1*s-4.3*o)*c);break;case"male":t.textContent=Math.round((88.36+13.4*a+4.8*s-5.7*o)*c)}else t.textContent="____"}function l(e,t){const s=document.querySelectorAll(e);s.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-activity")?(c=+e.target.getAttribute("data-activity"),localStorage.setItem("activity",+e.target.getAttribute("data-activity"))):(n=e.target.getAttribute("id"),localStorage.setItem("gender",e.target.getAttribute("id"))),s.forEach((e=>{e.classList.remove(t)})),e.target.classList.add(t),i()}))}))}localStorage.getItem("gender")?n=localStorage.getItem("gender"):(n="female",localStorage.setItem("gender","female")),localStorage.getItem("activity")?c=localStorage.getItem("activity"):(c=1.375,localStorage.setItem("activity",1.375)),r("#gender div","calculating__choose-item_active"),r(".calculating__choose_big div","calculating__choose-item_active"),i(),e.querySelectorAll("input").forEach((e=>{e.addEventListener("input",(()=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.id){case"height":s=+e.value;break;case"weight":a=+e.value;break;case"age":o=+e.value}i()}))})),l("#gender div","calculating__choose-item_active"),l(".calculating__choose_big div","calculating__choose-item_active")}(),function(n,s){function a(n){const a=document.querySelector(".modal__dialog");a.classList.remove("show"),a.classList.add("hide"),t(".modal",s);const o=document.createElement("div");o.classList.add("modal__dialog"),o.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${n}</div>\n            </div>\n        `,document.querySelector(".modal").append(o),setTimeout((()=>{o.remove(),a.classList.add("show"),a.classList.remove("hide"),e(".modal")}),4e3)}document.querySelectorAll(n).forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();const n=document.createElement("img");n.src="icons/spinner.svg",n.style.cssText="\n                margin: 0 auto;\n                display: block;\n            ",t.after(n);const s=new FormData(t);(async function(e,t){const n=await fetch("http://localhost:3000/requests",{method:"POST",body:t,headers:{"Content-type":"application/json"}});return await n.json()})(0,JSON.stringify(Object.fromEntries(s.entries()))).then((e=>{console.log(e),a("Спасибо! Скоро мы с вами свяжемся.")})).catch((()=>{a("Что-то пошло не так...")})).finally((()=>{t.reset(),n.remove()}))}))}))}("form",n),function(){class e{constructor(e,t,n,s,a,o){this.src=e,this.alt=t,this.title=n,this.descr=s,this.price=a;for(var c=arguments.length,r=new Array(c>6?c-6:0),i=6;i<c;i++)r[i-6]=arguments[i];this.classes=r,this.parent=document.querySelector(o),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?(this.classes="menu__item",e.classList.add(this.classes)):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(e)}}(async function(e){const t=await fetch(e);if(!t.ok)throw new Error(`Request error: could not fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((t=>{let{img:n,altimg:s,title:a,descr:o,price:c}=t;new e(n,s,a,o,c,".menu .container").render()}))}))}(),function(e){let{container:t,slide:n,nextArrow:s,prevArrow:a,totalCounter:o,currentCounter:c,wrapper:r,field:i}=e;const l=document.querySelector(t),d=l.querySelector(s),u=l.querySelector(a),m=l.querySelector(c),h=l.querySelector(o),f=l.querySelector(r),g=l.querySelector(i),v=l.querySelectorAll(n),y=+window.getComputedStyle(f).width.replace(/\D/g,"");let _=1,p=0,L=document.createElement("ul"),w=[];function S(e){return e>=0&&e<10?"0"+e:e}L.classList.add("carousel-indicators");for(let e=0;e<v.length;e++){const t=document.createElement("li");t.classList.add("dot"),t.setAttribute("data-slide-i",e+1),0==e&&(t.style.opacity="1"),L.append(t),w.push(t)}function E(){w.forEach((e=>e.style.opacity="0.5")),w[_-1].style.opacity="1",g.style.transform=`translateX(${-p}px)`,m.textContent=S(_)}f.append(L),m.textContent=S(_),h.textContent=S(v.length),f.style.overflow="hidden",f.style.position="relative",g.style.cssText=`\n        display: flex;\n        transition: 0.5s all;\n        width: ${100*v.length}%;\n    `,w.forEach((e=>{e.addEventListener("click",(e=>{_=e.target.getAttribute("data-slide-i"),p=y*(_-1),E()}))})),d.addEventListener("click",(()=>{p==y*(v.length-1)?(_=1,p=0):(_++,p+=y),E()})),u.addEventListener("click",(()=>{0==p?(_=v.length,p=y*(v.length-1)):(_--,p-=y),E()}))}({container:".offer__slider",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner",slide:".offer__slide"})}))})();
//# sourceMappingURL=bundle.js.map