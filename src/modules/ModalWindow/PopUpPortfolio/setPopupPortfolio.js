import { setPosition } from "../../SlidersAndTabs/Portfolio/Sliders/setPortFolioPopupSlider";

const popUpPortfolio = document.querySelector('.popup-portfolio');
const closeBtn = popUpPortfolio.querySelectorAll('.close');

const portfolioSlider = document.querySelector('.portfolio-slider');

const tabs = portfolioSlider.querySelectorAll('.portfolio-slider__slide-frame')
const portfolioSliderMobile = document.querySelector('.portfolio-slider-mobile')


const hidePopUp = () => {

    popUpPortfolio.style.visibility = '';

}
const showPopup = () => {

    popUpPortfolio.style.visibility = 'visible';
}




export const setPopUpPortfolio = () => {



    portfolioSliderMobile.addEventListener('click', (e) => {

        const target = e.target;

        showPopup();
    })

    portfolioSlider.addEventListener('click', (e) => {

        const target = e.target;

        if (target.closest('.portfolio-slider__slide-frame')) {


            const targetTab = target.closest('.portfolio-slider__slide-frame');

            tabs.forEach((tab, index) => {

               
                if (tab === targetTab) {
                    setPosition(index);
                    showPopup();
                }

            });



        }

    })


    popUpPortfolio.addEventListener('click', (e) => {
        const target = e.target;


        if (!target.closest('.popup-dialog-portfolio')) {
            hidePopUp();

        }





    })

    closeBtn.forEach((btn) => {
        btn.addEventListener('click', hidePopUp)
    })



}
