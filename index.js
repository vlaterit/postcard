const nameElement = document.querySelector('#name');
const congratsElement = document.querySelector('#congrats');

nameElement.textContent = prompt('Enter the name:');
congratsElement.textContent = prompt('Enter the text of the congratulations:');

alert('Your postcard is ready!');
