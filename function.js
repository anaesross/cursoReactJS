function ola() {
    return 'Olá!'
}

console.log(ola())

//Passando argumentos

function olaPessoa(nome) {
    return `Olá ${nome}` //utiliza crase para interpolação de strings, passando a variável dentro da string com ${}
}

console.log(olaPessoa('anae'))

//Arrow Function (igual function ola())
const ola2 = () => {
    return 'Olá Novamente!'
}

console.log(ola2())

//passando parametros arrow functions

const olaPessoa2 = (nome) => {
    return `Olá novamente ${nome}`
}

console.log(olaPessoa2('anae'));

//passando  2 parametros
const olaPessoa3 = (nome, idade) => {
    return `Olá novamente ${nome}, sua idade é ${idade}`
}

console.log(olaPessoa3('anae', 31));
//Se possuir uma function com apenas um parametro, podemos escrever desse modo:
const olaPessoa1 = nome => `Olá um parametro ${nome}`
console.log(olaPessoa1('Anaê'))