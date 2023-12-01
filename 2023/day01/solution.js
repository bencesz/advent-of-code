const DAY_INDEX = 1;
const YEAR_INDEX = 2023;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' });

        // Solution
        const regexp = /\d/g;
        const lines = parsedInput.map(
            line => {
                const numbers = line.match(regexp)
                return Number(numbers[0] + numbers[numbers.length - 1])
            }
        );

        // Accumulate values
        const output = lines.reduce((acc,val) => acc + val);

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' });

        // Solution
        const regexp = /one|two|three|four|five|six|seven|eight|nine|\d/g;
        const lines = parsedInput.map(
            line => {
                const numbers = line
                    .replaceAll('one', 'onee')
                    .replaceAll('two', 'twoo')
                    .replaceAll('three', 'threee')
                    .replaceAll('five', 'fivee')
                    .replaceAll('seven', 'sevenn')
                    .replaceAll('eight', 'eightt')
                    .replaceAll('nine', 'ninee')
                    .replaceAll('one', '1')
                    .replaceAll('two', '2')
                    .replaceAll('three', '3')
                    .replaceAll('four', '4')
                    .replaceAll('five', '5')
                    .replaceAll('six', '6')
                    .replaceAll('seven', '7')
                    .replaceAll('eight', '8')
                    .replaceAll('nine', '9')
                    .match(regexp)
                return Number(numbers[0] + numbers[numbers.length - 1])
            }
        );

        // Accumulate values
        const output = lines.reduce((acc,val) => acc + val);

        // Fill output field
        this.fillOutput(output);
    }
}
