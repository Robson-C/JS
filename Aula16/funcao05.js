//Função Recursiva, ela chama ela mesma pra 
function fatorial(n) {
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}