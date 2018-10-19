function btnCalculer_onclick()
{
    var Revenus,Nourriture,Loyer,Depalcement,Reste;

    Revenus=parseFloat(document.getElementById("txtRevenus").value);
    Loyer=parseFloat(document.getElementById("txtLoyer").value);
    Nourriture=parseFloat(document.getElementById("txtNourriture").value);
   Depalcement=parseFloat(document.getElementById("txtDeplacement").value);
    Reste=(Revenus-Loyer-Nourriture-Depalcement)/4.33333333;
    console.log("il vous restera "+Reste.toFixed(2)+" dollars par mois");
}