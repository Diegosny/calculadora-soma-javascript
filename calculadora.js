function calcula(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var resultado = parseInt(num1)+parseInt(num2);
    var calc=document.getElementById("resultado");
    calc.innerHTML= resultado;

    calc.style.display='inline';

    
    
}