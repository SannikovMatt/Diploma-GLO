import { getCurrentSlidesSet } from "../RepairTypesSliders/mainslider/setRepairTypesMainSlider";


const allTabs = document.querySelector('.nav-list-repair');
const allTabsBtns = allTabs.querySelectorAll('.button_o');




export let currentTab;


const checkCurrentActiveTab = () => {
    allTabsBtns.forEach((btn, index) => {

        if (btn.classList.contains('active')) {
            currentTab = index;
        }
    })
}

const setTabPosition = (btnTocheck) => {

    allTabsBtns.forEach((btn, index) => {

        if (btn === btnTocheck) {
            currentTab = index;
            getCurrentSlidesSet();

        }
    });
};



const tabClickHandle = (e) => {

    const target = e.target;

    if (target.classList.contains('active')) {
        return;
    }
    allTabsBtns[currentTab].classList.remove('active');
    setTabPosition(target);
    target.classList.add('active');
    checkCurrentActiveTab();

}


export const setRepairTypesTabs = () => {


    allTabsBtns.forEach((btn) => {
        btn.addEventListener('click', tabClickHandle)
    })
    checkCurrentActiveTab();

};