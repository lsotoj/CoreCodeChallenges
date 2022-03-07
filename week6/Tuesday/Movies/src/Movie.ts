import { v4 as uuidv4 } from 'uuid';

export class Movie {
    id: string;
    name: string;
    director: string;
    language: string;
    running_time: number;
    release_year: number;

    constructor(
        name: string,
        director: string,
        language: string,
        running_time: number,
        release_year: number
    ) {
        this.id = this.id = uuidv4();
        this.name = name;
        this.director = director;
        this.language = language;
        this.running_time = running_time;
        this.release_year = release_year;
    }
    
}