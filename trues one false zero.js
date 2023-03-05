let newArr = []; 
let num ="01510";
for(const i of num){
    if(i==="0"){
        newArr.push(false);
    }
    else if(i==="1"){
        newArr.push(true);

    }else{
        continue;
    }
}
console.log(newArr)