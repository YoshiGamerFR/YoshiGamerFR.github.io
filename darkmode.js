let darkmode = localStorage.getItem('darkMode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', null)

}

if(darkmode === 'active') enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkMode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})