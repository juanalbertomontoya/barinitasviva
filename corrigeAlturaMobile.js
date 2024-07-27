document.addEventListener('DOMContentLoaded', function () {
    // Selecciona los elementos para aplicar height: 100vh !important;
    var elements1 = document.querySelectorAll('body > section.default-banner.active-blog-slider.owl-carousel.owl-theme.owl-loaded > div.owl-stage-outer > div > div.owl-item > div > div.container > div');

    elements1.forEach(function(element) {
        element.style.setProperty('height', '100vh', 'important');
    });

    // Selecciona los elementos para aplicar display: flex, flex-direction: column, justify-content: center
    var elements2 = document.querySelectorAll('body > section.default-banner.active-blog-slider.owl-carousel.owl-theme.owl-loaded > div.owl-stage-outer > div > div.owl-item > div > div.container > div > div > div');

    elements2.forEach(function(element) {
        element.style.setProperty('display', 'flex', 'important');
        element.style.setProperty('flex-direction', 'column', 'important');
        element.style.setProperty('justify-content', 'center', 'important');
    });
});
