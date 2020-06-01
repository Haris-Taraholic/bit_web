///////////////////// BOM - PRACTICE //////////////////////

////// Window Methods ///////

/* 
Create a function that shows the user a greeting message using alert
Then a question is presented to the user using prompt
When the user provides the answer, that answer is used in the confirm dialog
The format of the message in the dialog should be: "We will submit this answer now! " + the answer
If the user clicks OK, show alert with success message
If the user clicks Cancel, don't show anything 
*/

function submitAnswer() {

    alert('Hello dear user!');

    var userAnswer = prompt('Please enter your name:');
    var getUserAnswerLength = userAnswer.length;

    //Making sure that prompt() can't be empty
    if (getUserAnswerLength > 0) {
        userAnswer;
    } else if (getUserAnswerLength === 0) {
        submitAnswer()
    }
    //

    var userConfirmation = confirm('We will submit this answer now!' + '\nYour answer: ' + userAnswer);
    if (userConfirmation === true) {
        alert('You have successfully submitted the answer.')
    }
}

submitAnswer();