class calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) { 
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement 
        this.clear()
    }
    
    clear () {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }

    delete () {
        this.currentOperand = this.currentOperand.tostring().sclice(0, -1)

    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.incudes('.')) return
        this.currentOperand = this.currentOperand.tostring() + number.tostring()

    }

    chooseOperation(operaion) {
        if (number === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operaion
        this.previousOperand = this.currentOperand
        this.currentOperand = ''

    }

    compute() {
        let computation
        const prev = parseFloat(this.previousoperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operaion) {
            case '+':
                computation = prev + current
                break
            case '-':
                    computation = prev - current
                    break
            case '*':
                    computation = prev * current
                    break
            case '÷':
                    computation = prev / current
                    break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }
    getDisplayNumber(number) {
        const floatNumber = parseFloat(number)
        if (isNaN(floatNumber)) return ''
        return floatNumber.toLocaleString('en')
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText =$
        this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
        '${this.getDisplayNumber(this.previousOperand)} ${this.operation}'
        }

    }


}




const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operaion]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]') 
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new calculator(previousOperandTextElement,
    currentOperandTextElement)

    numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
    })

    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            calculator.chooseOperation(button.innerText)
            calculator.updateDisplay()
        })
        })

        equalsButton.addEventListener('click', button => {
            calculator.compute()
            calculator.updateDisplay()
        })
        allClearButton.addEventListener('click', button => {
            calculator.clear()
            calculator.updateDisplay()
        })
        deleteButton.addEventListener('click', button => {
            calculator.delete()
            calculator.updateDisplay()
        })