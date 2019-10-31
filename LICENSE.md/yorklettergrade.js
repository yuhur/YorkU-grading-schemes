function grade(){

 //   var num = document.getElementById("percent").value;

 //   var s = num + 1;


 //   document.getElementById("output").innerHTML = "letter grade: " + s;



 var a = document.getElementById("percent").value;

 switch (true) {
    case (a > 89): letter = "A+" + "<br>" + "Exceptional"; break;
    case (a > 79): letter = "A" + "<br>" + "Excellent"; break;
    case (a > 74): letter = "B+" + "<br>" + "Very Good"; break;
    case (a > 69): letter = "B" + "<br>" + "Good"; break;
    case (a > 64): letter = "C+" + "<br>" + "Competent"; break;
    case (a > 59): letter = "C" + "<br>" + "Fairly Competent"; break;
    case (a > 54): letter = "D+" + "<br>" + "Passing"; break;
    case (a > 49): letter = "D" + "<br>" + "Marginally Passing"; break;
    case (a > 39): letter = "E" + "<br>" + "Marginally Failing"; break;
    default: letter = "F";
 }
 document.getElementById("output").innerHTML = "letter grade: " + letter;


}