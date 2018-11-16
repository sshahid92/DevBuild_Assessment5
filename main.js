var numberCorrect = 0;
var numberWrong = 0;

function hide(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
hide('q-2');
hide('q-3');
hide('q-4');
hide('finale');

function question1Submit(){
    if(document.getElementById('q-1-true').checked == true) {
        alert("That is correct!")
        numberCorrect += 1;
    } else {
        alert("Thats incorrect!")
        numberWrong += 1;
    }
    hide( 'q-1');
    hide('q-2');
}

function question2Submit(){
    if(document.getElementById('q-2-true').checked == true) {
        alert("That is correct!")
        numberCorrect += 1;
    } else {
        alert("Thats incorrect!")
        numberWrong += 1;
    }
    hide('q-2');
    hide('q-3');
}

function question3Submit(){
    if(document.getElementById('q-3-true').checked == true) {
        alert("That is correct!")
        numberCorrect += 1;
    } else {
        alert("Thats incorrect!")
        numberWrong += 1;
    }
    hide('q-3');
    hide('q-4');
}
function question4Submit(){
    if(document.getElementById('q-4-true').checked == true) {
        alert("That is correct!")
        numberCorrect += 1;
    } else {
        alert("Thats incorrect!")
        numberWrong += 1;
    }
    hide('q-4');
    hide('finale');
    document.getElementById('correct').innerText = numberCorrect;
    document.getElementById('incorrect').innerText = numberWrong;
    
    
}
