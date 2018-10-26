function btnCalculer_onclick()
    {
        var BasePrix,Age,Total,Reduction,Film,Heure;


        BasePrix=parseFloat(document.getElementById("txtBasePrix").value);
        Age=parseFloat(document.getElementById("txtAge").value);
        Film=document.getElementById("lstFilm").value;

        Reduction=1;


        if(document.getElementById("chkSession").checked==true)
        {
            if(Age<=16)
            {
                if(document.getElementById("radMidi").checked==true)
                {
                    Heure = "midi";
                    Reduction=0.40;
                }
                else
                {
                    Heure = "soir";
                 Reduction=0.60;
                }
            }

            else
                {
                if(document.getElementById("radMidi").checked==true)
                {
                    Heure = "midi";
                    Reduction=0.70;
                }
                else {
                    Heure="soir"
                    Total=BasePrix;
                }
             }
        }
        else{
            if(document.getElementById("radMidi").checked==true)
            {
                Heure = "midi";
            }
            else {
                Heure="soir";
            }
        }

        Total=BasePrix*Reduction;


        console.log("Un billet du "+Heure+" pour un spectateur de "+Age+" ans coûte $"+Total+" pour le film "+Film);






    }







