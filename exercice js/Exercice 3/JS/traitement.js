function btnCalculer_onclick()
{
    var ArgentCAN,TauxChangeEuro,Euro;
    ArgentCAN=parseFloat(document.getElementById("txtArgentCAN").value);
    TauxChangeEuro=parseFloat(document.getElementById("TauxChangeEuro").value);
    Euro=ArgentCAN*TauxChangeEuro;
    console.log("le montant seras de "+Euro+" Euros ");

}