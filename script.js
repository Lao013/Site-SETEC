const button = document.getElementById("menu-button");
const menu = document.getElementById("nav-menu");

button.addEventListener("click", function(){
    if(menu.style.display === "none"){
        menu.style.display = "block";
    } else{
        menu.style.display = "none";
    }
});