function sayWelcome () {

	this.textContent = 'Signed'; 
	var name = document.getElementById('name').value; 
	var message;

	if (name) {
		message = '<h2>'  + name + ', Welcome to our page!</h2>'; 

	} else {
		
      message = " <h2>Dear User, Welcome to our page!</h2>"; 
	}

	document.getElementById('content').innerHTML= message; 
}

document.querySelector('#button').addEventListener('click', sayWelcome);