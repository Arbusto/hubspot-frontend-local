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