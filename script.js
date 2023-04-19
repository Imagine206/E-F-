// const darkModeBtn = document.getElementById("dark-mode")
// const iconLight = document.getElementById("dark-light-icon-light")
// const iconDark = document.getElementById("dark-light-icon-dark")

// darkModeBtn.addEventListener('click', (e) => {

//   const body = document.querySelector('body');
//   const isDarkMode = body.classList.toggle('dark-mode');

//   if (isDarkMode) {
//     iconLight.style.display = "none" // Hide the light icon
//     iconDark.style.display = "inline-block" // Show the dark icon
//   } else {
//     iconLight.style.display = "inline-block" // Show the light icon
//     iconDark.style.display = "none" // Hide the dark icon
//   }

//   const links = document.querySelectorAll("a")
//   links.forEach((link) => {
//     link.style.color = isDarkMode ? "white" : "black"
//   })
// })

const contact = document.querySelector(".contact")
const model = document.querySelector(".container")
const closeContact = document.getElementById("abdul")

contact.addEventListener("click", (e) => {
  model.style.display = "block"
})

model.addEventListener("click", contact)

closeContact.addEventListener("click", (e) => {
  model.style.display = "none"
})
