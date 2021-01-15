import { menuToggle } from './modules/ModalWindow/MenuToggle/menuToggle.js';
import { PopupRepairTypes } from './modules/ModalWindow/PopupRepairTypes/PopupRepairTypes';
import { SliderCarusel } from './modules/PartnersCarousel/Carousel.js';
import { maskPhoneAllFields } from './modules/maskphone/maskPhoneAllFields';
import {setPopupConsult }  from './modules/ModalWindow/PopupConsultation/PopupConsultation';
import { setPopUpPrivacy } from './modules/ModalWindow/PopupPrivacy/PopupPrivacy.js';
import { setHintsFormula } from './modules/ModalWindow/Hints/HintsFormula/setHintsFormula.js';
import { setNumberAccordion } from './modules/numberAccordion/numberAccordion.js';
import { formHandle } from './modules/SendForms/formHandle.js';
import { setFaqAccordion } from './modules/FaqAccordion/setFaqAccordion.js';
import { setPopupThank } from './modules/ModalWindow/PopupThank/setPopupThank.js';

//Обработчики меню
menuToggle();


//Обработка Типов Ремонта
PopupRepairTypes();

//Маска для всех полей с телефонами
maskPhoneAllFields();

//Модалка консультации
setPopupConsult();

//Модалка Конфидециальности
setPopUpPrivacy();
 
//Подасказки на секции Формула
setHintsFormula();

//Аккордион номера
setNumberAccordion();

formHandle();


setFaqAccordion();


setPopupThank();



/*const options = {

    main: ".wrapper",
    wrap: ".partners-slider",
    prev: '#partners-arrow_left',
    next: '#partners-arrow_right',
    slidesToShow: 3,
    infinity: true,
    responsive:
        [
            { breakpoint: 1024, slidesToShow: 3 },
            { breakpoint: 768, slidesToShow: 2 },
            { breakpoint: 576, slidesToShow: 1, }
        ]
}

const carousel = new SliderCarusel(options);

carousel.init();*/