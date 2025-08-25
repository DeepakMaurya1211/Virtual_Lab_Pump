function runStep() {
  instructions.textContent = "Step 5: Measure input power using wattmeter. Click the gauge.";
  const g = document.getElementById("gauge");
  const needle = document.getElementById("needle");
  g.style.outline = "2px solid red";
  g.onclick = () => {
    needle.classList.remove("hidden");
    needle.style.transform = "rotate(45deg)"; // needle moves
    setTimeout(() => goToStep(6), 1500);
  };
}
runStep();
