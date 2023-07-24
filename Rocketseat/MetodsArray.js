// Metodos de array
// mais importantes: map, filter, every, some, find, findIndex, reduce

const array = [1, 2, 3, 4, 5]
/*
for (const i of array){ // diferença de in e of é que o in retorna posição 0, 1, 2, 3, 4; e of retorna o valor da posição, no caso 1, 2, 3, 4, 5
    document.body.innerText += i;
}
*/
array.forEach(item => { // ARROW FUNCTION, ESTUDAR SOBRE O ASSUNTO
    document.body.innerText += item;
})

var novoArray = array.map(item => { // com o map ele faz a mesma coisa, mas eu consigo usar o return para salvar valores em variaveis de fora da ARROW FUNCTION
    return item *2;
}) 
// o map serve para salvar o valor de um array original para outro array com valores transformados

const filterArray = array.filter(item => item % 2 == 0) // retorno apenas a parte filtrada da informação
const filterArray2 = array.filter(item => item % 2 == 0).map(item => item * 10) // posso combinar com o map e receber a informação filtrada e transformada já

//every retorna um valor boleano, se todos o itens satisfazem uma condição
const everyArray = array.every(item => typeof item == 'number')// se todos os itens forem numner ele recebe TRUE

//some é como every mas verifica se pelo meno 1 item satisfaz a condição
const someArray = array.some(item => typeof item != 'number')// nesse caso retorna FALSE, pois todos são number

//find retorna o 1 item que satisfaça minha condição
const par = array.find(item => item % 2 == 0)// vai me retornar o 1 item PAR, nesse caso o 2

//findIndex retorna o indice do 1 item encontrado
const findIndex = array.findIndex(item => item % 2 != 0)//vai me retornar 0, pois o 1° valor IMPAR está na posição 0 

//reduce reduz o obj a algo novo, caso preciso estudar melhor também