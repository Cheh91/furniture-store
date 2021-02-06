'use strict'

jQuery(document).ready(function () {
    blockTabs();
    slider();
    initButton();
    tabs();
});


function blockTabs(){
    $(".top__wrapper").delegate(".top__item", "click", function(e){
            e.preventDefault();

            if ($(this).hasClass('is-active')) return false;

            let $tab = $(this).attr('href');

            $('.top__item').removeClass('is-active');
            $(this).addClass('is-active');


            $(".info__block").removeClass("is-active");
            $($tab).addClass("is-active");
            



            $(".info__slider").slick('refresh');
            $(".slider__nav").slick('refresh');
      
               
    });
}


function tabs(){
    $(".tab").on("click", function(e){
        e.preventDefault();


        if ($(this).hasClass('active')) return;

        let $tab = $(this).attr('href');

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');


        $(this).closest('.tabs__wrapper').find('.tab__item.active').removeClass("active");
        // $(".tab__item").removeClass("active");
        $($tab).addClass("active");

    });
}



function slider(){


    $('.info__slider').slick({
        asNavFor: ".slider__nav",
        fade: true,
        arrows: false,
        adaptiveWidth: false
    });


    $('.slider__nav').slick({
        slidesToShow: 5,
        vertical: true,
        centerMode: true,
        asNavFor: ".info__slider",
        focusOnSelect: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 4
              }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 5,
                    vertical: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    vertical: false,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 440,
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 380,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                }
            }
        ]
    });

    

}

function initButton(){
    $(".drop-btn").click(function(e){
        e.preventDefault();
        $(".drop-menu").toggleClass("active");
        $(".drop-btn").toggleClass("act");
    })
}

