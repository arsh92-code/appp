document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.querySelector('.back-btn');

    // Navigate back to the previous page or to all.user.html
    backBtn.addEventListener('click', () => {
        if (document.referrer) {
            window.history.back();  // Go back if there's a referrer
        } else {
            window.location.href = 'profile.html';  // Redirect to all.user.html if no referrer
        }
    });
});


$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        center: true,
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayHoverPause:true,
        smartSpeed: 1500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

})