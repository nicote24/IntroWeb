function btnCalculer_onclick()
    {
        var Veterinaire,NbrJour,Total,Animaux,Service,Toilettage;

        Veterinaire=document.getElementById("lstVeterinaire").value;
        NbrJour=parseFloat(document.getElementById("txtNbreJours").value);


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
        Total=(((Total*NbrJour)+Service)*1.14975);
        console.log("Vétérinaire responsable est: "+Veterinaire+". Le montant pour la garde de votre "+Animaux+" est de "+Total.toFixed(2)+" pour "+NbrJour+" jours "+Toilettage+" service de toillettage.");






    }







