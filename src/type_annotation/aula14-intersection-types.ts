// Intersection type ou AND (&)
type TemNome = { nome: string }
type TemSobrenome = { sobrenome: string }
type TemIdade = { idade: number }
type Pessoa = TemNome & TemSobrenome & TemIdade

type AB = 'A' | 'B'
type AC = 'A' | 'C'
type Intersection = AB & AC

const pessoa: Pessoa = {
  nome: 'Luis',
  sobrenome: 'Henrique',
  idade: 23,
}

console.log(pessoa)

export { pessoa }
