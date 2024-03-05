let signup = document.querySelector("#signup-form")
let clicksign = document.getElementById('click-sign')
let loginform = document.querySelector("#login-form")
let signremove = document.getElementById("sign-remove")
let logintab = document.querySelector("#login-tab")
let popup = document.getElementById("appear")
let popupform = document.querySelector(".popup-form")
let closepopup = document.querySelector(".close")
let masterform = document.querySelector('.form-container')


popup.onclick = function () {
    popupform.classList.add('active')
    loginform.classList.add('active')




}


clicksign.onclick = function () {
    signup.classList.add("active")
    loginform.classList.add("non")
    loginform.classList.remove("active")
    if (signup.classList.contains("active")) {
        signup.style.transform = "translateY(-100%)";
        signremove.innerHTML = 'Sign-up'

    }
}

logintab.onclick = function () {

    loginform.classList.add("active")
    signup.classList.remove("active")
    signup.classList.add("non")

}

closepopup.onclick = function () {
    popupform.classList.remove('active')
    masterform.classList.add('non')
    loginform.classList.remove('active')
    signup.classList.remove('active')

}


function selector(smallImg) {
    var BigImg = document.getElementById("image")
    BigImg.src = smallImg.src
}
