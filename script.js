searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
}
window.onscroll = () =>{
    if(window.scrollY > 80)
    {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else
    {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = () =>{
    if(window.scrollY > 80)
    {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else
    {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
var loginButton = document.getElementById('login-button'),
        loginClose = document.getElementById('close-login-btn'),
        loginContent = document.getElementById('login-content');

if(loginButton)
{
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login');
    })
}
 
if(loginClose)
{
    loginClose.addEventListener('click', () =>
    {
        loginContent.classList.remove('show-login');
    })
}
var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay:9500,
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
    autoplay:{
        delay:9500,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450:{
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

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay:9500,
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

  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay:{
        delay:9300,
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

  const sr = ScrollReveal(
    {
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    }
  )

  sr.reveal(`.home .content, .Featured , .arrivals, .reviews, .footer`)
  sr.reveal(`.home .books-slider`, {delay:600})
  sr.reveal(`.icons-container .icons`, {interval: 100})
  sr.reveal(`.discount__data`, {origin: 'left'})
  sr.reveal(`.discount__images`, {origin: 'right'})



  