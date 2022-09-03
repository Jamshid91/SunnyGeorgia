const commentToggle = document.querySelector('.comment-toggle'),
      modalContent = document.querySelector('.modal-article'),
      tableOfContents = document.querySelector('.tableOfContents'),
      body1 = document.querySelector('body'),
      modalContentClose = document.querySelector('.modal-article__close'),
      modalLink = document.querySelectorAll('.modal-article-item__link');

commentToggle.addEventListener('click', () => {
  commentToggle.parentElement.parentElement.classList.toggle('showComments');
});

tableOfContents.addEventListener('click', () => {
  modalContent.classList.add('showModal');
  body1.classList.add('overflow-hidden');
});

modalContentClose.addEventListener('click', () => {
  modalContent.classList.remove('showModal');
  body1.classList.remove('overflow-hidden');
});

modalLink.forEach(link => {
  link.addEventListener('click', () => {
    modalContent.classList.remove('showModal');
    body1.classList.remove('overflow-hidden');
  });
});

window.onclick = function(e) {
  if(e.target == modalContent || e.target == search) {
      modalContent.classList.remove('showModal');
      search.classList.remove('showSearch');
      body.classList.remove('overflow-hidden'); 
  }
}

if($(window).width() > 767)
  {
    $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
        $('.tableOfContents').addClass('toScroll')
      } else {
        $('.tableOfContents').removeClass('toScroll')
      }
    });
  } 