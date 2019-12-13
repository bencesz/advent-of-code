window.onload = () => {
    new InputRegister(1).init();
};

class Solution1 extends OutputCalculator {
    constructor(dayIndex) { super(dayIndex); }

    calculateFuelRequired = (mass) => Math.floor(mass / 3) - 2;

    calculate() {
        // Create array from lines and turn values into integers
        const parsedInput = this._inputData
            .trim()
            .split('\n')
            .map(value => this.calculateFuelRequired(parseInt(value)));
        // Accumulate values
        const output = parsedInput
            .reduce((a, b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor(dayIndex) { super(dayIndex); }

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
        const parsedInput = this._inputData
            .trim()
            .split('\n')
            .map(value => this.calculateTotalFuelRequired(parseInt(value)));
        // Accumulate values
        const output = parsedInput
            .reduce((a, b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}
