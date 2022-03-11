import { ActionMovie } from "./ActionMovie";
import { HorrorMovie } from "./HorrorMovie";
import { Choice, Input, SelectChoice } from "./Input";
import { Movie } from "./Movie";

export class Main {
    storage: Movie[] = [];
    choices: SelectChoice[] = [
        { option: 1, message: "Add Action Movie" },
        { option: 2, message: "Add Horror Movie" },
        { option: 3, message: "Show Action Movies" },
        { option: 4, message: "Show Horror Movies" },
        { option: 5, message: "Increment Explosions In Movie" },
        { option: 6, message: "Increment Jump Scares In Movie" },
        { option: 7, message: "Exit The Program" },
    ];

    formatMovie: Choice[] = [
        { name: "name", message: "Name"},
        { name: "director", message: "Director"},
        { name: "language", message: "Language"},
        { name: "running_time", message: "Running Time (min)"},
        { name: "release_year", message: "Year"}
    ];

    private async addActionMovie() {
        let areGuns = await Input.getConfirm( "Are There Guns In The Movie?" );
        let areMartial = await Input.getConfirm( "Are There Martial Alrts In The Movie" );
        let dataMovie = await Input.getForm( "Fill The Following:", 
        [
            ...this.formatMovie, 
            { name: "explosions", message: "Explosions Count" }
        ]);

        const NewMovie = new ActionMovie(
            dataMovie.data.name, 
            dataMovie.data.director, 
            dataMovie.data.language, 
            dataMovie.data.running_time, 
            dataMovie.data.release_year,
            dataMovie.data.explosions,
            areGuns.data,
            areMartial.data 
        );

        this.storage.push(NewMovie);
    }

    private async addHorrorMovie() {
        let areGhosts = await Input.getConfirm( "Are There Ghosts In This Movie?" );
        let areVisions = await Input.getConfirm( "Are There Visions In This Movie" );
        let dataMovie = await Input.getForm( "Fill The Following:", 
        [
            ...this.formatMovie, 
            { name: "scares", message: "Jump Scares Count" }
        ]);

        const NewMovie = new HorrorMovie(
            dataMovie.data.name, 
            dataMovie.data.director, 
            dataMovie.data.language, 
            dataMovie.data.running_time, 
            dataMovie.data.release_year,
            dataMovie.data.scares,
            areGhosts.data,
            areVisions.data 
        );

        this.storage.push(NewMovie);
    }

    private showActionMovies() {
        this.storage.forEach( (movie) => {
            if(movie instanceof ActionMovie) {
                movie.printActionMovie();
            }
        });
    }

    private showHorrorMovie() {
        this.storage.forEach( (movie) => {
            if(movie instanceof HorrorMovie) {
                movie.printHorrorMovie();
            }
        });
    }

    private async incrementExplosions() {
        let actionMovies: Movie[] = this.storage.filter( movie => (movie instanceof ActionMovie));
        let selectChoises: SelectChoice[] = actionMovies.map( (movie, index) => {
            return { option: index, message: movie.name}
        } )

        let movieToIncrement = await Input.getSelect( "Select Te Action Movie", selectChoises);

        this.storage.forEach( (movie, index) => {
            if(movie.name === selectChoises[movieToIncrement.data].message) {
                if(movie instanceof ActionMovie) movie.incrementExplosions(); 
            }     
        });
    }

    private async incrementJump() {
        let scareMovies: Movie[] = this.storage.filter( movie => (movie instanceof HorrorMovie));
        let selectChoises: SelectChoice[] = scareMovies.map( (movie, index) => {
            return { option: index, message: movie.name}
        } )

        let movieToIncrement = await Input.getSelect( "Select Te Action Movie", selectChoises); 

        this.storage.forEach( (movie, index) => {
            if(movie.name === selectChoises[movieToIncrement.data].message) {
                if(movie instanceof ActionMovie) movie.incrementExplosions(); 
            }     
        });
    }

    async start() {
        let input = await Input.getSelect( "Blockbuster...", this.choices)
        while(input.data !== 7) {
            switch(input.data) {
                case 1:
                    await this.addActionMovie();
                    break;
                case 2:
                    await this.addHorrorMovie();
                    break;
                case 3:
                    await this.showActionMovies();
                    break;
                case 4:
                    await this.showHorrorMovie();
                    break;
                case 5: 
                    await this.incrementExplosions();
                    break;
                case 6:
                    await this.incrementJump();
                    break;
            }

            input = await Input.getSelect( "Blockbuster...", this.choices)
        }

    }
}