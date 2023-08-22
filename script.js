//generate a random colour

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

console.log(randomColor());

let intervalId;
const startChangingColour = () => {
  intervalId = setInterval(changeBgColor, 1000);

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColour = () => {
  clearInterval(intervalId);
};

document.querySelector("#start").addEventListener("click", startChangingColour);
document.querySelector("#stop").addEventListener("click", stopChangingColour);
