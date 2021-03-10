window.addEventListener('DOMContentLoaded', () => {

    const menuMobile = document.querySelector('.menu__list_mobile');
    const menuItem = document.querySelector('.menu__list-item-link');
    const burger = document.querySelector('.menu__burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menuMobile.classList.toggle('active');
    });

    // menuItem.forEach(item => {
    //     console.log(item)
    //     item.addEventListener('click', () => {
    //         burger.classList.toggle('burger_active');
    //         menuMobile.classList.toggle('menu_active');
    //      })
    // })

    console.log(menuItem)
})