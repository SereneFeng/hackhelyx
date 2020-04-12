
function calculation() {
	var firstValue = parseInt(document.getElementById("firstValue").value);
	var secondValue = parseInt(document.getElementById("secondValue").value);
	var result = document.getElementById("result");
    var calc = (firstValue * 3) / secondValue;
    var carbonresult = document.getElementById("carbonresult");
    var carboncalc = (firstValue / secondValue) * 8.887;
    carbonresult.textContent = carboncalc;
    result.textContent = calc;


}



//var calc = (firstValue * 3) / secondValue;
//    var carbonresult = document.getElementById("carbonresult");
//var carboncalc = (firstValue / secondValue) * 8.887;
//carbonresult.textContent = carboncalc;

//Distance (200) divided by MPG (30) multiplied by Price of Gas ($3.50)
//The average passenger vehicle emits about 404 grams of CO2 per mile
//CO2 Emissions from a gallon of gasoline: 8,887 grams CO2/ gallon
// (Miles/MPG) * 8887 = grams CO2
//function calculation() {
	//var firstValue = parseInt(document.getElementById("firstValue").value);
	//var secondValue = parseInt(document.getElementById("secondValue").value);
	//var result = document.getElementById("result");
	//var calc = (firstValue * 3) / secondValue;
   // var carbonresult = document.getElementById("carbonresult");
    //var carboncalc = (firstValue / secondValue) * 8887);
   // carbonresult.textContent = carboncalc;
   // result.textContent = calc;
//}
