import { closeRepairTypesPopUp } from '../ModalWindow/PopupRepairTypes/PopupRepairTypes.js';
import { closeMenuPopUp } from '../ModalWindow/MenuToggle/menuToggle.js';


export const closeAllPopup = () => {


    closeRepairTypesPopUp();
    closeMenuPopUp();

}