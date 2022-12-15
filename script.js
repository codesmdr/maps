const darkmode = document.querySelector(".darkmode");
const googlemaps = document.querySelector(".googlemaps");

darkmode.addEventListener("click", function (e) {
  e.preventDefault();
  googlemaps.classList.toggle("show");
});
