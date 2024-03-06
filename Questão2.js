const fibonacci = (maxValue) => {
  const fibonacciArr = [0, 1];
  for (let i = 2; fibonacciArr[i - 1] + fibonacciArr[i - 2] <= maxValue; i++) {
    fibonacciArr.splice(i, 0, fibonacciArr[i - 1] + fibonacciArr[i - 2]);
  }
  return fibonacciArr;
}

const mainSystem = () => {
  const userNumber = prompt("Escreva o número para validação");
  if (userNumber === "") {
    alert("Por favor, coloque o número!!!");
    return;
  }

  const maxValue = parseInt(userNumber);
  if (isNaN(maxValue) || maxValue <= 0) {
    alert("Coloque um número valido!");
    return;
  }

  const fibonacciSequence = fibonacci(maxValue);
  
  if (fibonacciSequence.includes(maxValue)) {
    alert("Seu número está presente na sequência!!");
  } else {
    alert("Seu número está presente na sequência!!");
  }
}

mainSystem();