let x: unknown;

const y = 20;

// Só é permitido realizar alguma operação com variáveis do tipo
// unknown após realizar checagem
if(typeof(x) === 'number') console.log(x + y)
