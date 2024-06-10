import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as p,i as c,b as w,c as v}from"./assets/vendor-fce9fb86.js";const u="https://portfolio-js.b.goit.study/api",n=new p(".swiper",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:24},360:{slidesPerView:1,spaceBetween:16}},updateOnWindowResize:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},simulateTouch:!0,allowTouchMove:!0}),m=async()=>{try{const e=await w.get(`${u}/reviews`);return console.log(e.data),e.data}catch(e){console.log(e),c.show({title:"Hey",message:`${e}, for details look console.log`,color:"red",position:"topRight",timeout:5e3})}};n.on("reachEnd",()=>{c.show({title:"Hey",message:"It is end",color:"#e4e5e6",position:"topRight",timeout:1500})});const h=e=>{try{return e.reduce((r,{review:a,avatar_url:t,author:i},d)=>r+=`<li class="swiper-slide">  
                            <div class="item-container">
                               <p class="text-review">${a}</p>
                           <div class="icon-photo-name">
                               <img src=${t} alt="natalia" width="40" height="40"
                                   class="avatar-icon" />
                               <p class="user-name-review">${i}</p>
                           </div>
                           </div>
                           </li>`,"")}catch(o){return console.log(o),c.show({title:"Hey",message:`${o}, for details look console.log`,color:"red",position:"topRight",timeout:5e3}),`<li class="swiper-slide">  
                <div class="item-container">
                    <p class="text-review"> No reveiws uploaded.</p> <p class="text-review"> Mistake ${o},for details look at console.log</p>          
                </div>
            </li>
            <li class="swiper-slide">  
                <div class="item-container">
                    <p class="text-review">No reveiws uploaded look at the mistakes</p> 
                </div>
            </li>`}},g=e=>{const o=document.querySelectorAll(".text-review"),r=document.querySelectorAll(".user-name-review"),a=document.querySelectorAll(".avatar-icon");console.log(o),o.forEach((t,i)=>{console.log(t),t.addEventListener("click",()=>{v.create(`<div class="backdrop">
                <div class="modal">
                <button type="button" class="modal-btn-close">
                <svg class="icon-btn-close" width="16" height="16">
                    <use href="./img/icons.svg#close-btn-modal-icon"></use>
                </svg>
                </button>
                     <p class="modal-text-review">${t.innerHTML}</p>
                     <div class="modal-icon-photo-name icon-photo-name">
                     <img src=${a[i].src} alt="natalia" width="40" height="40"
                         class="modal-avatar-icon avatar-icon" />
                     <p class="modal-user-name-review user-name-review">${r[i].innerHTML}</p>
                 </div>
                    
                </div>
        </div>`,{onShow:s=>{s.element().querySelector(".modal-btn-close").onclick=s.close,s.element().querySelector(".backdrop").onclick=l=>{l.target.classList.value==="backdrop"&&s.close()},document.onkeydown=l=>{l.key==="Escape"&&s.close()}}}).show()})})},y=async()=>{try{const e=await m();console.log(e),document.querySelector(".swiper-wrapper").innerHTML="",document.querySelector(".swiper-wrapper").innerHTML=h(e),n.update(),g(".text-review")}catch(e){console.log(e)}};y();
//# sourceMappingURL=commonHelpers3.js.map
