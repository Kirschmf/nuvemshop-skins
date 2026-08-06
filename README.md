# nuvemshop-skins

Skins de temas Nuvemshop servidas por CDN (jsDelivr). No admin da loja fica apenas
um loader de ~300 chars no campo de JavaScript; todo o CSS/JS real mora aqui.

- Sem limite de 5000 chars por campo, sem FTP, sem sanitizador de CSS.
- `skin.css` = CSS completo com seletores JA PREFIXADOS (`#ns-section-<slug> ...`)
  — fora dos campos do admin nao existe auto-prefixo.
- `skin.js` = animacoes, reveal, keyframes e decoracoes.
- Cache: jsDelivr cacheia `@main` por ate 12h. Apos push, subir o `?v=` no loader
  (arquivo `loader.js` de cada pasta e a referencia do que esta colado no admin)
  ou purgar: `https://purge.jsdelivr.net/gh/Kirschmf/nuvemshop-skins@main/...`.
- Conteudo aqui e o mesmo que a vitrine entrega ao navegador (publico por natureza).
  NUNCA commitar segredo, credencial ou documentacao interna de cliente.

| Pasta | Loja | Tema |
|---|---|---|
| `digital/` | Digital Informatica (digitalvendas3) | Ipanema, editor novo |
