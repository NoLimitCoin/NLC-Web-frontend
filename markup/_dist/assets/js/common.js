
/*--------------------------------------------------------------
 # Preloader
 --------------------------------------------------------------*/

$(window).on('load',function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(300).fadeOut("slow");
});

/*--------------------------------------------------------------
 # Own Carusel
 --------------------------------------------------------------*/

$(window).on('load',function (){
    $(".owl-carousel.main-carousel").owlCarousel({
        items:1,
        loop:true,
        dots: true
    });

    $(document).ready(function(){
        $(".owl-carousel.pl-teams").owlCarousel({
            loop:true,
            nav:true,
            navText: [
                '<div class="icon-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
                '<div class="icon-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
            ],
            autoWidth:true,
            margin: 25,
        });
    });
});


/*--------------------------------------------------------------
 # Fancybox Video
 --------------------------------------------------------------*/

$(function () {
    $('#video a').fancybox({ });
});

/*--------------------------------------------------------------
 # Forms Data
 --------------------------------------------------------------*/

(function($){

    var isShowPass = false;
    var options = [{'type': 'text', 'text': 'HIDE'}, {'type': 'password', 'text': 'SHOW'}];
    $('.show-password').on('click', function () {
        var data = options[+isShowPass];
        $(this).text(data.text).prev().attr('type', data.type).toggleClass('visible-password');
        isShowPass = !isShowPass;
    });

    var onloadCallback = function() {
        console.log("grecaptcha is ready!");
    };

})(jQuery);

/*--------------------------------------------------------------
 # Custom Scroll
 --------------------------------------------------------------*/

(function ($) {
    $(window).on("load", function () {
        //if ($('body').hasClass('ck-slider')) {
        if ($(window).width() > 991) {
            $(".nl-table-scroll").mCustomScrollbar({
                theme:"nl-theme",
                setWidth: true,
            });
        } else {
            $(".nl-table-scroll").mCustomScrollbar("destroy");
        }
        //}

    }).trigger('resize');

})(jQuery);


// $('.navbar-toggler').on('click', function () {
//    if($(this).val()==true){
//        console.log($(this).val());
//    }
// });