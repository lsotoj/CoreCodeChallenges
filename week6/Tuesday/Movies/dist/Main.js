"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const ActionMovie_1 = require("./ActionMovie");
const HorrorMovie_1 = require("./HorrorMovie");
const Input_1 = require("./Input");
class Main {
    constructor() {
        this.storage = [];
        this.choices = [
            { option: 1, message: "Add Action Movie" },
            { option: 2, message: "Add Horror Movie" },
            { option: 3, message: "Show Action Movies" },
            { option: 4, message: "Show Horror Movies" },
            { option: 5, message: "Increment Explosions In Movie" },
            { option: 6, message: "Increment Jump Scares In Movie" },
            { option: 7, message: "Exit The Program" },
        ];
        this.formatMovie = [
            { name: "name", message: "Name" },
            { name: "director", message: "Director" },
            { name: "language", message: "Language" },
            { name: "running_time", message: "Running Time (min)" },
            { name: "release_year", message: "Year" }
        ];
    }
    addActionMovie() {
        return __awaiter(this, void 0, void 0, function* () {
            let areGuns = yield Input_1.Input.getConfirm("Are There Guns In The Movie?");
            let areMartial = yield Input_1.Input.getConfirm("Are There Martial Alrts In The Movie");
            let dataMovie = yield Input_1.Input.getForm("Fill The Following:", [
                ...this.formatMovie,
                { name: "explosions", message: "Explosions Count" }
            ]);
            const NewMovie = new ActionMovie_1.ActionMovie(dataMovie.data.name, dataMovie.data.director, dataMovie.data.language, dataMovie.data.running_time, dataMovie.data.release_year, dataMovie.data.explosions, areGuns.data, areMartial.data);
            this.storage.push(NewMovie);
        });
    }
    addHorrorMovie() {
        return __awaiter(this, void 0, void 0, function* () {
            let areGhosts = yield Input_1.Input.getConfirm("Are There Ghosts In This Movie?");
            let areVisions = yield Input_1.Input.getConfirm("Are There Visions In This Movie");
            let dataMovie = yield Input_1.Input.getForm("Fill The Following:", [
                ...this.formatMovie,
                { name: "scares", message: "Jump Scares Count" }
            ]);
            const NewMovie = new HorrorMovie_1.HorrorMovie(dataMovie.data.name, dataMovie.data.director, dataMovie.data.language, dataMovie.data.running_time, dataMovie.data.release_year, dataMovie.data.scares, areGhosts.data, areVisions.data);
            this.storage.push(NewMovie);
        });
    }
    showActionMovies() {
        this.storage.forEach((movie) => {
            if (movie instanceof ActionMovie_1.ActionMovie) {
                movie.printActionMovie();
            }
        });
    }
    showHorrorMovie() {
        this.storage.forEach((movie) => {
            if (movie instanceof HorrorMovie_1.HorrorMovie) {
                movie.printHorrorMovie();
            }
        });
    }
    incrementExplosions() {
        return __awaiter(this, void 0, void 0, function* () {
            let actionMovies = this.storage.filter(movie => (movie instanceof ActionMovie_1.ActionMovie));
            let selectChoises = actionMovies.map((movie, index) => {
                return { option: index, message: movie.name };
            });
            let movieToIncrement = yield Input_1.Input.getSelect("Select Te Action Movie", selectChoises);
            console.log(this.storage.filter(movie => (movie.name === selectChoises[movieToIncrement.data].message)));
        });
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let input = yield Input_1.Input.getSelect("Blockbuster...", this.choices);
            while (input.data !== 7) {
                switch (input.data) {
                    case 1:
                        yield this.addActionMovie();
                        break;
                    case 2:
                        yield this.addHorrorMovie();
                        break;
                    case 3:
                        yield this.showActionMovies();
                        break;
                    case 4:
                        yield this.showHorrorMovie();
                        break;
                    case 5:
                        yield this.incrementExplosions();
                        break;
                }
                input = yield Input_1.Input.getSelect("Blockbuster...", this.choices);
            }
        });
    }
}
exports.Main = Main;
