import './style.css'

const colors = {
  "#476A6F": "Deep Space Sparkle",
  "#519E8A": "Polished Pine",
  "#7EB09B": "Green Sheen",
  "#C5C9A4": "Sage",
  "#ECBEB4": "Baby Pink"
}

const selectColor = document.querySelector("select");
const colorName = document.querySelector("#color-name")

Object.keys(colors).forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.innerText = colors[color];
  selectColor.appendChild(option);
})

selectColor.addEventListener("change", (event) => {
  const newColor = event.target.value;
  document.body.style.backgroundColor = newColor;
  const colorNameText= `${colors[newColor]} | ${newColor}`;
  colorName.innerText = colors[newColor] ? colorNameText : "-";
})





