// jQuery for toggling mobile menu

$('#container').click(function () {
    $('#mobile-menu').hide();
});

$(document).ready(function () {
    $('#menu-toggle').click(function () {
        $('#mobile-menu').toggle();
    });
});

// Hide mobile menu on window resize
$(window).resize(function () {
    if ($(window).width() >= 768) {
        $('#mobile-menu').hide();
    }
});

// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Set dynamic name and initialize Typed.js
$(document).ready(function () {
    const userName = "Dimitar Georgiev"; // You can set this dynamically if needed
    $('#dynamic-name').text(userName);

    new Typed('.typed', {
        strings: [".Net Developer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});

document.querySelector('#movies-dg').addEventListener('click', () => {
    window.open('https://moviedg.devmania.click');
});

document.querySelector('#clothing-store').addEventListener('click', () => {
    window.open('https://github.com/ItsAlphaHelix/Clothing-Store');
});

document.querySelector('#tracking-weather').addEventListener('click', () => {
    window.open('https://github.com/ItsAlphaHelix/Tracking-Weather');
});