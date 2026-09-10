// Tipos criados iniciam com letra maiúscula por convenção

type Idade = number;
type Pessoa = {
  nome: string,
  idade: Idade,
  salario: number,
  corPreferida?: CorPreferida,
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  nome: 'Luis',
  idade: 23,
  salario: 1_800, // Quando tenho um número com muitas casas posso separar por underline

};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return {
    ...pessoa,
    corPreferida: cor
  }
}

console.log(setCorPreferida(pessoa, 'Ciano'))
