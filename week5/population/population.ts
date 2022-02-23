export class G964 {

    public static nbYear = (p0: number, percent: number, aug: number, p: number) => {
        // your code
        let yearlyPopulation: number = p0;
        let years: number = 0;
        while (yearlyPopulation <  p) {
            yearlyPopulation = yearlyPopulation + (yearlyPopulation * (percent/100)) + aug;
            years++;
        }
        return years;
    }
}

console.log(G964.nbYear(1500, 5, 100, 5000));

