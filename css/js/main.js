let signup = document.querySelector("#signup-form")
let clicksign = document.getElementById('click-sign')
let loginform = document.querySelector("#login-form")
let signremove = document.getElementById("sign-remove")
let logintab = document.querySelector("#login-tab")
let popup = document.getElementById("appear")
let popupform = document.querySelector(".popup-form")
let closepopup = document.querySelector(".close")
let masterform = document.querySelector('.form-container')
let popupColor = document.querySelector('.popup-layer')
let popupColor1 = document.querySelector('.popup-layer1')
let adresspop = document.getElementById('adress-pop')
let popaddress = document.querySelector('.popup-address')
let closeadd = document.querySelector('.closing')
let btnsave = document.querySelector('.btn-save')

let navbar = document.querySelector(".nav-bar");
let header = document.querySelector(".header");

window.onscroll = function () {
    if (window.scrollY >= header.offsetTop + 45) {
        console.log('a7a');
        navbar.style.position = 'sticky'
        navbar.classList.add("anim")
    } else {
        navbar.style.position = 'relative'
        navbar.classList.remove("anim")

    }
}

popup.onclick = function () {
    popupform.classList.add('active')
    loginform.classList.add('active')
    popupColor.style.display = 'block'

}


clicksign.onclick = function () {
    signup.classList.add("active")
    loginform.classList.add("non")
    loginform.classList.remove("active")
    if (signup.classList.contains("active")) {
        signup.style.transform = "translateY(-50%)";
        signremove.innerHTML = 'Sign-up'
        clicksign.style.transform = "translateY(100%)"

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
    popupColor.style.display = 'none'


}


function selector(smallImg) {
    var BigImg = document.getElementById("image")
    BigImg.src = smallImg.src
}


// let increase = document.getElementsByClassName('increase')
// let decrease = document.getElementsByClassName('decrease')
// let number = document.getElementsByClassName('number')

// let count = 1;

// increase.addEventListener('click', function () {
//     count++;
//     number.innerHTML = count;
// })

// decrease.addEventListener('click', function () {
//     count--;
//     number.innerText = count
//     if (count <= 0) {
//         count = 1
//     }
// })

adresspop.onclick = function () {
    popupColor1.style.display = 'block'
    popaddress.style.display = 'block'

}
closeadd.onclick = function () {
    popupColor1.style.display = 'none'
    popaddress.style.display = 'none'

}
btnsave.onclick = function () {
    popaddress.style.display = 'none'
    popupColor1.style.display = 'none'
}



