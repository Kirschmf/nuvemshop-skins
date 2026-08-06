(function () {
  if (window.__dgV4) return; window.__dgV4 = 1;
  var d = document;
  var f = d.createElement('link');
  f.rel = 'stylesheet';
  f.href = 'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Exo+2:wght@400;500;600;700&display=swap';
  d.head.appendChild(f);
  var css = ''
    + '@keyframes dgKen{from{transform:scale(1)}to{transform:scale(1.08)}}'
    + '@keyframes dgRise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}'
    + '@keyframes dgSweep{0%{left:-6%;opacity:0}8%{opacity:1}92%{opacity:1}100%{left:102%;opacity:0}}'
    + '@keyframes dgPulse{0%{box-shadow:0 0 0 0 rgba(236,50,55,.45)}70%{box-shadow:0 0 0 10px rgba(236,50,55,0)}100%{box-shadow:0 0 0 0 rgba(236,50,55,0)}}'
    + '@keyframes dgBlink{0%,49%{opacity:1}50%,100%{opacity:0}}'
    + '@keyframes dgShine{0%{transform:translateX(-130%) skewX(-18deg)}100%{transform:translateX(240%) skewX(-18deg)}}'
    + '@keyframes dgShift{0%{background-position:0 0}100%{background-position:220% 0}}'
    + '@keyframes dgDrop{from{transform:translateY(-16px);opacity:0}to{transform:translateY(0);opacity:1}}'
    + '.dg-r{opacity:0;transform:translateY(26px);transition:opacity .7s ease,transform .7s cubic-bezier(.22,.61,.36,1);transition-delay:var(--dg-d,0ms)}'
    + '.dg-in{opacity:1;transform:translateY(0)}'
    + '.dg-fiber{position:relative;display:block;height:2px;width:180px;max-width:56%;margin:12px auto 0;border-radius:2px;background:linear-gradient(90deg,#3E4095 0%,#6A6CC9 55%,#EC3237 100%)}'
    + '.dg-fiber i{position:absolute;top:-4px;left:-6%;width:10px;height:10px;border-radius:50%;background:#EC3237;box-shadow:0 0 14px 3px rgba(236,50,55,.75);animation:dgSweep 3s cubic-bezier(.45,0,.25,1) infinite}'
    + '.page-header .dg-fiber{margin-left:0}'
    + '.heading-column .dg-fiber{margin-left:0}'
    + '.dg-type::after{content:"_";color:#EC3237;font-weight:700;margin-left:3px;animation:dgBlink .95s steps(1) infinite}'
    + 'header.js-header.dg-scrolled .head-main{background:rgba(15,16,41,.92)!important;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 1px 0 rgba(236,50,55,.35),0 14px 34px -22px rgba(15,16,41,.8)}'
    + '.category-item-image{aspect-ratio:1/1}'
    + '.product-item-image-container{position:relative;overflow:hidden}'
    + '.product-item-image-container::after{content:"";position:absolute;top:0;bottom:0;left:0;width:46%;background:linear-gradient(105deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.38) 50%,rgba(255,255,255,0) 100%);transform:translateX(-130%) skewX(-18deg);pointer-events:none;z-index:2}'
    + '.product-item:hover .product-item-image-container::after{animation:dgShine .8s ease forwards}'
    + '#dgTop{position:fixed;right:18px;bottom:18px;z-index:998;width:46px;height:46px;border:0;border-radius:50%;background:linear-gradient(135deg,#3E4095,#23255E);color:#fff;font-size:20px;line-height:1;cursor:pointer;opacity:0;pointer-events:none;transform:translateY(14px);transition:opacity .35s,transform .35s;box-shadow:0 10px 24px -10px rgba(35,37,94,.6)}'
    + '#dgTop.dg-on{opacity:1;pointer-events:auto;transform:translateY(0)}'
    + '#dgTop:hover{animation:dgPulse 1.4s infinite}'
    + 'a:focus-visible,button:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid #EC3237;outline-offset:2px}'
    + '.swiper-slide-active .media-content>*{animation:dgRise .8s cubic-bezier(.22,.61,.36,1) both}'
    + '.swiper-slide-active .media-content>*:nth-child(2){animation-delay:.16s}'
    + '.swiper-slide-active .media-content>*:nth-child(3){animation-delay:.32s}'
    + '.js-search-container .search-form-wrap{background:#1B1D45!important;border:1px solid rgba(255,255,255,.32);border-radius:40px;box-shadow:0 14px 30px -18px rgba(0,0,0,.9);transition:border-color .3s,box-shadow .3s}'
    + '.js-search-container .search-form-wrap:focus-within{border-color:#6A6CC9;box-shadow:0 0 0 3px rgba(62,64,149,.35)}'
    + '.search-floating-container input,.search-floating-container input:focus,.search-floating-container input:focus-visible,.search-floating-container input:hover{background:transparent!important;background-color:transparent!important;border:0!important;border-radius:40px!important;box-shadow:none!important;outline:none!important;color:#fff!important;padding-left:20px!important}'
    + '.search-floating-container input::placeholder{color:rgba(255,255,255,.62)!important}'
    + '.search-floating-container .search-btn{background:transparent!important;border:0!important;border-radius:0 40px 40px 0!important}'
    + '.search-floating-container .search-btn svg{fill:#fff}'
    + '.js-search-trigger.visible svg{opacity:0}'
    + '#modal-search .search-form input{border-radius:40px;border:1px solid #E3E5F0;padding-left:18px;transition:border-color .3s,box-shadow .3s}'
    + '#modal-search .search-form input:focus{border-color:#3E4095;box-shadow:0 0 0 3px rgba(62,64,149,.18)}'
    + 'body,button,input,select,textarea,.btn,.btn-primary,.btn-secondary,.form-control,.nav-desktop-container a,.nav-list-link,.nav-item a,.product-item-name,.product-item-price-compare,.text-content,.icon-text-item-description,.footer-section,.footer-section a,.newsletter-section input,.faq-group{font-family:"Exo 2",system-ui,sans-serif!important}'
    + '@media(max-width:767px){#ns-section-featured_products .grid,#ns-section-featured_products_2 .grid{gap:4%}#ns-section-featured_products .grid .product-item,#ns-section-featured_products_2 .grid .product-item{flex:0 0 46%}}'
    + '@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}.dg-r{opacity:1;transform:none}.dg-fiber i{display:none}}';
  var st = d.createElement('style');
  st.id = 'dg-v4';
  st.textContent = css;
  d.head.appendChild(st);

  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('dg-in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) : null;

  var SEL = '.section-product-list .product-item,.banners-section .banner-block,.category-item,.icon-text-item,.faq-group>div,.newsletter-section .media-content>div';
  function scan() {
    var els = d.querySelectorAll(SEL);
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (el.closest('#ns-section-slideshow') || el.classList.contains('swiper-slide')) continue;
      if (!el.classList.contains('dg-r')) {
        el.classList.add('dg-r');
        el.style.setProperty('--dg-d', (i % 6) * 90 + 'ms');
        if (io) { io.observe(el); } else { el.classList.add('dg-in'); }
      }
    }
    var hs = d.querySelectorAll('.section .heading-block.h3,.section .heading-block.h4,.page-header h1');
    for (var j = 0; j < hs.length; j++) {
      var h = hs[j];
      if (h.closest('#ns-section-slideshow') || h.closest('.banner-block') || h.closest('.media-content-floating')) continue;
      if (!h.querySelector('.dg-fiber')) {
        var s = d.createElement('span');
        s.className = 'dg-fiber';
        s.setAttribute('aria-hidden', 'true');
        s.appendChild(d.createElement('i'));
        h.appendChild(s);
      }
    }
  }

  function typeHero() {
    var h = d.querySelector('#ns-section-slideshow .swiper-slide-active .heading-block');
    if (!h || h.hasAttribute('data-dgt')) return;
    var full = h.textContent.trim();
    if (!full) return;
    h.setAttribute('data-dgt', '1');
    h.classList.add('dg-type');
    h.textContent = '';
    var i = 0;
    var t = setInterval(function () {
      i++;
      h.textContent = full.slice(0, i);
      if (i >= full.length) {
        clearInterval(t);
        setTimeout(function () { h.classList.remove('dg-type'); }, 2000);
      }
    }, 42);
  }

  function onScroll() {
    var y = window.scrollY || d.documentElement.scrollTop;
    var hd = d.querySelector('header.js-header');
    if (hd) { hd.classList.toggle('dg-scrolled', y > 24); }
    var t = d.getElementById('dgTop');
    if (t) { t.classList.toggle('dg-on', y > 620); }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  function boot() {
    if (!d.getElementById('dgTop')) {
      var b = d.createElement('button');
      b.id = 'dgTop';
      b.type = 'button';
      b.setAttribute('aria-label', 'Voltar ao topo');
      b.innerHTML = '&uarr;';
      b.onclick = function () { window.scrollTo({ top: 0, behavior: 'smooth' }); };
      d.body.appendChild(b);
    }
    scan();
    onScroll();
    var n = 0;
    var iv = setInterval(function () {
      n++;
      scan();
      typeHero();
      if (n > 6) clearInterval(iv);
    }, 1200);
    setInterval(typeHero, 1000);
  }
  if (d.readyState === 'loading') { d.addEventListener('DOMContentLoaded', boot); } else { boot(); }
  window.addEventListener('load', function () { scan(); typeHero(); });
})();
