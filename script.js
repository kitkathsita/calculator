const onOff = document.querySelector('.turn')
const screen = document.querySelector('.screen')
const textScreen = document.querySelector('.textScreen')
const num = document.querySelectorAll('.number')
const operatSign = document.querySelectorAll('.ope')
const equal = document.querySelector('.equal')
const allClear = document.querySelector('.ac')

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

function operate() {
  const operation = operSign
  const num1 = Number(firstNum)
  const num2 = Number(secondNum)
  console.log(operation)
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
  textScreen.innerText = Math.round(total*1000)/1000
  firstNum = total
  operSign = ''
  secondNum = ''
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
    if (operSign === '') {
      firstNum = firstNum + e.target.innerText
      textScreen.classList.add('styleText')
      console.log(firstNum)
      textScreen.innerText = firstNum
    } else {
      secondNum = secondNum + e.target.innerText
      textScreen.innerText = textScreen.innerText + e.target.innerText
      console.log(secondNum)
    } 
}
}

function saveOperation(e) {
  if (onOff.classList[1]==='on') {
    if (operSign === '') {
      operSign = this.classList[1]
      console.log(typeof(operSign))
      textScreen.innerText = textScreen.innerText + e.target.innerText
    } else {
      operate()
      operSign = this.classList[1]
      textScreen.innerText = textScreen.innerText + e.target.innerText
    }
  }
}

function clearAll() {
  firstNum = ''
  secondNum = ''
  operSign = ''
  textScreen.innerText = ''
}

function deleteOne(){
  if (secondNum != '') {
    secondNum = secondNum.slice(-(secondNum.length-1), -1)
  } else if (secondNum === '' && operSign != '') {
    operSign = ''
  } else {
    firstNum = firstNum.slice(-(firstNum.length-1), -1)
  }
}

//console.log(operate('div', 5, 5))

onOff.addEventListener('click', initialCalc)

num.forEach(number => number.addEventListener('click', printNums))
operatSign.forEach(sign => sign.addEventListener('click', saveOperation))
equal.addEventListener('click', operate)
allClear.addEventListener('click', clearAll)