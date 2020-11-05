//uma classe pode ter propriedades e métodos
//hierarquia ex:
class Animal {
    constructor(f) {
        this.familia = f
    }
    andar = () => {
        return 'andando...'
    }
}
class Cachorro extends Animal { //extende a classe animal
    constructor(n, i) { //método construtor
            super('Carnívoros') // chama o construtor pai para passar o argumento
            this.nome = n
            this.idade = i
        }
        //nome = "tino" //propriedades
        //idade = 10

    //latir() { //método
    // return `${this.nome}: au! au!` //this faz referencia a classe
    //outro modo de criar o método com arrow functions
    latir = () => {
        return `${this.nome}: au! au!`
    }
}
//Criar o objeto
let tino = new Cachorro('tino', '10')
console.log(tino)
console.log(tino.latir())
console.log(tino.andar())
console.log(tino.familia)

/*let bruce = new Cachorro('bruce', '2')
    //console.log(bruce)
console.log(bruce.andar())*/