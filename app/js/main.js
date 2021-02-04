'use strict'

jQuery(document).ready(function () {
    // blockTabs();
    blockTabs();
    slider();
    initButton();
    Tabs();
});

function blockTabs(){
    $(".info__block").not(":first").hide();
        $(".top__wrapper .top__item").click(function(){
            $(".top__wrapper .top__item").removeClass("is-active").eq($(this).index()).addClass("is-active");
            $(".info__block").hide().eq($(this).index()).fadeIn();
        }).eq(0).addClass("is-active");
}


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


// function initTabs(){
//     $(".tab__item").not(":first").hide();
//         $(".tabs__wrapper .tab").click(function(){
//             $(".tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
//             $(".tab__item").hide().eq($(this).index()).fadeIn();
//         }).eq(0).addClass("active");

    
// }

// $(document).ready(function 
function Tabs(){
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
    });

}

function initButton(){
    $(".drop-btn").click(function(e){
        e.preventDefault();
        $(".drop-menu").toggleClass("active");
        $(".drop-btn").toggleClass("act");
    })
}









// $(function(){

//         $(".info__block").not(":first").hide();
//         $(".top__wrapper .top__item").click(function(){
//             $(".top__wrapper .top__item").removeClass("is-active").eq($(this).index()).addClass("is-active");
//             $(".info__block").hide().eq($(this).index()).fadeIn();
//         }).eq(0).addClass("is-active");


//         $('.info__slider').slick({
//             asNavFor: ".slider__nav",
//             fade: true,
//             arrows: false
//         });


//         $('.slider__nav').slick({
//             slidesToShow: 5,
//             vertical: true,
//             centerMode: true,
//             asNavFor: ".info__slider",
//             focusOnSelect: true,
//             prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
//             nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
//         });


//         $(".tab__item").not(":first").hide();
//         $(".tabs__wrapper .tab").click(function(){
//             $(".tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
//             $(".tab__item").hide().eq($(this).index()).fadeIn();
//         }).eq(0).addClass("active");


//         $(".drop-btn").click(function(e){
//             e.preventDefault();
//             $(".drop-menu").toggleClass("active");
//             $(".drop-btn").toggleClass("act");
//         })



//         // $(".top__wrapper").delegate(".top__item", "click", function(e){
//         //     e.preventDefault();

//         //     // alert("привет")
//         //     // if ($(this).hasClass('is-active')) return false;

//         //     let $tab = $(this).attr('href');

//         //     $('.top__item').removeClass('is-active');
//         //     $(this).addClass('is-active');


//         //     $(".info__block").removeClass("is-active");
//         //     $($tab).addClass("is-active");
//         // })

       

// })



