const DAY_INDEX = 2
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
        const [maxRed, maxGreen, maxBlue] = [12, 13, 14]
        let possibleGames = 0
        const findRed = /\d+\sr/g
        const findGreen = /\d+\sg/g
        const findBlue = /\d+\sb/g

        const overMax = (list, regExp, max) => list.match(regExp).find(g => +g.split(" ")[0] > max)

        for (let game of parsedInput) {
            const [round, draws] = game.split(": ")
            const i = +round.split(" ")[1]
            if (
                overMax(draws, findRed, maxRed) ||
                overMax(draws, findGreen, maxGreen) ||
                overMax(draws, findBlue, maxBlue)
            ) {
                continue
            }
            possibleGames += i
        }

        // Fill output field
        this.fillOutput(possibleGames)
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX) }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' })

        // Solution
        let powerOfSets = 0
        const findRed = /\d+\sr/g
        const findGreen = /\d+\sg/g
        const findBlue = /\d+\sb/g

        const getMin = (list, regExp) => list.match(regExp).map(g => +g.split(" ")[0]).sort((a,b) => a - b).pop()

        for (let game of parsedInput) {
            const draws = game.split(": ")[1]
            powerOfSets += getMin(draws, findRed) * getMin(draws, findGreen) * getMin(draws, findBlue)
        }

        // Fill output field
        this.fillOutput(powerOfSets)
    }
}
