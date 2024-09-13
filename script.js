const topDiv = document.getElementById("top");
const topTab = document.getElementById("top-tab");
const bottomTopTab = document.getElementById("bottom-top-tab");
const vidDiv = document.getElementById("media");
const vidTab = document.getElementById("media-tab");
const bottomVidTab = document.getElementById("bottom-media-tab");
const calDiv = document.getElementById("calendar");
const calTab = document.getElementById("calendar-tab");
const bottomCalTab = document.getElementById("bottom-calendar-tab");
const aboutDiv = document.getElementById("about");
const aboutTab = document.getElementById("about-tab");
const bottomAboutTab = document.getElementById("bottom-about-tab");
const contDiv = document.getElementById("footer");
const contTab = document.getElementById("contact-tab");


function scroll(div, tab) {
tab.addEventListener("click", () => {
  div.scrollIntoView();
});
}

scroll(calDiv, calTab);
scroll(aboutDiv, aboutTab);
scroll(contDiv, contTab);
scroll(topDiv, topTab);
scroll(vidDiv, vidTab);
scroll(calDiv, bottomCalTab);
scroll(aboutDiv, bottomAboutTab);
scroll(topDiv, bottomTopTab);
scroll(vidDiv, bottomVidTab);