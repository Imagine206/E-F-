const darkModeBtn = document.getElementById('dark-mode');
const icon = document.getElementById("dark-light-icon");


darkModeBtn.addEventListener('click', () => {
    const body = document.querySelector('body');
    const isDarkMode = body.classList.toggle('dark-mode')

    if (isDarkMode){
        icon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    }else {
        icon.innerHTML = `<i class="fa-solid fa-lightbulb"></i>`;
    }

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.style.color = isDarkMode ? 'white' : 'black';
    })
})