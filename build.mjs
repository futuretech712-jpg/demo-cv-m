import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import a from './_izvor/a.mjs';
import b from './_izvor/b.mjs';
import c from './_izvor/c.mjs';
import sprovod from './_izvor/sprovod.mjs';
import naslovna from './_izvor/naslovna.mjs';
import cjenikStranica from './_izvor/cjenik.mjs';

const d = JSON.parse(readFileSync(new URL('./podaci.json', import.meta.url), 'utf8'));

const eurFormat = new Intl.NumberFormat('hr-HR', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });
const eur = n => eurFormat.format(n).replace(/ /g, ' ');
const mjeseci = ['siječnja', 'veljače', 'ožujka', 'travnja', 'svibnja', 'lipnja', 'srpnja', 'kolovoza', 'rujna', 'listopada', 'studenoga', 'prosinca'];
const datum = iso => { const [g, m, dan] = iso.slice(0, 10).split('-').map(Number); return `${dan}. ${m}. ${g}.`; };
const datumRijecima = iso => { const [, m, dan] = iso.slice(0, 10).split('-').map(Number); return `${dan}. ${mjeseci[m - 1]}`; };
const esc = s => String(s).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);

const t = d.trgovina;
const sviArtikli = [...d.proizvodi, ...d.usluge];
const po = sifra => sviArtikli.find(p => p.sifra === sifra);
const skupina = s => d.proizvodi.filter(p => p.skupina === s);
const najjeftinijaDostava = Math.min(...d.usluge.filter(u => u.sifra.startsWith('DOS')).map(u => u.cijena));

const opisBazne = p => p.datumBazne === t.otvorenje
  ? `prvi dan u ponudi, ${datum(p.datumBazne)}`
  : `cijena na dan ${datum(p.datumBazne)}`;

const cijena = (p, { klasa = '' } = {}) => `<p class="cijena ${klasa}"><span class="mpc">${eur(p.cijena)}${p.jedinica ? ` <span class="jed">tjedno</span>` : ''}</span><span class="bazna">Bazna cijena ${eur(p.bazna)} (${opisBazne(p)})</span></p>`;

const foto = (opis, omjer = '4 / 5', klasa = '') => `<figure class="foto ${klasa}" style="aspect-ratio:${omjer}" role="img" aria-label="Mjesto za fotografiju: ${esc(opis)}"><span>Fotografija: ${esc(opis)}</span></figure>`;

const radnoVrijemeTablica = () => `<table class="rv"><tbody>${d.radnoVrijeme.map(r => `<tr><th scope="row">${r.dani}</th><td>${r.zatvoreno ? 'zatvoreno' : `${r.od}–${r.do}`}</td></tr>`).join('')}</tbody></table>`;

const dostavaTablica = () => `<table class="dostava"><thead><tr><th scope="col">Zona</th><th scope="col">Udaljenost</th><th scope="col" class="br">Cijena</th></tr></thead><tbody>${d.usluge.filter(u => u.sifra.startsWith('DOS')).map(u => `<tr><td>${u.naziv.replace('Dostava, ', '')}</td><td>${u.opis}</td><td class="br">${eur(u.cijena)}<span class="bazna">bazna ${eur(u.bazna)}</span></td></tr>`).join('')}</tbody></table>`;

const rokovi = () => `Narudžbe do ${d.narudzba.rokIstiDan} dostavljamo isti dan, kasnije sljedeći radni dan. Preuzimanje u radnji do ${d.narudzba.preuzimanjeDo}. Dostava od ${eur(najjeftinijaDostava)}.`;

const waTekst = tekst => `https://wa.me/${t.whatsappLink}?text=${encodeURIComponent(tekst)}`;
const tel = `tel:${t.telefonLink}`;
const kartaGoogle = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${t.adresa}, ${t.posta}`)}`;
const kartaApple = `https://maps.apple.com/?q=${encodeURIComponent(`${t.adresa}, ${t.posta}`)}`;

const danKratica = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const schema = () => `<script type="application/ld+json">${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Florist',
  name: t.naziv,
  telephone: t.telefon,
  email: t.email,
  address: { '@type': 'PostalAddress', streetAddress: t.adresa, postalCode: t.posta.split(' ')[0], addressLocality: t.grad, addressCountry: 'HR' },
  openingHoursSpecification: d.radnoVrijeme.filter(r => !r.zatvoreno).map(r => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: r.brojevi.map(n => danKratica[n]), opens: r.od.replace('.', ':'), closes: r.do.replace('.', ':') })),
  priceRange: `${eur(Math.min(...d.proizvodi.map(p => p.cijena)))} do ${eur(Math.max(...d.proizvodi.map(p => p.cijena)))}`
})}</script>`;

