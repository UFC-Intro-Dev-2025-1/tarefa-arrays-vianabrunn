// Tarefa: Treinando Arrays

// Seu colega de trabalho precisou sair urgente e pediu para você completar o código dele na entrega que ele precisa fazer hoje. Como um bom amigo, você concordou. Mas ele não passou muitas instruções. O código abaixo está incompleto. Encontre os locais que precisam de ajuste para cumprir com as demandas abaixo. Não altere as estruturas textuais.
// Utilize o comando: `npm test` para validar a resposta.

// Requisitos da entrega:
// 1. Criar um array de números. ✅
// 2. Criar uma função para exibir o array e seu tamanho. ❌
// 3. Adicionar elementos 60 e 70 ao array. ❌
// 4. Exibir o array usando a função mostrarArray. ❌
// 5. Remover o último elemento do array usando o método pop. ❌
// 6. Exibir o array usando a função mostrarArray. ❌
// 7. Mostrar o elemento excluído. ❌
// 8. Mostrar cada elemento do array em uma linha usando o método forEach. ❌
// 9. Criar um novo array com os valores dobrados usando o método map. ❌
// 10. Calcular a soma de todos os elementos do array usando o método reduce. ❌

const numeros: number[] = [10, 20, 30, 40, 50];

function mostrarArray(array: number[]): void {
    console.log('--------------------------------');
    console.log(`Tamanho: ${array.length}`);
    console.log(`Array:${array} `);
}
mostrarArray(numeros);
numeros.push(60, 70);
mostrarArray(numeros);

const elementoExcluido = numeros.pop();
mostrarArray(numeros);
console.log(`Elemento excluído: ${elementoExcluido}`);

numeros.forEach((elemento) => {
    console.log(elemento);
});


const dobrados = numeros.map((num) => num * 2);

mostrarArray(dobrados);

const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(`Soma dos elementos do array: ${soma}`);

// para rodar o código, use o comando:
// npm run build


//indexOF - achar o indice de um valor

/*
array.indexOf(valorProcurado, indiceInicial?)

valorProcurado: o item que você quer encontrar.

indiceInicial (opcional): a partir de qual posição do array começar a busca.*/

//const frutas = ["maçã", "banana", "laranja"];

//console.log(frutas.indexOf("banana")); // 1
//console.log(frutas.indexOf("uva"));    // -1

//const numeros = [10, 20, 30, 40];

//console.log(numeros.indexOf(30)); // 2

//nao funciona  bem com objetos

//const pessoas = [{ nome: "Ana" }, { nome: "João" }];

//console.log(pessoas.indexOf({ nome: "Ana" })); // -1 ❌

/*

Por que deu -1?
Porque { nome: "Ana" } que você passou no indexOf é um novo objeto, diferente daquele que está no array.

*/

//const obj1 = { nome: "Ana" };
//const obj2 = { nome: "Ana" };

//console.log(obj1 === obj2); // false (mesmo conteúdo, mas objetos diferentes)



//concat - unir arrays

//const a = [1, 2];
//const b = [3, 4];

//const resultado = a.concat(b);
//console.log(resultado); // [1, 2, 3, 4]

//const numeros = [1, 2];

//const novo = numeros.concat(3, 4, [5, 6]); // incrementa e desmembra a array
//console.log(novo); // [1, 2, 3, 4, 5, 6]

//const a = [1, 2];
//const b = [[3, 4]];

//console.log(a.concat(b)); // [1, 2, [3, 4]] 👈 o [3,4] vira um item só

