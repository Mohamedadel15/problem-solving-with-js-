let str1="aefhilmnorsxAEFHILMNORSX",
    str2="aefhilmnorsxAEFHILMNORSX";
for(let i=0;i<str2.length;i++){
    for(let j=i;j<str1.length;j++){
        if(str2[i]===str1[j]){
            console.log(`the elemnts ${str2[i]} is  same ${str1[j]}`)
            break
        }else{
            console.log(`the elemnts ${str2[i]} is not same ${str1[j]}`)
            break
        }
    }
}