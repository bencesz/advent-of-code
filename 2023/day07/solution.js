const DAY_INDEX = 7
const YEAR_INDEX = 2023

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init()
};

const cards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A']

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX) }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' })

        // Solution
        const pairs = []
        const rounds = parsedInput.map((line, index) => {
            const [hand, bid] = line.split(' ')
            const handMap = {
                hand,
                strength: hand.split('').map(card => cards.indexOf(card)),
                bid
            }
            let cMap = hand.split('')
            let i = 0
            while (i < cMap.length) {
                const search = cMap.filter(c => c === cMap[i])
                if (search.length > 1) {
                    pairs[index] ? pairs[index].push([search.length, cMap[i]]) : pairs[index] = [[search.length, cMap[i]]]
                    cMap = cMap.filter(c => c !== cMap[i])
                } else {
                    i++
                }
            }
            return handMap
        })
        console.log(pairs)
        console.log(rounds)

        // Accumulate values
        const output = rounds.reduce((acc,val) => acc + val)

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
        const lines = [...parsedInput]

        // Accumulate values
        const output = lines.reduce((acc,val) => acc + val)

        // Fill output field
        this.fillOutput(output)
    }
}
