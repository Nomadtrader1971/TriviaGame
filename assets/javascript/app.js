
var score = 0


function checkQuestion1(){
    var correctAnswer = document.getElementById("a3")
    if (correctAnswer.checked == true) {
        score++;
        
    }
    else {
            return;
    }

    $("#score").html("Your score is:" +score)      
};


function checkQuestion2(){
    var correctAnswer = document.getElementById("b4")
    if (correctAnswer.checked == true) {
        score++;
    }
    else {
            return;
    }

    $("#score").html("Your score is:" +score)
        
};


function checkQuestion3(){
    var correctAnswer = document.getElementById("c2")
    if (correctAnswer.checked == true) {
        score++;
    }
    else {
            return;
    }

    $("#score").html("Your score is:" +score)
        
};



function checkQuestion4(){
    var correctAnswer = document.getElementById("d1")
    if (correctAnswer.checked == true) {
        score++;
        
    }
    else {
            return;
    }

    $("#score").html("Your score is:" +score)
        
};



function checkQuestion5(){
    var correctAnswer = document.getElementById("e4")
    if (correctAnswer.checked == true) {
        score++;
    }
    else {
            return;
    }

    $("#score").html("Your score is:" +score)
        
};


var timeleft = 30;
var answerTimer = setInterval(function(){
  document.getElementById("progressBar").value = 30 - --timeleft;
  if(timeleft <= 0)
    clearInterval(answerTimer);



},1000);



$(document).ready(function(){
    $('#checkscore').click(function(){
        checkQuestion1();
		checkQuestion2();
		checkQuestion3();
		checkQuestion4();
		checkQuestion5();

    });
});

if (timeleft<=0){
		checkQuestion1();
		checkQuestion2();
		checkQuestion3();
		checkQuestion4();
		checkQuestion5();
};