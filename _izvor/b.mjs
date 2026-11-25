export default h => {
  const { d, t, narudzba, narudzbaJs, obrazacCss, eur, cijena, foto, radnoVrijemeTablica, rokovi, waTekst, tel, kartaGoogle, schema, demoTraka, demoTrakaCss, mobilnaTraka, podnozje, skupina, po } = h;
  const buketi = [po('BUK-TJ'), ...skupina('gotovi')];
  const radovi = [
    ['Mjesto za fotografiju realiziranog rada: vjenčanje, mjesto i godina', '4 / 5', 'r1'],
    ['Mjesto za fotografiju realiziranog rada: stol na događanju', '4 / 3', 'r2'],
    ['Mjesto za fotografiju realiziranog rada: recepcija poslovnog prostora', '1 / 1', 'r3'],
    ['Mjesto za fotografiju realiziranog rada: detalj bidermajera', '3 / 4', 'r4'],
    ['Mjesto za fotografiju realiziranog rada: veliki aranžman u prostoru', '16 / 9', 'r5']
  ];
  return `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t.naziv}, aranžmani po narudžbi u Zagrebu</title>
<meta name="description" content="Cvijeće za vjenčanja, događanja i poslovne prostore, izrađeno po narudžbi. Zatražite ponudu ili naručite gotov buket.">
<link rel="preconnect" href="https://api.fontshare.com">
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=zodiak@400,300&f[]=general-sans@400,500,600&display=swap">
${schema()}
<style>
:root{--poz:#ECE9E3;--tekst:#3B2A35;--nagl:#9DAF7A;--sek:#B9B2A8;--crta:rgba(59,42,53,.25)}
*{box-sizing:border-box;min-width:0}
body{margin:0;background:var(--poz);color:var(--tekst);font:17px/1.6 "General Sans","Helvetica Neue",sans-serif;overflow-x:clip}
h1,h2,h3{font-family:Zodiak,Georgia,serif;font-weight:300;line-height:1.06;margin:0 0 .45em;text-wrap:balance}
h1{font-size:clamp(40px,5.4vw,76px)}
h2{font-size:clamp(34px,4.2vw,56px)}
h3{font-size:clamp(26px,2.4vw,32px);font-weight:400}
p{margin:0 0 1em;max-width:60ch}
a{color:var(--tekst);text-decoration-color:var(--nagl);text-decoration-thickness:2px;text-underline-offset:4px}
:focus-visible{outline:3px solid var(--tekst);outline-offset:3px}
.sir{padding-inline:max(5vw,16px);max-width:1400px;margin-inline:auto}
.gumb{display:inline-block;background:var(--nagl);color:var(--tekst);font-weight:600;text-decoration:none;padding:15px 28px;border-radius:2px;border:0;font-size:17px;cursor:pointer}
.gumb:hover{background:#8fa26a}
.cijena{margin:0 0 14px}.mpc{display:block;font-size:22px;font-weight:600}.bazna{display:block;font-size:16px;opacity:.85}
.foto{margin:0;width:100%;background:repeating-linear-gradient(45deg,rgba(59,42,53,.06) 0 14px,transparent 14px 28px),var(--sek);border:1px dashed var(--crta);display:flex;align-items:flex-end;padding:16px}
.foto span{font-size:15px;background:var(--poz);padding:4px 8px}
${demoTrakaCss}
.zag{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;padding-block:20px}
.zag .ime{font-family:Zodiak,Georgia,serif;font-size:28px;text-decoration:none}
.zag nav{display:flex;gap:26px;align-items:center;flex-wrap:wrap}
.zag nav a:not(.gumb){text-decoration:none}
.uvod{position:relative}
.uvod .foto{min-height:min(78vh,760px);aspect-ratio:auto !important;border-inline:0;justify-content:flex-end;align-items:flex-start}
.uvod-tekst{position:absolute;left:max(5vw,16px);bottom:0;background:var(--poz);padding:clamp(24px,3.5vw,48px) clamp(24px,3.5vw,48px) 0 0;max-width:min(720px,88%)}
.uvod-tekst .rok{font-size:16px;margin-top:20px;border-top:1px solid var(--crta);padding-top:14px}
.radovi{padding-block:clamp(56px,8vw,120px)}
.radovi-mreza{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:clamp(12px,2vw,28px);margin-top:32px;align-items:start}
.r1{grid-column:1/8;grid-row:span 2}.r2{grid-column:8/13}.r3{grid-column:8/11}.r4{grid-column:1/5}.r5{grid-column:5/13}
.radovi figcaption{font-size:16px;margin-top:8px}
.usluga{display:grid;gap:clamp(20px,4vw,64px);padding-block:clamp(40px,6vw,88px);border-top:1px solid var(--crta)}
.u1{grid-template-columns:minmax(0,7fr) minmax(0,5fr);align-items:end}
.u2{grid-template-columns:minmax(0,4fr) minmax(0,4fr) minmax(0,4fr)}
.u2 .tekst{grid-column:1}.u2 .foto:nth-of-type(1){margin-top:80px}
.u3 .redak{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:clamp(20px,4vw,64px);margin-top:24px}
.koraci{background:var(--tekst);color:var(--poz);padding-block:clamp(56px,8vw,112px)}
.koraci a{color:var(--poz)}
.koraci ol{list-style:none;padding:0;margin:36px 0 0;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(20px,3vw,48px);counter-reset:k}
.koraci li{counter-increment:k;border-top:1px solid rgba(236,233,227,.35);padding-top:16px}
.koraci li::before{content:counter(k);display:block;font-family:Zodiak,Georgia,serif;font-size:56px;line-height:1;margin-bottom:12px}
.koraci h3{font-size:24px}
.buketi{padding-block:clamp(56px,8vw,112px)}
.buketi-red{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:clamp(16px,2vw,28px);margin-top:28px}
.buketi-red h3{font-size:22px;margin-top:14px}
.buketi .rok{margin-top:24px}
.upit{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:clamp(24px,5vw,80px);padding-block:clamp(56px,8vw,112px);border-top:1px solid var(--crta)}
.upit-dva{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.narudzba-b{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:clamp(24px,5vw,80px);padding-block:clamp(56px,8vw,112px);border-top:1px solid var(--crta)}
.rv th{font-weight:400;text-align:left;padding:6px 16px 6px 0}.rv td{padding:6px 0}
.podnozje{background:var(--tekst);color:var(--poz);padding:48px max(5vw,16px) 96px}.podnozje a{color:var(--poz)}
.pod-stupci{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px;max-width:1400px;margin:auto}
.pod-naziv{font-family:Zodiak,Georgia,serif;font-size:26px}
.mob-traka{display:none}
${obrazacCss({ rub: '#3B2A35', polje: '#f7f5f1', oznaka: '#3B2A35' })}
@media(max-width:900px){
.uvod-tekst{position:static;max-width:none;padding:24px max(5vw,16px) 0}
.radovi-mreza{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}.radovi-mreza>*{grid-column:auto !important;grid-row:auto !important}.r1,.r5{grid-column:1/-1 !important}
.u1,.u2,.u3 .redak,.upit,.narudzba-b,.pod-stupci{grid-template-columns:minmax(0,1fr)}.u2 .foto:nth-of-type(1){margin-top:0}
.koraci ol{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
.buketi-red{grid-template-columns:repeat(4,minmax(240px,1fr));overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:12px}.buketi-red article{scroll-snap-align:start}
.zag nav a:not(.gumb){display:none}
.mob-traka{display:grid;grid-template-columns:1fr 1fr;position:fixed;inset:auto 0 0 0;z-index:5;background:var(--tekst)}
.mob-traka a{color:var(--poz);text-align:center;padding:16px;font-weight:600;text-decoration:none}.mob-traka a+a{border-left:1px solid rgba(236,233,227,.3)}
}
@media(max-width:520px){.koraci ol,.upit-dva{grid-template-columns:minmax(0,1fr)}}
</style>
</head>
<body>
${demoTraka('B')}
<header class="sir zag">
<a class="ime" href="#">${t.naziv}</a>
<nav aria-label="Glavna"><a href="#radovi">Radovi</a><a href="#usluge">Usluge</a><a href="#kako">Kako radimo</a><a href="#buketi">Buketi</a><a class="gumb" href="#upit">Zatražite ponudu</a></nav>
</header>
<main>
<section class="uvod" aria-labelledby="uvod-naslov">
${foto('Florist u radu, preko cijele širine: ruke, stol, cvijeće u nastajanju', 'auto')}
<div class="uvod-tekst">
<h1 id="uvod-naslov">Aranžmani po narudžbi, od prvog razgovora do postavljanja</h1>
<p>Vjenčanja, događanja i poslovni prostori. Svaki rad slažemo za jedno mjesto i jednu prigodu.</p>
<a class="gumb" href="#upit">Zatražite ponudu</a>
<p class="rok">Gotovi buketi: ${rokovi()}</p>
</div>
</section>

<section class="sir radovi" id="radovi" aria-labelledby="radovi-naslov">
<h2 id="radovi-naslov">Radovi</h2>
<p>Ova sekcija ide na objavljenu stranicu tek kad imamo dovoljno fotografija stvarnih radova.</p>
<div class="radovi-mreza">
${radovi.map(([opis, omjer, kl]) => `<figure class="${kl}" style="margin:0">${foto(opis, omjer)}<figcaption>Kratak opis prigode, jednom rečenicom</figcaption></figure>`).join('')}
</div>
</section>

<div id="usluge">
<section class="sir usluga u1" aria-labelledby="u-vj">
${foto('Vjenčani aranžman na stolu za mladence', '5 / 4')}
<div>
<h2 id="u-vj">Vjenčanja</h2>
<p>Bidermajer, rever, stolovi i prostor. Prvo se nađemo, pogledamo mjesto i dogovorimo boje. Prijedlog s cijenom po stavkama šaljemo u tjedan dana.</p>
<a href="#upit">Upit za vjenčanje</a>
</div>
</section>
<section class="sir usluga u2" aria-labelledby="u-dog">
<div class="tekst">
<h2 id="u-dog">Događanja</h2>
<p>Konferencije, večere, otvorenja. Dolazimo na postavljanje i po potrebi odnesemo aranžmane nakon događaja.</p>
<a href="#upit">Upit za događanje</a>
</div>
${foto('Dugi stol s niskim aranžmanima', '3 / 4')}
${foto('Aranžman na pultu za registraciju gostiju', '3 / 4')}
</section>
<section class="sir usluga u3" aria-labelledby="u-pro">
${foto('Recepcija poslovnog prostora s velikim aranžmanom', '21 / 9')}
<div class="redak">
<h2 id="u-pro">Poslovni prostori</h2>
<div>
<p>Aranžman za recepciju ili sobu za sastanke, mijenjamo ga svaki tjedan ili svaka dva tjedna. Cijena po aranžmanu i dolasku, dogovorena unaprijed.</p>
<a href="#upit">Upit za poslovni prostor</a>
</div>
</div>
</section>
</div>

<section class="koraci" id="kako" aria-labelledby="kako-naslov">
<div class="sir">
<h2 id="kako-naslov">Kako radimo</h2>
<ol>
<li><h3>Razgovor</h3><p>Javite se upitom ili telefonom. Pitamo za datum, mjesto, broj gostiju i okvirni budžet.</p></li>
<li><h3>Prijedlog</h3><p>Šaljemo skicu, popis cvijeća i cijenu po stavkama. Mijenjamo dok ne bude kako želite.</p></li>
<li><h3>Izrada</h3><p>Cvijeće naručujemo prema sezoni i slažemo dan ili dva prije prigode.</p></li>
<li><h3>Dostava</h3><p>Donosimo, postavljamo i po dogovoru odnosimo nakon prigode.</p></li>
</ol>
</div>
</section>

<section class="sir buketi" id="buketi" aria-labelledby="buketi-naslov">
<h2 id="buketi-naslov">Gotovi buketi</h2>
<div class="buketi-red">
${buketi.map(p => `<article>${foto(p.foto, '4 / 5')}<h3>${p.naziv}</h3><p>${p.opis}</p>${cijena(p)}<a href="#narudzba" data-sifra="${p.sifra}">Naručite</a></article>`).join('')}
</div>
<p class="rok">${rokovi()} Zone i cijene dostave su u <a href="../cjenik/">cjeniku</a>.</p>
</section>

<section class="sir narudzba-b" id="narudzba" aria-labelledby="narudzba-naslov">
<div><h2 id="narudzba-naslov">Narudžba buketa</h2><p>Bez registracije. Potvrdu šaljemo e-poštom.</p></div>
${narudzba({ odabrano: 'BUK-TJ', ti: false })}
</section>

<section class="sir upit" id="upit" aria-labelledby="upit-naslov">
<div>
<h2 id="upit-naslov">Zatražite ponudu</h2>
<p>Odgovaramo u jedan radni dan. Ako je prigoda za manje od tjedan dana, radije nazovite.</p>
<p><a href="${tel}">${t.telefon}</a><br><a href="${waTekst('Dobar dan, zanima me ponuda za aranžman.')}">WhatsApp ${t.whatsapp}</a></p>
<p>${t.adresa}, ${t.posta}<br><a href="${kartaGoogle}">Karta</a></p>
${radnoVrijemeTablica()}
</div>
<form class="obrazac" id="obrazac-upita" novalidate>
<div class="upit-dva">
<div class="polje"><label for="u-datum">Datum prigode</label><input id="u-datum" type="date"></div>
<div class="polje"><label for="u-prigoda">Prigoda</label><select id="u-prigoda"><option>Vjenčanje</option><option>Događanje</option><option>Poslovni prostor</option><option>Nešto drugo</option></select></div>
</div>
<div class="polje"><label for="u-mjesto">Mjesto</label><input id="u-mjesto"></div>
<div class="polje"><label for="u-budzet">Okvirni budžet</label><select id="u-budzet"><option>Do 300,00 €</option><option>300,00 € do 800,00 €</option><option>800,00 € do 2.000,00 €</option><option>Više od 2.000,00 €</option><option>Još ne znam</option></select></div>
<div class="polje"><label for="u-poruka">Što zamišljate</label><textarea id="u-poruka" rows="4"></textarea></div>
<div class="upit-dva">
<div class="polje"><label for="u-ime">Ime i prezime</label><input id="u-ime" autocomplete="name"></div>
<div class="polje"><label for="u-tel">Telefon</label><input id="u-tel" type="tel" autocomplete="tel"></div>
</div>
<div class="polje"><label for="u-email">E-pošta</label><input id="u-email" type="email" autocomplete="email"></div>
<button class="gumb" type="submit">Pošaljite upit</button>
<p class="poruka-demo" id="u-demo" role="status" hidden>Ovo je demo, upit nije poslan.</p>
</form>
</section>
</main>
${podnozje()}
${mobilnaTraka()}
${narudzbaJs}
<script>{const f=document.getElementById('obrazac-upita');f.addEventListener('submit',e=>{e.preventDefault();document.getElementById('u-demo').hidden=false})}</script>
</body>
</html>
`;
};
