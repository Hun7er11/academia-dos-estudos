/* Academia dos Estudos — protótipo */
(function () {
  "use strict";

  // ---- ano no rodapé ----
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // ---- vídeo do hero: garantir autoplay ----
  var heroVid = document.querySelector(".hero video");
  if (heroVid) {
    heroVid.muted = true;
    var tryPlay = function () {
      var p = heroVid.play();
      if (p && p.catch) p.catch(function () {});
    };
    tryPlay();
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) tryPlay();
    });
    window.addEventListener("pageshow", tryPlay);
  }

  // ---- menu mobile ----
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ---- reveal ao fazer scroll / no load (slide da esquerda e da direita) ----
  var els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
  function revealAll() { els.forEach(function (el) { el.classList.add("is-in"); }); }
  function show(el) {
    var sibs = el.parentNode ? el.parentNode.children : [el];
    var idx = Array.prototype.indexOf.call(sibs, el);
    el.style.transitionDelay = (Math.min(idx, 6) * 140) + "ms";
    el.classList.add("is-in");
  }
  if ("IntersectionObserver" in window && els.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        show(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -12% 0px" });
    // pequeno atraso para o 1.º ecrã animar visivelmente ao carregar
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        els.forEach(function (el) { io.observe(el); });
      });
    });
    // failsafe: se o observer nunca disparar, mostra tudo passados 8 s
    setTimeout(function () {
      var any = false;
      els.forEach(function (el) { if (el.classList.contains("is-in")) any = true; });
      if (!any) revealAll();
    }, 8000);
  } else {
    revealAll();
  }

  // ---- carrossel de testemunhos ----
  var track = document.getElementById("tstTrack");
  var navDots = document.getElementById("tstNav");
  if (track && navDots) {
    var slides = track.children.length;
    var i = 0;
    var timer;

    for (var s = 0; s < slides; s++) {
      var b = document.createElement("button");
      b.className = "tst__dot";
      b.setAttribute("aria-label", "Testemunho " + (s + 1));
      b.dataset.idx = s;
      navDots.appendChild(b);
    }
    var dots = navDots.querySelectorAll(".tst__dot");

    function go(n) {
      i = (n + slides) % slides;
      track.style.transform = "translateX(" + (-i * 100) + "%)";
      dots.forEach(function (d, k) { d.setAttribute("aria-current", k === i ? "true" : "false"); });
    }
    function auto() { timer = setInterval(function () { go(i + 1); }, 6000); }
    function reset() { clearInterval(timer); auto(); }

    navDots.addEventListener("click", function (e) {
      if (e.target.dataset.idx !== undefined) { go(+e.target.dataset.idx); reset(); }
    });
    var prev = document.querySelector(".tst__arrow--prev");
    var next = document.querySelector(".tst__arrow--next");
    if (prev) prev.addEventListener("click", function () { go(i - 1); reset(); });
    if (next) next.addEventListener("click", function () { go(i + 1); reset(); });

    go(0);
    auto();
  }
})();
