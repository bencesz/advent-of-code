const DAY_INDEX = 4
const YEAR_INDEX = 2023

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init()
};

const parseCard = (card) => card.split(' | ').map(group => group.match(/\d+/g).map(Number).sort((a,b) => a-b))

const getCommonNumbers = (line) => {
    const numbers = line.split(': ')[1]
    const [winnerNumbers, playerNumbers] = parseCard(numbers)
    let i = 0
    let j = 0
    const commonNumbers = []
    while (i < winnerNumbers.length && j < playerNumbers.length) {
        if (winnerNumbers[i] === playerNumbers[j]) {
            commonNumbers.push(winnerNumbers[i])
            i++
            j++
        } else if (winnerNumbers[i] < playerNumbers[j]) {
            i++
        } else {
            j++
        }
    }
    return commonNumbers
}

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX) }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' })

        // Solution
        const lines = parsedInput.map(line => {
            const commonNumbers = getCommonNumbers(line)
            return !commonNumbers.length ? 0 : Math.pow(2, commonNumbers.length - 1)
        })

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
        const cards = parsedInput.map(line => getCommonNumbers(line).length)

        const totalCards = new Array(cards.length).fill(1)
        cards.forEach((wins, index) => {
            for (let i = 0; i < totalCards[index]; i++) {
                for (let j = 1; j <= wins; j++) {
                    totalCards[index + j]++
                }
            }
        })

        // Accumulate values
        const output = totalCards.reduce((acc,val) => acc + val)

        // Fill output field
        this.fillOutput(output)
    }
}
