import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as n,i as c,b as l,c as d}from"./assets/vendor-fce9fb86.js";const w="https://portfolio-js.b.goit.study/api",p=new n(".swiper",{breakpoints:{1280:{slidesPerView:2,spaceBetween:32},768:{slidesPerView:1,spaceBetween:24},360:{slidesPerView:1,spaceBetween:16}},updateOnWindowResize:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},simulateTouch:!0,allowTouchMove:!0}),u=async()=>(await l.get(`${w}/reviews`)).data;p.on("reachEnd",()=>{c.show({title:"Hey",message:"It is end",color:"blue",position:"topRight",timeout:1500})});const v=e=>e.reduce((i,s,o)=>i+=`<li class="swiper-slide">  
                        <div class="item-container">
                           <p class="text-review">${s.review}</p>
                       <div class="icon-photo-name">
                           <img src=${s.avatar_url} alt="natalia" width="40" height="40"
                               class="avatar-icon" />
                           <p class="user-name-review">${s.author}</p>
                       </div>
                       </div>
                       </li>`,""),m=document.querySelectorAll(".swiper-slide");console.log(m.childNodes);const h=e=>{const t=document.querySelectorAll(".text-review"),i=document.querySelectorAll(".user-name-review"),s=document.querySelectorAll(".avatar-icon");console.log(t),t.forEach((o,r)=>{console.log(o),o.addEventListener("click",()=>{d.create(`<div class="backdrop">
                <div class="modal">
                     <p class="modal-text-review">${o.innerHTML}</p>
                     <div class="modal-icon-photo-name icon-photo-name">
                     <img src=${s[r].src} alt="natalia" width="40" height="40"
                         class="modal-avatar-icon avatar-icon" />
                     <p class="modal-user-name-review user-name-review">${i[r].innerHTML}</p>
                 </div>
                     <a class="modal-link">Close</a>
                </div>
          </div>`,{onShow:a=>{a.element().querySelector("a").onclick=a.close}}).show()})})},g=async()=>{try{const e=await u();console.log(e),document.querySelector(".swiper-wrapper").innerHTML=v(e),h(".text-review")}catch(e){console.log(e)}},y=g();console.log(y);
//# sourceMappingURL=commonHelpers3.js.map
