let numbers = [];
//numvers go here

// add a number to the number bank
function addNumber() {
  const input = document.getElementById('numberInput').value;
  const number = parseInt(input);
  if (!isNaN(number)) {
    numbers.push(number);
    updateNumberBank();
  }
  document.getElementById('numberInput').value = '';
}

//  update the number bank displayed in the DOM
function updateNumberBank() {
  const numberBank = document.getElementById('numberBank');
  numberBank.innerHTML = '';
  numbers.forEach(num => {
    const li = document.createElement('li');
    li.textContent = num;
    numberBank.appendChild(li);
  });
}

// sort one number into odd or even category
function sortOne() {
  if (numbers.length > 0) {
    const number = numbers.shift();
    const list = number % 2 === 0 ? 'evenNumbers' : 'oddNumbers';
    document.getElementById(list).innerHTML += `<li>${number}</li>`;
  }
}

// odd or even categories
function sortAll() {
  const oddNumbers = document.getElementById('oddNumbers');
  const evenNumbers = document.getElementById('evenNumbers');
  oddNumbers.innerHTML = '';
  evenNumbers.innerHTML = '';
  numbers.forEach(number => {
    const list = number % 2 === 0 ? evenNumbers : oddNumbers;
    list.innerHTML += `<li>${number}</li>`;
  });
  numbers = [];
  updateNumberBank();
}