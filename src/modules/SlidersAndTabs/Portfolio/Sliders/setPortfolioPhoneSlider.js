
const mainWrap = document.querySelector('.portfolio-slider-wrap')
const portfolioSliderMobile = document.querySelector('.portfolio-slider-mobile');
const leftArrow = document.getElementById('portfolio-arrow-mobile_left');
const rightArrow = document.getElementById('portfolio-arrow-mobile_right');
const counterTotal = mainWrap.querySelector('.slider-counter-content__total');
const counterCurent = mainWrap.querySelector('.slider-counter-content__current');
const allSlides = portfolioSliderMobile.querySelectorAll('.portfolio-slider__slide-frame');




let position = 0;
let slidesAmount = allSlides.length;
const checkPosition = () => {

    if (position > slidesAmount - 1) {
        position = 0;
    }
    if(position < 0){
        position = slidesAmount - 1;
    }

    setCounter();
}
const moveLeft = () => {

   

    allSlides[position].classList.remove('active__slide');
    position--;
    checkPosition();
    allSlides[position].classList.add('active__slide');

}
const moveRight = () => { 
   

    allSlides[position].classList.remove('active__slide');
    position++;
    checkPosition();
    allSlides[position].classList.add('active__slide');
}

const setCounter = () => {
    counterTotal.textContent = allSlides.length;
    counterCurent.textContent = position + 1;

}

export const setPortfolioPhoneSlider = () => {

    setCounter();
    allSlides[position].classList.add('active__slide');

    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);

}