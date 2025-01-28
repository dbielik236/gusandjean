document.addEventListener('DOMContentLoaded', () => {
  // Function to update navbar attributes based on window size
  const updateNavbarAttributes = () => {
    const navbarNav = document.getElementById('navbarNav');
    if (navbarNav) {
      if (window.innerWidth > 768) {
        navbarNav.removeAttribute('data-bs-toggle');
        navbarNav.removeAttribute('data-bs-target');
      } else {
        navbarNav.setAttribute('data-bs-toggle', 'collapse');
        navbarNav.setAttribute('data-bs-target', '#navbarNav');
      }
    }
  };

  // Run the function on page load
  updateNavbarAttributes();

  // Add event listener for window resize
  window.addEventListener('resize', updateNavbarAttributes);
});

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
