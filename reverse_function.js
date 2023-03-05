function reverse(nom){
    let new_name="";
    for(let i=nom.length-1;i>=0;i--){
        new_name+=nom[i];
    }
    return new_name;
}
console.log(reverse("modo"))