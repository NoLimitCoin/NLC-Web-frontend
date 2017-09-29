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

$(window).on('load', function () {
    $(".owl-carousel.main-carousel").owlCarousel({
        items: 1,
        loop: true,
        dots: true
    });

    $(document).ready(function () {
        $(".owl-carousel.pl-teams").owlCarousel({
            loop: true,
            nav: true,
            navText: [
                '<div class="icon-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
                '<div class="icon-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
            ],
            autoWidth: true,
            margin: 25,
        });
        $(".owl-carousel.pl-flag").owlCarousel({
            item: 4,
            loop: true,
            nav: false,
            navText: [
                '<div class="icon-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
                '<div class="icon-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>'
            ],
            autoWidth: true,
            margin: 25,
        });
        $(".owl-carousel.enterContests").owlCarousel({
            item: 3,
            loop: true,
            nav: true,
            navText: [
                '<div class="icon-left"><i class="fa fa-caret-left" aria-hidden="true"></i></div>',
                '<div class="icon-right"><i class="fa fa-caret-right" aria-hidden="true"></i></div>'
            ],
            margin: 10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                400:{
                    items:2
                },
                600:{
                    items:3
                }
            }
        });

    });
});


/*--------------------------------------------------------------
 # Fancybox Video
 --------------------------------------------------------------*/

$(function () {
    $('#video a').fancybox({});
});

/*--------------------------------------------------------------
 # Forms Data
 --------------------------------------------------------------*/

(function ($) {

    var isShowPass = false;
    var options = [{'type': 'text', 'text': 'HIDE'}, {'type': 'password', 'text': 'SHOW'}];
    $('.show-password').on('click', function () {
        var data = options[+isShowPass];
        $(this).text(data.text).prev().attr('type', data.type).toggleClass('visible-password');
        isShowPass = !isShowPass;
    });

    var onloadCallback = function () {
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
                theme: "nl-theme",
                setWidth: true,
            });
            $(".nl-table-scroll2").mCustomScrollbar({
                theme: "nl-theme",
                setWidth: true,
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

    var $nlPlayerTable = $('.nl-create-team-table .table-striped'),
        $nlTeamListTable = $('.nl-team-list .table-striped'),
        $nlPlayerBtn = $nlPlayerTable.find('button'),
        $nlTeamListBtn = $nlTeamListTable.find('button');


    var $nlMobTable = $('.nl-mob-table');
    var $nlMobTableBtn = $nlMobTable.find('button');

    function add() {
        var imgSrc;
        $(this).addClass('disabled');
        var position = $(this)
            .parents('tr')
            .find('td:nth-child(5)')
            .text();

        if (!position) {
            position = $(this)
                .parent()
                .prev()
                .text();

            $nlPlayerTable
                .find('td:contains(' + position + ')')
                .parent()
                .find('button')
                .addClass('disabled');

        }else{
            $nlMobTable
                .find('p.nl-position:contains(' + position + ')')
                .next()
                .find('button')
                .addClass('disabled');
        }

        imgSrc = position == 'G' ? 'assets/img/img-goalkeeper.png' : 'assets/img/img-players.png';

        if($('.nl-team-field').hasClass('football')){
            imgSrc = 'assets/img/football/img-'+ position +'.png';
        }
        var cl = "nl-" + position + "-position";
        var tempElement = $('<div class="nl-player-block ' + cl + ' " data-position="' + position + '"><img src="' + imgSrc + '" alt="goalkeeper">\n' +
            '<div class="nl-player-block--data" >\n' +
            '<button type="button" class="btn btn-link btn-player-close"><i class="fa fa-close" aria-hidden="true"></i></button>\n' +
            '<p>gronkowski</p>\n' +
            '<p class="data"><span>12.67</span> <span>$42000</span></p>\n' +
            '</div>\n' +
            '</div>');

        $('.player-main-block').append(tempElement);
        $nlTeamListTable
            .find('td:contains(' + position + ')')
            .parent()
            .find('button')
            .removeClass('disabled');

    }

    $nlPlayerBtn.on('click', function () {
        // if ($(this).hasClass('disabled')) {
        //     return false;
        // }
        add.call(this);
    });

    $nlTeamListBtn.on('click', function () {
        // if ($(this).hasClass('disabled')) {
        //     return false;
        // }
        $(this).addClass('disabled');
        var position = $(this)
            .parents('tr')
            .find('td:nth-child(2)')
            .text();
        $nlPlayerTable
            .find('td:contains(' + position + ')')
            .parent()
            .find('button')
            .removeClass('disabled');
        $('.nl-team-field')
            .find("[data-position='" + position + "']")
            .find('.btn-player-close')
            .click();
    });

    $nlMobTableBtn.on('click', function () {
        if ($(this).hasClass('disabled')) {
            return false;
        }
        add.call(this);
    });

    $('body').on('click', '.nl-player-block .btn-player-close', function () {

        $(this)
            .parents('.nl-player-block')
            .remove();
        var position = $(this)
            .parents('.nl-player-block')
            .data('position');

        $nlPlayerTable
            .find('td:contains(' + position + ')')
            .parent()
            .find('button')
            .removeClass('disabled');

        $nlTeamListTable
            .find('td:contains(' + position + ')')
            .parent()
            .find('button')
            .addClass('disabled');

        $nlMobTable
            .find('p.nl-position:contains(' + position + ')')
            .next()
            .find('button')
            .removeClass('disabled');
    });


    function switchAreas(showEl, hideEl) {
        $(showEl).addClass('visible').removeClass('hide');
        $(hideEl).addClass('hide').removeClass('visible');
        $(this).addClass('active').siblings().removeClass('active');
    }

    $('.field-view-btn').on('click', function () {
        switchAreas.call(this, '.nl-team-field', '.nl-team-list');
    });

    $('.list-view-btn').on('click', function () {
        switchAreas.call(this, '.nl-team-list', '.nl-team-field');
    });



    /*
    * Menu
     */

   $('body').on('click', '.mob-nav-toggle', function () {
      var menu =$(this).attr('data-target');
      $(menu).slideToggle();
   });
})(jQuery);





