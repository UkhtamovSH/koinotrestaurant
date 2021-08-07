//    nav section start
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function openNavModalOne() {
    document.getElementById("navigation_modal_one").style.height = "100%";
}

function closeNavModalOne() {
    document.getElementById("navigation_modal_one").style.height = "0%";
}

function openNavModalTwo() {
    document.getElementById("navigation_modal_two").style.height = "100%";
}

function closeNavModalTwo() {
    document.getElementById("navigation_modal_two").style.height = "0%";
}

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});
//    nav section end