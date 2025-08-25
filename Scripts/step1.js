function runStep() {
  instructions.textContent = "Step 1: Fill the sump tank with water. Click the sump tank.";
  const sump = document.getElementById("sumpTank");
  const sumpFill = document.getElementById("sumpFill");
  sump.style.outline = "2px solid red";
  sump.onclick = () => {
    sumpFill.classList.remove("hidden");
    sumpFill.style.opacity = "1";
    setTimeout(() => goToStep(2), 1500);
  };
}
runStep();
