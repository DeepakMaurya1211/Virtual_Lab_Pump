function runStep() {
    instructions.textContent = "Step 3: Shut the discharge valve. Click the delivery valve.";
    const valve = document.getElementById("deliveryValve");
    valve.style.outline = "2px solid red";
    valve.onclick = () => {
      valve.style.background = "rgba(0,0,0,0.3)";
      setTimeout(() => goToStep(4), 1000);
    };
  }
  runStep();
  