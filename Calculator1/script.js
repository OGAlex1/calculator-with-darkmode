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

// Dark mode toggle
const switchBtn = document.getElementById("switch");
switchBtn.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});
