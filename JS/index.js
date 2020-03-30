var num1;
var num2;
var result;
var request = ""; 


request = prompt("ingrese tipo de operación");


num1 = parseInt(prompt("Ingrese número uno: "));
num2 = parseInt(prompt("Ingrese número dos: "));



if(request.toUpperCase() == "SUMA"){
result = num1 + num2;

document.write(
"<h1>" + result + "</h1>"
);

}else if (request.toUpperCase() == "RESTA"){
result = num1 - num2;

document.write(
"<h1>" + request.toUpperCase() + ": " +  result + "</h1>"
);

}else{
alert("Solo se puede sumar y restar");

document.write(
    "<h1>" + "Error" + "</h1>"
    );

}


