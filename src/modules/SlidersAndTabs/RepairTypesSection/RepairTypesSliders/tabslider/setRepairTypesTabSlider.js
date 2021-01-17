

const wraper = document.querySelector('.repair-types-nav');
const leftArrow = document.querySelector('#nav-arrow-repair-left_base');
const rightArrow = document.querySelector('#nav-arrow-repair-right_base');
const navSlider = document.querySelector('.nav-list-repair');
const tabbtns = document.querySelectorAll('.nav-list-repair .button_o');

let position = 0;


window.addEventListener('resize',()=>{

    if(document.documentElement.clientWidth>1024)
    navSlider.style.marginLeft = '' ;
})

const getMoveStep = (requestoMove) => {
    let visibleSize = wraper.getBoundingClientRect().width;
    let sizeSlides = navSlider.getBoundingClientRect().width;
    let limit = visibleSize - sizeSlides;
    rightArrow.style.display = '';
    leftArrow.style.display = '';

    if (requestoMove < 0) {
        if (parseInt(getComputedStyle(navSlider).marginLeft) + requestoMove < limit) {
            rightArrow.style.display = 'none';
            return limit - parseInt(getComputedStyle(navSlider).marginLeft);

        } else {

            return requestoMove;
        }


    }

    if (requestoMove > 0) {

        if (parseInt(getComputedStyle(navSlider).marginLeft) + requestoMove > 0) {
            leftArrow.style.display = 'none';
            return -parseInt(getComputedStyle(navSlider).marginLeft);
        } else {
            return requestoMove;
        }

    }

}

const moveLeft = () => {

    if (position > 0) {
        let nextElementWidth = getComputedStyle(tabbtns[position - 1]).width;
        nextElementWidth = getMoveStep(parseInt(nextElementWidth));

        let curentMarginLeft = getComputedStyle(navSlider).marginLeft;
        let movestep = nextElementWidth + parseInt(curentMarginLeft);

        navSlider.style.marginLeft = `${movestep}px`;
        position--;

    }



}
const moveRight = () => {
    let nextElementWidth = getComputedStyle(tabbtns[position]).width;
    nextElementWidth = getMoveStep(-parseInt(nextElementWidth));

    let curentMarginLeft = getComputedStyle(navSlider).marginLeft;
    let movestep = nextElementWidth + parseInt(curentMarginLeft);

    navSlider.style.marginLeft = `${movestep}px`;
    position++;

}

const checkPosition = () => { }

export const setRepairTypesTabSlider = () => {
    checkPosition();
    rightArrow.addEventListener('click', moveRight);
    leftArrow.addEventListener('click', moveLeft);


};