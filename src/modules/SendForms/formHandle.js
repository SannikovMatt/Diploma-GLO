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
   

    errorStyles.innerHTML =
        `
    #error__box{
        top: 0;
        background-color: rgb(213 172 8 / 50%);
        top:30%;
        left:30%;
        width: 50%;
        height: 50%;
        visibility: visible;
        opacity: 1;      
        
        position: fixed;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items:center;
        text-align: center;
        z-index: 11000;
        flex-direction: column;
       

        
    }

    #error__box h2{

        color:#2f2a13;
      

    }
    #error__box:hover{

        color:green; 
        cursor:pointer;
    }

    #error__button{

        width: 244px;
        height: 44px;
        background: -webkit-gradient(linear, left top, right top, from(#F48922), to(#FFB015));
        background: linear-gradient(90deg, #F48922 0%, #FFB015 100%);
        border: none;
        border-radius: 50px;
        font-size: 19px;
        color: #ffffff;
        -webkit-box-shadow: 0 8px 35px rgba(254, 171, 23, 0.7);
        box-shadow: 0 8px 35px rgba(254, 171, 23, 0.7);
        cursor: pointer;
        margin-top:30px;
    }

    #error__button:hover {
        background: -webkit-gradient(linear, left top, right top, from(#f17c0c), to(#fba600)), 50%;
        background: linear-gradient(90deg, #f17c0c 0%, #fba600 100%), 50%;
    }
        
    
    
    `



    errorContainer.id = 'error__box';

    
    let dialogbtn = document.createElement('button');
    let dialogText = document.createElement('h2');
    dialogText.innerHTML = 'Следует согласиться с политикой конфиденциальности для заявки';
    dialogbtn.id = 'error__button';
    dialogbtn.innerHTML = 'хорошо';



    


    errorContainer.appendChild(dialogText);
    errorContainer.appendChild(dialogbtn);

    document.head.appendChild(errorStyles);
    document.body.appendChild(errorContainer);

    querySelector('')

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

        showErr(checkBox.parentElement);

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