const demoTraka = trenutni => `<div class="demo-traka"><p>Prijedlog dizajna${trenutni ? ` ${trenutni}` : ''}. Ime, cijene, rokovi i zone su primjeri, a prazna polja čekaju stvarne fotografije.</p><nav aria-label="Prijedlozi"><a href="../a/"${trenutni === 'A' ? ' aria-current="page"' : ''}>Smjer A</a><a href="../b/"${trenutni === 'B' ? ' aria-current="page"' : ''}>Smjer B</a><a href="../c/"${trenutni === 'C' ? ' aria-current="page"' : ''}>Smjer C</a><a href="../cjenik/">Cjenik</a></nav></div>`;

const demoTrakaCss = `.demo-traka{display:flex;flex-wrap:wrap;gap:6px 24px;justify-content:space-between;align-items:center;padding:8px max(4vw,16px);background:#1f1f1c;color:#f4f1ea;font:15px/1.4 system-ui,sans-serif}.demo-traka p{margin:0}.demo-traka nav{display:flex;gap:16px;flex-wrap:wrap}.demo-traka a{color:#f4f1ea}.demo-traka a[aria-current]{font-weight:700;text-decoration:none}`;

const mobilnaTraka = () => `<div class="mob-traka"><a href="${tel}">Nazovi</a><a href="${waTekst('Dobar dan, zanima me narudžba.')}">WhatsApp</a></div>`;

const podnozje = () => `<footer class="podnozje"><div class="pod-stupci"><div><p class="pod-naziv">${t.naziv}</p><p>${t.adresa}<br>${t.posta}</p><p><a href="${tel}">${t.telefon}</a><br><a href="mailto:${t.email}">${t.email}</a></p></div><div><p>${t.pravniNaziv}, OIB ${t.oib}, upisan u ${t.registar}.</p><p>Cijene su u eurima i konačne. Za cvijeće i aranžmane izrađene po narudžbi pravo na jednostrani raskid ugovora ne primjenjuje se jer je riječ o lako pokvarljivoj robi.</p></div><div><p><a href="../cjenik/">Cjenik i bazne cijene</a><br><a href="../sprovod/">Cvijeće za sprovod</a></p><p>Opći uvjeti, izjava o privatnosti i prigovori: u izradi.</p></div></div></footer>`;

const zaNarudzbu = [...d.proizvodi.filter(p => p.skupina !== 'sprovod')];
const dostave = d.usluge.filter(u => u.sifra.startsWith('DOS'));
const [rokSat, rokMin] = d.narudzba.rokIstiDan.split('.').map(Number);
const zatvoreniDani = d.radnoVrijeme.filter(r => r.zatvoreno).flatMap(r => r.brojevi);

