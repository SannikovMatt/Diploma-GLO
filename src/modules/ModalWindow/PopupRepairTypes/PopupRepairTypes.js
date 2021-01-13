
export const PopupRepairTypes = ()=>{


    const  repairTypes = document.querySelector('.popup-repair-types');
    const closeBtn = repairTypes.querySelector('.close');


    closeBtn.addEventListener('click',()=>{

        closeRepairTypesPopUp();
    });
}



export const openRepairTypesPopUp = () => {
    const repairTypes = document.querySelector('.popup-repair-types');
    repairTypes.style.visibility = 'visible';

}


export const closeRepairTypesPopUp = () => {
    const repairTypes = document.querySelector('.popup-repair-types');
    repairTypes.style.visibility = 'hidden';

}

