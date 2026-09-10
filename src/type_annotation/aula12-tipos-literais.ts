let x = 10;
x = 0b1010;
const y = 10; // O tipo de y só pode ser 10 (subtipo de number) (tipo literal por ser constante)

let a: 100 = 100; // Ideal é que seja utilizado const nesse caso
// a= 120; (Não pode)

let b: 100 = 100 as const; // Quero que B seja 100 como uma constante

const pessoa = {
  nome: 'Luis' as const, // chave nome agora só pode ter o valor 'Luis'
  sobrenome: 'Henrique'
};

// pessoa.nome = 'João'; erro

function escolhaCor(cor: 'Vermelho' | 'Azul' | 'Preto'): string {
  return cor
}

console.log(escolhaCor('Preto'))

export default 1;
