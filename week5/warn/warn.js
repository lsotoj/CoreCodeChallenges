"use strict";
exports.__esModule = true;
exports.warnTheSheep = void 0;
function warnTheSheep(queue) {
    if (queue[queue.length - 1] === "wolf") {
        return "Pls go away and stop eating my sheep";
    }
    else {
        var pos = queue.length - queue.indexOf("wolf") - 1;
        return "Oi! Sheep number ".concat(pos, "! You are about to be eaten by a wolf!");
    }
}
exports.warnTheSheep = warnTheSheep;
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep"]));
