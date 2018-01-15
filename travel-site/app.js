// Quiz Controller 

var quizController = (function (){

function Question (question, answers, correct){
	this.question = question; 
	this.answers = answers;
	this.correct = correct; 
	
}

   Question.prototype.buildQuiz = function() {

    };
    

var data = {

	output: [],
	answers: []
}


return {

	addItem: function (ques, ans, cor){


var q1 = new Question ('Which country has more lakes than the rest of the world combined?', 
['Finland', 'China', 'Norway', 'Canada'], 'Canada'); 

var q2 = new Question ('Which country has the world\'s highest waterfall?', 
 ['America', 
'Japan', 
'Venezuela', 
'Uganda'], 'Venezuela');

var q3 = new  Question ('In which country is there a natural gas pit nicknamed the ‘Door to Hell’ that has been on fire since 1971?', 
	['Turkmenistan', 
'Azerbaijan', 
'Bulgaria',
'Iceland'], 'Turkmenistan'); 

var q4 = new Question ('Which country is home to the annual food fight, La Tomatina, in which crowd members pelt each other with tomatoes?', 
['Portugal',
'Italy',
'Spain',
'France',
], 'Spain'); 


var q5 = new Question ('Name India\'s annual festival of colour that occurs after every March full Moon.', 
	['Moli', 'Holi', 'Kholi', 'Gohli'], 'Holi'); 


var questions = [q1, q2, q3, q4, q5]; 

     return questions; 
     

	}

}; 




})(); 





// UI Controller 

var UICOntroller = (function(){





})(); 






// Global App Controller 

var controller = (function (quizCtrl, UICtrl){




})(quizController, UIController); 