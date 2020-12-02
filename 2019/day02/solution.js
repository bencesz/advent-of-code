const DAY_INDEX = 2;

window.onload = () => {
    new InputRegister(DAY_INDEX).init();
};

class IntCodeProgram {
    intcode = [];
    noun = 0;
    verb = 0;

    constructor(intcode, noun, verb) {
        this.noun = noun;
        this.verb = verb;
        this.intcode = intcode;
    }

    run(logging = true) {
        if (!this.intcode || !Array.isArray(this.intcode)) {
            console.warn(`Intcode must be an array of values`);
            return [];
        } else if (this.intcode.length < 4) {
            console.warn(`Intcode must have at least 4 values`);
            return [];
        }

        const output = [...this.intcode];
        let multiplyValues = false;
        let sum = 0;

        // Reset memory if needed
        if (this.noun) {
            output[1] = this.noun;
        }
        if (this.verb) {
            output[2] = this.verb;
        }


        // Run program
        for (let index = 0; index < output.length; index++) {
            const opcode = output[index];
            // Handle action opcode [0]
            if (index % 4 === 0 || index === 0) {
                if (opcode === 1) {
                    multiplyValues = false;
                } else if (opcode === 2) {
                    multiplyValues = true;
                } else if (opcode === 99) {
                    if (logging) {
                        console.warn(`Operation halted at index ${index}`);
                    }
                    break;
                } else {
                    throw new Error(`Something went wrong at index ${index}, ${output}`);
                }
                // Handle sum opcode [1, 2]
            } else if ((index - 1) % 4 === 0 || index === 1) {
                sum = output[opcode];
            } else if ((index - 2) % 4 === 0 || index === 2) {
                multiplyValues ? sum *= output[opcode] : sum += output[opcode];
                // Handle replace opcode [3]
            } else if ((index - 3) % 4 === 0 || index === 3) {
                output[opcode] = sum;
            }
        }

        return output;
    }

    findVerbAndNoun() {
        let output = [];
        for (let noun = 0; noun < 99; noun++) {
            this.noun = noun;
            for (let verb = 0; verb < 99; verb++) {
                this.verb = verb;
                output = this.run(false);
                if (output[0] === 19690720) {
                    console.warn(`Noun: ${this.noun}, Verb: ${this.verb}`);
                    const solution = 100 * this.noun + this.verb;
                    return { noun: this.noun, verb: this.verb, solution};
                }
            }
        }
        return { noun: 'N/A', verb: 'N/A', output: 'N/A'};
    }
}

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX); }

    calculate() {
        // Create array from lines and turn values into integers
        const parsedInput = this.parseInput({ splitBy: ',' });

        // Run program
        const output = new IntCodeProgram(parsedInput, 12, 2).run();

        // Fill output field
        this.fillOutput(output[0]);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX); }

    calculate() {
        // Create array from lines and turn values into integers
        const parsedInput = this.parseInput({ splitBy: ',' });

        // Run program
        const verbAndNoun = new IntCodeProgram(parsedInput).findVerbAndNoun();
        const output = `<em>Noun:</em> ${verbAndNoun.noun}
<em>Verb:</em> ${verbAndNoun.verb}
<em>Solution:</em> ${verbAndNoun.solution}`;

        // Fill output field
        this.fillOutput(output);
    }
}
