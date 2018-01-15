// $(function () { 

//   $("#navbarToggle").blur(function (event) {
//     var screenWidth = window.innerWidth;
//     if (screenWidth < 768) {
//       $("#collapsable-nav").collapse('hide');
//     }
//   });

//   $("#navbarToggle").click(function (event) {
//     $(event.target).focus();
//   });
// });


// (function (global){

// })(window); 



// (function (global) {

// var dc = {};

// var homeHtml = "snippets/home-snippet.html";

// // Convenience function for inserting innerHTML for 'select'
// var insertHtml = function (selector, html) {
//   var targetElem = document.querySelector(selector);
//   targetElem.innerHTML = html;
// };

// // Show loading icon inside element identified by 'selector'.
// var showLoading = function (selector) {
//   var html = "<div class='text-center'>";
//   html += "<img src='images/ajax-loader.gif'></div>";
//   insertHtml(selector, html);
// };

// // Return substitute of '{{propName}}'
// // with propValue in given 'string'
// var insertProperty = function (string, propName, propValue) {
//   var propToReplace = "{{" + propName + "}}";
//   string = string
//     .replace(new RegExp(propToReplace, "g"), propValue);
//   return string;
// }

// // Remove the class 'active' from home and switch to Menu button
// // var switchMenuToActive = function () {
// //   // Remove 'active' from home button
// //   var classes = document.querySelector("#navHomeButton").className;
// //   classes = classes.replace(new RegExp("active", "g"), "");
// //   document.querySelector("#navHomeButton").className = classes;

// //   // Add 'active' to menu button if not already there
// //   classes = document.querySelector("#navMenuButton").className;
// //   if (classes.indexOf("active") == -1) {
// //     classes += " active";
// //     document.querySelector("#navMenuButton").className = classes;
// //   }
// // };


// var displayDate = function (){
// var toDay, year, month, months,  day, days, dates, hour, minutes, prepand; 
//  toDay = new Date();
//  year = toDay.getFullYear();
// month = toDay.getMonth();
// months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October' ,'November', 'December']; 
// day = toDay.getDay();
// days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// dates = toDay.getDate();

// document.querySelector('#date').textContent =  'Today is: ' + dates + ' ' +  months[month] + ' ' + year + ', ' + days[day];
 
//  hour = toDay.getHours(); 
//  minutes = toDay.getMinutes(); 
//   prepand = (hour >= 12)? " PM ":" AM ";
//   hour = (hour >= 12)? hour - 12: hour;
//   hour = (hour < 10)? '0' + hour : hour;
//   minutes = (minutes < 10)? '0' + minutes : minutes;

//  document.querySelector('#time').textContent = 'Current time is: '  + hour + ': ' + minutes +  prepand ; 


// }; 


// // On page load (before images or CSS)
// document.addEventListener("DOMContentLoaded", function (event) {

// // On first load, show home view
// showLoading("#main-content");
// $ajaxUtils.sendGetRequest(
//   homeHtml,
//   function (responseText) {
//     document.querySelector("#main-content")
//       .innerHTML = responseText;
//   },
//   false);
// });



// global.$dc = dc;
 

// })(window);



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


(function(window){

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
  prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12)? hour - 12: hour;
  hour = (hour < 10)? '0' + hour : hour;
  minutes = (minutes < 10)? '0' + minutes : minutes;


 document.querySelector('#time').textContent = 'Current time is: '  + hour + ': ' + minutes +  prepand ; 


}


 window.displayDate = displayDate();


})(window);


