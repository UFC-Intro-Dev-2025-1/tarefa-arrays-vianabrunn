# Funções

<!-- toc -->

- [Arrays](#arrays)
  - [O que são Arrays?](#o-que-são-arrays)
    - [Inicializando um array vazio](#inicializando-um-array-vazio)
  - [arrayLength](#arraylength)
  - [Accessando elementos de um array](#accessando-elementos-de-um-array)
  - [Métodos de Array - Mutáveis (alteram o array original)](#métodos-de-array---mutáveis-alteram-o-array-original)
    - [Adicionar um item ao final do Array - push](#adicionar-um-item-ao-final-do-array---push)
    - [Remover um item do final do Array - pop](#remover-um-item-do-final-do-array---pop)
    - [Remover do início do Array - shift](#remover-do-início-do-array---shift)
    - [Adicionar ao início do Array - unshift](#adicionar-ao-início-do-array---unshift)
    - [Remover um item pela posição do índice - splice](#remover-um-item-pela-posição-do-índice---splice)
    - [Ordenar elementos - sort](#ordenar-elementos---sort)
  - [Métodos de Array - Imutáveis (NÃO alteram o array original)](#métodos-de-array---imutáveis-não-alteram-o-array-original)
    - [Copiar um Array - slice](#copiar-um-array---slice)
    - [Iterar um Array - foreach](#iterar-um-array---foreach)
    - [Procurar o índice de um item na Array - indexOf](#procurar-o-índice-de-um-item-na-array---indexof)
    - [Mesclar dois arrays - concat](#mesclar-dois-arrays---concat)
    - [Buscar um elemento - find](#buscar-um-elemento---find)
    - [Horizontaliza um array - flat](#horizontaliza-um-array---flat)
    - [Faz uma ação em cada elemento do Array pra gerar um novo array - map](#faz-uma-ação-em-cada-elemento-do-array-pra-gerar-um-novo-array---map)
    - [Faz um cálculo em cada elemento do array e retorna um valor - reduce](#faz-um-cálculo-em-cada-elemento-do-array-e-retorna-um-valor---reduce)
    - [Faz uma validação em cada elemento do array e retorna true ou false - some](#faz-uma-validação-em-cada-elemento-do-array-e-retorna-true-ou-false---some)
    - [Filtra elementos do array que estão em uma condição - filter](#filtra-elementos-do-array-que-estão-em-uma-condição---filter)
- [Referências](#referências)


<!-- toc -->

## Arrays

### O que são Arrays?

Arrays são estruturas de dados que armazenam uma coleção de elementos, geralmente do mesmo tipo, em uma única variável. Eles permitem acessar os elementos por meio de índices, que começam em 0. Veja os exemplos abaixo:

```javascript
// JavaScript
// Criando um array de frutas
const frutas = ['Maçã', 'Banana', 'Laranja'];

// Acessando elementos do array
console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana

// Adicionando um elemento ao array
frutas.push('Uva');
console.log(frutas); // ['Maçã', 'Banana', 'Laranja', 'Uva']

// Iterando sobre os elementos do array
frutas.forEach((fruta) => {
    console.log(fruta);
});
```

Veja o mesmo código em TypeScript:

```typescript
// Criando um array de frutas
const frutas: string[] = ['Maçã', 'Banana', 'Laranja'];

// Acessando elementos do array
console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana

// Adicionando um elemento ao array
frutas.push('Uva');
console.log(frutas); // ['Maçã', 'Banana', 'Laranja', 'Uva']

// Iterando sobre os elementos do array
frutas.forEach((fruta: string) => {
    console.log(fruta);
});
```

#### Inicializando um array vazio

```typescript
// Inicializando um array vazio com tipo explícito
const vazio1: string[] = [];
// ou
const vazio1: string[] = new Array();
```

### arrayLength

A propriedade `length` de um array retorna o número de elementos presentes no array. É útil para determinar o tamanho do array ou iterar sobre seus elementos.

```typescript
const frutas: string[] = ['Maçã', 'Banana', 'Laranja'];

// Obtendo o tamanho do array
console.log(frutas.length); // 3

// Iterando sobre os elementos usando o tamanho do array
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

### Accessando elementos de um array

Arrays JavaScript começam com índice zero: o primeiro elemento de um array está na posição 0 e o último elemento está na posição equivalente ao valor da propriedade length (tamanho) menos 1.

```typescript
let arr: string[] = ['este é o primeiro elemento', 'este é o segundo elemento'];
console.log(arr[0]); // exibe 'este é o primeiro elemento'
console.log(arr[1]); // exibe 'este é o segundo elemento'
console.log(arr[arr.length - 1]); // exibe o último elemento
```

Não podemos acessar os elementos como propriedade (como acontece nos objetos):

```typescript
let anos = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
console.log(anos.0); // um erro de sintaxe
console.log(anos[0]); // funciona corretamente
```

### Métodos de Array - Mutáveis (alteram o array original)

Considere o array abaixo para os exemplos seguintes:

```typescript
let frutas: string[] = ['Maçã', 'Banana'];
```

#### Adicionar um item ao final do Array - `push`

```typescript
let adicionar = frutas.push('Laranja');
// ['Maçã', 'Banana', 'Laranja']
```

#### Remover um item do final do Array - `pop`

```typescript
let ultimo = frutas.pop(); // remove Laranja (do final)
// ['Maçã', 'Banana'];
```

#### Remover do início do Array - `shift`

Usado para remover do início do Array.

```typescript
let removido = frutas.shift(); // remove Maçã do início
// ['Banana'];
```

#### Adicionar ao início do Array - `unshift`

```typescript
let adicionar = frutas.unshift('Morango'); // adiciona ao início
// ['Morango', 'Banana'];
```

#### Remover um item pela posição do índice - `splice`

O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos. O segundo parâmetro indica a quantidade de itens removidos. Se o segundo parâmetro for 0, ele executa uma adição de elemento e você deve especificar pelo menos um novo elemento. Veja os exemplos abaixo.

```typescript
const meses = ["Janeiro", "Março", "Abril", "Junho"];

// ---- Removendo elementos 
let removidos = meses.splice(1,2); // remove Janeiro
console.log("Resultado: ", meses); // ["Março", "Abril", "Junho"]
console.log("Meses removidos:", removidos); // Janeiro

// ---- Adicionando elementos
meses.splice(1, 0, "Fevereiro"); // Adicionar Fevereiro no índice 1
console.log(meses); // ["Fevereiro", "Março", "Abril", "Junho"]

// ---- Substituindo elementos
meses.splice(3, 1, "Maio"); // Substitui 1 elemento no índice 4
console.log(meses); // ["Fevereiro", "Março", "Abril", "Maio"]
```
#### Ordenar elementos - `sort`

O método `sort()` ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a pontuação de [código unicode](https://www.ime.usp.br/~pf/algoritmos/apend/unicode.html).

```typescript
let fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

let scores = [1, 2, 21, 10];
scores.sort(); // [1, 10, 2, 21]
// Observe que 10 vem antes do 2,
// porque '10' vem antes de '2' em ponto de código Unicode.

let things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// Em Unicode, números veem antes de letras maiúsculas,
// as quais veem antes das minúsculas.
```


### Métodos de Array - Imutáveis (NÃO alteram o array original)


#### Copiar um Array - `slice`
1º parâmetro = 1º elemento do resultado
2º parâmetro = limita o resultado, mas não aparece nele. Se não for definido considera até o final do array.

```typescript
const frutas = ["uva", "maçã", "banana", "caqui", "melancia"];

console.log(frutas.slice(2)); // [ 'banana', 'caqui', 'melancia' ]

console.log(frutas.slice(2, 4)); // [ 'banana', 'caqui' ]

console.log(frutas.slice(1, 5)); // [ 'maçã', 'banana', 'caqui', 'melancia' ]

console.log(frutas.slice(-2)); // [ 'caqui', 'melancia' ]

console.log(frutas) // frutas não foi alterado! 
```

#### Iterar um Array - `foreach`

```typescript
frutas.forEach(function (item, indice, array) {
    console.log(item, indice);
});
// Maçã 0
// Banana 1
```

Também é possível iterar com um for ... on:

```typescript
let numeros = [10, 20, 30];

for (let numero of numeros) {
  console.log(numero);
}
// 10
// 20
// 30
```


#### Procurar o índice de um item na Array - `indexOf`

```typescript
let indice = frutas.indexOf('Banana');
```



#### Mesclar dois arrays - `concat`

```typescript
const array1: string[] = ['a', 'b', 'c'];
const array2: string[] = ['d', 'e', 'f'];
const array3: string[] = array1.concat(array2);
console.log(array3); // ["a", "b", "c", "d", "e", "f"]

const array4: string[] = [...array1, ...array2];
console.log(array4); // ["a", "b", "c", "d", "e", "f"] - mesmo resultado usando o operador spread (espalhamento) ...
```

#### Buscar um elemento - `find`
Restorna o primeiro elemento nessa condição.

```typescript
const array1: number[] = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found); // 12
```

#### Horizontaliza um array - `flat`

```typescript
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]
```

#### Faz uma ação em cada elemento do Array pra gerar um novo array - `map`

O método map usa uma função como parâmetro, em que essa função pode ter o elemento e o index do elemento. Essa função é executada em cada elemento e a saída dela será um novo array destes novos elementos.

```typescript
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

Outros exemplos:

```typescript
let numbers = [1, 4, 9];
let roots = numbers.map(Math.sqrt);
// roots é [1, 2, 3], numbers ainda é [1, 4, 9]
```

```typescript
let numbers = [1, 4, 9];
let doubles = numbers.map(function (num) {
    return num * 2;
});
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]
```

Se não ficou tão claro, não tem problema. `map` e `reduce` são métodos mais avançados. Com o tempo, vamos nos habituando ao seu uso.

#### Faz um cálculo em cada elemento do array e retorna um valor - `reduce`

O método reduce, assim como a map, usa uma função como parâmetro, em que essa função pode ter o acumulador, o elemento, o índice do elemento e o array original `function(acumulador, valorAtual, indice, array)`. Essa função é executada em cada elemento. A saída da função reduce é o acumulador, que vai passando de execução em execução. Veja os exemplos abaixo:

```typescript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);

console.log(sumWithInitial);
// Expected output: 10
```

**Explicação do funcionamento do `reduce`**

| acumulador       | valorAtual | index | array           | valor de retorno |
| ---------------- | ---------- | ----- | --------------- | ---------------- |
| primeira chamada | 0          | 1     | [0, 1, 2, 3, 4] | 1                |
| segunda chamada  | 1          | 2     | [0, 1, 2, 3, 4] | 3                |
| terceira chamada | 3          | 3     | [0, 1, 2, 3, 4] | 6                |
| quarta chamada   | 6          | 4     | [0, 1, 2, 3, 4] | 10               |

O retorno da última chamada 20,é retornado como resultado da função reduce().

**Exemplo com ArrowFunction**

```typescript
const total: number = [0, 1, 2, 3].reduce(
    (acumulador: number, valorAtual: number) => acumulador + valorAtual,
    0
);
```

#### Faz uma validação em cada elemento do array e retorna true ou false - `some`

O método some, assim como o reduce e o a map, usa uma função como parâmetro, em que essa função tem o elemento, o índice do elemento e o array original `function(element, index, array)`. Essa função é executada em cada elemento e deve retornar `true` ou `false`. A saída do `some` é `true` se qualquer um das validações for `true`. Veja os exemplos abaixo:

```typescript
function isBiggerThan10(element, index, array) {
    return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

#### Filtra elementos do array que estão em uma condição - `filter`

Se em vez de saber se aquela condição é satisfeita ou não você quiser quais elementos estão na condição, pode usar o `filter`.

```typescript
function isBiggerThan10(element, index, array) {
    return element > 10;
}
[2, 5, 8, 1, 4].filter(isBiggerThan10); // []
[12, 5, 8, 1, 4].filter(isBiggerThan10); // [12]
```

## Referências

-   [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
-   [W3Schools - TypeScript Arrays](https://www.w3schools.com/typescript/typescript_arrays.php)
