const DAY_INDEX = 7;
const YEAR_INDEX = 2022;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' });
        // Solution
        let points = 0;
        parsedInput.forEach(item => {

        });

        // Fill output field
        this.fillOutput(points);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' });
        // Solution
        let points = 0;
        parsedInput.forEach(item => {

        });

        // Fill output field
        this.fillOutput(points);
    }
}
