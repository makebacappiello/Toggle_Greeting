let morningGreeting = document.getElementById("morning-greeting");

let nightGreeting = document.getElementById("night-greeting");

let button = document.getElementById("greeting-button");
function toggleGreeting() {
  morningGreeting.classList.toggle("hidden");
  nightGreeting.classList.toggle("hidden");
}
button.addEventListener("click", toggleGreeting);
