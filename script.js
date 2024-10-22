
function aPrzezB(){

var numA = Number(document.getElementById("numA1").value);
var numB = Number(document.getElementById("numB1").value);

if(numB != 0){
    document.getElementById("aPrzezB").innerHTML = "X =" + (numA / numB);
}
else{
    document.getElementById("aPrzezB").innerHTML = "Nie moge dzielic przez zero";
}

}


function aprzezBplusCPrzezD(){

var numA = Number(document.getElementById("numA2").value);
var numB = Number(document.getElementById("numB2").value);
var numC = Number(document.getElementById("numC2").value);
var numD = Number(document.getElementById("numD2").value);

if(numB != 0 & numD !=0){
 document.getElementById("aprzezBplusCPrzezD").innerHTML = "X =" + (numA / numB + numC + numD);
}

else if(numB == 0 & numD != 0){
document.getElementById("aprzezBplusCPrzezD").innerHTML = "Nie moge dzielic przez zero!";
}

else if(numD == 0 & numB != 0){
    document.getElementById("aprzezBplusCPrzezD").innerHTML = "Nie moge dzielic przez zero!";
}
else{
    document.getElementById("aprzezBplusCPrzezD").innerHTML = "Nie moge dzielic przez zero!";
    }
}

function aplusprzezbminus(){

    var numA = Number(document.getElementById("numA3").value);
    var numB = Number(document.getElementById("numB3").value);
    
    if(numB != 4){
        document.getElementById("aplusprzezbminus").innerHTML = "X =" + ((numA+6) / (numB-4));
    }
    else{
        document.getElementById("aplusprzezbminus").innerHTML = "Nie moge dzielic! Zmien liczbe C!(C nie rowna sie 4)";
    }
    
    }
    

    function gotoIndex(){
        window.location.href = "index.html";
    }

    function gotoIndex2(){
        window.location.href = "index2.html";
    }

    function gotoIndex3(){
        window.location.href = "index3.html";
    }

    function gotoGaraz(){
        window.location.href = "garaz.html";
    }

    function liczbaParzysta(){
        var numP = Number(document.getElementById("numP").value);
        var outputDiv = document.getElementById("liczbaParzysta");
        if (numP % 2 === 0){
            outputDiv.innerHTML =  numP;
        }
        else{
            outputDiv.innerHTML = "Liczba nie jest parzysta";
        }

    }

    function podzielneOrNot(){
        var numA4 = Number(document.getElementById("numA4").value);
        var numB4 = Number(document.getElementById("numB4").value);
        var outputDiv2 = document.getElementById("podzielneOrNot");
        if (numA4 % numB4 === 0 ){
            outputDiv2.innerHTML = `Liczba ${numA4} podzielona przez ${numB4}`;

        }
        else{
            outputDiv2.innerHTML = "Liczba nie podzieliona";
        }
    }
    
    