import { Aktarma } from './classes/Aktarma.js';
import { Odeme } from './classes/Odeme.js';
import { ListTasarim } from './classes/ListTasarim.js';
import { Format } from './interfaces/Format.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const secenek = document.querySelector('#secenek') as HTMLInputElement;
const hedef = document.querySelector('#hedef') as HTMLInputElement;
const detaylar = document.querySelector('#detaylar') as HTMLInputElement;
const miktar = document.querySelector('#miktar') as HTMLInputElement;
const ul = document.querySelector('ul')!;

const list = new ListTasarim(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: Format;
  if (secenek.value === 'aktarma') {
    doc = new Aktarma(hedef.value, detaylar.value, miktar.valueAsNumber);
  } else {
    doc = new Odeme(hedef.value, detaylar.value, miktar.valueAsNumber);
  }
  
  list.render(doc, secenek.value, 'son');
});