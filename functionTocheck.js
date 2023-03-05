//  name print hello defult 
// age ,rate hour , skills {if user want to show this skills }
// name ,age ,rate ,show ,...skills
function showInfo(name,age="UNknown",rate=0,show='yes',...skills){
    if(name===undefined){
        return  console.log(`please enter ur name`);
    }else{
        console.log(` HELLO  :  ${name}`);
        console.log(` ${name}  ur age is  :  ${age}`);
        console.log(` ur rate  =   ${rate}$`);
        if(show==='yes'){
            if(skills.length>0){
                console.log(`${name} WOW ur skills is [${skills.join(' | | ')}]`);
            }else{
                console.log(`${name} OOPS NOT have any skills `);
            }
            
        }else{
            console.log(`${name} WANT to hidden ur skills`);
        }
    }

}
showInfo('mido' , 23,100,'','hyml','python','css','js');