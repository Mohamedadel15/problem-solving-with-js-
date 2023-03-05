// Write a program to read in three nonnegative integers from the keyboard. Display the integers in increasing order.
 let temp;
function number(num1,num2,num3){
    
     if(num1>num2){
        temp=num1;
        num1=num2;
        num2=temp;
        //  temp = 9 , num1= 4 , num2 = 9 
     }
     if(num1>num3){
        temp=num1;
        num1=num3;
        num3= temp;
// temp = 4 ,num1=2,num3=4 
     }
     if(num2>num3){
        temp=num2;
        num2=num3;
        num3=temp;
// temp = 9 ,num1=2,num2=4 , num3 = 9
     }
console.log(`${num1}  ${num2}  ${num3}`);

}
number(3,3,0);
console.log(temp);
function numbertwo(num1,num2,num3){
    if(num1<num2){
        temp=num1;
        num1=num2;
        num2=temp;
    }
     if(num1<num3){
        temp=num1;
        num1=num3;
        num3=temp;
    }
     if(num2<num3){
        temp=num2;
        num2=num3;
        num3=temp;
    }
    return ` ${num1} ${num2} ${num3}`
}
console.log(numbertwo(6,3,9));
