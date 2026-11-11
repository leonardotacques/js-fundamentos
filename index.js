const nome = 'João';
nome = 'Maria';
console.log(nome);

// ===== parseInt: converte texto em número inteiro =====
console.log(parseInt('42')); // 42
console.log(parseInt('42px')); // 42 (lê até onde conseguir)
console.log(parseInt('abc')); // NaN (Not a Number)
console.log(parseInt('3.9')); // 3 (corta, não arredonda)
console.log(parseInt('10', 10)); // boa prática: informar a base (10)
// Para decimais existe parseFloat("3.9") e Number("3.9")

// ===== typeof: mostra o tipo do valor =====
console.log(typeof 'texto'); // "string"
console.log(typeof 25); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug histórico da linguagem!)
console.log(typeof NaN); // "number" (sim, NaN é do tipo number)

// ===== Operadores úteis =====
console.log(10 % 3); // 1 (resto da divisão)
console.log(2 ** 3); // 8 (potência)
console.log(5 === '5'); // false (compara valor E tipo)
console.log(5 == '5'); // true (converte tipo; evite!)
console.log(5 !== 6); // true
console.log(true && false); // false (E)
console.log(true || false); // true (OU)
console.log(!true); // false (NÃO)
console.log(null ?? 'padrão'); // "padrão" (usa o da direita se o da esquerda for null/undefined)
console.log(0.1 + 0.2); // 0.30000000000000004 (limitação de ponto flutuante)

// ===== for: quando você sabe quantas voltas =====
for (let i = 0; i < 5; i++) {
    console.log('for, volta', i);
}

// ===== while: repete enquanto a condição for verdadeira =====
let contador = 3;
while (contador > 0) {
    console.log('while, contador', contador);
    contador--; // sem isso, o laço seria infinito!
}

// ===== for...of: percorre os VALORES de uma lista =====
const frutas = ['maçã', 'banana', 'uva'];
for (const fruta of frutas) {
    console.log('for...of:', fruta);
}
