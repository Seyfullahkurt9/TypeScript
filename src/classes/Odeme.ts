import { Format } from '../interfaces/Format.js';

export class Odeme implements Format{
  constructor(
    readonly hedef: string,
    private detaylar: string,
    public miktar: number,
  ){};

  format() {
    return`${this.hedef} ${this.miktar}TL ${this.detaylar}  sebebiyle odeme yapti`;
  }
}