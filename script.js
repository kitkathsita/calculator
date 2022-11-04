const onOff = document.querySelector('.turn')
const screen = document.querySelector('.screen')
const textScreen = document.querySelector('.textScreen')
const num = document.querySelectorAll('.number')
const operatSign = document.querySelectorAll('.ope')

let firstNum =  ''
let secondNum = ''
let operSign = ''

let operation = {
  firtsOperandu : '',
  operat : ''
}

function adition(a, b) {
  return a + b
}

function substraction(a, b) {
  return a - b
}

function multiplication(a, b) {
  return a * b
}

function division(a, b) { 
  return a / b
}

function operate(opp, a, b) {
  const operation = opp
  const num1 = a
  const num2 = b
  if (operation === 'adition') {
    total = adition(num1, num2)
  } else if (operation === 'substract') {
    total = substraction(num1, num2)
  } else if (operation === 'multiply') {
    total =  multiplication(num1, num2)
  } else if (operation === 'division') {
    total = division(num1, num2)
  } else {
    total = 'invalid operation'
  }
  return total
}

function initialCalc() {
  let textInit = document.createElement('p')
  textInit.innerHTML = ''
  if (this.classList[1]==='on') {
    // screen.appendChild(textInit)
    // textInit.innerHTML = 'HELLO'
    // textInit.classList.add('animation')
    this.classList.remove('on')
    this.classList.add('off')
  } else {
    // screen.appendChild(textInit)
    // textInit.innerHTML = 'BYE'
    // textInit.classList.add('animation')
    this.classList.remove('off')
    this.classList.add('on')
  }
  
}

function printNums(e) {
  if (onOff.classList[1]==='on') {
    // var textInit = document.createElement('p')
    firstNum = firstNum + e.target.innerText
    textScreen.classList.add('styleText')
    textScreen.innerText = firstNum
    //console.log(this.innerText)
    if (operation.firtsOperandu === '') {
      operation.firtsOperandu = e.target.innerText
    } 
}
}

function saveOperation(e) {
  if (onOff.classList[1]==='on') {
    operSign = e.target.innerText
    textScreen.innerText = textScreen.innerText+operSign
  }
}

console.log(operate('div', 5, 5))

onOff.addEventListener('click', initialCalc)

num.forEach(number => number.addEventListener('click', printNums))
operatSign.forEach(sign => sign.addEventListener('click', saveOperation))