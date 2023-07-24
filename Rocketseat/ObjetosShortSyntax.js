//Short Syntax

const name = 'Robson';
const age = 28;

const user = { //Forma comum
    name: name,
    age: age,
};


const user2 = { //Short Syntax
    name,
    age,
};



document.body.innerText = JSON.stringify(user)