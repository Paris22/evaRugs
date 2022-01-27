const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 400,
    spaceBetween: 70,
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
    breakpoints: {
        // 320: {
        //     slidesPerView: 1,
        //     spaceBetween: 30
        // },
        // 480: {
        //     slidesPerView: 2,
        //     spaceBetween: 50
        // },
        // 640: {
        //     slidesPerView: 3,
        //     spaceBetween: 70
        // }
    }
});