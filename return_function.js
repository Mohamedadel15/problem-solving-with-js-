// please print this input with all higher order function  elzero wep school 
let mystring="1,2,3,ee,l,z,e,r,o,_,w,e,p,_,s,c,h,o,o,l,2,0,@";
let nwew=mystring[mystring.length-true];
let solution=mystring.split("").map(function(el){
    return el.replace('_',' ');
}).filter(function(el){
    return el !==nwew && el!==','&&isNaN(parseInt(el));
}).reduce(function(acc,next){
    if(acc===next){
        return acc;
    }else{
        return acc + next;
    }
});
console.log(solution);