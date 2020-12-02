const DAY_INDEX = 1;
const YEAR_INDEX = 2020;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput();
        // Find numbers
        const numbers = parsedInput.filter(numberA =>
            parsedInput.find(numberB => numberB + numberA === 2020)
        );
        // Accumulate values
        const output = numbers[0] * numbers[1];

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput();
        // Find numbers
        const numbers = parsedInput.filter(numberA =>
            parsedInput.find(numberB =>
                numberB + numberA + parsedInput.find(numberC => numberA + numberB + numberC === 2020) === 2020
            )
        );
        // Accumulate values
        const output = numbers[0] * numbers[1] * numbers[2];

        // Fill output field
        this.fillOutput(output);
    }
}
