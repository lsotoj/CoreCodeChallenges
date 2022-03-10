import { Movie } from "./Movie";

export class HorrorMovie extends Movie {
    ghosts?: boolean = false;
    visions?: boolean = false;
    jumpScares : number = 0;

    constructor(
        name: string,
        director: string,
        language: string,
        running_time: number,
        release_year: number,
        jumpScares: number,
        ghosts?: boolean,
        visions?: boolean
    ) {
        super(name, director, language, running_time, release_year);
        this.jumpScares = jumpScares;
        if(ghosts) this.ghosts = ghosts;
        if(visions) this.visions = visions;
    }

    printHorrorMovie(){
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
        `)
    }

    incrementJumpscares() {
        this.jumpScares += 10;
    }

    expectGhosts() {
        if(this.ghosts) return "👻"
        return "🙅"
    }

    expectVisions() {
        if(this.visions) return "🔮"
        return "🙅"
    }
}