function btnCalculer_onclick()
{
    var Un,Dix,Cinq,VingtCinq,Total;

    Un=parseFloat(document.getElementById("txtUn").value);
    Cinq=parseFloat(document.getElementById("txtCinq").value);
    Dix=parseFloat(document.getElementById("txtDix").value);
    VingtCinq=parseFloat(document.getElementById("txtVingtCinq").value);
    Total=(Un*(1/100))+(Cinq*(5/100))+(Dix*(10/100))+(VingtCinq*(1/4));
    console.log("le total sera de "+Total+" dollars");

}