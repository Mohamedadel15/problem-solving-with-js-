let nade=document.querySelector("button");
if(nade.hasAttribute("title")){
    if(nade.title===""){
        nade.removeAttribute("title");
    }else{
        nade.setAttribute("title","besm");
    }
}else{
    nade.setAttribute("title","nes");  
}
