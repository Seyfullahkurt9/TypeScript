export class Aktarma {
    constructor(hedef, detaylar, miktar) {
        this.hedef = hedef;
        this.detaylar = detaylar;
        this.miktar = miktar;
    }
    format() {
        return `${this.hedef} ${this.miktar}TL ${this.detaylar} sebebiyle aktarim yapti`;
    }
}
