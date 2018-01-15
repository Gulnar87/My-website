// Quiz Controller 

function Question (question, answers, correct){
	this.question = question; 
	this.answers = answers;
	this.correct = correct; 
	
}
   
// Question.prototype.buildQuiz = function (){

// }; 

var myQuestions = [new Question ('Which country has more lakes than the rest of the world combined?', 
['Finland', 'China', 'Norway', 'Canada'], 3), 
new Question ('Which country has the world\'s highest waterfall?', 
 ['America', 'Japan', 'Venezuela', 'Uganda'], 2), 
new  Question ('In which country is there a natural gas pit nicknamed the ‘Door to Hell’ that has been on fire since 1971?', 
['Turkmenistan', 'Azerbaijan', 'Bulgaria','Iceland'], 0),
 new Question ('Which country is home to the annual food fight, La Tomatina, in which crowd members pelt each other with tomatoes?', 
['Portugal', 'Italy', 'Spain','France'], 2), 
 new Question ('Name India\'s annual festival of colour that occurs after every March full Moon.', 
	['Moli', 'Holi', 'Kholi', 'Gohli'], 1)]; 
 

function displayQuestions(questions, quizContainer){

	var output = [];
	var ans; 

	for (var i = 0; i <questions.length; i++){
		ans = []; 

		for (current in questions[i].answers) {

// ans.push(
//                     '<div><label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+current+'">'
// 					+ current + ': '
// 					+ questions[i].answers[current]
// 				+ '</label></div>'); 


var html = '<label class="btn btn-primary"><input type="radio" name="question%i%" value="%current%" autocomplete="off">%answer%</label>';
var newHtml = html.replace('%i%', i);
newHtml = newHtml.replace('%current%', current); 
newHtml = newHtml.replace('%answer%', questions[i].answers[current]);


ans.push(newHtml);

}
         
 // output.push(
	// 		'<div class="question">' + questions[i].question + '</div>'
	// 		+ '<div class="answers">' + ans.join('') + '</div>'
	// 	);


 newHtml = '<div class="question">%question%</div>'
 newHtml = newHtml.replace('%question%', questions[i].question);
 newHtml +=  '<div class="ans"><div class="btn-group btn-group-vertical answers" data-toggle="buttons">' + ans.join('') + '</div></div>';
 output.push(newHtml); 
 console.log(newHtml);

			
	} 

	quizContainer.innerHTML = output.join(''); 
	console.log(quizContainer);
	
}

	 
var quizContainer = document.getElementById('quiz');


displayQuestions(myQuestions, quizContainer); 



function displayResults (questions, quizContainer, resultsContainer) {

 var answerContainers = quizContainer.querySelectorAll('.answers');


  var userAnswer = '';
  var numCorrect = 0; 


// for(var i = 0; i < questions.length; i++) {

// 	userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;


questions.forEach(function(current, i) {


var selector = 'input[name=question'+i+']:checked'; 
	var userAnswer = (answerContainers[i].querySelector(selector) ||{}).value;
   // var n = (btn[i].querySelector(selector)||{}).value; 



if(parseInt(userAnswer) === current.correct){

	numCorrect++;

 answerContainers[i].querySelector('.btn').classList.add('green-focus'); 


} else {

	answerContainers[i].querySelector('.btn').classList.add('red-focus'); 
}



}); 


}


var resultsContainer = document.getElementById('results')
var submitButton = document.getElementById('submit');

submitButton.onclick = function (){
	displayResults(myQuestions, quizContainer, resultsContainer);
}












 


