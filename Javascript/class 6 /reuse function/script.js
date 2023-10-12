function calculateReactangleArea(width, height) {
  return width * height;
}

function calculateArea() {
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;
  const area = calculateReactangleArea(width, height);
  document.getElementById("result").textContent = `Area is : ${area}`;
}
