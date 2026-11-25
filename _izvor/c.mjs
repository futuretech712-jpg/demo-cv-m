export default h => {
  const { d, t, narudzba, narudzbaJs, obrazacCss, eur, cijena, foto, radnoVrijemeTablica, rokovi, waTekst, tel, kartaGoogle, kartaApple, schema, demoTraka, demoTrakaCss, mobilnaTraka, podnozje, skupina, po } = h;
  const danas = [po('BUK-TJ'), ...skupina('gotovi')];
  const mjera = skupina('mjera');
  const oznaka = p => p.danas.length === 2 ? 'za preuzimanje i dostavu' : `samo za ${p.danas[0]}`;
  const boje = ['bijela i zelena', 'ružičasta', 'žuta i narančasta', 'šarena'];
  return `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t.naziv}, cvjećarna u kvartu</title>
<meta name="description" content="Mala cvjećarna u kvartu. Buketi spremni danas, buket po mjeri od ${eur(mjera[0].cijena)}, preuzimanje usput ili dostava isti dan za narudžbe do ${d.narudzba.rokIstiDan}.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,300..700,0..100&display=swap">
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&display=swap">
${schema()}
<style>
:root{--poz:#FFF9F2;--tekst:#6E1F2B;--nagl:#5E8C3A;--gumb:#4A7A2C;--sek:#F7E6D8;--crta:rgba(110,31,43,.22)}
*{box-sizing:border-box;min-width:0}
body{margin:0;background:var(--poz);color:var(--tekst);font:17px/1.6 Switzer,"Helvetica Neue",sans-serif;overflow-x:clip}
h1,h2,h3{font-family:Fraunces,Georgia,serif;font-variation-settings:"SOFT" 100;font-weight:600;line-height:1.05;margin:0 0 .4em;text-wrap:balance}
h1{font-size:clamp(44px,6.4vw,84px);letter-spacing:-.01em}
h2{font-size:clamp(32px,4vw,52px)}
h3{font-size:24px}
p{margin:0 0 1em;max-width:58ch}
a{color:var(--tekst);text-decoration-color:var(--nagl);text-decoration-thickness:2px;text-underline-offset:3px}
:focus-visible{outline:3px solid var(--tekst);outline-offset:3px}
.sir{padding-inline:max(5vw,16px);max-width:1280px;margin-inline:auto}
.gumb{display:inline-block;background:var(--gumb);color:#fff;font-weight:600;text-decoration:none;padding:15px 24px;border-radius:4px;border:0;font-size:17px;cursor:pointer;font-family:inherit}
.gumb:hover{background:#3f6a25}
.gumb-dva{display:inline-block;color:var(--tekst);font-weight:600;padding:13px 22px;border:2px solid var(--tekst);border-radius:4px;text-decoration:none}
.gumb-dva:hover{background:var(--sek)}
.cijena{margin:0 0 12px}.mpc{display:block;font-size:24px;font-weight:600}.bazna{display:block;font-size:16px}
.foto{margin:0;width:100%;background:repeating-linear-gradient(135deg,rgba(110,31,43,.05) 0 10px,transparent 10px 20px),var(--sek);border:1px dashed var(--crta);border-radius:4px;display:flex;align-items:flex-end;padding:14px}
.foto span{font-size:15px;background:var(--poz);padding:4px 8px;border-radius:2px}
${demoTrakaCss}
.zag{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;padding-block:16px;border-bottom:1px solid var(--crta)}
.zag .ime{font-family:Fraunces,Georgia,serif;font-variation-settings:"SOFT" 100;font-weight:600;font-size:24px;text-decoration:none}
.otvoreno{margin:0;font-weight:500}
.uvod{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,5fr);gap:clamp(24px,4vw,64px);align-items:center;padding-block:clamp(32px,5vw,72px)}
.uvod .vrijeme{font-size:19px}
.akcije{display:flex;flex-wrap:wrap;gap:12px;margin-top:8px}
.uvod .rok{margin-top:20px;font-size:16px}
.danas{background:var(--sek);padding-block:clamp(48px,7vw,96px)}
.danas-mreza{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:clamp(20px,3vw,36px);margin-top:28px}
.danas h3{margin-top:14px}
.danas .gdje{font-size:16px;margin-bottom:10px;border-left:3px solid var(--nagl);padding-left:10px}
.mjera{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:clamp(24px,5vw,80px);padding-block:clamp(56px,8vw,112px)}
.mjera fieldset{border:0;padding:0;margin:0 0 22px}
.mjera legend{font-weight:600;margin-bottom:10px}
.plocice{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
.plocice label{position:relative;display:block}
.plocice input{position:absolute;opacity:0;inset:0}
.plocice span{display:block;border:2px solid var(--crta);border-radius:4px;padding:14px 10px;text-align:center;font-weight:600;cursor:pointer;min-height:56px}
.plocice input:checked+span{border-color:var(--tekst);background:var(--sek)}
.plocice input:focus-visible+span{outline:3px solid var(--tekst);outline-offset:2px}
.boje{grid-template-columns:repeat(2,minmax(0,1fr))}
.sazetak{border-top:1px solid var(--crta);padding-top:18px}
.sazetak .mpc{font-size:30px}
.prigode{border-top:1px solid var(--crta);padding-block:clamp(40px,6vw,80px)}
.prigode ul{list-style:none;padding:0;margin:20px 0;display:flex;flex-wrap:wrap;gap:12px 40px}
.prigode li a{font-family:Fraunces,Georgia,serif;font-variation-settings:"SOFT" 100;font-size:clamp(28px,3.4vw,40px);font-weight:500}
.narudzba-c{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:clamp(24px,5vw,80px);padding-block:clamp(56px,8vw,112px);background:var(--sek)}
.narudzba-c>*{max-width:none}
.tko{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:clamp(24px,5vw,80px);align-items:center;padding-block:clamp(56px,8vw,112px)}
.dolazak{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,5fr);gap:clamp(24px,5vw,80px);padding-block:clamp(48px,7vw,96px);border-top:1px solid var(--crta)}
.rv th{font-weight:400;text-align:left;padding:5px 16px 5px 0}.rv td{padding:5px 0;white-space:nowrap}
.podnozje{background:var(--tekst);color:var(--poz);padding:48px max(5vw,16px) 96px}.podnozje a{color:var(--poz);text-decoration-color:#b9d79e}
.pod-stupci{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px;max-width:1280px;margin:auto}
.pod-naziv{font-family:Fraunces,Georgia,serif;font-size:26px}
.mob-traka{display:none}
${obrazacCss({ rub: '#6E1F2B', polje: '#fffdfb', oznaka: '#4A7A2C' })}
@media(max-width:860px){
.uvod,.mjera,.narudzba-c,.tko,.dolazak,.pod-stupci{grid-template-columns:minmax(0,1fr)}
.uvod .foto{order:-1;aspect-ratio:3 / 2 !important}
.plocice{grid-template-columns:repeat(2,minmax(0,1fr))}
.mob-traka{display:grid;grid-template-columns:1fr 1fr;position:fixed;inset:auto 0 0 0;z-index:5;background:var(--gumb)}
.mob-traka a{color:#fff;text-align:center;padding:16px;font-weight:600;text-decoration:none}.mob-traka a+a{border-left:1px solid rgba(255,255,255,.35)}
}
</style>
</head>
<body>
${demoTraka('C')}
<header class="sir zag">
<a class="ime" href="#">${t.naziv}</a>
<p class="otvoreno" id="otvoreno">${d.radnoVrijeme[0].dani}: ${d.radnoVrijeme[0].od} do ${d.radnoVrijeme[0].do}</p>
</header>
<main>
<section class="sir uvod" aria-labelledby="uvod-naslov">
<div>
<h1 id="uvod-naslov">${t.naziv}</h1>
<p class="vrijeme">Mala cvjećarna u tvom kvartu, na adresi ${t.adresa}. Svrati usput ili naruči, složimo i pošaljemo.</p>
<div class="akcije">
<a class="gumb" href="#danas">Naruči online</a>
<a class="gumb-dva" href="${waTekst('Bok, želim naručiti buket.')}">Pošalji poruku na WhatsApp</a>
</div>
<p class="rok">${rokovi()}</p>
</div>
${foto('Izlog radnje s cvijećem i vlasnicom na vratima', '4 / 5')}
</section>

<section class="danas" id="danas" aria-labelledby="danas-naslov">
<div class="sir">
<h2 id="danas-naslov">Spremno danas</h2>
<p>Ovo je složeno jutros i čeka u radnji. Kad se proda, nestaje s popisa.</p>
<div class="danas-mreza">
${danas.map(p => `<article>${foto(p.foto, '1 / 1')}<h3>${p.naziv}</h3><p class="gdje">${oznaka(p)}</p>${cijena(p)}<a href="#narudzba" data-sifra="${p.sifra}">Naruči</a></article>`).join('')}
</div>
</div>
</section>

<section class="sir mjera" id="mjera" aria-labelledby="mjera-naslov">
<div>
<h2 id="mjera-naslov">Buket po mjeri</h2>
<p>Odaberi koliko želiš potrošiti i boju, a mi složimo od onoga što je danas najljepše. Cijena je fiksna za svaku veličinu, pa znaš točno koliko plaćaš.</p>
<p>Za više od ${eur(mjera[mjera.length - 1].cijena)} <a href="${waTekst('Bok, zanima me veći buket po mjeri.')}">javi se porukom</a> i dogovorimo.</p>
</div>
<form id="obrazac-mjera" novalidate>
<fieldset><legend>Koliko</legend>
<div class="plocice">${mjera.map((p, i) => `<label><input type="radio" name="budzet" value="${p.sifra}" data-cijena="${p.cijena}" data-bazna="${p.bazna}"${i === 1 ? ' checked' : ''}><span>${eur(p.cijena)}</span></label>`).join('')}<label><input type="radio" name="budzet" value="vise"><span>Više</span></label></div>
</fieldset>
<fieldset><legend>Boja</legend>
<div class="plocice boje">${boje.map((b, i) => `<label><input type="radio" name="boja" value="${b}"${i === 1 ? ' checked' : ''}><span>${b}</span></label>`).join('')}</div>
</fieldset>
<div class="sazetak" aria-live="polite">
<p id="mjera-opis"></p>
<p class="cijena"><span class="mpc" id="mjera-cijena"></span><span class="bazna" id="mjera-bazna"></span></p>
<a class="gumb" href="#narudzba" id="mjera-gumb">Naruči ovaj buket</a>
</div>
</form>
</section>

<section class="sir prigode" aria-labelledby="prigode-naslov">
<h2 id="prigode-naslov">Za koju prigodu</h2>
<ul><li><a href="#danas">Rođendan</a></li><li><a href="#mjera">Isprika</a></li><li><a href="#mjera">Samo tako</a></li></ul>
<p>Za sprovode imamo <a href="../sprovod/">posebnu stranicu</a> i telefon ${t.telefon}.</p>
</section>

<section class="narudzba-c" id="narudzba" aria-labelledby="narudzba-naslov">
<div class="sir" style="padding-inline:max(5vw,16px) 0;margin:0"><h2 id="narudzba-naslov">Narudžba</h2><p>Bez registracije, u par koraka. Potvrda stiže e-poštom.</p></div>
<div class="sir" style="padding-inline:0 max(5vw,16px);margin:0">${narudzba({ odabrano: 'BPM-40', ti: true })}</div>
</section>

<section class="sir tko" aria-labelledby="tko-naslov">
${foto('Vlasnica i suradnica u radnji, za pultom', '5 / 4')}
<div>
<h2 id="tko-naslov">Tko smo</h2>
<p>Ovdje idu imena i kratka priča, njihovim riječima: zašto baš ovaj kvart i ova radnja. Dvije do tri rečenice.</p>
<p>${t.vlasnik}</p>
</div>
</section>

<section class="sir dolazak" aria-labelledby="dolazak-naslov">
<div>
${foto('Statična karta kvarta s označenom radnjom', '16 / 10')}
<p style="margin-top:12px"><a href="${kartaGoogle}">Otvori u Google Maps</a> ili <a href="${kartaApple}">Apple Maps</a></p>
</div>
<div>
<h2 id="dolazak-naslov">Kako do nas</h2>
<p>${t.adresa}, ${t.posta}</p>
<p>Tramvaj: ovdje idu linije i najbliža stanica.<br>Parking: ovdje ide gdje se može parkirati na kratko.</p>
${radnoVrijemeTablica()}
<p style="margin-top:16px"><a href="${tel}">${t.telefon}</a></p>
</div>
</section>
</main>
${podnozje()}
${mobilnaTraka()}
${narudzbaJs}
<script>{
const fmt=new Intl.NumberFormat('hr-HR',{style:'currency',currency:'EUR',minimumFractionDigits:2});
const f=document.getElementById('obrazac-mjera');
const osvjezi=()=>{const b=f.budzet.value==='vise'?null:f.querySelector('input[name=budzet]:checked');const boja=f.boja.value;const opis=document.getElementById('mjera-opis'),c=document.getElementById('mjera-cijena'),bz=document.getElementById('mjera-bazna'),g=document.getElementById('mjera-gumb');
if(!b){opis.textContent='Veći buket, '+boja+'. Cijenu dogovaramo porukom.';c.textContent='';bz.textContent='';g.textContent='Pošalji poruku';g.href='https://wa.me/${t.whatsappLink}?text='+encodeURIComponent('Bok, zanima me buket po mjeri veći od ${eur(mjera[mjera.length - 1].cijena)}, boja: '+boja+'.');return}
opis.textContent='Buket po mjeri, '+boja+'.';c.textContent=fmt.format(+b.dataset.cijena);bz.textContent='Bazna cijena '+fmt.format(+b.dataset.bazna)+' (prvi dan u ponudi, ${h.datum(mjera[0].datumBazne)})';g.textContent='Naruči ovaj buket';g.href='#narudzba';g.dataset.sifra=b.value};
f.addEventListener('change',osvjezi);osvjezi();
document.getElementById('mjera-gumb').addEventListener('click',e=>{const s=e.currentTarget.dataset.sifra;const sel=document.getElementById('n-proizvod');if(s&&sel){sel.value=s;sel.dispatchEvent(new Event('change',{bubbles:true}))}});
const rv=${JSON.stringify(d.radnoVrijeme)};
const sad=new Date(),dan=sad.getDay(),min=sad.getHours()*60+sad.getMinutes();
const r=rv.find(x=>x.brojevi.includes(dan));const uMin=s=>{const[a,b]=s.split('.').map(Number);return a*60+b};
const o=document.getElementById('otvoreno');
if(r&&!r.zatvoreno&&min>=uMin(r.od)&&min<uMin(r.do))o.textContent='Danas otvoreno do '+r.do;
else if(r&&!r.zatvoreno&&min<uMin(r.od))o.textContent='Danas otvaramo u '+r.od;
else o.textContent='Sada zatvoreno. Narudžbe primamo i dalje.';
}</script>
</body>
</html>
`;
};
