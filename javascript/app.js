let show_icon = document.querySelector('.show');
let hidden_icon = document.querySelector(".hidden");
let password = document.querySelector("#password");
let inputCheck = document.querySelector("#checkbox");

show_icon.addEventListener("click", ()=>{
    show_icon.style.display = "none";
    hidden_icon.style.display = "block";
    password.type = "text";
    password.classList.add("showPassword");
})

hidden_icon.addEventListener("click", ()=>{
    hidden_icon.style.display = "none";
    show_icon.style.display = "block";
    password.type = "password";
})