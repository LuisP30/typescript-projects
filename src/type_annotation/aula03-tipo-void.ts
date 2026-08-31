function semRetorno(...args: string[]): void {
  console.log(args.join(' '))
}

semRetorno('Luis', 'Henrique')

// Declarar variáveis de mesmo nome em arquivos diferentes pode acabar gerando conflitos
// Altere moduleDetection em tsconfig para "legacy" ou "force"
const pessoa = {
  nome: 'Luis',
  sobrenome: 'Henrique',

  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`)
  }
}

pessoa.exibirNome()
