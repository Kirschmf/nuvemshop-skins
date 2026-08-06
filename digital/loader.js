// ESTE arquivo e a REFERENCIA do que fica colado no campo "JavaScript
// personalizado" do tema (unico codigo no admin). Versao diaria = cache do
// navegador renovado a cada dia; push no repo propaga em ate ~12-24h sozinho.
(function () {
  var v = new Date().toISOString().slice(0, 10);
  var B = 'https://cdn.jsdelivr.net/gh/Kirschmf/nuvemshop-skins@main/digital/';
  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = B + 'skin.css?v=' + v;
  document.head.appendChild(l);
  var s = document.createElement('script');
  s.src = B + 'skin.js?v=' + v;
  document.head.appendChild(s);
})();
