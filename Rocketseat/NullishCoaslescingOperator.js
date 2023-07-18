//Nullish Coalescing Operator

const idade = 0;

document.body.innerText = 'Sua idade é:' + (idade || 'Não informado!')

//(idade || 'Não informado!') = como 0 é valor false para o JS, vai mostrar não informado

const idade2 = 0;

document.body.innerText = 'Sua idade é:' + (idade2 ?? 'Não informado!')

//(idade ?? 'Não informado!') = agora vai mostrar 0, pois ?? reconhece 0 como number, ele vai mostrar não informado apenas a valores nulos como: null, undefined, NaN e valores assim
