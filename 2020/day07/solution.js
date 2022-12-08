const DAY_INDEX = 7;
const YEAR_INDEX = 2020;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    static parseLine = (rule) => {
        const description = rule.split(', ');
        const outerBag = `${description[0].split(' ')[0]} ${description[0].split(' ')[1]}`;
        const additionalBags = [...description.slice(1).map(bag => ({ [`${bag.split(' ')[1]} ${bag.split(' ')[2]}`]: parseInt(bag.split(' ')[0])}))];
        const innerBagAmount = description[0].split(' ')[4] === 'no' ? 0 : parseInt(description[0].split(' ')[4]);
        const innerBags = [{ [`${description[0].split(' ')[5]} ${description[0].split(' ')[6]}`]: innerBagAmount }, ...additionalBags ];
        console.log({ [outerBag]: innerBags });
        return rule;
    }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false });
        // Lines
        const passports = parsedInput.map(Solution1.parseLine);
        // Accumulate values
        const output = passports;

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    static parseLine = (passport) => {
        return passport;
    }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false });
        // Lines
        const passports = parsedInput.map(Solution2.parseLine);
        // Accumulate values
        const output = passports;

        // Fill output field
        this.fillOutput(output);
    }
}
