const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = bootstrap.Collapse.getOrCreateInstance(menuToggle, {toggle: false})
navLinks.forEach((l) => {
    if (menuToggle.classList.contains('show')) {  // only fire on mobile
        l.addEventListener('click', () => { 
            bsCollapse.toggle() 
        })
    }
})



