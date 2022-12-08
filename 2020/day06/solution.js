const DAY_INDEX = 6;
const YEAR_INDEX = 2020;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    static parseLine = (group) => {
        return new Set([...group.trim().split(/[\n\r]/).join('').split('')]).size;
    }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ splitBy: /\n\r|\n\n|\r\r/, integerOnly: false });
        // Lines
        const answers = parsedInput.map(Solution1.parseLine);
        console.log(answers);
        // Accumulate values
        const output = answers.reduce((a,b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    static parseLine = (group) => {
        const answers = group
            .trim()
            .split(/[\n\r]/)
            .filter(Boolean)
            .map(answers => answers.split(''));

        return answers[0].filter(letter => answers.every(answer => answer.includes(letter))).length;
    }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ splitBy: /\n\r|\n\n|\r\r/, integerOnly: false });
        // Lines
        const answers = parsedInput.map(Solution2.parseLine);
        // Accumulate values
        const output = answers.reduce((a,b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}
