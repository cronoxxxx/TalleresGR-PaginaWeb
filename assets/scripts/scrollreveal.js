const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1300,  // Reduced from 2000ms to 1300ms for faster animations
    delay: 170, // Reduced from 300ms to 170ms for faster start
    reset: false, // This makes animations play only once
  })
  
  // Home section
  sr.reveal(".inicio__data")
  sr.reveal(".inicio__card", {
    delay: 300, // Reduced from 600ms to 200ms
    distance: "100px",
    interval: 50, // Reduced from 100ms to 50ms for faster sequence
  })
  
  // About section
  sr.reveal(".nosotros__data, .join__image", {
    origin: "right",
  })
  
  sr.reveal(".nosotros__image, .join__data", {
    origin: "left",
  })
  
  // Services section
  sr.reveal(".servicio__card", {
    interval: 100, // Reduced from 200ms to 100ms for faster sequence
  })
  
  // Other sections
  sr.reveal(".inicio__data, .contacto__data, .servicio__user, .contacto__text, .footer__content")