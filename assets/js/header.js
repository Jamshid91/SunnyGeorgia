const headerBurger = document.querySelector('.header-burger'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu-close'),
      headerLang = document.querySelector('.header-lang'),
      headerSearch = document.querySelector('.header-search'),
      search = document.querySelector('.search'),
      searchClose = document.querySelector('.search__close'),
      body = document.querySelector('body');



headerBurger.addEventListener('click', ()=> {
    menu.classList.add('showMenu');
});

menuClose.addEventListener('click', ()=> {
    menu.classList.remove('showMenu');
});

headerLang.addEventListener('click', () => {
    headerLang.classList.toggle('trRu')
});

headerSearch.addEventListener('click', () => {
    search.classList.remove('d-none');
    body.classList.add('overflow-hidden');
});

searchClose.addEventListener('click', () => {
    search.classList.add('d-none');
    body.classList.remove('overflow-hidden');
});

window.onclick = function(e) {
    if(e.target == search) {
        search.classList.add('d-none');
        body.classList.remove('overflow-hidden'); 
    }
}


$('.menu-title').click(function() {
    $(this).siblings().removeClass('showMenuList');
    $(this).toggleClass('showMenuList');
});
