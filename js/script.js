searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.header .header-2 .navbar')
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let login = document.querySelector('.login-form')
document.querySelector('#login-btn').onclick = () =>{
    login.classList.add('active');
}
document.querySelector('#close-login-form').onclick = () =>{
    login.classList.remove('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
  
    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
      document.querySelector('.header .header-2 .navbar').classList.remove('active1');
      document.querySelector('.header .header-2 .logo').classList.add('active');
      document.querySelector('#menu-btn').classList.remove('active');
        
      
    }else{
      document.querySelector('.header .header-2').classList.remove('active');
      document.querySelector('.header .header-2 .navbar').classList.add('active1');
      document.querySelector('.header .header-2 .logo').classList.remove('active');
      document.querySelector('#menu-btn').classList.add('active');
    }
  
  }

  window.onload = () =>{

    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
      document.querySelector('.header .header-2 .navbar').classList.remove('active1');
      document.querySelector('.header .header-2 .logo').classList.add('active');
      document.querySelector('#menu-btn').classList.remove('active');
    }else{
      document.querySelector('.header .header-2').classList.remove('active');
      document.querySelector('.header .header-2 .navbar').classList.add('active1');
      document.querySelector('.header .header-2 .logo').classList.remove('active');
      document.querySelector('#menu-btn').classList.add('active');
    }
  
    fadeOut();
  
  }

  function loader(){
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fadeOut(){
    setTimeout(loader, 1500);
  }

  var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".writers-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

let previewContainer = document.querySelector('.writer-preview-container');
let previewBox = previewContainer.querySelectorAll('.writer-preview');

document.querySelectorAll('.writers .box').forEach(writers =>{
  writers.onclick = () =>{
      previewContainer.style.display = 'flex';
      let name = writers.getAttribute('data-name');
      previewBox.forEach(preveiw =>{
         let target = preveiw.getAttribute('data-target');
         if(name == target){
            preveiw.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
  previewContainer.style.display = 'none';
  previewBox.forEach(close =>{
     close.classList.remove('active');
  });
};

  
  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  