
export const PopupRepairTypes = ()=>{


    const  repairTypes = document.querySelector('.popup-repair-types');
    const closeBtn = repairTypes.querySelector('.close');


    closeBtn.addEventListener('click',()=>{
        closeRepairTypesPopUp();
    });

    document.addEventListener('click',(e)=>{

       const target = e.target;       
       if(!target.closest('.popup-dialog-repair-types') && !target.closest('.menu-link')){
           closeRepairTypesPopUp();
           return;
       }
    })
}



export const openRepairTypesPopUp = () => {
    const repairTypes = document.querySelector('.popup-repair-types');
    repairTypes.style.visibility = 'visible';

}


export const closeRepairTypesPopUp = () => {
    const repairTypes = document.querySelector('.popup-repair-types');
    repairTypes.style.visibility = 'hidden';

}



