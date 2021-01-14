import { maskPhone } from './maskphone.js';



const inputPhone = document.querySelectorAll('[name="phone"]');
export const maskPhoneAllFields = () => inputPhone.forEach((item) =>maskPhone(`#${item.id}`));
