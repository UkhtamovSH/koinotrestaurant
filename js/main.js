// js for tabs style start
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function (el) {
    el.addEventListener("click", openTabs);
});


function openTabs(el) {
    var btnTarget = el.currentTarget;
    var dataValue = btnTarget.dataset.value;

    tabContent.forEach(function (el) {
        el.classList.remove("active");
    });

    tabLinks.forEach(function (el) {
        el.classList.remove("active");
    });

    document.querySelector("#" + dataValue).classList.add("active");

    btnTarget.classList.add("active");
}

$(".tabtab").click(function () {
//        var val = $(this).find(".active").attr("data-value");
//        tabResult.innerHTML = val;

    var x = document.getElementById('deliveryShow');
    if (val == "Delivery") {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
});
// js for tabs style end


//    js for search styles
(function ($) {

    $('#search-button').on('click', function (e) {
        if ($('#search-input-container').hasClass('hdn')) {
            e.preventDefault();
            $('#search-input-container').removeClass('hdn');
            return false;
        }
    });

    $('#hide-search-input-container').on('click', function (e) {
        e.preventDefault();
        $('#search-input-container').addClass('hdn');
        return false;
    });

})(jQuery);
//    js for search styles


// Menu End OnScrollEvent Start
function openNav() {
    document.body.style.overflow = "hidden";
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.body.style.overflow = "visible";
    document.getElementById("myNav").style.height = "0%";
}

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});
// Menu End OnScrollEvent End


// Language Change Function Start
var $select1 = $('#select1'),
    $select2 = $('#select2'),
    $options = $select2.find('option');

$select1.on('change', function () {
    $select2.html($options.filter('[value="' + this.value + '"]'));
}).trigger('change');
// Language Change Function End


// owlCarousel start
$('.user_carousel_section .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.about_other_events_carousel .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// owlCarousel end


// js for via code start
const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach(
    function (code, idx) {
        code.addEventListener('keydown', function (e) {
            if (e.key >= 0 && e.key <= 9) {
                codes[idx].value = '';
                setTimeout(function () {
                    codes[idx + 1].focus();
                }, 10);
            } else if (e.key === 'Backspace') {
                setTimeout(function () {
                    codes[idx - 1].focus();
                }, 10);
            }
        });
    });


function showViaCode(id) {
    document.getElementById(id).setAttribute("class", "active");
}

document.getElementById("sendCodeInput").addEventListener(
    "click",
    function (event) {
        if (event.target.value === "SEND CODE") {
            event.target.value = "RESEND";
        }
    },
    false
);
// js for via code end


// password show/hide js start
function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function showPassword2() {
    var x = document.getElementById("confirmPassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

// password show/hide js start