export default h => {
  const { d, t, narudzba, narudzbaJs, obrazacCss, eur, datum, datumRijecima, cijena, foto, radnoVrijemeTablica, dostavaTablica, rokovi, waTekst, tel, kartaGoogle, kartaApple, schema, demoTraka, demoTrakaCss, mobilnaTraka, podnozje, po, skupina } = h;
  const tjedni = po('BUK-TJ');
  const ostali = skupina('gotovi');
  const pretplate = skupina('pretplata');
  return `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t.naziv}, sezonsko cvijeće u Zagrebu</title>
<meta name="description" content="Svaki tjedan novi buket od cvijeća koje je upravo u sezoni. Narudžba do ${d.narudzba.rokIstiDan} za dostavu isti dan, preuzimanje u radnji i tjedna pretplata.">
<link rel="preconnect" href="https://api.fontshare.com">
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=gambarino@400&f[]=switzer@400,500,600&display=swap">
${schema()}
<style>
:root{--poz:#F3EEE4;--tekst:#3B4128;--nagl:#D99A1E;--nagl-tekst:#2B2F1C;--sek:#C9CFB0;--crta:rgba(59,65,40,.28)}
*{box-sizing:border-box;min-width:0}
html{scroll-padding-top:24px}
body{margin:0;background:var(--poz);color:var(--tekst);font:17px/1.6 Switzer,"Helvetica Neue",sans-serif;overflow-x:clip}
h1,h2,h3{font-family:Gambarino,Georgia,serif;font-weight:400;line-height:1.08;margin:0 0 .4em;text-wrap:balance}
h1{font-size:clamp(40px,6vw,72px)}
h2{font-size:clamp(32px,4vw,48px)}
h3{font-size:28px}
p{margin:0 0 1em;max-width:62ch}
a{color:var(--tekst);text-decoration-color:var(--nagl);text-decoration-thickness:2px;text-underline-offset:3px}
a:hover{text-decoration-thickness:3px}
:focus-visible{outline:3px solid var(--tekst);outline-offset:3px}
.sir{padding-inline:max(5vw,16px);max-width:1320px;margin-inline:auto}
.gumb{display:inline-block;background:var(--nagl);color:var(--nagl-tekst);font-weight:600;text-decoration:none;padding:14px 26px;border-radius:4px;border:0;font-size:17px;cursor:pointer}
.gumb:hover{background:#c98c14}
.cijena{margin:0 0 20px}
.mpc{display:block;font-size:30px;font-weight:600;line-height:1.2}
.mpc .jed{font-size:17px;font-weight:400}
.bazna{display:block;font-size:17px;opacity:.85}
.foto{margin:0;background:repeating-linear-gradient(135deg,rgba(59,65,40,.05) 0 12px,transparent 12px 24px),var(--sek);border:1px dashed var(--crta);border-radius:4px;display:flex;align-items:flex-end;padding:16px;width:100%}
.foto span{font-size:15px;background:var(--poz);padding:4px 8px;border-radius:2px}
${demoTrakaCss}
.zag{display:flex;justify-content:space-between;align-items:baseline;gap:16px;flex-wrap:wrap;padding-block:22px}
.zag .ime{font-family:Gambarino,Georgia,serif;font-size:30px;text-decoration:none}
.zag nav{display:flex;gap:22px;flex-wrap:wrap}
.zag nav a{text-decoration:none}.zag nav a:hover{text-decoration:underline;text-decoration-color:var(--nagl)}
.rok{background:var(--sek)}
.rok p{margin:0;padding-block:12px;max-width:none}
.tjedan{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:clamp(24px,4vw,64px);align-items:end;padding-block:clamp(32px,5vw,72px)}
.tjedan .kada{font-size:19px;margin-bottom:12px}
.tjedan .opis{font-size:19px}
.tjedan .ili{margin-top:16px}
.ploca-traka{background:var(--sek);padding-block:clamp(40px,6vw,88px)}
.ploca{border:2px solid var(--tekst);border-radius:4px;padding:clamp(24px,4vw,48px);background:var(--poz)}
.ploca ul{list-style:none;margin:8px 0 0;padding:0;columns:3 220px;column-gap:48px}
.ploca li{font-family:Gambarino,Georgia,serif;font-size:clamp(26px,3vw,36px);line-height:1.5;break-inside:avoid}
.ploca .pis{margin-top:20px}
.pretplata{padding-block:clamp(48px,7vw,104px);display:grid;grid-template-columns:minmax(0,4fr) minmax(0,7fr);gap:clamp(24px,5vw,80px)}
table{border-collapse:collapse;width:100%}
th,td{text-align:left;padding:14px 12px 14px 0;border-bottom:1px solid var(--crta);vertical-align:top}
thead th{font-weight:600}
.br{text-align:right;white-space:nowrap}
.br .bazna{font-size:15px}
.pretplata table td:first-child{font-family:Gambarino,Georgia,serif;font-size:24px;white-space:nowrap}
.pretplata .gumb{margin-top:24px}
.ostalo{padding-block:clamp(48px,6vw,88px);border-top:1px solid var(--crta)}
.ostalo-mreza{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,5fr);gap:clamp(20px,3vw,40px);margin-top:24px}
.ostalo-desno{display:grid;gap:28px}
.ostalo-desno article{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,3fr);gap:20px;align-items:start}
.prigode{margin-top:36px;font-size:19px;display:flex;flex-wrap:wrap;gap:8px 22px}
.prigode a{white-space:nowrap}
.dostava-traka{background:var(--sek);padding-block:clamp(48px,6vw,88px)}
.dostava-mreza{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:clamp(24px,5vw,80px)}
.dostava-traka table{background:var(--poz)}
.dostava-traka th,.dostava-traka td{padding-inline:14px}
.tko{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:clamp(24px,5vw,80px);align-items:center;padding-block:clamp(48px,7vw,104px)}
.kontakt{border-top:1px solid var(--crta);padding-block:clamp(48px,6vw,88px);display:grid;grid-template-columns:minmax(0,4fr) minmax(0,4fr) minmax(0,5fr);gap:clamp(24px,4vw,56px)}
.rv th{font-weight:400}
.podnozje{background:var(--tekst);color:var(--poz);padding:48px max(5vw,16px) 96px}
.podnozje a{color:var(--poz)}
.pod-stupci{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px;max-width:1320px;margin:auto}
.pod-naziv{font-family:Gambarino,Georgia,serif;font-size:26px}
.mob-traka{display:none}
.narudzba{display:grid;grid-template-columns:minmax(0,4fr) minmax(0,7fr);gap:clamp(24px,5vw,80px);padding-block:clamp(48px,7vw,104px);border-top:1px solid var(--crta)}
${obrazacCss({ rub: '#3B4128', polje: '#fffdf8', oznaka: '#3B4128' })}
@media(max-width:860px){
.tjedan,.pretplata,.narudzba,.ostalo-mreza,.dostava-mreza,.tko,.kontakt,.pod-stupci{grid-template-columns:minmax(0,1fr)}
.ostalo-desno article{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
.mob-traka{display:grid;grid-template-columns:1fr 1fr;position:fixed;inset:auto 0 0 0;z-index:5;background:var(--tekst)}
.mob-traka a{color:var(--poz);text-align:center;padding:16px;font-weight:600;text-decoration:none}
.mob-traka a+a{border-left:1px solid rgba(243,238,228,.3)}
.zag nav{display:none}
}
@media(max-width:600px){table{font-size:16px}.pretplata table td:first-child{font-size:20px}}
</style>
</head>
<body>
${demoTraka('A')}
<header class="sir zag">
<a class="ime" href="#">${t.naziv}</a>
<nav aria-label="Glavna"><a href="#tjedan">Ovaj tjedan</a><a href="#pretplata">Pretplata</a><a href="#dostava">Dostava</a><a href="#kontakt">Kontakt</a></nav>
</header>
<div class="rok"><p class="sir">${rokovi()}</p></div>
<main>
<section class="sir tjedan" id="tjedan" aria-labelledby="tjedan-naslov">
${foto(tjedni.foto, '5 / 4')}
<div>
<p class="kada">Ovaj tjedan, od ${datumRijecima(d.tjedan.od)} do ${datumRijecima(d.tjedan.do)}</p>
<h1 id="tjedan-naslov">${tjedni.opis}</h1>
<p class="opis">Složimo ga od onoga što je ovaj tjedan stiglo s tržnice. Sljedeći tjedan bit će drugačiji.</p>
${cijena(tjedni)}
<a class="gumb" href="#narudzba" data-sifra="BUK-TJ">Naruči za ${eur(tjedni.cijena)}</a>
<p class="ili"><a href="${waTekst(`Dobar dan, želim naručiti buket tjedna (${eur(tjedni.cijena)}).`)}">ili pošalji poruku na WhatsApp</a></p>
</div>
</section>

<section class="ploca-traka" aria-labelledby="ploca-naslov">
<div class="sir">
<div class="ploca">
<h2 id="ploca-naslov">Na ploči ovaj tjedan</h2>
<ul>${d.sezona.map(s => `<li>${s}</li>`).join('')}</ul>
<p class="pis">Od ovoga slažemo bukete i aranžmane po narudžbi. Ploču mijenjamo svakog ponedjeljka.</p>
</div>
</div>
</section>

<section class="sir pretplata" id="pretplata" aria-labelledby="pretplata-naslov">
<div>
<h2 id="pretplata-naslov">Buket tjedna svaki tjedan</h2>
<p>Odabereš veličinu i dan, a mi svaki tjedan donesemo buket tjedna. Pretplatu mijenjaš, pauziraš ili otkažeš preko poveznice iz e-pošte, bez korisničkog računa.</p>
</div>
<div>
<table>
<thead><tr><th scope="col">Veličina</th><th scope="col">Što dobiješ</th><th scope="col" class="br">Tjedno</th></tr></thead>
<tbody>${pretplate.map(p => `<tr><td>${p.naziv.replace('Pretplata, ', '').replace(' buket', '')}</td><td>${p.opis}</td><td class="br">${eur(p.cijena)}<span class="bazna">bazna ${eur(p.bazna)}</span></td></tr>`).join('')}</tbody>
</table>
<p class="bazna" style="margin-top:12px">Bazne cijene: prvi dan u ponudi, ${datum(pretplate[0].datumBazne)}. Dostava se plaća prema zoni.</p>
<a class="gumb" href="#narudzba" data-sifra="PRE-S">Pokreni pretplatu</a>
</div>
</section>

<section class="sir ostalo" aria-labelledby="ostalo-naslov">
<h2 id="ostalo-naslov">Spremno u radnji</h2>
<div class="ostalo-mreza">
<article>
${foto(ostali[0].foto, '1 / 1')}
<h3 style="margin-top:16px">${ostali[0].naziv}</h3>
<p>${ostali[0].opis}</p>
${cijena(ostali[0])}
<a href="#narudzba" data-sifra="${ostali[0].sifra}">Naruči</a>
</article>
<div class="ostalo-desno">
${ostali.slice(1).map(p => `<article>${foto(p.foto, '1 / 1')}<div><h3>${p.naziv}</h3><p>${p.opis}</p>${cijena(p)}<a href="#narudzba" data-sifra="${p.sifra}">Naruči</a></div></article>`).join('')}
</div>
</div>
<p class="prigode">Za prigodu: <a href="#narudzba">rođendan</a><a href="#narudzba">zahvala</a><a href="#narudzba">isprika</a><a href="#narudzba">samo tako</a></p>
<p>Za sprovode imamo <a href="../sprovod/">posebnu stranicu</a> i telefon ${t.telefon}.</p>
</section>

<section class="dostava-traka" id="dostava" aria-labelledby="dostava-naslov">
<div class="sir dostava-mreza">
<div>
<h2 id="dostava-naslov">Dostava i preuzimanje</h2>
<p>${rokovi()}</p>
<p>Nedjeljom i blagdanima ne dostavljamo. Ako primatelja nema kod kuće, nazovemo tebe pa dogovorimo.</p>
</div>
${dostavaTablica()}
</div>
</section>

<section class="sir narudzba" id="narudzba" aria-labelledby="narudzba-naslov">
<div>
<h2 id="narudzba-naslov">Narudžba</h2>
<p>Bez registracije. Pitamo samo ono što trebamo da buket stigne na vrijeme i pravoj osobi.</p>
</div>
${narudzba({ odabrano: 'BUK-TJ', ti: true })}
</section>

<section class="sir tko" aria-labelledby="tko-naslov">
${foto('Vlasnica za radnim stolom, s cvijećem iz ove sezone', '4 / 3')}
<div>
<h2 id="tko-naslov">Tko smo</h2>
<p>Ovdje ide kratka priča vlasnice, njezinim riječima: zašto otvara cvjećarnu i zašto baš sezonsko cvijeće. Dvije do tri rečenice, bez velikih riječi.</p>
<p>${t.vlasnik}</p>
</div>
</section>

<section class="sir kontakt" id="kontakt" aria-labelledby="kontakt-naslov">
<div>
<h2 id="kontakt-naslov">Kontakt</h2>
<p>${t.adresa}<br>${t.posta}</p>
<p><a href="${tel}">${t.telefon}</a><br><a href="${waTekst('Dobar dan,')}">WhatsApp ${t.whatsapp}</a><br><a href="mailto:${t.email}">${t.email}</a></p>
</div>
<div>
<h3>Radno vrijeme</h3>
${radnoVrijemeTablica()}
</div>
<div>
${foto('Statična karta s označenom radnjom', '4 / 3')}
<p style="margin-top:12px"><a href="${kartaGoogle}">Otvori u Google Maps</a><br><a href="${kartaApple}">Otvori u Apple Maps</a></p>
</div>
</section>
</main>
${podnozje()}
${mobilnaTraka()}
${narudzbaJs}
</body>
</html>
`;
};
