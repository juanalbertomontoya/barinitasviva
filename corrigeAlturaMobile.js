document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los elementos que coinciden con el selector dado
    var elements = document.querySelectorAll('body > section.default-banner.active-blog-slider.owl-carousel.owl-theme.owl-loaded > div.owl-stage-outer > div > div.owl-item > div > div.container > div');

    // Itera sobre cada elemento y le añade el estilo
    elements.forEach(function(element) {
        element.style.setProperty('height', '100vh', 'important');
    });
});
