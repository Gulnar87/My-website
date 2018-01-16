// Quiz Controller 

function Question (question, answers, correct){
	this.question = question; 
	this.answers = answers;
	this.correct = correct; 
	
}
   
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
 
var quizContainer = document.getElementById('quiz-container');
var resultsContainer = document.getElementById('results'); 
var submitButton = document.getElementById('submit');
   




function displayQuestions(questions){

	var output = [];
	var ans; 
  
// var q = quizContainer.querySelectorAll('.questionNumbers');
var questNum = 1; 

	for (var i = 0; i <questions.length; i++){
		ans = []; 
      

 	    

		for (current in questions[i].answers) {

       
 
         
      
          var html = '<label class="btn btn-primary"><input type="radio" name="question%i%" value="%current%" autocomplete="off">%answer%</label>';
          var newHtml = html.replace('%i%', i);
          newHtml = newHtml.replace('%current%', current); 
          newHtml = newHtml.replace('%answer%', questions[i].answers[current]);

             ans.push(newHtml);

      
     
         }
         

      newHtml = '<div class="slide slide-quiz"><div class="question">%question%</div><small class="%questionNumbers%"></small>';																								    
      newHtml = newHtml.replace('%question%', questNum++ + ' out of ' + questions.length);
      newHtml = newHtml.replace('%questionNumbers%',  )
      newHtml += '<div class="ans"><div class="btn-group btn-group-vertical answers" data-toggle="buttons">' + ans.join('') + '</div></div></div>';
      output.push(newHtml); 
 	       

		
      


			
	} 


	quizContainer.innerHTML = output.join(''); 


	

	
}

displayQuestions(myQuestions); 


function displayResults () {

var answerContainers = quizContainer.querySelectorAll('.answers');


  var userAnswer = '';
  var numCorrect = 0; 


myQuestions.forEach(function(current, i) {

var selector = 'input[name=question'+i+']:checked'; 
	var userAnswer = (answerContainers[i].querySelector(selector) ||{}).value;
   // var n = (btn[i].querySelector(selector)||{}).value; 

  if(parseInt(userAnswer) === current.correct) {

	numCorrect++;

    answerContainers[i].querySelector('.btn').classList.add('green-focus'); 
    
  

    } else {

	answerContainers[i].querySelector('.btn').classList.add('red-focus'); 
     }

}); 

   resultsContainer.innerHTML = numCorrect + ' correct answers out of ' + myQuestions.length + ' questions';


}

  
   submitButton.addEventListener('click', displayResults);


var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide-quiz");
var currentSlide = 0;

function showSlide (n){

	slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide===0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide===slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}

showSlide(0); 

function showNextSlide() {
 showSlide(currentSlide + 1);
}

function showPreviousSlide() {
  showSlide(currentSlide - 1);
}

previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);




 


 


