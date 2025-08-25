function runStep() {
    instructions.textContent = "Step 6: Open suction and delivery valves. Click both.";
    const suction = document.getElementById("suctionValve");
    const delivery = document.getElementById("deliveryValve");
    suction.style.outline = "2px solid red";
    delivery.style.outline = "2px solid red";
  
    let openedS = false, openedD = false;
  
    suction.onclick = () => {
      suction.style.background = "rgba(0,255,0,0.3)";
      openedS = true;
      if (openedS && openedD) next();
    };
    delivery.onclick = () => {
      delivery.style.background = "rgba(0,255,0,0.3)";
      openedD = true;
      if (openedS && openedD) next();
    };
  
    function next() {
      setTimeout(() => goToStep(7), 1200);
    }
  }
  runStep();
  