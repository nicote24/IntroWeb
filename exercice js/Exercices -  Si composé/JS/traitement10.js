function btnCalculer_onclick()
{ 
 	var Age,Categorie;

    Age=parseFloat(document.getElementById("txtAge").value);

    if(Age>=6 && Age<=8)
    {
 	    Categorie="poussin";
    }
    else if(Age>=9 && Age<=10)
    {
        Categorie="Pupille";
    }
    else if(Age>=11 && Age<=12)
    {
        Categorie="Minime";
    }
    else {
 	    Categorie="Cadet";
    }
    console.log("Votre catégorie est :"+Categorie);
 	document.getElementById("lblMessage").innerHTML="votre catégorie est: "+Categorie;

}
