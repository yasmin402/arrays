// Exercícios Práticos - Arrays em JavaScript
// -------------------------------------------
// Objetivo: Praticar os métodos push, pop, shift, unshift, length e splice

// EXERCÍCIO 01 - Criando e exibindo um array
// Crie um array com três nomes e exiba o array e seu tamanho no console.
// Método sugerido: length
let nomes = ['Eliane', 'Ana', 'Maria'];
console.log(nomes);
console.log("O tamanho do Array nomes é: " + nomes.length);



// EXERCÍCIO 02 - Adicionando elementos ao final
// Adicione dois nomes ao final do array criado anteriormente.
// Método sugerido: push

// EXERCÍCIO 03 - Inserindo no início
// Adicione um nome no início do array.
// Método sugerido: unshift

// EXERCÍCIO 04 - Removendo o último
// Remova o último nome do array e exiba o nome removido e o array restante.
// Método sugerido: pop

// EXERCÍCIO 05 - Removendo o primeiro
// Remova o primeiro nome do array e exiba o nome removido e o array restante.
// Método sugerido: shift

// EXERCÍCIO 06 - Removendo e adicionando elementos
// Crie um array com cinco frutas. Remova duas frutas a partir da segunda posição e adicione duas novas frutas no lugar.
// Método sugerido: splice

// EXERCÍCIO 07 - Exibindo o tamanho do array
// Exiba o tamanho do array de frutas após a alteração.
// Método sugerido: length

// EXERCÍCIO 08 - Criando um histórico de páginas
// Crie um array chamado historico e simule acessos às páginas "home", "sobre" e "contato".
// Método sugerido: push

// EXERCÍCIO 09 - Removendo o último acesso do histórico
// Remova o último acesso do histórico e exiba "Saída da página: contato".
// Método sugerido: pop

// EXERCÍCIO 10 - Alterando elementos
// Crie um array de quatro cores e troque a terceira cor por "azul-marinho".
// Método sugerido: splice



// EXERCÍCIO 02 - Adicionando elementos ao final
// Adicione dois nomes ao final do array criado anteriormente.
nomes.push('Carlos', 'Pedro');
console.log('Após push:', nomes);

// EXERCÍCIO 03 - Inserindo no início
// Adicione um nome no início do array.
nomes.unshift('Fernanda');
console.log('Após unshift:', nomes);

// EXERCÍCIO 04 - Removendo o último
// Remova o último nome do array e exiba o nome removido e o array restante.
let removidoUltimo = nomes.pop();
console.log('Nome removido (pop):', removidoUltimo);
console.log('Array após pop:', nomes);

// EXERCÍCIO 05 - Removendo o primeiro
// Remova o primeiro nome do array e exiba o nome removido e o array restante.
let removidoPrimeiro = nomes.shift();
console.log('Nome removido (shift):', removidoPrimeiro);
console.log('Array após shift:', nomes);

// EXERCÍCIO 06 - Removendo e adicionando elementos
// Crie um array com cinco frutas. Remova duas frutas a partir da segunda posição e adicione duas novas frutas no lugar.
let frutas = ['maçã', 'banana', 'laranja', 'uva', 'abacaxi'];
// Remove duas frutas a partir da posição 1 (segunda posição)
frutas.splice(1, 2, 'morango', 'kiwi');
console.log('Frutas após splice:', frutas);

// EXERCÍCIO 07 - Exibindo o tamanho do array
// Exiba o tamanho do array de frutas após a alteração.
console.log('Tamanho do array de frutas:', frutas.length);

// EXERCÍCIO 08 - Criando um histórico de páginas
// Crie um array chamado historico e simule acessos às páginas "home", "sobre" e "contato".
let historico = [];
historico.push('home', 'sobre', 'contato');
console.log('Histórico de páginas:', historico);

// EXERCÍCIO 09 - Removendo o último acesso do histórico
// Remova o último acesso do histórico e exiba "Saída da página: contato".
let paginaSaida = historico.pop();
console.log('Saída da página:', paginaSaida);

// EXERCÍCIO 10 - Alterando elementos
// Crie um array de quatro cores e troque a terceira cor por "azul-marinho".
let cores = ['vermelho', 'verde', 'amarelo', 'preto'];
// Troca a terceira cor (índice 2)
cores.splice(2, 1, 'azul-marinho');
console.log('Cores após alteração:', cores);