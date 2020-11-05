const frutas = ['laranja', 'banana', 'uva']

let [fruta1, fruta2, fruta3] = frutas //vai atribuir o primeiro elemento a primeira variavel o segundo a segunda variavel assim por diante

console.log(fruta1)
console.log(fruta2)
console.log(fruta3)

//Desustruração é mais utilizado com objetos, criando objeto:
const pessoa = {
        nome: "Anaê",
        idade: 31,
        pais: "Brasil",
        idioma: "Português"
    }
    //let { nome, idade } = pessoa // os nomes passados tem que condizer com os nomes dos elementos

//Exemplo:
//const localidade = (pessoa) => `Você mora no ${pessoa.pais} e fala ${pessoa.idioma}`
//console.log(localidade(pessoas))

//Exemplo desestruturado o objeto: - quando nao preciso de todos os atributos que o objeto possui
const localidade = ({ pais, idioma }) => `Você mora no ${pais} e fala ${idioma}`

console.log(localidade(pessoa))