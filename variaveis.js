//diferenca de var e let é o gerenciamento de escopo, as duas permitem modificações na variável
var numero = 2
console.log(numero)

let numero1 = 3
numero1 += 2
console.log(numero1)

//não podemos modificar uma variável constante
const numero2 = 8
    //numero2 += 3 - da erro pois nao pode alterar variavel constante
console.log(numero2)