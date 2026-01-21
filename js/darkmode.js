let darkmode = localStorage.getItem('darkMode')
const themeSwitch = document.getElementById('theme-switch')
const brandLogos = document.getElementsByClassName('fa-brands')

console.log(brandLogos)

const enableDarkmode = () => {
    document.body.classList.add('darkMode')
    Array.from(brandLogos).forEach(element => {
        element.classList.add('darkMode')
    });
    localStorage.setItem('darkMode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkMode')
    Array.from(brandLogos).forEach(element => {
        element.classList.remove('darkMode')
    });
    localStorage.setItem('darkMode', null)

}

if(darkmode === 'active') enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkMode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})