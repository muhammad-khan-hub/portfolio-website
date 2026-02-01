
let menu_icon = document.querySelector(".menu_icon");
let menu_close = document.querySelector(".menu_close");
let page_menu = document.querySelector(".page_menu");
let menu_list_item = document.querySelectorAll(".page_menu ul li");

menu_icon.addEventListener("click", () => {
    page_menu.style.display = "block";
    menu_icon.style.display = "none";
});
menu_close.addEventListener("click", () => {
    page_menu.style.display = "none";
    menu_icon.style.display = "block";

});


