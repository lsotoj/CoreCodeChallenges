"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Tile_1 = require("./Tile");
class Main {
    start() {
        const A = new Tile_1.Tile('A', 10);
        A.printTile(); // Example of a reader-friendly format above
        /*q
          ==================
            Letter: A
            Value: 10
          ==================
        */
        //const W = new Tile('W', '50'); // This should show and error
    }
}
exports.Main = Main;
