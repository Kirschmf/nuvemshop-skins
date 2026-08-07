(function(){
var D=document;
function el(t,c,h){var e=D.createElement(t);if(c)e.className=c;if(h)e.innerHTML=h;return e}

/* 1. fontes */
function fonts(){
  if(D.getElementById('dz-f'))return;
  var h=D.head||D.getElementsByTagName('head')[0];if(!h)return;
  ['https://fonts.googleapis.com','https://fonts.gstatic.com'].forEach(function(u,i){
    var p=D.createElement('link');p.rel='preconnect';p.href=u;if(i)p.crossOrigin='';h.appendChild(p)});
  var l=D.createElement('link');l.id='dz-f';l.rel='stylesheet';
  l.href='https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Roboto:wght@400;500;700&display=swap';
  h.appendChild(l)}

/* 2. style (valvula anti-sanitizador) */
var CSS=':root{--accent-color:#3E4095;--button-background:#3E4095;--button-foreground:#FFF;--label-background:#EC3237;--label-foreground:#FFF;--header-badge-background:#EC3237;--footer-background:#111;--footer-foreground:#FFF;--newsletter-home-background:#F4F4F4;--welcome-background:#E0A81C;--welcome-foreground:#111}'
+'@keyframes dzMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}'
+'@keyframes dzPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}'
+':focus-visible{outline:2px solid #3E4095;outline-offset:2px}'
+'@media (prefers-reduced-motion:reduce){.dz-r{opacity:1;transform:none}.dz-marquee div,.dz-count span{animation:none}html{scroll-behavior:auto}}'
+'.dz-buy{display:block;background:#0FB80F;color:#FFF;border-radius:50px;height:40px;line-height:40px;text-align:center;font-weight:700;text-transform:uppercase;font-size:13px;margin-top:8px;text-decoration:none;font-family:Montserrat,Arial,sans-serif;letter-spacing:.02em}'
+'.dz-buy:hover,.dz-buy:focus{background:#0C9C0C;color:#FFF;text-decoration:none}'
+'.dz-bar{display:grid;grid-template-columns:repeat(6,1fr);gap:14px;max-width:1200px;margin:20px auto 4px;padding:18px 16px;border-bottom:1px solid #E8EAED}'
+'.dz-bar>div{text-align:center}'
+'.dz-bar svg{width:28px;height:28px;stroke:#3E4095;fill:none;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}'
+'.dz-bar b{display:block;margin-top:6px;font:700 13px Montserrat,Arial,sans-serif;color:#202124}'
+'.dz-bar span{display:block;font:400 12px Roboto,Arial,sans-serif;color:#5F6368}'
+'@media (max-width:767px){.dz-bar{grid-template-columns:repeat(3,1fr);gap:10px}}'
+'.dz-count{display:flex;justify-content:center;align-items:center;gap:6px;margin:6px 0 32px}'
+'.dz-count span{position:relative;width:44px;height:44px;border-radius:8px;background:#111;color:#FFF;font:700 20px Montserrat,Arial,sans-serif;display:flex;align-items:center;justify-content:center;animation:dzPulse 2s ease-in-out infinite}'
+'.dz-count span:after{position:absolute;top:47px;left:0;width:44px;text-align:center;font:400 10px Roboto,Arial,sans-serif;color:#5F6368;text-transform:uppercase}'
+'.dz-count [data-u=d]:after{content:"dias"}.dz-count [data-u=h]:after{content:"horas"}.dz-count [data-u=m]:after{content:"min"}.dz-count [data-u=s]:after{content:"seg"}'
+'.dz-count i{font-style:normal;font-weight:700;color:#EC3237}'
+'.dz-faq{display:block;max-width:920px;margin:34px auto;padding:0 16px}'
+'.dz-faq .section-title{text-align:center;margin-bottom:10px}'
+'.dz-faq details{border-bottom:1px solid #E8EAED}'
+'.dz-faq summary{position:relative;font:500 15px Roboto,Arial,sans-serif;color:#202124;padding:16px 28px 16px 8px;cursor:pointer;list-style:none}'
+'.dz-faq summary::-webkit-details-marker{display:none}'
+'.dz-faq summary:after{content:"";position:absolute;right:10px;top:20px;width:8px;height:8px;border-right:2px solid #3E4095;border-bottom:2px solid #3E4095;transform:rotate(45deg);transition:transform .25s}'
+'.dz-faq details[open] summary:after{transform:rotate(-135deg)}'
+'.dz-faq p{margin:0;padding:0 8px 16px;font:400 14px/22px Roboto,Arial,sans-serif;color:#5F6368}'
+'.dz-brands{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:36px;max-width:1200px;margin:0 auto;padding:26px 16px;border-top:1px solid #E8EAED}'
+'.dz-brands span{font:700 18px Montserrat,Arial,sans-serif;color:#9AA0A6;letter-spacing:.04em;text-transform:uppercase}'
+'.dz-top{position:fixed;right:18px;bottom:84px;width:44px;height:44px;padding:0;border:0;border-radius:50%;background:#3E4095;color:#FFF;font-size:19px;line-height:44px;text-align:center;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.22);opacity:0;pointer-events:none;transition:opacity .3s;z-index:998}'
+'.dz-top:hover{background:#2E3170}.dz-top.dz-on{opacity:1;pointer-events:auto}'
+'.dz-marquee{background:#E0A81C;color:#111;overflow:hidden;white-space:nowrap}'
+'.dz-marquee div{display:inline-block;padding:9px 0;font:700 13px Montserrat,Arial,sans-serif;letter-spacing:.06em;animation:dzMarquee 22s linear infinite}';
function style(){
  if(D.getElementById('dz-s'))return;
  var h=D.head||D.getElementsByTagName('head')[0];if(!h)return;
  var s=D.createElement('style');s.id='dz-s';s.type='text/css';s.appendChild(D.createTextNode(CSS));h.appendChild(s)}

/* 3. reveal */
var io=null,SEL='.js-item-product .item,.js-item-product.item,h2.section-title,.dz-bar>div,.dz-faq details,.js-footer .container.py-3 div[class*=col]';
function reveal(){
  if(!window.IntersectionObserver)return;
  if(!io)io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting){e.target.classList.add('dz-in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'-40px'});
  var n=D.querySelectorAll(SEL),i,t;
  for(i=0;i<n.length;i++){t=n[i];
    if(t.classList.contains('dz-r')||t.closest('.swiper-slide'))continue;
    t.classList.add('dz-r');t.style.transitionDelay=(i%6)*90+'ms';io.observe(t)}}

/* 4/10. scroll + botao topo */
var tb=null;
function mkTop(){
  if(D.querySelector('.dz-top'))return;
  tb=el('button','dz-top','&#8593;');tb.type='button';tb.setAttribute('aria-label','Voltar ao topo');
  tb.addEventListener('click',function(){
    try{window.scrollTo({top:0,behavior:'smooth'})}catch(e){window.scrollTo(0,0)}});
  D.body.appendChild(tb)}
function onScroll(){
  var y=window.pageYOffset||D.documentElement.scrollTop||0;
  D.body.classList[y>8?'add':'remove']('dz-scrolled');
  if(tb)tb.classList[y>400?'add':'remove']('dz-on')}

/* 5. botao comprar nos cards */
function buyBtns(){
  D.querySelectorAll('.js-item-product .item-description').forEach(function(d){
    if(d.querySelector('.dz-buy'))return;
    var a=d.querySelector('a.item-link');if(!a||!a.href)return;
    var b=D.createElement('a');b.className='dz-buy';b.href=a.href;b.textContent='Comprar';
    d.appendChild(b)})}

/* 6. countdown diario */
function countdown(){
  var t=D.querySelector('.section-sale-products-home .section-title');
  if(!t||D.querySelector('.dz-count'))return;
  var w=D.createElement('div');w.className='dz-count';
  w.innerHTML='<span data-u=d></span><i>:</i><span data-u=h></span><i>:</i><span data-u=m></span><i>:</i><span data-u=s></span>';
  t.insertAdjacentElement('afterend',w);
  function tick(){
    var n=new Date(),e=new Date(n.getFullYear(),n.getMonth(),n.getDate(),23,59,59),r=Math.max(0,e-n);
    var h=Math.floor(r/36e5),m=Math.floor(r%36e5/6e4),s=Math.floor(r%6e4/1e3);
    w.querySelector('[data-u=d]').textContent='00';
    w.querySelector('[data-u=h]').textContent=String(h).padStart(2,'0');
    w.querySelector('[data-u=m]').textContent=String(m).padStart(2,'0');
    w.querySelector('[data-u=s]').textContent=String(s).padStart(2,'0')}
  tick();setInterval(tick,1000)}

/* 7. faixa de beneficios */
var ICO=[
['<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19M6 15h4"/>','Em até 12x no cartão','parcele suas compras'],
['<path d="M1.5 6h12v11h-12z"/><path d="M13.5 10H18l3.5 3.5V17h-8"/><circle cx="6" cy="18.5" r="2"/><circle cx="17" cy="18.5" r="2"/>','Enviamos para todo Brasil','envio rápido e seguro'],
['<path d="M21 11.8a8.7 8.7 0 0 1-13 7.6L3 21l2-4.8A8.7 8.7 0 1 1 21 11.8z"/><path d="M8.7 9.2c0 4 2.1 6.1 6.1 6.1"/>','WhatsApp (64) 98144-0024','tire suas dúvidas'],
['<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>','Site 100% Seguro','compra protegida'],
['<path d="M15 3a5 5 0 0 0-4.6 7L3 17.4 6.6 21l7.4-7.4A5 5 0 1 0 15 3z"/>','Assistência técnica','especializada em Catalão-GO'],
['<path d="M2 8.4a15 15 0 0 1 20 0"/><path d="M5.5 12.2a10 10 0 0 1 13 0"/><path d="M9 15.9a5 5 0 0 1 6 0"/><circle cx="12" cy="19.4" r="1"/>','Digital Net','internet banda larga']];
function bar(){
  if(D.querySelector('.dz-bar'))return;
  var s=D.querySelector('.js-main-slider-section'),f=D.querySelector('.section-home');
  if(!s&&!f)return;
  var h='';
  ICO.forEach(function(o){h+='<div><svg viewBox="0 0 24 24" aria-hidden="true">'+o[0]+'</svg><b>'+o[1]+'</b><span>'+o[2]+'</span></div>'});
  var b=el('div','dz-bar',h);
  if(s)s.insertAdjacentElement('afterend',b);else f.parentNode.insertBefore(b,f)}

/* 8. FAQ */
var FAQ=[
['Como faço para comprar?','Adicione o produto ao carrinho e finalize a compra pelo site. Se tiver dúvidas, fale com a gente no WhatsApp (64) 98144-0024.'],
['Quais são as formas de pagamento?','Cartão de crédito em até 12x e Pix.'],
['Qual é o prazo de entrega?','O prazo varia conforme a sua região. Calcule o frete e o prazo direto no carrinho antes de finalizar.'],
['Vocês têm loja física?','Sim. Estamos na Av. Aurora Evangelista da Rocha, 850 — Catalão-GO.'],
['Vocês fazem assistência técnica?','Sim, assistência técnica especializada. Fale com a gente no WhatsApp (64) 98144-0024.']];
function faq(){
  if(D.querySelector('.dz-faq'))return;
  var f=D.querySelector('footer.js-footer');if(!f||!f.parentNode)return;
  var h='<h2 class="section-title">Perguntas Frequentes</h2>';
  FAQ.forEach(function(q){h+='<details><summary>'+q[0]+'</summary><p>'+q[1]+'</p></details>'});
  f.parentNode.insertBefore(el('section','dz-faq',h),f)}

/* 9. marcas */
function brands(){
  if(D.querySelector('.dz-brands'))return;
  var q=D.querySelector('.dz-faq');if(!q||!q.parentNode)return;
  var h='';
  ['INTEL','AMD','PNY','KINGSTON','LOGITECH','TP-LINK'].forEach(function(b){h+='<span>'+b+'</span>'});
  q.parentNode.insertBefore(el('div','dz-brands',h),q)}

/* 11. marquee fallback */
function marquee(){
  if(D.querySelector('.dz-marquee')||D.querySelector('.section-welcome'))return;
  var t='CUPONS DE DESCONTO · FRETE COMBINADO · ATÉ 12X NO CARTÃO · ',r=t+t+t;
  D.body.insertBefore(el('div','dz-marquee','<div><span>'+r+'</span><span>'+r+'</span></div>'),D.body.firstChild)}

/* boot */
function run(){
  fonts();style();bar();countdown();faq();brands();mkTop();buyBtns();marquee();reveal();watch();onScroll()}
var mo=false,tm=null;
function watch(){
  if(mo||!window.MutationObserver)return;
  var c=D.querySelector('.js-home-sections-container');if(!c)return;mo=true;
  new MutationObserver(function(){
    clearTimeout(tm);tm=setTimeout(function(){buyBtns();bar();countdown();reveal()},300)
  }).observe(c,{childList:true,subtree:true})}
function boot(){
  run();
  var n=0,iv=setInterval(function(){run();if(++n>=5)clearInterval(iv)},1200)}
if(D.readyState==='loading')D.addEventListener('DOMContentLoaded',boot);else boot();
window.addEventListener('load',run);
window.addEventListener('scroll',onScroll,{passive:true});
})();
