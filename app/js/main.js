
$(document).ready(function () {

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

    var element = document.getElementById('form-book__phone');
    var maskOptions = {
      mask: '+{44}(000)000-00-00',
    };
    var mask = IMask(element, maskOptions);

});



document.addEventListener('DOMContentLoaded', () => {

  //Mobile Menu
  const burger = document.querySelector('.burger'); //наша кнопка
  const cookies = document.querySelector('.cookies__btn');
  const cookiesContent = document.querySelector('.cookies__content');
  const cookiesSetBtn = document.querySelector('.cookies__btn-set');
  const cookiesSetting = document.querySelector('.cookies__setting');
  const mobileMenu = document.querySelector('.menu'); //мобильное меню
  const bodyLock = document.querySelector('body');

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
   //ищем как селектор ТЕГА

 $( '#form-book' ).on('submit', function(e) {
  if($( 'select[class^="contact__select"]' ).length > 0) {
     alert( 'Oops! You not select friends.' );
     e.preventDefault();
  }
});

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu--active'); //когда меню открыто
    if (mobileMenu.classList.contains('menu--active')) { //Проверяем, есть ли у меню активный класс
      burger.classList.add('burger--active'); //Когда открыто, иконка становится крестиком
      bodyLock.classList.add('lock'); //Блокируем скролл при открытом меню
    } else { //Когда нету активного класса у меню
      burger.classList.remove('burger--active'); //Возвращает в исходное состояние
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

/**Форма */
document.addEventListener('DOMContentLoaded', () => {

  sendForm();

  function sendForm() {

      /** Беремо форму по id */
      const form = document.getElementById('form-book');

      /** Дістаємо токен (на бекенді в середені форми потрібно прописати csrf token (див. доку) ) */
      const token = document.querySelector('input[name=_token]')?.value;

      if (!form ) { return false; }

      /** Дісьаємо endpoint з атрибуту action (роут куди будуть відправлені дані) */
      const action = form.getAttribute('action');

      if (!action) { return false; }

      /** Підписуємось на подію відправки */
      form.addEventListener('submit', async (e) => {

          /** Відміняємо поведінку за замовчуванням (перезапуск сторінки) */
          e.preventDefault();

          /** Створюемо обьект FormData з нашої форми */
          const formData = new FormData(form);
          formData.delete('_token');

          /** Робимо запит на сервер */
          const response = await fetch(action, {
              method: 'POST', /** Тут в залежності від того який роут на бекенді. У більшості випадків POST */
              credentials: "same-origin",
              /** Обов'язкові заголовки особливо для Laravel */
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': "application/json, text-plain, */*",
                  'X-Requested-With': 'XMLHttpRequest',
                  'X-CSRF-Token': token /** Потрібно якщо відправка в Laravel додаток*/
              },
              /** Об'єет formData пертворюємо у JSON */
              body: JSON.stringify(Object.fromEntries(formData)),
          });

          /** Формуємо відповідь від серверу */
          const data = await response.json();

          /** Якщо status 200 або 201, форму відправлено успішно. Робимо reset та показуємо повідомлення про успіх */
          if (response.status === 200) {
              form.reset();
              // const successBlock = document.querySelector('.success');
              // successBlock.classList.remove('hidden');
              // setTimeout(() => successBlock.classList.add('hidden'), 1000);
              return;
          }

          /** Для помилок валідації Laravel */
          // if (response.status === 422 && data.errors) {
          //     for (errorName in data.errors) {
          //         const input = document.querySelector(`.${errorName}-error`);
          //         input.innerHTML = data.errors[errorName];
          //         input.classList.remove('hidden');
          //     }
          // }
      });
  }

  $('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});
});

