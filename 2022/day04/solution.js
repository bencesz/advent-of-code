const DAY_INDEX = 4;
const YEAR_INDEX = 2022;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' });
        // Fully overlapping pairs
        let overlap = 0;
        parsedInput.forEach(pair => {
            const [section1, section2] = pair.split(',');
            const [start1, end1] = section1.split('-');
            const [start2, end2] = section2.split('-');
            if (
                +start1 <= +start2 && +end1 >= +end2 ||
                +start2 <= +start1 && +end2 >= +end1
            ) {
                overlap++;
            }
        });

        // Fill output field
        this.fillOutput(overlap);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' });
        // Overlapping pairs
        let overlap = 0;
        parsedInput.forEach(pair => {
            const [section1, section2] = pair.split(',');
            const [start1, end1] = section1.split('-').map(i => +i);
            const [start2, end2] = section2.split('-').map(i => +i);
            if (
                start1 <= start2 && end1 >= start2 ||
                start2 <= start1 && end2 >= start1
            ) {
                overlap++;
            }
        });

        // Fill output field
        this.fillOutput(overlap);
    }
}
