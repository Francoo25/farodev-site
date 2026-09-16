(function () {
  "use strict";

  var WHATSAPP_NUMBER = "51942348968";

  // Mobile nav toggle
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.innerHTML = isOpen
        ? '<svg class="icon" width="24" height="24"><use href="#icon-close"></use></svg>'
        : '<svg class="icon" width="24" height="24"><use href="#icon-menu"></use></svg>';
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.innerHTML = '<svg class="icon" width="24" height="24"><use href="#icon-menu"></use></svg>';
      });
    });
  }

  // Business-type qualifier -> prefilled WhatsApp message
  var businessInputs = document.querySelectorAll('input[name="business-type"]');
  var whatsappCta = document.getElementById("whatsapp-cta");

  function updateWhatsappLink() {
    var selected = document.querySelector('input[name="business-type"]:checked');
    var businessType = selected ? selected.value : "un negocio";
    var message = "Hola FaroDev, tengo " + businessType + " y quiero cotizar una página web.";
    whatsappCta.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  }

  if (businessInputs.length && whatsappCta) {
    businessInputs.forEach(function (input) {
      input.addEventListener("change", updateWhatsappLink);
    });
    updateWhatsappLink();
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Scroll reveal: one authored entrance moment, staggered per section
  var revealEls = document.querySelectorAll("[data-reveal]:not([data-reveal='none'])");

  if ("IntersectionObserver" in window && revealEls.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
