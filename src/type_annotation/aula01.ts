/* eslint-disable */
// let nome: string = 'Luis';
// :string é o type annotation
// (trivial)

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luis';
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o744
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
let big: bigint = 10n; // bigint

// Tipos que já existem no JS utiliza-se a letra inicial minúscula
// Tipos criados utilizam a letra inicial maiúscula

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3] // <number> é um generic com tipo
let arrayDeNumeros2: number[] = [1, 2, 3] // é a mesma coisa do de cima
let arrayDeStrings: Array<string> = ['Luis'] // <number> é um generic com tipo
let arrayDeStrings2: string[] = ['Luis'] // é a mesma coisa do de cima

// Objetos
// após os dois pontos é type annotation
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'Luis',
  idade: 23
}
// Interrogação após a chave adulto a torna opcional

// Funções
function soma(x: number, y: number): number {
  return x + y
}
// Abaixo (x: number, y: number) => number é apenas o type annotation
const soma2: (x: number, y: number) => number = (x, y) => x + y;
