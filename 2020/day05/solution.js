const DAY_INDEX = 5;
const YEAR_INDEX = 2020;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

const rows = 128;
const columns = 8;
const checksum = 8;
const [front, back] = ['F', 'B'];
const [left, right] = ['L', 'R'];

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    static parseLine = ticket => {
        let [rowsMin, rowsMax] = [0, rows - 1];
        let row = 0;
        let [columnsMin, columnsMax] = [0, columns - 1];
        let column = 0;

        ticket.split('').forEach((letter, index) => {
            if (index < 7) {
                if(letter === front) {
                    rowsMax -= Math.floor((rowsMax - rowsMin) / 2) + 1;
                    if (index === 6) {
                        row = rowsMin;
                    }
                } else {
                    rowsMin += Math.ceil((rowsMax - rowsMin) / 2);
                    if (index === 6) {
                        row = rowsMax;
                    }
                }
            }
            if (index >= 7) {
                if(letter === left) {
                    columnsMax -= Math.floor((columnsMax - columnsMin) / 2) + 1;
                    if (index === ticket.length - 1) {
                        column = columnsMin;
                    }
                } else {
                    columnsMin += Math.ceil((columnsMax - columnsMin) / 2);
                    if (index === ticket.length - 1) {
                        column = columnsMax;
                    }
                }
            }
        });
        return row * checksum + column;
    }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false });
        // Lines
        const passports = parsedInput.map(Solution1.parseLine);
        // Accumulate values
        const output = Math.max(...passports);

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false });
        // Lines
        const passports = parsedInput.map(Solution1.parseLine).sort((a,b) => a - b);
        // Accumulate values
        const output = passports.find(
            (id, index) => id !== passports[index + 1] - 1 && index < passports.length - 1
        ) + 1;

        // Fill output field
        this.fillOutput(output);
    }
}
