
const blurHeader = () =>{
 
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur__header') 
                       : header.classList.remove('blur__header')
}
window.addEventListener("scroll", blurHeader)