window.onload = () => {
    new InputRegister(1).init();
};

class Solution extends OutputCalculator {
    constructor(dayIndex) { super(dayIndex); }

    calculate() {
        const calculateMass = (value) => Math.floor(value / 3) - 2;
        // Create array from lines and turn values into integers
        const parsedInput = this._inputData
            .trim()
            .split('\n')
            .map(value => calculateMass(parseInt(value)));
        // Accumulate values
        const output = parsedInput
            .reduce((a, b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}
