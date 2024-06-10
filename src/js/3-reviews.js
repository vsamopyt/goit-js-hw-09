import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import axios from 'axios';

import * as basicLightbox from 'basiclightbox';

// ======VARIABLE========

const API = 'https://portfolio-js.b.goit.study/api';

// ======FUNCTIONS======

// ------swiper------

const slipper = new Swiper('.swiper', {
  breakpoints: {
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
  },

  updateOnWindowResize: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },
  simulateTouch: true,
  allowTouchMove: true,
});

//  ------HTTP request-------

const fetchReviews = async () => {
  try {
    const response = await axios.get(`${API}/reviews`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    iziToast.show({
      title: 'Hey',
      message: `${error}, for details look console.log`,
      color: 'red',
      position: 'topRight',
      timeout: 5000,
    });
  }
  //   const response = await axios.get(`${API}/reviews`);
  //   console.log(response.data);
  //   return response.data;
};

slipper.on('reachEnd', () => {
  iziToast.show({
    title: 'Hey',
    message: 'It is end',
    color: '#e4e5e6',
    position: 'topRight',
    timeout: 1500,
  });
});

//  -----create HTML ---------

const createHtml =  users => {
  try {
    // const { review, avatar_url,author } = users;
    const revievHtml =  users.reduce((acc, { review, avatar_url,author } , index) => {
        
        
      return (acc += `<li class="swiper-slide">  
                            <div class="item-container">
                               <p class="text-review">${review}</p>
                           <div class="icon-photo-name">
                               <img src=${avatar_url} alt="natalia" width="40" height="40"
                                   class="avatar-icon" />
                               <p class="user-name-review">${author}</p>
                           </div>
                           </div>
                           </li>`);
    }, '');

    return revievHtml;
  } catch (error) {
    console.log(error);
    // console.log(error.message);
    
    iziToast.show({
        title: 'Hey',
        message: `${error}, for details look console.log`,
        color: 'red',
        position: 'topRight',
        timeout: 5000,
      });

    return `<li class="swiper-slide">  
                <div class="item-container">
                    <p class="text-review"> No reveiws uploaded.</p> <p class="text-review"> Mistake ${error},for details look at console.log</p>          
                </div>
            </li>
            <li class="swiper-slide">  
                <div class="item-container">
                    <p class="text-review">No reveiws uploaded look at the mistakes</p> 
                </div>
            </li>`;
  }
};

//-----Modal window------

const createModalWindow = tag => {
  const reviewMessage = document.querySelectorAll('.text-review');
  const reviewAuthor = document.querySelectorAll('.user-name-review');
  const reviewAwatar = document.querySelectorAll('.avatar-icon');
  console.log(reviewMessage);
  reviewMessage.forEach((value, index) => {
    console.log(value);
    value.addEventListener('click', () => {
      const instance = basicLightbox.create(
        `<div class="backdrop">
                <div class="modal">
                <button type="button" class="modal-btn-close">
                <svg class="icon-btn-close" width="16" height="16">
                    <use href="./img/icons.svg#close-btn-modal-icon"></use>
                </svg>
                </button>
                     <p class="modal-text-review">${value.innerHTML}</p>
                     <div class="modal-icon-photo-name icon-photo-name">
                     <img src=${reviewAwatar[index].src} alt="natalia" width="40" height="40"
                         class="modal-avatar-icon avatar-icon" />
                     <p class="modal-user-name-review user-name-review">${reviewAuthor[index].innerHTML}</p>
                 </div>
                    
                </div>
        </div>`,

        {
          onShow: instance => {
            instance.element().querySelector('.modal-btn-close').onclick =
              instance.close;

            instance.element().querySelector('.backdrop').onclick = event => {
              if (event.target.classList.value === 'backdrop') {
                instance.close();
              }
            };

            document.onkeydown = event => {
              if (event.key === 'Escape') {
                instance.close();
              }
            };
          },
        }
      );
      instance.show();
    });
  });
};

//--------Data Processing------

const doStuff = async () => {
  try {
    const users = await fetchReviews();
    console.log(users);

    document.querySelector('.swiper-wrapper').innerHTML = '';
    document.querySelector('.swiper-wrapper').innerHTML = createHtml(users);
    slipper.update();

    createModalWindow('.text-review');
  } catch (error) {
    console.log(error);
  }
};

const usr = doStuff();
