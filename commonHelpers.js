import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as c}from"./assets/vendor-10cb7c31.js";const r=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],s=document.querySelector(".gallery");function l(t,o){o.innerHTML="";const i=t.reduce((a,{preview:e,original:p,description:n})=>a+`<li class="gallery-item">
                        <a class="gallery-link" href=${p}>
                            <img
                                class="gallery-image"
                                src= ${e}
                                alt= '${n}'
                                width = "360"
                                height = "200"
                            />
                        </a>
                    </li>`,"");o.innerHTML=i}l(r,s);var h=new c(".gallery a",{captionSelector:"img",captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:1,className:"custom-lightbox",docClose:!0,animationSpeed:500,fadeSpeed:500,rtl:!0});document.querySelector("button");h.on("shown.simplelightbox",function(){const t=document.querySelectorAll("button"),o=document.querySelector(".sl-counter");t.forEach(i=>i.style.color="white"),o.style.color="white"});
//# sourceMappingURL=commonHelpers.js.map
