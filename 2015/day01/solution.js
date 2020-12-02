const DAY_INDEX = 1;
const YEAR_INDEX = 2015;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ splitBy: '', integerOnly: false });
        // Find numbers
        const numbers = parsedInput.map(direction => direction === '(' ? 1 : direction === ')' ? -1 : 0);
        // Accumulate values
        const output = numbers.reduce((a, b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ splitBy: '', integerOnly: false });
        // Basement enter positions
        const basementEnterPositions = [];
        // Find numbers
        const numbers = parsedInput.map(direction => direction === '(' ? 1 : direction === ')' ? -1 : 0)
            .reduce((a, b, index) => {
                if (a + b === -1) {
                    basementEnterPositions.push(index + 1);
                }
                return a + b;
            });
        // Accumulate values
        const output = basementEnterPositions[0];

        // Fill output field
        this.fillOutput(output);
    }
}
