window.addEventListener('DOMContentLoaded', () => {

    // const menu = document.querySelector('.menu'),
    //     menuItem = document.querySelectorAll('.menu_item'),
    //     burger = document.querySelector('.burger');

    // burger.addEventListener('click', () => {
    //     burger.classList.toggle('burger_active');
    //     menu.classList.toggle('menu_active');
    // });

    // menuItem.forEach(item => {
    //     item.addEventListener('click', () => {
    //         burger.classList.toggle('burger_active');
    //         menu.classList.toggle('menu_active');
    //     })
    // })

    const selects = document.querySelectorAll('.select');
    const contactTime = document.getElementById('contact-time');
    const contactPricePlan = document.getElementById('contact-price-plan');
    const secletLists = document.querySelectorAll('.select__list-item');



    selects.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('select_active');
        })
    })

    secletLists.forEach(item => {
        item.addEventListener('click', () => {
            contactTime.value = item.innerHTML;
        })
    })
    secletLists.forEach(item => {
        item.addEventListener('click', () => {
            contactPricePlan.value = item.innerHTML;
        })
    })
})