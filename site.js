(function () {
  var doc = document.documentElement;
  doc.classList.add('js');
  // A few softly twinkling stars (hidden in light mode by CSS).
  var sky = document.querySelector('.sky');
  for (var i = 0; i < 46; i++) {
    var s = document.createElement('i');
    s.style.left = (Math.random() * 100) + '%';
    s.style.top = (Math.random() * 70) + '%';
    s.style.animationDelay = (Math.random() * 5) + 's';
    if (Math.random() > .8) { s.style.width = s.style.height = '3px'; }
    sky.appendChild(s);
  }
  // Fade sections in as they scroll into view.
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('in'); }); }
  // Back-to-top button after scrolling a little.
  var top = document.querySelector('.top');
  window.addEventListener('scroll', function () { top.classList.toggle('show', window.scrollY > 600); }, { passive: true });
})();

// Remember the language a visitor picks, so the automatic choice below never overrides it.
document.querySelectorAll('.langs a').forEach(function (a) {
  a.addEventListener('click', function () { try { localStorage.setItem('remli-lang', a.getAttribute('hreflang')); } catch (e) {} });
});
