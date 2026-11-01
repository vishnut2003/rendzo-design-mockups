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

  // Hero slider: photo crossfade + copy swap, arrows, dots, autoplay
  var hero = document.querySelector('.hero-banner');
  if (hero) {
    var slides = [
      {
        eyebrow: "Kochi's Rental Marketplace",
        title: 'Everything You Need.<br><em>Nothing to Own.</em>',
        text: 'Premium furniture, appliances and electronics on flexible monthly rent. Free delivery, free pickup and a 100% refundable deposit.'
      },
      {
        eyebrow: 'Home Packages',
        title: 'Set up your home<br><em>in one booking.</em>',
        text: 'Bedroom, living room and kitchen bundles from ₹2,499 a month. One delivery, one deposit, everything installed by our team.'
      },
      {
        eyebrow: 'Appliances on Rent',
        title: 'Big appliances.<br><em>Small monthly rent.</em>',
        text: 'Fridges, washing machines and ACs from ₹410 a month. Delivered and installed in 1–3 days anywhere in Kochi.'
      }
    ];
    var imgs = hero.querySelectorAll('.hero-bg img');
    var dots = hero.querySelectorAll('.hero-dots span');
    var textWrap = hero.querySelector('.hero-text');
    var eyebrow = hero.querySelector('.hero-eyebrow');
    var title = hero.querySelector('h1');
    var text = hero.querySelector('.hero-text p');
    var prevBtn = hero.querySelector('.hero-arrow[aria-label="Previous slide"]');
    var nextBtn = hero.querySelector('.hero-arrow[aria-label="Next slide"]');
    var current = 0, timer = null, busy = false;

    function show(n) {
      if (busy) return;
      busy = true;
      current = (n + slides.length) % slides.length;
      imgs.forEach(function (im, k) { im.classList.toggle('on', k === current); });
      dots.forEach(function (d, k) { d.classList.toggle('on', k === current); });
      textWrap.classList.add('fade');
      setTimeout(function () {
        eyebrow.textContent = slides[current].eyebrow;
        title.innerHTML = slides[current].title;
        text.textContent = slides[current].text;
        textWrap.classList.remove('fade');
        busy = false;
      }, 350);
    }
    function start() { stop(); timer = setInterval(function () { show(current + 1); }, 5000); }
    function stop() { if (timer) clearInterval(timer); timer = null; }

    if (prevBtn) prevBtn.addEventListener('click', function () { show(current - 1); start(); });
    if (nextBtn) nextBtn.addEventListener('click', function () { show(current + 1); start(); });
    dots.forEach(function (d, k) {
      d.style.cursor = 'pointer';
      d.addEventListener('click', function () { show(k); start(); });
    });
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
    start();
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
