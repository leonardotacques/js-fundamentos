// ===== for: quando você sabe quantas voltas =====
for (let i = 0; i < 5; i++) {
    console.log('for, volta', i);
}
//para o i = zero, enquanto i for menor que 5, incrementa i em 1 a cada volta do laço.

// ===== while: repete enquanto a condição for verdadeira =====
let contador = 3;
while (contador > 0) {
    console.log('while, contador', contador);
    contador--; // sem isso, o laço seria infinito!
}
//para o contador = 3, enquanto contador for maior que 0, decrementa contador em 1 a cada volta do laço.

// ===== for...of: percorre os VALORES de uma lista =====
const frutas = ['maçã', 'banana', 'uva'];
for (const fruta of frutas) {
    console.log('for...of:', fruta);
}
//EXERCICIOS
//1 - Escreva um for que mostre só os números pares de 1 a 20. (Dica: %.)
let numerosPares = [];
for (let i = 2; i < 21; i++) {
    if (i % 2 == 0) {
        numerosPares.push(i);
    }
}
console.log('pares de 1 a 20:' + numerosPares);
//numerosPares.push(i); o .push() adiciona um elemento ao final do array. O array numerosPares recebe os números pares de 1 a 20.

//2 - Escreva um while que some os números de 1 até 100 e imprima o total no final.

let numero = 1;
while (numero < 101) {
    numero = numero + 1;
    numero++;
}
console.log(numero);
// por que não deu certo? da pra fazer com uma variável só?
let num = 1;
let soma = 0;
while (num <= 100) {
    soma += num;
    num++;
}
console.log('Soma dos números de 1 a 100:', soma);
//tentativa 2 deu certo

//3 - Dado const notas = [7, 4.5, 9, 6];, use for...of para mostrar quantas notas são maiores ou iguais a 6.

const notas = [7, 4.5, 9, 6];
let quantidadeNotasMaioresOuIguaisA6 = 0;
for (let maior of notas) {
    if (maior >= 6) {
        console.log(maior);
        quantidadeNotasMaioresOuIguaisA6++;
    }
}
console.log(
    'Quantidade de notas maiores ou iguais a 6:',
    quantidadeNotasMaioresOuIguaisA6
);

//EXERCICIOS DE FIXAÇÃO:

//FizzBuzz: de 1 a 30, imprima "Fizz" se o número for múltiplo de 3, "Buzz" se for de 5, "FizzBuzz" se for de ambos,
// e o próprio número nos outros casos. (Pense: qual condição precisa ser testada primeiro, e por quê?)
let fizzBuzz = [];
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + 'FizzBuzz');
    } else if (i % 3 === 0) {
        console.log(i + 'Fizz');
    } else i % 5 === 0;
    console.log(i + 'Buzz');
}

//Média: com const notas = [7, 4.5, 9, 6]; calcule a média usando for...of e mostre se o aluno está “Aprovado” (média ≥ 6) ou “Reprovado”.

const notas2 = [7, 4.5, 9, 6];
let soma2 = 0;
for (let nota of notas2) {
    soma2 += nota;
}
let media2 = soma2 / notas2.length;
console.log('Média:', media2);
if (media2 >= 6) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}
