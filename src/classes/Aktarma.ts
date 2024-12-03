import { Format } from '../interfaces/Format.js';

export class Aktarma implements Format {
  constructor(
    readonly hedef: string, 
    private detaylar: string, 
    public miktar: number,
  ){}

  format() {
    return `${this.hedef} ${this.miktar}TL ${this.detaylar} sebebiyle aktarim yapti`;
  }
}