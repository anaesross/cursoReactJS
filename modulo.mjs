import pessoas from './Modulos/pessoas.mjs';
console.log(pessoas);
//como é uma importação padrão, podemos chamar como quiser , por ex:
import p from './Modulos/pessoas.mjs'
console.log(p);
//importar nominal
import { ola, soma } from './Modulos/util.mjs'
console.log(ola(p.nome)) //p representa a pessoa que importamos do módulo pessoa
console.log(soma(3, 4))