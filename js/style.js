$(function() {


    // Preloader Spin

    setTimeout(function() {
        $('.loader-wrapper').fadeToggle();
    }, 1000);



    //theme-toggler

    $('.switcher-gear').on('click', function() {
        $('.color-switcher').toggleClass('active');

    });


    // let themeColor = document.querySelectorAll('.theme-toggler span');
    // themeColor.forEach(color => color.addEventListener('click', () => {
    //     let background = color.getAttribute('data-color');

    //     document.body.style.backgroundColor = background;
    //     document.body.style.backgroundImage = 'linear-gradient(' + background + ')';

    //     localStorage.setItem("pageColor", color.getAttribute("data-color"));


    // }));

    // let getTheme = (localStorage.getItem("pageColor"));

    // document.body.style.backgroundImage = 'linear-gradient(' + getTheme + ')';




    $('.theme-toggler span').each(function() {
        $(this).on('click', () => {

            let background = $(this).attr('data-color');
            $('body').css('background-image', 'linear-gradient(' + background + ')');

            localStorage.setItem('PageColor', $(this).attr('data-color'));

        });
    });

    let getTheme = localStorage.getItem('PageColor');
    $('body').css('background-image', 'linear-gradient(' + getTheme + ')');








    // About Animate

    const aboutobserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('.animate1')[0].classList.add('show');
                $('.animate1')[1].classList.add('show');
                $('.animate1')[2].classList.add('show');
            } else {
                $('.animate1')[0].classList.remove('show');
                $('.animate1')[1].classList.remove('show');
                $('.animate1')[2].classList.remove('show');
            }
        })

    });

    aboutobserver.observe($('.about-me')[0]);

    // Skill Animate

    const skillobserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('.skill-animate')[0].classList.add('show-skills');

            } else {
                $('.skill-animate')[0].classList.remove('show-skills');

            }
        })

    });

    skillobserver.observe($('.skills')[0]);


    // Contact Me Animate

    const contactObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $('.cont-animate')[0].classList.add('fadeInLeft');
                $('.cont-animate')[1].classList.add('fadeInUp');
                $('.cont-animate')[2].classList.add('fadeInUp');
                $('.cont-animate')[3].classList.add('fadeInRight');
                $('.cont-animate')[4].classList.add('fadeInUp');

            }

        })
    });

    contactObserver.observe($('.contact-me')[0]);



    // Animated Progress

    $('.progress-bar span').each(function() {
        $(this).animate({
            width: $(this).attr('data-progress')
        }, 2000)

    });

    // Owl Carousel

    if ($('.owl-carousel').length) {
        $('.owl-carousel').owlCarousel({
            animateIn: true,
            loop: true,
            nav: true,
            dots: true,
            items: 3,
            margin: 30,
            autoplay: true,
            smartSpeed: 700,
            autoplayHoverPause: true,
            autoplayTimeout: 6000,

            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                460: {
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 1,
                    margin: 50
                },
                992: {
                    items: 2,
                    margin: 150
                }
            }
        });
    }
});


// TypeWritter

var typed = new Typed('.auto-type', {
    strings: ['a Full Stack Developer'],
    typeSpeed: 150,
    backSpeep: 150,
    loop: true

});