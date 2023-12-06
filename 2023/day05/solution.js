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

const seedToLocation = (seed, map) => {
    let location = seed
    for (let i = 0; i < map.length; i++) {
        for (let assignment of map[i]) {
            const [to, from, range] = assignment

            if (location >= from && location <= from + range - 1) {
                location = to + (location - from)
                break;
            }
        }
    }
    return location
}

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX) }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' })

        // Solution
        const [seeds, almanac] = mapAlmanac(parsedInput)

        const locations = []
        for (let seed of seeds) {
            locations.push(seedToLocation(seed, almanac))
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
        const [seedRange, almanac] = mapAlmanac(parsedInput)
        let seeds = almanac[0]
            .sort((a, b) => a[1] - b[1])
            .map(x => (
                {
                    start: x[1],
                    end: x[1] + x[2],
                    startLocation: seedToLocation(x[1], almanac),
                    endLocation: seedToLocation(x[1] + x[2], almanac)
                }
            ));
        console.log('Seeds:', seeds)

        let min = Number.MAX_SAFE_INTEGER
        const ranges = seedRange.length / 2
        console.time(`Ranges calculated [${ranges}/${ranges}]`)
        for (let i = 0; i < seedRange.length; i+=2) {
            let start = seedRange[i]
            let end = start + seedRange[i + 1] - 1
            let location = Number.MAX_SAFE_INTEGER

            console.log(`%c Calculating range [${start}, ${end}] %c[${i === 0 ? 1 : (i / 2) + 1}/${ranges}]`, 'color: #65cef7', 'color: #c4f23c')
            console.time(`Range calculated`)

            for (let j = 0; j < seeds.length; j++) {
                console.time(`Seed location calculated [${j + 1}/${seeds.length}]`)
                let overlap = Math.min(end, seeds[j].end) - Math.max(start, seeds[j].start)
                if (overlap >= 0) {
                    // Ranges over lap
                    let overLapStart = start >= seeds[j].start ? start : seeds[j].start
                    let overLapEnd = end <= seeds[j].end ? end : seeds[j].end

                    for (let k = overLapStart; k <= overLapEnd; k++) {
                        location = seedToLocation(k, almanac)
                        if(location < min) {
                            min = location
                        }
                    }
                    console.timeEnd(`Seed location calculated [${j + 1}/${seeds.length}]`)
                    console.log(`%c Exiting range calculation for remaining %c[${seeds.length - (j + 1)}/${seeds.length}]`, 'color: #ffb55b', 'color: #ff875b')
                    break
                }
                console.timeEnd(`Seed location calculated [${j + 1}/${seeds.length}]`)
            }
            console.timeEnd(`Range calculated`)
        }
        console.timeEnd(`Ranges calculated [${ranges}/${ranges}]`)
        console.log(min) // previously 32956608

        // Accumulate values
        const output = min

        // Fill output field
        this.fillOutput(output)
    }
}
