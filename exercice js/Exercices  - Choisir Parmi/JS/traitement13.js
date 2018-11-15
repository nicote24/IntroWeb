function btnCalculer_onclick()
{
    var Chiffre, Semaine;

    Chiffre = parseFloat(document.getElementById("txtNumSem").value);

    switch(Chiffre)
    {
        case 1: Semaine="Lundi";
            break;
        case 2: Semaine="Mardi";
            break;
        case 3: Semaine="Mercredi";
            break;
        case 4: Semaine="Jeudi";
            break;
        case 5: Semaine="Vendredi";
            break;
        case 6: Semaine="Samedi";
            break;
        case 7: Semaine="Dimanche";
            break;
        default: Semaine="Entrez un autre chiffre ce jour n'existe pas. (Un chiffre entre 1 et 7)";
        break;
    }
    console.log("Le jour de la semaine est " + Semaine);
    document.getElementById("lblMessage").innerHTML="Le jour de la semaine est "+Semaine;
}