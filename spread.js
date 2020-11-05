//Exemplo sem spread
const numeros = [1, 2, 3, 4]

const novosNumeros = numeros
novosNumeros.push(5)
    //ele adiciona o valor 5 nas duas variáveis , pois é uma referência
console.log(numeros)
console.log(novosNumeros)
    //para evitar que ele adicione nas duas variáveis, utilizamos o operador SPREAD ...
    //Exemplo com spread
const numeros1 = [1, 2, 3, 4]
const novosNumeros1 = [...numeros1] //reticências é o spread
novosNumeros1.push(5)
console.log("Com Spread: " + numeros1)
console.log("Com Spread: " + novosNumeros1)
    //Criando objeto sem spread
const tino = {
    nome: 'tino'
}
const bruce = tino
bruce.nome = 'Max'

console.log(tino)
console.log(bruce)
    //Utilizando operador spread com objeto
const bino = {
    nome: 'bino'
}
const peter = {...bino }
peter.nome = 'Max'
    //com spread
console.log(bino)
console.log(peter)
    //para adicionar novos elementos
const peter2 = {...bino, idade: 2, familia: 'Vegetariano' }
console.log(peter2)