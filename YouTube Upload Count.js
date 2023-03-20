/* 
You are given an array of dates in the format Dec 11 and a monthin the format Dec as
arguments. Each date represents a video that was uploaded on that day. Return the number
of uploads for a given month.
Examples
uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept") ➞ 2

uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct") ➞ 1
*/

function uploadCount(month,...video){
    let regrex = new RegExp(month,"gi")
    let finalResalt = video.join("").match(regrex).length
    return finalResalt
}
console.log(uploadCount("sept" ,["Sept 22", "Sept 21", "Oct 15","Sept","Sept 2"] ))
console.log(uploadCount( "Oct",["Sept 22", "Sept 21", "Oct 15"]))

//  other answer  for this problem 

function uploadCount1(dates,day){
    let numberOFMonthly =0;
    for(let days of dates){
        // console.log(days)
        let allDays = (days.split(" ")).at(0)
        if(allDays === day){
            numberOFMonthly+=1
        }
    }
    return numberOFMonthly

}

console.log(uploadCount1(["Sept 22", "Sept 21", "Oct 15","Sept","Sept 2"],"Sept"))
console.log(uploadCount1( ["Sept 22", "Sept 21", "Oct 15"],"Oct"))
