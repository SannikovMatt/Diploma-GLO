const mainContainer = document.querySelector('#scheme-list');
const allSlidesContainer = document.querySelector('.scheme-slider');


const getBtnIndex = (clickedBtn) => {

    let allBtns = clickedBtn.parentElement.querySelectorAll('.button_o');
    let index;
    allBtns.forEach((btn, i) => {
        if (btn === clickedBtn) {
            index = i;
        }
    });

    return index;
}

const setSlide = (btnIndex) => {

    let allSlides = allSlidesContainer.querySelectorAll('.scheme-slider__slide');
    let allButtons = mainContainer.querySelectorAll('.button_o');
    let allDescription = document.querySelectorAll('.scheme-description-block');

    allSlides.forEach((slide, i) => {

        if (btnIndex === i) {
            slide.classList.add('active__slide');
        } else {
            slide.classList.remove('active__slide');
        }
    });
    allButtons.forEach((btn, i) => {
        if (btnIndex === i) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    allDescription.forEach((description, i) => {
        if (btnIndex === i) {
            description.classList.add('visible-content-block');
        } else {
            description.classList.remove('visible-content-block');
        }
    });

}

export const setSchemeTab = () => {

    setSlide(0);

    mainContainer.addEventListener('click', (e) => {

        let target = e.target.closest('.button_o');

        if (!target) { return; }

        let btnIndex = getBtnIndex(target);


        setSlide(btnIndex);


    });

}