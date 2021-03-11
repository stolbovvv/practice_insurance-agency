window.addEventListener('DOMContentLoaded', () => {

    const menuMobile = document.querySelector('.menu__list_mobile');
    const menuItem = document.querySelectorAll('.menu__list-item-link');
    const burger = document.querySelector('.menu__burger');

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
})