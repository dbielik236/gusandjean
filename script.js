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
const contDiv = document.getElementById("contact");
const contTab = document.getElementById("contact-tab");
const bookButton1 = document.getElementById("booking-button-1");
const bookButton2 = document.getElementById("booking-button-2");


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
scroll(contDiv, bookButton1);
scroll(contDiv, bookButton2);



function updateDownloadAttribute() {
  
  const download = document.getElementById("download-picture");
  if (window.innerWidth < 1100) {
      
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll("a > img.photos").forEach(img => {
          const anchor = img.parentNode; // Get the parent <a> element
          const column = anchor.parentNode; // Get the parent .column
  
          column.insertBefore(img, anchor); // Move the <img> out of the <a>
          anchor.remove(); // Remove the <a> wrapper
        });
    });
      download.innerText="";
  }
}

// Run on page load
updateDownloadAttribute();

// Run on window resize
window.addEventListener('resize', updateDownloadAttribute);

window.onload = function() {
  emailjs.init("ODJ1kRiFgD7_SwxD9"); // Replace with your EmailJS Public Key
};

function sendEmail(event) {
  event.preventDefault();

  let form = document.getElementById("contact-form"); // Get the form element
  let responseMessage = document.getElementById("response-message"); // Get the response div

  let templateParams = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
  };

  emailjs.send("service_gj83vl5", "template_h8vmcw1", templateParams)
      .then(response => {
          // Hide the form
          form.style.display = "none";
          
          // Show the success message
          responseMessage.innerHTML = "<p>Thank you for your message! We'll get back with you shortly.</p>";
          responseMessage.style.display = "block"; // Make sure the div is visible
      })
      .catch(error => {
          responseMessage.innerHTML = "<p style='color: red;'>Error sending email. Please try again.</p>";
          responseMessage.style.display = "block";
      });
}