const narudzba = ({ odabrano = 'BUK-TJ', ti = true } = {}) => {
  const v = (tiOblik, viOblik) => ti ? tiOblik : viOblik;
  return `<form class="obrazac" id="obrazac-narudzbe" novalidate>
<div class="polje"><label for="n-proizvod">Što naručuje${v('š', 'te')}</label>
<select id="n-proizvod" name="proizvod">${zaNarudzbu.map(p => `<option value="${p.sifra}" data-cijena="${p.cijena}"${p.sifra === odabrano ? ' selected' : ''}>${esc(p.naziv)}, ${eur(p.cijena)}${p.jedinica ? ' tjedno' : ''}</option>`).join('')}</select></div>
<fieldset class="polje"><legend>Dostava ili preuzimanje</legend>
<label class="izbor"><input type="radio" name="nacin" value="dostava" checked> Dostava</label>
<label class="izbor"><input type="radio" name="nacin" value="preuzimanje"> Preuzimanje u radnji do ${d.narudzba.preuzimanjeDo}</label></fieldset>
<div class="polje"><label for="n-datum">Datum</label><input id="n-datum" name="datum" type="date" required aria-describedby="n-datum-pom"><p class="pomoc" id="n-datum-pom">Narudžbe do ${d.narudzba.rokIstiDan} stižu isti dan. Nedjeljom ne radimo.</p></div>
<div class="polje samo-dostava"><label for="n-zona">Zona dostave</label>
<select id="n-zona" name="zona">${dostave.map(u => `<option value="${u.sifra}" data-cijena="${u.cijena}">${u.naziv.replace('Dostava, ', '')}, ${u.opis}, ${eur(u.cijena)}</option>`).join('')}</select></div>
<div class="polje samo-dostava"><label for="n-primatelj">Ime primatelja</label><input id="n-primatelj" name="primatelj" autocomplete="off"></div>
<div class="polje samo-dostava"><label for="n-adresa">Adresa primatelja</label><input id="n-adresa" name="adresa" autocomplete="off"></div>
<div class="polje samo-dostava"><label for="n-tel-prim">Telefon primatelja, za dostavljača</label><input id="n-tel-prim" name="telefonPrimatelja" type="tel" autocomplete="off"></div>
<div class="polje"><label for="n-poruka">Poruka na kartici</label><textarea id="n-poruka" name="poruka" rows="3" maxlength="${d.narudzba.porukaZnakova}" aria-describedby="n-poruka-pom"></textarea><p class="pomoc" id="n-poruka-pom"><span id="n-znakovi">0</span> od ${d.narudzba.porukaZnakova} znakova</p>
<label class="izbor"><input type="checkbox" name="anonimno"> Bez imena pošiljatelja na kartici</label></div>
<div class="polje"><label for="n-ime">${v('Tvoje ime', 'Vaše ime')}</label><input id="n-ime" name="ime" autocomplete="name" required></div>
<div class="polje"><label for="n-email">E-pošta, za potvrdu</label><input id="n-email" name="email" type="email" autocomplete="email" required></div>
<div class="polje"><label for="n-tel">Telefon</label><input id="n-tel" name="telefon" type="tel" autocomplete="tel" required></div>
<p class="pomoc">Plaćanje karticom, Apple Payom ili Google Payom. Za cvijeće i aranžmane po narudžbi pravo na jednostrani raskid ne primjenjuje se jer je riječ o lako pokvarljivoj robi.</p>
<button class="gumb" type="submit" id="n-plati">Naruči i plati</button>
<p class="poruka-demo" id="n-demo" role="status" hidden>Ovo je demo. U pravoj verziji ovdje se otvara plaćanje.</p>
</form>`;
};

const narudzbaJs = `<script>{
const f=document.getElementById('obrazac-narudzbe');
if(f){
const fmt=new Intl.NumberFormat('hr-HR',{style:'currency',currency:'EUR',minimumFractionDigits:2});
const zatvoreno=${JSON.stringify(zatvoreniDani)};
const datum=f.querySelector('#n-datum'),pom=f.querySelector('#n-datum-pom'),tekstPom=pom.textContent;
const iso=x=>x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0');
const prvi=()=>{const s=new Date();const x=new Date(s.getFullYear(),s.getMonth(),s.getDate());if(s.getHours()*60+s.getMinutes()>=${rokSat * 60 + rokMin})x.setDate(x.getDate()+1);while(zatvoreno.includes(x.getDay()))x.setDate(x.getDate()+1);return x};
datum.min=iso(prvi());datum.value=datum.min;
const ukupno=()=>{const p=+f.proizvod.selectedOptions[0].dataset.cijena;const dost=f.nacin.value==='dostava'?+f.zona.selectedOptions[0].dataset.cijena:0;f.querySelector('#n-plati').textContent='Naruči i plati '+fmt.format(p+dost)};
const nacin=()=>{for(const el of f.querySelectorAll('.samo-dostava'))el.hidden=f.nacin.value!=='dostava';ukupno()};
datum.addEventListener('change',()=>{const x=new Date(datum.value+'T12:00');const los=zatvoreno.includes(x.getDay())||datum.value<datum.min;datum.setAttribute('aria-invalid',los);pom.textContent=los?'Taj dan ne možemo. Prvi slobodan dan je '+prvi().toLocaleDateString('hr-HR')+'.':tekstPom});
f.addEventListener('change',e=>{if(e.target.name==='nacin')nacin();else ukupno()});
const poruka=f.querySelector('#n-poruka');poruka.addEventListener('input',()=>{f.querySelector('#n-znakovi').textContent=poruka.value.length});
for(const a of document.querySelectorAll('[data-sifra]'))a.addEventListener('click',()=>{f.proizvod.value=a.dataset.sifra;ukupno()});
f.addEventListener('submit',e=>{e.preventDefault();f.querySelector('#n-demo').hidden=false});
nacin();
}}</script>`;

