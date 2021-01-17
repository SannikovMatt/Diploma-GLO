const popUpPortfolio = document.querySelector('.popup-portfolio');
const closeBtn = popUpPortfolio.querySelectorAll('.close');

const portfolioSlider = document.querySelector('.portfolio-slider');
const portfolioSliderMobile = document.querySelector('.portfolio-slider-mobile')


const hidePopUp = () => {

    popUpPortfolio.style.visibility = '';

}
const showPopup = () => {

    popUpPortfolio.style.visibility = 'visible';
}




export const setPopUpPortfolio = () => {



    portfolioSliderMobile.addEventListener('click',(e)=>{

        const target = e.target;

        showPopup();
    })

    portfolioSlider.addEventListener('click', (e) => {


        console.log();
        const target = e.target;

        showPopup();



    })


    closeBtn.forEach((btn) => {
        btn.addEventListener('click', hidePopUp)    })

    

}
