
const input = (button) => {
    document.calc.display.value += button.value
}

const clearDisplay = () => {
    document.calc.display.value = calc.display.placeholder
}

const enter = () => {
    document.calc.display.value = eval(document.calc.display.value)
}
