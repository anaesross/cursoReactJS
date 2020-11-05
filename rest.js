//Operador REST ...
const somar = (n1, n2) => {
    return n1 + n2
}
console.log(somar(2, 4, 5)) //aqui ele ignora o 5, teria que adicionar um novo parametro ao método, ou podemos utilizar o operador REST

//Utilizando operador REST
const somar1 = (...numeros) => {
    //console.log(numeros)
    return numeros.reduce((a, b) => a + b, 0) //reduce = começa em zero - ele vai reduzindo o array de elemento a elemento e vai somar todos
}
console.log(somar1(2, 4, 5, 6, 10, 58)) //aqui posso adicionar quantos elementos quiser