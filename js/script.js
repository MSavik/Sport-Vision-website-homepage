$(window).on('load', function(){

    $(document).on('click', (e) => {
        if($('.dropdown-menu').css('visibility') == 'visible'){
            if(!$(e.target).is('.dropdown-menu, .dropdown-menu *')){
                $('.dropdown-menu').css({'visibility': 'hidden'})
                $('.sandwich div').css({'background-color': '#C4C4C4', 'transition': '0.3s'})
            }
        }
        else {
            if($(e.target).is('.sandwich-btn, .sandwich-btn *')){
                $('.dropdown-menu').css({'visibility': 'visible'})
                $('.sandwich div').css({'background-color': 'var(--festival)', 'transition': '0.3s'})
            }
        }
    })

    let menuItems = $('.menu-items > ul > li')
    let dropdownLists = $('.dropdown-lists > .dropdown-lists-container > .dropdown-list')

    $.each($(menuItems, dropdownLists), (index, value) => {
        $(menuItems[index]).hover(
            () => {
                $(dropdownLists[index]).css({"visibility": "visible"})
            },
            () => {
                $(dropdownLists[index]).css({"visibility": "hidden"})
            }
        )

        $(dropdownLists[index]).hover(
            () => {
                $(dropdownLists[index]).css({"visibility": "visible"})
            },
            () => {
                $(dropdownLists[index]).css({"visibility": "hidden"})
            }
        )
    })

    $('.owl-carousel-banner').owlCarousel({
        nav: false,
        dots: false,
        mouseDrag: false,
        touchDrag: false,
        margin: 0,
        items: 1,

        responsive: {
            1920: {
                dots: true,
                rewind: true,
                autoplay: true,
                autoplayTimeout: 10000,
                autoplaySpeed: 1000,
                dotsSpeed: 1000
            }
        }
    })

    $('.owl-carousel-1').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navSpeed: 500,
        navText: [
            "<img src='./media/Desktop/Arrow-left.svg' alt='<'>",
            "<img src='./media/Desktop/Arrow-right.svg' alt='>'>"
        ],

        responsive: {
            0: {
                items: 3,
                margin: 20
            },
            1024: {
                margin: 60
            },
            1920: {
                items: 4,
                margin: 100
            }
        }
    })

    $('.owl-carousel-2').owlCarousel({
        center: true,
        loop: true,
        dots: false,
        rewind: false,
        startPosition: 1,
        autoWidth: true,
        navSpeed: 500,
        
        responsive: {
            0: {
                margin: 17.56,
                nav: false
            },
            1024: {
                margin: 50
            },
            1920: {
                margin: 50,
                nav: true,
                navText: [
                    "<img src='./media/Desktop/Arrow-left.svg' alt='<'>",
                    "<img src='./media/Desktop/Arrow-right.svg' alt='>'>"
                ]
            }
        }
    })

})

