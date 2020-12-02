const DAY_INDEX = 1;
const YEAR_INDEX = 2019;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculateFuelRequired = (mass) => Math.floor(mass / 3) - 2;

    calculate() {
        // Create array from lines and turn values into integers
        const parsedInput = this.parseInput().map(this.calculateFuelRequired);
        // Accumulate values
        const output = parsedInput.reduce((a, b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculateFuelRequired = (mass) => Math.floor(mass / 3) - 2;

    calculateTotalFuelRequired = (mass) => {
        let totalFuelRequired = 0;
        while(mass >  0) {
            const fuel = this.calculateFuelRequired(mass);
            if (fuel > 0) {
                mass = fuel;
                totalFuelRequired += fuel;
            } else {
                mass = 0;
            }
        }
        return totalFuelRequired;
    };

    calculate() {
        // Create array from lines and turn values into integers
        const parsedInput = this.parseInput().map(this.calculateTotalFuelRequired);

        // Accumulate values
        const output = parsedInput.reduce((a, b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}
