function runStep() {
    instructions.textContent = "Step 7: Check delivery pressure. Click gauge.";
    const g = document.getElementById("gauge");
    g.style.outline = "2px solid red";
    g.onclick = () => {
      setTimeout(() => goToStep(8), 1000);
    };
  }
  runStep();
  