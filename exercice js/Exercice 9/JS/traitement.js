function btnCalculer_onclick()
{
    var NbrEtudiant,NbrEnfant,NombreAgeOr,NbrAdulte,NbrBiletTotal,Total;

    NbrEtudiant=parseFloat(document.getElementById("txtNbrEtudiant").value);
    NombreAgeOr=parseFloat(document.getElementById("txtNombreAgeOr").value);
    NbrAdulte=parseFloat(document.getElementById("txtNbrAdulte").value);
    Total=(NombreAgeOr*15)+(NbrAdulte*20)+(NbrEtudiant*12);
    NbrBiletTotal= NombreAgeOr+NbrEtudiant+NbrAdulte;
    if(NbrBiletTotal>5)
    {
        Total=Total*0.90;
    }
    console.log("le total sera de "+Total.toFixed(2)+" dollars");
}