
'use strict';

import { setDataRepair } from "../../repairData/setDataRepair";

//Само модальное окно диалоговое
const repairTypes = document.querySelector('.popup-dialog-repair-types');
//Кнопка закрытия для модального окна
const closeBtn = repairTypes.querySelector('.close');
//Блок табов данной секции
const repairTypesTab = document.querySelector('.repair-types-tab');
//Линк на открытие модального окна
let linkListRepair = document.querySelectorAll('.link-list-repair');

let linkListRepairMenu = document.querySelector('.link-list-menu');



//Подложка за модальным окном
const popupRepairTypesSubstrate = document.querySelector('.popup-repair-types');


//Экспортируем данные 2 функции чтобы секция с меню тоже могла ими воспользоваться


//Закрытие модального окна
export const openRepairTypesPopUp = () => {

    popupRepairTypesSubstrate.style.visibility = 'visible';

};

//Открытие модального окна
export const closeRepairTypesPopUp = () => {


    popupRepairTypesSubstrate.style.visibility = '';

};

//Ставим обработчики на для модального окна
export const PopupRepairTypes = () => {

    //Клик на ссылку открывает модальное окно
    linkListRepair[0].addEventListener('click', (e) => {
        

        const target = e.target;

        if (target.closest('.link-list-repair')) {
            setDataRepair(repairTypes);
            openRepairTypesPopUp();
        }


    });
    linkListRepair[1].addEventListener('click', (e) => {
        

        const target = e.target;

        if (target.closest('.link-list-repair')) {
            setDataRepair(repairTypes);
            openRepairTypesPopUp();
        }


    });

    linkListRepairMenu.addEventListener('click', (e) => {
        

        const target = e.target;

        if (target.closest('.link-list-menu')) {
            setDataRepair(repairTypes);
            openRepairTypesPopUp();
        }


    });




    //Клик на крестик закрывает его
    closeBtn.addEventListener('click', () => {
        closeRepairTypesPopUp();
    });

    //Клик вне окна закрывает его
    popupRepairTypesSubstrate.addEventListener('click', (e) => {

        const target = e.target;


        if (!target.closest('.popup-dialog-repair-types')) {
            closeRepairTypesPopUp();
            return;
        }
    });
}






