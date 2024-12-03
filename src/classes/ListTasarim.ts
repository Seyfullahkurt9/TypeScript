import { Format } from "../interfaces/Format";

export class ListTasarim {
  constructor(private container: HTMLUListElement){}

  render(item: Format, heading: string, pos: 'baslangic' | 'son'){

    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement('p');
    p.innerText = item.format();
    li.append(p);

    if(pos === 'baslangic'){
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}