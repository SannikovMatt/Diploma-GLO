import { setNewSlidesSet } from "../Sliders/designMainSlider/setDesignMainSlider";


let designStyles = document.querySelectorAll('.designs-slider > div');
const mainWraper = document.querySelector('.designs');

let activeStyle;
let previousActiveStyle;

const setFirstView = (style) => {

    const firstSlide = style.querySelectorAll('.designs-slider__style-slide')[0];

    firstSlide.classList.add('active__slide');

}
export const findActiveStyle = () => {
    designStyles = document.querySelectorAll('.designs-slider > div');

    designStyles.forEach((style) => {
        if (style.classList.contains('active__slide')) {
            if (activeStyle !== style) {
                previousActiveStyle = activeStyle;
                setFirstView(style);

            }
            activeStyle = style;


        }
    })

    setNewSlidesSet(activeStyle);


}

const getClickedPreviewTabs = (previewBlock) => {

    const blockTabs = previewBlock.querySelectorAll('.preview-block__item');


    return blockTabs;
}
const getIndexOfTab = (allTabs, clickedTab) => {

    let index;
    allTabs.forEach((tab, i) => {

        if (tab === clickedTab) {
            index = i;
        }
    });

    return index;

}
const getActiveAllSlides = (curStyle) => {

    const allSlidesOfStyle = curStyle.querySelectorAll('.designs-slider__style-slide');

    return allSlidesOfStyle;

}
const clearAllCurrentActivities = (clickedBlock, styles) => {

    const allInners = clickedBlock.querySelectorAll('.preview-block__item-inner');

    allInners.forEach((inner) => {

        if (inner.classList.contains('preview_active')) {
            inner.classList.remove('preview_active')
        }

    })

    styles.forEach((slide) => {

        if (slide.classList.contains('active__slide')) {

            slide.classList.remove('active__slide');
        }

    })
}
const getPreviewClickedInner = (clickedPreviewTab) => {

    const inner = clickedPreviewTab.querySelector('.preview-block__item-inner');

    return inner;

}
export const setDesignPreviewTabs = () => {

    findActiveStyle();


    mainWraper.addEventListener('click', (e) => {

        const target = e.target;
        const clickedPreviewBlock = target.closest('.preview-block');

        if (!clickedPreviewBlock) {
            return;
        }


        findActiveStyle();

        const allTabs = getClickedPreviewTabs(clickedPreviewBlock);
        const indexOfClickedTab = getIndexOfTab(allTabs, target.closest('.preview-block__item'));
        const allSlidesOfStyle = getActiveAllSlides(activeStyle);
        const activePreviewInner = getPreviewClickedInner(allTabs[indexOfClickedTab]);

        clearAllCurrentActivities(clickedPreviewBlock, allSlidesOfStyle);

        allSlidesOfStyle[indexOfClickedTab].classList.add('active__slide');
        activePreviewInner.classList.add('preview_active');
    })

}