function btnCalculer_onclick()
    {
        var BasePrix,Age,Total,Reduction;


        BasePrix=parseFloat(document.getElementById("txtBasePrix").value);
        Age=parseFloat(document.getElementById("txtAge").value);



        if(Age<=16)
        {
           if(document.getElementById("radMidi").checked==true)
           {
              Reduction=0.40;
           }
           else{
               Reduction=0.60;
           }
        }
        else {
            if(document.getElementById("radSoir").checked==true)
            {
                Reduction=0.70;
            }

        }
        Total=BasePrix*Reduction;


        console.log("Le prix seras de: "+Total+" $");






    }







