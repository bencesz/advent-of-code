const DAY_INDEX = 19
const YEAR_INDEX = 2023

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init()
};

const rules = {}
const parts = []

const parseFlow = (line) => {
    if (!line.length) return
    if (line.charAt(0) === '{') {
        const part = {}
        line
            .replace('{', '')
            .replace('}', '')
            .split(',')
            .forEach(p => {
                part[p.split('=')[0]] = +p.split('=')[1]
            })
        parts.push(part)
    } else {
        const [name, flow] = line.split('{')
        rules[name] = flow.replace('}', '').split(',').map(rule => {
            const [condition, to] = rule.split(':')
            console.log(condition)
            return {
                accept: condition === 'A',
                reject: condition === 'R',
                redirectTo: !to && condition !== 'A' && condition !== 'R' ? condition : to,
                condition: to ? {
                    target: condition.charAt(0),
                    value: condition.substring(2),
                    symbol: condition.charAt(1)
                } : null
            }
        })
    }
}

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX) }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ integerOnly: false, splitBy: '\r\n' })

        // Solution
        let lines = parsedInput.map(parseFlow)
        console.log(rules)
        lines = parts.map(part => {
            let result
            let value = 0
            let path = []
            const checkRules = (key) => {
                path.push(key)
                for (const rule of rules[key]) {
                    if (rule.accept) {
                        result = 'A'
                        break
                    } else if (rule.reject) {
                        result = 'R'
                        break
                    } else if (
                        !rule.condition ||
                        rule.condition.symbol === '<' && part[rule.condition.target] < rule.condition.value ||
                        rule.condition.symbol === '>' && part[rule.condition.target] > rule.condition.value
                    ) {
                        if (rule.redirectTo === 'A') {
                            result = 'A'
                            break
                        } else if (rule.redirectTo === 'R') {
                            result = 'R'
                            break
                        } else {
                            checkRules(rule.redirectTo)
                            break
                        }
                    }
                }
            }
            checkRules('in')
            if (result === 'A') {
                value += part.x + part.m + part.a + part.s
            }
            console.log(part, path, result, value)
            return value
        })
        console.log(lines)

        // Accumulate values
        const output = lines.reduce((acc,val) => acc + val)

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
