AOS.init();

const reviewsSlider = () => {
    var swiper = new Swiper(".mySwipersec", {
        loop: true,
        simulateTouch: true,
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
            },

            1800: {
                slidesPerView: 4.1,
                spaceBetween: 20,
            },

            2200: {
                slidesPerView: 5.1,
                spaceBetween: 20,
            },

            2600: {
                slidesPerView: 7.1,
                spaceBetween: 20,
            },
        },
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
        speed: 2000,
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
        speed: 2000,
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
        speed: 2000,
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
        speed: 2000,
    });
}
sliderBanners();
const mouseaMover = () => {
    const main = document.getElementById("main");
    const dotmain = document.getElementById("dotmain");

    const moveDot = (x, y) => {
        dotmain.style.transform = `translate(${x}px, ${y}px)`; // Move the circle
        dotmain.style.opacity = '1'; // Ensure the circle is visible
    };

    // Handle mouse movement
    main.addEventListener("mousemove", function (event) {
        const rect = main.getBoundingClientRect(); // Get the dimensions of the main element
        const x = event.clientX - rect.left - dotmain.offsetWidth / 2; // Center the circle
        const y = event.clientY - rect.top - dotmain.offsetHeight / 2; // Center the circle
        moveDot(x, y);
    });

    // Handle touch movement for mobile
    main.addEventListener("touchmove", function (event) {
        const touch = event.touches[0]; // Get the first touch point
        const rect = main.getBoundingClientRect();
        const x = touch.clientX - rect.left - dotmain.offsetWidth / 2; // Center the circle
        const y = touch.clientY - rect.top - dotmain.offsetHeight / 2; // Center the circle
        moveDot(x, y);
    });
};

// Initialize the mouse mover effect
mouseaMover();


const gsapAnim = () => {
    gsap.from('.banner-content h1 span , .banner-content p', {
        opacity: 0,
        y: 100,
        duration: .8,
        stagger: .4
    })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.trans-box',
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            toggleActions: "play none none reset",
            stagger: true
        }
    });

    tl.from('.trans-box:nth-child(1)', {
        y: -150,
        duration: 1.5,
        ease: "power3.out"
    });

    tl.from('.trans-box:nth-child(2)', {
        y: 150,
        duration: 1.5,
        ease: "power3.out"
    }, "-=1.2");

    tl.from('.trans-box:nth-child(3)', {
        y: -50,
        duration: 1.5,
        ease: "power3.out"
    }, "-=1.2");

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.wanna-row',
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            toggleActions: "play none none reset",
            stagger: true
        }
    });

    tl2.from('.wanna-row h2', {
        opacity: 0,
        x: -50,
        y: 100,
        duration: .8,
        stagger: .4
    });


    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.ser-row',
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            toggleActions: "play none none reset",
            stagger: true
        }
    });

    tl3.from('.ser-box', {
        opacity: 0,
        y: 80,
        duration: .8,
        stagger: .4
    });

    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.works-row',
            start: "top 60%",
            end: "bottom 10%",
            scrub: true,
            toggleActions: "play none none reset",
            stagger: true
        }
    });

    tl4.from('.wrk-box', {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: .4
    });

    const tl5 = gsap.timeline({
        scrollTrigger: {
            trigger: '.Hear-row',
            start: "top 100%",
            end: "bottom 0%",
            scrub: true,
            toggleActions: "play none none reset",
            stagger: true
        }
    });

    tl5.from('.Hear-row h2', {
        opacity: 0,
        x: -50,
        y: 100,
        duration: .8,
        stagger: .4
    });

}
gsapAnim();



