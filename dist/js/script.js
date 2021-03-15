window.addEventListener('DOMContentLoaded', () => {

    const menuMobile = document.querySelector('.menu__list_mobile');
    const menuItem = document.querySelectorAll('.menu__list-item-link');
    const burger = document.querySelector('.menu__burger');

    const selectValue = document.querySelectorAll('.form__select-wrapper');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menuMobile.classList.toggle('active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('active');
            menuMobile.classList.toggle('active');
        })
    })

    selectValue.forEach(item => {
        item.firstElementChild.addEventListener('focus', () => {
            item.classList.add('form__select-wrapper-focus');
        })
        item.firstElementChild.addEventListener('blur', () => {
            item.classList.remove('form__select-wrapper-focus');
        })
    })

})