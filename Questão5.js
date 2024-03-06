5- function inverter(string) {
  return string.split('').reverse().join('');
}

const stringTeste = 'Testando!';
const stringTesteInvertida = inverter(stringTeste);
console.log(stringTesteInvertida);
