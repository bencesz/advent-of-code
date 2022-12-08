const DAY_INDEX = 8;
const YEAR_INDEX = 2020;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    static parseLine = (passport) => {
        return passport;
    }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false });
        // Lines
        const passports = parsedInput.map(Solution1.parseLine);
        // Accumulate values
        const output = passports;

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    static parseLine = (passport) => {
        return passport;
    }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false });
        // Lines
        const passports = parsedInput.map(Solution2.parseLine);
        // Accumulate values
        const output = passports;

        // Fill output field
        this.fillOutput(output);
    }
}
