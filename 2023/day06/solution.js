const DAY_INDEX = 6
const YEAR_INDEX = 2023

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init()
};

const maxDistance = (time, length) => {
    return length * (time - length)
}

const countWins = (raceTimes, raceRecords) => {
    let allWins = []
    for (let i = 0; i < raceTimes.length; i++) {
        let wins = 0
        for (let elapsed = 0; elapsed < raceTimes[i]; elapsed++) {
            if (maxDistance(raceTimes[i], elapsed) > raceRecords[i]) {
                wins++
            }
        }
        allWins.push(wins)
    }
    return allWins
}

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX) }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' })

        // Solution
        const [raceTimes, raceRecords] = parsedInput.map(line => line.match(/\d+/g).map(Number))
        let allWins = countWins(raceTimes, raceRecords)

        // Accumulate values
        const output = allWins.reduce((a,b) => a * b)

        // Fill output field
        this.fillOutput(output)
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX) }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' })

        // Solution
        const [raceTimes, raceRecords] = parsedInput.map(line => ([+line.match(/\d+/g).join('')]))
        let allWins = countWins(raceTimes, raceRecords)

        // Accumulate values
        const output = allWins.reduce((a,b) => a * b)

        // Fill output field
        this.fillOutput(output)
    }
}
