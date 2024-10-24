AOS.init();

const reviewsSlider = () => {
    var swiper = new Swiper(".mySwipersec", {
        cssMode: true,
        centerSlide: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            300: {
                slidesPerView: 1.1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 1.8,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            1025: {
                slidesPerView: 3.1,
                spaceBetween: 20,
            }
        },
        mousewheel: true,
        keyboard: true,
    });
}
reviewsSlider();

const hoverSliderReview = () => {
    const serBoxes = document.querySelectorAll('.rev-box-main');
    serBoxes.forEach((serBox) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        serBox.appendChild(dot);

        serBox.addEventListener('mouseenter', () => {
            serBox.classList.add('hovered');
            dot.style.opacity = '1';
        });

        serBox.addEventListener('mouseleave', () => {
            serBox.classList.remove('hovered');
            dot.style.opacity = '0';
        });

        serBox.addEventListener('mousemove', (event) => {
            const rect = serBox.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
        });
    });
}
hoverSliderReview();

const sliderBanners = () => {
    const swiper1 = new Swiper('.swiper1', {
        spaceBetween: 30,
        slidesPerView: 4,
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            300: {
                spaceBetween: 10,
            },
            576: {
                spaceBetween: 20,
            },
        },
        speed: 3000,
    });

    const swiper2 = new Swiper('.swiper2', {
        spaceBetween: 30,
        slidesPerView: 4,
        direction: 'horizontal',
        loop: true,
        breakpoints: {
            300: {
                spaceBetween: 10,
            },
            576: {
                spaceBetween: 20,
            },
        },
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        speed: 3000,
    });

    const swiper3 = new Swiper('.swiper3', {
        spaceBetween: 30,
        slidesPerView: 4,
        direction: 'horizontal',
        loop: true,
        breakpoints: {
            300: {
                spaceBetween: 10,
            },
            576: {
                spaceBetween: 20,
            },
        },
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 3000,
    });

    const swiper4 = new Swiper('.swiper4', {
        spaceBetween: 30,
        slidesPerView: 4,
        direction: 'horizontal',
        loop: true,
        breakpoints: {
            300: {
                spaceBetween: 10,
            },
            576: {
                spaceBetween: 20,
            },
        },
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
        },
        speed: 3000,
    });
}
sliderBanners();

const mouseaMover = () => {
    const main = document.getElementById("main");
    const dotmain = document.getElementById("dotmain");

    main.addEventListener("mousemove", function (event) {
        const rect = main.getBoundingClientRect(); // Get the dimensions of the main element
        const x = event.clientX - rect.left - dotmain.offsetWidth / 2; // Center the circle
        const y = event.clientY - rect.top - dotmain.offsetHeight / 2; // Center the circle

        dotmain.style.transform = `translate(${x}px, ${y}px)`; // Use transform for smoother movement
        dotmain.style.opacity = '1'; // Ensure the circle is visible
    });
};
mouseaMover();

const gsapAnim = () => {
    gsap.from('.banner-content h1 span , .banner-content p', {
        opacity: 0,
        y: 100,
        duration: .8,
        stagger: .4
    })

    // Create a timeline
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.trans-box',
            start: "top 100%",
            end: "bottom 0%",
            scrub: true, // Allows for a smooth animation as you scroll
            toggleActions: "play none none reset"
        }
    });

    // Add animations to the timeline with easing
    tl.from('.trans-box:nth-child(1)', {
        y: -250,
        duration: 1.5, // Adjusted duration for smoother effect
        ease: "power3.out" // Smoother easing function
    });

    tl.from('.trans-box:nth-child(2)', {
        y: 350,
        duration: 1.5,
        ease: "power3.out" // Consistent easing
    }, "-=1.2"); // Adjusted overlap for smoother flow

    tl.from('.trans-box:nth-child(3)', {
        y: -150,
        duration: 1.5,
        ease: "power3.out" // Consistent easing
    }, "-=1.2"); // Adjusted overlap for smoother flow    
}

gsapAnim();












