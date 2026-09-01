// Arrays

export function multiplicaArgs(...args: Array<number>): number{
  return args.reduce((acumulador, valor) => acumulador * valor, 1) // 1 é o valor inicial do reduce
}

export function concatenaString(...args: Array<string>): string {
  return args.reduce((acumulador, valor) => acumulador + valor)
}

export function toUpperCase(...args: Array<string>): Array<string>{
  return args.map(valor => valor.toUpperCase())
}

console.log(toUpperCase('luis henrique'))

const result = multiplicaArgs(1, 2, 3)
// console.log(result)

console.log(concatenaString('L', 'u', 'i', 's'))
