"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorrorMovie = void 0;
const Movie_1 = require("./Movie");
class HorrorMovie extends Movie_1.Movie {
    constructor(name, director, language, running_time, release_year, jumpScares, ghosts, visions) {
        super(name, director, language, running_time, release_year);
        this.ghosts = false;
        this.visions = false;
        this.jumpScares = 0;
        this.jumpScares = jumpScares;
        if (ghosts)
            this.ghosts = ghosts;
        if (visions)
            this.visions = visions;
    }
    printHorrorMovie() {
        console.log(`
            ---------------------------------
                Name: ${this.name}
                Year: ${this.release_year}
                Director: ${this.director}
                Langauge: ${this.language}
                Running Time: ${this.running_time}
                Jump Scares Count: ${this.jumpScares}
                Ghosts: ${this.expectGhosts()}
                Visions: ${this.expectVisions()}
            ---------------------------------
        `);
    }
    incrementJumpscares() {
        this.jumpScares += 10;
    }
    expectGhosts() {
        if (this.ghosts)
            return "👻";
        return "🙅";
    }
    expectVisions() {
        if (this.visions)
            return "🔮";
        return "🙅";
    }
}
exports.HorrorMovie = HorrorMovie;
