let header__button = document.querySelector(".js-header__button");
let body = document.querySelector(".js-body");
let heder__buttonDark = document.querySelector(".js-heder__buttonDark");
let header__front = document.querySelector(".js-header__front");
let aside__list = document.querySelector(".js-aside__list");




header__button.addEventListener("click", () => {
    body.classList.toggle("header__button--dark"); 
    header__front.classList.toggle("header__button--dark");
    aside__list.classList.toggle("header__button--dark");
    

    if (body.classList.contains("header__button--dark")) {
        heder__buttonDark.innerText = "Dark";
    }
    else {
        heder__buttonDark.innerText = "White";
    }
});
