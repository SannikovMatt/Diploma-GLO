
const linklistDesigns = document.querySelector('.link-list-designs > a');
const popUp = document.querySelector('.popup-design');
const close = popUp.querySelector('.close');


const showPopUp = () => {
    popUp.style.visibility = 'visible';
}

const hidePopUp = () => {
    popUp.style.visibility = '';
}

export const setDesignPopUp = () => {

linklistDesigns.addEventListener('click', showPopUp);
close.addEventListener('click',hidePopUp);

popUp.addEventListener('click',(e)=>{
    const target = e.target;
    if(!target.closest('.popup-dialog-design')){
        hidePopUp();
    }
})


}