

export class TabsSlider {


    constructor({ sliderWrap, leftArrow, rightArrow }) {

        this.sliderWrap = document.querySelector(sliderWrap);
        this.leftArrow = document.querySelector(leftArrow);
        this.rightArrow = document.querySelector(rightArrow);



        this.containerAboveSlider = this.sliderWrap.parentElement;

     

        this.translated = 0;
    }

    debounce(func, wait, immediate) {
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
    }
    getNewViewWidth() {


        this.moveLeft();
        this.viewWidth = this.containerAboveSlider.getBoundingClientRect().width;

    }
    getCurentPostion() {

        this.leftLimit = this.containerAboveSlider.getBoundingClientRect().left;
        this.rightLimit = this.containerAboveSlider.getBoundingClientRect().right;
        this.viewWidth = this.containerAboveSlider.getBoundingClientRect().width;

        this.leftSliderSide = this.sliderWrap.getBoundingClientRect().left;
        this.rightSliderSide = this.sliderWrap.getBoundingClientRect().right;
    }

    getRightLimits() {

        return this.rightSliderSide - this.rightLimit;
    }
    moveRight() {




        this.getCurentPostion();

        let posibilityToMove = this.getRightLimits();

        let translateStep = this.viewWidth;

        if (translateStep > posibilityToMove) {

            translateStep = posibilityToMove;


        }

        translateStep = parseInt(translateStep);


        this.translated += translateStep;
        if (translateStep === 0 && this.translated > (150)) {
            this.translated = 0;
        }
        this.sliderWrap.style.transform = `translateX(-${this.translated}px)`;


    }

    getLeftLimits() {

        return this.leftLimit - this.leftSliderSide;
    }
    moveLeft() {

        this.getCurentPostion();
        let posibilityToMove = this.getLeftLimits();
        let translateStep = this.viewWidth;
        if (translateStep > posibilityToMove) {

            translateStep = posibilityToMove;
        }

        translateStep = parseInt(translateStep);
        this.translated -= translateStep;
        if (translateStep === 0) {
            this.translated = parseInt(this.getRightLimits());
        }
        this.sliderWrap.style.transform = `translateX(-${this.translated}px)`;



    }

    initSlider() {

        this.rightArrow.addEventListener('click', this.debounce(this.moveRight, 300, true).bind(this));
        this.leftArrow.addEventListener('click', this.debounce(this.moveLeft, 300, true).bind(this));
        window.addEventListener('resize', this.getNewViewWidth.bind(this));

    }
}

export let schemeTabSlider = new TabsSlider({
    sliderWrap: '#scheme-list',
    leftArrow: '#nav-arrow-scheme_left',
    rightArrow: '#nav-arrow-scheme_right'
})




// const slidersWrap = document.querySelector('#scheme-list');

// const leftArrow = document.getElementById('nav-arrow-scheme_left');
// const rightArrow = document.getElementById('nav-arrow-scheme_right');


// const containerAboveSlider = slidersWrap.parentElement;


// let leftLimit;
// let rightLimit;
// let viewWidth;

// let leftSliderSide;
// let rightSliderSide;


// let translated = 0;


// function debounce(func, wait, immediate) {
//     var timeout;



//     return function executedFunction() {
//         var context = this;
//         var args = arguments;

//         var later = function () {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };

//         var callNow = immediate && !timeout;

//         clearTimeout(timeout);

//         timeout = setTimeout(later, wait);

//         if (callNow) func.apply(context, args);
//     };
// };

// const getNewViewWidth = () => {

//     viewWidth = containerAboveSlider.getBoundingClientRect().width;

// }
// window.addEventListener('resize', getNewViewWidth);

// const getCurentPostion = () => {

//     leftLimit = containerAboveSlider.getBoundingClientRect().left;
//     rightLimit = containerAboveSlider.getBoundingClientRect().right;
//     viewWidth = containerAboveSlider.getBoundingClientRect().width;

//     leftSliderSide = slidersWrap.getBoundingClientRect().left;
//     rightSliderSide = slidersWrap.getBoundingClientRect().right;
// }
// const getRightLimits = () => {

//     return rightSliderSide - rightLimit;
// }
// const moveRight = () => {

//     getCurentPostion();

//     let posibilityToMove = getRightLimits();

//     let translateStep = viewWidth;

//     if (translateStep > posibilityToMove) {

//         translateStep = posibilityToMove;


//     }

//     translateStep = parseInt(translateStep);


//     translated += translateStep;
//     if (translateStep === 0 && translated > (150)) {
//         translated = 0;
//     }
//     slidersWrap.style.transform = `translateX(-${translated}px)`;


// }
// const getLeftLimits = () => {

//     return leftLimit - leftSliderSide;
// }


// const moveLeft = () => {

//     getCurentPostion();
//     let posibilityToMove = getLeftLimits();
//     let translateStep = viewWidth;
//     if (translateStep > posibilityToMove) {

//         translateStep = posibilityToMove;
//     }

//     translateStep = parseInt(translateStep);
//     translated -= translateStep;
//     if (translateStep === 0) {
//         translated = parseInt(getRightLimits());
//     }
//     slidersWrap.style.transform = `translateX(-${translated}px)`;



// }
// export const setSchemeTabSlider = () => {

//     rightArrow.addEventListener('click', debounce(moveRight, 500, true));
//     leftArrow.addEventListener('click', debounce(moveLeft, 500, true));
// }


