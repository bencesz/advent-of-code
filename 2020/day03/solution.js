const DAY_INDEX = 3;
const YEAR_INDEX = 2020;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    static lineParser = (line, index) => {
        if (index === 0) {
            console.log(line);
            return 0;
        }
        const step = 3;
        const pattern = `${line.trim()}`;
        const position = index * step;
        let row = `${pattern}`;
        while (row.length - 1 < position) {
            row += pattern;
        }
        const char = row.charAt(position) === '#' ? 1 : 0;
        console.log(`${row.substring(0, position)}${char}${row.substring(position + 1)}`);
        return char;
    }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false });
        // Lines
        const lines = parsedInput.map(Solution1.lineParser);
        // Accumulate values
        const output = lines.reduce((a,b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    static lineParser = (line, index, movement) => {
        if (index === 0 || index % movement.down) {
            console.log(line);
            return 0;
        }
        const step = movement.right;
        const pattern = `${line.trim()}`;
        const position = index / movement.down * step;
        let row = `${pattern}`;
        while (row.length - 1 < position) {
            row += pattern;
        }
        const char = row.charAt(position) === '#' ? 1 : 0;
        console.log(`${row.substring(0, position)}${char}${row.substring(position + 1)}`);
        return char;
    }

    calculate() {
        const movements = [
            { right: 1, down: 1 },
            { right: 3, down: 1 },
            { right: 5, down: 1 },
            { right: 7, down: 1 },
            { right: 1, down: 2 },
        ];
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false});
        // Lines
        const lines = movements.map(movement =>
            parsedInput
                .map((line, index) => Solution2.lineParser(line, index, movement))
                .reduce((a,b) => a + b)
        );
        // Accumulate values
        const output = lines.reduce((a,b) => a * b);

        // Fill output field
        this.fillOutput(output);
    }
}
