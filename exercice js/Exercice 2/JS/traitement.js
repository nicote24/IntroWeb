function btnCalculer_onclick()
{ 
 	var MoyKmMois, TotKM;
    MoyKmMois=parseFloat(document.getElementById("txtMoyKmMois").value);
    TotKM=MoyKmMois*12*5;
    console.log("Le nombre de km parcourus en 5 ans seras de "+TotKM);

}