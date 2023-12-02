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
        const regexp = /(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g;
        const lines = parsedInput.map(
            line => {
                const numbers = [...line
                    .matchAll(regexp)]
                    .map(items => isNaN(Number(items[1]))
                       ? items[1]
                            .replace('one', '1')
                            .replace('two', '2')
                            .replace('three', '3')
                            .replace('four', '4')
                            .replace('five', '5')
                            .replace('six', '6')
                            .replace('seven', '7')
                            .replace('eight', '8')
                            .replace('nine', '9')
                        : items[1]
                    )
                return Number(numbers[0] + numbers[numbers.length - 1])
            }
        );

        // Accumulate values
        const output = lines.reduce((acc,val) => acc + val);

        // Fill output field
        this.fillOutput(output);
    }
}
