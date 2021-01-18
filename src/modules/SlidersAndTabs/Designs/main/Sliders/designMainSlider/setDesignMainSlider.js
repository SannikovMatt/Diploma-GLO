

const leftArrow = document.querySelector('#design_left');
const rightArrow = document.querySelector('#design_right');


const counter = document.querySelector('#designs-counter');
const counterCurrent = counter.querySelector('.slider-counter-content__current');
const counterTotal = counter.querySelector('.slider-counter-content__total');


let designSlider = document.querySelector('.designs-slider > .active__slide');



let allSlides = designSlider.querySelectorAll('.designs-slider__style-slide');





let position = 0;
let totalSlides = allSlides.length;


export const setNewSlidesSet = (newSlidesSet) => {


    designSlider = newSlidesSet;
    position = 0;
    allSlides = designSlider.querySelectorAll('.designs-slider__style-slide');
    totalSlides = allSlides.length;
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




export const setDesignMainSlider = () => {


    setCounterDisplay();

    rightArrow.addEventListener('click', moveRigt);
    leftArrow.addEventListener('click', moveLeft);




}