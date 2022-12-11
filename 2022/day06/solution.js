const DAY_INDEX = 6;
const YEAR_INDEX = 2022;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' })[0].split('');
        // Solution
        let marker = [];
        for (let i = 0; i < parsedInput.length; i++) {
            const signal = `${parsedInput[i]}${parsedInput[i+1] || ''}${parsedInput[i+2] || ''}${parsedInput[i+3] || ''}`;
            const uniqueLetters = new Set([...signal.split('')]);
            const check = uniqueLetters.size === signal.length && i > 3;
            if (check) {
                console.log(signal, uniqueLetters.size, signal.length);
                marker = [signal.charAt(0), i + 1];
                break;
            }
        }

        // Fill output field
        this.fillOutput(marker);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' });
        // Solution
        let points = 0;
        parsedInput.forEach(item => {

        });

        // Fill output field
        this.fillOutput(points);
    }
}
