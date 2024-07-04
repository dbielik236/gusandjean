const calDiv = document.getElementById("calendar");
const calTab = document.getElementById("calendar-tab");
const aboutDiv = document.getElementById("about");
const aboutTab = document.getElementById("about-tab");
const contDiv = document.getElementById("contact");
const contTab = document.getElementById("contact-tab");

function scroll(div, tab) {
tab.addEventListener("click", () => {
  div.scrollIntoView();
});
}

scroll(calDiv, calTab)
scroll(aboutDiv, aboutTab)
scroll(contDiv, contTab)