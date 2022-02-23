"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
class G964 {
}
exports.G964 = G964;
G964.nbYear = (p0, percent, aug, p) => {
    // your code
    let yearlyPopulation = p0;
    let years = 0;
    while (yearlyPopulation < p) {
        yearlyPopulation = yearlyPopulation + (yearlyPopulation * (percent / 100)) + aug;
        years++;
    }
    return years;
};
console.log(G964.nbYear(1500, 5, 100, 5000));
