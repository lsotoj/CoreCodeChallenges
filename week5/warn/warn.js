"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warnTheSheep = void 0;
function warnTheSheep(queue) {
    if (queue[queue.length - 1] === "wolf") {
        return "Pls go away and stop eating my sheep";
    }
    else {
        let pos = queue.length - queue.indexOf("wolf") - 1;
        return `Oi! Sheep number ${pos}! You are about to be eaten by a wolf!`;
    }
}
exports.warnTheSheep = warnTheSheep;
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep"]));
