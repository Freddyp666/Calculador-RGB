function cambiarRGB(){
    let colorRamdom=`rgb($(Math.floor(Math.random()*256)), $(Math.floor(Math.random()*256)), $(Math.floor(Math.random()*256)))`;
    document.body.style.backgroundColor=colorRamdom;
}

function cambiarTema(){
    let body=document.body;
    let calc=document.querySelector('.calculadora');
    if(body.style.backgroundColor=='white'){
        body.style.backgroundColor='black';
        calc.style.backgroundColor='black';
        calc.style.color='white';

    }else{
        body.style.backgroundColor='white';
        calc.style.backgroundColor='white';
        calc.style.color='black';
    }

}