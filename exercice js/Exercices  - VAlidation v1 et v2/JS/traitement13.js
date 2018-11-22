function btnCalculer_onclick()
{


    if(ValidChampObligatoires()===true)
    {
        traiterInfo();

    }
}

function traiterInfo()
{
    var Nbr1,Nbr2,Operateur,Total;
    Nbr1=parseFloat(document.getElementById("txtNbre1").value);
    Nbr2=parseFloat(document.getElementById("txtNbre2").value);
    Operateur=(document.getElementById("txtOperateur").value);
    Total=CalculerOpe(Nbr1,Nbr2,Operateur);
    AfficherRep(Operateur,Total);
}

function CalculerOpe(Nbr1,Nbr2,Operateur)
{
    var Total;
    switch (Operateur)
    {

        case "*":Total=Nbr1*Nbr2;
            break;
        case "/":Total=Nbr1/Nbr2;
            break;
        case "+":Total=Nbr1+Nbr2;
            break;
        case "-":Total=Nbr1-Nbr2;
            break;
        default: Total="Cet opérateur n'est pas valide";
            break;
    }
    return Total;
}

function ValidChampObligatoires()
{
    var TabNomId = new Array("txtNbre1","txtNbre2","txtOperateur");
    var valid=true,i;
    for(i=0;i<TabNomId.length;i++)
    {
        if(validExist(TabNomId[i])===false)
        {
            valid=false;
        }
    }
    return valid;
}

function validExist(NomID)
{
    var validation;
    if(document.getElementById(NomID).value==="")
    {
        document.getElementById(NomID).style.backgroundColor = "red";
        validation=false;
    }
    else {
        document.getElementById(NomID).style.backgroundColor = "white";
        validation=true;
    }
    return validation;
}

function AfficherRep(Operateur,Total)
{
    console.log("le total avec l'operateur "+Operateur+" est de: "+Total);
    document.getElementById("lblMessage").innerHTML="le total avec l'operateur "+Operateur+" est de: "+Total;
}
