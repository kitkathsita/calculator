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
  if (operation === 'sum') {
    total = adition(num1, num2)
  } else if (operation === 'res') {
    total = substraction(num1, num2)
  } else if (operation === 'mul') {
    total =  multiplication(num1, num2)
  } else if (operation === 'div') {
    total = division(num1, num2)
  } else {
    total = 'invalid operation'
  }
  return total
}

console.log(operate('div', 5, 5))