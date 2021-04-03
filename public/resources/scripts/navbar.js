const toggleButton = document.getElementById("nav-icon")
const navbarLinks = document.getElementsByClassName("nav-mobile")[0]

toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
})
