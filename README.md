# Demo: tri prijedloga web stranice za cvjećarnu

Tri smjera dizajna (A Sezonska tržnica, B Atelijer, C Kvartovska cvjećarna) na istim podacima, uz zajedničku stranicu za sprovode i cjenik s baznim cijenama u CSV i XML formatu.

Ime, cijene, rokovi i zone dostave su primjeri. Prazna polja s natpisom "Fotografija" čekaju stvarne fotografije.

## Kako mijenjati

Sve činjenice (radno vrijeme, rokovi, zone i cijene dostave, proizvodi, bazne cijene, podaci o trgovcu) stoje u `podaci.json`. Nakon promjene pokreni:

```
node build.mjs
```

Skripta iz istih podataka slaže sve stranice i datoteke cjenika u `cjenik/`, pa se cijene ne mogu razlikovati između sekcija, obrasca i cjenika.

## Struktura

- `podaci.json`: jedini izvor podataka
- `build.mjs`: slaže stranice i cjenik
- `_izvor/`: predlošci stranica
- `a/`, `b/`, `c/`, `sprovod/`, `cjenik/`: gotove stranice

## Fontovi

A koristi Gambarino i Switzer, B Zodiak i General Sans, s Fontsharea. C u pravoj verziji koristi Recoleta (plaćena licenca), a u demu je zamjena Fraunces s Google Fontsa.
