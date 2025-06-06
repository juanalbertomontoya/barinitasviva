
document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector("#section-m8Q1nSbVn5");
  const elementToShow = document.querySelector("#section-_2UdH-WEvW");

  if (!target || !elementToShow) {
    console.log("❌ No se encontraron los elementos necesarios.");
    return;
  }

  console.log("✅ Script cargado correctamente.");

  function isElementCentered(el) {
    const rect = el.getBoundingClientRect();
    const centerY = window.innerHeight / 2;
    return rect.top < centerY && rect.bottom > centerY;
  }

  function checkPosition() {
    if (isElementCentered(target)) {
      console.log("🎯 Elemento centrado. Mostrando el bloque.");
      elementToShow.style.setProperty("display", "block", "important");
    } else {
      elementToShow.style.setProperty("display", "none", "important");
    }
  }

  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", checkPosition);
  checkPosition();
});
