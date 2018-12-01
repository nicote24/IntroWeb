
function frmMembre_onSubmit()
{
    var valid=true;
    if(validChampsObli()===true)
    {

        if(format()===true)
        {
            if (confirm(("voulez-vous valider votre inscription, le cout seras de :"+traiterInfo()+" $")) === false)
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
    var prix;
    var ChoixAge=document.getElementById("type").value;
    if(ChoixAge==="adulte")
    {
        prix=90;
    }
    else if(ChoixAge==="étudiant"){
        prix=60;
    }
    else{
        prix=80;
    }
    return prix;
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
  return  /^([A-zÀ-ë]{4}[0-9]{8})$/.test(chaine);
}