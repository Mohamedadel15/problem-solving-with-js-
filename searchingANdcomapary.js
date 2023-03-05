let admins=['ahmed' , 'osama','sayed' , 'stop' , 'samera'],
    employee=['amged','sameh','ameer','omar','othman','amany','samila','arwa'],
    count;
if(admins.includes('stop')===true){
    document.write(`<h2> we have ${admins.indexOf('stop')} admins</h2><hr>`);
    count=admins.indexOf('stop');
    for( let i=0;i<count;i++){     
        document.write(`<div>`);
        document.write(`<h3>the admin for team ${i+1} is ${admins[i]}</h4>`);
        document.write(`<h4><strong> Team member : </strong></h4>`);
        for(let j=0 ;j<employee.length;j++ ){
            if(admins[i].startsWith(employee[j].charAt(0))===true){
                document.write(`<p> ${employee[j]}  </p>`);
            }
                }
        document.write(`</div>`)
    }

} else{
    console.log(`we have ${admins.length} admins`);
}
