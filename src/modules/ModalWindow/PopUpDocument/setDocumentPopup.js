


const docPopup = document.querySelector('.popup-transparency');
const sliderItems = document.querySelectorAll('.transparency-item');
const closeBtn = docPopup.querySelectorAll('.close');


const showPopUpDoc = () => {

    docPopup.style.visibility = 'visible';


}

const hidePopUpDoc = () => {

    docPopup.style.visibility = '';


}
export const setDocumentPopUp = () => {
    sliderItems.forEach(item => {item.addEventListener('click', showPopUpDoc)});
    closeBtn.forEach((closeBtn)=>{closeBtn.addEventListener('click', hidePopUpDoc); 
    docPopup.addEventListener('click',(e)=>{
        const target = e.target;

        if(!target.closest('.popup-dialog-transparency')){

            hidePopUpDoc();
        }

    });
});

}



