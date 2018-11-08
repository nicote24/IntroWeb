var nbrJoueur=0,i,moyenne=0, PtsMeilleur=0, NomMeilleur;
var TabJoueur = newArray(nbrJoueur);
var TabPoints = newArray(nbrJoueur);
function saisirInformation()
{
    Nom=document.getElementById("txtNom").value;
    points=parseFloat(document.getElementById("txtPoints").value);
}
function btnAjouter_onclick()
{
    nbrJoueur+=1;
    console.log("le nombre de joueur est maintenant de "+nbrJoueur);
}
function btnTrouverMoy_onclick()
{
    for(i=0;i<TabJoueur.length;i++)
    {
        moyenne+=points;
    }
    moyenne=moyenne/TabJoueur.length;
    console.log("la moyenne est de "+moyenne);
}
function btnTrouverMeilleur_onclick()
{
    for(i=0;i<TabJoueur.length;i++)
    {
       if(PtsMeilleur<=TabPoints[i])
       {
           PtsMeilleureilleur=TabPoints[i];
           NomMeilleur=TabPoints[i];
       }
    }
    console.log("le nom du meilleur joueur est :"+NomMeilleur+ "pour un total de "+PtsMeilleur+" points");
}
function