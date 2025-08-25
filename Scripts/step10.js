function runStep() {
    instructions.textContent = "Step 10: Take readings using measuring tank and stopwatch. (Click jug again)";
    const j = document.getElementById("jug");
    j.style.outline = "2px solid red";
    j.onclick = () => {
      j.style.background = "rgba(0,255,255,0.3)";
      setTimeout(() => goToStep(11), 1200);
    };
  }
  runStep();
  