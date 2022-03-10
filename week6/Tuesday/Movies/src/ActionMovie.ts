import { Movie } from "./Movie";

export class ActionMovie extends Movie{
    expolosion: number;
    guns?: boolean = false;
    martial?: boolean = false;

    constructor(
        name: string,
        director: string,
        language: string,
        running_time: number,
        release_year: number,
        explosions: number,
        expectGuns?: boolean,
        expectMartialArts?: boolean
        ) {
            super(name, director, language, running_time, release_year);
            this.expolosion = explosions;
            if(expectGuns) this.guns = expectGuns;
            if(expectMartialArts) this.martial = expectMartialArts;
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
        `)
    } 

    incrementExplosions() {
        this.expolosion += 10;
    }

    expectGuns(): string {
        if(this.guns) return "🔫";
        return "🙅‍♂️";
    }

    expectMartialArts(): string {
        if(this.martial) return "🥷";
        return "🙅‍♂️";
    }
}