const DAY_INDEX = 4;
const YEAR_INDEX = 2020;

window.onload = () => {
    new InputRegister(DAY_INDEX, YEAR_INDEX).init();
};

const VALID_KEYS = [
    'byr',
    'ecl',
    'eyr',
    'hcl',
    'hgt',
    'iyr',
    'pid',
];

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    static parseLine = (passport) => {
        const passportObj = {}
        passport
            .split(/[\n\r]/).join(' ')
            .replace('  ', ' ')
            .split(' ')
            .forEach(property => {
                const [key, value] = property.split(':');
                passportObj[key] = value;
            });

        return VALID_KEYS.every(key => passportObj.hasOwnProperty(key)) ? 1 : 0;
    }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({ splitBy: /\n\r|\n\n|\r\r/, integerOnly: false });
        // Lines
        const passports = parsedInput.map(Solution1.parseLine);
        // Accumulate values
        const output = passports.reduce((a,b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX, YEAR_INDEX); }

    static validator = (property) => {
        const validProperties = {};
        const [key, value] = property.split(':');
        const yearValidator = (min, max, value) => {
            const year = parseInt(value);
            return year >= min && year <= max;
        }
        const heightValidator = (value) => {
            if (!value.includes('in') && !value.includes('cm')) {
                return false;
            }
            const unit = value.includes('in') ? 'in' : 'cm';
            const limits = {
                cm: { min: 150, max: 193 },
                in: { min: 59, max: 76 }
            };
            const height = parseInt(value.split(unit)[0]);

            return height >= limits[unit].min && height <= limits[unit].max;
        }
        const hairColorValidator = (value) => {
            return value.match(/^#(?:[a-f0-9]{2}){3}$/g); // Might be too exact
        }
        const eyeColorValidator = (value) => {
            const validEyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

            return validEyeColors.some(color => color === value);
        }
        const idValidator = (value) => {
            return value.match(/^\d{9}$/g);
        }
        switch (key) {
            case 'byr':
                if (yearValidator(1920, 2002, value)) {
                    validProperties[key] = value;
                }
                break;
            case 'iyr':
                if (yearValidator(2010, 2020, value)) {
                    validProperties[key] = value;
                }
                break;
            case 'eyr':
                if (yearValidator(2020, 2030, value)) {
                    validProperties[key] = value;
                }
                break;
            case 'hgt':
                if (heightValidator(value)) {
                    validProperties[key] = value;
                }
                break;
            case 'hcl':
                if (hairColorValidator(value)) {
                    validProperties[key] = value;
                }
                break;
            case 'ecl':
                if (eyeColorValidator(value)) {
                    validProperties[key] = value;
                }
                break;
            case 'pid':
                if (idValidator(value)) {
                    validProperties[key] = value;
                }
                break;
            default:
                break;
        }

        return validProperties;
    }

    static parseLine = (passport) => {
        let passportObj = {}
        passport
            .split(/[\n\r]/).join(' ')
            .replace('  ', ' ')
            .split(' ')
            .forEach(property => {
                passportObj = { ...passportObj, ...Solution2.validator(property) };
            });

        return VALID_KEYS.every(key => passportObj.hasOwnProperty(key)) ? 1 : 0;
    }

    calculate() {
        // Create array from lines
        const parsedInput = this.parseInput({splitBy: /\n\r|\n\n|\r\r/, integerOnly: false});
        // Lines
        const passports = parsedInput.map(Solution2.parseLine);
        // Accumulate values
        const output = passports.reduce((a, b) => a + b);

        // Fill output field
        this.fillOutput(output);
    }
}
