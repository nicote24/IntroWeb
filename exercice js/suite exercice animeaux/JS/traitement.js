function btnCalculer_onclick()
{

    var Veterinaire,NbrJour,Total,Animaux,Service,Toilettage,Rabais,tauxHoraire,Heure;

    Veterinaire=document.getElementById("lstVeterinaire").value;
    NbrJour=parseFloat(document.getElementById("txtNbreJours").value);
    Heure=parseFloat(document.getElementById("txtHeure").value);


    if(document.getElementById("chkServ").checked==true)
    {
        Service=5;
        Toilettage="avec";
    }
    else{
        Service=0;
        Toilettage="sans";
    }

    if(document.getElementById("radChien").checked==true)
    {
        Animaux="chien";
        Total=18.50;
    }
    else{
        Animaux="chat";
        Total=16.95;
    }
    if(NbrJour<30)
    {
        Rabais=0.85;
    }
    else if(NbrJour<=10)
    {
        Rabais=0.90;
    }
    else if(NbrJour<=5)
    {
        Rabais=0.95;
    }
    else{
        Rabais=1;
    }
    switch(Veterinaire)
    {
        case "Audrey Bouchard": tauxHoraire=25*Heure;
            break;
        case "Stéphane Tremblay": tauxHoraire=35*Heure;
            break;
        case "Maxime Simard": tauxHoraire=40*Heure;
            break;
        case "Mélissa Caron": tauxHoraire=45*Heure;
            break;
    }

    Total=(((Total*NbrJour)+Service)*Rabais*1.14975);
    console.log("Vétérinaire responsable est: "+Veterinaire+" avec un salaire"+tauxHoraire+"$ pour "+Heure+" heures. Le montant pour la garde de votre "+Animaux+" est de "+Total.toFixed(2)+" pour "+NbrJour+" jours "+Toilettage+" service de toillettage.");
    document.getElementById("lblMessage").innerHTML="Vétérinaire responsable est: "+Veterinaire+" avec un salaire de "+tauxHoraire+"$ pour "+Heure+" heures. Le montant pour la garde de votre "+Animaux+" est de "+Total.toFixed(2)+" pour "+NbrJour+" jours "+Toilettage+" service de toillettage.";
}
function btnAfficher_onclick()
{
    document.getElementById("img1").src="img/chien beau.png";
}
function btnAfficher2_onclick()
{
    document.getElementById("img2").src="img/chat.jpg";
}
