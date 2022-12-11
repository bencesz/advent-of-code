const DAY_INDEX = 5;
const YEAR_INDEX = 2022;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

//     [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3

const testStacks = [
    'NZ'.split(''),
    'DCM'.split(''),
    'P'.split(''),
];

//         [F] [Q]         [Q]
// [B]     [Q] [V] [D]     [S]
// [S] [P] [T] [R] [M]     [D]
// [J] [V] [W] [M] [F]     [J]     [J]
// [Z] [G] [S] [W] [N] [D] [R]     [T]
// [V] [M] [B] [G] [S] [C] [T] [V] [S]
// [D] [S] [L] [J] [L] [G] [G] [F] [R]
// [G] [Z] [C] [H] [C] [R] [H] [P] [D]
//  1   2   3   4   5   6   7   8   9

const stacks = [
    'BSJZVDG'.split(''),
    'PVGMSZ'.split(''),
    'FQTWSBLC'.split(''),
    'QVRMWGJH'.split(''),
    'DMFNSLC'.split(''),
    'DCGR'.split(''),
    'QSDJRTGH'.split(''),
    'VFP'.split(''),
    'JTSRD'.split(''),
];

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' });

        // Moving crates
        const selectedStacks = [...stacks];
        parsedInput.forEach(instruction => {
            const [amount, from, to] = instruction
                .replace('move ', '')
                .replace(' from ', ' ')
                .replace(' to ', ' ')
                .split(' ')
                .map(i => +i);

            for (let i = 0; i < amount; i++) {
                const crate = selectedStacks[from - 1].splice(0, 1);
                selectedStacks[to - 1].unshift(...crate);
            }
        });
        const topCrates = selectedStacks.map(stack => stack[0]).join('');

        // Fill output field
        this.fillOutput(topCrates);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' });

        // Moving crates
        const selectedStacks = [...stacks];
        parsedInput.forEach(instruction => {
            const [amount, from, to] = instruction
                .replace('move ', '')
                .replace(' from ', ' ')
                .replace(' to ', ' ')
                .split(' ')
                .map(i => +i);

            const crate = selectedStacks[from - 1].splice(0, amount);
            selectedStacks[to - 1].unshift(...crate);
        });
        const topCrates = selectedStacks.map(stack => stack[0]).join('');

        // Fill output field
        this.fillOutput(topCrates);
    }
}
