export default h => {
  const { d, t, cijena, foto, tel, waTekst, eur, radnoVrijemeTablica, demoTraka, demoTrakaCss, podnozje, skupina, mobilnaTraka } = h;
  const aranzmani = skupina('sprovod');
  return `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Cvijeće za sprovod, ${t.naziv}</title>
<meta name="description" content="Vijenci, ikebane i sprovodni buketi s tekstom na vrpci. Dostava na groblje ili u kapelu. Telefon ${t.telefon}.">
<link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&display=swap">
<style>
:root{--poz:#F2F0EC;--tekst:#2E2B28;--sek:#E3DFD8;--crta:rgba(46,43,40,.22)}
*{box-sizing:border-box;min-width:0}
body{margin:0;background:var(--poz);color:var(--tekst);font:17px/1.6 Switzer,"Helvetica Neue",sans-serif}
h1,h2,h3{font-weight:500;line-height:1.15;margin:0 0 .5em}
h1{font-size:clamp(34px,4.4vw,52px)}h2{font-size:clamp(26px,3vw,34px)}h3{font-size:22px}
p{margin:0 0 1em;max-width:62ch}
a{color:var(--tekst);text-underline-offset:3px}
:focus-visible{outline:3px solid var(--tekst);outline-offset:3px}
.sir{padding-inline:max(5vw,16px);max-width:1100px;margin-inline:auto}
.foto{margin:0;width:100%;background:var(--sek);border:1px dashed var(--crta);border-radius:4px;display:flex;align-items:flex-end;padding:14px}
.foto span{font-size:15px;background:var(--poz);padding:4px 8px}
.cijena{margin:0 0 8px}.mpc{display:block;font-size:22px;font-weight:600}.bazna{display:block;font-size:16px}
${demoTrakaCss}
.zag{padding-block:20px;border-bottom:1px solid var(--crta)}.zag a{text-decoration:none;font-weight:600;font-size:20px}
.uvod{padding-block:clamp(40px,6vw,80px);display:grid;grid-template-columns:minmax(0,3fr) minmax(0,2fr);gap:clamp(24px,4vw,56px);align-items:start}
.telefon{border:1px solid var(--tekst);border-radius:4px;padding:24px}
.telefon .broj{font-size:28px;font-weight:600;display:block;margin:6px 0 10px}
.mreza{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:28px;padding-block:24px 56px}
.mreza h3{margin-top:14px}
.podaci{border-top:1px solid var(--crta);padding-block:clamp(40px,6vw,72px)}
.podaci ul{padding-left:20px;max-width:62ch}
.podnozje{background:var(--tekst);color:var(--poz);padding:48px max(5vw,16px) 96px}.podnozje a{color:var(--poz)}
.pod-stupci{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px;max-width:1100px;margin:auto}
.pod-naziv{font-size:22px;font-weight:600}
.mob-traka{display:none}
@media(max-width:820px){.uvod,.mreza,.pod-stupci{grid-template-columns:minmax(0,1fr)}
.mob-traka{display:grid;grid-template-columns:1fr 1fr;position:fixed;inset:auto 0 0 0;background:var(--tekst)}.mob-traka a{color:var(--poz);text-align:center;padding:16px;font-weight:600;text-decoration:none}}
</style>
</head>
<body>
${demoTraka('')}
<header class="sir zag"><a href="../c/">${t.naziv}</a></header>
<main>
<section class="sir uvod" aria-labelledby="naslov">
<div>
<h1 id="naslov">Cvijeće za sprovod</h1>
<p>Vijence, ikebane i bukete slažemo isti dan za narudžbe do ${d.narudzba.rokIstiDan}. Dostavljamo na groblje ili u kapelu, na vrijeme za ispraćaj.</p>
<p>Ako ne znate što odabrati, nazovite. Pomoći ćemo u nekoliko minuta.</p>
</div>
<div class="telefon">
<p style="margin:0">Telefon za narudžbe</p>
<a class="broj" href="${tel}">${t.telefon}</a>
<p style="margin:0"><a href="${waTekst('Dobar dan, trebam aranžman za sprovod.')}">ili poruka na WhatsApp ${t.whatsapp}</a></p>
</div>
</section>
<section class="sir" aria-label="Aranžmani">
<div class="mreza">
${aranzmani.map(p => `<article>${foto(p.foto, '1 / 1')}<h3>${p.naziv}</h3><p>${p.opis}</p>${cijena(p)}</article>`).join('')}
</div>
</section>
<section class="sir podaci" aria-labelledby="podaci-naslov">
<h2 id="podaci-naslov">Što trebamo znati</h2>
<ul>
<li>Groblje ili kapelu</li>
<li>Datum i sat ispraćaja</li>
<li>Tekst na vrpci, točno kako treba pisati</li>
<li>Vaše ime i telefon, ako nešto trebamo provjeriti</li>
</ul>
<p>Tekst na vrpci uključen je u cijenu. Dostava se plaća prema zoni, od ${eur(h.najjeftinijaDostava)}.</p>
${radnoVrijemeTablica()}
</section>
</main>
${podnozje()}
${mobilnaTraka()}
</body>
</html>
`;
};
