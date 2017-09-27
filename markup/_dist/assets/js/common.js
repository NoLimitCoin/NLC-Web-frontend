
/*--------------------------------------------------------------
 # Preloader
 --------------------------------------------------------------*/

// $(window).on('load',function () {
//     $(".loader_inner").fadeOut();
//     $(".loader").delay(300).fadeOut("slow");
// });

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
        $(".owl-carousel.pl-flag").owlCarousel({
            item: 4,
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
        if ($(window).width() > 991) {
            $(".nl-table-scroll").mCustomScrollbar({
                theme:"nl-theme",
                setWidth: true
            });
            $(".nl-table-scroll2").mCustomScrollbar({
                theme:"nl-theme",
                setWidth: true
            });


        } else {
            $(".nl-table-scroll").mCustomScrollbar("destroy");
            $(".nl-table-scroll2").mCustomScrollbar("destroy");
        }


    }).trigger('resize');

})(jQuery);


/*--------------------------------------------------------------
 # Demo
 --------------------------------------------------------------*/

(function ($) {


    $('.table-striped button').on('click', function(){
        if($(this).hasClass('disabled')) {
            return false;
        }
        $(this).addClass('disabled');
        var position = $(this).parents('tr').find('td:nth-child(5)').text();

        var cl = "nl-" + position + "-position";
        var imgSrc = position == 'G' ? 'assets/img/img-goalkeeper.png' : 'assets/img/img-players.png';
        var tempElement = $('<div class="nl-player-block ' + cl + ' "><img src="'+ imgSrc +'" alt="goalkeeper">\n' +
            '                    <div class="nl-player-block--data" data-position="' + position +'">\n' +
            '                      <button type="button" class="btn btn-link btn-player-close"><i class="fa fa-close" aria-hidden="true"></i></button>\n' +
            '                      <p>gronkowski</p>\n' +
            '                      <p class="data"><span>12.67</span> <span>$42000</span></p>\n' +
            '                    </div>\n' +
            '                  </div>');

        $('.player-main-block').append(tempElement);

    });

    $('body').on('click', '.nl-player-block .btn-player-close', function(){
        $(this).parents('.nl-player-block').remove();
        var position = $(this).parents('.nl-player-block').data('position');
        var needle = $('.table-striped').find('td:contains('+ position +')');
        needle.parent().find('button').removeClass('disabled');

    })

})(jQuery);





