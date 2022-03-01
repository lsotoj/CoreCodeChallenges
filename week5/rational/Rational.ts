export class Rational {
    numerator: number;
    deonominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator;
        this.deonominator = denominator;
    }

    printRational() {
        console.log( `
        ====================
            ${this.numerator} / ${this.deonominator}
        ====================
        `)
    }

    invert() {
        let aux = this.numerator;
        this.numerator = this.deonominator;
        this.deonominator = aux;
    }

    toFloat() {
        return this.numerator / this.deonominator;
    }

    private calcMcd(numerator: number, denominator: number): number {
        let remai: number = numerator % denominator
        while(remai !== 0) {
            let temp: number = denominator;
            denominator = numerator % denominator;
            numerator = temp;
            remai = numerator % denominator;
        }
        return denominator
    }
    reduce() {
        let mcd = this.calcMcd(this.numerator, this.deonominator);
        this.numerator = this.numerator / mcd;
        this.deonominator = this.deonominator / mcd;
        this.printRational();
    }
}