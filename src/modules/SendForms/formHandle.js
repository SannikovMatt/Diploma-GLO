import { closeConsultationPopup } from "../ModalWindow/PopupConsultation/PopupConsultation";
import { showPopupThank } from "../ModalWindow/PopupThank/setPopupThank";

//Находим все формы
const forms = document.querySelectorAll('form');

//Запрос к базе данных
const postData = (data) => {



    return fetch('../../../server.php', {

        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(data)
    })



};

//Обрабатываем "submit"
const submittingHandle = (e) => {

    e.preventDefault();
   
    const target = e.target;
    const checkBox = target.querySelector('[type="checkbox"]');    
    const inputName = target.querySelector('[name="name"]');

    
    if(inputName){
        inputName.required = "true";
    }

    if (checkBox.checked===false) {
        console.error('Unchecked Checkox');
        return;
    }

    const formData = new FormData(target);
    const body = {};
    for (let value of formData) {

        if (!(value[1].trim() === '')) {
            body[value[0]] = value[1];

        } else {
            console.log('Field is empty');
            break;

        }
    }

    //Проверям была ли заполнена форма
    if (body) {

        
        postData(body)
            .then(response => {
                if (response.ok) {
                    target.reset();
                    closeConsultationPopup();

                    //Показываем окно благодарности при успешной отпрвке
                    showPopupThank();
                }
            })
    }

}

export const formHandle = () => {

    forms.forEach((form) => { form.addEventListener('submit', submittingHandle); });


}