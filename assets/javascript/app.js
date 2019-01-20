var time = 60;
$('#timer').text(time);
$('#start').on('click', function()  {
    setInterval(function(){
        time--; $('#timer').text(time); }, 1000);
          
});

var qNum1 = {
        number:         1,   
        question:       "What planet is furthest from the Sun?",
        answer:         ["Venus", "Pluto", "Neptune", "Saturn"],
        correctAnswer:  "Neptune",
    }
var qNum2 = {
       number:         2,
       question:       "What is the coldest planet?",
       answer:         ["Mars", "Uranus", "Neptune", "Saturn"],
       correctAnswer:  "Uranus",
     }
// var qNum3 = {
//         number:         3,
//         question:       "What is the hottest planet?",
//         answer:         ["Mercury", "Earth", "Mars", "Venus"],
//         correctAnswer:  "Mercury",
//     }
// var qNum4 = {
//         number:         4,
//         question:       "What planet has the most moons?",
//         answer:         ["Neptune", "Earth", "Saturn", "Jupiter"],
//         correctAnswer:  "Jupiter",
//     }
// var qNum5 = {
//         number:         5,
//         question:       "What planet is know for it's rings?",
//         answer:         ["Uranus", "Neptune", "Jupiter", "Saturn"],
//         correctAnswer:  "Saturn",
//     }
// var qNum6 = {
//         number:         6,
//         question:       "What is the largest planet?",
//         answer:         ["Neptune", "Jupiter", "Saturn", "Earth"],
//         correctAnswer:  "Jupiter",


$('#questions').append($('<p id="question-1"></p>'));
$('#question-1').text(qNum1.number + ":  " + qNum1.question)
$('#questions').append($('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inLineRadio1" value="option1"><label class="form-check-label-1" for="inlineRadio1"></label></div>'));
$('.form-check-label-1').text(qNum1.answer[0])
$('#questions').append($('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inLineRadio2" value="option2"><label class="form-check-label-2" for="inlineRadio2"></label></div>'));
$('.form-check-label-2').text(qNum1.answer[1])
$('#questions').append($('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inLineRadio2" value="option3"><label class="form-check-label-3" for="inlineRadio2"></label></div>'));
$('.form-check-label-3').text(qNum1.answer[2])
$('#questions').append($('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inLineRadio2" value="option4"><label class="form-check-label-4" for="inlineRadio2"></label></div>'));
$('.form-check-label-4').text(qNum1.answer[3])

$('#questions').append($('<p id="question-2"></p>'));
$('#question-2').text(qNum2.number + ":  " + qNum2.question)
$('#questions').append($('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inLineRadio1" value="option5"><label class="form-check-label-5" for="inlineRadio1"></label></div>'));
$('.form-check-label-5').text(qNum2.answer[0])
$('#questions').append($('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inLineRadio2" value="option6"><label class="form-check-label-6" for="inlineRadio2"></label></div>'));
$('.form-check-label-6').text(qNum2.answer[1])
$('#questions').append($('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inLineRadio2" value="option7"><label class="form-check-label-7" for="inlineRadio2"></label></div>'));
$('.form-check-label-7').text(qNum2.answer[2])
$('#questions').append($('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inLineRadio2" value="option8"><label class="form-check-label-8" for="inlineRadio2"></label></div>'));
$('.form-check-label-8').text(qNum2.answer[3])

// $('#questions').append($('<p id="question-3"></p>'));
// $('#question-2').text(qNum3.number + ":  " + qNum3.question)
// $('#questions').append($('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inLineRadio1" value="option1"><label class="form-check-label-9" for="inlineRadio1"></label></div>'));
// $('.form-check-label-9').text(qNum3.answer[0])
// $('#questions').append($('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inLineRadio2" value="option2"><label class="form-check-label-10" for="inlineRadio2"></label></div>'));
// $('.form-check-label-10').text(qNum3.answer[1])
// $('#questions').append($('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inLineRadio2" value="option3"><label class="form-check-label-11" for="inlineRadio2"></label></div>'));
// $('.form-check-label-11').text(qNum3.answer[2])
// $('#questions').append($('<div class="form-check form-check-inline"><input class="form-check-input" type="radio" name="inlineRadioOptions" id="inLineRadio2" value="option4"><label class="form-check-label-12" for="inlineRadio2"></label></div>'));
// $('.form-check-label-12').text(qNum3.answer[3])


// $('#questions').append($('<p id="question-2"></p>'));
// $('#question-2').text(question2);

// $('#questions').append($('<p id="question-3"></p>'));
// $('#question-3').text(question3);

// $('#questions').append($('<p id="question-4"></p>'));
// $('#question-4').text(question4);

// $('#questions').append($('<p id="question-5"></p>'));
// $('#question-5').text(question5);

// $('#questions').append($('<p id="question-6"></p>'));
// $('#question-6').text(question6);


//write questions to the empty div with a designated radio button and value//
//capture the section matches the correct answer and tally the right or wrong answers//
//timer ends display number of correct responses and resets game//
//maybe a submit button to display score and stop timer and reset game//




