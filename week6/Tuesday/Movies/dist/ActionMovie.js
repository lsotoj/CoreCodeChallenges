"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMovie = void 0;
const Movie_1 = require("./Movie");
class ActionMovie extends Movie_1.Movie {
    constructor(name, director, language, running_time, release_year, explosions, expectGuns, expectMartialArts) {
        super(name, director, language, running_time, release_year);
        this.guns = false;
        this.martial = false;
        this.expolosion = explosions;
        if (expectGuns)
            this.guns = expectGuns;
        if (expectMartialArts)
            this.martial = expectMartialArts;
    }
    printActionMovie() {
        console.log(`
            ---------------------------------
                Name: ${this.name}
                Year: ${this.release_year}
                Director: ${this.director}
                Langauge: ${this.language}
                Running Time: ${this.running_time}
                Explosions: ${this.expolosion}
                Guns: ${this.expectGuns()}
                Martial Arts: ${this.expectMartialArts()}
            ---------------------------------
        `);
    }
    incrementExplosions() {
        this.expolosion += 10;
    }
    expectGuns() {
        if (this.guns)
            return "🔫";
        return "🙅‍♂️";
    }
    expectMartialArts() {
        if (this.martial)
            return "🥷";
        return "🙅‍♂️";
    }
}
exports.ActionMovie = ActionMovie;
