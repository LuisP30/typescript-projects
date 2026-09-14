/* Recomendado: */
// Condicional
const body = document.querySelector('body');
if(body) body.style.background = 'red';

// HTML Element
const button = document.querySelector('.button') as HTMLButtonElement;

// Type assertion
const input = document.querySelector('input') as HTMLInputElement;
input.style.background = 'red';
input.value = 'Qualquer coisa';
input.focus();

/* Não recomendado */
// Non-null assertion (!)
const form = document.querySelector('form')!;
// Exclamação faz com que a const form não seja nula (não é aconselhavel utilizar)
form.style.background = 'red';


// (Subir tipos)
const input1 = (document.querySelector('input') as unknown) as number;
