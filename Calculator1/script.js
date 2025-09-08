const display = document.getElementById("display");
const buttons = document.querySelectorAll(".keys button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "clr") {
      display.value = "";
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }

    display.scrollLeft = display.scrollWidth;
  });
});

// Get the switch button
const switchBtn = document.getElementById("switch");

// Function to apply darkmode based on saved setting
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("darkmode");
  } else {
    document.body.classList.remove("darkmode");
  }
}

// Check saved theme in localStorage on load
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
}

// Handle click on switch
switchBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");

  // Save preference
  if (document.body.classList.contains("darkmode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
