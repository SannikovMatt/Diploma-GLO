'use strict';

//Список Аккордион
const accordion = document.querySelector('.accordion  ul');

//Элементы аккордиона
const accordionLi = accordion.querySelectorAll('li');

//Очищаем элементы от класса active
const removeActiveTitles = () => {

    accordionLi.forEach((li) => {

        const titleBlock = li.querySelector('h2');
        titleBlock.classList.remove('msg-active');

    });

}


//Делаем активным элемент,на который кликнули
const makeActive = (e) => {

    const target = e.currentTarget;
    const titleBlock = target.querySelector('h2');
    
    if(titleBlock.classList.contains('msg-active')){
        titleBlock.classList.toggle('msg-active');
        return;
    }

    removeActiveTitles();



    titleBlock.classList.add('msg-active');

    setTimeout(() => {
        if (target.getBoundingClientRect().top < 0) {
            target.scrollIntoView(
                { block: "start", behavior: "smooth" }
            );

        }


    }, 720);



}



export const setFaqAccordion = () => {

    //делаем все элементы не активными на загрузке страницы
    removeActiveTitles();

    accordionLi.forEach((li) => {

        li.addEventListener('click', makeActive);
    });



}