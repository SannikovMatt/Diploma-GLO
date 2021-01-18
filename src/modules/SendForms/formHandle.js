import { closeConsultationPopup } from "../ModalWindow/PopupConsultation/PopupConsultation";
import { hidePopupThank, showPopupThank } from "../ModalWindow/PopupThank/setPopupThank";



//Находим все формы
const forms = document.querySelectorAll('form');

//Запрос к базе данных
const postData = (data) => {



    return fetch('../server.php', {

        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(data)
    })



};

const showErr = (setTo) => {


    const errorContainer = document.createElement('div');
    const errorStyles = document.createElement('style');
    errorStyles.id = 'error__style';
    errorContainer.classList.add('formula-item__descr')

    errorStyles.innerHTML =
        `
    #error__box{
        
        width:120%;
        visibility : visible;
        opacity:1;
        background : yellow;
        position:absolute;
        height:120%;
        border-radius:50px;
        display:flex;
        justify-items: center;
        align-items: center;
        text-align: center;
        left:-15%

        
    }
    #error__box:hover{

        color:green; 
        cursor:pointer;
    }
        
    
    
    `

    errorContainer.id = 'error__box';

    errorContainer.textContent = 'Чек бокс не отмечен';

    document.head.appendChild(errorStyles);
    setTo.appendChild(errorContainer);

}

//Обрабатываем "submit"
const submittingHandle = (e) => {

    e.preventDefault();

    const target = e.target;
    const checkBox = target.querySelector('[type="checkbox"]');
    const inputName = target.querySelector('[name="name"]');




    if (inputName) {
        inputName.required = "true";
    }

    if (checkBox.checked === false) {

        //showErr(checkBox.parentElement);

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
                    setTimeout(hidePopupThank, 5000);

                }
            })
    }

}

export const formHandle = () => {

    forms.forEach((form) => { form.addEventListener('submit', submittingHandle); });


}