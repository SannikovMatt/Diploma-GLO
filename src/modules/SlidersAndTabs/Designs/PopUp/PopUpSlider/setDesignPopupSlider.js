

const leftArrow = document.querySelector('#popup_design_left');
const rightArrow = document.querySelector('#popup_design_right');



const counter = document.querySelector('#popup-designs-counter');
const counterCurrent = counter.querySelector('.slider-counter-content__current');
const counterTotal = counter.querySelector('.slider-counter-content__total');


let designSlider = document.querySelector('.popup-design-slider > .active__slide');



let allSlides = designSlider.querySelectorAll('.design-slider__style-slide');







let position = 0;
let totalSlides = allSlides.length;

const setFirstView = (style) => {

    const firstSlide = style.querySelectorAll('.design-slider__style-slide')[0];

    firstSlide.classList.add('active__slide');

}

export const setNewSlidesSetPopUp = (newSlidesSet) => {


    designSlider = newSlidesSet;
    position = 0;
    allSlides = designSlider.querySelectorAll('.design-slider__style-slide');
    totalSlides = allSlides.length;
    setFirstView(newSlidesSet)
    setCounterDisplay();

}





const setCounterDisplay = () => {
    counterTotal.textContent = totalSlides;
    counterCurrent.textContent = position + 1;

}

const setPositionState = () => {
    if (position === totalSlides) {
        position = 0;
    }

    if (position < 0) {
        position = totalSlides - 1;
    }
}

const moveRigt = () => {




    allSlides[position].classList.remove('active__slide')
    position++;
    setPositionState();
    allSlides[position].classList.add('active__slide')
    setCounterDisplay();

}


const moveLeft = () => {
    allSlides[position].classList.remove('active__slide');
    position--;
    setPositionState();


    allSlides[position].classList.add('active__slide');
    setCounterDisplay();
}




export const setDesignPopUpSlider = () => {


    setCounterDisplay();

    rightArrow.addEventListener('click', moveRigt);
    leftArrow.addEventListener('click', moveLeft);




}