


const mainContainer = document.querySelector('.nav-list-popup-repair');
const repairTitle = document.querySelector('.popup-repair-types-content__head-title');

const allTablesContainer = document.querySelector('.popup-repair-types-content-table');










const getBtnIndex = (clickedBtn) => {

    let allBtns = clickedBtn.parentElement.querySelectorAll('.button_o');
    let index;
    allBtns.forEach((btn, i) => {
        if (btn === clickedBtn) {
            index = i;
        }

    });

    return index;
}



const setTitle = (btn) => {

    repairTitle.textContent = btn.textContent;

}

const setTable = (btnIndex) => {

    let allTables = allTablesContainer.querySelectorAll('.popup-repair-types-content-table__list');

    allTables.forEach((table, i) => {

        if (btnIndex === i) {
            table.classList.add('active__slide');
        } else {
            table.classList.remove('active__slide');
        }

    })

}
export const setRepairPopUpTab = () => {

    mainContainer.addEventListener('click', (e) => {


        let target = e.target.closest('.button_o');

        if (!target) { return; }

        let btnIndex = getBtnIndex(target);

        setTitle(target);
        setTable(btnIndex);


    })

}