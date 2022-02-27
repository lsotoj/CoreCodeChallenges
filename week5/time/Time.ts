export class Time {
    hour: number;
    minute: number;
    second: number;

    constructor(hour: number, minute: number, second: number) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    
    getInSeconds() {
        return this.second + (this.minute * 60) + (this.hour * 3600)
    }

    printTime() {
        console.log(`
        ==================
            Hours: ${this.hour}
            Minutes: ${this.minute}
            Seconds: ${this.second}
        ==================
        `)
    }
}