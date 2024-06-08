import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as l,i as d,b as p,c as w}from"./assets/vendor-fce9fb86.js";const u="https://portfolio-js.b.goit.study/api",n=new l(".swiper",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:24},360:{slidesPerView:1,spaceBetween:16}},updateOnWindowResize:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},simulateTouch:!0,allowTouchMove:!0}),v=async()=>(await p.get(`${u}/reviews`)).data;n.on("reachEnd",()=>{d.show({title:"Hey",message:"It is end",color:"#92929c37",position:"topRight",timeout:1500})});const m=e=>e.reduce((i,t,s)=>i+=`<li class="swiper-slide">  
                        <div class="item-container">
                           <p class="text-review">${t.review}</p>
                       <div class="icon-photo-name">
                           <img src=${t.avatar_url} alt="natalia" width="40" height="40"
                               class="avatar-icon" />
                           <p class="user-name-review">${t.author}</p>
                       </div>
                       </div>
                       </li>`,""),h=e=>{const r=document.querySelectorAll(".text-review"),i=document.querySelectorAll(".user-name-review"),t=document.querySelectorAll(".avatar-icon");console.log(r),r.forEach((s,c)=>{console.log(s),s.addEventListener("click",()=>{w.create(`<div class="backdrop">
                <div class="modal">
                <button type="button" class="modal-btn-close">
                <svg class="icon-btn-close" width="16" height="16">
                    <use href="./img/icons.svg#close-btn-modal-icon"></use>
                </svg>
                </button>
                     <p class="modal-text-review">${s.innerHTML}</p>
                     <div class="modal-icon-photo-name icon-photo-name">
                     <img src=${t[c].src} alt="natalia" width="40" height="40"
                         class="modal-avatar-icon avatar-icon" />
                     <p class="modal-user-name-review user-name-review">${i[c].innerHTML}</p>
                 </div>
                    
                </div>
        </div>`,{onShow:o=>{o.element().querySelector(".modal-btn-close").onclick=o.close,o.element().querySelector(".backdrop").onclick=a=>{a.target.classList.value==="backdrop"&&o.close()},document.onkeydown=a=>{a.key==="Escape"&&o.close()}}}).show()})})},g=async()=>{try{const e=await v();console.log(e),document.querySelector(".swiper-wrapper").innerHTML="",document.querySelector(".swiper-wrapper").innerHTML=m(e),n.update(),h(".text-review")}catch(e){console.log(e)}};g();
//# sourceMappingURL=commonHelpers3.js.map
