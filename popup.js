// popup.js
document.getElementById("changeColorButton").addEventListener("click", () => {
  const r = document.getElementById("r").value;
  const g = document.getElementById("g").value;
  const b = document.getElementById("b").value;
  const color = `rgb(${r}, ${g}, ${b})`;

  document.body.style.backgroundColor = color;
});
