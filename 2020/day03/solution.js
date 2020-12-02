const DAY_INDEX = 3;

window.onload = () => {
    new InputRegister(DAY_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput();
        // Accumulate values
        const output = parsedInput;

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput();
        // Accumulate values
        const output = parsedInput;

        // Fill output field
        this.fillOutput(output);
    }
}
