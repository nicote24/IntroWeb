function btnCalculer_onclick()
{ 
 	var PoidsLivre,Kg;
 	PoidsLivre=parseFloat(document.getElementById("txtPoidsLivre").value);
 	Kg=PoidsLivre/2.2;
 	console.log("le poid en kg est de "+Kg);

}