export class Odeme {
    constructor(hedef, detaylar, miktar) {
        this.hedef = hedef;
        this.detaylar = detaylar;
        this.miktar = miktar;
    }
    ;
    format() {
        return `${this.hedef} ${this.miktar}TL ${this.detaylar}  sebebiyle odeme yapti`;
    }
}
