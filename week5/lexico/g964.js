"use strict";
exports.__esModule = true;
exports.G964 = void 0;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.inArray = function (a1, a2) {
        // your code
        var arr = [];
        var dict = {};
        a1.forEach(function (elemento1) {
            a2.forEach(function (elemento2) {
                if (elemento2.includes(elemento1) && !(elemento1 in dict))
                    dict[elemento1] = 1;
            });
        });
        return Object.keys(dict).sort();
    };
    return G964;
}());
exports.G964 = G964;
console.log(G964.inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(G964.inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(G964.inArray(['live', 'strong', 'arp'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']));
