function btnCalculer_onclick()
{ 
 	var Nbr1,Nbr2,Signe;

    Nbr1=parseFloat(document.getElementById("txtNbre1").value);
    Nbr2=parseFloat(document.getElementById("txtNbre2").value);

 	if(Nbr1<=0 && Nbr2<=0 || Nbr1>=0 && Nbr2>=0)
 	{
 	    Signe="Positif";
    }
    else{
 	    Signe= "Négatif"
    }
    console.log("le signe seras :"+Signe);
    document.getElementById("lblMessage").innerHTML="le signe est: "+Signe;
}