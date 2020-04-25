$(document).ready(function(){
	
    $(function() {
        $(".js-click-overlay").on('click touch', function() {
            // traverse upwards to find .item then find the project overlay
            $(this).parents(".item").find(".js-project-overlay").addClass("js-project-overlay-open");
        });

        $(".js-close").on('click touch', function() {
            // traverse upwards again to find the project overlay then close it
            $(this).parents(".js-project-overlay").removeClass("js-project-overlay-open");
        });
    })

    $('.gallery-content a').simpleLightbox();

    

    // About Slider
    $('.about-slider').slick({
        centerMode: true,
        autoplay:true,
        centerPadding: '20px',
        arrows: false,
        slidesToShow: 3,
        autoplaySpeed: 1,
        speed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '50px',
                    slidesToShow: 2
                }

            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    speed: 300,
                    autoplaySpeed: 3000,
                    slidesToShow: 1
                }
            }
        ]
    });
});