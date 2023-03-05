let num1=[2,4,3],
    num2=[5,5,4],
    num3=[];
num1.reverse(),num2.reverse();
// num3[0]=num1[0]+num2[0];
// num3[1]=num1[1]+num2[1];
// num3[2]=num1[2]+num2[2];
console.log(num3);
for(let i=0 ; i<num1.length;i++){
    num3[i]=num1[i]+num2[i];
    if(num3[i]>9){
        num3[i]=0;
    }   
}
console.log(num3);