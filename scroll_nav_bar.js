let el=document.getElementById("sreoll");
let hight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
addEventListener("scroll",function(){
    console.log(document.documentElement.scr)
    let scroled=this.document.documentElement.scrollTop
    el.style.width=`${scroled/hight*100}%`
})
