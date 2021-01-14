'use strict';

//Модальное окно
const popupPrivacy = document.querySelector('.popup-privacy');
//Ссылки на модальное окно
const openPopUpPrivacyLinks = document.querySelectorAll('span[class="link-privacy"');
//Крестик модального окна
const closePopUpPrivacyBtn = popupPrivacy.querySelector('.close');


//Функция открытия модального окна
const openPopUpPrivacy = () => {
    popupPrivacy.style.visibility = 'visible';

};

//Функция закрытия модального окна
const closePopUpPrivacy = () => {
    popupPrivacy.style.visibility = '';

};

export const setPopUpPrivacy = () => {

    //Вещаем обработчики на все линки
    openPopUpPrivacyLinks.forEach((privacyLink) => {
        privacyLink.addEventListener('click', openPopUpPrivacy);
    });


    //Вешаем обработчик на закрытие по крестику
    closePopUpPrivacyBtn.addEventListener('click', closePopUpPrivacy);


    //Вешаем обработчик на закрытие при клике вне модального окна
    popupPrivacy.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.closest('.popup-dialog-privacy')) {
            closePopUpPrivacy();
            return;
        }
    })



}