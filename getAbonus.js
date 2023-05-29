// // It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// // Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// // If bonus is true, the salary should be multiplied by 10. If bonus is false,
//  the fatcat did not make enough money and must receive only his stated salary.

function getAbonus(salary, bonus) {
    return     bonus == true? `${salary*10}e`  :  `${salary}e`;
}

console.log(getAbonus(50,true))  // if the bonus is true, the salary should be multiplied by 10
console.log(getAbonus(50,false))  // if the bonus is false, the salary should be the main salary 
