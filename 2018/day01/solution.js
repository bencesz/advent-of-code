const DAY_INDEX = 1;
const YEAR_INDEX = 2018;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines and turn values into integers
        const parsedInput = this.parseInput();
        // Accumulate values
        const output = parsedInput.reduce((a, b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines and turn values into integers
        const parsedInput = this.parseInput();
        // Check frequency (total sum)
        let currentFrequency = 0;
        // Create set with initial frequency
        let foundFrequencies = new Set([0]);

        // Populate frequency set
        for (let x = 0 ; ; x = ((x + 1) % parsedInput.length)) {
            // Update frequency
            currentFrequency += parsedInput[x];

            if(foundFrequencies.has(currentFrequency)){
                // First repeated frequency found. Breaks loop
                this.fillOutput(currentFrequency);
                break;
            } else {
                // Adding new frequency to set
                foundFrequencies.add(currentFrequency)
            }
        }
    }
}
