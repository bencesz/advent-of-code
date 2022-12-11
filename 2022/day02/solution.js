const DAY_INDEX = 2;
const YEAR_INDEX = 2022;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' });
        // Rock paper scissors matrix
        const [RockA, PaperA, ScissorsA] = ['A', 'B', 'C'];
        const [RockB, PaperB, ScissorsB] = ['X', 'Y', 'Z'];
        const [rock, paper, scissors] = [1, 2, 3];
        const [win, draw, loose] = [6, 3, 0];
        const outcomes = {
            [RockA]: {
                [RockB]: rock + draw,
                [PaperB]: paper + win,
                [ScissorsB]: scissors + loose,
            },
            [PaperA]: {
                [RockB]: rock + loose,
                [PaperB]: paper + draw,
                [ScissorsB]: scissors + win,
            },
            [ScissorsA]: {
                [RockB]: rock + win,
                [PaperB]: paper + loose,
                [ScissorsB]: scissors + draw,
            },
        }
        let points = 0;
        parsedInput.forEach(round => {
            const [moveA, moveB] = round.split(' ');
            points += outcomes[moveA][moveB];
        });

        // Fill output field
        this.fillOutput(points);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' });
        // Rock paper scissors matrix
        const [RockA, PaperA, ScissorsA] = ['A', 'B', 'C'];
        const [Loose, Draw, Win] = ['X', 'Y', 'Z'];
        const [rock, paper, scissors] = [1, 2, 3];
        const [win, draw, loose] = [6, 3, 0];
        const outcomes = {
            [RockA]: {
                [Loose]: scissors + loose,
                [Draw]:  rock + draw,
                [Win]: paper + win,
            },
            [PaperA]: {
                [Loose]: rock + loose,
                [Draw]: paper + draw,
                [Win]: scissors + win,
            },
            [ScissorsA]: {
                [Loose]: paper + loose,
                [Draw]: scissors + draw,
                [Win]: rock + win,
            },
        }
        let points = 0;
        parsedInput.forEach(round => {
            const [moveA, moveB] = round.split(' ');
            points += outcomes[moveA][moveB];
        });

        // Fill output field
        this.fillOutput(points);
    }
}
