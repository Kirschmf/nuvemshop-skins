/* Loader do campo JS (Personalizar tema Recife) — carrega a skin v7 "DEC em Azul"
   do CDN jsDelivr. Versao diaria (?v=YYYY-MM-DD) fura o cache de 7 dias do CDN:
   push no repo propaga em ate 24h sem tocar no admin. */
(function () {
  var v = new Date().toISOString().slice(0, 10);
  var b = 'https://cdn.jsdelivr.net/gh/Kirschmf/nuvemshop-skins@main/digital-recife/';
  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = b + 'skin.css?v=' + v;
  document.head.appendChild(l);
  var s = document.createElement('script');
  s.src = b + 'skin.js?v=' + v;
  s.defer = true;
  document.head.appendChild(s);
})();
