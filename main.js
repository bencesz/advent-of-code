class OutputCalculator {
    constructor(dayIndex) {
        this._inputData = new InputRegister(dayIndex).input;
        this._outputEl = document.querySelector('.output pre');
        this._outputData = null;
    }

    set output(text) {
        this._outputData = text;
    }

    get output() {
        return this._outputData;
    }

    fillOutput(text) {
        const output = this._outputEl;

        output.innerHTML = text;
        this.output = text;
    }
}

class InputRegister {
    constructor(dayIndex) {
        this._inputEl = document.querySelector('.input input');
        this._inputResultEl = document.querySelector('.input pre');
        this._dataKey = 'AOC_INPUT_DAY' + dayIndex;
    }

    set input(data) {
        localStorage.setItem(this._dataKey, data);
        this.fillInput(data);
    }

    get input() {
        return localStorage.getItem(this._dataKey);
    }

    init() {
        this.registerInput();
        if (this.input) {
            this.fillInput(this.input);
        }
    }

    registerInput() {
        const input = this._inputEl;

        input.addEventListener('change', (event) => {
            const fileList = event.target.files;

            if (fileList && fileList.length) {
                this.registerFileReader(fileList);
            }
        });
    }

    registerFileReader(fileList) {
        const txtFile = fileList[0];
        const reader = new FileReader();

        reader.addEventListener('load', (event) => {
            const result = event.target.result;
            if (result) {
                this.input = result;
            }
        });

        reader.readAsBinaryString(txtFile);
    }

    fillInput(text) {
        const output = this._inputResultEl;

        output.innerHTML = text;
    }
}