const loadMoreButton = document.getElementById("loadMoreButton")

if (loadMoreButton) {
  loadMoreButton.addEventListener("click", function () {
    const hiddenCards = document.getElementsByClassName("hidden")

    // Show all hidden cards
    Array.from(hiddenCards).forEach((card) => {
      card.classList.add("show__content-cards")
      card.classList.remove("hidden")
    })

    // Hide the button
    this.style.display = "none"

    // Add additional space after cards on mobile
    if (window.innerWidth <= 767) {
      // Create additional space after cards
      const spacer = document.createElement("div")
      spacer.className = "mobile-spacer"
      spacer.style.height = "100px" // Adjust height as needed

      // Insert spacer after service container
      const servicioContainer = document.getElementById("servicioContainer")
      if (servicioContainer && servicioContainer.parentNode) {
        servicioContainer.parentNode.insertBefore(spacer, servicioContainer.nextSibling)
      }

      // Adjust margin of the button container (which is now hidden but still takes up space)
      const btnContainer = document.querySelector(".contactobtn__width")
      if (btnContainer) {
        btnContainer.style.marginTop = "-50px"
      }
    }
  })
}
