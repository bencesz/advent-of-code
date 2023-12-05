const DAY_INDEX = 5
const YEAR_INDEX = 2023

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init()
};

const mapAlmanac = (input) => {
    const almanac = []
    const seeds = []
    let mapIndex = -1
    input.forEach((line, index) => {
        if (index === 0) {
            seeds.push(...line.split(': ')[1].split(' ').map(Number))
        } else if (line.includes('map')) {
            almanac.push([])
            mapIndex++
        } else if (line.length) {
            almanac[mapIndex].push(line.split(' ').map(Number))
        }
    })

    return [seeds, almanac]
}

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX) }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' })

        // Solution
        const [seeds, almanac]= mapAlmanac(parsedInput)

        const locations = []
        for (let seed of seeds) {
            let location = seed
            for (let i = 0; i < almanac.length; i++) {
                for (let assignment of almanac[i]) {
                    const [to, from, range] = assignment

                    if (location >= from && location <= from + range - 1) {
                        location = to + (location - from)
                        break;
                    }
                }
            }
            locations.push(location)
        }

        // Accumulate values
        const output = Math.min(...locations)

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
        const [seedRange, almanac]= mapAlmanac(parsedInput)
        const seeds = []
        // @TODO invalid array length error. Need a different approach
        for (let i = 0; i < seedRange.length; i++) {
            if (i === 0 && i % 2 === 0) {
                for (let j = 0; j < seedRange[i + 1]; j++)
                    seeds.push(seedRange[i] + j)
            }
        }
        const locations = []
        for (let seed of seeds) {
            let location = seed
            for (let i = 0; i < almanac.length; i++) {
                for (let assignment of almanac[i]) {
                    const [to, from, range] = assignment

                    if (location >= from && location <= from + range - 1) {
                        location = to + (location - from)
                        break;
                    }
                }
            }
            locations.push(location)
        }

        // Accumulate values
        const output = Math.min(...locations)

        // Fill output field
        this.fillOutput(output)
    }
}
