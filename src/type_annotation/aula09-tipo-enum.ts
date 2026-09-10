// enum numérico
enum Cores {
  VERMELHO,
  AZUL = 3,
  AMARELO = 'AMARELO',
  // Depois de amarelo é importante passar um valor numérico para o elemento seguinte
  VERDE = 1,
  PRETO
}
// Posso alterar os números das chaves:
// enum Cores {
//   VERMELHO = 1,
//   AZUL = 0,
//   AMARELO = 2
// }
console.log(Cores.VERMELHO)


function escolhaAcor(cor: Cores): void {
  console.log(Cores[cor])
}

escolhaAcor(1)
