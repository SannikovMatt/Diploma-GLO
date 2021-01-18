import { setNewSlidesSetPopUp } from "../PopUpSlider/setDesignPopupSlider";


const designMainSection = document.querySelector('.popup-dialog-design');

const designNavWrap = designMainSection.querySelector('.nav-wrap');
const btnsWraper = designMainSection.querySelector('.nav-list-designs');


const allBtns = designMainSection.querySelectorAll('.button_o');
const allStyles = designMainSection.querySelectorAll('.popup-design-slider > div');
const allTexts = designMainSection.querySelectorAll('.popup-design-text');








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




    
    allStyles[position].classList.remove('active__slide');
    allBtns[position].classList.remove('active');
    allTexts[position].classList.remove('visible-content-block')


    position = indexOfPosition;

    allStyles[position].classList.add('active__slide');
    allBtns[position].classList.add('active');
    allTexts[position].classList.add('visible-content-block')
   

    setNewSlidesSetPopUp(allStyles[position]);

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

















export const setDesignPopUpTabs =()=>{
    btnsWraper.addEventListener('click', changePosition);
    setOnPosition(0);

}