var element = document.getElementById('form-book__phone');
var maskOptions = {
  mask: '+{44}(000)000-00-00',

};
var mask = IMask(element, maskOptions);

$(document).ready(function () {
  $('.reviews__list').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,

    responsive: [{
        breakpoint: 993,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 560,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});

document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const cookies = document.querySelector('.cookies__btn');
  const cookiesContent = document.querySelector('.cookies__content');
  const cookiesSetBtn = document.querySelector('.cookies__btn-set');
  const cookiesSetting = document.querySelector('.cookies__setting');
  const mobileMenu = document.querySelector('.menu'); //мобильное меню
  const contacts = document.querySelector('.contacts'); //мобильное меню

  const footerTitle1 = document.querySelector('.footer__drop-1'); //мобильное меню
  const footerTitle2 = document.querySelector('.footer__drop-2'); //мобильное меню
  const footerTitle3 = document.querySelector('.footer__drop-3'); //мобильное меню
  const footerTitle4 = document.querySelector('.footer__drop-4'); //мобильное меню
  const footerTitle5 = document.querySelector('.footer__drop-5'); //мобильное меню
  const footerTitle6 = document.querySelector('.footer__drop-6'); //мобильное меню
  const footerList1 = document.querySelector('.footer__list-1'); //мобильное меню
  const footerList2 = document.querySelector('.footer__list-2'); //мобильное меню
  const footerList3 = document.querySelector('.footer__list-3'); //мобильное меню
  const footerList4 = document.querySelector('.footer__list-4'); //мобильное меню
  const footerList5 = document.querySelector('.footer__list-5'); //мобильное меню
  const footerList6 = document.querySelector('.footer__list-6'); //мобильное меню
  const bodyLock = document.querySelector('body'); //ищем как селектор ТЕГА

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu--active'); //когда меню открыто
    if (mobileMenu.classList.contains('menu--active')) { //Проверяем, есть ли у меню активный класс
      burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
      contacts.classList.add('contacts--active'); //Блокируем скролл при открытом меню
    } else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
      contacts.classList.remove('contacts--active');
      bodyLock.classList.remove('lock'); //Разрешаем скроллить
    }
  });

  cookies.addEventListener('click', () => {
    cookies.classList.toggle('cookies--active'); //когда меню открыто

    if (cookies.classList.contains('cookies--active')) { //Проверяем, есть ли у меню активный класс
      cookiesContent.classList.add('cookies__content--active');
    } else { //Когда нету активного класса у меню
      cookiesContent.classList.remove('cookies__content--active');
      cookiesSetting.classList.remove('cookies__setting--active');
    }
  });

  cookiesSetBtn.addEventListener('click', () => {
    cookiesSetBtn.classList.toggle('cookies--active'); //когда меню открыто

    if (cookiesSetBtn.classList.contains('cookies--active')) { //Проверяем, есть ли у меню активный класс
      cookiesSetting.classList.add('cookies__setting--active');
    } else { //Когда нету активного класса у меню
      cookiesSetting.classList.remove('cookies__setting--active');
    }
  });

  footerTitle1.addEventListener('click', () => {
    footerTitle1.classList.toggle('footer__drop--active'); //когда меню открыто

    if (footerTitle1.classList.contains('footer__drop--active')) { //Проверяем, есть ли у меню активный класс
      footerList1.classList.add('footer__list--active');
    } else { //Когда нету активного класса у меню
      footerList1.classList.remove('footer__list--active');
    }
  });

  footerTitle2.addEventListener('click', () => {
    footerTitle2.classList.toggle('footer__drop--active'); //когда меню открыто

    if (footerTitle2.classList.contains('footer__drop--active')) { //Проверяем, есть ли у меню активный класс
      footerList2.classList.add('footer__list--active');
    } else { //Когда нету активного класса у меню
      footerList2.classList.remove('footer__list--active');
    }
  });

  footerTitle3.addEventListener('click', () => {
    footerTitle3.classList.toggle('footer__drop--active'); //когда меню открыто

    if (footerTitle3.classList.contains('footer__drop--active')) { //Проверяем, есть ли у меню активный класс
      footerList3.classList.add('footer__list--active');
    } else { //Когда нету активного класса у меню
      footerList3.classList.remove('footer__list--active');
    }
  });

  footerTitle4.addEventListener('click', () => {
    footerTitle4.classList.toggle('footer__drop--active'); //когда меню открыто

    if (footerTitle4.classList.contains('footer__drop--active')) { //Проверяем, есть ли у меню активный класс
      footerList4.classList.add('footer__list--active');
    } else { //Когда нету активного класса у меню
      footerList4.classList.remove('footer__list--active');
    }
  });

  footerTitle5.addEventListener('click', () => {
    footerTitle5.classList.toggle('footer__drop--active'); //когда меню открыто

    if (footerTitle5.classList.contains('footer__drop--active')) { //Проверяем, есть ли у меню активный класс
      footerList5.classList.add('footer__list--active');
    } else { //Когда нету активного класса у меню
      footerList5.classList.remove('footer__list--active');
    }
  });

  footerTitle6.addEventListener('click', () => {
    footerTitle6.classList.toggle('footer__drop--active'); //когда меню открыто

    if (footerTitle6.classList.contains('footer__drop--active')) { //Проверяем, есть ли у меню активный класс
      footerList6.classList.add('footer__list--active');
    } else { //Когда нету активного класса у меню
      footerList6.classList.remove('footer__list--active');
    }
  });
});

$('.advantages__list').slick({

  responsive: [{
      breakpoint: 7000,
        settings: "unslick"
    },
    {
      breakpoint: 993,
      settings: {  
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
      }
    }
  ]
});