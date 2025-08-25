let currentStep = 1;
const instructions = document.getElementById("instructions");

function resetHotspots() {
  document.querySelectorAll(".hotspot").forEach(btn => {
    btn.onclick = null;
    btn.style.outline = "none";
    btn.style.background = "rgba(255,0,0,0.0)";
  });
}

function goToStep(step) {
  currentStep = step;
  loadStep(step);
}

function loadStep(step) {
  resetHotspots();
  let script = document.createElement("script");
  script.src = "js/step" + step + ".js";
  document.body.appendChild(script);
}

loadStep(currentStep);
