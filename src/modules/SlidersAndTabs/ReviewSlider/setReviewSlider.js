

const mainWrap = document.querySelector('.reviews-slider-wrap');

const leftArrow = mainWrap.querySelector('#reviews-arrow_left');
const rightArrow = mainWrap.querySelector('#reviews-arrow_right');

const allSlides = mainWrap.querySelectorAll('.reviews-slider__slide');


let position = 0;
let slidesAmount = allSlides.length


const checkPosition = () => {

    if (position > slidesAmount - 1) {
        position = 0;
    }
    if (position < 0) {
        position = slidesAmount - 1;
    }


}

const moveRight = () => {

    allSlides[position].classList.remove('active__slide');
    position--;
    checkPosition();
    allSlides[position].classList.add('active__slide');

}
const moveLeft = () => {
    allSlides[position].classList.remove('active__slide');
    position++;
    checkPosition();
    allSlides[position].classList.add('active__slide');
}



export const setReviewSlider = () => {


    allSlides[position].classList.add('active__slide');
    leftArrow.addEventListener('click', moveLeft);
    rightArrow.addEventListener('click', moveRight);


}