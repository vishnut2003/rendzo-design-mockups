/* RENDZO homepage mockup – tiny interactions only */
(function () {
  // Mobile drawer
  var drawer = document.getElementById('drawer');
  var openBtns = document.querySelectorAll('[data-open-drawer]');
  var closeBtns = document.querySelectorAll('[data-close-drawer]');
  openBtns.forEach(function (b) { b.addEventListener('click', function () { drawer.classList.add('open'); document.body.style.overflow = 'hidden'; }); });
  closeBtns.forEach(function (b) { b.addEventListener('click', function () { drawer.classList.remove('open'); document.body.style.overflow = ''; }); });

  // Carousels: prev / next scroll by one card
  document.querySelectorAll('[data-carousel]').forEach(function (wrap) {
    var track = wrap.querySelector('.carousel');
    var prev = wrap.querySelector('.carousel-btn.prev');
    var next = wrap.querySelector('.carousel-btn.next');
    function step() {
      var card = track.firstElementChild;
      return card ? card.getBoundingClientRect().width + 14 : 300;
    }
    if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
    if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });
  });

  // Hero dots (cosmetic auto-cycle)
  var dots = document.querySelectorAll('.hero-dots span');
  if (dots.length) {
    var i = 0;
    setInterval(function () {
      dots[i].classList.remove('on');
      i = (i + 1) % dots.length;
      dots[i].classList.add('on');
    }, 4000);
  }

  // Wishlist toggle
  document.querySelectorAll('.wish').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      btn.classList.toggle('active');
      btn.style.color = btn.classList.contains('active') ? '#dc2626' : '';
      btn.style.borderColor = btn.classList.contains('active') ? '#dc2626' : '';
    });
  });
})();