const obrazacCss = (boje) => `.obrazac{display:grid;gap:18px;max-width:560px}.polje{display:grid;gap:6px;border:0;padding:0;margin:0}.polje label,.polje legend{font-weight:600}.obrazac input:not([type=radio]):not([type=checkbox]),.obrazac select,.obrazac textarea{font:inherit;font-size:17px;padding:12px;border:1px solid ${boje.rub};border-radius:4px;background:${boje.polje};color:inherit;width:100%;min-height:48px}.izbor{display:flex;gap:10px;align-items:center;font-weight:400 !important;min-height:44px}.izbor input{width:20px;height:20px;accent-color:${boje.oznaka}}.pomoc{font-size:16px;margin:0;opacity:.9}[aria-invalid=true]{border-color:#9b1c1c !important;border-width:2px !important}.poruka-demo{margin:0;font-weight:600}.obrazac .gumb{justify-self:start}[hidden]{display:none !important}`;

const h = { d, t, narudzba, narudzbaJs, obrazacCss, eur, datum, datumRijecima, esc, cijena, foto, radnoVrijemeTablica, dostavaTablica, rokovi, waTekst, tel, kartaGoogle, kartaApple, schema, demoTraka, demoTrakaCss, mobilnaTraka, podnozje, po, skupina, najjeftinijaDostava, opisBazne };

const zapisi = (put, sadrzaj) => { mkdirSync(new URL(put.replace(/[^/]+$/, ''), import.meta.url), { recursive: true }); writeFileSync(new URL(put, import.meta.url), sadrzaj); };

const zaglavljeCjenika = {
  roba: ['Naziv robe', 'Šifra robe', 'Marka robe', 'Neto količina', 'Jedinica mjere', 'Maloprodajna cijena', 'Poseban oblik prodaje', 'Cijena za jedinicu mjere', 'Barkod', 'EAN barkod', 'Bazna cijena', 'Datum bazne cijene'],
  usluge: ['Naziv usluge', 'Maloprodajna cijena', 'Poseban oblik prodaje', 'Bazna cijena', 'Datum bazne cijene']
};
const broj = n => n.toFixed(2).replace('.', d.cjenik.decimalniZnak);
const redovi = {
  roba: d.proizvodi.map(p => [p.naziv, p.sifra, '', '1', p.jedinica ? 'tjedan' : 'komad', broj(p.cijena), p.akcija ?? '', '', '', '', broj(p.bazna), p.datumBazne]),
  usluge: d.usluge.map(u => [`${u.naziv}, ${u.opis}`, broj(u.cijena), u.akcija ?? '', broj(u.bazna), u.datumBazne])
};
const csvPolje = v => /[;"\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
const csv = vrsta => [zaglavljeCjenika[vrsta], ...redovi[vrsta]].map(r => r.map(csvPolje).join(';')).join('\r\n') + '\r\n';
const xmlOznaka = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').replace(/[^A-Za-z0-9]+/g, '_').replace(/^_|_$/g, '').toLowerCase();
const xml = vrsta => `<?xml version="1.0" encoding="UTF-8"?>\n<cjenik trgovac="${esc(t.pravniNaziv)}" oib="${t.oib}" prodajno_mjesto="${d.cjenik.vrstaMjesta}" vrsta="${vrsta}" objavljeno="${d.cjenik.objavljeno}">\n${redovi[vrsta].map(r => `  <stavka>\n${r.map((v, i) => `    <${xmlOznaka(zaglavljeCjenika[vrsta][i])}>${esc(v)}</${xmlOznaka(zaglavljeCjenika[vrsta][i])}>`).join('\n')}\n  </stavka>`).join('\n')}\n</cjenik>\n`;
const vrijemeOznaka = d.cjenik.objavljeno.replace(/-/g, '').replace('T', '_').replace(':', '');
const nazivDatoteke = (vrsta, nastavak) => `${t.oib}-${d.cjenik.vrstaMjesta}-${vrsta}-${d.cjenik.brojPohrane}-${vrijemeOznaka}.${nastavak}`;

rmSync(new URL('./cjenik/', import.meta.url), { recursive: true, force: true });
const datoteke = [];
for (const vrsta of ['roba', 'usluge']) {
  for (const [nastavak, sadrzaj] of [['csv', csv(vrsta)], ['xml', xml(vrsta)]]) {
    const ime = nazivDatoteke(vrsta, nastavak);
    zapisi(`./cjenik/${ime}`, sadrzaj);
    zapisi(`./cjenik/aktualni-${vrsta}.${nastavak}`, sadrzaj);
    datoteke.push({ vrsta, nastavak, ime });
  }
}

zapisi('./index.html', naslovna(h));
zapisi('./a/index.html', a(h));
zapisi('./b/index.html', b(h));
zapisi('./c/index.html', c(h));
zapisi('./sprovod/index.html', sprovod(h));
zapisi('./cjenik/index.html', cjenikStranica(h, datoteke));
zapisi('./robots.txt', 'User-agent: *\nAllow: /\n');
