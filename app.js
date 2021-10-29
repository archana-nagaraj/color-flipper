console.log('success..');

// Creating an array of colors
const colors = [
  'red',
  'green',
  'blue',
  'yellow',
  'magenta',
  'coral',
  'pink',
];
var btnElement = document.getElementById('btn');
// console.log({ btnElement });
const color = document.querySelector('.color');

btnElement.addEventListener('click', function () {
  const randomNumber = getRandomNumber();
  //   console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
