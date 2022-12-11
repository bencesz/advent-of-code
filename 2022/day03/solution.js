const DAY_INDEX = 3;
const YEAR_INDEX = 2022;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' });
        // Organise rucksacks
        let items = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let sum = 0;

        parsedInput.forEach(rucksack => {
            const compartment1 = rucksack.substring(0, rucksack.length / 2).split('');
            const compartment2 = rucksack.substring(rucksack.length / 2, rucksack.length).split('');
            const commonItem = compartment2.find(item => compartment1.includes(item));
            const itemIndex = items.indexOf(commonItem);
            sum += (itemIndex + 1);
        });

        // Fill output field
        this.fillOutput(sum);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' });
        // Organise rucksacks
        let items = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        let sum = 0;
        parsedInput.forEach((rucksack, rowIndex) => {
            if (rowIndex === 0 || rowIndex % 3 === 0) {
                const rucksackItems = rucksack.split('');
                const nextRucksack = parsedInput[rowIndex + 1]?.split('') || [];
                const lastRucksack = parsedInput[rowIndex + 2]?.split('') || [];
                const commonItem = nextRucksack.find(item => rucksackItems.includes(item) && lastRucksack.includes(item));
                const itemIndex = items.indexOf(commonItem);
                sum += (itemIndex + 1);
            }
        });

        // Fill output field
        this.fillOutput(sum);
    }
}
