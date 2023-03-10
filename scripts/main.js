"use strict";

let animItems = document.querySelectorAll('.anim_text')
let anim = document.querySelectorAll('.anim')

if (animItems.length > 0) {
    window.addEventListener('scroll', animScroll);
    function animScroll() {
      for (let i = 0; i < anim.length; i++) {
        const animItem = anim[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
  
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
  
        if (
          pageYOffset >= animItemOffset - animItemPoint &&
          pageYOffset <= animItemOffset + animItemHeight 
        ) {
          animItem.classList.add("active");
        } else {
          if (!animItem.classList.contains("anim__no-hide")) {
            animItem.classList.remove("active");
          }
        }
      }
    }
  
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYoffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  setInterval(() => {
    animScroll();
  }, 300);

  }




  // mobile menu
  
  let burger = document.querySelector('.burger'),
   burgerSpanBefore = document.querySelector('.burger span::before'),
   burgerSpanAfter = document.querySelector('.burger span::after'),
   burgerSpan = document.querySelector('.burger span'),
    menu = document.querySelector('.header__nav-content'),
    mobile = document.querySelectorAll('.mobile'),
    body = document.querySelector('body')
    
    for (let i = 0; i < mobile.length; i++) {
        burger.addEventListener('click', ()=>{
         
            menu.classList.toggle('active')
            burger.classList.toggle('active')
            burgerSpan.classList.toggle('active')
            mobile[i].classList.add('active')
            body.classList.toggle('active')
        });
        
    }
    
 
  
   // modal window
   let workImages = document.querySelectorAll('.work_content');
   let img = document.querySelectorAll('.work_content a img')
   let modal = document.querySelector('.modal');
   let closeBtn = document.querySelector('.close_btn');
   let modalImg = document.querySelector('.swiper-slide img');
  
   
  
   if (workImages) {
    for (let i = 0; i < workImages.length; i++) {
      workImages[i].addEventListener('click', (e)=>{
        e.preventDefault();
        modal.classList.add('active');
        modalImg.src = img[i].src;
      })
     }
   }
  
   if (modal) {
    modal.addEventListener('click', function(){
      this.classList.remove('active');
    })
   }
   
   if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      // modalContent.classList.remove('active');
      modal.classList.remove('active');
     })
   }
   

/*input range*/
for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

/**********************************************************************************/

/*Swiper */
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });