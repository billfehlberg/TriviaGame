var time = 60;
$('#timer').text(time);
$('#start').on('click', function()  {
    setInterval(function(){
        time--; $('#timer').text(time); }, 1000);
          
});

//write questions to the empty div with a designated radio button and value//
//capture the section matches the correct answer and tally the right or wrong answers//
//timer ends display number of correct responses and resets game//
//maybe a submit button to display score and stop timer and reset game//




