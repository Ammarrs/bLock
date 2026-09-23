let clockDiv = document.querySelector(".clock");
function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let period = hours > 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours === 0 ? 12 : hours;

  let formattedHours = String(hours).padStart(2, "0");
  let formattedMinutes = String(minutes).padStart(2, "0");
  let formattedSeconds = String(seconds).padStart(2, "0");

  clockDiv.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`;
}

clock();
let interval = setInterval(() => {
  clock();
}, 1000);

// ---------------------------------------------------------

let anchor = document.querySelector("a");
anchor.addEventListener("click", (e) => {
  e.preventDefault();
  anchor.classList.add("fw-bold");
});
