function runStep() {
  instructions.textContent = "Step 2: Open the priming cock. Click on it.";
  const cock = document.getElementById("primingCock");
  cock.style.outline = "2px solid red";
  cock.onclick = () => {
    cock.style.background = "rgba(0,255,0,0.3)";
    setTimeout(() => goToStep(3), 1000);
  };
}
runStep();
