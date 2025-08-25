function runStep() {
  instructions.textContent = "Step 4: Start the pump. Click the pump.";
  const pumpBtn = document.getElementById("pump");
  const pumpAnim = document.getElementById("pumpAnim");
  pumpBtn.style.outline = "2px solid red";
  pumpBtn.onclick = () => {
    pumpAnim.src = "Assets/pumpRunning.gif";
    pumpAnim.classList.remove("hidden");
    setTimeout(() => goToStep(5), 2000);
  };
}
runStep();
