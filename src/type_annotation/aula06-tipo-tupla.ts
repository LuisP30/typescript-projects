const dadosCliente: readonly [number, string] = [1, 'Luis'];
const dadosCliente2: [number, string, ...string[]] = [1, 'Luis']; // O primeiro índice é number e o restante string

// O código abaixo gera erros devido ao array ser readonly
// dadosCliente[0] = 100
// dadosCliente.pop() // utilizando readonly não é mais possivel utilizar o pop

console.log(dadosCliente)

dadosCliente2[2] = 'Henrique'
dadosCliente2[3] = 'de'

console.log(dadosCliente2)

const array1: readonly string[] = ['Luis', 'Henrique']
const array2: ReadonlyArray<string> = ['Luis', 'Henrique']
