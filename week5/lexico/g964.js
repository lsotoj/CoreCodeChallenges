"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
class G964 {
    static inArray(a1, a2) {
        // your code
        let arr = [];
        let dict = {};
        a1.forEach((elemento1) => {
            a2.forEach((elemento2) => {
                if (elemento2.includes(elemento1) && !(elemento1 in dict))
                    dict[elemento1] = 1;
            });
        });
        return Object.keys(dict).sort();
    }
}
exports.G964 = G964;
console.log(G964.inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(G964.inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(G964.inArray(['live', 'strong', 'arp'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']));
