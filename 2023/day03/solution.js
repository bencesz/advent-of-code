const DAY_INDEX = 3
const YEAR_INDEX = 2023

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init()
};

const isAdjacent = (list, symbol) => list.filter(item =>
    !item.symbol &&
    symbol.index >= item.firstIndex - 1 &&
    symbol.index <= item.lastIndex + 1
).map(number => number.value)

const getAdjacentNumbers = (schema, rowIndex, symbol) => {
    const adjacentNumbersInRow = isAdjacent(schema[rowIndex], symbol)
    const adjacentNumbersAbove = rowIndex > 0 ? isAdjacent(schema[rowIndex - 1], symbol) : []
    const adjacentNumbersBelow = rowIndex < schema.length ? isAdjacent(schema[rowIndex + 1], symbol) : []
    return [...adjacentNumbersInRow, ...adjacentNumbersAbove, ...adjacentNumbersBelow]
}

const mapSchema = (input) => input.map(line => {
    const chars = line.split("")
    const charMap = []
    chars.forEach((char, index) => {
        if (isNaN(+char) && char !== '.') {
            charMap.push({
                symbol: true,
                gear: char === "*",
                value: char,
                index,
            })
        } else if (char !== '.') {
            if (chars[index - 1] && !isNaN(+chars[index - 1])) {
                charMap[charMap.length - 1].value = +`${charMap[charMap.length - 1].value}${char}`
                charMap[charMap.length - 1].lastIndex = index
            } else {
                charMap.push({
                    symbol: false,
                    value: +char,
                    firstIndex: index,
                    lastIndex: index,
                })
            }
        }
    })
    return charMap
})

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX) }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' })

        // Solution
        const schema = mapSchema(parsedInput)

        const partNumbers = []
        schema.forEach((line, rowIndex) => {
            const symbols = line.filter(item => item.symbol)
            for (const symbol of symbols) {
                partNumbers.push(...getAdjacentNumbers(schema, rowIndex, symbol))
            }
        })

        // Accumulate values
        const output = partNumbers.reduce((acc,val) => acc + val)

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
        const schema = mapSchema(parsedInput)

        const gearRatios = []
        schema.forEach((line, rowIndex) => {
            const potentialGears = line.filter(item => item.value === '*')
            for (const gear of potentialGears) {
                const partNumbers = getAdjacentNumbers(schema, rowIndex, gear)
                if (partNumbers.length === 2) {
                    gearRatios.push(partNumbers[0] * partNumbers[1])
                }
            }
        })

        // Accumulate values
        const output = gearRatios.reduce((acc,val) => acc + val)

        // Fill output field
        this.fillOutput(output)
    }
}
