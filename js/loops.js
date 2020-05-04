"use strict";

// ciklas - kazkas, kas yra kartojama
    // kas tas kazkas?
    // ka kartoja?
    // kiek kartu?

// for ( let i=0; i<10; i++ ) {
//     console.log('Skaicius:', i);
// }

// for ( let i=0; i<10; i=i+2 ) {
//     console.log('Skaicius:', i);
// }

console.log('--------------------------');
console.log('SUMAVIMAS INTERVALE');
console.log('--------------------------');
// 0 - 0            - 0
// 0 - 4            - 10
// 0 - 100          - 5050
// 574 - 815        - labai didelis teigiamas skaicius
// -50 - 50         - 0
// -70 - 30         - ne mazas neigiamas skaicius

const nuo = -70;
const iki = 30;
let suma = 0;

for ( let i=nuo; i<=iki; i++ ) {
    suma = suma + i;
}

console.log('Suma:', suma);

console.log('--------------------------');
console.log('ATBULAS TEKSTAS');
console.log('--------------------------');

const tekstas = 'Žydrūnas';
const tekstoIlgis = tekstas.length;
let atbulas = '';

for ( let i=tekstoIlgis-1; i>=0; i-- ) {
    atbulas = atbulas + tekstas[i];
}

// for ( let i=0; i<tekstoIlgis; i++ ) {
//     atbulas = atbulas + tekstas[ tekstoIlgis - i - 1 ];
// }

console.log(`Tekstas "${tekstas}" atbulai yra "${atbulas}".`);

console.log('--------------------------');

const pradzia = 0;
const pabaiga = 11;
const daliklis = 3
let beliekanos = 0;

for ( let i=pradzia; i<=pabaiga; i++ ) {
    if (i % daliklis === 0) {
        beliekanos++
        console.log(i);     
    }
}

const answer =`Skaičių intervale tarp ${pradzia} ir ${pabaiga}, besidalinančių be liekanos iš ${daliklis} yra ${beliekanos} vienetai.`

console.log(answer);

