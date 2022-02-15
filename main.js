const Menu = document.querySelector(".menu_button")
const Close = document.querySelector(".close_button")
const Navbar = document.querySelector(".nav_bar")


Menu.addEventListener ("click", ()=>{
    Navbar.classList.add ("open_nav")
})

Close.addEventListener ("click", ()=>{
    Navbar.classList.remove("open_nav")
})


// (scroll down button)

const scrollDown = document.querySelector(".down_button")

scrollDown.addEventListener ("click", ()=>{
    window.scrollTo(0,750)
})

// (back to top button)

const BackToTop = document.querySelector (".go_up_button")

window.addEventListener ("scroll", scrollFunction);

function scrollFunction() {
     if(window.pageYOffset > 200){
         BackToTop.classList.add("show_up_button")
     }
     if(window.pageYOffset < 200){
         BackToTop.classList.remove("show_up_button")
     }
}

BackToTop.addEventListener ("click", ()=>{
    window.scrollTo(0,0)
})

//

const NavListGaleria = document.getElementById ("NavGaleria")

NavListGaleria.addEventListener ('click', ()=>{
    window.scrollTo(0, 1330)
})


//(animation images frente)

const FrenteImage1 = document.querySelector (".frente_image_1")
const FrenteImage2 = document.querySelector (".frente_image_2")
const FrenteImage3 = document.querySelector (".frente_image_3")

window.addEventListener ('scroll', scrollFunction2);

function scrollFunction2 () {
    if(window.pageYOffset > 360){
        FrenteImage1.classList.add("show_up_image")
        FrenteImage2.classList.add("show_up_image")
        FrenteImage3.classList.add("show_up_image")

    }
    if(window.pageYOffset < 360){
        FrenteImage1.classList.remove("show_up_image")
        FrenteImage2.classList.remove("show_up_image")
        FrenteImage3.classList.remove("show_up_image")
    }
}

// (animation images contrafrente)


const ContraFrenteImage1 = document.querySelector (".contrafrente_image_1")
const ContraFrenteImage2 = document.querySelector (".contrafrente_image_2")
const ContraFrenteImage3 = document.querySelector (".contrafrente_image_3")

window.addEventListener ('scroll', scrollFunction3);

function scrollFunction3 () {
    if(window.pageYOffset > 1460){
        ContraFrenteImage1.classList.add("show_up_image")
        ContraFrenteImage2.classList.add("show_up_image")
        ContraFrenteImage3.classList.add("show_up_image")

    }
    if(window.pageYOffset < 1460){
        ContraFrenteImage1.classList.remove("show_up_image")
        ContraFrenteImage2.classList.remove("show_up_image")
        ContraFrenteImage3.classList.remove("show_up_image")
    }
}

// (contact button)

const ContactButton = document.getElementById ("ContactButton")

ContactButton.addEventListener ("click", ()=>{
    window.scrollTo (0, 3320)
})

//go to location

const Location = document.getElementById ("location");

Location.addEventListener ("click", goToLocation())

function goToLocation () {
    window.URL ("google.com")
}

