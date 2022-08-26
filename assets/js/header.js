const headerBurger = document.querySelector('.header-burger'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu-close');



headerBurger.addEventListener('click', ()=> {
    menu.classList.add('showMenu');
});

menuClose.addEventListener('click', ()=> {
    menu.classList.remove('showMenu');
});


$('.menu-title').click(function() {
    $(this).siblings().removeClass('showMenuList');
    $(this).toggleClass('showMenuList');
});