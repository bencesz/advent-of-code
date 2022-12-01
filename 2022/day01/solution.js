const DAY_INDEX = 1;
const YEAR_INDEX = 2022;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput();
        // Sort elves by calories
        const elves = [];
        let elfIndex = 0;
        parsedInput.forEach(calories => {
            if (Number.isNaN(calories)) {
                elfIndex++;
            }
            elves[elfIndex] ? elves[elfIndex] += calories : elves[elfIndex] = calories;
        });
        // Accumulate values
        const output = elves.sort((a,b) => b - a)[0];

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput();
        // Sort elves by calories
        const elves = [];
        let elfIndex = 0;
        parsedInput.forEach(calories => {
            if (Number.isNaN(calories)) {
                elfIndex++;
            }
            elves[elfIndex] ? elves[elfIndex] += calories : elves[elfIndex] = calories;
        });
        // Accumulate values
        const output = elves
            .sort((a,b) => b - a)
            .splice(0,3)
            .reduce((a,b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}
