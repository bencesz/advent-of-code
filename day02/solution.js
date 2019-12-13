window.onload = () => {
    new InputRegister(1).init();
};

class Solution1 extends OutputCalculator {
    constructor(dayIndex) { super(dayIndex); }

    calculate() {
        // Create array from lines and turn values into integers
        const parsedInput = this._inputData
            .trim()
            .split(',')
            .map(value => parseInt(value));
        // Accumulate values
        const output = parsedInput
            .reduce((a, b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor(dayIndex) { super(dayIndex); }

    calculate() {
        // Create array from lines and turn values into integers
        const parsedInput = this._inputData
            .trim()
            .split(',')
            .map(value => parseInt(value));
        // Accumulate values
        const output = parsedInput
            .reduce((a, b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}
