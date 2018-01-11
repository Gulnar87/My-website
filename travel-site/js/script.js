// function sayWelcome () {

// 	this.textContent = 'Signed'; 
// 	var name = document.getElementById('name').value; 
// 	var message;

// 	if (name) {
// 		message = '<h2>'  + name + ', Welcome to our page!</h2>'; 

// 	} else {
		
//       message = " <h2>Dear User, Welcome to our page!</h2>"; 
// 	}

// 	document.getElementById('content').innerHTML= message; 
// }

// document.querySelector('#button').addEventListener('click', sayWelcome);


function displayDate (){
 var toDay, year, month, months,  day, days, dates, hour, minutes, prepand; 
 toDay = new Date();
 year = toDay.getFullYear();
month = toDay.getMonth();
months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October' ,'November', 'December']; 
day = toDay.getDay();
days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
dates = toDay.getDate();

document.querySelector('#date').textContent =  'Today is: ' + dates + ' ' +  months[month] + ' ' + year + ', ' + days[day];
 
 hour = toDay.getHours(); 
 minutes = toDay.getMinutes(); 
 minutes = (minutes > 0)? minutes + ' min' : minutes; 

   prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;

 document.querySelector('#time').textContent = 'Current time is: '  + hour +  prepand + ': ' + minutes; 

 console.log(hour);
 console.log(minutes);


}

displayDate();

