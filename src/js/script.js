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
    selects.forEach(item => {
        item.addEventListener('click', () => item.classList.toggle('select_active'), true)
        console.log(item);
    })

    const secletLists = document.querySelectorAll('.select__list-item');
    secletLists.forEach(item => {
        item.addEventListener('click', () => {
            item.parentElement.parentElement.firstElementChild.value = item.innerHTML;
            item.parentElement.parentElement.parentElement.classList.remove('select_active');
        })
    })

})