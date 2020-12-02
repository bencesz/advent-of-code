const DAY_INDEX = 2;
const YEAR_INDEX = 2015;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    static parseLine = (line) => {
        const [width, length, height] = line.split('x');
        const sideA = length * width;
        const sideB = width * height;
        const sideC = height * length;
        const smallestSide = [sideA, sideB, sideC].sort((a, b) => a - b)[0];

        return 2 * sideA + 2 * sideB + 2 * sideC + smallestSide;
    };

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false });
        // Find numbers
        const numbers = parsedInput.map(Solution1.parseLine);
        // Accumulate values
        const output = numbers.reduce((a,b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    static parseLine = (line) => {
        const [shortestSide, mediumSide, longestSide] = line.split('x').sort((a, b) => a - b);

        return 2 * shortestSide + 2 * mediumSide + (shortestSide * mediumSide * longestSide);
    };

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false });
        // Find numbers
        const numbers = parsedInput.map(Solution2.parseLine);
        // Accumulate values
        const output = numbers.reduce((a,b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}
