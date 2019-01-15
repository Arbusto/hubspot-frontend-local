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

// window.setLanguage = (language) => {
//   window.userLanguage = language;
//   localStorage.setItem("u-planner_language", language);
// }

// window.userLanguage = localStorage.getItem("u-planner_language")
// if (!window.userLanguage || window.userLanguage == '') {
//   window.userLanguage = 'es';
//   $.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=08f578d8853d414897f9e44bf0b84552', function (location) {
//     window.userLanguage = location.languages.slice(0, 2);
//     localStorage.setItem("u-planner_language", location.languages.slice(0, 2));
//   });

//   if (window.hubspotPath.slice(0, 4).startsWith('/') && window.hubspotPath.slice(0, 4).endsWith('/')) {
//     window.hubspotPath = '/' + window.hubspotPath.substring(4, window.hubspotPath.length);
//   }

//   let redirectTo = `${window.hubspotPath}`;
//   if (window.userLanguage != 'es') {
//     redirectTo = `/${window.userLanguage}${window.hubspotPath}`;
//   }

//   if (window.location.pathname != redirectTo) {
//     window.location.href = redirectTo// + '?hs_preview=RfLjdZGX-6729747562';
//   }
// }