'use strict';

import { findActiveStyle } from "./setDesignPreviewTabs";


const designMainSection = document.getElementById('designs');

const designNavWrap = designMainSection.querySelector('.nav-wrap');
const btnsWraper = designMainSection.querySelector('.nav-list-designs');


const allBtns = designMainSection.querySelectorAll('.button_o');
const allStyles = designMainSection.querySelectorAll('.designs-slider > div');
const allPreviews = designMainSection.querySelectorAll('.preview-block');







let position = 0;

const getBtnIndex = (btnToFind) => {
    let index;


    allBtns.forEach((btn, i) => {

        if (btn === btnToFind) {

            index = i;
        }

    });

    return index;
}

const setOnPosition = (indexOfPosition) => {




    allPreviews[position].classList.remove('visible');
    allStyles[position].classList.remove('active__slide');
    allBtns[position].classList.remove('active');


    position = indexOfPosition;

    allStyles[position].classList.add('active__slide');
    allBtns[position].classList.add('active');
    allPreviews[position].classList.add('visible');

    findActiveStyle();

}





const changePosition = (btnEvent) => {

    const target = btnEvent.target;
    let index;

    if (!target.closest('.button_o')) { return; }

    if (target.closest('.button_o')) {
        index = getBtnIndex(target);
    }

    setOnPosition(index);
    

}

export const setDesignMainTabs = () => {


    btnsWraper.addEventListener('click', changePosition);
    setOnPosition(0);
}




