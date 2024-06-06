import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import axios from 'axios';

import * as basicLightbox from 'basiclightbox'

// ======VARIABLE========

const API = "https://portfolio-js.b.goit.study/api";


// ======FUNCTIONS======

// ------swiper------
const slipper = new Swiper('.swiper',{
    autoHeight: true,
    slidesPerView: 1,
    breakpoints: {
        // when window width is >= 320px
        1280: {
            slidesPerView: 2,
            spaceBetween: 32,
            autoHeight: false,
          }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',},

    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    mousewheel: {
        invert: true,
      },  
});

//  ------HTTP request-------
const fetchReviews = async () => {
	const response = await axios.get(`${API}/reviews`);
	return response.data;
};




slipper.on("reachEnd", ()=>{ 
    iziToast.show({
        title: 'Hey',
        message: 'It is end',
        color: 'blue', 
        position: 'topRight',
        timeout: 1500,
          
})
})

//  -----create HTML ---------
const createHtml = (users)=>{
    const revievHtml = users.reduce((acc, item, index)=>{
        return acc+= `<li class="swiper-slide">  
                           <p class="text-review">${item.review}</p>
                       <div class="icon-photo-name">
                           <img src=${item.avatar_url} alt="natalia" width="40" height="40"
                               class="avatar-icon" />
                           <p class="user-name-review">${item.author}</p>
                       </div>
                       </li>`                
     },"");

    return revievHtml;
}

// ----temp----
const  swiperSlide = document.querySelectorAll(".swiper-slide");
console.log(swiperSlide.childNodes
);
//-----Modal window------

const createModalWindow = (tag) => {

    const reviewMessage = document.querySelectorAll(".text-review");
    const reviewAuthor = document.querySelectorAll(".user-name-review");
    const reviewAwatar = document.querySelectorAll(".avatar-icon");
    console.log(reviewMessage);
      reviewMessage.forEach((value,index) => {
          console.log(value);
      value.addEventListener("click", () => {const instance = basicLightbox.create(
          `<div class="backdrop">
                <div class="modal">
                     <p class="modal-text-review">${value.innerHTML}</p>
                     <div class="modal-icon-photo-name icon-photo-name">
                     <img src=${reviewAwatar[index].src} alt="natalia" width="40" height="40"
                         class="modal-avatar-icon avatar-icon" />
                     <p class="modal-user-name-review user-name-review">${reviewAuthor[index].innerHTML}</p>
                 </div>
                     <a class="modal-link">Close</a>
                </div>
          </div>`,
  
          {onShow: (instance) => {
                      instance.element().querySelector('a').onclick = instance.close
                  }}
      )
      instance.show()
      
  })})
}

//--------Data Processing------

const doStuff = async () => {
  try {
    const users = await fetchReviews();
  console.log(users);

  document.querySelector(".swiper-wrapper").innerHTML = createHtml(users);
  

  createModalWindow(".text-review")



//   const reviewMessage = document.querySelectorAll(".text-review");
//   console.log(reviewMessage);
//     reviewMessage.forEach(value => {
//         console.log(value);
//     value.addEventListener("click", () => {const instance = basicLightbox.create(
//         `<div class="modal">
//             <p>${value.innerHTML}</p>
//             <a>Close</a>
//         </div>`,

//         {onShow: (instance) => {
//                     instance.element().querySelector('a').onclick = instance.close
//                 }}
//     )
//     instance.show()
    
// })})

  
} catch (error) {
    console.log(error);
  }
};

const usr = doStuff();
console.log(usr);

