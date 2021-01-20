'use strict'; 

//Находим секци Проблемы
const problems = document.getElementById('problems');
let showedHint ;

//Данная функция показывает подсказски
const showHint = (hint)=>{

   

    showedHint = hint;
    if(showedHint.getBoundingClientRect().top < 0 ){
        showedHint.style.transform = 'translate3d(0, 100%, 0)';
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
export const setHintsProblem = ()=>{


    //Если мы находимся на обьекте,то показываем подсказку
    problems.addEventListener('mouseover',(e)=>{


        

        const target = e.target;

        if(!target.closest('.problems-item__icon')){return;}

        const formulaItem = target.closest('.problems-item');
        const crntHint = formulaItem.querySelector('.problems-item-popup');


        showHint(crntHint);       


        
    })

    //Если убрали с обьекта мышку то подсказка уходит
    problems.addEventListener('mouseout',(e)=>{

        const target = e.target;
        if(!target.closest('.problems-item') && !target.closest('.problems-item-popup') ){return;}

    
        if(showedHint){hideHint(); }
    
    })

};
