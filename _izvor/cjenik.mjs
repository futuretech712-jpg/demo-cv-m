export default (h, datoteke) => {
  const { d, t, eur, datum, esc, opisBazne, demoTraka, demoTrakaCss, podnozje } = h;
  const objavljeno = d.cjenik.objavljeno;
  const sat = objavljeno.slice(11, 16).replace(':', '.');
  const red = (naziv, p) => `<tr><td>${esc(naziv)}</td><td>${p.sifra}</td><td class="br">${eur(p.cijena)}</td><td>${p.akcija ? esc(p.akcija) : 'ne'}</td><td class="br">${eur(p.bazna)}</td><td>${opisBazne(p)}</td></tr>`;
  const poveznica = (vrsta, nastavak) => { const f = datoteke.find(x => x.vrsta === vrsta && x.nastavak === nastavak); return `<a href="./${f.ime}">${nastavak.toUpperCase()}</a>`; };
  return `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Cjenik i bazne cijene, ${t.naziv}</title>
<meta name="description" content="Važeći cjenik robe i usluga u CSV i XML formatu, bazne cijene i arhiva zamijenjenih cjenika.">
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&display=swap">
<style>
:root{--poz:#FAF8F4;--tekst:#26231F;--crta:rgba(38,35,31,.2)}
*{box-sizing:border-box;min-width:0}
body{margin:0;background:var(--poz);color:var(--tekst);font:17px/1.6 Switzer,"Helvetica Neue",sans-serif}
h1{font-size:clamp(34px,4.4vw,52px);font-weight:500;line-height:1.1;margin:0 0 .5em}
h2{font-size:clamp(24px,2.6vw,30px);font-weight:500;margin:0 0 .6em}
p{margin:0 0 1em;max-width:66ch}
a{color:var(--tekst);text-underline-offset:3px}
:focus-visible{outline:3px solid var(--tekst);outline-offset:3px}
.sir{padding-inline:max(5vw,16px);max-width:1100px;margin-inline:auto}
${demoTrakaCss}
section{padding-block:clamp(32px,5vw,56px);border-bottom:1px solid var(--crta)}
.datoteke{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:24px}
.datoteke div{border:1px solid var(--crta);border-radius:4px;padding:20px}
.datoteke a{margin-right:16px;font-weight:600}
.datoteke code{font-size:14px;overflow-wrap:anywhere;display:block;margin-top:10px;opacity:.8}
.scroll{overflow-x:auto}
table{border-collapse:collapse;width:100%;min-width:720px}
th,td{text-align:left;padding:10px 12px 10px 0;border-bottom:1px solid var(--crta);vertical-align:top}
th{font-weight:600}
.br{text-align:right;white-space:nowrap}
.podnozje{background:var(--tekst);color:var(--poz);padding:48px max(5vw,16px)}.podnozje a{color:var(--poz)}
.pod-stupci{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px;max-width:1100px;margin:auto}
.pod-naziv{font-size:22px;font-weight:600}
@media(max-width:760px){.datoteke,.pod-stupci{grid-template-columns:minmax(0,1fr)}}
</style>
</head>
<body>
${demoTraka('')}
<main class="sir">
<section>
<h1>Cjenik i bazne cijene</h1>
<p>Ovdje su naši važeći cjenici u obliku koji računala mogu čitati, kako propisuju Pravilnik o isticanju bazne cijene proizvoda i Pravilnik o načinu objave cjenika proizvoda (NN 132/26). Isti cjenik vrijedi u radnji i na web stranici.</p>
<p>Bazna cijena je cijena s kojom je proizvod prvi put ušao u našu ponudu. Otvorili smo ${datum(t.otvorenje)}, nakon referentnog datuma 10. 9. 2026., pa je za sve proizvode to cijena s prvog dana u ponudi. Služi za usporedbu i ne plaća se dodatno.</p>
</section>
<section aria-labelledby="dat-naslov">
<h2 id="dat-naslov">Važeći cjenik</h2>
<p>Objavljen ${datum(objavljeno)} u ${sat}. Cjenik se objavljuje do 11.00 na dan svake promjene.</p>
<div class="datoteke">
<div><p style="margin:0 0 8px"><strong>Roba</strong></p>${poveznica('roba', 'csv')}${poveznica('roba', 'xml')}<code>${datoteke.find(x => x.vrsta === 'roba' && x.nastavak === 'csv').ime}</code><p style="margin:10px 0 0;font-size:16px">Stalna adresa: <a href="./aktualni-roba.csv">aktualni-roba.csv</a>, <a href="./aktualni-roba.xml">aktualni-roba.xml</a></p></div>
<div><p style="margin:0 0 8px"><strong>Usluge</strong></p>${poveznica('usluge', 'csv')}${poveznica('usluge', 'xml')}<code>${datoteke.find(x => x.vrsta === 'usluge' && x.nastavak === 'csv').ime}</code><p style="margin:10px 0 0;font-size:16px">Stalna adresa: <a href="./aktualni-usluge.csv">aktualni-usluge.csv</a>, <a href="./aktualni-usluge.xml">aktualni-usluge.xml</a></p></div>
</div>
<p style="margin-top:20px;font-size:16px">CSV je u UTF-8 kodiranju, stupci su odvojeni točkom-zarezom.</p>
</section>
<section aria-labelledby="tab-naslov">
<h2 id="tab-naslov">Pregled cijena</h2>
<div class="scroll"><table>
<thead><tr><th scope="col">Naziv</th><th scope="col">Šifra</th><th scope="col" class="br">Cijena</th><th scope="col">Akcija</th><th scope="col" class="br">Bazna cijena</th><th scope="col">Datum bazne cijene</th></tr></thead>
<tbody>${d.proizvodi.map(p => red(p.naziv, p)).join('')}${d.usluge.map(u => red(`${u.naziv}, ${u.opis}`, u)).join('')}</tbody>
</table></div>
<p style="margin-top:16px">Cijene su u eurima i konačne. Aranžmani za vjenčanja i događanja rade se po ponudi. Kad uđu u stalnu ponudu, ovdje će biti navedeni po elementima cijene.</p>
</section>
<section aria-labelledby="arh-naslov">
<h2 id="arh-naslov">Arhiva</h2>
<p>Zamijenjeni cjenici ostaju ovdje 30 dana. Arhiva je prazna dok se cjenik prvi put ne promijeni.</p>
</section>
</main>
${podnozje()}
</body>
</html>
`;
};
