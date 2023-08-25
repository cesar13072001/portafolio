const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

const navlink = document.querySelectorAll(".nav-menu-link");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("aria-label","Cerrar menú");
    }else{
        navToggle.setAttribute("aria-label","Abrir menú");
    }
});


for(let i = 0; i < navlink.length;i++){
navlink[i].addEventListener("click", () =>{
    navMenu.classList.remove("nav-menu_visible");
});
}
