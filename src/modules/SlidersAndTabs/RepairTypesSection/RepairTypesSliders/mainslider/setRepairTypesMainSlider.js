'use strict';
//Экспортируем переменную которая показывает какой таб сейчас активен
import { currentTab } from "../../RepairTypesTabs/setRepairTypesTabs";


//Обертка слайдера
const repairTypesSliderMainWrap = document.querySelector('.repair-types-slider-wrap');

//Все табы со слайдами
const tabs = repairTypesSliderMainWrap.querySelectorAll('.repair-types-slider > div');


const rightBtn = repairTypesSliderMainWrap.querySelector('#repair-types-arrow_right');
const leftBtn = repairTypesSliderMainWrap.querySelector('#repair-types-arrow_left');
const counterTotal = repairTypesSliderMainWrap.querySelector('.slider-counter-content__total');
const counterCurrent = repairTypesSliderMainWrap.querySelector('.slider-counter-content__current');





let curentSlides;
//let currentSlideIndex;
let position = 0;
let totalSlides;

//Получаем сет слайдов активного таба
export const getCurrentSlidesSet = () => {
    if(curentSlides){
        curentSlides[0].parentElement.classList.remove('active__repair__item');
        curentSlides[position].classList.toggle('active__repair__item');
        position = 0;
        
    }
    curentSlides = tabs[currentTab].querySelectorAll('.repair-types-slider__slide');

   
    curentSlides[0].parentElement.classList.add('active__repair__item');
    curentSlides[0].classList.add('active__repair__item');
    totalSlides = curentSlides.length;
    setCounterDisplay();

}



//Устанавливаем счетчик
const setCounterDisplay = () => {
    counterTotal.textContent = totalSlides;
    counterCurrent.textContent = position + 1;

}

//Проверям позицию,чтобы крутить счетчик по кругу
const setPositionState = () => {
    if (position === totalSlides) {
        position = 0;
    }

    if (position < 0) {
        position = totalSlides-1;
    }
}


const moveRigt = () => {

    curentSlides[position].classList.remove('active__repair__item')
    position++;
    setPositionState();
    curentSlides[position].classList.add('active__repair__item')
    setCounterDisplay();

}


const moveLeft = () => {
    curentSlides[position].classList.remove('active__repair__item');
    position--;
    setPositionState();

    
    curentSlides[position].classList.add('active__repair__item');
    setCounterDisplay();
}

export const setRepairTypesMainSlider = () => {


    getCurrentSlidesSet();
    setCounterDisplay();

    rightBtn.addEventListener('click', moveRigt);
    leftBtn.addEventListener('click', moveLeft);



}