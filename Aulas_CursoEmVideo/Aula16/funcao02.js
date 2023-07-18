function soma(n1=0, n2=0) { //Quando eu coloco valor pré definido em parametro ele sobrescreve quando chama função 
    return n1 + n2          //Caso não tenha parametro com valor ele fica o valor pré definido pra não dar erro 
}

console.log(soma(2, 5))