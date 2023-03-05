function random(...ra){
    let newIndex;
    ra.sort();
    for(let i=0 ; i<ra.length;i++){
        if(typeof ra[i]==='boolean'){
        newIndex=i; 
        break;
    }
    }
    ra[newIndex]===true?
    console.log(`HELLO ${ra[1]} , ur age is ${ra[0]} , you r available hire`):
    console.log(`HELLO ${ra[2]} , ur age is ${ra[0]} , you r not available hire`);
}
// input
random('mido',true,23);
random(true,23,'mido');
random('mido',false,23);
random(false,'mido',23);
random('mido',true,false);
/* 
outbut
HELLO mido , ur age is 23 , you r available hire
main.js:11 HELLO mido , ur age is 23 , you r available hire
main.js:12 HELLO mido , ur age is 23 , you r not available hire
main.js:12 HELLO mido , ur age is 23 , you r not available hire
main.js:12 HELLO true , ur age is false , you r not available hire
*/