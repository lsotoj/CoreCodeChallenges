export class G964 {
    public static inArray(a1: string[], a2: string[]): string[] {
      // your code
        let arr: string[]= [];
        let dict: any = {};

        a1.forEach((elemento1) => {
            a2.forEach((elemento2) => {
                if(elemento2.includes(elemento1) && !(elemento1 in dict)) dict[elemento1] = 1;
            })
        })

        return Object.keys(dict).sort();
    }
}

console.log(G964.inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(G964.inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]));
console.log(G964.inArray([ 'live', 'strong', 'arp' ], [ 'lively', 'alive', 'harp', 'sharp', 'armstrong']));