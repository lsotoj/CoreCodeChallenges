"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rational = void 0;
class Rational {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.deonominator = denominator;
    }
    printRational() {
        console.log(`
        ====================
            ${this.numerator} / ${this.deonominator}
        ====================
        `);
    }
    invert() {
        let aux = this.numerator;
        this.numerator = this.deonominator;
        this.deonominator = aux;
    }
    toFloat() {
        return this.numerator / this.deonominator;
    }
    calcMcd(numerator, denominator) {
        let remai = numerator % denominator;
        while (remai !== 0) {
            let temp = denominator;
            denominator = numerator % denominator;
            numerator = temp;
            remai = numerator % denominator;
        }
        return denominator;
    }
    reduce() {
        let mcd = this.calcMcd(this.numerator, this.deonominator);
        this.numerator = this.numerator / mcd;
        this.deonominator = this.deonominator / mcd;
        this.printRational();
    }
}
exports.Rational = Rational;
