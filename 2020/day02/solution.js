const DAY_INDEX = 2;

window.onload = () => {
    new InputRegister(DAY_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX); }

    static parseLine = (line) => {
        const fragments = line.split(' ');
        const policy = fragments[0].split('-').map(number => parseInt(number));
        const letter = fragments[1].split(':')[0];
        const password = fragments[2];

        return {
            min: policy[0],
            max: policy[1],
            letter,
            password
        }
    };


    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false }).map(Solution1.parseLine);
        // Find correct passwords
        const correctPasswords = parsedInput.filter(policy => {
            const foundLetters = policy.password.split('').filter(letter => letter === policy.letter).length;

            return foundLetters >= policy.min && foundLetters <= policy.max;
        });
        // Accumulate values
        const output = correctPasswords.length;

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false }).map(Solution1.parseLine);
        // Find correct passwords
        const correctPasswords = parsedInput.filter(policy =>
            (
                policy.password.charAt(policy.min - 1) === policy.letter &&
                policy.password.charAt(policy.max - 1) !== policy.letter
            ) || (
                policy.password.charAt(policy.min - 1) !== policy.letter &&
                policy.password.charAt(policy.max - 1) === policy.letter
            )
        );
        // Accumulate values
        const output = correctPasswords.length;

        // Fill output field
        this.fillOutput(output);
    }
}
