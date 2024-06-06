import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as n,i as c,b as l,c as d}from"./assets/vendor-fce9fb86.js";const p="https://portfolio-js.b.goit.study/api",w=new n(".swiper",{autoHeight:!0,slidesPerView:1,breakpoints:{1280:{slidesPerView:2,spaceBetween:32,autoHeight:!1}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0}}),v=async()=>(await l.get(`${p}/reviews`)).data;w.on("reachEnd",()=>{c.show({title:"Hey",message:"It is end",color:"blue",position:"topRight",timeout:1500})});const u=e=>e.reduce((r,o,t)=>r+=`<li class="swiper-slide">  
                           <p class="text-review">${o.review}</p>
                       <div class="icon-photo-name">
                           <img src=${o.avatar_url} alt="natalia" width="40" height="40"
                               class="avatar-icon" />
                           <p class="user-name-review">${o.author}</p>
                       </div>
                       </li>`,""),m=document.querySelectorAll(".swiper-slide");console.log(m.childNodes);const h=e=>{const s=document.querySelectorAll(".text-review"),r=document.querySelectorAll(".user-name-review"),o=document.querySelectorAll(".avatar-icon");console.log(s),s.forEach((t,a)=>{console.log(t),t.addEventListener("click",()=>{d.create(`<div class="backdrop">
                <div class="modal">
                     <p class="modal-text-review">${t.innerHTML}</p>
                     <div class="modal-icon-photo-name icon-photo-name">
                     <img src=${o[a].src} alt="natalia" width="40" height="40"
                         class="modal-avatar-icon avatar-icon" />
                     <p class="modal-user-name-review user-name-review">${r[a].innerHTML}</p>
                 </div>
                     <a class="modal-link">Close</a>
                </div>
          </div>`,{onShow:i=>{i.element().querySelector("a").onclick=i.close}}).show()})})},g=async()=>{try{const e=await v();console.log(e),document.querySelector(".swiper-wrapper").innerHTML=u(e),h(".text-review")}catch(e){console.log(e)}},y=g();console.log(y);
//# sourceMappingURL=commonHelpers3.js.map
