



const slidersWrap = document.querySelector('#scheme-list');

const leftArrow = document.getElementById('nav-arrow-scheme_left');
const rightArrow = document.getElementById('nav-arrow-scheme_right');


const containerAboveSlider = slidersWrap.parentElement;


let leftLimit;
let rightLimit;
let viewWidth;

let leftSliderSide;
let rightSliderSide;


let translated = 0;


function debounce(func, wait, immediate) {
    var timeout;



    return function executedFunction() {
        var context = this;
        var args = arguments;

        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};

const getNewViewWidth = () => {

    viewWidth = containerAboveSlider.getBoundingClientRect().width;

}
window.addEventListener('resize', getNewViewWidth);

const getCurentPostion = () => {

    leftLimit = containerAboveSlider.getBoundingClientRect().left;
    rightLimit = containerAboveSlider.getBoundingClientRect().right;
    viewWidth = containerAboveSlider.getBoundingClientRect().width;

    leftSliderSide = slidersWrap.getBoundingClientRect().left;
    rightSliderSide = slidersWrap.getBoundingClientRect().right;
}
const getRightLimits = () => {

    return rightSliderSide - rightLimit;
}
const moveRight = () => {

    getCurentPostion();

    let posibilityToMove = getRightLimits();

    let translateStep = viewWidth;

    if (translateStep > posibilityToMove) {

        translateStep = posibilityToMove;


    }

    translateStep = parseInt(translateStep);


    translated += translateStep;
    if (translateStep === 0 && translated > (150)) {
        translated = 0;
    }
    slidersWrap.style.transform = `translateX(-${translated}px)`;


}
const getLeftLimits = () => {

    return leftLimit - leftSliderSide;
}


const moveLeft = () => {

    getCurentPostion();
    let posibilityToMove = getLeftLimits();
    let translateStep = viewWidth;
    if (translateStep > posibilityToMove) {

        translateStep = posibilityToMove;
    }

    translateStep = parseInt(translateStep);
    translated -= translateStep;
    if (translateStep === 0) {
        translated = parseInt(getRightLimits());
    }
    slidersWrap.style.transform = `translateX(-${translated}px)`;



}
export const setSchemeTabSlider = () => {

    rightArrow.addEventListener('click', debounce(moveRight, 500, true));
    leftArrow.addEventListener('click', debounce(moveLeft, 500, true));
}


