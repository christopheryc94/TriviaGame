//global variables
var counter = 60;

var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;

//html loads first
$(document).ready(function(){

	// hide quiz and result until buttons or time is up
	$("#quizContainer").hide();
	$("#endContainer").hide();

	//Start button to begin quiz
	$("#start").on("click", function(){

		// hide the first page
		$("#startGame").hide();


		// show the quiz
		$("#quizContainer").show();

		startCount();

	}); //still in document.ready



	// Counts down and displays the time to the user
	function countDown(){

		// decrememnt counter, global variable set at 60
		counter--;

		// Display the count on quiz
    	$("#timeCount").html(counter);
		
		// before time runs out, user clicks on the done button
		$("#doneButton").on("click", function(){
			clearInterval();
		});


		// Finish the game after the timer reaches 0
		if(counter === -1){

			// Collect the radio inputs
			quizResults();

			// Hide the game Div from the user
			$("#quizContainer").hide();

		}


	}

	//set counter to 0
	function clearInterval(){
		counter = 0;
	}

	//start count
	function startCount(){

		setInterval(countDown, 1000);

	}


	// Function to be run after the timer is up
	function quizResults(){


		// Check values of questions 
		var Q1 = $('input:radio[name="q1"]:checked').val();
		var Q2 = $('input:radio[name="q2"]:checked').val();
		var Q3 = $('input:radio[name="q3"]:checked').val();
		var Q4 = $('input:radio[name="q4"]:checked').val();
		var Q5 = $('input:radio[name="q5"]:checked').val();
		var Q6 = $('input:radio[name="q6"]:checked').val();
		var Q7 = $('input:radio[name="q7"]:checked').val();
		var Q8 = $('input:radio[name="q8"]:checked').val();
		var Q9 = $('input:radio[name="q9"]:checked').val();
		var Q10 = $('input:radio[name="q10"]:checked').val();
		var Q11 = $('input:radio[name="q11"]:checked').val();
		var Q12 = $('input:radio[name="q12"]:checked').val();
		var Q13 = $('input:radio[name="q13"]:checked').val();
		var Q14 = $('input:radio[name="q14"]:checked').val();
		var Q15 = $('input:radio[name="q15"]:checked').val();

		if(Q1 === undefined){
			unanswered++;
		}
		else if(Q1 === "Patrick Star"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}


		if(Q2 === undefined){
			unanswered++;
		}
		else if(Q2 === "5 cents"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}


		if(Q3 === undefined){
			unanswered++;
		}
		else if(Q3 === "Rusty Krab"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}


		if(Q4 === undefined){
			unanswered++;
		}
		else if(Q4 === "You Don't Know Sponge"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}


		if(Q5 === undefined){
			unanswered++;
		}
		else if(Q5 === "The hash slinging slasher"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}


		if(Q6 === undefined){
			unanswered++;
		}
		else if(Q6 === "486"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}


		if(Q7 === undefined){
			unanswered++;
		}
		else if(Q7 === "8"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}


		if(Q8 === undefined){
			unanswered++;
		}
		else if(Q8 === "Tentacle Acres"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}


		if(Q9 === undefined){
			unanswered++;
		}
		else if(Q9 === "DoodleBob"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}



		if(Q10 === undefined){
			unanswered++;
		}
		else if(Q10 === "Help Wanted"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}

		if(Q11 === undefined){
			unanswered++;
		}
		else if(Q11 === "Spongeboy"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}

		if(Q12 === undefined){
			unanswered++;
		}
		else if(Q12 === "Karate"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}

		if(Q13 === undefined){
			unanswered++;
		}
		else if(Q13 === "Mr. Doodles"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}

		if(Q14 === undefined){
			unanswered++;
		}
		else if(Q14 === "Good grief!"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}

		if(Q15 === undefined){
			unanswered++;
		}
		else if(Q15 === "Mr. Krabs"){
			correctAnswer++;
		}
		else{
			incorrectAnswer++;
		}


		// After answers are validated, display the score results
		$("#correctAnswers").html(correctAnswer);
		$("#incorrectAnswers").html(incorrectAnswer);
		$("#unanswered").html(unanswered);


		// Show the completed Score Div
		$("#endContainer").show();

	}

});
 