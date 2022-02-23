export function warnTheSheep(queue: string[]): string {
    if(queue[queue.length - 1] === "wolf") {
        return "Pls go away and stop eating my sheep"
    } else {
        let pos:number = queue.length - queue.indexOf("wolf") - 1;
        return `Oi! Sheep number ${pos}! You are about to be eaten by a wolf!`
    }
}

console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep"]));