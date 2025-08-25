function runStep() {
  instructions.textContent = "Step 9: Measure discharge using jug. Click jug.";
  const jug = document.getElementById("jug");
  const jugPour = document.getElementById("jugPour");
  jug.style.outline = "2px solid red";
  jug.onclick = () => {
    jugPour.classList.remove("hidden");
    jugPour.style.transform = "rotate(-30deg)";
    setTimeout(() => goToStep(10), 2000);
  };
}
runStep();
