function verifica(){

if (document.getElementById("texto2").style.display == "none")
{

   document.getElementById("texto2").style.display = "inline";

   document.getElementById("edit2").style.display = "inline";
}else
	
if (document.getElementById("imc").checked == true){
   document.getElementById("texto1").innerHTML = "Peso:";
   document.getElementById("texto2").innerHTML = "Altura:";
}else

if (document.getElementById("retangulo").checked == true){
   document.getElementById("texto1").innerHTML = "Base:";
   document.getElementById("texto2").innerHTML = "Altura:";
}else

if (document.getElementById("circulo").checked == true){
   document.getElementById("texto1").innerHTML = "Raio:";
 
   document.getElementById("texto2").style.display = "none";
   document.getElementById("edit2").value = "0";
   document.getElementById("edit2").style.display = "none";
}
}
function calcular(){

	// captura dos campos edit1 e edit2 do form1
	var valor1 = parseInt(document.getElementById("edit1").value);
	var valor2 =parseFloat(document.getElementById("edit2").value);
	var resultado;

		if(document.getElementById("imc").checked==false && document.getElementById("retangulo").checked==false &&
			document.getElementById("circulo").checked==false )
		{
			alert("Selecione uma operação");
		}else

		if(document.getElementById("edit1").value="" || document.getElementById("edit2").value==""){
			alert("Complete todos os campos");
		}else
		{

		// verifica se radiobutton imc foi selecionado e calcula o imc
		if (document.getElementById("imc").checked == true)
		{
			resultado = (valor1/(valor2*valor2)).toFixed(2);
			alert("IMC calculado você está "+resultado+" kg acima do peso");

		}else

	  if (document.getElementById("retangulo").checked == true)
	  {
		resultado = valor1 * valor2;
		alert("A área do retangulo infomado é "+resultado+" Cm²");
	
	}else

	if (document.getElementById("circulo").checked == true)
	{
		var pi = 3.14;
		resultado = pi * (valor1*valor1);
		alert("O área do circulo é igual a "+resultado+ " Cm²");
	}    } 

	return resultado;

}