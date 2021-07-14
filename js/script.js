window.onscroll = function() {
    scrollFunction()
};

function scrollFunction(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("navba").style.backgroundColor = "black"
        document.getElementById("navbar").style.display = "none"
    }else{
        document.getElementById("navba").style.backgroundColor = "#3330"
        document.getElementById("navbar").style.display = "block"
    }
}


/**************  Slick slider         ***************/

$(document).ready(function(){
    $('.partners-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breaakpoint: 768,
            settings: {
                slidesToShow: 4
            }

        }, {
            breaakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});