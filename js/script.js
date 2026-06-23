const actionButton = document.getElementById("actionButton");
const resultText = document.getElementById("result");

actionButton.addEventListener("click", () => {
  const now = new Date();
  resultText.textContent = `¡Has hecho clic! Fecha y hora: ${now.toLocaleString()}`;
});
