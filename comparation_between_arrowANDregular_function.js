// answer with regular function
let name1= function(...name) {
    return `string [ ${name.join(' ] , [ ') } ] => done!`;
};
console.log(name1('adel','ibrahim','mido','ali','pop', 'filo'));
// answer with arow function
let name2 = (...name)=>`string [ ${name.join(' ] , [ ') } ] => done!`;
console.log(name2('adel','ibrahim','mido','ali','pop', 'filo'));
// aroww function
let myNumbers =[20,50,10,60];
let cla = (num1,num2,...num23)=> {
    let num3;
    num3=num1+num2+num23[0];
    return num3;
};
console.log(` the result = ${cla(10,myNumbers[0],myNumbers[1])}`);
// regular functio 
function col(num1,num2,...num23){
    let  num3;
    num3=num1+num2+num23[0];
    console.log(`the result = ${num3}`);
}
col(10,myNumbers[0],myNumbers[1]);