// ESTE arquivo NAO vai no repo por necessidade — e a referencia do que se cola
// no campo "JavaScript personalizado" do tema na Nuvemshop (unico codigo no admin).
// Trocar V para invalidar o cache do jsDelivr apos cada push.
(function () {
  var V = '1';
  var B = 'https://cdn.jsdelivr.net/gh/Kirschmf/nuvemshop-skins@main/digital/';
  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = B + 'skin.css?v=' + V;
  document.head.appendChild(l);
  var s = document.createElement('script');
  s.src = B + 'skin.js?v=' + V;
  document.head.appendChild(s);
})();
