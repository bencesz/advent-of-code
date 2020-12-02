const DAY_INDEX = 3;

window.onload = () => {
    new InputRegister(DAY_INDEX).init();
};

const Orientation = {
    HORIZONTAL: 'x',
    VERTICAL: 'y',
};

class Wire {
    directions = [];
    position = { x: 0, y: 0 };
    segments = [];
    name = '';

    constructor(input, name) {
        this.directions = input.split(',');
        this.name = name;
    }

    mapSegments() {
        this.directions.map(value => {
            const direction = value.substring(0, 1);
            const distance = Number(value.substring(1));
            const nextPosition = { ...this.position };
            const segment = { from: null, to: null, orientation: null, wire: this.name };
            let orientation; // 'H' = horizontal, 'V' = vertical
            switch (direction) {
                case 'R':
                    nextPosition.x += distance;
                    orientation = Orientation.HORIZONTAL;
                    segment.from = { ...this.position };
                    segment.to = { ...nextPosition };
                    break;
                case 'L':
                    nextPosition.x -= distance;
                    orientation = Orientation.HORIZONTAL;
                    segment.from = { ...nextPosition };
                    segment.to = { ...this.position };
                    break;
                case 'D':
                    nextPosition.y -= distance;
                    orientation = Orientation.VERTICAL;
                    segment.from = { ...this.position };
                    segment.to = { ...nextPosition };
                    break;
                case 'U':
                    nextPosition.y += distance;
                    orientation = Orientation.VERTICAL;
                    segment.from = { ...nextPosition };
                    segment.to = { ...this.position };
                    break;
            }
            segment.orientation = orientation;
            this.segments.push(segment);
            this.position = nextPosition;
            return value;
        });
        return this.segments;
    }
}

class Solution1 extends OutputCalculator {
    constructor() { super(DAY_INDEX); }

    calculate() {
        // Create array from lines and turn values into integers
        const parsedInput = this.parseInput({ integerOnly: false });

        // Define wires
        const wireA = new Wire(parsedInput[0], 'A');
        const wireB = new Wire(parsedInput[1], 'B');
        const segmentsA = wireA.mapSegments();
        const segmentsB = wireB.mapSegments();
        const getVerticalSegments = (segment) => segment.orientation === Orientation.VERTICAL;
        const getHorizontalSegments = (segment) => segment.orientation === Orientation.HORIZONTAL;
        const verticalSegments = [...segmentsA.filter(getVerticalSegments), ...segmentsB.filter(getVerticalSegments)];
        const horizontalSegments = [...segmentsA.filter(getHorizontalSegments), ...segmentsB.filter(getHorizontalSegments)];
        const intersections = [];

        // Find intersections
        for (let verticalSegment of verticalSegments) {
            for (let horizontalSegment of horizontalSegments) {
                if (
                    verticalSegment.wire !== horizontalSegment.wire &&
                    (verticalSegment.from.y > horizontalSegment.from.y && horizontalSegment.from.y > verticalSegment.to.y) &&
                    (horizontalSegment.from.x < verticalSegment.from.x && verticalSegment.from.x < horizontalSegment.to.x) &&
                    (verticalSegment.from.x !== 0 && verticalSegment.from.y !== 0) &&
                    (horizontalSegment.from.x !== 0 && horizontalSegment.from.y !== 0)
                ) {
                    intersections.push({ x: verticalSegment.from.x, y: horizontalSegment.from.y, distance: verticalSegment.from.x + horizontalSegment.from.y});
                }
            }
        }

        const distances = intersections.map(intersection => Math.abs(intersection.distance));
        console.log(distances);

        // Run program
        const output = Math.min(...distances);

        // Fill output field
        this.fillOutput(output);
    }
}

class Solution2 extends OutputCalculator {
    constructor() { super(DAY_INDEX); }

    calculate() {
        // Create array from lines and turn values into integers
        const parsedInput = this.parseInput({ splitBy: ',' });

        // Run program
        const output = parsedInput;

        // Fill output field
        this.fillOutput(output);
    }
}
