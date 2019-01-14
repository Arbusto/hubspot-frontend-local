require('bootstrap');
require('jquery');

window.moreEbooks = () => {
  const viewMoreBtn = $('.library > .section-2').find('.buttons-bottom');
  const viewMoreBtnRow = viewMoreBtn.closest('.row');
  const extraContent = $('.library > .section-2').find('.extra-content');
  viewMoreBtnRow.hide();
  extraContent.show();
}

window.moreSucessStories = () => {
  const viewMoreBtn = $('.library > .section-3').find('.buttons-bottom');
  const viewMoreBtnRow = viewMoreBtn.closest('.row');
  const extraContent = $('.library > .section-3').find('.extra-content');
  viewMoreBtnRow.hide();
  extraContent.show();
}

window.moreTestimonies = () => {
  const viewMoreBtn = $('.testimonies > .section-2').find('.buttons-bottom');
  const viewMoreBtnRow = viewMoreBtn.closest('.row');
  const extraContent = $('.testimonies > .section-2').find('.extra-content');
  viewMoreBtnRow.hide();
  extraContent.show();
}

window.toggleMobileMenu = () => {
  const postition = $(".mobile-menu").css('right');
  $(".software-menu").css('display', "flex");
  $(".software-menu").css('left', "1500px");
  console.log(postition)
  if (postition == '1500px') {
    $(".mobile-menu").css('right', "0px");
    $('html').css('overflow', 'hidden');
  } else {
    $(".mobile-menu").css('right', "1500px");
    $(".software-menu").css('display', "none");
    $('html').css('overflow', 'auto');
  }
}

window.toggleSoftwareMenu = () => {
  const postition = $(".software-menu").css('left');
  console.log(postition)
  if (postition == '1500px') {
    $(".software-menu").css('left', "0px");
    $('html').css('overflow', 'hidden');
  } else {
    $(".software-menu").css('left', "1500px");
    $('html').css('overflow', 'auto');
  }
}
