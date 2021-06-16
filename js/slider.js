$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight:true,
        slidesToShow:5,
        slidesToScroll:1,
        speed:1000,
        easing:'ease',
        infinite:true,
        initialSlide: 0,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotHover:true,
        centerMode:true,
        variableWidth: true,
        waitForAnimate:true,
        // одоптация слайдера 
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:3, 
                }
            },{
                breakpoint:480,
                settings:{
                        slidesToShow:1, 
                       }
                }
        ],
        mobileFirst:false,
    });
});