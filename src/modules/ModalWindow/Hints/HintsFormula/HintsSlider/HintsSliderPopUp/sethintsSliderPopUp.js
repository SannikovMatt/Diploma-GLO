'use strict';




//Находим секци Формула
const formulaMain = document.getElementById('formula');
const formula = formulaMain.querySelector('.wrapper_small.desktop-hide');


let showedHint;
let itisShowed;

//Данная функция показывает подсказски
const showHint = (hint) => {



    showedHint = hint;
    if (showedHint.getBoundingClientRect().top < 0) {
        showedHint.style.transform = 'translate3d(0, 200%, 0)';
        showedHint.parentElement.parentElement.style.zIndex = '1000';
    }

    hint.style.visibility = 'visible';
    hint.style.opacity = '1';


}

//Данная функция скрывает подсказки
const hideHint = () => {

    showedHint.style.visibility = '';
    showedHint.style.opacity = '';
    showedHint.style.transform = '';
    showedHint.parentElement.parentElement.style.zIndex = '';
    showedHint = undefined;
}


//Данная функция устанавливает обработчики
export const setHintsSliderFormula = () => {


    //Если мы находимся на обьекте,то показываем подсказку
    formula.addEventListener('mouseover', (e) => {

        const target = e.target;

        if (!target.closest('.formula-item__icon')) { return; }
       

        const formulaItem = target.closest('.formula-slider__slide');

        formulaItem.classList.add('active-item');
        itisShowed = formulaItem;

        const crntHint = formulaItem.querySelector('.formula-item-popup');


        showHint(crntHint);



    })

    //Если убрали с обьекта мышку то подсказка уходит
    formula.addEventListener('mouseout', (e) => {

        const target = e.target;
        if (!target.closest('.formula-item') && !target.closest('.formula-item-popup')) { return; }

        if(itisShowed){

            itisShowed.classList.remove('active-item');}
            itisShowed= undefined;
        if (showedHint) { hideHint(); }

    })



};

