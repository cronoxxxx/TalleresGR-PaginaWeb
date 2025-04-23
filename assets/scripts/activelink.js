const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
  const scrollY = window.scrollY
  const isMobile = window.innerWidth <= 767 // Check if we're on a mobile device

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionId = current.getAttribute("id")
    const sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]")

    // Add extra offset for contact section on mobile
    let sectionTop
    if (isMobile && sectionId === "contacto") {
      // Add more offset for the contact section on mobile (adjust the value as needed)
      sectionTop = current.offsetTop -150
    } else {
      sectionTop = current.offsetTop - 40
    }

    // Original behavior: section is active when scrolled within its bounds
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // Remove active class from all links first to ensure only one is active
      document.querySelectorAll(".nav__menu a").forEach((link) => {
        link.classList.remove("active-link")
      })

      // Add active class to current section
      if (sectionsClass) {
        sectionsClass.classList.add("active-link")
      }
    }
  })
}

// Update active link on scroll
window.addEventListener("scroll", scrollActive)
