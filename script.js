function updateTime() {
var currentTime = new Date().toLocaleString();
var timeText = document.querySelector("#clock");
timeText.innerHTML = currentTime; }
setInterval(updateTime, 1000)

var welcomeScreen = document.querySelector("#welcome")
function closeWindow(element) {
  element.style.display = "none"
}
function openWindow(element) {
  element.style.display = "flex"
}

var welcomeScreenClose = document.querySelector("#welcomeclose")
welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});