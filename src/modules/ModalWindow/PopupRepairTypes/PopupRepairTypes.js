
'use strict';

export const PopupRepairTypes = () => {


    const repairTypes = document.querySelector('.popup-repair-types');
    const closeBtn = repairTypes.querySelector('.close');
    let linkListRepair = document.querySelector('.link-list-repair');

    console.log(linkListRepair);


    linkListRepair.addEventListener('click', (e) => {
        linkListRepair = document.querySelector('.link-list-repair > a');

        const target = e.target;



        if (target.closest('.link-list-repair')) {

            openRepairTypesPopUp();
        }


    });

    closeBtn.addEventListener('click', () => {
        closeRepairTypesPopUp();
    });

    document.addEventListener('click', (e) => {

        const target = e.target;
        if (!target.closest('.popup-dialog-repair-types') &&
            !target.closest('.menu-link') &&
            !target.closest('.link-list-repair')) {

    
            closeRepairTypesPopUp();
            return;
        }
    });
}



export const openRepairTypesPopUp = () => {
    const repairTypes = document.querySelector('.popup-repair-types');
    repairTypes.style.visibility = 'visible';

};


export const closeRepairTypesPopUp = () => {
    const repairTypes = document.querySelector('.popup-repair-types');
    repairTypes.style.visibility = 'hidden';

};



