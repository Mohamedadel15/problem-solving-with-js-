// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

// the first  way 

function switCh(Num){
        switch(Num){
            case 0 :return "Zero";
            case 1 :return 'one';
            case 2 :return 'two';
            case 3 :return 'three';
            case 4 :return 'four';
            case 5  :return 'five';
            case 6 :return 'six';
            case 7 :return 'seven';
            case 8 :return 'eight';
            case 9 :return 'nine';
            default:return 'unknown';
        }
    }
console.log(switCh(0))



// the second way 
const obj = {
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    0:"zero"
}
function main(num){
    return obj[num] || `undefined`
}
console.log(main(-1))

// the third way 

let checkNum = (num)=>{
    if(num == 0) return 'Zero'
    else if(num == 1) return 'One'
    else if(num == 2) return 'Two'
    else if(num == 3) return 'Three'
    else if(num == 4) return 'Four'
    else if(num == 5) return 'Five'
    else if(num == 6) return 'Six'
    else if(num == 7) return 'Seven'
    else if(num == 8) return 'Eight'
    else if(num == 9) return 'nine'
    else return `Error`
}

console.log(checkNum(-1))