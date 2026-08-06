/* ==========================================================================
   Digital Informatica - SKIN v4 "premium layer" (CDN / jsDelivr)
   --------------------------------------------------------------------------
   Camada de comportamento. A base visual vem dos CAMPOS do tema (bloco-01..13).
   Aqui: fontes, style#dg-v4 (herdado do bloco-02), reveal por IntersectionObserver,
   pulso de fibra, digitacao do hero, botao voltar-ao-topo + as features novas:
   barra de progresso, setas das vitrines, particulas do hero e tilt 3D
   nos cards.

   ENHANCE ONLY: a skin chega tarde (loader no rodape). Nada aqui remove,
   redimensiona ou reposiciona conteudo estatico ja pintado.
   O CSS estatico das features novas mora no skin.css (sem limite/sanitizador).
   ========================================================================== */
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

  /* ---------------------------------------------------------------- flags */
  function mq(q) { return window.matchMedia ? window.matchMedia(q) : { matches: false }; }
  var REDUCED = mq('(prefers-reduced-motion:reduce)').matches;
  var FINE = mq('(hover:hover) and (pointer:fine)');
  function isDesktop() { return FINE.matches && window.innerWidth > 1024; }

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
    sparks();
    arrows();
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

  /* ============================================================ 1. PROGRESSO
     Linha de 3px no topo da viewport crescendo com o scroll (scaleX). */
  var progEl = null, progRaf = 0;
  function progressBar() {
    if (REDUCED || d.getElementById('dg-prog')) return;
    progEl = d.createElement('div');
    progEl.id = 'dg-prog';
    progEl.setAttribute('aria-hidden', 'true');
    d.body.appendChild(progEl);
  }
  function progressPaint() {
    progRaf = 0;
    if (!progEl) return;
    var de = d.documentElement;
    var max = (de.scrollHeight || 0) - window.innerHeight;
    var p = max > 0 ? (window.scrollY || de.scrollTop) / max : 0;
    if (p < 0) p = 0; if (p > 1) p = 1;
    progEl.style.transform = 'scaleX(' + p.toFixed(4) + ')';
  }
  function progressTick() {
    if (progEl && !progRaf) progRaf = requestAnimationFrame(progressPaint);
  }

  /* ======================================================= 2. SETAS VITRINE
     Botoes < > discretos sobre as vitrines de produto. O elemento ROLAVEL e
     o proprio `.grid` (display:flex + overflow-x:auto); o ancoradouro e o
     `.js-products-list-slider-container` (position:relative), unico filho-pai
     do grid. As vitrines re-renderizam pelo nubesdk, entao o estado fica
     guardado em `cont.__dgArr` e revalidado a cada scan(): se o `.grid` mudou
     de identidade ou as setas foram varridas do DOM, recria. */
  var SHELVES = ['ns-section-featured_products', 'ns-section-featured_products_2'];

  function mkArrow(dir) {
    var b = d.createElement('button');
    b.type = 'button';
    b.className = 'dg-arrow dg-arrow-' + dir;
    b.setAttribute('aria-label', dir === 'prev' ? 'Anterior' : 'Proximo');
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">'
      + '<path d="' + (dir === 'prev' ? 'M15 5L8 12l7 7' : 'M9 5l7 7-7 7') + '"'
      + ' fill="none" stroke="currentColor" stroke-width="2.2"'
      + ' stroke-linecap="round" stroke-linejoin="round"/></svg>';
    return b;
  }

  function arrowSync(st) {
    var g = st.grid;
    var max = g.scrollWidth - g.clientWidth;
    st.prev.classList.toggle('dg-off', max <= 6 || g.scrollLeft <= 6);
    st.next.classList.toggle('dg-off', max <= 6 || g.scrollLeft >= max - 6);
  }

  function arrowsFor(cont) {
    var grid = cont.querySelector('.grid');
    if (!grid) return;
    var st = cont.__dgArr;
    if (st && st.grid === grid && st.prev.parentNode === cont && st.next.parentNode === cont) {
      arrowSync(st);
      return;
    }
    var stray = cont.querySelectorAll('.dg-arrow');
    for (var i = 0; i < stray.length; i++) stray[i].parentNode.removeChild(stray[i]);
    var prev = mkArrow('prev');
    var next = mkArrow('next');
    cont.appendChild(prev);
    cont.appendChild(next);
    st = cont.__dgArr = { grid: grid, prev: prev, next: next };
    prev.addEventListener('click', function () { arrowGo(st, -1); });
    next.addEventListener('click', function () { arrowGo(st, 1); });
    grid.addEventListener('scroll', function () { arrowSync(st); }, { passive: true });
    arrowSync(st);
  }

  function arrowGo(st, sign) {
    var g = st.grid;
    var step = Math.round(g.clientWidth * 0.8) || 240;
    g.scrollBy({ left: sign * step, behavior: REDUCED ? 'auto' : 'smooth' });
  }

  function arrows() {
    for (var i = 0; i < SHELVES.length; i++) {
      var sec = d.getElementById(SHELVES[i]);
      if (!sec) continue;
      var conts = sec.querySelectorAll('.js-products-list-slider-container');
      for (var k = 0; k < conts.length; k++) arrowsFor(conts[k]);
    }
  }

  /* Os cards chegam pelo nubesdk DEPOIS do HTML estatico, as vezes fora da
     janela dos 7 ciclos de scan(). Um MutationObserver nas duas secoes (que
     existem no HTML inicial) cobre tanto a chegada tardia quanto o
     re-render. Debounce curto porque o nubesdk pinta em rajada. */
  var arrObs = null, arrT = 0;
  function arrowsWatch() {
    if (arrObs || !('MutationObserver' in window)) return;
    arrObs = new MutationObserver(function () {
      clearTimeout(arrT);
      arrT = setTimeout(arrows, 160);
    });
    for (var i = 0; i < SHELVES.length; i++) {
      var sec = d.getElementById(SHELVES[i]);
      if (sec) arrObs.observe(sec, { childList: true, subtree: true });
    }
  }

  /* ============================================================ 4. PARTICULAS
     8-12 pontos de luz subindo no hero. Desktop apenas. */
  function sparks() {
    if (REDUCED || !isDesktop()) return;
    var cont = d.querySelector('#ns-section-slideshow .js-slideshow-container');
    if (!cont || cont.querySelector('.dg-sparks')) return;
    var box = d.createElement('div');
    box.className = 'dg-sparks';
    box.setAttribute('aria-hidden', 'true');
    for (var i = 0; i < 12; i++) box.appendChild(d.createElement('i'));
    cont.appendChild(box);
  }

  /* ================================================================ 3. TILT
     Tilt 3D nos cards de produto.
     DECISAO: o transform e aplicado INLINE no proprio .product-item e ja
     inclui o translateY(-6px) do hover dos campos. Estilo inline vence a
     regra `.product-item:hover` (que nao usa !important), entao nao ha briga
     de cascata nem necessidade de sobrescrever os campos. No mouseleave o
     inline e limpo e a transicao de .35s dos campos devolve o card ao lugar.
     Delegacao no document => imune ao re-render dos cards pelo nubesdk. */
  var tiltEl = null, tiltRaf = 0, tiltX = 0, tiltY = 0;
  var TILT_MAX = 8; /* graus totais: +-4 */

  function tiltApply() {
    tiltRaf = 0;
    var c = tiltEl;
    if (!c) return;
    var r = c.getBoundingClientRect();
    if (!r.width || !r.height) return;
    var px = (tiltX - r.left) / r.width - 0.5;
    var py = (tiltY - r.top) / r.height - 0.5;
    /* o card "se inclina na direcao do cursor": rotateX segue py, rotateY
       leva sinal invertido para que o lado apontado venha para frente. */
    c.style.transform = 'perspective(800px) rotateX(' + (py * TILT_MAX).toFixed(2) +
      'deg) rotateY(' + (-px * TILT_MAX).toFixed(2) + 'deg) translateY(-6px)';
  }

  function tiltReset(c) {
    if (!c) return;
    c.classList.remove('dg-tilt');
    c.style.transform = '';
  }

  function tiltMove(e) {
    var t = e.target;
    var card = (t && t.closest) ? t.closest('.product-item') : null;
    if (card !== tiltEl) {
      tiltReset(tiltEl);
      tiltEl = card;
      if (card) card.classList.add('dg-tilt');
    }
    if (!card) return;
    tiltX = e.clientX;
    tiltY = e.clientY;
    if (!tiltRaf) tiltRaf = requestAnimationFrame(tiltApply);
  }

  function tiltOff() { tiltReset(tiltEl); tiltEl = null; }

  function tiltInit() {
    if (REDUCED || !isDesktop()) return;
    d.addEventListener('mousemove', tiltMove, { passive: true });
    d.addEventListener('mouseleave', tiltOff, { passive: true });
    window.addEventListener('blur', tiltOff, { passive: true });
    window.addEventListener('scroll', tiltOff, { passive: true });
  }

  /* --------------------------------------------------------------- scroll */
  function onScroll() {
    var y = window.scrollY || d.documentElement.scrollTop;
    var hd = d.querySelector('header.js-header');
    if (hd) { hd.classList.toggle('dg-scrolled', y > 24); }
    var t = d.getElementById('dgTop');
    if (t) { t.classList.toggle('dg-on', y > 620); }
    progressTick();
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () { progressTick(); arrows(); }, { passive: true });

  /* ------------------------------------------------ landing "Digital Net" */
  /* A pagina institucional aceita so HTML: o dono cola <div class="dg-net"></div>
     e esta funcao constroi a landing inteira dentro dela. Planos editaveis aqui. */
  var WAPP = '5564981440024';
  var NET_PLANS = [
    { mb: '200', pr: '79,90', pop: false, ft: ['Wi-Fi incluso', 'Instalação profissional', 'Suporte local em Catalão'] },
    { mb: '400', pr: '99,90', pop: true, ft: ['Wi-Fi incluso', 'Instalação profissional', 'Suporte local em Catalão'] },
    { mb: '600', pr: '129,90', pop: false, ft: ['Wi-Fi incluso', 'Instalação profissional', 'Suporte prioritário'] }
  ];
  function waLink(msg) {
    return 'https://wa.me/' + WAPP + '?text=' + encodeURIComponent(msg);
  }
  function netPage() {
    var host = d.querySelector('.dg-net, .div-que-carrega-o-loader');
    if (!host || host.getAttribute('data-dg-net')) return;
    host.setAttribute('data-dg-net', '1');
    if (host.querySelector('.dgn-plans')) return; /* HTML estatico colado na pagina vence */
    if (!d.getElementById('dg-net-css')) {
      var nl = d.createElement('link');
      nl.id = 'dg-net-css';
      nl.rel = 'stylesheet';
      nl.href = 'https://cdn.jsdelivr.net/gh/Kirschmf/nuvemshop-skins@main/digital/net.css?v=' + new Date().toISOString().slice(0, 10);
      d.head.appendChild(nl);
    }
    var h = '';
    h += '<section class="dgn-hero"><span class="dgn-eyebrow">Digital Net · Catalão-GO</span>';
    h += '<h2>Internet de fibra que não te deixa na mão</h2>';
    h += '<p>Banda larga da Digital para sua casa e sua empresa — instalação profissional e suporte de quem está na sua cidade.</p>';
    h += '<a class="dgn-wa dgn-wa-lg" target="_blank" rel="noopener" href="' + waLink('Olá! Quero consultar a cobertura da Digital Net no meu endereço.') + '">Consultar cobertura no WhatsApp</a>';
    h += '<span class="dg-fiber" aria-hidden="true"><i></i></span></section>';
    h += '<div class="dgn-plans">';
    for (var i = 0; i < NET_PLANS.length; i++) {
      var p = NET_PLANS[i];
      h += '<div class="dgn-plan' + (p.pop ? ' dgn-pop' : '') + '">';
      if (p.pop) h += '<span class="dgn-badge">Mais escolhido</span>';
      h += '<div class="dgn-mb">' + p.mb + '<small>MEGA</small></div>';
      h += '<div class="dgn-pr"><small>R$</small>' + p.pr + '<small>/mês</small></div><ul>';
      for (var j = 0; j < p.ft.length; j++) h += '<li>' + p.ft[j] + '</li>';
      h += '</ul><a class="dgn-wa" target="_blank" rel="noopener" href="' + waLink('Olá! Quero assinar o plano de ' + p.mb + ' MEGA da Digital Net.') + '">Assinar pelo WhatsApp</a></div>';
    }
    h += '</div>';
    h += '<div class="dgn-perks">';
    var perks = [['Suporte na sua cidade', 'Equipe própria em Catalão-GO'], ['Instalação profissional', 'Agendada direto pelo WhatsApp'], ['Wi-Fi de qualidade', 'Equipamento configurado para sua casa'], ['Atendimento rápido', '(64) 98144-0024']];
    for (var k = 0; k < perks.length; k++) h += '<div class="dgn-perk"><strong>' + perks[k][0] + '</strong><span>' + perks[k][1] + '</span></div>';
    h += '</div>';
    h += '<section class="dgn-cta"><h3>Ainda com dúvida?</h3><p>Chama a gente no WhatsApp que a equipe te ajuda a escolher o plano certo.</p>';
    h += '<a class="dgn-wa dgn-wa-lg" target="_blank" rel="noopener" href="' + waLink('Olá! Quero saber mais sobre os planos da Digital Net.') + '">Falar com a Digital agora</a></section>';
    host.innerHTML = h;
  }

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
    progressBar();
    tiltInit();
    arrowsWatch();
    scan();
    onScroll();
    var n = 0;
    netPage();
    var iv = setInterval(function () {
      n++;
      scan();
      typeHero();
      netPage();
      if (n > 6) clearInterval(iv);
    }, 1200);
    setInterval(typeHero, 1000);
  }
  if (d.readyState === 'loading') { d.addEventListener('DOMContentLoaded', boot); } else { boot(); }
  window.addEventListener('load', function () { scan(); typeHero(); progressTick(); });
})();
