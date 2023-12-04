const DAY_INDEX = 5
const YEAR_INDEX = 2023

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init()
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX) }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' })

        // Solution
        const lines = [...parsedInput]

        // Accumulate values
        const output = lines.reduce((acc,val) => acc + val)

        // Fill output field
        this.fillOutput(output)
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' })

        // Solution
        const lines = [...parsedInput]

        // Accumulate values
        const output = lines.reduce((acc,val) => acc + val)

        // Fill output field
        this.fillOutput(output)
    }
}
