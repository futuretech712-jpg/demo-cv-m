export default h => {
  const { t, demoTrakaCss } = h;
  const smjerovi = [
    { slovo: 'A', naziv: 'Sezonska tržnica', ideja: 'Svaki tjedan drugi buket od onoga što je u sezoni, ploča s tržnice i tjedna pretplata.', boje: ['#F3EEE4', '#3B4128', '#D99A1E', '#C9CFB0'], fontovi: 'Gambarino i Switzer' },
    { slovo: 'B', naziv: 'Atelijer', ideja: 'Cvjećar kao zanatlija: radovi, vjenčanja, događanja i poslovni prostori, upit za ponudu.', boje: ['#ECE9E3', '#3B2A35', '#9DAF7A', '#B9B2A8'], fontovi: 'Zodiak i General Sans' },
    { slovo: 'C', naziv: 'Kvartovska cvjećarna', ideja: 'Topla radnja u kvartu: buketi spremni danas, buket po mjeri u jednom dodiru, WhatsApp.', boje: ['#FFF9F2', '#6E1F2B', '#4A7A2C', '#F7E6D8'], fontovi: 'Fraunces (zamjena za Recoleta) i Switzer' }
  ];
  return `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Tri prijedloga, ${t.naziv}</title>
<meta name="robots" content="noindex">
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&display=swap">
<style>
*{box-sizing:border-box;min-width:0}
body{margin:0;background:#FAF8F4;color:#26231F;font:17px/1.6 Switzer,"Helvetica Neue",sans-serif}
.sir{padding-inline:max(5vw,16px);max-width:1100px;margin-inline:auto}
h1{font-size:clamp(34px,4.6vw,56px);font-weight:500;line-height:1.08;margin:48px 0 16px}
p{max-width:64ch;margin:0 0 1em}
a{color:#26231F;text-underline-offset:3px}
:focus-visible{outline:3px solid #26231F;outline-offset:3px}
${demoTrakaCss}
ol{list-style:none;padding:0;margin:40px 0}
li{display:grid;grid-template-columns:64px minmax(0,1fr) auto;gap:24px;align-items:center;padding:28px 0;border-top:1px solid rgba(38,35,31,.2)}
li:last-child{border-bottom:1px solid rgba(38,35,31,.2)}
.slovo{font-size:48px;font-weight:500;line-height:1}
h2{margin:0 0 4px;font-size:26px;font-weight:500}h2 a{text-decoration:none}h2 a:hover{text-decoration:underline}
.boje{display:flex}.boje span{width:36px;height:36px;border:1px solid rgba(0,0,0,.12)}
.mala{font-size:16px;margin:0}
@media(max-width:640px){li{grid-template-columns:48px minmax(0,1fr)}.boje{grid-column:2}}
</style>
</head>
<body>
<div class="demo-traka"><p>Demo za izbor smjera. Ime, cijene, rokovi i zone su primjeri.</p><nav><a href="./cjenik/">Cjenik</a></nav></div>
<main class="sir">
<h1>Tri prijedloga za ${t.naziv}</h1>
<p>Isti podaci, tri različita karaktera. Svaki prijedlog ima početnu stranicu, narudžbu bez registracije, cijene s baznom cijenom, dostavu pri vrhu i podnožje s podacima o trgovcu. Zajednički su stranica za sprovode i cjenik u CSV i XML formatu.</p>
<ol>${smjerovi.map(s => `<li><span class="slovo">${s.slovo}</span><div><h2><a href="./${s.slovo.toLowerCase()}/">${s.naziv}</a></h2><p class="mala">${s.ideja}</p><p class="mala">Fontovi: ${s.fontovi}</p></div><div class="boje" aria-label="Boje">${s.boje.map(b => `<span style="background:${b}" title="${b}"></span>`).join('')}</div></li>`).join('')}</ol>
<p class="mala">Sve cijene, rokovi i zone dolaze iz jedne datoteke (podaci.json), iz koje se slažu i stranice i cjenik.</p>
</main>
</body>
</html>
`;
};
