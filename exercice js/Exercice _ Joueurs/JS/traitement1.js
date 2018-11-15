var cptJoueur=0;
var TabJoueur = new Array(4);
var TabPoints = new Array(4);

function btnAjouter_onclick()
{

    Nom=document.getElementById("txtNom").value;
    points=parseFloat(document.getElementById("txtPoints").value);
    TabJoueur[cptJoueur]=Nom;
    TabPoints[cptJoueur]=points;
    cptJoueur++;
    ActiverOption();
    document.getElementById("lblNbreJoueur").innerHTML="Numéro du joueur "+(cptJoueur+1);
}
function ActiverOption()
{
    if(cptJoueur>3)
    {
        document.getElementById("btnTrouverMoy").disabled=false;
        document.getElementById("btnTrouverMeilleur").disabled=false;
        document.getElementById("btnTrouverPire").disabled=false;
        document.getElementById("btnAjouter").disabled=true;
        document.getElementById("btnRechercher").disabled=false;
    }

}

function btnTrouverMoy_onclick()
{
    var moyenne=calculerMoyenne();
    console.log("la moyenne est de "+moyenne);
    document.getElementById("lblReponse").innerHTML="la moyenne est de "+moyenne;
}
function calculerMoyenne()
{
    var i,moyenne=0;

    for(i=0;i<TabJoueur.length;i++)
    {
        moyenne+=TabPoints[i];
    }
    moyenne=(moyenne/TabJoueur.length);

    return moyenne;
}
function btnTrouverMeilleur_onclick()
{
  var meilleurJoeur=calculerMeilleur();
    document.getElementById("lblReponse").innerHTML="le meilleur joueur est  "+TabJoueur[meilleurJoeur]+" avec un pointage de "+TabPoints[meilleurJoeur];
}
function calculerMeilleur()
{

    var i,NomMeilleur, PtsMeilleur=0;
    for(i=0;i<TabJoueur.length;i++)
    {
        if(PtsMeilleur<=TabPoints[i])
        {
            NomMeilleur=i;
        }

    }
    return NomMeilleur;
}
function btnTrouverPire_onclick()
{
   var NomPire;
   NomPire=calculerPire();
    document.getElementById("lblReponse").innerHTML="le pire joueur est  "+TabJoueur[NomPire]+" avec un pointage de "+TabPoints[NomPire];
}
function calculerPire()
{
    var i, PtsPire=100, NomPire;
    for(i=0;i<TabJoueur.length;i++)
    {
        if(PtsPire>=TabPoints[i])
        {
            NomPire=i;
        }
    }
    return NomPire ;
}
function btnRechercher_onclick()
{
    var boucleTrouverNom=false;
    var NomRecherhcer=document.getElementById("txtNom").value;
    var i=0;
    while(boucleTrouverNom==false&& i<4)
    {
        if(NomRecherhcer==TabJoueur[i] )
        {
            boucleTrouverNom=true;
        }
        else{
            i++;
        }
    }
    if(boucleTrouverNom==true)
    {
        document.getElementById("lblReponse").innerHTML="le  score du joueur "+NomRecherhcer+" est de : "+TabPoints[i];
    }
    else{
        document.getElementById("lblReponse").innerHTML="le nom n'existe pas dans ce tableau";
    }
}


