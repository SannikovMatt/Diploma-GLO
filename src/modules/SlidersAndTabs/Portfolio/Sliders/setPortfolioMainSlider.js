import { setPortfolioPhoneSlider } from "./setPortfolioPhoneSlider";

const portfolioSlider = document.querySelector('.portfolio-slider');

let sliderTabs = document.querySelectorAll('.portfolio-slider__slide');
const rightArrow = document.getElementById('portfolio-arrow_right');
const leftArrow = document.getElementById('portfolio-arrow_left');


let position = 0;


window.addEventListener('resize', () => {

    if (document.documentElement.clientWidth <= 575) {
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
    } else {
        setArrows();
    }

})

const moveLeft = () => {

    let leftLimit = portfolioSlider.getBoundingClientRect().left;
    sliderTabs.forEach((tabs, index) => {
        if (tabs.getBoundingClientRect().left < leftLimit + 1)
            position = index;
    })

    sliderTabs[position].scrollIntoView({
        block: "nearest",
        inline: "end",
        behavior: "smooth"
    });


    setArrows();

}
const moveRight = () => {

    let rightLimit = portfolioSlider.getBoundingClientRect().right;
    let found = false;

    sliderTabs.forEach((tabs, index) => {

        if (tabs.getBoundingClientRect().right > rightLimit + 1)
            if (!found) {
                found = true;
                position = index;
            }
    });

    sliderTabs[position].scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "smooth"
    });


    setArrows();

}

const setArrows = () => {
if(document.documentElement.clientWidth <= 575){

    return;
}

    if (position === 0) {
        leftArrow.style.display = 'none';
    } else {
        leftArrow.style.display = 'flex';
    }


    if (position === sliderTabs.length - 1) {
        rightArrow.style.display = 'none';

    } else {

        rightArrow.style.display = 'flex';
    }

}



export const setPortfolioMainSlider = () => {

    setArrows();

    rightArrow.addEventListener('click', moveRight);
    leftArrow.addEventListener('click', moveLeft);



    //Setting SLides for Mobile
    setPortfolioPhoneSlider();

}


