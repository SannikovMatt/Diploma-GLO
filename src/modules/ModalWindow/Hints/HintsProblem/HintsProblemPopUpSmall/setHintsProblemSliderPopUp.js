'use strict';




//Находим секци Формула
const formulaMain = document.getElementById('problems');
const formula = formulaMain.querySelector('.wrapper_small.desktop-hide');


let itisShowed;




//Данная функция устанавливает обработчики
export const setHintsSliderProblem = () => {


    //Если мы находимся на обьекте,то показываем подсказку
    formula.addEventListener('mouseover', (e) => {

        const target = e.target;

        if (!target.closest('.problems-item__icon')) { return; }
       

        const formulaItem = target.closest('.problems-slider__slide');

        formulaItem.classList.add('active-item');
        itisShowed = formulaItem;

       



    })

    //Если убрали с обьекта мышку то подсказка уходит
    formula.addEventListener('mouseout', (e) => {

        const target = e.target;
        if (!target.closest('.problems-item') && !target.closest('.problems-item-popup')) { return; }

        if(itisShowed){

            itisShowed.classList.remove('active-item');}
            itisShowed= undefined;
      

    })



};

