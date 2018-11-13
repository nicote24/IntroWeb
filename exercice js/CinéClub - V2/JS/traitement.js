function btnCalculer_onclick()
    {
        var PrixBase,Age,ChoixFilm,Total,Rabais,Heure;
        function btnCalculer_onclick()
        {
            saisirInfo();
            conditionInfo();
            calculInfo();

        }
        function saisirInfo()
        {
            ChoixFilm = document.getElementById("lstFilm").value;
            PrixBase  = parseFloat(document.getElementById("txtBasePrix").value);
            Age = parseFloat(document.getElementById("txtAge").value);
        }
        function conditionInfo()
        {
            if(Age<=16 &&  document.getElementById("chkSession").checked == true )
            {
                if(  document.getElementById("radMidi").checked == true)
                {
                    Heure ="midi";
                    Rabais=0.40;
                }
                else
                {
                    Heure="soir";
                    Rabais=0.60;
                }

            }
            else if(Age>16 &&  document.getElementById("chkSession").checked == true)
            {
                if( document.getElementById("radMidi").checked == true)
                {
                    Heure ="midi";
                    Rabais=0.70;
                }
                else{
                    Heure="soir";

                }

            }
            else if( document.getElementById("chkSession").checked == true)
            {
                Rabais=1;
                Heure ="midi";
            }
            else {
                Rabais=1;
                Heure="soir";
            }
        }
        function calculInfo()
        {
            Total= PrixBase*Rabais;

            console.log("Le total es de "+ Total.toFixed(2)+"$"+  " pour le film " + ChoixFilm + " qui est à " + Heure +" et qui est âgé de " + Age );

        }
        function btnDeroulant_onchange1()
        {
            ChoixFilm = document.getElementById("lstFilm").value;
            if(ChoixFilm=="SpiderMan")
            {
                document.getElementById("img1").src= "img/spider man.jpg";
            }
            else if(ChoixFilm=="Noir")
            {
                document.getElementById("img2").src= "img/noi.JPG";
            }
            else if(ChoixFilm=="Jesus")
            {
                document.getElementById("img3").src= "img/Jesus-Film.JPG";
            }
            else{
                document.getElementById("img4").src= "img/stfu.jpg";
            }

        }










    }







