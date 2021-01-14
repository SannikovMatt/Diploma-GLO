'use strict'; 

//Находим секци Формула
const formula = document.getElementById('formula');
let showedHint ;

//Данная функция показывает подсказски
const showHint = (hint)=>{

   

    showedHint = hint;
    if(showedHint.getBoundingClientRect().top < 0 ){
        showedHint.style.transform = 'translate3d(0, 200%, 0)';
        showedHint.parentElement.parentElement.style.zIndex = '1000';
    }  

    hint.style.visibility = 'visible';
    hint.style.opacity = '1';

    
}

//Данная функция скрывает подсказки
const hideHint = ()=>{

    showedHint.style.visibility = '';
    showedHint.style.opacity = '';
    showedHint.style.transform = '';
    showedHint.parentElement.parentElement.style.zIndex = '';
    showedHint = undefined;
}


//Данная функция устанавливает обработчики
export const setHintsFormula = ()=>{


    //Если мы находимся на обьекте,то показываем подсказку
    formula.addEventListener('mouseover',(e)=>{

        const target = e.target;

        if(!target.closest('.formula-item__icon-inner-text')){return;}

        const formulaItem = target.closest('.formula-item');
        const crntHint = formulaItem.querySelector('.formula-item-popup');


        showHint(crntHint);       


        
    })

    //Если убрали с обьекта мышку то подсказка уходит
    formula.addEventListener('mouseout',(e)=>{

        const target = e.target;
        if(!target.closest('.formula-item') && !target.closest('.formula-item-popup') ){return;}

    
        if(showedHint){hideHint(); }
    
    })

};

