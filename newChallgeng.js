// لديك حقل إدخال تقوم بكتابة عدد العناصر التي تريد إنشائها
// لديك حقل آخر يحتوي على نوع العنصر سواء كان Div أو Section
// لديك حقل إدخال لكتابة الكلمة التي ستظهر داخل العنصر
// لديك زر لبدا عملية الإنشاء
// عند الضغط على إنشاء العناصر تأكد أن اي عناصر قديمة تم إنشاءها سوف يتم إزالتها أولا
// يمكنك عمل تنسيقات ال CSS بال JavaScript في حالة كنت تريد التمرين على التنسيق بال JavaScript
// يمكنك عمل التنسيق بشكل طبيعي بال CSS بدون أي مشكلة
// تأكد أن ال Form لا تقوم بإرسال البيانات حتى لا يتم عمل Refresh للصفحة
// العنصر يحتوي على ID و Class وال ID يزداد رقم مع كل عنصر شاهد المثال المطلوب لتف
let forms=document.forms[0];
let div =document.getElementById("results");
forms.onsubmit=function(e){
    e.preventDefault();
    if(div.innerHTML===""){
for(let i =0 ;i<forms[0].value;i++){
        let newmdiv=document.createElement("div")
        newmdiv.className="box";
        newmdiv.title="Element";
        newmdiv.id=`id-${i+1}`
        newmdiv.textContent=forms[1].value;
        div.appendChild(newmdiv);
    }
    }else{
        div.innerHTML="";
    }    
};
//  html code
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         * {
//             padding: 0;
//             margin: 0;
//         }
//     </style>
// </head>
// <body> 
//     <form action="#" id="forms">
//         <input type="number" placeholder="the number" id="num"><br><br>
//         <input type="text" name="text" id="text" placeholder="Elements Text"><br><br>
//         <select  id="select" >
//             <option value="div" >div</option>
//             <option value="section" >section</option>
//         </select><br><br>
//         <input type="submit" name="#" id="submit" value="create">
//     </form><br><br><br><br>
//     <div id="results"></div>






// <script src="main.js"></script>
// </body> 
// </html>