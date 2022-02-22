window.onload = () => {
  main();
};

function main() {
  // Collecting necessary referances.
  const generateBtn = document.getElementById("generateBtn");
  const colorOne = document.getElementById("colorOne");
  const colorTwo = document.getElementById("colorTwo");
  const colorThree = document.getElementById("colorThree");
  const colorFour = document.getElementById("colorFour");
  const colorFive = document.getElementById("colorFive");
  const copyBtn1st = document.getElementById('copyBtn1st');
  const copyBtn2nd = document.getElementById('copyBtn2nd');
  const copyBtn3rd = document.getElementById('copyBtn3rd');
  const copyBtn4th = document.getElementById('copyBtn4th');
  const copyBtn5th = document.getElementById('copyBtn5th');

  generateBtn.addEventListener("click", function () {
    const paletteColorFirst = firstColor();
    const paletteColorSecond = secondColor();
    const paletteColorThree = thirdColor();
    const paletteColorFour = fourthColor();
    const paletteColorFive = fefthColor();

    colorOne.style.backgroundColor = paletteColorFirst;
    colorTwo.style.backgroundColor = paletteColorSecond;
    colorThree.style.backgroundColor = paletteColorThree;
    colorFour.style.backgroundColor = paletteColorFour;
    colorFive.style.backgroundColor = paletteColorFive;

    // copy the box color
    copyBtn1st.addEventListener('click', function() {
        navigator.clipboard.writeText(paletteColorFirst);
    });

    copyBtn2nd.addEventListener('click', function() {
        navigator.clipboard.writeText(paletteColorSecond);
    });

    copyBtn3rd.addEventListener('click', function() {
        navigator.clipboard.writeText(paletteColorThree);
    });

    copyBtn4th.addEventListener('click', function() {
        navigator.clipboard.writeText(paletteColorFour);
    });

    copyBtn5th.addEventListener('click', function() {
        navigator.clipboard.writeText(paletteColorFirst);
    });

  });
}
// Random color generator.
// Generating first color
function firstColor() {
  // Rendom number for Red.
  const red = Math.floor(Math.random() * 255);

  // Rendom number for Green.
  const green = Math.floor(Math.random() * 255);

  // Rendom number for Blue.
  const blue = Math.floor(Math.random() * 255);

  // Genareted RGB Color.
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
// Generating second color
function secondColor() {
  // Rendom number for Red.
  const red = Math.floor(Math.random() * 255);

  // Rendom number for Green.
  const green = Math.floor(Math.random() * 255);

  // Rendom number for Blue.
  const blue = Math.floor(Math.random() * 255);

  // Genareted RGB Color.
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
function thirdColor() {
  // Rendom number for Red.
  const red = Math.floor(Math.random() * 255);

  // Rendom number for Green.
  const green = Math.floor(Math.random() * 255);

  // Rendom number for Blue.
  const blue = Math.floor(Math.random() * 255);

  // Genareted RGB Color.
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
function fourthColor() {
  // Rendom number for Red.
  const red = Math.floor(Math.random() * 255);

  // Rendom number for Green.
  const green = Math.floor(Math.random() * 255);

  // Rendom number for Blue.
  const blue = Math.floor(Math.random() * 255);

  // Genareted RGB Color.
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
function fefthColor() {
  // Rendom number for Red.
  const red = Math.floor(Math.random() * 255);

  // Rendom number for Green.
  const green = Math.floor(Math.random() * 255);

  // Rendom number for Blue.
  const blue = Math.floor(Math.random() * 255);

  // Genareted RGB Color.
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
