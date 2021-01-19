import { setDesignMainTabs } from "../SlidersAndTabs/Designs/main/Tabs/setDesignMainTabs";
import { getData } from "./getData";

let popUpRepairTypes;




const setTabs = (recievedTabs) => {

    //Находим Контйнер для таблицы
    const allTablesContainer = document.querySelector('.popup-repair-types-content-table');
    //Находим контейнер для Табов
    let tabsContainer = popUpRepairTypes.querySelector('.nav-list-popup-repair');

    //Создаем фрагмент для табов
    let templateBtns = document.createDocumentFragment();
    //Создаем фрагмент для таблиц
    let templateTable = document.createDocumentFragment();

    //Перебираем все табы
    recievedTabs.forEach((item, index) => {

        let tbList = document.createElement('table');
        tbList.classList.add('popup-repair-types-content-table__list');

        //Если таб первый,делаем его активным
        if (index === 0) {
            tbList.classList.add('active__slide');
        }

        const { title, priceList } = item;


        //Создаем элемент таба
        let btn = document.createElement('button');
        btn.classList = 'button_o popup-repair-types-nav__item';
        btn.innerHTML = title;

        templateBtns.appendChild(btn);

        //Создаем элемент для хранения данных таблицы
        let tBody = document.createElement('tbody');

        //Перебираем всю таблицы для заданного выше таба
        priceList.forEach(tableElement => {

            const { typeService, units, cost } = tableElement;

            //Проверям units
            let unitsT;
            if (units === 'м2') {
                unitsT = `м<sup>2</sup>`;
            } else if (units === 'шт') {
                unitsT = 'шт';
            } else if (units === 'п.м') {
                unitsT = 'п.м';

            } else if (units === 'п.м.') {
                unitsT = 'п.м';

            } else if (units === 'час') {
                unitsT = 'час';

            }

            //Создаем строку в таблице с данными 
            let tbItem = `
          <tr class="mobile-row showHide">
          <td class="repair-types-name">${typeService}</td>
          <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
          <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
          <td class="repair-types-value">${unitsT}</td>
          <td class="repair-types-value">${cost}руб.</td>
        </tr>
          
          `
            //Добавляем в таблицу данного таба тип услуги
            tBody.insertAdjacentHTML('beforeend', tbItem);
        });

        //Добавляем в таблицу все данные которые получили
        tbList.insertAdjacentElement('beforeend', tBody);

        //Добавляем таблицу в общий контейнер
        templateTable.appendChild(tbList);

    });

    //Добавляем Все таблицы на страницу
    allTablesContainer.innerHTML = '';
    allTablesContainer.appendChild(templateTable);

    //Добавляем все табы(кнопки) на страницу
    tabsContainer.innerHTML = '';
    tabsContainer.appendChild(templateBtns);

}

const dateToString = (date) => {
    let splitedDAte = date.split('.');
    let day = splitedDAte[0];
    let month = parseInt(splitedDAte[1]);
    let year = splitedDAte[2];


    let arrMonthes = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентяря',
        'октября',
        'ноября',
        'декабря'];

    return `${day}  ${arrMonthes[month]}  ${year}`;

}
const setDate = (date, popUp) => {

    const dateContainer = popUp.querySelector('.popup-repair-types-content__head-date');

    let formatedDate = dateToString(date);

    dateContainer.innerHTML = `${formatedDate} <i><i></i></i>`;
};





const setTableByData = (data, popUp) => {

    let date;
    let allTabs = [];

    for (let item of data) {

        if (item.date) {
            date = item.date;
        } else {
            allTabs.push(item)
        }
    }

    setDate(date,popUp);
    setTabs(allTabs);

}


export const setDataRepair = (popUp) => {

    getData()
        .then(response => {
            popUpRepairTypes = popUp;
            setTableByData(response, popUp);
        })


}