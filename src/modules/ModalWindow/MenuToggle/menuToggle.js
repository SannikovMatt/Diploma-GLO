import { openRepairTypesPopUp, closeRepairTypesPopUp } from '../PopupRepairTypes/PopupRepairTypes';
import { closeAllPopup } from '../../closeAllPopup/closeAllPopup.js';





const scrollMenu = (elmToReach) => {
    elmToReach.scrollIntoView(
        { block: "start", behavior: "smooth" }
    );
};


window.addEventListener('resize',()=>{   

        const popupMenu = document.querySelector('.popup-dialog-menu');
        popupMenu.style.transform = '';
    
});

export const closeMenuPopUp = () => {
    const popupMenu = document.querySelector('.popup-dialog-menu');
 
        popupMenu.style.transform = '';
};

export const menuToggle = () => {

    const popupMenu = document.querySelector('.popup-dialog-menu');
    const menuIcon = document.querySelector('.menu__icon');
    const closeMenuBtn = document.querySelector('.close-menu');
    const footerButton = document.querySelector('.button-footer');




    footerButton.addEventListener('click',(e)=>{
        const target  = e.target;

        if(target.closest('.button-footer')){

                e.preventDefault();                
                const elementToReach = document.getElementById('main');             
                scrollMenu(elementToReach);
        }
    });

    //Если нажат крестик на меню закрываем меню
    closeMenuBtn.addEventListener('click', closeMenuPopUp);

    //нажатие на иконки меню,открывает меню
    menuIcon.addEventListener('click', (e) => {
        popupMenu.style.transform = 'translate3d(0,0,0)';

    });

    
    //Обрабатываем клики по меню
    popupMenu.addEventListener('click',(e)=>{
        const target = e.target;           
        //Если клик был по пунктам меню или нижней кнопке скролим плавно к элементу,закрывая при этом окно меню
          if (target.closest('.popup-menu-nav__item') ) {
              e.preventDefault();
  
              const id = target.getAttribute('href');
              const elementToReach = document.querySelector(id);
              closeMenuPopUp();
              scrollMenu(elementToReach);
          }
          //Если кликнули по `Полный список услуг и цен` открываем данное окно.
          if (target.closest('.link-list-menu') || target.closest('.link-list-repair')) {
              if (target.closest('.menu-link')) {
                  closeMenuPopUp(); 
                  openRepairTypesPopUp();
              }
  
          }


    });


    //Скрываем меню если клик был вне его.
    document.addEventListener('click', (e) => {

        const target = e.target;        
        //Проверяем был ли клик по Меню или По услугам Или иконке
        if (!target.closest('.popup-dialog-menu') && !target.closest('.menu__icon')) { 
           closeMenuPopUp();            
            return; }
    });

}


