//Criar um nova função para retornar um valor booleano - verdadeiro ou falso - para verificar e informar se um determinado numero atribuido a uma variavel é primo.

function numPrimo(numero){
  if (numero <= 1){
      return false
  }

  for (let i = 2; i <= numero / 2; i++){
      if (numero % i === 0){
          return false
      }
  }

  return true
}
console.log(numPrimo(7))
console.log(numPrimo(16))