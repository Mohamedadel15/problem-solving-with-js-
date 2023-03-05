// usingg map fuinction
// swap cases
let sawpcasing='eLzORa';
let swaplitter = sawpcasing.split("").map(function(element){
    return element==element.toUpperCase()? element.toLowerCase():element.toUpperCase();
}).join("");
console.log(swaplitter);
//  invertede number 
let invertNum=[1,-10,100,-2,-3,30],
    newInverNum=invertNum.map(function(element){
        return element*=-1;
    } );
console.log(newInverNum);
// irgone number value any number in string cut it 
// with regular anoungnment function
let igronNum='elAm88tr00',
    newIgronNum=igronNum.split('').map(function(element){
        return Number.isInteger(+element)? element="":element;
    }).join('');
console.log(newIgronNum);
//  using the last exerxise with arrow function
let igronNum1='elAm88tr00',
    newIgronNum1=igronNum.split('').map((element)=>
    (Number.isInteger(+element)? element="":element)).join('');
    console.log(newIgronNum1);