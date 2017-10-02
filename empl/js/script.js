$(document)
    .ready(function () {
        var stickyPanelSettings = {
            // Use this to set the top margin of the detached panel.
            topPadding: 0,

            // This class is applied when the panel detaches.
            afterDetachCSSClass: "fixed-top red",

            // When set to true the space where the panel was is kept open.
            savePanelSpace: false,

            // Event fires when panel is detached function(detachedPanel, panelSpacer){....}
            onDetached: null,

            // Event fires when panel is reattached function(detachedPanel){....}
            onReAttached: null,

            // Set this using any valid jquery selector to set the parent of the sticky
            // panel. If set to null then the window object will be used.
            parentSelector: null
        };
        $("nav").stickyPanel(stickyPanelSettings);

        $('.testimony').slick({
            dots: false,
            arrow: false,
            infinite: true,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }

            ]
        });
    })