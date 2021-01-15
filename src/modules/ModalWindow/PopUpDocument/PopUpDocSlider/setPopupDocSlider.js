



const sliderWrap = document.querySelector('.popup-transparency-slider-wrap');
const slider = sliderWrap.querySelector('.popup-transparency-slider');
const leftBtn = sliderWrap.querySelector('#transparency_left');
const rightBtn = sliderWrap.querySelector('#transparency_right');
const totalSlides = sliderWrap.querySelector('.slider-counter-content__total');
const currentSlide = sliderWrap.querySelector('.slider-counter-content__current');
const slideItems = sliderWrap.querySelectorAll('.popup-transparency-slider__slide');



//Задаем изначальную позицию
let slidesamount = slideItems.length;

let crntPosition = 0;



 currentSlide.textContent = crntPosition + 1 ;
totalSlides.textContent = slidesamount;

const checkPosition = () => {
    currentSlide.textContent = crntPosition + 1 ;

    if (crntPosition === 0) {

        leftBtn.style.display = 'none';
    } else {
        leftBtn.style.display = '';
    }
    if (crntPosition === 3 - 1) {
        rightBtn.style.display = 'none';
    } else {
        rightBtn.style.display = '';
    }

}

const moveRight = () => {
    crntPosition++;
    slider.style.transform = `translateX(-${crntPosition * 100}%)`
    checkPosition();
}
const moveLeft = () => {
    crntPosition--;
    slider.style.transform = `translateX(-${crntPosition * 100}%)`
    checkPosition();
}


export const setDocumentPopUpSlider = () => {
    checkPosition();
    leftBtn.addEventListener('click', moveLeft);
    rightBtn.addEventListener('click', moveRight);
}