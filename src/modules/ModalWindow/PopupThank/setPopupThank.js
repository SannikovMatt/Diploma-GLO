
const thankPopup = document.querySelector('.popup-thank');
const closeBtn = document.querySelector('.close-thank');

export const showPopupThank = () => {

    thankPopup.style.visibility = 'visible';

}

export const hidePopupThank = () => {

    thankPopup.style.visibility = '';

}

export const setPopupThank = () => {


    closeBtn.addEventListener('click', hidePopupThank);

    document.addEventListener('click', (e) => {
        const target = e.target;


        if (!target.closest('.popup-thank-bg')) {



            hidePopupThank();
        }
    });
}