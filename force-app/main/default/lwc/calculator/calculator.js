import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track firstNumber;
    @track secondNumber;
    @track result;

    handleFirstNumberChange(event) {
        this.firstNumber = parseFloat(event.target.value);
    }

    handleSecondNumberChange(event) {
        this.secondNumber = parseFloat(event.target.value);
    }

    add() {
        this.result = this.firstNumber + this.secondNumber;
    }

    subtract() {
        this.result = this.firstNumber - this.secondNumber;
    }

    multiply() {
        this.result = this.firstNumber * this.secondNumber;
    }

    divide() {
        if (this.secondNumber !== 0) {
            this.result = this.firstNumber / this.secondNumber;
        } else {
            this.result = 'Cannot divide by zero';
        }
    }
}
