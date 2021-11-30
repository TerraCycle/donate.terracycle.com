(function (tc) {
    tc(window.jQuery, window, document);
})(function ($, window, document) {
    if (window.devicePixelRatio > 1 && window.innerWidth >= 200) {
        document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=" + parseFloat((1 / window.devicePixelRatio).toFixed(4)));
    }

    $(function () {
        $(".tc-slider").slick({
            appendArrows: ".tc-slider__btn-container",
            prevArrow:
                '<button type="button" class="tc-btn slick-prev" aria-label="Previous"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg></button>',
            nextArrow:
                '<button type="button" class="tc-btn slick-next" aria-label="Next"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></button>',
            infinite: false,
            mobileFirst: true,
            responsive: [
                {
                    breakpoint: 368 * 2 - 1,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 368 * 3 - 1,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 368 * 4 - 1,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 368 * 5 - 1,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });
});
