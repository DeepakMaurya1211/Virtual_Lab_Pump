function runStep() {
    instructions.textContent = "Step 8: Check suction pressure. Click gauge again.";
    const g = document.getElementById("gauge");
    g.style.outline = "2px solid red";
    g.onclick = () => {
      setTimeout(() => goToStep(9), 1000);
    };
  }
  runStep();
  