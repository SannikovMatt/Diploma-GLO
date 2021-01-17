

const sliderWraper = document.querySelector('.popup-portfolio-slider-wrap');

const rightArrow = document.getElementById('popup_portfolio_right');
const leftArrow = document.getElementById('popup_portfolio_left');

const counterTotal = sliderWraper.querySelector('.slider-counter-content__total');
const counterCurrent = sliderWraper.querySelector('.slider-counter-content__current');

const allSlides = sliderWraper.querySelectorAll('.popup-portfolio-slider__slide');
const allTexts = document.querySelectorAll('.popup-portfolio-text');


let position = 0;
let slidesAmount = allSlides.length;


const setCounter = () => {
    counterTotal.textContent = allSlides.length;
    counterCurrent.textContent = position + 1;

}

const checkPosition = () => {

    if (position > slidesAmount - 1) {
        position = 0;
    }
    if (position < 0) {
        position = slidesAmount - 1;
    }

    setCounter();
}


const moveLeft = () => {
    allTexts[position].style.display = '';
    allSlides[position].classList.remove('active__slide');
    position--;
    checkPosition();
    allSlides[position].classList.add('active__slide');
    allTexts[position].style.display = 'flex';
}
const moveRight = () => {


    allSlides[position].classList.remove('active__slide');
    allTexts[position].style.display = '';
    position++;
    checkPosition();
    allSlides[position].classList.add('active__slide');
    allTexts[position].style.display = 'flex';
}

export const setPosition = (newPosition) => {
    

    allSlides[position].classList.remove('active__slide');
    allTexts[position].style.display = '';
    position = newPosition;   
    allSlides[position].classList.add('active__slide');
    allTexts[position].style.display = 'flex';

}

export const setPortFolioPopupSlider = () => {
   
    setCounter();
    allSlides[position].classList.add('active__slide');
    allTexts[position].style.display = 'flex';

    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);

}

