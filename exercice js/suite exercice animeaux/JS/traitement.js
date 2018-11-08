var ChoixVeterinaire, Total, NbrJrs, CoutToilettage, service,rabais,Heure,tauxHoraire,animaux;

function btnCalculer_onclick(){
    saisirInforamtion();
    choixToilettage();
    choixAnimaux();
    saisirNbrJrs();
    choixVeterinaire();
    calculerVariables();
    afficherInformations();
}

function saisirInforamtion()
{
    ChoixVeterinaire = document.getElementById("lstVeterinaire").value;
    NbrJrs = parseFloat(document.getElementById("txtNbreJours").value);
    Heure = parseFloat(document.getElementById("txtHeure").value);
}
function choixToilettage()
{
    if (document.getElementById("chkServ").checked == true) {
        CoutToilettage = 5;
        service = "avec";
    }
    else {
        CoutToilettage = 0;
        service = "sans";
    }
}
function choixAnimaux()
{
    if (document.getElementById("radChien").checked == true) {
        Total = 18.50;
        animaux="chien";

    }
    else {
        Total = 16.95;
        animaux="chat";
    }
}
function saisirNbrJrs()
{
    if (1<=NbrJrs && NbrJrs<5)
    {
        rabais=1;
    }
    else if(5<=NbrJrs && NbrJrs<10)
    {
        rabais=0.95;
    }
    else if(10<=NbrJrs && NbrJrs<30)
    {
        rabais=0.90;
    }
    else if(30<=NbrJrs)
    {
        rabais=0.85;
    }
}
function choixVeterinaire()
{
    switch(ChoixVeterinaire)
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
}
function calculerVariables()
{
    Total=(((((Total*NbrJrs)+CoutToilettage)*rabais)*1.14975)+tauxHoraire);
}
function afficherInformations()
{
    console.log("Le total es de "+ Total.toFixed(2)+"$" +" pour un nombre d'heure est de "+Heure +" avec le vétérinaire "+ ChoixVeterinaire + " avec un salaire de "+tauxHoraire+" pour "+NbrJrs+" jours "+" et "+service+" toilettage "+" pour un "+animaux );
    document.getElementById("lblMessage").innerHTML="Le total es de "+ Total.toFixed(2)+" $ " +" pour un nombre d'heure de "+Heure +" avec le vétérinaire "+ ChoixVeterinaire + " avec un salaire de"+tauxHoraire+" pour "+NbrJrs+" jours "+" et "+service+" toilettage "+" pour un "+animaux+".";
}
function btnAfficher_onclick(){
    document.getElementById("img1").src= "img/chien beau.png";
}
function btnAfficher2_onclick(){
    document.getElementById("img2").src= "img/chat.jpg";
}

