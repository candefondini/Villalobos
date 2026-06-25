document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".featured-swiper").forEach((swiperEl) => {
        new Swiper(swiperEl, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 16,
            speed: 500,

            pagination: {
                el: swiperEl.querySelector(".swiper-pagination"),
                clickable: true,
            },

            navigation: {
                nextEl: swiperEl.querySelector(".swiper-button-next"),
                prevEl: swiperEl.querySelector(".swiper-button-prev"),
            },

            autoplay: {
                delay: 4500,
                disableOnInteraction: false,
            },

            breakpoints: {
                992: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                    loop: false,
                    allowTouchMove: false,
                    autoplay: false,
                }
            }
        });
    });
});
