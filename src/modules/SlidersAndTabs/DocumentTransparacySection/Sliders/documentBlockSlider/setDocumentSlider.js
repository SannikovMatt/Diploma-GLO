const leftBtn = document.getElementById('transparency-arrow_left');
const rightBtn = document.getElementById('transparency-arrow_right');

const transparencSlider = document.querySelector('.transparency-slider');
 const sliderItems = transparencSlider.querySelectorAll('.transparency-item');

//Задаем изначальную позицию
let crntPosition = 0;

const checkPosition = () => {

    if (crntPosition === 0) {

        leftBtn.style.display = 'none';
    } else {
        leftBtn.style.display = '';
    }
    if (crntPosition === sliderItems.length - 1) {
        rightBtn.style.display = 'none';
    } else {
        rightBtn.style.display = '';
    }

}

const moveRight = () => {
    crntPosition++;
    transparencSlider.style.transform = `translateX(-${crntPosition * 100}%)`
    checkPosition();
}
const moveLeft = () => {
    crntPosition--;
    transparencSlider.style.transform = `translateX(-${crntPosition * 100}%)`
    checkPosition();
}




export const setDocumentSlider = () => {
    checkPosition();
    leftBtn.addEventListener('click', moveLeft);
    rightBtn.addEventListener('click', moveRight);
}