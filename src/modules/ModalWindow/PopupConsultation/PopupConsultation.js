'use strict';

const consultBtns = document.querySelectorAll('.button_wide');
const closeConsultationBtn = document.querySelector('.close-consultation');
const consultPopUp = document.querySelector('.popup-consultation');



//Открытике окна Консультации
const consultOpenBtnHandler = () => {
    consultPopUp.style.visibility = 'visible';

};

//Закрытие окна консультации
const closeConsultationPopup = () => {
    consultPopUp.style.visibility = '';
};



export const setPopupConsult = () => {

    //Обработчик на закрытие окна по крестику
    closeConsultationBtn.addEventListener('click', closeConsultationPopup);

    //Обработчик на каждую кнопку Проконсультироваться,что открывалось окно.
    consultBtns.forEach((btn) => {
        btn.addEventListener('click', consultOpenBtnHandler);
    });    

   // обработчик закрытия окна если кликнули вне окна
    consultPopUp.addEventListener('click', (e)=>{
        const target = e.target;
        if(!target.closest('.feedback-wrap')){
            closeConsultationPopup();
            return;
        }

    });
};