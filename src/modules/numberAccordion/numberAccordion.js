'use strict';

const arrow = document.querySelector('.header-contacts__arrow');
const numberAccordBlock = document.querySelector('.header-contacts__phone-number-accord');
const number = numberAccordBlock.querySelector('.header-contacts__phone-number');

let open = false;


const openAccordion = () => {
    open = true;
    numberAccordBlock.style.top = '30px';
    number.style.opacity = 1;
    arrow.style.transform = 'rotate(180deg)';
}

const closeAccordion = () => {
    open = false;
    numberAccordBlock.style.top = '';
    number.style.opacity = '';
    arrow.style.transform = '';
}

export const setNumberAccordion = () => {

    arrow.addEventListener('click', () => {

        if (!open) {
            openAccordion();
        } else {
            closeAccordion();
        }
    });

    document.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.closest('.header-contacts')) {
            closeAccordion();
        }


    })
}