// Preloader
$(window).on('load', function () {
    $('.preloader img').fadeOut();
    $('.preloader').delay(400).fadeOut();
});

// Scroll Back To Top Button, opacity effect and navbar fixed
$(window).scroll(function () {
    if ($(this).scrollTop() >= 20) {
        $('.go-to-top').fadeIn(200);
    }
    else {
        $('.go-to-top').fadeOut(200);
    }
});
$('.go-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

// aos animate
AOS.init();

// Do not repeat the aos animation when scrolling again
window.addEventListener('scroll', function () {
    x = document.querySelectorAll(".aos-init");
    for (i = 0; i < x.length; i++) {
        if (x[i].classList.contains('aos-animate')) {
            x[i].dataset.aos = '';
        }
    }
})

// Navbar section form
$(".navbar-section svg").click(function () {
    $(".navbar-search-form").toggleClass('now-visible');
});

$(".navbar-search-form .icon-x").click(function () {
    $(".navbar-search-form").removeClass('now-visible');
});

$(function () {
    // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.dropdown').on('hide.bs.dropdown', function (e) {
        e.preventDefault();
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function () {
            $('.dropdown').removeClass('show');
            $('.dropdown-menu').removeClass('show');
            $('.dropdown').find('.dropdown-toggle').attr('aria-expanded', 'false');
        });
    });
});

// hamburger menu icon
const hamburger = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".mobile-menu");

// click hamburger menu icon
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("change");
    navMenu.classList.toggle("active");
})

// when clicking outside the area
$(".mobile-menu").click(function (event) {
    if ($(event.target).is(this)) {
        $(this).removeClass("active")
        $(".menu-icon").removeClass("change")
    }
})

// when clicking x-mark for closing menu mobile
$(".x-mark").click(function () {
    $(".mobile-menu").removeClass("active")
    $(".menu-icon").removeClass("change")
})