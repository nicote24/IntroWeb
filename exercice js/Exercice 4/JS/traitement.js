function btnCalculer_onclick()
{
    var Distance,ConsommationVoiture,PrixLitre,Cout,Destination;

    Distance=parseFloat(document.getElementById("txtDistance").value);
    ConsommationVoiture=parseFloat(document.getElementById("txtConsommationVoiture").value);
    PrixLitre=parseFloat(document.getElementById("txtPrixLitre").value);
    Destination=(document.getElementById("txtDestination").value);
    Cout= Distance*(ConsommationVoiture/100)*PrixLitre;
    console.log("le cout seras de "+Cout.toFixed(2)+" Dollars, pour aller a "+Destination);
}