function newFunction(name, age, country) {
    var age = age || 28;
    var name = name || 'Rommel';
    var country = country || 'MX';
    console.log(name, age, country);
}

//ES6

function newFunction2(name = 'Rommel', age = 28, country = 'MX') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ramses', 29);


let hello = 'Hello';
let world = 'World';

let epicPhrase1 = hello +' '+world;
let epicPhrase2 = `${hello} ${world} !!!`;

console.log('Epic Phrase 1 '+epicPhrase1);
console.log('Epic Phrase 2 ' + epicPhrase2);