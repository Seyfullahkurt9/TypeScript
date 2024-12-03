import { Aktarma } from './classes/Aktarma.js';
import { Odeme } from './classes/Odeme.js';
import { ListTasarim } from './classes/ListTasarim.js';
const form = document.querySelector('.new-item-form');
const secenek = document.querySelector('#secenek');
const hedef = document.querySelector('#hedef');
const detaylar = document.querySelector('#detaylar');
const miktar = document.querySelector('#miktar');
const ul = document.querySelector('ul');
const list = new ListTasarim(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (secenek.value === 'aktarma') {
        doc = new Aktarma(hedef.value, detaylar.value, miktar.valueAsNumber);
    }
    else {
        doc = new Odeme(hedef.value, detaylar.value, miktar.valueAsNumber);
    }
    list.render(doc, secenek.value, 'son');
});
