var TabNom = new Array(4);
var TabPrenom = new Array(4);
var TabAge = new Array(4);
var cptJoueur=0;
function frmMembre_onSubmit()
{
    var valid=true;
    if(validChampsObli()===true)
    {

        if(format()===true)
        {
            btnAjouter_onclick();
            if (confirm("voulez-vous valider votre inscription, le cout seras de :"+traiterInfo()+" $") == false)
            {
                valid=false;
            }
        }
        else{
            valid=false;
        }

    }
    else{
        valid=false;
    }
    return valid;
}
function traiterInfo()
{
    var ChoixAge=document.getElementById("type").value;
    var Prix;
    if(ChoixAge==="adulte")
    {
        Prix=90;
    }
    else if(ChoixAge==="étudiant"){
        Prix=60;
    }
    else{
        Prix=80;
    }
return prix;
}
function btnAjouter_onclick()
{
    var Age=parseFloat(document.getElementById("txtAge").value);
    var Nom=document.getElementById("txtNom").value;
    var Prenom=document.getElementById("txtPrenom").value;
    TabPrenom[cptJoueur]=Prenom;
    TabNom[cptJoueur]=Nom;
    TabAge[cptJoueur]=Age;
    cptJoueur++;
    ActiverOption(cptJoueur);
}
function ActiverOption(cpt)
{
    if(cpt>4)
    {
        document.getElementById("btnTrouverPlusJeune").disabled=false;
        document.getElementById("btnTrouverNomComplet").disabled=false;
    }

}
function trouverPlusJeune()
{
    var AgePlusJeune=200,Indicateur;
    for(var i=0;i<TabNom.length;i++)
    {
        if(TabAge[i]<AgePlusJeune)
        {
            AgePlusJeune=TabAge[i];
            Indicateur=i;
        }
    }
    return Indicateur;
}
function btnTrouverPlusJeune_onclick()
{
    document.getElementById("lblReponse").innerHTML="le nom du plus jeune est: "+TabPrenom[trouverPlusJeune()]+" "+TabNom[trouverPlusJeune()]+". Son Age est de: "+TabAge[trouverPlusJeune()];
}
function validNomCompletExist()
{
    var validNomExist=false;
    var cpt=0;
    while(cpt<TabAge.length && validNomExist===false)
    {
        if(TabNom[cpt]===document.getElementById("txtNom").value && TabPrenom[cpt]===document.getElementById("txtPrenom").value)
        {
            validNomExist=true
        }
        else
            cpt++;
    }
    return validNomExist;
}
function btnTrouverNomComplet_onclick()
{
    if(validNomCompletExist()===true)
    {
        document.getElementById("lblReponse").innerHTML="le prénom existe bien";
    }
    else
        document.getElementById("lblReponse").innerHTML="le prénom existe Pas";

}
function validChampsObli()
{
    var TabListNom= new Array("txtNom","txtPrenom","txtAdresse","txtVille","txtTel")
    var i=0;
    var valid=true;
    for(i;i<TabListNom.length;i++)
    {
        if(validExist(TabListNom[i])===false)
        {
            valid=false;
        }
    }
    return valid;
}

function validExist(NomId)
{
    var validation;
    if(document.getElementById(NomId).value==="")
    {
        document.getElementById("lblMessageErreur").innerHTML="Tous les champs ayant une étoile sont obligatoires";
        validation=false;
    }
    else {
        document.getElementById("lblMessageErreur").innerHTML="";
        validation=true;
    }
    return validation;
}
function format()
{
    var valid=true;

    if(validNom(document.getElementById("txtNom").value)===false)
    {
        document.getElementById("txtNom").style.borderColor = "red";
        valid=false;
    }
    else{
        document.getElementById("txtNom").style.borderColor = "";
    }
    if(validNom(document.getElementById("txtPrenom").value)===false)
    {
        document.getElementById("txtPrenom").style.borderColor = "red";
        valid=false;
    }
    else{
        document.getElementById("txtPrenom").style.borderColor = "";
    }
    if(validRue(document.getElementById("txtAdresse").value)===false)
    {
        document.getElementById("txtAdresse").style.borderColor = "red";
        valid=false;
    }
    else{
        document.getElementById("txtAdresse").style.borderColor = "";
    }
    if(validNom(document.getElementById("txtVille").value)===false)
    {
        document.getElementById("txtVille").style.borderColor = "red";
        valid=false;
    }
    else{
        document.getElementById("txtVille").style.borderColor = "";
    }
    if(validCodePost(document.getElementById("txtCodePostal").value)===false)
    {
        document.getElementById("txtCodePostal").style.borderColor = "red";
        valid=false;
    }
    else{
        document.getElementById("txtCodePostal").style.borderColor = "";
    }
    if(validTel(document.getElementById("txtTel").value)===false)
    {
        document.getElementById("txtTel").style.borderColor = "red";
        valid=false;
    }
    else{
        document.getElementById("txtTel").style.borderColor = "";
    }
return valid;
}
function validNom(chaine)
{
    return /^([a-z]|[à-ë])+-?([a-z]|[à-ë])+$/.test(chaine);
}
function validRue(chaine)
{
return /^(\d{4}) ([a-z]|[à-ë])+-?([a-z]|[à-ë])+$/.test(chaine);
}
function validCodePost(chaine)
{
 return   /^([a-z]|[A-Z])\d([a-z]|[A-Z])\d([a-z]|[A-Z])\d$/.test(chaine);
}
function  validTel(chaine)
{
 return   /^(\(\d{3}\) \d{3}-\d{4})|(\d{3}-\d{3}-\d{4})$/.test(chaine);
}
function validPerma(chaine)
{
  return  /^([A-zÀ-ë]{4}[0-9]{8})$/.test(chaine)
}
function Confirm()
{
    var txt;
    var r=confirm("Appuie sur oui pour continuer");


}