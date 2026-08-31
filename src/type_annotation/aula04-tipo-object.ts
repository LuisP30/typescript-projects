const objetoA: {
 readonly chaveA: string,
  chaveB: string,
  chaveC?: string,
  [key: string]: unknown // index signature
} = {
  chaveA: 'ValorA',
  chaveB: 'ValorB',
};

// Não é possível criar nova chave após o objeto passar por inferência
objetoA.chaveC = 'nova chave';
objetoA.chaveD = 'nova chave D';

console.log(objetoA)
